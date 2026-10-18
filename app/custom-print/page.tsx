'use client';

import React, { useState } from 'react';
import { UploadCloud, Layers, Cpu, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

const MATERIALS = [
  { id: 'pla', name: 'PLA+', tag: 'Crisp Detail', desc: 'Ideal for display figurines, desk pieces, and indoor decorative items. High dimensional accuracy with smooth satin finish.', cost: 8 },
  { id: 'petg', name: 'PETG', tag: 'Durable & Tough', desc: 'Impact and chemical resistant. Perfect for functional gadgets, mounts, and mechanical organizers.', cost: 10 },
  { id: 'asa', name: 'ASA', tag: 'UV & Outdoor', desc: 'Weatherproof and UV-stable. Specifically chosen for automotive accessories, exterior badges, and motorcycle parts.', cost: 14 },
  { id: 'tpu', name: 'TPU Flexible', tag: 'Rubberized 95A', desc: 'Bendable, shock-absorbent elastomeric material. Used for phone cases, gaskets, and protective feet.', cost: 16 },
  { id: 'cf', name: 'Carbon-Fibre PLA', tag: 'Ultra-Rigid', desc: 'Infused with high-modulus chopped carbon fibers. Exceptional tensile stiffness and gorgeous textured matte graphite appearance.', cost: 22 },
  { id: 'resin', name: '8K Photopolymer Resin', tag: 'Micro Details', desc: 'SLA printed with 28-micron layer heights for invisible layer lines and museum-grade miniature fidelity.', cost: 26 },
];

export default function CustomPrintPage() {
  const [selectedMaterial, setSelectedMaterial] = useState('pla');
  const [infill, setInfill] = useState(20);
  const [estimatedGrams, setEstimatedGrams] = useState(60);
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const activeMat = MATERIALS.find(m => m.id === selectedMaterial) || MATERIALS[0];
  const estimatedCost = Math.max(399, Math.round(estimatedGrams * activeMat.cost + 150));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="py-12 md:py-20 space-y-16">
      {/* Hero */}
      <section className="o-container max-w-4xl text-center space-y-4">
        <span className="o-chip">Studio on Demand</span>
        <h1 className="o-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          Custom 3D Printing, done as a craft.
        </h1>
        <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Upload your STL, OBJ, or STEP file. We inspect geometry, slice with custom infill patterns, and print on industrial Bambu Lab P2S machines.
        </p>
      </section>

      {/* 3 Steps */}
      <section className="o-container">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="o-card p-6 space-y-3">
            <span className="o-display text-xs font-bold tracking-widest text-muted">01</span>
            <h3 className="o-display font-bold text-lg">Drop your 3D file</h3>
            <p className="text-xs text-muted leading-relaxed">
              Upload any CAD model or downloaded 3D mesh. We check manifold geometry, wall thicknesses, and overhang angles.
            </p>
          </div>
          <div className="o-card p-6 space-y-3">
            <span className="o-display text-xs font-bold tracking-widest text-muted">02</span>
            <h3 className="o-display font-bold text-lg">Select material &amp; finish</h3>
            <p className="text-xs text-muted leading-relaxed">
              Choose from technical engineering filaments or ultra-fine 8K resin based on your mechanical and aesthetic requirements.
            </p>
          </div>
          <div className="o-card p-6 space-y-3">
            <span className="o-display text-xs font-bold tracking-widest text-muted">03</span>
            <h3 className="o-display font-bold text-lg">Approve, print, ship</h3>
            <p className="text-xs text-muted leading-relaxed">
              We send a sliced preview with layer breakdown. After approval, the job enters our print queue and ships within 3–4 business days.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Slicer Estimator & File Upload */}
      <section className="o-container max-w-4xl">
        <div className="o-card p-8 md:p-12 space-y-8">
          <div>
            <h2 className="o-display text-2xl md:text-3xl font-bold">Interactive Print Estimator</h2>
            <p className="text-xs text-muted mt-1">Get an instant preliminary estimate and upload your file for engineering review.</p>
          </div>

          {/* Upload Dropzone */}
          <div className="border-2 border-dashed border-app rounded-2xl p-8 text-center hover:bg-surface-2 transition-colors relative cursor-pointer" style={{ borderColor: 'var(--border)' }}>
            <input
              type="file"
              accept=".stl,.obj,.step,.stp,.3mf"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <UploadCloud className="w-10 h-10 text-primary mx-auto mb-3" />
            <p className="font-bold text-sm">
              {fileName ? `Selected file: ${fileName}` : 'Click or drag 3D model here (.stl, .obj, .step, .3mf)'}
            </p>
            <p className="text-xs text-muted mt-1">Maximum file size: 100MB · Inspected confidentially under NDA</p>
          </div>

          {/* Material Selection Grid */}
          <div className="space-y-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-muted">1. Select Material</label>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {MATERIALS.map(m => (
                <div
                  key={m.id}
                  onClick={() => setSelectedMaterial(m.id)}
                  className={`o-card p-4 cursor-pointer transition-all ${
                    selectedMaterial === m.id ? 'ring-2 ring-primary bg-surface-2' : 'hover:bg-surface-2 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm">{m.name}</span>
                    <span className="o-badge text-[10px] bg-primary/10 text-primary">{m.tag}</span>
                  </div>
                  <p className="text-[11px] text-muted leading-relaxed line-clamp-2">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Infill & Grams Sliders */}
          <div className="grid sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span>Infill Density</span>
                <span>{infill}% (Gyroid structure)</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                step="5"
                value={infill}
                onChange={(e) => setInfill(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <span className="text-[10px] text-muted block">15-20% is ideal for decorative pieces; 40%+ for functional gears.</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span>Estimated Model Weight</span>
                <span>~{estimatedGrams} grams</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={estimatedGrams}
                onChange={(e) => setEstimatedGrams(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <span className="text-[10px] text-muted block">Adjust approximate model volume for budget estimate.</span>
            </div>
          </div>

          {/* Estimate Display & Submission */}
          <div className="p-6 rounded-2xl bg-surface-2 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs text-muted block">Estimated Production Cost</span>
              <div className="flex items-baseline gap-2">
                <span className="o-display text-3xl font-bold">₹{estimatedCost}</span>
                <span className="text-xs text-mint font-semibold">Includes QA &amp; Free Shipping</span>
              </div>
            </div>

            <button
              onClick={() => setSubmitted(true)}
              className="o-btn-primary !py-3.5 !px-6 gap-2 w-full sm:w-auto justify-center cursor-pointer"
            >
              Request Engineering Review <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {submitted && (
            <div className="p-4 rounded-xl bg-mint/10 text-mint text-xs font-semibold text-center">
              ✓ File registered. Our team has queued geometry verification and will reach out with the sliced preview.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
