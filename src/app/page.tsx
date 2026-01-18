import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ModelViewer from "@/components/ModelViewer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
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
  Target,
  TrendingUp,
  Globe,
  ArrowRight
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-28 md:py-40 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:items-center">
          <div className="flex flex-col justify-center space-y-10">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl tracking-normal">
              Protect water pipelines from within.
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              <span className="font-medium text-foreground">126 trillion litres</span> of treated water lost annually. 
              <span className="font-medium text-foreground"> 260,000</span> water main breaks each year in the US and Canada alone. 
              AquaTrace's <span className="font-medium text-primary">RoverTracer</span> is the first autonomous robot that detects, treats, and seals cracks from within live water pipelines, no excavation, no disruption.
            </p>
            
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button asChild size="lg" className="text-base px-7 py-5">
                <Link href="/technology">
                  Explore Technology
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-7 py-5">
                <Link href="/business">View Business Model</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-start gap-12 pt-6 border-t">
              <div>
                <div className="text-3xl font-semibold mb-1">$70B+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Market Size</div>
              </div>
              <div>
                <div className="text-3xl font-semibold mb-1">100%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Pipeline Coverage</div>
              </div>
              <div>
                <div className="text-3xl font-semibold mb-1">70-90%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Time Reduction</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border bg-background">
              <ModelViewer 
                url="/models/Untitled.glb"
                autoRotate={true}
                enableControls={true}
              />
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Impact Statistics */}
      <section className="border-y bg-muted/30 py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-3">The Scale of the Problem</h2>
            <p className="text-muted-foreground text-base max-w-2xl">
              Current infrastructure maintenance methods are failing. Here's what's at stake.
            </p>
          </div>
          
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border">
              <CardHeader className="pb-4">
                <Droplet className="h-7 w-7 text-primary mb-4" />
                <CardTitle className="text-4xl font-semibold">126T</CardTitle>
                <CardDescription className="text-sm font-normal mt-2">
                  Litres of treated water lost annually
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Globally, billions wasted daily through undetected leaks
                </p>
              </CardContent>
            </Card>
            
            <Card className="border">
              <CardHeader className="pb-4">
                <AlertTriangle className="h-7 w-7 text-primary mb-4" />
                <CardTitle className="text-4xl font-semibold">260K</CardTitle>
                <CardDescription className="text-sm font-normal mt-2">
                  Water main breaks per year (US+Canada)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Each break causes massive disruption and economic loss
                </p>
              </CardContent>
            </Card>
            
            <Card className="border">
              <CardHeader className="pb-4">
                <TrendingUp className="h-7 w-7 text-primary mb-4" />
                <CardTitle className="text-4xl font-semibold">$70B</CardTitle>
                <CardDescription className="text-sm font-normal mt-2">
                  Global infrastructure repair market (2024)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Growing to $166B by 2034 as infrastructure ages
                </p>
              </CardContent>
            </Card>
            
            <Card className="border">
              <CardHeader className="pb-4">
                <Calendar className="h-7 w-7 text-primary mb-4" />
                <CardTitle className="text-4xl font-semibold">45</CardTitle>
                <CardDescription className="text-sm font-normal mt-2">
                  Average age of US water pipes (years)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Many cast-iron pipes over a century old
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="mx-auto w-full max-w-7xl px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold mb-4">The Crisis in Our Infrastructure</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Ageing water networks deteriorate faster than they can be repaired. Current solutions cause massive disruption 
              and leave early-stage defects undetected until they become critical failures.
            </p>
          </div>
          
          <div className="grid gap-5 md:grid-cols-3">
            <Card className="border">
              <CardHeader>
                <Droplet className="mb-3 h-8 w-8 text-destructive" />
                <CardTitle className="text-lg">Water Loss</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  346 billion litres lost daily globally. Massive waste of a precious resource and billions lost in energy costs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border">
              <CardHeader>
                <AlertTriangle className="mb-3 h-8 w-8 text-orange-500" />
                <CardTitle className="text-lg">Disruption</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Current repairs cause road closures, traffic congestion, and service outages. 59% of pipe failure costs are indirect.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border">
              <CardHeader>
                <Shield className="mb-3 h-8 w-8 text-primary" />
                <CardTitle className="text-lg">Contamination Risk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cracks allow contaminants into potable water systems. Current detection tools have limited accuracy; accurate inspection costs hundreds of thousands.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="border-l-4 border-primary pl-6 py-4 bg-muted/30">
            <p className="text-base font-medium leading-relaxed">
              <span className="text-primary font-semibold">The core problem:</span> There's no way to seal early-stage defects internally. 
              They deteriorate into larger failures, the cycle we're stuck in today.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Our Solution */}
      <section className="bg-muted/20 py-28">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-6xl space-y-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold mb-4">RoverTracer: The First In-Pipe Repair Robot</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                An autonomous robot that detects and repairs defects from within live pipelines, no disruption to service.
              </p>
            </div>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <Card className="border">
                <CardHeader>
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded bg-primary/10 flex items-center justify-center mt-1">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">1. Detect While Moving</CardTitle>
                      <CardContent className="p-0">
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          Continuous scanning with <strong>EMAT sensors</strong> as the robot moves through pipelines. 
                          100% pipeline coverage using real-time signal processing.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-primary font-medium">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>Real-time anomaly detection</span>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              
              {/* Step 2 */}
              <Card className="border">
                <CardHeader>
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded bg-primary/10 flex items-center justify-center mt-1">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">2. Pause & Localize</CardTitle>
                      <CardContent className="p-0">
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          Robot pauses to precisely localize defects. High-RPM scrubber prepares the surface for patching.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-primary font-medium">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>Precise defect localization</span>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              
              {/* Step 3 */}
              <Card className="border">
                <CardHeader>
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded bg-primary/10 flex items-center justify-center mt-1">
                      <Droplet className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">3. Seal Early Cracks</CardTitle>
                      <CardContent className="p-0">
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          Deploys patch with <strong>SealBoss Flexgel</strong> using multi-linear actuators. 
                          Lyapunov-based control ensures precise adhesion.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-primary font-medium">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>In-situ repair without excavation</span>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* The RoverTracer Model */}
      <section className="bg-muted/20 py-28">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold mb-4">Explore RoverTracer</h2>
              <p className="text-base text-muted-foreground">
                See how our innovative design enables autonomous in-pipe repair
              </p>
            </div>
            
            <Tabs defaultValue="isometric" className="w-full">
              <TabsList className="grid w-full grid-cols-3 h-12">
                <TabsTrigger value="isometric" className="text-sm">Isometric View</TabsTrigger>
                <TabsTrigger value="inside-pipe" className="text-sm">Inside Pipeline</TabsTrigger>
                <TabsTrigger value="exploded" className="text-sm">Exploded View</TabsTrigger>
              </TabsList>
              
              <TabsContent value="isometric" className="mt-6">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border bg-background">
                  <Image
                    src="/renders/rovertracer_isometric.png"
                    alt="RoverTracer isometric view"
                    fill
                    className="object-contain p-6"
                  />
                </div>
                <p className="mt-5 text-center text-sm text-muted-foreground">
                  Isometric view of the RoverTracer showing overall design and compact form factor optimized for 100mm+ diameter pipes
                </p>
              </TabsContent>
              
              <TabsContent value="inside-pipe" className="mt-6">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border bg-background">
                  <Image
                    src="/renders/rovertracer_inpipe_cutaway.png"
                    alt="RoverTracer inside pipe"
                    fill
                    className="object-contain p-6"
                  />
                </div>
                <p className="mt-5 text-center text-sm text-muted-foreground">
                  Cutaway view showing RoverTracer operating inside a live water pipeline, demonstrating minimal flow obstruction
                </p>
              </TabsContent>
              
              <TabsContent value="exploded" className="mt-6">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border bg-background">
                  <Image
                    src="/renders/rovertracer_exploded.png"
                    alt="RoverTracer exploded view"
                    fill
                    className="object-contain p-6"
                  />
                </div>
                <p className="mt-5 text-center text-sm text-muted-foreground">
                  Exploded view revealing internal components: locomotion system, sensing array, and patching mechanism
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Separator />

      {/* Roadmap */}
      <section className="bg-muted/20 py-28">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl space-y-14">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold mb-4">Development Roadmap</h2>
              <p className="text-base text-muted-foreground">
                Progress to market: validated subsystems, integrated testing, and pilot deployment
              </p>
            </div>
            
            <div className="space-y-4">
              <Card className="border">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Patching Mechanism Complete</CardTitle>
                      <CardDescription className="text-sm">Fully implemented Lyapunov control framework, physical components fabricated</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              
              <Card className="border">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Locomotion Validated</CardTitle>
                      <CardDescription className="text-sm">Thruster responsiveness and architecture tested with mock-up robot and IMU analysis</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              
              <Card className="border">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded bg-muted flex items-center justify-center">
                      <Target className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Flow Test in Pipe Rig</CardTitle>
                      <CardDescription className="text-sm">End-to-end system testing in controlled pipeline environment</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              
              <Card className="border">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded bg-muted flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Pilot with Utility/Industrial Partner</CardTitle>
                      <CardDescription className="text-sm">Real-world deployment with mid-sized municipality or industrial facility</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              
              <Card className="border">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded bg-muted flex items-center justify-center">
                      <Globe className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Scale to Fleet/Swarm Deployments</CardTitle>
                      <CardDescription className="text-sm">Commercial rollout with multiple robots operating across network infrastructure</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
            
            <div className="border-l-4 border-primary pl-6 py-4 bg-muted/30">
              <p className="text-base font-medium leading-relaxed">
                <span className="text-primary font-semibold">Protection Strategy:</span> Patents will cover the mechanical 
                design and hardware architecture. Copyrights will protect the software in sensing and patching subsystems. 
                As AquaTrace scales, key operational knowledge will be documented as trade secrets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* CTA Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="border bg-muted/30">
            <CardHeader className="text-center space-y-4 pb-6">
              <h2 className="text-3xl font-semibold">Ready to Transform Water Infrastructure?</h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Join us in revolutionizing pipeline maintenance. Learn more about our technology, business model, 
                or connect with our team.
              </p>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-3 justify-center pb-6">
              <Button asChild size="lg" className="text-base px-7">
                <Link href="/technology">
                  Explore Technology
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-7">
                <Link href="/business">View Business Model</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
