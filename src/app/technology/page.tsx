import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Radio, Cpu, CheckCircle2 } from "lucide-react";

export default function TechnologyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-24 pb-16 md:pt-32 md:pb-24 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl">
            How RoverTracer Works
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            An autonomous robot combining detection technology, precise
            localization, and in-situ repair capabilities.
          </p>
        </div>
      </section>

      <Separator className="opacity-30" />

      {/* Detection Technology */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-3">
              Crack Detection Technology
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <Card className="border">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Radio className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">EMAT Technology</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    RoverTracer uses{" "}
                    <strong className="text-foreground">
                      EMAT (Electromagnetic Acoustic Transducer)
                    </strong>{" "}
                    technology to detect cracks using{" "}
                    <strong className="text-foreground">S0 guided waves</strong>{" "}
                    that propagate along the pipe wall.
                  </p>
                  <div className="flex items-start gap-2 pt-4 border-t border-border/50">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm">
                      <strong>100% pipeline coverage</strong> with minimal false
                      positives
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Cpu className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Signal Processing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Signal processing uses a{" "}
                    <strong className="text-foreground">
                      Hilbert envelope
                    </strong>{" "}
                    to extract amplitude envelopes. Statistical thresholding
                    based on{" "}
                    <strong className="text-foreground">POD/PFA</strong> metrics
                    enables reliable crack detection.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-background">
                <Image
                  src="/figures/fig4_noise_vs_defect.png"
                  alt="Noise vs defect detection analysis"
                  fill
                  className="object-contain p-6"
                />
              </div>

              <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-background">
                <Image
                  src="/figures/fig5_roc.png"
                  alt="ROC curve analysis"
                  fill
                  className="object-contain p-6"
                />
              </div>

              <p className="text-center text-xs text-muted-foreground italic">
                Research foundation from NDT&E International, 2023
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
