// app/robot/scroll-scrub-turntable.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Scene = {
  key: string;
  basePath: string;
  frameCount: number;
  scrollVh: number;
  enterProgress?: number; // 0..1
};

type OverlayBox = {
  id: string;
  x: number;
  y: number;
  w?: number;
  align?: "left" | "center" | "right";
  tag?: string;
  title: string;
  body?: string;

  // ✅ NEW
  images?: Array<{
    src: string;      // e.g. "/figures/fig4_noise_vs_defect.png"
    alt?: string;
  }>;
};


type OverlayPoint = {
  id: string;
  x: number; // 0..1 (viewport normalized)
  y: number; // 0..1
  rPx?: number; // dot radius in px
};

type OverlayLink = {
  boxId: string;
  pointId: string;
  gapPx?: number; // stop short of point
};

export type Overlay = {
  id: string;
  sceneKey: string;
  start: number;
  end: number;
  fade?: number;
  boxes: OverlayBox[];
  points?: OverlayPoint[];
  links?: OverlayLink[];

  // ✅ NEW: keep showing after end (within the same scene)
  sticky?: "end";
};


type Props = {
  scenes: Scene[];
  overlays?: Overlay[];
  scrollHeightVh?: number;
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

function toSvgX(x01: number) {
  return x01 * 1000;
}
function toSvgY(y01: number) {
  return y01 * 1000;
}

export default function ScrollScrubShowcase({
  scenes,
  overlays = [],
  scrollHeightVh,
  vignette = true,
}: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [globalP, setGlobalP] = useState(0);
  const globalPRef = useRef(0);

  const imagesBySceneRef = useRef<Array<Array<HTMLImageElement | undefined>>>([]);
  const firstGoodBySceneRef = useRef<Array<number | null>>([]);
  const loadingSceneRef = useRef<Record<number, boolean>>({});
  const [sceneReady, setSceneReady] = useState<Record<number, boolean>>({});

  // Track viewport for converting gapPx -> svg units
  const [vp, setVp] = useState({ w: 1, h: 1 });

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
    if (r.length) r[r.length - 1].end = 1;
    return r;
  }, [scenes]);

  const totalHeightVh = useMemo(() => {
    if (scrollHeightVh != null) return scrollHeightVh;
    const base = scenes.reduce((acc, s) => acc + (s.scrollVh || 0), 0);
    return Math.max(260, base + 40);
  }, [scrollHeightVh, scenes]);

  const transitionBand = 0.12;

  const getSceneAtGlobalP = (p: number) => {
    const found = ranges.findIndex((r) => p >= r.start && p < r.end);
    const idx = found !== -1 ? found : ranges.length - 1;

    const r = ranges[Math.max(0, idx)];
    const denom = Math.max(1e-6, r.end - r.start);
    let local = (p - r.start) / denom;
    local = clamp01(local);

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

      setVp({ w: Math.max(1, rect.width), h: Math.max(1, rect.height) });
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

      preloadScene(idx);
      if (idx + 1 < scenes.length) preloadScene(idx + 1);

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

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

      const fadeT = smoothstep(1 - transitionBand, 1, local);
      const hasNext = idx + 1 < scenes.length && sceneReady[idx + 1];

      const desiredA = Math.round(local * (scenes[idx].frameCount - 1));
      const chosenA = pickClosestLoadedIndex(idx, desiredA);
      const imgA = imagesBySceneRef.current[idx][chosenA];
      if (imgA && imgA.naturalWidth > 0) {
        drawImageCover(imgA, hasNext ? 1 - fadeT : 1);
      }

      if (hasNext && fadeT > 0) {
        const enterB = clamp01(scenes[idx + 1].enterProgress ?? 0);
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

    preloadScene(0).then(() => tick());

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, scenes, sceneReady]);

  // Current active scene + local progress (for overlays)
  const { idx: activeIdx, local: activeLocal } = useMemo(
    () => getSceneAtGlobalP(globalP),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [globalP, ranges]
  );
  const activeSceneKey = scenes[activeIdx]?.key;

  // Fade UI near scene crossfade end
  // Fade UI near scene crossfade end (but NOT on last scene)
  const isLastScene = activeIdx === scenes.length - 1;
  const uiFadeOut = isLastScene ? 0 : smoothstep(1 - transitionBand, 1, activeLocal);
  const uiOpacity = 1 - uiFadeOut;


  // ONE start textbox only (global)
  const startBoxOpacity = 1 - smoothstep(0.02, 0.06, globalP);

  // Helpers for overlay alpha (fade in/out within overlay window)
  const overlayAlpha = (start: number, end: number, fade: number, p: number) => {
    const f = Math.max(0.0001, fade);
    const aIn = smoothstep(start, start + f, p);
    const aOut = 1 - smoothstep(end - f, end, p);
    return clamp01(aIn * aOut);
  };

  const overlayAlphaStickyEnd = (start: number, fade: number, p: number) => {
    const f = Math.max(0.0001, fade);
    // fades in like normal, then stays at 1
    return clamp01(smoothstep(start, start + f, p));
  };
  

  // Active overlays for current scene
  const activeOverlays = useMemo(() => {
    const isLastScene = activeIdx === scenes.length - 1;

    return overlays
      .filter((o) => o.sceneKey === activeSceneKey)
      .map((o) => {
        const fade = o.fade ?? 0.03;

        const a =
          isLastScene && o.sticky === "end"
            ? overlayAlphaStickyEnd(o.start, fade, activeLocal)
            : overlayAlpha(o.start, o.end, fade, activeLocal);

        return { overlay: o, alpha: a };
      })
      .filter((x) => x.alpha > 0.001);
  }, [overlays, activeSceneKey, activeLocal, activeIdx, scenes.length]);


  // Convert gapPx to svg units (viewBox 1000x1000) based on min viewport dimension
  const gapPxToSvg = (gapPx: number) => {
    const minDim = Math.max(1, Math.min(vp.w, vp.h));
    return (gapPx / minDim) * 1000;
  };

  const shortenLine = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    gapSvg: number
  ) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    const ux = dx / len;
    const uy = dy / len;
    return { x2: x2 - ux * gapSvg, y2: y2 - uy * gapSvg };
  };

  // Alt+Click coordinate picker (copy normalized coords)
  const onOverlayClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    if (!e.altKey) return;
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = clamp01((e.clientX - rect.left) / rect.width);
    const y = clamp01((e.clientY - rect.top) / rect.height);
    const payload = `{ x: ${x.toFixed(4)}, y: ${y.toFixed(4)} }`;
    console.log("[OverlayPicker]", payload, {
      sceneKey: activeSceneKey,
      local: Number(activeLocal.toFixed(4)),
      global: Number(globalP.toFixed(4)),
    });
    try {
      await navigator.clipboard.writeText(payload);
    } catch {
      // ignore clipboard failures
    }
  };

  if (!mounted) {
    return (
      <section style={{ height: `${totalHeightVh}vh`, position: "relative" }}>
        <div style={{ position: "sticky", top: 0, height: "100vh", width: "100%", overflow: "hidden" }} />
      </section>
    );
  }

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
              background: "radial-gradient(80% 60% at 50% 40%, rgba(0,0,0,0.05), rgba(0,0,0,0.65))",
            }}
          />
        )}

        {/* UI layer (clickable for Alt+Click coordinate picking) */}
        <div
          onClick={onOverlayClick}
          style={{
            position: "absolute",
            inset: 0,
            opacity: uiOpacity,
            transition: "opacity 180ms linear",
            color: "white",
            pointerEvents: "auto",
          }}
        >
          {/* ONE start textbox */}
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
              opacity: startBoxOpacity,
              transform: `translateY(${Math.round(10 * (1 - startBoxOpacity))}px)`,
              transition: "opacity 220ms linear, transform 220ms ease",
              pointerEvents: startBoxOpacity > 0.05 ? "auto" : "none",
            }}
          >
            <div style={{ fontSize: 14, opacity: 0.7, marginBottom: 6 }}>
              Scroll to explore • (Alt+Click to copy coords)
            </div>
            <div style={{ fontSize: 22, fontWeight: 650, marginBottom: 8 }}>
              RoverTracer in-pipe crack repair
            </div>
            <div style={{ fontSize: 16, opacity: 0.85, lineHeight: 1.5 }}>
              We’ll now place callouts per segment using an overlay timeline.
            </div>
          </div>

          {/* Overlays */}
          {activeOverlays.map(({ overlay, alpha }) => {
            const points = overlay.points ?? [];
            const links = overlay.links ?? [];

            // Build lookup maps
            const boxById = new Map(overlay.boxes.map((b) => [b.id, b]));
            const pointById = new Map(points.map((p) => [p.id, p]));

            return (
              <div
                key={overlay.id}
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: alpha,
                  transition: "opacity 120ms linear",
                  pointerEvents: alpha > 0.05 ? "auto" : "none",
                }}
              >
                {/* Lines layer */}
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
                  {links.map((ln, i) => {
                    const b = boxById.get(ln.boxId);
                    const p = pointById.get(ln.pointId);
                    if (!b || !p) return null;

                    const x1 = toSvgX(b.x);
                    const y1 = toSvgY(b.y);
                    const x2 = toSvgX(p.x);
                    const y2 = toSvgY(p.y);

                    const gapSvg = gapPxToSvg(ln.gapPx ?? 26);
                    const end = shortenLine(x1, y1, x2, y2, gapSvg);

                    return (
                      <g key={`${overlay.id}-ln-${i}`}>
                        <line
                          x1={x1}
                          y1={y1}
                          x2={end.x2}
                          y2={end.y2}
                          stroke="rgba(255,255,255,0.78)"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </g>
                    );
                  })}

                  {/* Points (dots) */}
                  {points.map((p) => {
                    const rSvg = gapPxToSvg(p.rPx ?? 6);
                    return (
                      <circle
                        key={`${overlay.id}-pt-${p.id}`}
                        cx={toSvgX(p.x)}
                        cy={toSvgY(p.y)}
                        r={rSvg}
                        fill="rgba(255,255,255,0.92)"
                      />
                    );
                  })}
                </svg>

                {/* Boxes */}
                {overlay.boxes.map((b) => {
                  const align = b.align ?? "left";
                  const widthCss =
                    b.w != null
                      ? `calc(${(b.w * 100).toFixed(2)}%)`
                      : "min(360px, calc(100% - 48px))";
                  // anchor box at (x,y) using transform
                  // align affects the anchor point
                  const tx =
                    align === "center" ? "-50%" : align === "right" ? "-100%" : "0%";

                  return (
                    <div
                      key={`${overlay.id}-box-${b.id}`}
                      style={{
                        position: "absolute",
                        left: `${b.x * 100}%`,
                        top: `${b.y * 100}%`,
                        transform: `translate(${tx}, -50%)`,
                        width: widthCss,
                        padding: "16px 16px",
                        borderRadius: 16,
                        background: "rgba(0,0,0,0.55)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      {b.tag && (
                        <div style={{ fontSize: 12, opacity: 0.65, marginBottom: 6 }}>
                          {b.tag}
                        </div>
                      )}
                      <div style={{ fontSize: 20, fontWeight: 650, marginBottom: b.body ? 8 : 0 }}>
                        {b.title}
                      </div>
                      {(b.body || (b.images && b.images.length)) && (
                        <div
                          style={{
                            display: "flex",
                            gap: 14,
                            alignItems: "flex-start",
                          }}
                        >
                          {/* LEFT: text */}
                          {b.body && (
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div
                                style={{
                                  fontSize: 15,
                                  opacity: 0.85,
                                  lineHeight: 1.5,
                                  whiteSpace: "pre-line",
                                }}
                                dangerouslySetInnerHTML={{
                                  __html: b.body
                                    .trim()
                                    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"),
                                }}
                              />
                            </div>
                          )}

                          {/* RIGHT: images stacked */}
                          {b.images && b.images.length > 0 && (
                            <div
                              style={{
                                width: 460,          // tweak
                                maxWidth: "42%",     // tweak
                                display: "flex",
                                flexDirection: "column",
                                gap: 10,
                                flexShrink: 0,
                              }}
                            >
                              {b.images.map((im, idx) => (
                                <img
                                  key={`${b.id}-img-${idx}`}
                                  src={im.src}
                                  alt={im.alt ?? ""}
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: 10,
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    background: "rgba(255,255,255,0.03)",
                                  }}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      )}



                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Loading chip */}
        {(() => {
          const { idx } = getSceneAtGlobalP(globalPRef.current);
          return !sceneReady[idx] ? (
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
                pointerEvents: "none",
              }}
            >
              Loading frames…
            </div>
          ) : null;
        })()}
      </div>
    </section>
  );
}
