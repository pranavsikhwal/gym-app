import { cn } from "@/lib/utils";
import React from "react";
import { Portal, PortalBackdrop } from "@/components/ui/portal";
import { Button } from "@/components/ui/button";
import { XIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <Button
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label="Toggle menu"
        className="md:hidden"
        onClick={() => setOpen(!open)}
        size="icon"
        variant="outline"
      >
        {open ? (
          <XIcon className="size-4.5" />
        ) : (
          <MenuIcon className="size-4.5" />
        )}
      </Button>
      {open && (
        <Portal className="top-14" id="mobile-menu ">
          <PortalBackdrop />
          <div
            className={cn(
              "data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
              "size-full p-4",
            )}
            data-slot={open ? "open" : "closed"}
          >
            <div className="mt-12 flex flex-col gap-2">
              <Button className="w-full" variant="outline " asChild>
                <Link href="/AboutUs">About Us</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href={"/ContactUs"}>Contact Us</Link>
              </Button>
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
}
