"use client";

import { useState } from "react";

const gib = 1024 ** 3;
const quantizations = [4, 5, 8, 16];
const budgets = [8, 12, 16, 24, 32, 48, 80];
const kvBytesPerToken = 2 * 32 * 8 * 128 * 2;
const format = (value: number) => `${value.toFixed(2)} GiB`;

export function VramEstimator() {
  const [bits, setBits] = useState(4);
  const [context, setContext] = useState(16384);
  const [slots, setSlots] = useState(1);
  const [budget, setBudget] = useState(12);
  const weights = (8_030_000_000 * bits / 8) / gib;
  const cache = (kvBytesPerToken * context * slots) / gib;
  const total = weights + cache + 1;
  const fits = total <= budget;

  return (
    <div className="panel estimator">
      <div className="estimator-head"><h3>8B model memory estimator</h3><span className={fits ? "estimate-status" : "estimate-status over"}>{fits ? "Within budget" : "Over budget"}</span></div>
      <fieldset>
        <legend>Nominal weight precision</legend>
        <div className="pills">{quantizations.map(value => <button key={value} type="button" className="pill" aria-pressed={bits === value} onClick={() => setBits(value)}>{value}-bit</button>)}</div>
      </fieldset>
      <label className="range-label" htmlFor="context"><span>Context per slot</span><strong>{context.toLocaleString("en-US")} tokens</strong></label>
      <input id="context" type="range" min={2048} max={131072} step={2048} value={context} onChange={event => setContext(Number(event.target.value))} />
      <div className="form-grid">
        <label>Parallel slots<select value={slots} onChange={event => setSlots(Number(event.target.value))}>{[1, 2, 3, 4, 5, 6, 7, 8].map(value => <option key={value}>{value}</option>)}</select></label>
        <label>GPU budget<select value={budget} onChange={event => setBudget(Number(event.target.value))}>{budgets.map(value => <option key={value} value={value}>{value} GiB</option>)}</select></label>
      </div>
      <meter className={fits ? "" : "over"} aria-label="Estimated memory used from available GPU budget" min={0} max={budget} value={Math.min(total, budget)} />
      <dl className="estimate-results" aria-live="polite">
        <div><dt>Weights</dt><dd>{format(weights)}</dd></div>
        <div><dt>KV cache</dt><dd>{format(cache)}</dd></div>
        <div><dt>Total estimate</dt><dd>{format(total)}</dd></div>
      </dl>
      <p className="fine-print">Planning estimate for a Llama 3.1 8B–style model with full GPU offload, FP16 KV cache, and 1 GiB of runtime allowance. Actual usage varies with GGUF tensor formats, runtime buffers, and cache settings.</p>
    </div>
  );
}
