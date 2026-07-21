import claecLogo from "../assets/work/logos/claec.svg";
import luminaAcademicaLogo from "../assets/work/logos/lumina-academica.svg";
import jardinReikiLogo from "../assets/work/logos/jardin-reiki.svg";
import zepelinMultimediaLogo from "../assets/work/logos/zepelin-multimedia.svg";
import prismaLogo from "../assets/work/logos/prisma.svg";
import tauRaeeLogo from "../assets/work/logos/tau-raee.svg";
import femReciclaLogo from "../assets/work/logos/femrecicla.svg";

import claecFullpage from "../assets/work/projects/claec/claec-fullpage.webp?url";
import luminaAcademicaFullpage from "../assets/work/projects/lumina-academica/lumina-academica-fullpage.webp?url";
import jardinReikiFullpage from "../assets/work/projects/jardin-reiki/jardin-reiki-fullpage.webp?url";
import zepelinMultimediaFullpage from "../assets/work/projects/zepelin-multimedia/zepelin-multimedia-fullpage.webp?url";
import prismaFullpage from "../assets/work/projects/prisma/prisma-fullpage.webp?url";
import tauRaeeFullpage from "../assets/work/projects/tau-raee/tau-raee-fullpage.webp?url";
import femReciclaFullpage from "../assets/work/projects/femrecicla/femrecicla-fullpage.webp?url";

export type ProjectId =
  | "claec"
  | "lumina"
  | "jardin-reiki"
  | "zepelin"
  | "prisma"
  | "tau-raee"
  | "femrecicla";


export type Project = {
  id: ProjectId;
  name: string;
  logo: string;
  mainImage?: string;
  mainImageAlt?: string;
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
    logo: claecLogo,
    mainImage: claecFullpage,
    mainImageAlt:
      "Full-page view of the CLAEC educational website and digital platform.",
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
    logo: luminaAcademicaLogo,
    mainImage: luminaAcademicaFullpage,
    mainImageAlt:
      "Full-page view of the Lúmina Académica educational and commerce platform.",
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
    logo: jardinReikiLogo,
    mainImage: jardinReikiFullpage,
    mainImageAlt:
      "Full-page view of the Jardín Reiki course, booking and commerce website.",
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
    logo: zepelinMultimediaLogo,
    mainImage: zepelinMultimediaFullpage,
    mainImageAlt:
      "Full-page view of the Zepelin Multimedia digital services and training website.",
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
    name: "Prisma",
    logo: prismaLogo,
    mainImage: prismaFullpage,
    mainImageAlt:
      "Full-page view of the Prisma interdisciplinary community program website.",
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
  id: "tau-raee",
  name: "TAU RAEE",
  logo: tauRaeeLogo,
  mainImage: tauRaeeFullpage,
  mainImageAlt:
    "Full-page view of the TAU RAEE circular-economy institutional website.",
  descriptor:
    "Responsive institutional website implemented from a client-approved Figma design.",
  role: "Web Developer / Figma Implementation",
  scope: [
    "Institutional Website",
    "Responsive UI",
    "Figma Implementation",
    "Client Delivery",
  ],
  coreTechnologies: [
    "WordPress",
    "HTML",
    "JavaScript",
    "CSS",
  ],
  platforms: [
    "Figma",
    "Responsive QA",
    "Contact Flows",
    "Production Deployment",
  ],
  context:
    "Implemented the TAU RAEE institutional website from an approved Figma design, prioritizing visual fidelity, clear service communication and responsive behavior.",
  liveUrl: "https://tau.coop.ar/",
},
{
  id: "femrecicla",
  name: "FemRecicla",
  logo: femReciclaLogo,
  mainImage: femReciclaFullpage,
  mainImageAlt:
    "Full-page view of the FemRecicla circular-economy institutional website.",
  descriptor:
    "Responsive institutional website implemented from a client-approved Figma design.",
  role: "Web Developer / Figma Implementation",
  scope: [
    "Institutional Website",
    "Responsive UI",
    "Figma Implementation",
    "Client Delivery",
  ],
  coreTechnologies: [
    "WordPress",
    "HTML",
    "JavaScript",
    "CSS",
  ],
  platforms: [
    "Figma",
    "Responsive QA",
    "Contact Flows",
    "Production Deployment",
  ],
  context:
    "Implemented the FemRecicla institutional website from an approved Figma design, translating its visual system into a responsive production site for a circular-economy organization.",
  liveUrl: "https://femrecicla.coop.ar/",
},
];
