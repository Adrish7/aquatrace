import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Target, CheckCircle2, X, TrendingUp, DollarSign, Package, Users, Globe, Award, Zap, Check } from "lucide-react";

export default function BusinessPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative mx-auto w-full max-w-7xl px-6 py-20 md:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-5xl space-y-8 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary w-fit mx-auto">
            <TrendingUp className="h-4 w-4" />
            Market Opportunity
          </div>
          
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Competition & Pricing
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            How AquaTrace compares to existing solutions and our transparent, value-driven pricing model 
            for transforming water infrastructure maintenance
          </p>
        </div>
      </section>

      {/* Competition Comparison - Enhanced */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Competitive Landscape</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Existing solutions are fragmented, expensive, and disruptive. RoverTracer is the first 
              unified platform that detects, localizes, and repairs cracks in live pipelines.
            </p>
          </div>

          {/* Visual Comparison Cards */}
          <div className="space-y-6">
            {/* External Sensors */}
            <Card className="border-2 border-muted hover:border-red-300 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-950 flex items-center justify-center">
                      <X className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">External Fixed Sensors</CardTitle>
                      <CardDescription>Pressure, acoustic, and sensor monitoring systems</CardDescription>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-red-950 text-red-300 text-sm font-medium">
                    Monitor Only
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-muted-foreground">Capabilities</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        Continuous monitoring
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        Indirect signal detection
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-destructive">Critical Limitations</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span><strong>Monitor only</strong>—cannot repair defects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span><strong>Limited accuracy</strong>—indirect signals only</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span><strong>No in-pipe capability</strong>—external mounting required</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* PIGs */}
            <Card className="border-2 border-muted hover:border-orange-300 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-950 flex items-center justify-center">
                      <X className="h-6 w-6 text-orange-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Inline Inspection Tools (PIGs)</CardTitle>
                      <CardDescription>Pipeline inspection gauges and inline inspection devices</CardDescription>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-orange-950 text-orange-300 text-sm font-medium">
                    Inspection Only
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-muted-foreground">Capabilities</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        Detailed inspection data
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        Internal pipeline access
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-destructive">Critical Limitations</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span><strong>Tens to hundreds of thousands</strong> per unit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span><strong>Requires pipeline shutdown</strong> for deployment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span><strong>No repair capability</strong>—inspection only</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span><strong>Complex deployment</strong> and retrieval process</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trenchless Rehab */}
            <Card className="border-2 border-muted hover:border-yellow-300 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-yellow-950 flex items-center justify-center">
                      <X className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Trenchless Rehabilitation (CIPP)</CardTitle>
                      <CardDescription>Cured-in-place pipe lining and trenchless repair methods</CardDescription>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-yellow-950 text-yellow-300 text-sm font-medium">
                    Reactive Only
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-muted-foreground">Capabilities</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        Minimal excavation required
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        Can address severe damage
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-destructive">Critical Limitations</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span><strong>Reactive only</strong>—used when damage is extreme</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span><strong>Still disruptive</strong>—requires access points</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span><strong>Very expensive</strong>—typically $100K+ per repair</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span><strong>No early-stage intervention</strong>—only severe damage</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Manual Excavation */}
            <Card className="border-2 border-muted hover:border-gray-400 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center">
                      <X className="h-6 w-6 text-gray-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Manual Excavation</CardTitle>
                      <CardDescription>The dominant industry practice for pipeline repair</CardDescription>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm font-medium">
                    Traditional
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-muted-foreground">Capabilities</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        Direct access for repair
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        Universal applicability
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-destructive">Critical Limitations</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span><strong>Extremely slow</strong>—weeks for single repairs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span><strong>Highly disruptive</strong>—road closures, traffic congestion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span><strong>Labor-intensive</strong>—significant manpower required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span><strong>Service outages</strong>—water shutdowns for communities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span><strong>59%+ indirect costs</strong>—disruption, emissions, noise</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AquaTrace - Highlighted */}
            <Card className="border-2 border-primary bg-gradient-to-br from-primary/10 via-primary/5 to-background shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-bl-full blur-3xl"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                      <Check className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-2xl text-primary">AquaTrace RoverTracer</CardTitle>
                        <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                          ONLY SOLUTION
                        </span>
                      </div>
                      <CardDescription className="text-base font-medium">
                        The first autonomous robot that detects, localizes, and seals early-stage cracks in live pipelines
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-primary">Unmatched Capabilities</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Detect + Localize + Seal</strong> in live pipes—all in one system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Zero service disruption</strong>—operates in live pipelines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>100% pipeline coverage</strong> with EMAT technology</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Autonomous operation</strong>—minimal human intervention</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Reusable units</strong>—significant cost savings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Swarm capability</strong>—rapid network coverage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Early-stage intervention</strong>—prevents large failures</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-primary">Competitive Advantages</h4>
                    <div className="space-y-4">
                      <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="h-5 w-5 text-primary" />
                          <span className="font-semibold text-sm">70-90% Time Reduction</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Hours vs. weeks for traditional methods
                        </p>
                      </div>
                      <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          <span className="font-semibold text-sm">Cost-Effective</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          $5,000/year vs. $100K+ for trenchless methods
                        </p>
                      </div>
                      <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="h-5 w-5 text-primary" />
                          <span className="font-semibold text-sm">10-20 Years Extended Life</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Prevents small cracks from progressing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm text-muted-foreground italic">
                    <strong className="text-foreground">Note:</strong> RoverTracer is purpose-built for early-stage defects. 
                    While it doesn't address larger circumferential failures directly, this is intentional—large failures 
                    occur from small defects that were ignored. By focusing on early intervention, RoverTracer prevents 
                    these catastrophic failures from ever occurring.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section - Enhanced */}
      <section className="bg-gradient-to-b from-background via-muted/30 to-background py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">Transparent, Value-Driven Pricing</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Subscription-based model designed for scalability and long-term infrastructure health. 
                Pricing structured to balance affordability for governments with sustainable margins for AquaTrace.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Main Pricing Card */}
              <Card className="border-2 border-primary bg-gradient-to-br from-primary/10 via-primary/5 to-background relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary">
                      <Target className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">RoverTracer Unit</CardTitle>
                      <CardDescription>Annual subscription per robot</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-primary">$5,000</span>
                    <span className="text-muted-foreground">/year</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Target price per robot per year. Designed for multiple deployments to maximize ROI. 
                    Each robot can inspect and repair kilometers of pipeline annually.
                  </p>
                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Reusable and deployable multiple times</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Autonomous operation reduces labor costs</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Significant cost savings vs. traditional methods</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Patches Pricing */}
              <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                      <Package className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Patch & Resin</CardTitle>
                      <CardDescription>Per repair materials</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">$20</span>
                    <span className="text-muted-foreground">/patch</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Average cost per patch installation, including SealBoss Flexgel resin and patch materials. 
                    Can be purchased separately on a per-repair basis or incorporated into tiered service plans.
                  </p>
                  <div className="rounded-lg bg-muted p-3 text-sm">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Production cost:</strong> ~$12.14/patch
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Business Model Details */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <DollarSign className="h-6 w-6 text-primary" />
                  Business Model & Revenue Streams
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Primary Revenue: B2G Subscriptions</h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        Annual subscriptions for RoverTracer robots. Deployment scales based on pipeline infrastructure:
                      </p>
                      <ul className="space-y-2 pl-4">
                        <li className="flex items-start gap-2">
                          <Globe className="h-4 w-4 text-primary mt-0.5" />
                          <span><strong>China:</strong> 1M+ km pipelines → Thousands of robots</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Globe className="h-4 w-4 text-primary mt-0.5" />
                          <span><strong>Singapore:</strong> 6,000 km → ~100 robots</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Globe className="h-4 w-4 text-primary mt-0.5" />
                          <span><strong>Average country:</strong> ~300 robots → $1.5M/year revenue</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Additional Revenue Streams</h4>
                    <div className="space-y-3">
                      <Card className="border-2 bg-background">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm">Data Analytics Platform</CardTitle>
                        </CardHeader>
                        <CardContent className="text-xs text-muted-foreground">
                          Highly accurate pipe condition data for planning large rehabilitation projects
                        </CardContent>
                      </Card>
                      <Card className="border-2 bg-background">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm">Enhanced Sensing Modules</CardTitle>
                        </CardHeader>
                        <CardContent className="text-xs text-muted-foreground">
                          Optional cameras, advanced sensing modules for specialized applications
                        </CardContent>
                      </Card>
                      <Card className="border-2 bg-background">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm">Training & Certification</CardTitle>
                        </CardHeader>
                        <CardContent className="text-xs text-muted-foreground">
                          Operator training programs and certification services
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border-2 bg-primary/5 p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-2">Cost Breakdown</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Baseline robot: ~$881.46</li>
                        <li>• Per patch: ~$12.14</li>
                        <li>• <strong>400% profit margin</strong> on units</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Pricing Strategy</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Balanced for government budgets</li>
                        <li>• Sustainable margins for growth</li>
                        <li>• Scalable with infrastructure needs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Market Opportunity */}
            <Card className="border-2 border-primary bg-gradient-to-br from-primary/10 via-primary/5 to-background overflow-hidden relative">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-bl-full blur-3xl"></div>
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <TrendingUp className="h-7 w-7 text-primary" />
                  Market Opportunity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-primary">$70B</div>
                    <p className="text-sm text-muted-foreground">2024 Market Size</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-primary">$166B</div>
                    <p className="text-sm text-muted-foreground">2034 Projected Market</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-primary">137%</div>
                    <p className="text-sm text-muted-foreground">10-Year Growth</p>
                  </div>
                </div>
                <p className="text-center text-muted-foreground">
                  As urban density intensifies and infrastructure ages globally, the need for scalable, 
                  non-disruptive pipe inspection and repair will only increase.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
