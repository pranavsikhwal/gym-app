import type { ComponentType } from "react";

type StatItem = {
  icon: ComponentType;
  value: string;
  description: string;
}[];

const AboutUs = ({ stats }: { stats: StatItem }) => {
  return (
    <section className="bg-muted py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-4 text-center md:mb-16 lg:mb-24">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl">
            Our Story
          </h2>
          <h3 className="text-xl font-semibold tracking-tight ">
            Born from passion, built on results.
          </h3>
          <p className="text-muted-foreground text-xl">
            Kasrat was founded in 2021 with one simple belief — everyone
            deserves access to world-class fitness. What started as a small
            training space in Amritsar has grown into a community of 500+
            dedicated members. We are not just a gym, we are a movement built on
            discipline, consistency, and real results.
          </p>
        </div>

        <div className="relative mb-8 h-full w-full max-lg:space-y-6 sm:mb-16 lg:mb-24">
          {/* Stats card overlapping the video section */}
          <div className="bg-background grid gap-10 rounded-md border p-8 sm:max-lg:grid-cols-2 lg:absolute lg:-bottom-25 lg:left-1/2 lg:w-3/4 lg:-translate-x-1/2 lg:grid-cols-3 lg:px-10 xl:w-max">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2.5 text-center"
              >
                <div className="flex size-7 items-center justify-center [&>svg]:size-7">
                  <stat.icon />
                </div>
                <span className="text-2xl font-semibold">{stat.value}</span>
                <p className="text-muted-foreground text-lg">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
