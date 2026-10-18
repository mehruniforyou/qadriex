'use client';

import React, { useState, useEffect } from 'react';
import { Cpu, Activity, Clock, Layers, Thermometer, Wifi, CheckCircle2 } from 'lucide-react';

export default function PrintersLivePage() {
  const [timestamp, setTimestamp] = useState<string>('');

  useEffect(() => {
    setTimestamp(new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    const interval = setInterval(() => {
      setTimestamp(new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const printers = [
    {
      id: 'P2S · 01',
      model: 'Bambu Lab P2S (Pune Hub)',
      status: 'Printing',
      currentJob: 'Malibu After Dark · Edition #048',
      layer: '412 / 640 layers',
      progress: 64,
      nozzleTemp: '220°C',
      bedTemp: '65°C',
      filament: 'Matte Deep Black & Neon Magenta (AMS 2)',
      speed: '250 mm/s',
      remaining: '1h 14m remaining',
    },
    {
      id: 'P2S · 02',
      model: 'Bambu Lab P2S (Pune Hub)',
      status: 'Printing',
      currentJob: 'F1 Grid 2027 · Edition #019',
      layer: '215 / 550 layers',
      progress: 39,
      nozzleTemp: '220°C',
      bedTemp: '60°C',
      filament: 'Monochrome White & Matte Charcoal',
      speed: '240 mm/s',
      remaining: '2h 05m remaining',
    },
    {
      id: 'P2S · 03',
      model: 'Bambu Lab P2S (Gurgaon Hub)',
      status: 'Cooling',
      currentJob: 'NanoVault (Matte Olive) · Inspection Pending',
      layer: 'Completed (420 / 420)',
      progress: 100,
      nozzleTemp: '42°C',
      bedTemp: '34°C',
      filament: 'Matte Military Olive PLA+',
      speed: '0 mm/s',
      remaining: 'Cycle finished 8m ago',
    },
    {
      id: 'P2S · 04',
      model: 'Bambu Lab P2S (Gurgaon Hub)',
      status: 'Printing',
      currentJob: 'TurboGrip Desk Organizer · Edition #082',
      layer: '512 / 620 layers',
      progress: 82,
      nozzleTemp: '225°C',
      bedTemp: '62°C',
      filament: 'Racing Brembo Red & Gunmetal Gray',
      speed: '260 mm/s',
      remaining: '28m remaining',
    },
  ];

  return (
    <div className="py-12 md:py-20 space-y-12">
      <header className="o-container pt-4 pb-8 max-w-3xl">
        <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-bold text-mint">
          <span className="inline-block size-2 rounded-full bg-mint animate-pulse" />
          Live Studio Telemetry {timestamp ? `· ${timestamp} IST` : ''}
        </span>
        <h1 className="o-display text-4xl md:text-6xl font-bold tracking-tight mt-4 leading-[1.05]">
          Watch the printers.
        </h1>
        <p className="text-lg text-muted mt-4 leading-relaxed">
          Real-time operating status of our synchronized Bambu Lab P2S printer farm in Pune &amp; Gurgaon. Every Oruky is actively carved layer by layer right here.
        </p>
      </header>

      {/* Printer Dashboard Cards */}
      <section className="o-container max-w-5xl">
        <div className="grid sm:grid-cols-2 gap-6">
          {printers.map((p) => (
            <article key={p.id} className="o-card p-6 md:p-7 space-y-5 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold tracking-wider text-muted">{p.id}</span>
                  <h3 className="font-bold text-base mt-0.5">{p.model}</h3>
                </div>
                <span
                  className={`o-badge text-[10px] ${
                    p.status === 'Printing' ? 'bg-mint/20 text-mint' : 'bg-primary/10 text-primary'
                  }`}
                >
                  <span className="inline-block size-1.5 rounded-full bg-current mr-1 animate-pulse" />
                  {p.status}
                </span>
              </div>

              {/* Job info */}
              <div className="p-3.5 rounded-xl bg-surface-2 space-y-1 text-xs">
                <span className="text-muted block text-[11px]">Active Job:</span>
                <p className="font-bold text-sm truncate">{p.currentJob}</p>
                <div className="flex justify-between text-muted text-[11px] pt-1">
                  <span>{p.layer}</span>
                  <span className="text-mint font-semibold">{p.remaining}</span>
                </div>
                {/* Progress bar */}
                <div className="h-1.5 w-full bg-surface rounded-full overflow-hidden mt-1.5">
                  <div
                    className="h-full bg-primary transition-all duration-500 rounded-full"
                    style={{ width: `${p.progress}%` }}
                  />
                </div>
              </div>

              {/* Telemetry stats */}
              <div className="grid grid-cols-3 gap-2 text-xs pt-1 border-t border-app" style={{ borderColor: 'var(--border)' }}>
                <div>
                  <span className="text-[10px] text-muted block">Nozzle</span>
                  <span className="font-mono font-semibold">{p.nozzleTemp}</span>
                </div>
                <div>
                  <span className="text-[10px] text-muted block">Heatbed</span>
                  <span className="font-mono font-semibold">{p.bedTemp}</span>
                </div>
                <div>
                  <span className="text-[10px] text-muted block">Speed</span>
                  <span className="font-mono font-semibold">{p.speed}</span>
                </div>
              </div>

              <div className="text-[11px] text-muted truncate">
                Filament: <span className="font-medium text-text">{p.filament}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Farm stats */}
      <section className="o-container max-w-4xl">
        <div className="o-card p-6 md:p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center bg-surface-2">
          <div>
            <span className="o-display text-3xl font-bold">4</span>
            <span className="text-xs text-muted block mt-1">Active CoreXY P2S Units</span>
          </div>
          <div>
            <span className="o-display text-3xl font-bold">0.12mm</span>
            <span className="text-xs text-muted block mt-1">Standard Layer Resolution</span>
          </div>
          <div>
            <span className="o-display text-3xl font-bold">16 Spools</span>
            <span className="text-xs text-muted block mt-1">Simultaneous AMS Feed</span>
          </div>
          <div>
            <span className="o-display text-3xl font-bold">99.4%</span>
            <span className="text-xs text-muted block mt-1">QA Inspection Pass Rate</span>
          </div>
        </div>
      </section>
    </div>
  );
}
