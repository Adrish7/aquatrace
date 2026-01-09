import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Wrench, TrendingUp, Microscope, Users, Sparkles, Lightbulb } from "lucide-react";

export default function TeamPage() {
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
            <Users className="h-4 w-4" />
            Meet the Team
          </div>
          
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            The Team Behind AquaTrace
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            A diverse team of engineers, researchers, and strategists united by a shared vision: 
            revolutionizing water infrastructure through autonomous in-pipe repair technology.
          </p>
        </div>
      </section>

      {/* Team Story */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Sparkles className="h-7 w-7 text-primary" />
                How We Started
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our school's InnovationLab is a haven for many. Throughout the day, you'll find students always 
                tinkering with something. It's the same for us. Having similar free periods, the five of us kept 
                crossing paths, and over time, the awkward eye contacts turned to asking where the M4 screws were, 
                which turned to deep inquiries about each other's prototypes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As those conversations grew, we started learning from one another—mechanical components from one, 
                programming libraries from the other—and realised how complementary our skills were for a challenge 
                like CONRAD. Adrish would lead the software development, Ruhan the mechanical design, while Krisha 
                would handle the business strategy. And with experience in both software and hardware, Arty and 
                Elizabeth would manoeuvre the unfamiliar technical areas we would inevitably encounter.
              </p>
              <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-6 mt-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">The moment it clicked:</strong> One day, on a bus together, 
                  our route was abruptly diverted. Looking out the window, we saw soaked workers, excavated pavements, 
                  and traffic all from a simple crack—that's when the idea for AquaTrace hit us.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

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
                  <div className="relative mb-6 aspect-[3/4] w-full overflow-hidden rounded-2xl border-2 border-primary/20 group-hover:border-primary/50 transition-colors bg-gradient-to-br from-primary/5 to-background flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto flex items-center justify-center">
                        <TrendingUp className="h-12 w-12 text-primary/40" />
                      </div>
                      <p className="text-xs text-muted-foreground">Photo Coming Soon</p>
                    </div>
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
                  <div className="relative mb-6 aspect-[3/4] w-full overflow-hidden rounded-2xl border-2 border-primary/20 group-hover:border-primary/50 transition-colors bg-gradient-to-br from-primary/5 to-background flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto flex items-center justify-center">
                        <Lightbulb className="h-12 w-12 text-primary/40" />
                      </div>
                      <p className="text-xs text-muted-foreground">Photo Coming Soon</p>
                    </div>
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

      {/* Team Strengths */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Why Our Team Succeeds</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complementary skills, shared vision, and a collaborative approach to solving complex challenges
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Software Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Advanced signal processing, control systems, and system integration expertise. Expertise in 
                  MATLAB, Python, and embedded systems programming.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Mechanical Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  CAD design, prototyping, and manufacturing expertise. Experience with robotics, locomotion 
                  systems, and waterproof engineering.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Business Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Market analysis, business model development, and customer discovery. Understanding of 
                  government procurement and infrastructure markets.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Microscope className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Research & Validation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Literature review, expert consultation, and experimental validation. Strong foundation in 
                  NDT methods and sensor technology.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Collaborative Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Team members with cross-functional expertise bridge gaps between disciplines. Open 
                  communication and knowledge sharing drive innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Problem-Solving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Hands-on experience in InnovationLab environment. Ability to prototype quickly, iterate 
                  based on testing, and solve complex technical challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Mission */}
      <section className="bg-gradient-to-b from-background via-muted/30 to-background py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card className="border-2 border-primary bg-gradient-to-br from-primary/10 via-primary/5 to-background overflow-hidden relative">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-bl-full blur-3xl"></div>
              </div>
              <CardHeader className="text-center space-y-4 relative z-10">
                <Sparkles className="h-12 w-12 text-primary mx-auto" />
                <CardTitle className="text-3xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <p className="text-center text-lg text-muted-foreground leading-relaxed">
                  To revolutionize water infrastructure maintenance by developing autonomous, in-pipe repair 
                  technology that prevents water loss, reduces disruption, and extends the life of critical 
                  infrastructure—all while operating in live pipelines without service interruption.
                </p>
                <div className="grid md:grid-cols-3 gap-6 pt-6 border-t">
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-primary">126T</div>
                    <p className="text-xs text-muted-foreground">Litres of water to save annually</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-primary">260K</div>
                    <p className="text-xs text-muted-foreground">Water main breaks to prevent</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-primary">$70B</div>
                    <p className="text-xs text-muted-foreground">Market opportunity</p>
                  </div>
                </div>
                <p className="text-center text-sm text-muted-foreground pt-4">
                  Aligned with UN SDGs: Clean Water & Sanitation, and Sustainable Cities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
