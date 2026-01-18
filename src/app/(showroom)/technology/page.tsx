// app/(showroom)/robot/page.tsx
import ScrollScrubShowcase from "@/app/(showroom)/technology/scroll-scrub-turntable";
import Link from "next/link";


export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        background:
          "radial-gradient(80% 60% at 50% 40%, rgba(0,0,0,0.05), rgba(0,0,0,0.65))",
      }}
    >
      {/* Extra “showroom wash” so the whole scroll page feels unified */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0) 18%, rgba(0,0,0,0) 82%, rgba(0,0,0,0.65))",
        }}
      />

      {/* ✅ Always-visible back button */}
      <Link
        href="/"
        aria-label="Go back to home"
        style={{
          position: "fixed",
          top: 18,
          left: 18,
          zIndex: 50,
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 14px",
          borderRadius: 999,
          color: "white",
          textDecoration: "none",
          background: "rgba(0,0,0,0.55)",
          border: "1px solid rgba(255,255,255,0.14)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        }}
      >
        <span style={{ fontSize: 18, lineHeight: 1, opacity: 0.9 }}>←</span>
        <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: 0.2 }}>
          Go back
        </span>
      </Link>

      {/* Scrub experience */}
      <div style={{ position: "relative", zIndex: 1 }}>
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
            {
              id: "scene1_bottom_callout",
              sceneKey: "scene1",
              start: 0.15,
              end: 0.9,
              fade: 0.03,
              boxes: [
                {
                  id: "b1",
                  x: 0.325,
                  y: 0.86,
                  w: 0.42,
                  tag: "Overview",
                  title: "Patching",
                  body: "A stabilised multi-actuator mechanism seals early-stage cracks using in-pipe resin injection.",
                },
              ],
              points: [{ id: "p1", x: 0.498, y: 0.26 }],
              links: [{ boxId: "b1", pointId: "p1", gapPx: 26 }],
            },

            {
              id: "scene1_left_callout",
              sceneKey: "scene1",
              start: 0.15,
              end: 0.9,
              fade: 0.03,
              boxes: [
                {
                  id: "b1",
                  x: 0.04,
                  y: 0.2,
                  w: 0.28,
                  tag: "Overview",
                  title: "Detection",
                  body: "An EMAT-based guided-wave system detects internal cracks under flowing water conditions.",
                },
              ],
              points: [{ id: "p1", x: 0.285, y: 0.43 }],
              links: [{ boxId: "b1", pointId: "p1", gapPx: 26 }],
            },

            {
              id: "scene1_right_callout",
              sceneKey: "scene1",
              start: 0.15,
              end: 0.9,
              fade: 0.03,
              boxes: [
                {
                  id: "b1",
                  x: 0.68,
                  y: 0.2,
                  w: 0.28,
                  tag: "Overview",
                  title: "Locomotion",
                  body: "Hybrid water-thruster and omnidirectional wheel locomotion enables efficient propulsion and precise positioning in live pipes.",
                },
              ],
              points: [
                { id: "p1", x: 0.63, y: 0.38 },
                { id: "p2", x: 0.93, y: 0.57 },
              ],
              links: [
                { boxId: "b1", pointId: "p1", gapPx: 26 },
                { boxId: "b1", pointId: "p2", gapPx: 26 },
              ],
            },

            {
              id: "scene2_callout",
              sceneKey: "scene2",
              start: 0.15,
              end: 0.55,
              fade: 0.03,
              boxes: [
                {
                  id: "b1",
                  x: 0.305,
                  y: 0.525,
                  w: 0.36,
                  tag: "Overview",
                  title: "Locomotion",
                  body: `• **Six Omnidirectional Wheels**
Enable smooth full-circumference rotation inside the pipe

• **Spring-Loaded Mounts**
Retract during swimming and engage the pipe wall for precise positioning

• **Active Orientation**
Robot aligns to cracks at any angle around the pipe interior

• **Thruster-Assisted Motion**
Water propellers handle forward travel while wheels control rotation and stability`,
                },
              ],
              points: [{ id: "p1", x: 0.5, y: 0.5 }],
              links: [{ boxId: "b1", pointId: "p1", gapPx: 26 }],
            },

            {
              id: "scene2_detection_callout",
              sceneKey: "scene2",
              start: 0.7,
              end: 1.0,
              fade: 0.03,
              boxes: [
                {
                  id: "b1",
                  x: 0.08,
                  y: 0.41,
                  w: 0.62,
                  tag: "Mechanism",
                  title: "Detection",
                  body: `**Continuous sensing during motion**
RoverTracer inspects the pipe wall while moving, eliminating the need for stop-and-scan routines.

**Water-independent guided waves**
An onboard EMAT emits low-frequency guided acoustic waves that propagate along the pipe wall and remain unaffected by internal water flow.

**Early-stage crack response**
When a guided wave encounters a micro-crack, part of the signal is back-scattered and immediately received by the co-located EMAT.`,
                  images: [
                    {
                      src: "/figures/fig4_noise_vs_defect.png",
                      alt: "Noise vs defect signal",
                    },
                  ],
                },
              ],
              points: [{ id: "p1", x: 0.3, y: 0.52 }],
              links: [{ boxId: "b1", pointId: "p1", gapPx: 26 }],
            },

            {
              id: "scene3_detection_callout",
              sceneKey: "scene3",
              start: 0.0,
              end: 0.35,
              fade: 0.03,
              boxes: [
                {
                  id: "b1",
                  x: 0.08,
                  y: 0.41,
                  w: 0.62,
                  tag: "Mechanism",
                  title: "Detection",
                  body: `**Motion-robust measurement**
The wave speed and wavelength are orders of magnitude larger than the robot’s translational velocity, ensuring negligible sensing distortion during movement.

**Real-time signal discrimination**
Incoming signals are processed onboard using envelope extraction and an optimal amplitude threshold to separate defect responses from background noise.

**Event-triggered transition**
Once a defect signature is detected, RoverTracer autonomously halts and transitions into high-precision localisation.`,
                  images: [{ src: "/figures/fig5_roc.png", alt: "ROC curve" }],
                },
              ],
              points: [{ id: "p1", x: 0.3, y: 0.52 }],
              links: [{ boxId: "b1", pointId: "p1", gapPx: 26 }],
            },

            {
              id: "scene3_patching_callout",
              sceneKey: "scene3",
              start: 0.5,
              end: 0.7,
              fade: 0.03,
              boxes: [
                {
                  id: "b1",
                  x: 0.38,
                  y: 0.46,
                  w: 0.57,
                  tag: "Mechanism",
                  title: "Patching Mechanism",
                  body: `Patching Sequence (Live-Pipe Repair)

**1. Surface Preparatio**
A high-RPM scrubber removes residue and biofilm from the pipe wall, ensuring a clean, bond-ready surface under flowing water conditions.

**2. Stabilised Deployment**
Four synchronised linear actuators extend the patch holder toward the defect, while a dedicated actuator controls the injector’s approach with millimetre-level precision.

**3. Flow Diversion Contact**
As the injector meets the pipe wall, the patch naturally curves, forming a temporary barrier that diverts water away from the crack cavity.

**4. Resin Injection & Curing**
Hydrophilic, potable-water-safe resin is injected directly into the defect, where it mixes with water and hardens in situ, sealing early-stage cracks.

**5. Secure Patch Fixation**
A multi-layer patch, including a marine-grade waterproof backing, holds the seal in place while curing completes, resisting vibration and internal pipe flow.

**6. Controlled Retraction**
Actuators retract in a stable, Lyapunov-guided sequence, preserving adhesion integrity and leaving the repaired section undisturbed.`,
                },
              ],
            },

            {
              id: "scene4_lyapnanov_babu_callout",
              sceneKey: "scene4",
              start: 0.0,
              end: 0.3,
              fade: 0.03,
              boxes: [
                {
                  id: "b1",
                  x: 0.39,
                  y: 0.5,
                  w: 0.57,
                  tag: "Mechanism",
                  title: "Stability Control",
                  body: `Four-Actuator Patch Deployment System

**Synchronized actuation**
Four linear actuators drive the patch holder toward the pipe wall, distributing force evenly across the curved surface.

**Adaptive force alignment**
Each actuator adjusts in real time to account for pipe curvature, surface residue, and micro-misalignments.

**Lyapunov-based stability control**
A Lyapunov framework guarantees convergence to a stable contact state, preventing oscillations or uneven loading during deployment.

**Safe, regulation-compliant adhesion**
The control law ensures bounded forces at all times, protecting the pipe wall while maintaining sufficient pressure for reliable patch adhesion.

**Closed-loop contact assurance**
Continuous feedback allows the system to compensate for vibrations and flow-induced disturbances until curing is complete.`,
                  images: [{ src: "/figures/lyapunov.png", alt: "Variability Analysis" }],
                },
              ],
            },

            {
              id: "scene4_injector_callout",
              sceneKey: "scene4",
              start: 0.4,
              end: 0.7,
              fade: 0.03,
              boxes: [
                {
                  id: "b1",
                  x: 0.43,
                  y: 0.5,
                  w: 0.53,
                  tag: "Mechanism",
                  title: "Enclosed Resin Injection",
                  body: `The deployed patch forms a sealed cavity over the crack, creating a **controlled injection volume** inside the pipe.

SealBoss FlexGel is injected into this enclosed space.
It is **potable-water safe**, allowing use in drinking-water pipelines without contamination risk.

Its **high viscosity** enables penetration into fine, early-stage cracks while preventing washout.

The resin interacts with the trapped water, using it to form a **stronger**, **conformal** bond to the pipe wall.

The result is a **durable** internal seal, achieved under **live-flow conditions**.`,
                  images: [{ src: "/figures/sealboss.png", alt: "Resin Capability" }],
                },
              ],
            },

            {
              id: "scene4_final_callout",
              sceneKey: "scene4",
              start: 0.8,
              end: 1.0,
              sticky: "end",
              fade: 0.03,
              boxes: [
                {
                  id: "b1",
                  x: 0.63,
                  y: 0.44,
                  w: 0.33,
                  tag: "Mechanism",
                  title: "Patch Release & Cure",
                  body: `After injection is complete, the injector **disengages** from the patch, followed by the retraction of the patch holder.

The patch remains secured against the pipe wall, maintaining pressure while the resin cures in place **under live water conditions**.

With the repair site sealed and stabilised, RoverTracer resumes forward motion, enabling continuous in-pipe operation **without** service interruption.`,
                },
              ],
            },
          ]}
        />
      </div>
    </main>
  );
}
