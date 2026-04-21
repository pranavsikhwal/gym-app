import { MedalIcon, SparklesIcon, StarIcon } from "lucide-react";

import AboutUs from "@/app/AboutUs/_components/our-story";

const stats = [
  {
    icon: SparklesIcon,
    value: "5+",
    description: "Years of Experience",
  },
  {
    icon: StarIcon,
    value: "550+",
    description: "Customer Reviews",
  },
  {
    icon: MedalIcon,
    value: "25",
    description: "Achieve Awards",
  },
];

const AboutUsPage = () => {
  return <AboutUs stats={stats} />;
};

export default AboutUsPage;
