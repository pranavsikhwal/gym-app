import { FeatureSection } from "./_components/feature-section";
import HeroSection from "./_components/hero1";
import TestimonialSection from "./_components/testimonials";

export default function Home() {
  return (
    <h1>
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
    </h1>
  );
}
