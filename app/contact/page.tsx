'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.message) {
      setSent(true);
    }
  };

  return (
    <div className="py-12 md:py-20 space-y-12">
      <header className="o-container max-w-3xl">
        <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-bold text-primary">
          <span className="block h-px w-7 bg-primary" />
          We&apos;d love to hear from you
        </span>
        <h1 className="o-display text-4xl md:text-6xl font-bold tracking-tight mt-4 leading-[1.05]">
          Contact Qadri
        </h1>
        <p className="text-lg text-muted mt-4 leading-relaxed">
          One inbox, one team, one fast reply. We answer most messages within four business hours.
        </p>
      </header>

      <section className="o-container pb-24 grid gap-6 md:grid-cols-3 max-w-5xl">
        {/* Email Card */}
        <div
          className="o-card p-6 md:col-span-2 flex flex-col justify-between"
          style={{ borderColor: 'color-mix(in srgb, var(--primary) 30%, transparent)' }}
        >
          <div>
            <span
              className="size-10 rounded-2xl grid place-items-center"
              style={{ background: 'color-mix(in srgb, var(--primary) 14%, transparent)', color: 'var(--primary)' }}
            >
              <Mail className="w-5 h-5" />
            </span>
            <h2 className="o-display text-2xl font-bold mt-4">Email us — fastest path</h2>
            <p className="text-sm text-muted mt-2 leading-relaxed">
              One address handles everything: custom paper bag quotations, bespoke rug commissions, sample swatch requests, order status, and corporate partnerships. Replies typically land within 4 business hours.
            </p>
            <a
              href="mailto:contact@qadriex.com"
              className="o-btn-primary inline-flex items-center gap-2 mt-5 self-start"
            >
              <Mail className="w-4 h-4" /> contact@qadriex.com
            </a>
          </div>
          <p className="text-xs text-muted mt-6">
            For order-specific questions, please include your order ID (e.g.{' '}
            <span className="font-mono font-semibold">QAD-XXXXXXXX</span>) in the subject line — speeds us up considerably.
          </p>
        </div>

        {/* WhatsApp Card */}
        <div className="o-card p-6 flex flex-col justify-between">
          <div>
            <span
              className="size-10 rounded-2xl grid place-items-center"
              style={{ background: 'color-mix(in srgb, var(--primary) 14%, transparent)', color: 'var(--primary)' }}
            >
              <MessageSquare className="w-5 h-5" />
            </span>
            <h2 className="o-display text-xl font-bold mt-4">Direct WhatsApp &amp; Phone</h2>
            <p className="text-xs text-muted mt-2 leading-relaxed">
              Chat directly with our team regarding custom catalog runs or quick inquiries.
            </p>
            <a
              href="https://wa.me/918521122231"
              target="_blank"
              rel="noopener noreferrer"
              className="o-btn-ghost inline-flex items-center gap-2 mt-5 text-xs font-bold"
            >
              <Phone className="w-3.5 h-3.5" /> +91-85211-22231
            </a>
          </div>

          <div className="pt-6 border-t border-app mt-6" style={{ borderColor: 'var(--border)' }}>
            <span className="text-xs text-muted block">Office Hours:</span>
            <span className="text-xs font-semibold">Mon–Sat: 10:00 AM – 7:00 PM IST</span>
          </div>
        </div>

        {/* Studio Locations Card */}
        <div className="o-card p-6 md:col-span-3">
          <div className="flex items-center gap-2 text-primary">
            <MapPin className="w-5 h-5" />
            <h3 className="font-bold text-base">Studio &amp; Workshops</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mt-4 text-xs text-muted leading-relaxed">
            <div>
              <b className="text-text block text-sm mb-1">Corporate Office &amp; Pune Studio</b>
              QADRI<br />
              Krome Business District<br />
              BT Kawade Road, Pune 411013, Maharashtra, India
            </div>
            <div>
              <b className="text-text block text-sm mb-1">Manufacturing &amp; Dispatch Hub</b>
              DLF Cyber City Corridor<br />
              Gurgaon 122002, Haryana, India<br />
              Specializing in high-volume utility paper bags and artisan luxury rugs.
            </div>
          </div>
        </div>

        {/* Interactive Form Card */}
        <div className="o-card p-8 md:col-span-3">
          <h2 className="o-display text-2xl font-bold mb-2">Send us a direct message</h2>
          <p className="text-xs text-muted mb-6">Leave your details and note below. We read and answer every transmission.</p>

          {sent ? (
            <div className="p-6 rounded-2xl bg-surface-2 text-center space-y-2">
              <span className="text-mint font-bold text-lg">Message Received!</span>
              <p className="text-xs text-muted">We have logged your query and our studio team will reply to {formData.email} shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1 text-muted">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Sameer Rao"
                  className="o-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-muted">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="sameer@example.com"
                  className="o-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold mb-1 text-muted">Subject / Order ID (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Bulk Paper Bag Quotation or Bespoke Rug Inquiry (QAD-12345)"
                  className="o-input"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold mb-1 text-muted">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us what's on your mind..."
                  className="o-input resize-y"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="o-btn-primary gap-2 cursor-pointer">
                  <Send className="w-4 h-4" /> Send Note
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
