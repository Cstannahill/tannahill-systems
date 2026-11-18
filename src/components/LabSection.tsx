import { Cpu, GitFork, Layers, Gauge } from "lucide-react";
import { VramEstimator } from "./VramEstimator";

const workstreams = [
  {
    icon: Cpu,
    title: "Model preparation",
    description: "Convert Hugging Face checkpoints to BF16 GGUF, build importance matrices, and produce K-quant and IQ variants for llama.cpp. Fine-tune when the task calls for it.",
  },
  {
    icon: GitFork,
    title: "Provider routing",
    description: "Route across local and hosted models with fallback, token counts, and latency tracking. Map OpenRouter reasoning settings to levels each model supports.",
  },
  {
    icon: Layers,
    title: "Retrieval and agent tools",
    description: "Give agents web search, long-term memory, system diagnostics, and targeted documentation retrieval through custom MCP servers.",
  },
  {
    icon: Gauge,
    title: "Model evaluation",
    description: "Use custom suites for task behavior, lm_eval for standardized benchmarks, and LlamaModelBench to compare outputs and throughput on the same prompts.",
  },
];

export function LabSection() {
  return (
    <section id="lab" className="section lab-band">
      <div className="shell">
        <div className="section-head">
          <div><p className="kicker">Local AI Lab</p><h2>From checkpoint to inference</h2></div>
          <p>Prepare models for local hardware, measure behavior and performance, and connect them to applications. Use the estimator to size a run.</p>
        </div>
        <div className="lab-layout">
          <VramEstimator />
          <div className="lab-topics">
            {workstreams.map(({ icon: Icon, title, description }) => (
              <article key={title}><span className="icon-tile"><Icon size={19} aria-hidden="true" /></span><div><h3>{title}</h3><p>{description}</p></div></article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
