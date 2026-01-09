import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Wrench, TrendingUp, Microscope } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-16">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Our Team</h1>
          <p className="text-lg text-muted-foreground">
            The team behind AquaTrace.
          </p>
        </div>

        {/* Team Roles */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Team Roles</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden rounded-lg bg-muted">
                  <Image
                    src="/team/adrish.jpeg"
                    alt="Adrish"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>Adrish</CardTitle>
                <CardDescription>Software Lead</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Leads software development, signal processing algorithms, and system integration. Responsible for the EMAT signal processing pipeline and statistical thresholding implementation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden rounded-lg bg-muted">
                  <Image
                    src="/team/ruhan.jpeg"
                    alt="Ruhan"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>Ruhan</CardTitle>
                <CardDescription>Mechanical / Locomotion</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Designs and develops the robot's mechanical systems, locomotion mechanisms, and waterproof housing. Ensures reliable operation in live water pipeline environments.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden rounded-lg bg-muted">
                  <Image
                    src="/team/krisha.jpeg"
                    alt="Krisha"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>Krisha</CardTitle>
                <CardDescription>Business Strategy</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Develops go-to-market strategy, market analysis, and business model. Leads customer discovery and partnership development efforts.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden rounded-lg bg-muted">
                  <Image
                    src="/team/arty.jpeg"
                    alt="Arty"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>Arty</CardTitle>
                <CardDescription>Research & Sensing Integration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Conducts research on guided-wave inspection, validates sensing approaches, and integrates EMAT technology into the RoverTracer platform. Leads benchtop validation and testing.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden rounded-lg bg-muted">
                  <Image
                    src="/team/elizabeth.jpeg"
                    alt="Elizabeth"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>Elizabeth</CardTitle>
                <CardDescription>Research & Sensing Integration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Conducts research on guided-wave inspection, validates sensing approaches, and integrates EMAT technology into the RoverTracer platform. Leads benchtop validation and testing.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}

