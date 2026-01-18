"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/technology", label: "Technology" },
  { href: "/business", label: "Competition & Pricing" },
  { href: "/team", label: "Team" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full mt-4 sm:mt-6 md:mt-8">
      <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="w-full mx-2 sm:mx-4 md:mx-8 flex h-14 sm:h-16 items-center justify-between px-2 sm:px-4 md:px-6 lg:px-8">
          {/* Left - AquaTrace */}
          <Link href="/" className="flex items-center space-x-2 h-7 sm:h-8">
            <span className="text-lg sm:text-xl font-bold text-primary leading-none">AquaTrace</span>
          </Link>
          
          {/* Center - Middle navigation items */}
          <div className="hidden items-center gap-6 md:flex absolute left-1/2 -translate-x-1/2">
            {navItems.filter(item => item.href !== "/" && item.href !== "/team").map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Right - Team */}
          <div className="hidden items-center md:flex">
            <Link
              href="/team"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/team"
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              Team
            </Link>
          </div>
          
          {/* Mobile Navigation */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === item.href
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
