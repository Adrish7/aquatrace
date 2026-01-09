import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Target } from "lucide-react";

export default function BusinessPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-16">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Competition & Pricing</h1>
          <p className="text-lg text-muted-foreground">
            How we compare to existing solutions and our pricing model.
          </p>
        </div>

        {/* Competition */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Competition</h2>
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Solution Type</TableHead>
                  <TableHead>Capabilities</TableHead>
                  <TableHead>Limitations</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">External fixed sensors</TableCell>
                  <TableCell>Continuous monitoring</TableCell>
                  <TableCell>Monitor only, no repair capability</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Inline inspection tools/PIGs</TableCell>
                  <TableCell>Detailed inspection data</TableCell>
                  <TableCell>Inspection-only, complex deployment, requires pipeline shutdown</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Trenchless rehab</TableCell>
                  <TableCell>Minimal excavation</TableCell>
                  <TableCell>Reactive, still disruptive, expensive</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Manual excavation</TableCell>
                  <TableCell>Direct access for repair</TableCell>
                  <TableCell>Slow, highly disruptive, expensive</TableCell>
                </TableRow>
                <TableRow className="bg-primary/5">
                  <TableCell className="font-medium">AquaTrace</TableCell>
                  <TableCell>Detect + localize + seal in live pipes</TableCell>
                  <TableCell>Early-stage intervention, minimal disruption</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Pricing */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Pricing</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Target className="mb-2 h-6 w-6 text-primary" />
                <CardTitle>RoverTracer Unit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">$5,000</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Target price per unit. Designed for multiple deployments to maximize ROI.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Starter Fleet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">20 units</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Recommended starter fleet for utility-scale deployment. Enables parallel inspection of multiple pipeline segments.
                </p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Optional Service Add-ons</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Training and certification programs</li>
                <li>Maintenance and support contracts</li>
                <li>Data analysis and reporting services</li>
                <li>Custom deployment planning</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

