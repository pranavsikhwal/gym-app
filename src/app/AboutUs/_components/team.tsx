import Team from "@/app/AboutUs/_components/team-section";

const teamMembers = [
  {
    image:
      "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-8.png",
    alt: "Rajiv Kumar",
    name: "Rajiv Kumar",
    role: "Founder",
    description: "A visionary leader driving innovation and collaboration.",
  },
  {
    image:
      "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-2.png",
    alt: "Arnesh Sharma",
    name: "Arnesh Sharma",
    role: "Gym Trainer",
    description: "More than 10 years of solid experience.",
  },

  {
    image:
      "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-4.png",
    alt: "Ruhi",
    name: "Ruhi",
    role: "Yoga Teacher",
    description: "Bringing yoga to everyone's life .",
  },
  {
    image:
      "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-5.png",
    alt: "Abhishek",
    name: "Abhishek",
    role: "Fitness Coach",
    description: "Expertise in cardio and endurance",
  },
];

const TeamPage = () => {
  return <Team teamMembers={teamMembers} />;
};

export default TeamPage;
