import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  MapPin, 
  Droplet, 
  AlertTriangle, 
  Shield, 
  CheckCircle2,
  Building2,
  Factory,
  Wrench,
  Calendar,
  Target
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Protect water pipelines from within.
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              RoverTracer is an autonomous in-pipe robot that detects and seals early-stage cracks in live water pipelines, reducing water loss and minimizing excavation.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="outline" size="lg">
                <Link href="/technology">See How It Works</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image
              src="/renders/rovertracer_isometric.png"
              alt="RoverTracer isometric view"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Proof/Credibility Strip */}
      <section className="border-y bg-muted/50">
        <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-6 md:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">346B</CardTitle>
                <CardDescription>liters/day global water loss estimate</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">260,000</CardTitle>
                <CardDescription>breaks/year (US+Canada)</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">$70B+</CardTitle>
                <CardDescription>water infrastructure repair market</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">$5,000</CardTitle>
                <CardDescription>RoverTracer target price per unit</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">The Problem</h2>
          <p className="text-lg text-muted-foreground">
            Water pipeline failures cause massive water loss, service disruptions, and contamination risks. Traditional inspection and repair methods require costly excavation and service interruptions, leaving early-stage defects undetected until they become critical failures.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Droplet className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Water Loss</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Billions of liters lost daily through undetected leaks and cracks in aging infrastructure.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <AlertTriangle className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Disruption</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Road closures, service outages, and community disruption from reactive repairs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Contamination Risk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cracks allow contaminants to enter the water supply, posing public health risks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="bg-muted/50 py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">Our Solution</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                RoverTracer operates in three stages to detect and repair cracks before they become failures.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <Search className="mb-4 h-10 w-10 text-primary" />
                  <CardTitle>Detect while moving</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Continuous scanning using EMAT sensors as the robot moves through live pipelines.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <MapPin className="mb-4 h-10 w-10 text-primary" />
                  <CardTitle>Pause & localize</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    When anomalies are detected, the robot pauses to precisely localize the defect location.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Droplet className="mb-4 h-10 w-10 text-primary" />
                  <CardTitle>Seal early cracks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Apply sealant to early-stage cracks, preventing progression to full failures.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Why We're Different</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>External fixed sensors</CardTitle>
                <CardDescription>Monitor only</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Inline inspection tools/PIGs</CardTitle>
                <CardDescription>Inspection-only, complex deployment</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Trenchless rehab</CardTitle>
                <CardDescription>Reactive + disruptive</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Manual excavation</CardTitle>
                <CardDescription>Slow + disruptive</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="rounded-lg border bg-primary/5 p-6 text-center">
            <p className="text-lg font-medium">
              AquaTrace unifies detection, inspection, and early-stage repair inside live pipes.
            </p>
          </div>
        </div>
      </section>

      {/* The RoverTracer Model */}
      <section className="bg-muted/50 py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">The RoverTracer Model</h2>
            </div>
            <Tabs defaultValue="isometric" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="isometric">Isometric</TabsTrigger>
                <TabsTrigger value="inside-pipe">Inside-pipe</TabsTrigger>
                <TabsTrigger value="exploded">Exploded view</TabsTrigger>
              </TabsList>
              <TabsContent value="isometric" className="mt-6">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
                  <Image
                    src="/renders/rovertracer_isometric.png"
                    alt="RoverTracer isometric view"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  Isometric view of the RoverTracer robot showing overall design and form factor.
                </p>
              </TabsContent>
              <TabsContent value="inside-pipe" className="mt-6">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
                  <Image
                    src="/renders/rovertracer_inpipe_cutaway.png"
                    alt="RoverTracer inside pipe"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  Cutaway view showing RoverTracer operating inside a live water pipeline.
                </p>
              </TabsContent>
              <TabsContent value="exploded" className="mt-6">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
                  <Image
                    src="/renders/rovertracer_exploded.png"
                    alt="RoverTracer exploded view"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  Exploded view revealing internal components and assembly structure.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Partners & Customers */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Partners & Customers</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              RoverTracer serves multiple segments of the water infrastructure ecosystem.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Building2 className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Municipal/Government</CardTitle>
                <CardDescription>Water utilities</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Building2 className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Public/Private Utilities</CardTitle>
                <CardDescription>Water service providers</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Factory className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Industrial Networks</CardTitle>
                <CardDescription>Manufacturing plants</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Search className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Assessment Providers</CardTitle>
                <CardDescription>Pipe inspection services</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Wrench className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Pipe Manufacturers</CardTitle>
                <CardDescription>Pre-deployment inspection</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-muted/50 py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">Roadmap</h2>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-primary" />
                    <CardTitle>Prototype v1</CardTitle>
                  </div>
                  <CardDescription>Locomotion + waterproof housing</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <CardTitle>Benchtop sensing validation</CardTitle>
                  </div>
                  <CardDescription>EMAT + envelope + threshold</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-6 w-6 text-primary" />
                    <CardTitle>Flow test in pipe rig</CardTitle>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Building2 className="h-6 w-6 text-primary" />
                    <CardTitle>Pilot with utility/industrial partner</CardTitle>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-primary" />
                    <CardTitle>Scale to fleet/swarm deployments</CardTitle>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
