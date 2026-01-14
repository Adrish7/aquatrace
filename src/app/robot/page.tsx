// app/robot/page.tsx
import ScrollScrubShowcase from "@/app/robot/scroll-scrub-turntable";

export default function Page() {
  return (
    <main style={{ background: "#0b0b0c", color: "white" }}>
      <section style={{ padding: "72px 20px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <h1 style={{ fontSize: 44, lineHeight: 1.05, margin: 0 }}>
          Pipe Crack Repair Robot
        </h1>
        <p style={{ maxWidth: 820, opacity: 0.8, fontSize: 18, marginTop: 14 }}>
          Scroll to explore the full system (single-canvas Apple-style scrub).
        </p>
      </section>

      <ScrollScrubShowcase
        scrollHeightVh={420}
        vignette
        scenes={[
          { key: "scene1", basePath: "/robot_full/scene1", frameCount: 178, scrollVh: 110, enterProgress: 0.0 },
          { key: "scene2", basePath: "/robot_full/scene2", frameCount: 178, scrollVh: 110, enterProgress: 0.08 },
          { key: "scene3", basePath: "/robot_full/scene3", frameCount: 151, scrollVh: 100, enterProgress: 0.08 },
          { key: "scene4", basePath: "/robot_full/scene4", frameCount: 245, scrollVh: 100, enterProgress: 0.08 },
        ]}
        overlays={[
          // Example (delete later). Shows how to do segments inside a scene.
          {
            id: "s1_scrubber_callout",
            sceneKey: "scene1",
            start: 0.00,
            end: 0.15,
            fade: 0.03,
            boxes: [
              {
                id: "b1",
                x: 0.9420, 
                y: 0.8605,
                w: 0.26,
                tag: "balls",
                title: "nada",
                body: "Removes residue + biofilm for reliable adhesion.",
              },
            ],
            points: [{ id: "p1", x: 0.55, y: 0.55 }],
            links: [{ boxId: "b1", pointId: "p1", gapPx: 26 }],
          },
          {
            id: "s2_scrubber_callout",
            sceneKey: "scene1",
            start: 0.00,
            end: 0.10,
            fade: 0.03,
            boxes: [
              {
                id: "b1",
                x: 0.14,
                y: 0.58,
                w: 0.26,
                tag: "Mechanism",
                title: "Scrubber",
                body: "Removes residue + biofilm for reliable adhesion.",
              },
            ],
            points: [{ id: "p1", x: 0.55, y: 0.55 }],
            links: [{ boxId: "b1", pointId: "p1", gapPx: 26 }],
          }
        ]}
      />

      <section style={{ padding: "70px 20px 110px", maxWidth: 1100, margin: "0 auto", opacity: 0.85 }}>
        <h2 style={{ fontSize: 28, margin: "0 0 12px" }}>Tuning</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Hold <code>Alt</code> and click to copy normalized coordinates for placing boxes/points.</li>
          <li>Overlays are keyed by <code>sceneKey</code> and <code>start/end</code> (local scene progress 0..1).</li>
        </ul>
      </section>
    </main>
  );
}
