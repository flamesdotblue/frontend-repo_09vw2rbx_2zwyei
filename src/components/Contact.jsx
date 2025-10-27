import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', company: '', budget: '' });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message, company: form.company || undefined, budget: form.budget || undefined }),
      });
      if (!res.ok) throw new Error('Failed to submit');
      setStatus({ loading: false, success: 'Thanks! I will get back to you shortly.', error: null });
      setForm({ name: '', email: '', message: '', company: '', budget: '' });
    } catch (err) {
      setStatus({ loading: false, success: null, error: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">Let’s build something great</h2>
        <p className="mt-2 text-zinc-400">Tell me about your project and I’ll reach out within 24 hours.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <motion.form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <label className="grid gap-1">
              <span className="text-sm text-zinc-300">Name</span>
              <input required name="name" value={form.name} onChange={onChange} placeholder="Jane Doe" className="rounded-lg border border-white/10 bg-zinc-900/60 px-3 py-2 text-white outline-none ring-0 transition focus:border-white/30" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-zinc-300">Email</span>
              <input required type="email" name="email" value={form.email} onChange={onChange} placeholder="jane@studio.com" className="rounded-lg border border-white/10 bg-zinc-900/60 px-3 py-2 text-white outline-none ring-0 transition focus:border-white/30" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-zinc-300">Company (optional)</span>
              <input name="company" value={form.company} onChange={onChange} placeholder="Acme Inc." className="rounded-lg border border-white/10 bg-zinc-900/60 px-3 py-2 text-white outline-none ring-0 transition focus:border-white/30" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-zinc-300">Budget (optional)</span>
              <input name="budget" value={form.budget} onChange={onChange} placeholder="$5k - $10k" className="rounded-lg border border-white/10 bg-zinc-900/60 px-3 py-2 text-white outline-none ring-0 transition focus:border-white/30" />
            </label>
            <label className="col-span-full grid gap-1">
              <span className="text-sm text-zinc-300">Message</span>
              <textarea required name="message" rows={5} value={form.message} onChange={onChange} placeholder="Share goals, timeline, and any references." className="rounded-lg border border-white/10 bg-zinc-900/60 px-3 py-2 text-white outline-none ring-0 transition focus:border-white/30" />
            </label>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button disabled={status.loading} className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-white/10 transition-transform duration-200 hover:scale-105 disabled:opacity-50">
              {status.loading ? 'Sending…' : 'Send message'}
            </button>
            {status.success && <p className="text-sm text-emerald-400">{status.success}</p>}
            {status.error && <p className="text-sm text-rose-400">{status.error}</p>}
          </div>
        </motion.form>

        <motion.div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-sky-500/10 to-violet-500/10 p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-sky-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-violet-500/30 blur-3xl" />
          <h3 className="text-xl font-bold text-white">Capabilities</h3>
          <ul className="mt-3 space-y-2 text-zinc-300">
            <li>• Product discovery & UX strategy</li>
            <li>• Prototyping & micro-interactions</li>
            <li>• Design systems & bento layouts</li>
            <li>• 3D & motion for delight</li>
          </ul>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-zinc-300">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">Available for freelance</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">Based in Remote</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
