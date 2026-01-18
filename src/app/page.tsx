import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ModelViewer from "@/components/ModelViewer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Search, MapPin, Droplet, ArrowRight } from "lucide-react";
import LoopingAnimation from "@/components/loopinganimation";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Robot Centered */}
      <section className="relative mx-auto w-full max-w-7xl px-6 pt-4 pb-8 md:pt-12 md:pb-12 lg:px-8 min-h-[90vh] flex items-center justify-center">
        <div className="relative w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 z-10 pl-[2.5rem] md:pl-[4rem]">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Protect water pipelines from within.
            </h1>

            <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
              AquaTrace's{" "}
              <span className="font-medium text-primary">RoverTracer</span> is
              the first autonomous robot that detects, treats, and seals cracks
              from within live water pipelines.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button asChild size="lg" className="text-base px-7">
                <Link href="/technology">
                  Explore Technology
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right side - 3D Model with glow behind it */}
          <div className="relative w-full aspect-[4/3] flex items-center justify-center">
            {/* Background gradient accent - positioned behind the model */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <ModelViewer
                url="/models/Untitled.glb"
                autoRotate={true}
                enableControls={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats - Minimal */}
      <section className="py-12 relative">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-4 px-4 md:px-8 border-t border-b border-primary/20 py-8">
            <div className="text-center">
              <div className="text-3xl font-semibold mb-1 text-primary">
                126T
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">
                Litres lost annually
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-semibold mb-1 text-primary">
                260K
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">
                Breaks per year
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-semibold mb-1 text-primary">
                100%
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">
                Pipeline coverage
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-semibold mb-1 text-primary">
                $70B+
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">
                Market size
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution - Minimal */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8 px-4 md:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Search className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Detect</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Continuous scanning with EMAT sensors as the robot moves
                  through pipelines.
                </p>
              </CardContent>
            </Card>

            <Card className="border flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Localize</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Robot pauses to precisely localize defects and prepare the
                  surface.
                </p>
              </CardContent>
            </Card>

            <Card className="border flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Droplet className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Seal</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Deploys patch with SealBoss Flexgel using multi-linear
                  actuators.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RoverTracer in Action */}
      <section className="py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl space-y-8 px-4 md:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold mb-3">
                RoverTracer in Action
              </h2>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-background">
              <div className="relative w-full h-full min-h-[400px]">
                <LoopingAnimation
                  src="/videos/FullSimulation.mp4"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
