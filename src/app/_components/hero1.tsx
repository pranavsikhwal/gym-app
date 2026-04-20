import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import heroBg from "./hero-image.jpg";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="hidden sm:mb-4 sm:flex sm:justify-center">
            <div className="relative rounded-full border px-3 py-1 text-sm">
              Trusted by 500+ members in Amritsar.
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-foreground text-4xl leading-tight font-bold md:text-5xl">
              Forge Your Strongest Self
            </h1>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              Train harder, recover smarter, and build the body you've always
              wanted — with expert guidance at every step.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-3">
              <Button size="lg" asChild>
                <Link href="#">Get started</Link>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="font-semibold"
                asChild
              >
                <Link href="#">
                  Learn more <ArrowRightIcon />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
