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
    { label: "Work", href: "#products" },
    { label: "AI Lab", href: "#lab" },
    { label: "Services", href: "#services" },
    { label: "Stack", href: "#architecture" },
    { label: "About", href: "#about" },
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
      technologies: ["Next.js", "React", "TypeScript", ".NET", "C#", "PostgreSQL", "Supabase", "Tailwind CSS"],
      iconName: "code",
    },
    {
      id: "ai-inference-systems",
      title: "Private AI & Local LLM Infrastructure",
      category: "Applied AI Systems",
      description:
        "Prepare and evaluate models for private inference, connect hosted providers where needed, and give applications access to relevant documents and tools.",
      deliverables: [
        "Private inference APIs and hosted provider routing with fallback",
        "Document retrieval, conversation memory, and custom MCP tools",
        "GGUF preparation, importance-matrix calibration, and QLoRA fine-tuning",
        "Task-specific evaluations, standardized benchmarks, and inference performance comparisons",
      ],
      technologies: ["Python", "FastAPI", "llama.cpp", "OpenRouter", "Unsloth", "lm_eval", "MCP", "pgvector"],
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
      technologies: ["Rust", "Tauri", "TypeScript", "C#", ".NET", "Node.js", "PowerShell"],
      iconName: "terminal",
    },
  ],
  products: [
    {
      id: "localchat-engine",
      name: "LocalChat",
      category: "AI infrastructure",
      tagline: "Local-first inference and conversation memory.",
      status: "Public repository",
      description:
        "A C# backend that routes requests across local and hosted models, composes prompts with retrieved context, manages conversation state, and streams responses over server-sent events.",
      architecture: ["C#", "ASP.NET Core", "SQLite", "llama.cpp", "SSE"],
      repoUrl: "https://github.com/Cstannahill/LocalChat",
    },
    {
      id: "ai-gateway",
      name: "AI Gateway",
      category: "AI infrastructure",
      tagline: "One API for local and hosted models.",
      status: "Active R&D",
      description:
        "A Rust reverse proxy with OpenAI-compatible endpoints. It resolves model aliases, routes across configured providers, retries eligible failures, and can record request and streaming telemetry in PostgreSQL.",
      architecture: ["Rust", "PostgreSQL", "llama.cpp", "OpenRouter", "SSE"],
    },
    {
      id: "legistrack-platform",
      name: "LegisTrack",
      category: "Applications",
      tagline: "Federal legislation in plain language.",
      status: "Public repository",
      description:
        "A web application that ingests, categorizes, and summarizes U.S. federal legislation. A relational data model supports structured bill tracking, while the summarization workflow turns bill text into readable updates.",
      architecture: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      repoUrl: "https://github.com/Cstannahill/legistrack",
    },
    {
      id: "trenddev",
      name: "TrendDev",
      category: "Applications",
      tagline: "Software job market and skills analysis.",
      status: "Public repository",
      description:
        "A React frontend and serverless ingestion pipeline that collect job postings, extract skill requirements, and surface trends in software engineering demand.",
      architecture: ["React", "TypeScript", "AWS Lambda", "EventBridge", "DynamoDB"],
      repoUrl: "https://github.com/Cstannahill/job-market-analyzer",
    },
    {
      id: "quantization-toolkit",
      name: "Quantization Toolkit",
      category: "Developer tools",
      tagline: "Repeatable model compression and evaluation.",
      status: "Public repository",
      description:
        "YAML-driven scripts that quantize Hugging Face language and vision-language models with llmcompressor and evaluate quality drift with lm-eval.",
      architecture: ["Python", "Hugging Face", "llmcompressor", "lm-eval"],
      repoUrl: "https://github.com/Cstannahill/quantization-toolkit",
    },
    {
      id: "llama-model-bench",
      name: "LlamaModelBench",
      category: "Developer tools",
      tagline: "Compare local models on the same prompts.",
      status: "Project",
      description:
        "A .NET CLI that loads model aliases through a local inference API and runs a shared prompt suite. It records outputs, reasoning when available, token counts, throughput, and errors in Markdown and JSON reports.",
      architecture: ["C#", ".NET", "llama.cpp", "YAML", "JSON"],
    },
    {
      id: "custom-mcp-servers",
      name: "Custom MCP servers",
      category: "Developer tools",
      tagline: "Search, memory, diagnostics, and documentation for AI agents.",
      status: "Project",
      description:
        "Web Search MCP brings together Brave, Exa, Chrome, and Tavily. MemoryMCP uses Memosyne and custom logic for database-backed long-term memory. PCVitalsMCP exposes historical system metrics for troubleshooting. The Rust docs-mcp-server retrieves current, targeted documentation for RAG.",
      architecture: ["MCP", "TypeScript", "C#", "Rust", "stdio", "Streamable HTTP", "SSE"],
    },
    {
      id: "ai-production-chat",
      name: "AI Production Chat",
      category: "Applications",
      tagline: "A chat workspace with streaming, tools, and memory.",
      status: "Project",
      description:
        "A Next.js workspace built with the Vercel AI SDK. It brings together streaming chat, a tool registry, and conversation-memory tooling with a Pinecone vector store adapter.",
      architecture: ["Next.js", "TypeScript", "Vercel AI SDK", "Pinecone"],
    },
    {
      id: "codecurator-suite",
      name: "CodeCurator",
      category: "Developer tools",
      tagline: "Structured repository context for developers and AI agents.",
      status: "Design study",
      description:
        "A repository intelligence design that organizes module maps, scanner findings, human notes, and task-specific context packs in a structured project directory.",
      architecture: ["Repository analysis", "Context packs", "MCP"],
    },
    {
      id: "mdv",
      name: "MDV",
      category: "Developer tools",
      tagline: "A native desktop Markdown viewer.",
      status: "Project",
      description:
        "A desktop Markdown viewer built with a React interface and a Rust-backed Tauri shell.",
      architecture: ["Rust", "Tauri", "React", "TypeScript"],
    },
    {
      id: "py-data-gen",
      name: "py-data-gen",
      category: "Developer tools",
      tagline: "A configurable workflow for generating training datasets.",
      status: "Project",
      description:
        "A Python pipeline that generates prompts, runs batched completions, and evaluates and corrects outputs. It supports local models through Ollama and hosted models through OpenRouter and Gemini.",
      architecture: ["Python", "Ollama", "OpenRouter", "Gemini"],
    },
  ],
  techStack: [
    {
      category: "Languages & Runtimes",
      items: ["TypeScript", "C# / .NET", "Python", "Rust", "SQL", "Bash / PowerShell"],
    },
    {
      category: "Frontend & Desktop",
      items: ["Next.js", "React 19", "Tailwind CSS", "Tauri", "shadcn/ui", "HTML5 / CSS3"],
    },
    {
      category: "Backend & Data",
      items: ["ASP.NET Core", "FastAPI", "PostgreSQL", "Supabase", "AWS DynamoDB", "Redis"],
    },
    {
      category: "AI & Cloud Infrastructure",
      items: ["llama.cpp / GGUF", "Unsloth / QLoRA", "llmcompressor / lm_eval", "OpenRouter / AWS Bedrock", "Vercel AI SDK / MCP", "Docker"],
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
