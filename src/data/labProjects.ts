export type LabProjectId =
  "argentina-engine" | "holistic-practice-saas" | "fastwork";

export type LabStatus =
  | "DISCOVERY"
  | "PROTOTYPE"
  | "IN DEVELOPMENT"
  | "MVP"
  | "RELEASED"
  | "COMPLETED";

export type LabVisualKey =
  | "argentina-data-map"
  | "holistic-consultation-flow"
  | "fastwork-marketplace-flow";

export type LabStoryRings = {
  outer: string;
  middle: string;
  inner: string;
};

export type LabProjectMedia = {
  src?: string;
  alt: string;
  label?: string;
};

export type LabProject = {
  id: LabProjectId;
  name: string;
  descriptor: string;
  status: LabStatus;
  focus: string;
  currentStage: string;
  productDirection: string;
  nextMilestone?: string;
  projectCollaborators?: string;
  visualKey: LabVisualKey;
  repositoryUrl?: string;
  prototypeUrl?: string;
  storyRings: LabStoryRings;
  image?: LabProjectMedia;
  updatedAt?: string;
  repositoryLabel?: string;
};

export const labProjects: LabProject[] = [
  {
    id: "argentina-engine",
    name: "Argentina Engine",
    descriptor: "A data platform for Argentina’s key productive sectors.",
    status: "DISCOVERY",
    focus: "Sector intelligence platform designed to organize and connect data across Argentina’s productive industries, regions and economic activity.",
    currentStage:
      "Defining the problem space, data model and information architecture.",
    productDirection:
      "Evolve into a searchable decision-support platform where sector, regional, financial and export data can be explored together, revealing relationships that are difficult to see across disconnected sources.",
    nextMilestone:
      "Validate the core entities and define the first dashboard structure.",
    visualKey: "argentina-data-map",
    storyRings: {
    outer:
      "It began with scattered data and a desire to understand the country better",
    middle:
      "Connecting sectors and regions revealed a bigger story behind the numbers",
    inner:
      "Make Argentina’s productive reality easier to explore and understand",
  },
  },
  {
    id: "holistic-practice-saas",
    name: "Holistic Practice SaaS",
    descriptor:
      "A modular practice-management system for holistic professionals.",
    status: "PROTOTYPE",
    focus:
      "Therapeutic practice management and Bach flower consultation workflows.",
    currentStage:
      "Redefining the scope and translating an early visual prototype into a modern product architecture.",
    productDirection:
      "Evolve the Bach flower consultation prototype into a modular SaaS for holistic professionals, expanding into Reiki, Tarot, Yoga and other practices through a shared core of clients, sessions, knowledge and history.",
    nextMilestone:
      "Define the first data model and implement the complete flow from client registration to session history.",
    visualKey: "holistic-consultation-flow",
    storyRings: {
    outer:
      "What started as a Bach flower consultation prototype soon revealed a broader need",
    middle:
      "The same patterns kept appearing across different holistic practices",
    inner:
      "Build one shared system that supports the practice without getting in its way",
  },
  },
  {
    id: "fastwork",
    name: "FastWork",
    descriptor:
      "A full-stack marketplace connecting local service providers with potential clients.",
    status: "COMPLETED",
    focus:
      "Local service marketplace developed collaboratively as a three-person team project.",
    currentStage:
      "Completed during Miracle Lab 2023 with separate frontend and backend architecture.",
    productDirection:
      "Connect people looking for local services with nearby providers through a clear marketplace experience, with my contribution focused on product decisions, interface design and frontend development.",
    projectCollaborators:
      "Developed with Aron and Nicolás as part of Miracle Lab 2023, an annual product-building initiative by Miracle Devs.",
      visualKey: "fastwork-marketplace-flow",
    storyRings: {
    outer:
      "It started with a familiar problem: finding local help when you need it",
    middle:
      "Working as a team turned a simple marketplace idea into a complete product flow",
    inner:
      "An early lesson in how product decisions, code and collaboration meet",
  },
  },
];
