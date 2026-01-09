import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Search, MapPin, Droplet, AlertCircle } from "lucide-react";

export default function TechnologyPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-16">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">How RoverTracer Works</h1>
          <p className="text-lg text-muted-foreground">
            Advanced in-pipe detection and repair technology for live water pipelines.
          </p>
        </div>

        {/* How RoverTracer detects cracks */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">How RoverTracer Detects Cracks</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                RoverTracer uses <strong>EMAT (Electromagnetic Acoustic Transducer)</strong> technology to detect cracks in live water pipelines. The system employs S0 guided waves that propagate along the pipe wall, with transmitters and receivers positioned to capture back-scatter from defects.
              </p>
              <p className="text-muted-foreground">
                Signal processing uses a <strong>Hilbert envelope</strong> to extract amplitude envelopes from the received signals. Statistical thresholding based on POD (Probability of Detection) and PFA (Probability of False Alarm) metrics, analyzed through ROC (Receiver Operating Characteristic) curves, enables reliable crack detection while minimizing false positives.
              </p>
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Evidence Base
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Based on published guided-wave inspection research; adapted for continuous scanning in live water pipelines. Research foundation from NDT&E International, 2023.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
                <Image
                  src="/figures/fig4_noise_vs_defect.jpeg"
                  alt="Noise vs defect detection analysis"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-sm text-muted-foreground">
                Signal-to-noise analysis showing detection capability
              </p>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
                <Image
                  src="/figures/fig5_roc.jpeg"
                  alt="ROC curve analysis"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-sm text-muted-foreground">
                ROC curve for threshold optimization
              </p>
              <p className="text-center text-xs text-muted-foreground italic">
                Research foundation from NDT&E International, 2023.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Two-stage inspection logic */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Two-Stage Inspection Logic</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Search className="mb-4 h-10 w-10 text-primary" />
                <CardTitle>Detect while moving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Continuous scanning mode: RoverTracer moves through the pipeline while EMAT sensors continuously monitor for anomalies. This enables rapid coverage of long pipe segments.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <MapPin className="mb-4 h-10 w-10 text-primary" />
                <CardTitle>Stop to localize</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  When an anomaly is detected, the robot pauses and performs localized measurements to precisely identify the defect location and characteristics.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Droplet className="mb-4 h-10 w-10 text-primary" />
                <CardTitle>Stop to seal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  For early-stage cracks, RoverTracer applies sealant directly to the defect, preventing progression to full failures without requiring excavation.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Safety + live-flow design */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Safety + Live-Flow Design</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Waterproof sensor housing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All electronics and sensors are housed in waterproof enclosures rated for continuous operation in live water pipelines.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Minimal flow obstruction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Compact design ensures minimal impact on water flow, allowing operation in active pipelines without service interruption.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Reusable units</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  RoverTracer units are designed for multiple deployments, reducing per-inspection costs and environmental impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}

