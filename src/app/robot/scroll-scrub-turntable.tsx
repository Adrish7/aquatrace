// app/robot/ScrollScrubShowcase.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type FeatureCard = { tag: string; title: string; body: string };

type Scene = {
  key: string;
  basePath: string;     // "/robot_full/scene1"
  frameCount: number;   // 72
  scrollVh: number;     // how much scroll space this scene gets within the shared timeline
  enterProgress?: number; // Level 2: start scene slightly progressed (0..1)
  introTitle: string;
  introBody: string;
  featureCards: [FeatureCard, FeatureCard, FeatureCard];
};

type Props = {
  scenes: Scene[];
  scrollHeightVh?: number; // fallback; if omitted, we sum scene.scrollVh + some padding
  vignette?: boolean;
};

function clamp01(x: number) {
  return Math.max(0, Math.min(1, x));
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

function frameSrc(basePath: string, i: number) {
  return `${basePath}/frame_${String(i + 1).padStart(4, "0")}.webp`;
}

export default function ScrollScrubShowcase({
  scenes,
  scrollHeightVh,
  vignette = true,
}: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Global progress in the whole shared timeline
  const [globalP, setGlobalP] = useState(0);
  const globalPRef = useRef(0);

  // Lazy-loaded image caches per scene
  const imagesBySceneRef = useRef<Array<Array<HTMLImageElement | undefined>>>([]);
  const firstGoodBySceneRef = useRef<Array<number | null>>([]);
  const loadingSceneRef = useRef<Record<number, boolean>>({});

  // Which scenes have at least 1 frame successfully loaded
  const [sceneReady, setSceneReady] = useState<Record<number, boolean>>({});

  // Compute per-scene timeline ranges based on scrollVh weights
  const ranges = useMemo(() => {
    const total = scenes.reduce((acc, s) => acc + (s.scrollVh || 0), 0) || 1;
    let cur = 0;
    const r = scenes.map((s) => {
      const span = (s.scrollVh || 0) / total;
      const start = cur;
      const end = cur + span;
      cur = end;
      return { start, end };
    });
    // force last end = 1
    if (r.length) r[r.length - 1].end = 1;
    return r;
  }, [scenes]);

  const totalHeightVh = useMemo(() => {
    if (scrollHeightVh != null) return scrollHeightVh;
    // sum scene scrollVh + a little breathing room
    const base = scenes.reduce((acc, s) => acc + (s.scrollVh || 0), 0);
    return Math.max(260, base + 40);
  }, [scrollHeightVh, scenes]);

  // Crossfade band near boundary (in local progress space)
  // 0.10 means last 10% of scene blends into next
  const transitionBand = 0.12;

  const getSceneAtGlobalP = (p: number) => {
    const idx =
      ranges.findIndex((r) => p >= r.start && p < r.end) !== -1
        ? ranges.findIndex((r) => p >= r.start && p < r.end)
        : ranges.length - 1;

    const r = ranges[Math.max(0, idx)];
    const denom = Math.max(1e-6, r.end - r.start);
    let local = (p - r.start) / denom;
    local = clamp01(local);

    // Level 2 "momentum": start slightly progressed
    const enter = clamp01(scenes[idx]?.enterProgress ?? 0);
    local = clamp01(enter + (1 - enter) * local);

    return { idx, local };
  };

  const ensureSceneArrays = () => {
    if (!imagesBySceneRef.current.length) {
      imagesBySceneRef.current = scenes.map((s) => new Array(s.frameCount));
      firstGoodBySceneRef.current = scenes.map(() => null);
    }
  };

  const preloadScene = async (sceneIdx: number) => {
    ensureSceneArrays();
    if (loadingSceneRef.current[sceneIdx]) return;
    if (sceneReady[sceneIdx]) return;

    loadingSceneRef.current[sceneIdx] = true;

    const scene = scenes[sceneIdx];
    const images = imagesBySceneRef.current[sceneIdx];
    const failures: string[] = [];

    await Promise.all(
      Array.from({ length: scene.frameCount }, (_, i) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          const src = frameSrc(scene.basePath, i);
          img.decoding = "async";
          img.loading = "eager";
          img.src = src;

          img.onload = () => {
            images[i] = img;
            if (firstGoodBySceneRef.current[sceneIdx] === null) {
              firstGoodBySceneRef.current[sceneIdx] = i;
            }
            resolve();
          };

          img.onerror = () => {
            failures.push(src);
            resolve();
          };
        });
      })
    );

    if (failures.length === scene.frameCount) {
      console.error(
        `[ScrollScrubShowcase] Scene ${sceneIdx} failed to load all frames. Example:`,
        failures.slice(0, 10)
      );
      setSceneReady((prev) => ({ ...prev, [sceneIdx]: false }));
    } else {
      if (failures.length) {
        console.warn(
          `[ScrollScrubShowcase] Scene ${sceneIdx} had ${failures.length} missing frames. Example:`,
          failures.slice(0, 10)
        );
      }
      setSceneReady((prev) => ({ ...prev, [sceneIdx]: true }));
    }

    loadingSceneRef.current[sceneIdx] = false;
  };

  const pickClosestLoadedIndex = (sceneIdx: number, desiredIdx: number) => {
    const scene = scenes[sceneIdx];
    const images = imagesBySceneRef.current[sceneIdx];
    const direct = images?.[desiredIdx];
    if (direct?.complete && (direct.naturalWidth ?? 0) > 0) return desiredIdx;

    for (let delta = 1; delta < scene.frameCount; delta++) {
      const left = desiredIdx - delta;
      const right = desiredIdx + delta;
      if (left >= 0) {
        const imgL = images[left];
        if (imgL?.complete && (imgL.naturalWidth ?? 0) > 0) return left;
      }
      if (right < scene.frameCount) {
        const imgR = images[right];
        if (imgR?.complete && (imgR.naturalWidth ?? 0) > 0) return right;
      }
    }
    return firstGoodBySceneRef.current[sceneIdx] ?? 0;
  };

  useEffect(() => {
    if (!mounted) return;

    ensureSceneArrays();

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const getGlobalProgress = () => {
      const section = sectionRef.current!;
      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;

      const total = rect.height - viewH;
      const scrolled = -rect.top;
      return clamp01(total <= 0 ? 0 : scrolled / total);
    };

    const drawImageCover = (img: HTMLImageElement, alpha: number) => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      const scale = Math.max(w / iw, h / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = (w - dw) / 2;
      const dy = (h - dh) / 2;

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.drawImage(img, dx, dy, dw, dh);
      ctx.restore();
    };

    let raf = 0;

    const tick = () => {
      const p = getGlobalProgress();
      globalPRef.current = p;
      setGlobalP(p);

      const { idx, local } = getSceneAtGlobalP(p);

      // Always try to preload current + next scene
      preloadScene(idx);
      if (idx + 1 < scenes.length) preloadScene(idx + 1);

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // If current scene not ready yet, show placeholder text
      if (!sceneReady[idx]) {
        ctx.save();
        ctx.globalAlpha = 0.9;
        ctx.fillStyle = "rgba(255,255,255,0.85)";
        ctx.font =
          "16px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial";
        ctx.fillText("Loading frames…", 20, 34);
        ctx.restore();
        raf = requestAnimationFrame(tick);
        return;
      }

      // Determine crossfade into next scene near the end
      const fadeT = smoothstep(1 - transitionBand, 1, local); // 0..1 near end
      const hasNext = idx + 1 < scenes.length && sceneReady[idx + 1];

      // Draw current
      const desiredA = Math.round(local * (scenes[idx].frameCount - 1));
      const chosenA = pickClosestLoadedIndex(idx, desiredA);
      const imgA = imagesBySceneRef.current[idx][chosenA];

      if (imgA && imgA.naturalWidth > 0) {
        drawImageCover(imgA, hasNext ? 1 - fadeT : 1);
      }

      // Draw next blended in
      if (hasNext && fadeT > 0) {
        const enterB = clamp01(scenes[idx + 1].enterProgress ?? 0);
      
        // ✅ IMPORTANT: do NOT advance the next scene during the crossfade.
        // Otherwise it "plays" quickly, then snaps back when the scene actually starts.
        const localB = enterB;
      
        const desiredB = Math.round(localB * (scenes[idx + 1].frameCount - 1));
        const chosenB = pickClosestLoadedIndex(idx + 1, desiredB);
        const imgB = imagesBySceneRef.current[idx + 1][chosenB];
      
        if (imgB && imgB.naturalWidth > 0) {
          drawImageCover(imgB, fadeT);
        }
      }
      

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("resize", resize, { passive: true });
    resize();

    // kick off preloading first scene immediately
    preloadScene(0).then(() => {
      tick();
    });

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, scenes, sceneReady]);

  // UI uses current scene + local progress (not global)
  const { idx: activeIdx, local: activeLocal } = useMemo(
    () => getSceneAtGlobalP(globalP),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [globalP, ranges]
  );

  const activeScene = scenes[activeIdx];

  // Intro->features transition inside a scene
  const introToFeatures = smoothstep(0.06, 0.14, activeLocal);
  const bottomOpacity = 1 - introToFeatures;
  const featuresOpacity = introToFeatures;

  // Also fade UI during crossfade into next scene
  const uiFadeOut = smoothstep(1 - transitionBand, 1, activeLocal);
  const uiOpacity = 1 - uiFadeOut;

  // Diagram lines (point near center, do not touch center)
  const CENTER_X = 500;
  const CENTER_Y = 500;
  const GAP = 60;

  const shortenToCenter = (x1: number, y1: number, x2: number, y2: number, gap: number) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    const ux = dx / len;
    const uy = dy / len;
    return { x2: x2 - ux * gap, y2: y2 - uy * gap };
  };

  const leftAnchor = { x: 250, y: 420 };
  const topAnchor = { x: 540, y: 230 };
  const rightAnchor = { x: 750, y: 540 };

  const leftEnd = shortenToCenter(leftAnchor.x, leftAnchor.y, CENTER_X, CENTER_Y, GAP);
  const topEnd = shortenToCenter(topAnchor.x, topAnchor.y, CENTER_X, CENTER_Y, GAP);
  const rightEnd = shortenToCenter(rightAnchor.x, rightAnchor.y, CENTER_X, CENTER_Y, GAP);

  // SSR-safe shell
  if (!mounted) {
    return (
      <section style={{ height: `${totalHeightVh}vh`, position: "relative" }}>
        <div style={{ position: "sticky", top: 0, height: "100vh", width: "100%", overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              top: 18,
              left: 18,
              padding: "10px 12px",
              borderRadius: 12,
              background: "rgba(0,0,0,0.55)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "white",
              fontSize: 14,
            }}
          >
            Loading…
          </div>
        </div>
      </section>
    );
  }

  const [leftCard, topCard, rightCard] = activeScene.featureCards;

  return (
    <section ref={sectionRef} style={{ height: `${totalHeightVh}vh`, position: "relative" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", width: "100%", overflow: "hidden" }}>
        <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />

        {vignette && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(80% 60% at 50% 40%, rgba(0,0,0,0.05), rgba(0,0,0,0.65))",
            }}
          />
        )}

        {/* UI layer */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: uiOpacity,
            transition: "opacity 180ms linear",
            color: "white",
            pointerEvents: "none",
          }}
        >
          {/* Bottom intro box */}
          <div
            style={{
              position: "absolute",
              left: 20,
              right: 20,
              bottom: 28,
              maxWidth: 820,
              margin: "0 auto",
              padding: "18px 18px",
              borderRadius: 16,
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.12)",
              opacity: bottomOpacity,
              transform: `translateY(${Math.round(10 * (1 - bottomOpacity))}px)`,
              transition: "opacity 420ms ease, transform 420ms ease",
            }}
          >
            <div style={{ fontSize: 14, opacity: 0.7, marginBottom: 6 }}>
              Scene {activeIdx + 1}/{scenes.length} • {Math.round(activeLocal * 100)}%
            </div>
            <div style={{ fontSize: 22, fontWeight: 650, marginBottom: 8 }}>
              {activeScene.introTitle}
            </div>
            <div style={{ fontSize: 16, opacity: 0.85, lineHeight: 1.5 }}>
              {activeScene.introBody}
            </div>
          </div>

          {/* Feature callouts */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: featuresOpacity,
              transition: "opacity 420ms ease",
            }}
          >
            {/* Diagram lines */}
            <svg
              viewBox="0 0 1000 1000"
              preserveAspectRatio="none"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
              }}
            >
              <line x1={leftAnchor.x} y1={leftAnchor.y} x2={leftEnd.x2} y2={leftEnd.y2} stroke="rgba(255,255,255,0.78)" strokeWidth={2} strokeLinecap="round" />
              <line x1={topAnchor.x} y1={topAnchor.y} x2={topEnd.x2} y2={topEnd.y2} stroke="rgba(255,255,255,0.78)" strokeWidth={2} strokeLinecap="round" />
              <line x1={rightAnchor.x} y1={rightAnchor.y} x2={rightEnd.x2} y2={rightEnd.y2} stroke="rgba(255,255,255,0.78)" strokeWidth={2} strokeLinecap="round" />
              <circle cx={leftEnd.x2} cy={leftEnd.y2} r={5.5} fill="rgba(255,255,255,0.92)" />
              <circle cx={topEnd.x2} cy={topEnd.y2} r={5.5} fill="rgba(255,255,255,0.92)" />
              <circle cx={rightEnd.x2} cy={rightEnd.y2} r={5.5} fill="rgba(255,255,255,0.92)" />
            </svg>

            {/* LEFT box */}
            <div
              style={{
                position: "absolute",
                left: 24,
                top: "42vh",
                width: "min(360px, calc(100vw - 48px))",
                padding: "16px 16px",
                borderRadius: 16,
                background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.12)",
                transform: `translateX(${Math.round(-10 * (1 - featuresOpacity))}px)`,
                transition: "transform 420ms ease",
              }}
            >
              <div style={{ fontSize: 12, opacity: 0.65, marginBottom: 6 }}>{leftCard.tag}</div>
              <div style={{ fontSize: 20, fontWeight: 650, marginBottom: 8 }}>{leftCard.title}</div>
              <div style={{ fontSize: 15, opacity: 0.85, lineHeight: 1.5 }}>{leftCard.body}</div>
            </div>

            {/* TOP box */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 24,
                transform: `translate(-50%, ${Math.round(-10 * (1 - featuresOpacity))}px)`,
                width: "min(520px, calc(100vw - 48px))",
                padding: "16px 16px",
                borderRadius: 16,
                background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.12)",
                transition: "transform 420ms ease",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 12, opacity: 0.65, marginBottom: 6 }}>{topCard.tag}</div>
              <div style={{ fontSize: 20, fontWeight: 650, marginBottom: 8 }}>{topCard.title}</div>
              <div style={{ fontSize: 15, opacity: 0.85, lineHeight: 1.5 }}>{topCard.body}</div>
            </div>

            {/* RIGHT box */}
            <div
              style={{
                position: "absolute",
                right: 24,
                top: "54vh",
                width: "min(360px, calc(100vw - 48px))",
                padding: "16px 16px",
                borderRadius: 16,
                background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.12)",
                transform: `translateX(${Math.round(10 * (1 - featuresOpacity))}px)`,
                transition: "transform 420ms ease",
                textAlign: "left",
              }}
            >
              <div style={{ fontSize: 12, opacity: 0.65, marginBottom: 6 }}>{rightCard.tag}</div>
              <div style={{ fontSize: 20, fontWeight: 650, marginBottom: 8 }}>{rightCard.title}</div>
              <div style={{ fontSize: 15, opacity: 0.85, lineHeight: 1.5 }}>{rightCard.body}</div>
            </div>
          </div>
        </div>

        {/* Small loading chip */}
        {!sceneReady[activeIdx] && (
          <div
            style={{
              position: "absolute",
              top: 18,
              left: 18,
              padding: "10px 12px",
              borderRadius: 12,
              background: "rgba(0,0,0,0.55)",
              border: "1px solid rgba(255,255,255,0.12)",
              fontSize: 14,
              opacity: 0.9,
              color: "white",
            }}
          >
            Loading frames…
          </div>
        )}
      </div>
    </section>
  );
}
