export type LabProjectId =
  | "argentina-engine"
  | "holistic-practice-saas"
  | "fastwork";

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

export type LabProject = {
  id: LabProjectId;
  name: string;
  descriptor: string;
  status: LabStatus;
  focus: string;
  currentStage: string;
  productDirection: string;
  nextMilestone: string;
  visualKey: LabVisualKey;
  repositoryUrl?: string;
  prototypeUrl?: string;
};

export const labProjects: LabProject[] = [
  {
    id: "argentina-engine",
    name: "Argentina Engine",
    descriptor:
      "A data platform for Argentina’s key productive sectors.",
    status: "DISCOVERY",
    focus:
      "Sector intelligence platform for Argentine productive industries.",
    currentStage:
      "Defining the problem space, data model and information architecture.",
    productDirection:
      "Evolve into a searchable decision-support platform for sector, financial and export insights.",
    nextMilestone:
      "Validate the core entities and define the first dashboard structure.",
    visualKey: "argentina-data-map",
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
  },
  {
    id: "fastwork",
    name: "FastWork",
    descriptor:
      "A full-stack marketplace connecting local service providers with potential clients.",
    status: "COMPLETED",
    focus:
      "Full-stack service marketplace developed as a three-person team project.",
    currentStage:
      "Completed during Miracle Lab 2023 using a separate frontend and backend architecture.",
    productDirection:
      "Document the technical architecture, collaborative workflow and lessons learned from the completed project.",
    nextMilestone:
      "Recover and prepare the available repository, interface and architectural evidence for its final LAB presentation.",
    visualKey: "fastwork-marketplace-flow",
  },
];
