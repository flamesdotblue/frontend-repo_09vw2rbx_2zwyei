import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">About</span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white">I design for clarity and joy</h2>
          <p className="mt-3 text-zinc-300">
            With over 3 years in a service-based environment, I’ve partnered with startups and enterprises to craft
            intuitive products that ship on time and perform in the real world.
          </p>
          <p className="mt-3 text-zinc-300">
            I love weaving micro-interactions and 3D elements into interfaces that feel tactile and alive—without
            compromising usability.
          </p>
        </motion.div>

        <motion.ul className="grid grid-cols-2 gap-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          {[
            { label: 'Years Experience', value: '3+' },
            { label: 'Projects Delivered', value: '50+' },
            { label: 'Client NPS', value: '9.2' },
            { label: 'Industries', value: 'Fintech, SaaS, Edtech' },
          ].map((s) => (
            <li key={s.label} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-transform duration-200 hover:-translate-y-1">
              <p className="text-sm text-zinc-400">{s.label}</p>
              <p className="mt-1 text-3xl font-bold text-white">{s.value}</p>
              <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 opacity-60 transition-opacity group-hover:opacity-100" />
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
