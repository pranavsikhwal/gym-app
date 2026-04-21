"use client";
import { cn } from "@/lib/utils";
import { Logo, LogoIcon } from "@/components/logo";
import { useScroll } from "@/components/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import Link from "next/link";

export function Header() {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mx-auto w-full max-w-5xl border-transparent border-b md:rounded-md md:border md:transition-all md:ease-out",
        {
          "border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50 md:top-2 md:max-w-3xl md:shadow":
            scrolled,
        },
      )}
    >
      <nav
        className={cn(
          "flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out",
          {
            "md:px-2": scrolled,
          },
        )}
      >
        <div className="md:flex">
          <a
            className="rounded-md p-2 hover:bg-muted dark:hover:bg-muted/50"
            href={"/"}
          >
            <Logo className="h-6 w-auto hidden md:block" />
            <LogoIcon className="h-8 w-8 block md:hidden" />
          </a>
          <span className="mt-3 hidden md:block font-semibold tracking-wide">
            KASRAT
          </span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <div>
            <Button variant={"secondary"} asChild>
              <Link href={"/AboutUs"}>About Us</Link>
            </Button>
          </div>

          <Button size="sm" asChild>
            <Link href="#">Contact Us </Link>
          </Button>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}
