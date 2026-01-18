import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">AquaTrace</h3>
            <p className="text-sm text-muted-foreground">
              Protect water pipelines from within. Autonomous in-pipe crack detection and early repair without disruption.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/technology" className="text-muted-foreground hover:text-primary">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/business" className="text-muted-foreground hover:text-primary">
                  Competition & Pricing
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-primary">
                  Team
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-sm text-muted-foreground">
          <p>© 2026 AquaTrace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

