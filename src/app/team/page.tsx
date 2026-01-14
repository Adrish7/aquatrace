import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Wrench, TrendingUp, Microscope, Users, Sparkles, Lightbulb } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      

      {/* Team Members */}
      <section className="bg-gradient-to-b from-background via-muted/30 to-background py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-6xl space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">Our Team Members</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Each member brings unique expertise and passion to make RoverTracer a reality
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Adrish */}
              <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
                <CardHeader className="relative z-10">
                  <div className="relative mb-6 aspect-[3/4] w-full overflow-hidden rounded-2xl border-2 border-primary/20 group-hover:border-primary/50 transition-colors bg-gradient-to-br from-primary/5 to-background">
                    <Image
                      src="/team/adrish.jpeg"
                      alt="Adrish - Software Lead"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Code className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">Adrish</CardTitle>
                    </div>
                    <CardDescription className="text-base font-medium">Software Lead</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Leads software development, signal processing algorithms, and system integration. Responsible 
                    for the EMAT signal processing pipeline, statistical thresholding implementation, and the 
                    Lyapunov-based control framework.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 border-t">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      Signal Processing
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      System Integration
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      Control Systems
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Ruhan */}
              <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
                <CardHeader className="relative z-10">
                  <div className="relative mb-6 aspect-[3/4] w-full overflow-hidden rounded-2xl border-2 border-primary/20 group-hover:border-primary/50 transition-colors bg-gradient-to-br from-primary/5 to-background">
                    <Image
                      src="/team/ruhan.jpeg"
                      alt="Ruhan - Mechanical Design Lead"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Wrench className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">Ruhan</CardTitle>
                    </div>
                    <CardDescription className="text-base font-medium">Mechanical Design & Locomotion Lead</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Designs and develops the robot's mechanical systems, locomotion mechanisms (omnidirectional wheels, 
                    water thrusters), waterproof housing, and patching mechanism. Ensures reliable operation in live 
                    water pipeline environments.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 border-t">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      CAD Design
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      Locomotion
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      Patching Mechanism
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Krisha */}
              <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
                <CardHeader className="relative z-10">
                  <div className="relative mb-6 aspect-[3/4] w-full overflow-hidden rounded-2xl border-2 border-primary/20 group-hover:border-primary/50 transition-colors bg-gradient-to-br from-primary/5 to-background">
                    <Image
                      src="/team/krisha.jpeg"
                      alt="Krisha - Business Strategy Lead"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <TrendingUp className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">Krisha</CardTitle>
                    </div>
                    <CardDescription className="text-base font-medium">Business Strategy Lead</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Develops go-to-market strategy, market analysis, and business model. Leads customer discovery, 
                    partnership development efforts, and financial planning. Ensures AquaTrace's business model 
                    aligns with market needs and investor expectations.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 border-t">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      Market Analysis
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      Business Model
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      Partnerships
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Arty */}
              <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
                <CardHeader className="relative z-10">
                  <div className="relative mb-6 aspect-[3/4] w-full overflow-hidden rounded-2xl border-2 border-primary/20 group-hover:border-primary/50 transition-colors bg-gradient-to-br from-primary/5 to-background">
                    <Image
                      src="/team/arty.jpeg"
                      alt="Arty - Research & Sensing Integration"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Microscope className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">Arty</CardTitle>
                    </div>
                    <CardDescription className="text-base font-medium">Research & Sensing Integration</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Conducts research on guided-wave inspection, validates sensing approaches, and integrates EMAT 
                    technology into the RoverTracer platform. Leads benchtop validation and testing. Works with both 
                    software and hardware to bridge technical areas.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 border-t">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      EMAT Research
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      Sensor Integration
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      Validation Testing
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Elizabeth */}
              <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
                <CardHeader className="relative z-10">
                  <div className="relative mb-6 aspect-[3/4] w-full overflow-hidden rounded-2xl border-2 border-primary/20 group-hover:border-primary/50 transition-colors bg-gradient-to-br from-primary/5 to-background">
                    <Image
                      src="/team/elizabeth.jpeg"
                      alt="Elizabeth - Research & Sensing Integration"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Microscope className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">Elizabeth</CardTitle>
                    </div>
                    <CardDescription className="text-base font-medium">Research & Sensing Integration</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Conducts research on guided-wave inspection, validates sensing approaches, and integrates EMAT 
                    technology into the RoverTracer platform. Leads benchtop validation and testing. Brings experience 
                    in both software and hardware to navigate unfamiliar technical challenges.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 border-t">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      EMAT Research
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      Sensor Integration
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      Validation Testing
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      

      
    </div>
  );
}
