import React from 'react'
import { motion } from 'framer-motion'
import { Brain, LineChart, Users, Wallet, Megaphone, ArrowRight } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.2 }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

const glow = 'shadow-[0_0_60px_rgba(56,189,248,0.35)]'

function Tag({ children }) {
  return (
    <span className={`inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur ${glow}`}>
      {children}
    </span>
  )
}

function HoloCard({ icon: Icon, title, text }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 text-white backdrop-blur-md transition hover:border-cyan-400/40 ${glow}`}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(1200px 200px at 0% 0%, rgba(34,211,238,0.15), transparent)' }} />
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-cyan-500/10 p-2 ring-1 ring-inset ring-cyan-300/30">
          <Icon className="h-5 w-5 text-cyan-300" />
        </div>
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-white/70 leading-relaxed">{text}</p>
      <button className="mt-4 inline-flex items-center gap-2 text-cyan-300/90 hover:text-cyan-200 transition">
        Explore <ArrowRight className="h-4 w-4" />
      </button>
    </motion.div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#030712] text-white">
      {/* Hero with Spline */}
      <section className="relative h-[92vh] w-full overflow-hidden">
        {/* Spline 3D scene */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Gradient and vignette overlays (don't block interaction) */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_40%_at_50%_0%,rgba(59,130,246,0.25),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/10 to-[#030712]" />
        <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />

        {/* Text overlay */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center"
        >
          <motion.div variants={fadeUp} className="mb-4 flex items-center gap-3">
            <Tag>futuristic startup film</Tag>
            <Tag>neon-blue lighting</Tag>
            <Tag>holographic interface</Tag>
          </motion.div>

          <motion.h1 variants={fadeUp} className={`text-4xl sm:text-6xl font-semibold tracking-tight drop-shadow ${glow}`}>
            AI Business Brain
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-white/80">
            Meet your Virtual COO — a plug-in AI that automates finance, hiring, marketing, and sales.
            Real-time decisions. Effortless execution. While you sleep.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200 ring-1 ring-inset ring-cyan-400/30">
              "AI that runs your business while you sleep"
            </span>
            <span className="rounded-full bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200 ring-1 ring-inset ring-indigo-400/30">
              Finance. Hiring. Marketing. Sales — Automated.
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Product showcase grid */}
      <section className="relative z-10 mx-auto -mt-16 max-w-6xl px-6">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <HoloCard icon={Wallet} title="Finance" text="Autopilot cashflow, forecasting, and smart budgets. Daily insights and instant scenario planning." />
          <HoloCard icon={Users} title="Hiring" text="AI-shortlisted candidates, culture fit signals, and proactive workforce planning." />
          <HoloCard icon={Megaphone} title="Marketing" text="Channel mix optimization, creative insights, and always-on growth experiments." />
          <HoloCard icon={LineChart} title="Sales" text="Pipeline autopilot, dynamic pricing, and AI follow-ups that close deals." />
        </motion.div>
      </section>

      {/* Cinematic sequence: dashboards */}
      <section className="relative mx-auto mt-20 max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className={`rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur ${glow}`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-2 rounded-2xl bg-[#0A1220] p-5 ring-1 ring-white/10">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-white/70"><Brain className="h-5 w-5 text-cyan-300" /> Executive Insights</div>
                <span className="text-xs text-white/40">Live</span>
              </div>
              <div className="h-48 rounded-xl bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-indigo-500/10 ring-1 ring-white/10" />
              <p className="mt-4 text-sm text-white/70">Daily briefing with predicted revenue, risk highlights, and top actions for today.</p>
            </div>
            <div className="rounded-2xl bg-[#0A1220] p-5 ring-1 ring-white/10">
              <div className="mb-3 text-white/70">Cashflow</div>
              <div className="h-32 rounded-lg bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 ring-1 ring-white/10" />
              <p className="mt-3 text-xs text-white/60">12-month runway with auto-adjusted budgets.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Voice-over script as cinematic captions */}
      <section className="mx-auto mt-20 max-w-3xl px-6">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-6 text-center">
          <motion.p variants={fadeUp} className="text-lg text-white/80">Meet your Virtual COO.</motion.p>
          <motion.p variants={fadeUp} className="text-lg text-white/80">A brain for your business — calm, confident, always-on.</motion.p>
          <motion.p variants={fadeUp} className="text-lg text-white/80">It watches every signal. Learns your patterns. Acts in real time.</motion.p>
          <motion.p variants={fadeUp} className="text-lg text-white/80">From finance to hiring, marketing to sales — decisions made, actions executed.</motion.p>
          <motion.p variants={fadeUp} className="text-lg text-white/80">So you can focus on vision, not spreadsheets.</motion.p>
        </motion.div>
      </section>

      {/* End scene with glowing logo */}
      <section className="relative mt-24 flex items-center justify-center px-6 pb-24">
        <div className="absolute inset-0 -z-0 pointer-events-none bg-[radial-gradient(40%_30%_at_50%_60%,rgba(56,189,248,0.25),transparent)]" />
        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }} className="text-center">
          <div className={`mx-auto inline-flex items-center gap-3 rounded-2xl bg-white/[0.03] px-6 py-4 ring-1 ring-white/10 backdrop-blur ${glow}`}>
            <div className="rounded-xl bg-cyan-500/10 p-3 ring-1 ring-inset ring-cyan-300/30">
              <Brain className="h-6 w-6 text-cyan-300" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-semibold tracking-tight">AI Business Brain</div>
              <div className="text-sm text-white/70">Your Virtual COO.</div>
            </div>
          </div>
          <div className="mt-6 text-sm text-white/60">Powering the next generation of entrepreneurs.</div>
        </motion.div>
      </section>
    </div>
  )
}
