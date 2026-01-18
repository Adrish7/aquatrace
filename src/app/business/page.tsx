import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, X, Target, Package, DollarSign } from "lucide-react";

export default function BusinessPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-24 pb-16 md:pt-32 md:pb-24 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl">
            Competition & Pricing
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            How AquaTrace compares to existing solutions and our transparent pricing model.
          </p>
        </div>
      </section>

      <Separator className="opacity-30" />

      {/* Competition Comparison */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="space-y-4">
            {/* External Sensors */}
            <Card className="border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-950 flex items-center justify-center">
                      <X className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">External Fixed Sensors</CardTitle>
                      <CardDescription>Monitor only, cannot repair</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* PIGs */}
            <Card className="border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-950 flex items-center justify-center">
                      <X className="h-5 w-5 text-orange-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Inline Inspection Tools (PIGs)</CardTitle>
                      <CardDescription>Inspection only, requires shutdown, $100K+ per unit</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Trenchless Rehab */}
            <Card className="border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-yellow-950 flex items-center justify-center">
                      <X className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Trenchless Rehabilitation</CardTitle>
                      <CardDescription>Reactive only, $100K+ per repair, still disruptive</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Manual Excavation */}
            <Card className="border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                      <X className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Manual Excavation</CardTitle>
                      <CardDescription>Extremely slow, highly disruptive, service outages</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* AquaTrace */}
            <Card className="border border-primary bg-primary/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary">AquaTrace RoverTracer</CardTitle>
                    <CardDescription className="text-base font-medium">
                      The only solution that detects, localizes, and seals in live pipelines
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Zero service disruption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>100% pipeline coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Autonomous operation</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>70-90% time reduction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Reusable units</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Early-stage intervention</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="opacity-30" />

      {/* Pricing Section */}
      <section className="bg-muted/20 py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-semibold mb-3">Pricing</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border border-primary bg-primary/5">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                      <Target className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">RoverTracer Unit</CardTitle>
                      <CardDescription>Annual subscription per robot</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-bold text-primary">$5,000</span>
                    <span className="text-muted-foreground">/year</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Target price per robot per year. Reusable and deployable multiple times.
                  </p>
                </CardContent>
              </Card>

              <Card className="border">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Package className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Patch & Resin</CardTitle>
                      <CardDescription>Per repair materials</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-3xl font-bold">$20</span>
                    <span className="text-muted-foreground">/patch</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Average cost per patch installation, including SealBoss Flexgel resin.
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
