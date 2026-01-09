import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Search, MapPin, Droplet, AlertCircle, Zap, Shield, CheckCircle2, Cpu, Waves, Gauge, Settings2, Radio } from "lucide-react";
import LoopingAnimation from "@/components/loopinganimation";

export default function TechnologyPage() {
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
            <Zap className="h-4 w-4" />
            Advanced In-Pipe Technology
          </div>
          
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            How RoverTracer Works
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            An autonomous, untethered robot combining cutting-edge detection technology, precise localization, 
            and in-situ repair capabilities—all operating within live water pipelines without service disruption.
          </p>
        </div>
      </section>

      {/* Detection Technology - Enhanced */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Crack Detection Technology</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced EMAT sensing combined with sophisticated signal processing enables reliable detection 
              of hairline cracks in live water pipelines
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10">
                    <Radio className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">EMAT Technology</h3>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    RoverTracer uses <strong className="text-foreground">EMAT (Electromagnetic Acoustic Transducer)</strong> technology 
                    to detect cracks in live water pipelines. The system employs <strong className="text-foreground">S0 guided waves</strong> 
                    that propagate along the pipe wall, with transmitters and receivers positioned to capture back-scatter from defects.
                  </p>
                  
                  <p>
                    Unlike traditional ultrasonic methods, EMAT sensors don't require direct contact or coupling agents, 
                    making them ideal for in-pipe environments with flowing water and surface residue.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10">
                    <Cpu className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Signal Processing</h3>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Signal processing uses a <strong className="text-foreground">Hilbert envelope</strong> to extract amplitude 
                    envelopes from received signals. Statistical thresholding based on <strong className="text-foreground">POD 
                    (Probability of Detection)</strong> and <strong className="text-foreground">PFA (Probability of False Alarm)</strong> 
                    metrics, analyzed through <strong className="text-foreground">ROC (Receiver Operating Characteristic)</strong> curves, 
                    enables reliable crack detection while minimizing false positives.
                  </p>
                  
                  <div className="flex items-start gap-3 pt-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm"><strong>90%+ detection accuracy</strong> with minimal false positives</p>
                  </div>
                </div>
              </div>

              <Card className="border-2 border-primary/50 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <AlertCircle className="h-5 w-5" />
                    Evidence Base & Validation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Based on published guided-wave inspection research; adapted for continuous scanning in live water pipelines. 
                    Research foundation from NDT&E International, 2023. Validated through consultation with Uditi Gupta, 
                    EECS student at UC Berkeley, and supported by literature review of guided acoustic wave sensors integrated 
                    with mobile robots.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-2 border-primary/20 shadow-xl bg-gradient-to-br from-primary/5 to-background">
                <Image
                  src="/figures/fig4_noise_vs_defect.jpeg"
                  alt="Noise vs defect detection analysis"
                  fill
                  className="object-contain p-6"
                />
              </div>
              <Card className="border-2">
                <CardContent className="pt-6">
                  <p className="text-center text-sm font-medium text-foreground mb-2">
                    Signal-to-Noise Analysis
                  </p>
                  <p className="text-center text-xs text-muted-foreground">
                    Demonstrating detection capability for hairline cracks in noisy pipeline environments
                  </p>
                </CardContent>
              </Card>
              
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-2 border-primary/20 shadow-xl bg-gradient-to-br from-primary/5 to-background">
                <Image
                  src="/figures/fig5_roc.jpeg"
                  alt="ROC curve analysis"
                  fill
                  className="object-contain p-6"
                />
              </div>
              <Card className="border-2">
                <CardContent className="pt-6">
                  <p className="text-center text-sm font-medium text-foreground mb-2">
                    ROC Curve Analysis
                  </p>
                  <p className="text-center text-xs text-muted-foreground">
                    Threshold optimization for balancing detection accuracy and false alarm rates
                  </p>
                  <p className="text-center text-xs text-muted-foreground italic mt-2">
                    Research foundation from NDT&E International, 2023
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Video Animation Section */}
      <section className="bg-gradient-to-b from-background via-muted/30 to-background py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">RoverTracer in Action</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Watch RoverTracer operate autonomously through live water pipelines—detecting, localizing, 
                and sealing early-stage cracks in real-time without service disruption
              </p>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-2 border-primary/20 shadow-2xl bg-gradient-to-br from-primary/5 to-background">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent z-10 pointer-events-none"></div>
              <div className="relative w-full h-full min-h-[400px]">
                <LoopingAnimation 
                  src="/videos/FullSimulation.mp4"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Search className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Detection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Continuous scanning using EMAT sensors as RoverTracer moves through live pipelines
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Localization</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Precise defect localization and surface preparation when anomalies are detected
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Droplet className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Repair</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    In-situ sealant application prevents crack progression without excavation
                  </p>
                </CardContent>
              </Card>
            </div>
            </div>
          </div>
        </section>

      {/* Technical Specifications - Enhanced */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Technical Specifications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Engineering excellence in a compact, autonomous package designed for reliability in live water pipelines
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Waves className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Locomotion System</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <strong>Bidirectional water thrusters</strong> controlled by ESCs for forward/reverse movement
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Omnidirectional wheels</strong> mounted at 120° with spring suspension for rotation and stability
                  </p>
                  <p className="text-muted-foreground">
                    Accommodates pipe diameters from <strong>100mm+</strong> with debris tolerance
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Radio className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Detection System</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <strong>EMAT sensors</strong> with S0 guided wave technology
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Hilbert envelope</strong> signal processing for noise reduction
                  </p>
                  <p className="text-muted-foreground">
                    <strong>90%+ detection accuracy</strong> with ROC-optimized thresholds
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Settings2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Patching Mechanism</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <strong>4 linear actuators</strong> for precise patch holder positioning
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Lyapunov-based control</strong> for vibration suppression and stability
                  </p>
                  <p className="text-muted-foreground">
                    <strong>SealBoss Flexgel</strong> hydrophilic polyurethane resin injection
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Electronics Architecture</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <strong>Raspberry Pi 4</strong> for sensor management and data processing
                  </p>
                  <p className="text-muted-foreground">
                    <strong>ESP32 microcontroller</strong> for actuator and motor control
                  </p>
                  <p className="text-muted-foreground">
                    <strong>IMU</strong> for position and orientation tracking
                  </p>
          </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Safety Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <strong>Waterproof enclosures</strong> rated for continuous operation
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Minimal flow obstruction</strong> design for live pipeline operation
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Manual override mode</strong> for emergency scenarios
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Gauge className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <strong>Autonomous operation</strong> for kilometers of pipeline coverage
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Reusable units</strong> for multiple deployments
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Swarm capability</strong> for parallel network inspection
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lyapunov Control - Enhanced */}
      <section className="bg-gradient-to-b from-background via-muted/30 to-background py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">Advanced Control System</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Lyapunov-based control framework ensures stable, precise patch deployment in dynamic pipeline environments
              </p>
            </div>

            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Gauge className="h-7 w-7 text-primary" />
                  Lyapunov Stability Control
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Minimizing vibrations and increasing stability are crucial for ensuring patch adhesion and meeting 
                  safety regulations. Our multi-linear actuated patch holder requires precise control to prevent 
                  bouncing and ensure proper resin delivery.
                </p>

                <div className="rounded-lg border-2 bg-background p-6 space-y-4">
                  <h4 className="font-semibold text-lg">How It Works</h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-xs mt-0.5">
                        1
                      </div>
                      <p>
                        <strong className="text-foreground">Measure errors:</strong> Position error and force error are 
                        calculated by comparing measured values to desired values
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-xs mt-0.5">
                        2
                      </div>
                      <p>
                        <strong className="text-foreground">Calculate stability metric:</strong> Values are plugged into 
                        the Lyapunov function to obtain a stability metric. Closer to 0 means fewer vibrations
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-xs mt-0.5">
                        3
                      </div>
                      <p>
                        <strong className="text-foreground">Adjust velocity:</strong> Since errors depend on velocity, 
                        we command actuator velocity as negative feedback of the errors, guiding the system toward stability
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <Card className="border-2 bg-primary/5">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Benefits</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Significant reduction in systematic and random error</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Consistent, safe patch deployment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Prevents bouncing and water leakage</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 bg-primary/5">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Validation</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>IMU analysis confirmed reduced acceleration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Lower variance indicating effective vibration suppression</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Physical prototype validated on test rig</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
          </div>
        </section>

      {/* Protection & IP */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="border-2 border-primary bg-gradient-to-br from-primary/10 via-primary/5 to-background overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-bl-full blur-3xl"></div>
            </div>
            <CardHeader className="text-center space-y-4 relative z-10">
              <Shield className="h-12 w-12 text-primary mx-auto" />
              <CardTitle className="text-3xl">Intellectual Property Protection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20">
                    <span className="text-2xl">📜</span>
                  </div>
                  <h4 className="font-semibold">Patents</h4>
                  <p className="text-xs text-muted-foreground">
                    Mechanical design and hardware architecture will be protected through patent filing
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20">
                    <span className="text-2xl">©</span>
                  </div>
                  <h4 className="font-semibold">Copyrights</h4>
                  <p className="text-xs text-muted-foreground">
                    Software in sensing and patching subsystems will be copyrighted
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h4 className="font-semibold">Trade Secrets</h4>
                  <p className="text-xs text-muted-foreground">
                    Key operational knowledge documented as trade secrets as AquaTrace scales
                  </p>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground pt-4 border-t">
                RoverTracer's competitive advantage lies in its unique integration of crack detection and patching 
                subsystems—making it the first device capable of detecting internal pipe cracks under flowing water 
                conditions and sealing them in situ without excavation.
              </p>
            </CardContent>
          </Card>
      </div>
      </section>
    </div>
  );
}
