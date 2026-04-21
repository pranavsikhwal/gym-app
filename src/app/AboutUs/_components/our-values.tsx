const values = [
  {
    icon: "💪",
    title: "Discipline",
    description:
      "We believe consistency beats motivation every single day. Show up, put in the work, and results will follow.",
  },
  {
    icon: "🎯",
    title: "Results",
    description:
      "Everything we do is focused on delivering real, measurable change — not just promises.",
  },
  {
    icon: "🤝",
    title: "Community",
    description:
      "A supportive environment where everyone lifts each other up and grows together.",
  },
  {
    icon: "🧠",
    title: "Education",
    description:
      "We teach you the why behind every workout and meal plan so you stay informed and in control.",
  },
];

export function OurValues() {
  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              What We Stand For
            </h2>
            <p className="mt-3 text-muted-foreground text-lg">
              The principles that drive everything we do at Kasrat.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col gap-4 rounded-2xl border bg-card p-6 transition-colors duration-300 hover:border-primary"
              >
                <span className="text-4xl">{value.icon}</span>
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
