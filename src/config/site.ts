import { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  companyName: "Tannahill Systems",
  legalName: "Tannahill Systems",
  domain: "tannahillsystems.com",
  founderName: "Christian Tannahill",
  location: "Illinois, United States",
  emails: {
    primary: "christian@tannahillsystems.com",
    contact: "contact@tannahillsystems.com",
    billing: "billing@tannahillsystems.com",
  },
  links: {
    github: "https://github.com/Cstannahill",
    linkedin: "https://linkedin.com/in/christian-tannahill",
  },
  navItems: [
    { label: "Services", href: "#services" },
    { label: "R&D Products", href: "#products" },
    { label: "Architecture", href: "#architecture" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    {
      id: "fullstack-engineering",
      title: "Full-Stack Application Engineering",
      category: "Custom Client Software",
      description:
        "End-to-end architecture and implementation of scalable web platforms, customer-facing SaaS products, and high-concurrency API backends.",
      deliverables: [
        "Multi-tenant SaaS applications & custom web portals",
        "RESTful & real-time WebSocket API microservices",
        "Relational database schema design, indexing & migrations",
        "Authentication, RBAC & automated CI/CD deployment pipelines",
      ],
      technologies: ["Next.js", "React", "TypeScript", ".NET 9", "C#", "PostgreSQL", "Supabase", "Tailwind CSS"],
      iconName: "code",
    },
    {
      id: "ai-inference-systems",
      title: "Private AI & Local LLM Infrastructure",
      category: "Applied AI Systems",
      description:
        "Design and deployment of custom Retrieval-Augmented Generation (RAG) pipelines, quantized local model inference servers, and domain-specific fine-tuning workflows.",
      deliverables: [
        "Private on-premise or VPC-hosted LLM inference APIs",
        "Hybrid semantic + vector search RAG architectures",
        "QLoRA model fine-tuning & synthetic dataset generation",
        "Automated LLM evaluation harnesses & latency benchmarking",
      ],
      technologies: ["Python", "FastAPI", "llama.cpp", "Ollama", "vLLM", "Unsloth", "LiteLLM", "pgvector"],
      iconName: "cpu",
    },
    {
      id: "data-pipelines-cloud",
      title: "Data Extraction & Cloud Automation",
      category: "Data & Cloud Infrastructure",
      description:
        "Resilient distributed scraping engines, automated ETL ingestion pipelines, and serverless cloud workflows engineered for real-time market intelligence.",
      deliverables: [
        "Headless browser & API data extraction pipelines",
        "Automated data normalization, deduplication & warehousing",
        "Event-driven serverless compute & scheduled background workers",
        "Real-time analytics dashboards & alerting webhooks",
      ],
      technologies: ["AWS Lambda", "DynamoDB", "S3", "Python", "Playwright", "Docker", "Redis", "PostgreSQL"],
      iconName: "database",
    },
    {
      id: "systems-developer-tooling",
      title: "Native Desktop & Developer Tooling",
      category: "Systems & Tooling",
      description:
        "Cross-platform desktop applications, CLI automation utilities, and IDE extensions built for minimal memory overhead and native execution speed.",
      deliverables: [
        "Cross-platform native desktop apps (Windows, Linux, macOS)",
        "Custom VS Code extensions & language server integrations",
        "Static codebase analysis scanners & AST transformation tools",
        "Open-source SDKs and published package distribution",
      ],
      technologies: ["Rust", "Tauri", "TypeScript", "C#", ".NET 9", "Node.js", "PowerShell"],
      iconName: "terminal",
    },
  ],
  products: [
    {
      id: "localchat-engine",
      name: "LocalChat Inference Engine",
      tagline: "Enterprise .NET 9 Local LLM Runtime & Memory Orchestrator",
      status: "Production",
      description:
        "A modular C# and .NET 9 Web API inference engine providing structured context retrieval, sliding-window memory management, and automated conversation summarization for local large language models.",
      architecture: [".NET 9", "C#", "REST API", "GGUF/ONNX", "Vector Memory"],
      repoUrl: "https://github.com/Cstannahill",
    },
    {
      id: "codecurator-suite",
      name: "CodeCurator & MDV",
      tagline: "High-Performance Codebase Analysis & Native Desktop Tooling",
      status: "Production",
      description:
        "Extensible static analysis orchestrator with plugin-based scanner execution paired with MDV, a lightweight cross-platform desktop Markdown rendering application built on Rust and Tauri.",
      architecture: ["Rust", "Tauri", "React", "TypeScript", "CLI"],
      repoUrl: "https://github.com/Cstannahill",
    },
    {
      id: "legistrack-platform",
      name: "LegisTrack & TrendDev",
      tagline: "Automated Legislative & Market Intelligence Platforms",
      status: "Production",
      description:
        "Full-stack data ingestion and AI summarization platforms that track United States legislative updates and analyze software engineering market demand across serverless cloud infrastructure.",
      architecture: ["Next.js", "TypeScript", "AWS Lambda", "DynamoDB", "S3", "PostgreSQL"],
      repoUrl: "https://github.com/Cstannahill",
    },
    {
      id: "compel5-datagen",
      name: "compel5 & py-data-gen",
      tagline: "Prompt Weighting SDK & Synthetic Dataset Pipelines",
      status: "Published Package",
      description:
        "Published PyPI library for embedding conditioning and prompt weighting in diffusion and transformer pipelines, paired with automated synthetic dataset generators for QLoRA fine-tuning.",
      architecture: ["Python", "PyTorch", "Hugging Face", "PyPI", "Jinja2"],
      repoUrl: "https://github.com/Cstannahill",
    },
  ],
  techStack: [
    {
      category: "Languages & Runtimes",
      items: ["TypeScript", "C# (.NET 9)", "Python", "Rust", "SQL", "Bash / PowerShell"],
    },
    {
      category: "Frontend & Desktop",
      items: ["Next.js 15", "React 19", "Tailwind CSS", "Tauri", "shadcn/ui", "HTML5 / CSS3"],
    },
    {
      category: "Backend & Data",
      items: ["ASP.NET Core", "FastAPI", "PostgreSQL", "Supabase", "AWS DynamoDB", "Redis"],
    },
    {
      category: "AI & Cloud Infrastructure",
      items: ["llama.cpp / Ollama", "vLLM", "Unsloth / QLoRA", "AWS (S3, Lambda)", "Docker", "Cloudflare Edge"],
    },
  ],
  processSteps: [
    {
      stepNumber: "01",
      title: "Technical Discovery & Architecture Specification",
      description:
        "We audit your operational requirements, define data models, select the optimal runtime stack, and deliver a concrete technical specification with fixed milestones.",
    },
    {
      stepNumber: "02",
      title: "Modular Iterative Engineering",
      description:
        "Software is constructed in decoupled, type-safe modules with continuous staging deployments, automated testing, and transparent repository access.",
    },
    {
      stepNumber: "03",
      title: "Production Deployment & Telemetry",
      description:
        "We provision production cloud or on-premise infrastructure, configure SSL/DNS security, verify load performance, and execute full documentation handoff.",
    },
  ],
};
