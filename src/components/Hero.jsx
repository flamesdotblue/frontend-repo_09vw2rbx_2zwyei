import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section ref={ref} id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_500px_at_20%_20%,rgba(59,130,246,0.10),transparent),radial-gradient(800px_400px_at_80%_20%,rgba(168,85,247,0.10),transparent)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24">
        <motion.div style={{ y, opacity }} className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Rocket className="h-4 w-4 text-sky-400" />
            <span className="text-xs font-medium tracking-wider text-zinc-300">UI/UX DESIGNER • 3+ YEARS • SERVICE-BASED</span>
          </div>
          <h1 className="mx-auto max-w-4xl text-balance font-['Mona_Sans'] text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Crafting modern, playful and interactive experiences
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-zinc-300">
            I design delightful digital products with micro-interactions, bento layouts, and bold typography. Let’s make your next idea feel alive.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-white/10 transition-transform duration-200 hover:scale-105">
              See Work
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-white/40">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
