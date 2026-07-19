export type ProfileToolchainCard = {
  title: string;
  items: string[];
  description: string;
};

export const profileToolchainEyebrow =
  "03 PROFILE | FLEXIBLE TECHNOLOGIES FOR DIVERSE SOLUTIONS.";

export const profileToolchainCards: ProfileToolchainCard[] = [
  {
    title: "INTERFACES",
    items: ["React", "TypeScript", "JavaScript", "Tailwind CSS"],
    description:
      "Responsive interfaces, reusable components and frontend systems designed around real product needs.",
  },
  {
    title: "PLATFORMS",
    items: ["WordPress", "WooCommerce", "Moodle"],
    description:
      "Content, commerce and learning platforms configured for real teams, users and operational workflows.",
  },
  {
    title: "DATA & INTEGRATION",
    items: ["REST APIs", "MySQL", "JSON"],
    description:
      "Connecting interfaces, structured content and external services through practical data flows.",
  },
  {
    title: "WORKFLOW",
    items: ["Git", "GitHub", "Vite", "Figma", "CorelDRAW", "Trello"],
    description:
      "From interface planning and visual production to version control, builds and deployment.",
  },
];
