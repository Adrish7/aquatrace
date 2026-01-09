import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ModelViewer from "@/components/ModelViewer";
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
  Target,
  TrendingUp,
  Zap,
  Globe,
  Award,
  ArrowRight,
  Check,
  X
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Enhanced with Gradient */}
      <section className="relative mx-auto w-full max-w-7xl px-6 py-20 md:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="flex flex-col justify-center space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary w-fit">
              <Award className="h-4 w-4" />
              First Autonomous In-Pipe Repair Robot
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              Redefining Water Pipeline Protection
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              <span className="font-semibold text-foreground">126 trillion litres</span> of treated water lost annually. 
              <span className="font-semibold text-foreground"> 260,000</span> water main breaks each year in the US and Canada alone. 
              AquaTrace's <span className="font-semibold text-primary">RoverTracer</span> is the first autonomous robot that detects, treats, and seals cracks from within live water pipelines—no excavation, no disruption.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="text-lg px-8 py-6 group">
                <Link href="/technology">
                  Explore Technology
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/business">View Business Model</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-4 border-t">
              <div>
                <div className="text-2xl font-bold">$70B+</div>
                <div className="text-sm text-muted-foreground">Market Size</div>
              </div>
              <div>
                <div className="text-2xl font-bold">90%+</div>
                <div className="text-sm text-muted-foreground">Detection Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold">70-90%</div>
                <div className="text-sm text-muted-foreground">Time Reduction</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-primary/20 shadow-2xl bg-gradient-to-br from-primary/5 to-background">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-0">
                <ModelViewer 
                  url="/models/Untitled.glb"
                  autoRotate={true}
                  enableControls={true}
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-lg bg-primary p-4 text-primary-foreground shadow-xl z-20 hidden lg:block">
              <div className="text-sm font-medium">Patented Technology</div>
              <div className="text-xs opacity-90">Protected Innovation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics - Enhanced */}
      <section className="border-y bg-gradient-to-b from-muted/50 to-background py-16">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">The Scale of the Problem</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Current infrastructure maintenance methods are failing. Here's what's at stake.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2 hover:border-primary/50 transition-colors group">
              <CardHeader className="pb-3">
                <Droplet className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-3xl font-bold">126T</CardTitle>
                <CardDescription className="text-base font-medium">
                  Litres of treated water lost annually
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Globally, billions wasted daily through undetected leaks
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 transition-colors group">
              <CardHeader className="pb-3">
                <AlertTriangle className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-3xl font-bold">260K</CardTitle>
                <CardDescription className="text-base font-medium">
                  Water main breaks per year (US+Canada)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Each break causes massive disruption and economic loss
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 transition-colors group">
              <CardHeader className="pb-3">
                <TrendingUp className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-3xl font-bold">$70B</CardTitle>
                <CardDescription className="text-base font-medium">
                  Global infrastructure repair market (2024)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Growing to $166B by 2034 as infrastructure ages
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 transition-colors group">
              <CardHeader className="pb-3">
                <Calendar className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-3xl font-bold">45</CardTitle>
                <CardDescription className="text-base font-medium">
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

      {/* The Problem - Enhanced */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">The Crisis in Our Infrastructure</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Modern society depends on underground water infrastructure—largely invisible until it fails. 
              Ageing networks are deteriorating faster than they can be repaired, with current solutions causing 
              massive disruption and leaving early-stage defects undetected until they become critical failures.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="relative overflow-hidden border-2 hover:shadow-lg transition-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/10 rounded-bl-full"></div>
              <CardHeader className="relative">
                <Droplet className="mb-4 h-10 w-10 text-destructive" />
                <CardTitle className="text-xl">Water Loss</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  346 billion litres lost daily globally. This represents massive waste of a precious resource 
                  and billions lost in energy and pumping costs. As climate stress and urban demand rise, 
                  these invisible losses increasingly threaten global water security.
                </p>
              </CardContent>
            </Card>
            
            <Card className="relative overflow-hidden border-2 hover:shadow-lg transition-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-bl-full"></div>
              <CardHeader className="relative">
                <AlertTriangle className="mb-4 h-10 w-10 text-orange-500" />
                <CardTitle className="text-xl">Disruption</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Current repair solutions cause road closures, traffic congestion, and service outages affecting 
                  civilians, hospitals, schools, and businesses. More than 59% of the average pipe failure cost 
                  is indirect—tearing up roads generates emissions, noise, and disruption.
                </p>
              </CardContent>
            </Card>
            
            <Card className="relative overflow-hidden border-2 hover:shadow-lg transition-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full"></div>
              <CardHeader className="relative">
                <Shield className="mb-4 h-10 w-10 text-primary" />
                <CardTitle className="text-xl">Contamination Risk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cracks in ageing pipes allow contaminants to enter potable water systems. This is particularly 
                  critical for industries where water purity is a necessity. Current detection tools have limited 
                  accuracy, while accurate inline-inspection tools cost tens to hundreds of thousands of dollars.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 text-center">
            <p className="text-lg font-medium leading-relaxed">
              <span className="text-primary font-bold">The core pain point:</span> Today's water pipeline maintenance 
              is inefficient, expensive, and disruptive. There is no way to seal early-stage defects internally, 
              even though they would be the simplest to address. This results in these defects deteriorating into 
              larger failures—the cycle that the world suffers from today.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solution - Enhanced */}
      <section className="bg-gradient-to-b from-background via-muted/30 to-background py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">RoverTracer: The First In-Pipe Repair Robot</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                An untethered, autonomous robot that continuously traverses live water pipelines, detecting 
                early-stage internal defects and performing targeted repairs from within—without any disruption 
                to water service.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-2 border-primary/20 hover:border-primary/50 hover:shadow-xl transition-all group">
                <CardHeader className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">1. Detect While Moving</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Continuous scanning using <strong>EMAT (Electromagnetic Acoustic Transducer)</strong> sensors 
                    as the robot moves through live pipelines. Signal processing uses Hilbert envelope extraction 
                    with statistical thresholding for reliable detection with 90%+ accuracy.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Real-time anomaly detection</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-primary/20 hover:border-primary/50 hover:shadow-xl transition-all group">
                <CardHeader className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">2. Pause & Localize</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    When anomalies are detected, the robot pauses using omnidirectional wheels and thrusters 
                    to precisely localize the defect location. High-RPM scrubber cleans residue around cracks 
                    to ensure compatible surface for patching.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Precise defect localization</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-primary/20 hover:border-primary/50 hover:shadow-xl transition-all group">
                <CardHeader className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Droplet className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">3. Seal Early Cracks</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Multi-linear actuator system deploys patch with <strong>SealBoss Flexgel</strong>—a hydrophilic 
                    polyurethane injection resin. Lyapunov-based control framework ensures stability and precise 
                    patch adhesion, preventing crack progression.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>In-situ repair without excavation</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Key Advantages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm"><strong>Operates in live pipelines</strong>—no service disruption</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm"><strong>Autonomous operation</strong>—minimal human intervention</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm"><strong>Reusable units</strong>—significant cost savings</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm"><strong>Swarm capability</strong>—rapid network coverage</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">70-90% reduction in repair time</p>
                    <p className="text-xs text-muted-foreground">Hours vs. weeks for traditional methods</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">10-20 years extended pipe service life</p>
                    <p className="text-xs text-muted-foreground">Prevents small cracks from progressing</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">Zero water outages</p>
                    <p className="text-xs text-muted-foreground">Operations in live pipelines</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">Reduced soil erosion & habitat degradation</p>
                    <p className="text-xs text-muted-foreground">Minimal excavation required</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages - Enhanced */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Why RoverTracer Is Unmatched</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Unlike any existing solution, RoverTracer is the first robot that <strong>both detects and seals 
              early-stage cracks</strong> while operating in live, water-flowing pipelines. This combination of 
              capabilities doesn't exist anywhere else.
            </p>
          </div>
          
          {/* Competition Comparison */}
          <div className="space-y-6">
            <div className="rounded-2xl border-2 border-muted p-6 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                  <X className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">External Fixed Sensors</h3>
                  <p className="text-muted-foreground mb-3">
                    Monitor-only systems that provide indirect signals with limited accuracy. 
                    <strong className="text-destructive"> Cannot repair defects.</strong>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">Monitor Only</span>
                    <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">Limited Accuracy</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl border-2 border-muted p-6 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                  <X className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Inline Inspection Tools (PIGs)</h3>
                  <p className="text-muted-foreground mb-3">
                    Cost tens to hundreds of thousands of dollars. 
                    <strong className="text-destructive"> Inspection-only, typically require pipeline shutdowns.</strong>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">Very Expensive</span>
                    <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">Requires Shutdown</span>
                    <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">No Repair</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl border-2 border-muted p-6 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                  <X className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Trenchless Rehabilitation (CIPP)</h3>
                  <p className="text-muted-foreground mb-3">
                    Cured-in-place pipe lining. Only used when damage is extreme. 
                    <strong className="text-destructive"> Reactive, costly, and still disruptive.</strong>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">Reactive Only</span>
                    <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">Disruptive</span>
                    <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">Expensive</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl border-2 border-muted p-6 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                  <X className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Manual Excavation</h3>
                  <p className="text-muted-foreground mb-3">
                    The dominant industry practice. Universal, but 
                    <strong className="text-destructive"> slow, labor-intensive, and highly disruptive.</strong>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">Slow</span>
                    <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">Labor Intensive</span>
                    <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">Highly Disruptive</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AquaTrace Highlight */}
            <div className="rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-bl-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                    <Check className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-2xl text-primary">AquaTrace RoverTracer</h3>
                      <span className="text-xs px-3 py-1 rounded-full bg-primary text-primary-foreground font-semibold">
                        THE ONLY SOLUTION
                      </span>
                    </div>
                    <p className="text-lg font-medium mb-4">
                      The first robot that detects, localizes, and seals early-stage cracks in live pipelines—all in one autonomous system.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <span className="font-medium">Detect + Seal in Live Pipes</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <span className="font-medium">No Service Disruption</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <span className="font-medium">90%+ Detection Accuracy</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <span className="font-medium">Autonomous Operation</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <span className="font-medium">Reusable & Cost-Effective</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <span className="font-medium">Swarm Capability</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-primary/20">
                      <p className="text-sm text-muted-foreground italic">
                        <strong>Note:</strong> RoverTracer is purpose-built for early-stage defects. While it doesn't 
                        address larger circumferential failures directly, this is intentional—large failures occur from 
                        small defects that were ignored. By focusing on early intervention, RoverTracer prevents these 
                        catastrophic failures from ever occurring.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The RoverTracer Model - Enhanced */}
      <section className="bg-gradient-to-b from-background via-muted/30 to-background py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">Explore RoverTracer</h2>
              <p className="text-xl text-muted-foreground">
                See how our innovative design enables autonomous in-pipe repair
              </p>
            </div>
            
            <Tabs defaultValue="isometric" className="w-full">
              <TabsList className="grid w-full grid-cols-3 h-14">
                <TabsTrigger value="isometric" className="text-base">Isometric View</TabsTrigger>
                <TabsTrigger value="inside-pipe" className="text-base">Inside Pipeline</TabsTrigger>
                <TabsTrigger value="exploded" className="text-base">Exploded View</TabsTrigger>
              </TabsList>
              
              <TabsContent value="isometric" className="mt-8">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-2 border-primary/20 shadow-xl bg-gradient-to-br from-primary/5 to-background">
                  <Image
                    src="/renders/rovertracer_isometric.png"
                    alt="RoverTracer isometric view"
                    fill
                    className="object-contain p-8"
                  />
                </div>
                <p className="mt-6 text-center text-muted-foreground">
                  Isometric view of the RoverTracer showing overall design and compact form factor optimized for 100mm+ diameter pipes
                </p>
              </TabsContent>
              
              <TabsContent value="inside-pipe" className="mt-8">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-2 border-primary/20 shadow-xl bg-gradient-to-br from-primary/5 to-background">
                  <Image
                    src="/renders/rovertracer_inpipe_cutaway.png"
                    alt="RoverTracer inside pipe"
                    fill
                    className="object-contain p-8"
                  />
                </div>
                <p className="mt-6 text-center text-muted-foreground">
                  Cutaway view showing RoverTracer operating inside a live water pipeline, demonstrating minimal flow obstruction
                </p>
              </TabsContent>
              
              <TabsContent value="exploded" className="mt-8">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-2 border-primary/20 shadow-xl bg-gradient-to-br from-primary/5 to-background">
                  <Image
                    src="/renders/rovertracer_exploded.png"
                    alt="RoverTracer exploded view"
                    fill
                    className="object-contain p-8"
                  />
                </div>
                <p className="mt-6 text-center text-muted-foreground">
                  Exploded view revealing internal components: locomotion system, sensing array, and patching mechanism
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Target Markets - Enhanced */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Serving Multiple Market Segments</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              RoverTracer serves critical segments of the water infrastructure ecosystem, from municipal utilities 
              to industrial facilities where water purity is non-negotiable.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Municipal/Government</CardTitle>
                <CardDescription>Water utilities & public infrastructure</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Primary customers responsible for maintaining water distribution networks. RoverTracer helps 
                  reduce water loss and repair costs while avoiding societal disruption.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Private Utilities</CardTitle>
                <CardDescription>Water service providers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Private utilities providing water-loss reduction or emergency repairs. Early adopters due to 
                  cost-effectiveness and rapid deployment capabilities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Factory className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Industrial Networks</CardTitle>
                <CardDescription>Manufacturing & processing facilities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Large manufacturing sites where pipe integrity and water purity are vital. High sensitivity 
                  to downtime makes industrial facilities ideal early adopters.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Pipe Assessment Providers</CardTitle>
                <CardDescription>Inspection service companies</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Companies offering pipe inspection services. RoverTracer can detect potential defects before 
                  installation, expanding assessment capabilities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Pipe Manufacturers</CardTitle>
                <CardDescription>Pre-deployment quality control</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Manufacturers can use RoverTracer to inspect pipes before installation, ensuring quality 
                  and preventing future failures.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary/50 bg-primary/5 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary mb-4">
                  <Globe className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Global Opportunity</CardTitle>
                <CardDescription>$70B market, growing to $166B by 2034</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">
                  As urban density intensifies and infrastructure ages globally, the need for scalable, 
                  non-disruptive pipe inspection and repair will only increase.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap - Enhanced */}
      <section className="bg-gradient-to-b from-background via-muted/30 to-background py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">Development Roadmap</h2>
              <p className="text-xl text-muted-foreground">
                Progress to market: validated subsystems, integrated testing, and pilot deployment
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="border-2 border-primary/20 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Patching Mechanism Complete</CardTitle>
                      <CardDescription>Fully implemented Lyapunov control framework, physical components fabricated</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              
              <Card className="border-2 border-primary/20 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Locomotion Validated</CardTitle>
                      <CardDescription>Thruster responsiveness and architecture tested with mock-up robot and IMU analysis</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              
              <Card className="border-2 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                      <Target className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Flow Test in Pipe Rig</CardTitle>
                      <CardDescription>End-to-end system testing in controlled pipeline environment</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              
              <Card className="border-2 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Pilot with Utility/Industrial Partner</CardTitle>
                      <CardDescription>Real-world deployment with mid-sized municipality or industrial facility</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              
              <Card className="border-2 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                      <Globe className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Scale to Fleet/Swarm Deployments</CardTitle>
                      <CardDescription>Commercial rollout with multiple robots operating across network infrastructure</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
            
            <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 text-center">
              <p className="text-lg font-medium leading-relaxed">
                <span className="text-primary font-bold">Protection Strategy:</span> Patents will cover the mechanical 
                design and hardware architecture. Copyrights will protect the software in sensing and patching subsystems. 
                As AquaTrace scales, key operational knowledge will be documented as trade secrets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="border-2 border-primary bg-gradient-to-br from-primary/10 via-primary/5 to-background overflow-hidden relative">
            <CardHeader className="text-center space-y-4 pb-8">
              <h2 className="text-4xl font-bold tracking-tight">Ready to Transform Water Infrastructure?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join us in revolutionizing pipeline maintenance. Learn more about our technology, business model, 
                or connect with our team.
              </p>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center pb-8">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/technology">
                  Explore Technology
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/business">View Business Model</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
