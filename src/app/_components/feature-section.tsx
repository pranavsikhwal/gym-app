import { cn } from "@/lib/utils";
import type React from "react";
import { GridPattern } from "@/components/ui/grid-pattern";
import {
  ZapIcon,
  Timer,
  Flame,
  Salad,
  Handshake,
  MapPinCheck,
} from "lucide-react";

type FeatureType = {
  title: string;
  icon: React.ReactNode;
  description: string;
};

export function FeatureSection() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance font-medium text-2xl md:text-4xl lg:text-5xl">
          Why Choose Kasrat?
        </h2>
        <p className="mt-4 text-balance text-muted-foreground text-sm md:text-base">
          Power. Speed. Control.
        </p>
      </div>

      <div className="overflow-hidden rounded-lg border">
        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard feature={feature} key={feature.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function FeatureCard({
  feature,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  feature: FeatureType;
}) {
  return (
    <div
      className={cn("relative overflow-hidden bg-background p-6", className)}
      {...props}
    >
      <div className="mask-[radial-gradient(farthest-side_at_top,white,transparent)] pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 size-full">
        <GridPattern
          className="absolute inset-0 size-full stroke-foreground/20"
          height={40}
          width={40}
          x={20}
        />
      </div>
      <div className="[&_svg]:size-6 [&_svg]:text-foreground/75">
        {feature.icon}
      </div>
      <h3 className="mt-10 text-sm md:text-base">{feature.title}</h3>
      <p className="relative z-20 mt-2 font-light text-muted-foreground text-xs">
        {feature.description}
      </p>
    </div>
  );
}

const features: FeatureType[] = [
  {
    title: "Expert Trainers",
    icon: <ZapIcon />,
    description:
      "Certified coaches who build personalized plans to match your goals and fitness level.",
  },
  {
    title: "Flexible-timing",
    icon: <Timer />,
    description:
      "Morning to night slots available — train whenever it fits your schedule.",
  },
  {
    title: "Proven Results",
    icon: <Flame />,
    description:
      "Our members see real transformation within 90 days, backed by structured programs.",
  },
  {
    title: "Nutrition Guidance",
    icon: <Salad />,
    description:
      "Get diet plans tailored to your body type alongside your workout routine.",
  },
  {
    title: "Community Support",
    icon: <Handshake />,
    description:
      "Join a group of motivated people who push each other to be better every day.",
  },
  {
    title: "Prime Location",
    icon: <MapPinCheck />,
    description:
      "Conveniently located in the heart of the city with easy parking and access.",
  },
];
