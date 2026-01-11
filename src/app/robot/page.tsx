// app/robot/page.tsx
import ScrollScrubShowcase from "@/app/robot/scroll-scrub-turntable";

export default function Page() {
  return (
    <main style={{ background: "#0b0b0c", color: "white" }}>
      <section
        style={{
          padding: "72px 20px 24px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
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
          {
            key: "scene1",
            basePath: "/robot_full/scene1",
            frameCount: 178,
            scrollVh: 110,
            enterProgress: 0.0,
            introTitle: "System Reveal",
            introBody: "A quick overview of the robot inside a pipe environment.",
            featureCards: [
              {
                tag: "Feature",
                title: "EMAT Sensing",
                body: "Locates and characterizes hairline cracks through the pipe wall.",
              },
              {
                tag: "Feature",
                title: "Surface Prep",
                body: "High-RPM scrubber clears residue for reliable adhesion.",
              },
              {
                tag: "Feature",
                title: "Patch Press",
                body: "Actuators apply controlled force for uniform contact.",
              },
            ],
          },
          {
            key: "scene2",
            basePath: "/robot_full/scene2",
            frameCount: 178,
            scrollVh: 110,
            enterProgress: 0.08,
            introTitle: "Surface Preparation",
            introBody: "Cleaning the repair site to make patch adhesion consistent.",
            featureCards: [
              {
                tag: "Mechanism",
                title: "Scrubber",
                body: "Removes residue + biofilm to expose clean pipe wall.",
              },
              {
                tag: "Control",
                title: "Stable Contact",
                body: "Maintains consistent normal force while moving along the wall.",
              },
              {
                tag: "Result",
                title: "Reliable Bond",
                body: "Clean surface improves patch sealing performance.",
              },
            ],
          },
          {
            key: "scene3",
            basePath: "/robot_full/scene3",
            frameCount: 151,
            scrollVh: 100,
            enterProgress: 0.08,
            introTitle: "Patch Press",
            introBody: "Actuators press the patch into the crack region with uniform contact.",
            featureCards: [
              {
                tag: "Mechanism",
                title: "4 Linear Actuators",
                body: "Even pressure distribution across the patch footprint.",
              },
              {
                tag: "Stability",
                title: "Reduced Vibration",
                body: "Controlled motion reduces variability and improves contact.",
              },
              {
                tag: "Outcome",
                title: "Uniform Seal",
                body: "More consistent sealing across curvature and residue variations.",
              },
            ],
          },
          {
            key: "scene4",
            basePath: "/robot_full/scene4",
            frameCount: 245,
            scrollVh: 100,
            enterProgress: 0.08,
            introTitle: "Resin Injection",
            introBody: "Injector delivers sealing resin into the crack and retracts cleanly.",
            featureCards: [
              {
                tag: "Mechanism",
                title: "Injector Tip",
                body: "Targets the crack cavity while the patch holder stabilizes contact.",
              },
              {
                tag: "Process",
                title: "Seal + Cure",
                body: "Resin fills early-stage cracks to prevent growth and leakage.",
              },
              {
                tag: "Finish",
                title: "Clean Retract",
                body: "Retracts after injection to avoid smearing and excess trapping.",
              },
            ],
          },
        ]}
      />

      <section
        style={{
          padding: "70px 20px 110px",
          maxWidth: 1100,
          margin: "0 auto",
          opacity: 0.85,
        }}
      >
        <h2 style={{ fontSize: 28, margin: "0 0 12px" }}>Tuning</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>
            Want slower/faster sections? Adjust each scene’s <code>scrollVh</code>.
          </li>
          <li>
            Want more/less crossfade? Change <code>transitionBand</code> in the component.
          </li>
          <li>
            Make sure frames live under{" "}
            <code>public/robot_full/sceneX/frame_0001.webp</code>.
          </li>
        </ul>
      </section>
    </main>
  );
}
