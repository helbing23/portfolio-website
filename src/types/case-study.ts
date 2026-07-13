export interface CaseStudyStep {
  label: string;
  detail: string;
  phase?: string; // Optional group label, shown when it changes between steps
}

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  category: "Freelancing" | "Corporate" | "Personal";
  technologies: string[];
  status?: string;
  problem: string[];
  flow: CaseStudyStep[];
  built: string[];
  outcome: string[];
  githubUrl?: string;
}
