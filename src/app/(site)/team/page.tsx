import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Wrench, TrendingUp, Microscope } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Team Members */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-24 pb-20 md:pt-32 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-3">Our Team</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
            {/* Adrish */}
            <Card className="border flex flex-col">
              <CardHeader className="pb-3">
                <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden rounded-lg border bg-background">
                  <Image
                    src="/team/adrish.jpeg"
                    alt="Adrish - Software Lead"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Code className="h-4 w-4 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Adrish</CardTitle>
                </div>
                <CardDescription>Software Lead</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Leads software development, signal processing algorithms, and system integration.
                </p>
              </CardContent>
            </Card>

            {/* Ruhan */}
            <Card className="border flex flex-col">
              <CardHeader className="pb-3">
                <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden rounded-lg border bg-background">
                  <Image
                    src="/team/ruhan.jpeg"
                    alt="Ruhan - Mechanical Design Lead"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Wrench className="h-4 w-4 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Ruhan</CardTitle>
                </div>
                <CardDescription>Mechanical Design & Locomotion Lead</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Designs mechanical systems, locomotion mechanisms, and waterproof housing.
                </p>
              </CardContent>
            </Card>

            {/* Krisha */}
            <Card className="border flex flex-col">
              <CardHeader className="pb-3">
                <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden rounded-lg border bg-background">
                  <Image
                    src="/team/krisha.jpeg"
                    alt="Krisha - Business Strategy Lead"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Krisha</CardTitle>
                </div>
                <CardDescription>Business Strategy Lead</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Develops go-to-market strategy, market analysis, and business model.
                </p>
              </CardContent>
            </Card>

            {/* Arty & Elizabeth - Centered */}
            <div className="md:col-span-3 flex justify-center gap-6">
              {/* Arty */}
              <Card className="border flex flex-col w-full md:w-auto md:max-w-[calc((100%-2*1.5rem)/3)]">
                <CardHeader className="pb-3">
                  <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden rounded-lg border bg-background">
                    <Image
                      src="/team/arty.jpeg"
                      alt="Arty - Research & Sensing Integration"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Microscope className="h-4 w-4 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Arty</CardTitle>
                  </div>
                  <CardDescription>Research & Sensing Integration</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Conducts research on guided-wave inspection and integrates EMAT technology.
                  </p>
                </CardContent>
              </Card>

              {/* Elizabeth */}
              <Card className="border flex flex-col w-full md:w-auto md:max-w-[calc((100%-2*1.5rem)/3)]">
                <CardHeader className="pb-3">
                  <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden rounded-lg border bg-background">
                    <Image
                      src="/team/elizabeth.jpeg"
                      alt="Elizabeth - Research & Sensing Integration"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Microscope className="h-4 w-4 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Elizabeth</CardTitle>
                  </div>
                  <CardDescription>Research & Sensing Integration</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Conducts research on guided-wave inspection and validates sensing approaches.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
