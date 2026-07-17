export type ProjectId =
  | "claec"
  | "lumina"
  | "jardin-reiki"
  | "zepelin"
  | "prisma"
  | "circular-economy";

export type Project = {
  id: ProjectId;
  name: string;
  descriptor: string;
  role: string;
  scope: string[];
  coreTechnologies: string[];
  platforms: string[];
  context: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "claec",
    name: "CLAEC",
    descriptor:
      "Educational platform rebuilt as an integrated digital ecosystem.",
    role: "Comms & Tech Director",
    scope: ["Website", "LMS", "Custom Payments", "Content Operations"],
    coreTechnologies: [
      "WordPress",
      "Moodle",
      "PHP",
      "JavaScript",
      "CSS",
      "MySQL",
    ],
    platforms: [
      "WooCommerce",
      "Google Workspace",
      "Google Meet",
      "SiteGround",
    ],
    context:
      "Rebuilt a fragmented educational presence into a unified platform combining course discovery, payments, academic content and Moodle-based learning operations.",
    liveUrl: "https://claec.edu.do",
  },
  {
    id: "lumina",
    name: "Lúmina Académica",
    descriptor:
      "Independent learning and commerce platform for synchronous and asynchronous education.",
    role: "Founder / Web Developer / LMS Administrator",
    scope: ["Website", "LMS", "E-commerce", "Content Platform"],
    coreTechnologies: [
      "WordPress",
      "Moodle",
      "PHP",
      "JavaScript",
      "CSS",
      "MySQL",
    ],
    platforms: [
      "WooCommerce",
      "Podcast",
      "Payment Gateways",
      "SiteGround",
    ],
    context:
      "Turned the operational knowledge developed at CLAEC into an independently managed platform combining course sales, content delivery and ongoing LMS administration.",
    liveUrl: "https://luminaacademica.com.ar/",
  },
  {
    id: "jardin-reiki",
    name: "Jardín Reiki",
    descriptor:
      "Course, booking and commerce platform with a custom interactive frontend.",
    role: "Frontend & WordPress Developer",
    scope: ["Website", "Courses", "Bookings", "E-commerce"],
    coreTechnologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "CSS",
      "MySQL",
    ],
    platforms: [
      "WooCommerce",
      "Google Calendar",
      "Dynamic Backgrounds",
      "SiteGround",
    ],
    context:
      "Built a cohesive course, booking and commerce platform with custom frontend behavior, calendar integration and a visual system tailored to the center's identity.",
    liveUrl: "https://jardinreiki.com.ar/",
  },
  {
    id: "zepelin",
    name: "Zepelin Multimedia",
    descriptor:
      "Commercial website and training ecosystem for freelance digital services.",
    role: "Founder / Web Developer",
    scope: ["Service Website", "Lead Generation", "Training", "LMS"],
    coreTechnologies: ["WordPress", "Moodle", "PHP", "JavaScript", "CSS"],
    platforms: ["Service Plans", "Lead Capture", "Moodle", "SiteGround"],
    context:
      "Structured a commercial site around service plans, lead generation and training, supported by a self-managed Moodle environment for foundational digital education.",
    liveUrl: "https://zepelinmultimedia.com.ar/",
  },
  {
    id: "prisma",
    name: "Prisma Comunidad",
    descriptor:
      "Focused one-page platform for community programs, participants and institutions.",
    role: "Co-founder / Web Developer",
    scope: ["Landing Page", "Program Information", "Schedules", "Contact"],
    coreTechnologies: ["WordPress", "Divi 5", "JavaScript", "CSS"],
    platforms: [
      "Responsive Layout",
      "Contact Flows",
      "Content Structure",
      "Production Deployment",
    ],
    context:
      "Delivered a focused one-page platform for participants and institutions, organizing activities, schedules and contact paths while adopting Divi 5 in a live project.",
      liveUrl: "https://prismacomunidad.com.ar/",
  },
  {
    id: "circular-economy",
    name: "Circular Economy Sites",
    descriptor:
      "Two responsive institutional websites implemented from client-approved Figma designs.",
    role: "Web Developer / Figma Implementation",
    scope: ["FemRecicla", "TAU RAEE", "Responsive UI", "Client Delivery"],
    coreTechnologies: ["WordPress", "HTML", "JavaScript", "CSS"],
    platforms: [
      "Figma",
      "Responsive QA",
      "Contact Flows",
      "Production Deployment",
    ],
    context:
      "Implemented two responsive institutional sites from Figma for circular-economy organizations, prioritizing visual fidelity, clear service communication and fast client delivery.",
      liveUrl: "https://tau.coop.ar/",
  },
];
