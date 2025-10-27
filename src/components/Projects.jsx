import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Fintech Mobile App',
    desc: 'End-to-end product design with micro-interactions and dark theme.',
    tags: ['Mobile', 'Fintech', 'Motion'],
    color: 'from-sky-500/20 to-transparent',
  },
  {
    title: 'SaaS Analytics Dashboard',
    desc: 'Bento layout, crisp data visuals, and playful empty states.',
    tags: ['Web', 'Dashboard', 'Bento'],
    color: 'from-violet-500/20 to-transparent',
  },
  {
    title: 'E-commerce Experience',
    desc: 'Parallax hero, tactile cards, and 3D product exploration.',
    tags: ['E-commerce', '3D', 'Parallax'],
    color: 'from-emerald-500/20 to-transparent',
  },
  {
    title: 'Edtech Platform',
    desc: 'Accessible UI, joyful animations, and retention-focused flows.',
    tags: ['Edtech', 'Web', 'UX'],
    color: 'from-amber-500/20 to-transparent',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">Selected Work</h2>
          <p className="mt-2 max-w-xl text-zinc-400">A mix of case studies and explorations designed with intent and interaction at the core.</p>
        </div>
        <a href="#contact" className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur hover:border-white/30 md:block">Start a project</a>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
        {projects.map((p, i) => (
          <motion.article
            key={i}
            whileHover={{ y: -6, rotateX: 2 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`group relative col-span-1 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b ${p.color} p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur md:col-span-3 lg:col-span-2`}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(400px_200px_at_80%_-10%,rgba(255,255,255,0.08),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="flex items-start justify-between">
              <h3 className="max-w-[70%] text-xl font-bold text-white">{p.title}</h3>
              <span className="rounded-full border border-white/15 bg-white/5 p-2 text-white/70 transition-all group-hover:scale-110 group-hover:bg-white/10">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            <p className="mt-3 text-sm text-zinc-300">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 h-28 w-full rounded-xl bg-gradient-to-tr from-white/10 to-transparent" />
          </motion.article>
        ))}

        <motion.article
          whileHover={{ y: -6 }}
          className="col-span-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:col-span-3 lg:col-span-2"
        >
          <h3 className="text-xl font-bold text-white">Design Principles</h3>
          <p className="mt-2 text-sm text-zinc-300">A quick look at the system that guides my decisions.</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li>• Meaningful motion over gratuitous animation</li>
            <li>• Clear hierarchy with bold type</li>
            <li>• Delight with intent</li>
          </ul>
        </motion.article>

        <motion.article
          whileHover={{ y: -6 }}
          className="col-span-1 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 md:col-span-3 lg:col-span-2"
        >
          <h3 className="text-xl font-bold text-white">Toolbox</h3>
          <p className="mt-2 text-sm text-zinc-300">Figma, Framer, After Effects, Blender, Spline, Principle.</p>
          <p className="mt-2 text-sm text-zinc-300">React, Tailwind, Radix, GSAP, Framer Motion.</p>
        </motion.article>
      </div>
    </section>
  );
}
