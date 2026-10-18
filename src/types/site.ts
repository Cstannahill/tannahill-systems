export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceOffering {
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  iconName: "cpu" | "code" | "database" | "terminal";
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  status: "Production" | "Active R&D" | "Published Package";
  description: string;
  architecture: string[];
  repoUrl: string;
  liveUrl?: string;
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  company: string;
  serviceType: string;
  projectScope: string;
  message: string;
}

export interface SiteConfig {
  companyName: string;
  legalName: string;
  domain: string;
  founderName: string;
  location: string;
  emails: {
    primary: string;
    contact: string;
    billing: string;
  };
  links: {
    github: string;
    linkedin: string;
  };
  navItems: NavItem[];
  services: ServiceOffering[];
  products: ProductItem[];
  techStack: TechCategory[];
  processSteps: ProcessStep[];
}
