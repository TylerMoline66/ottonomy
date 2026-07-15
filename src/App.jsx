import {
  Phone,
  Mail,
  Target,
  FileText,
  Mic,
  RefreshCw,
  Star,
  CloudLightning,
  ArrowRight,
  Shield,
  DollarSign,
  PhoneOff,
  ClipboardList,
  Clock,
  TrendingUp,
  Smile,
  Rocket,
  Users,
  Bot,
  Building2,
  ChevronRight,
  BarChart3,
} from 'lucide-react'

const NAV_LINKS = [
  { label: 'Why Otto', href: '#why-otto' },
  { label: 'What Otto Does', href: '#departments' },
  { label: 'Growing With Otto', href: '#roadmap' },
  { label: 'Contact', href: '#contact' },
]

const PAIN_POINTS = [
  { icon: PhoneOff, text: 'Fewer missed calls' },
  { icon: ClipboardList, text: 'Fewer admin tasks' },
  { icon: TrendingUp, text: 'More estimates closed' },
  { icon: DollarSign, text: 'Faster payments' },
  { icon: Smile, text: 'Happier customers' },
  { icon: Rocket, text: 'More time to grow' },
]

const DEPARTMENTS = [
  {
    icon: Phone,
    name: 'Front Desk',
    role: 'Your 24/7 Receptionist',
    description:
      'Otto answers every missed and after-hours call, captures the caller\'s name, address, and issue, books inspections, and flags emergencies — so a lead never hits voicemail again.',
    tag: 'Lead Capture',
  },
  {
    icon: Target,
    name: 'Sales Follow-Up',
    role: 'Your Quote Recovery Specialist',
    description:
      'Otto tracks every outstanding quote and runs persistent, personalized follow-ups in your company\'s voice — referencing the actual job — until the customer responds. Hot replies get escalated to your team immediately.',
    tag: 'Quote Recovery',
  },
]

const ROADMAP_DEPARTMENTS = [
  {
    icon: FileText,
    name: 'Claims',
    role: "The Adjuster's Assistant",
    description:
      'Compiles site photos and inspection notes into insurance-ready storm and hail damage claim reports, cutting hours off the process.',
  },
  {
    icon: Mic,
    name: 'Field Reports',
    role: "The Inspector's Scribe",
    description:
      "Turns a technician's on-site voice notes into a polished, branded roof condition report automatically.",
  },
  {
    icon: RefreshCw,
    name: 'Renewals',
    role: 'The Renewal Rep',
    description:
      'Nurtures completed jobs into annual maintenance agreements and warranty renewals — recurring revenue most contractors never capture.',
  },
  {
    icon: Star,
    name: 'Reputation',
    role: 'The Reputation Manager',
    description:
      'Triggers review requests after every completed job and helps respond to reviews quickly and professionally.',
  },
  {
    icon: CloudLightning,
    name: 'Storm Response',
    role: 'The Storm Chaser',
    description:
      'Monitors weather alerts and proactively reaches out to past customers in affected areas the same day a storm hits.',
  },
]

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/60 bg-slate-925/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
          <Bot className="h-6 w-6 text-blue-400" />
          Ottonomy
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Hire Otto
          </a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-925 to-slate-925" />
      <div className="absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400">
          <Users className="h-3.5 w-3.5" />
          Your AI Workforce
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Meet{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Otto
          </span>
          . Your Newest Employee.
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 sm:text-xl">
          Otto is an AI employee purpose-built for roofing and building services
          contractors. He answers your phones, follows up on your quotes, and
          never takes a day off. You choose the departments — Otto does the work.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/25"
          >
            Hire Otto Today
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#departments"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-8 py-3.5 text-base font-semibold text-slate-300 transition-all hover:border-slate-600 hover:text-white"
          >
            See What Otto Does
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { icon: Phone, stat: '100%', label: 'Calls Answered' },
            { icon: DollarSign, stat: '$18K+', label: 'Avg Quote Recovered' },
            { icon: Shield, stat: '24/7', label: 'Never Clocks Out' },
          ].map(({ icon: Icon, stat, label }) => (
            <div
              key={label}
              className="rounded-xl border border-slate-800 bg-slate-900/50 px-6 py-5"
            >
              <Icon className="mx-auto mb-2 h-5 w-5 text-blue-400" />
              <div className="text-2xl font-bold text-white">{stat}</div>
              <div className="text-sm text-slate-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyOtto() {
  return (
    <section id="why-otto" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-blue-400">
              Why Otto
            </span>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              You don't need more software.{' '}
              <span className="text-blue-400">You need another employee.</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Your team isn't losing jobs because they're bad at sales. They're
                losing jobs because they're out on roofs all day and nobody's
                answering the phone. Quotes go silent because no one has time to
                follow up five, six, seven times.
              </p>
              <p>
                It's not a sales problem — it's a{' '}
                <span className="font-medium text-white">bandwidth problem</span>.
                And you can't solve a bandwidth problem with another app. You
                solve it with another set of hands.
              </p>
              <p>
                That's Otto. He's the employee who handles the business side so
                your crew can focus on the work that actually pays.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
              <h3 className="mb-2 text-lg font-semibold text-white">
                What you actually wake up wanting
              </h3>
              <p className="mb-6 text-sm text-slate-500">
                Not "AI automation." Not "machine learning." Just this:
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {PAIN_POINTS.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-925/80 px-4 py-3 transition-all hover:border-blue-500/20"
                  >
                    <Icon className="h-4.5 w-4.5 shrink-0 text-blue-400" />
                    <span className="text-sm font-medium text-slate-300">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg bg-blue-500/5 border border-blue-500/10 px-4 py-3">
                <p className="text-sm text-blue-300/90">
                  <span className="font-semibold text-blue-400">Otto</span> is the
                  employee that gives you all of these things.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Custom Built to You',
              desc: 'Otto learns how your company operates — not a generic template.',
              icon: Building2,
            },
            {
              title: 'Speaks in Your Voice',
              desc: "Follow-ups reference actual jobs. Customers can't tell the difference.",
              icon: Users,
            },
            {
              title: 'Measurable ROI',
              desc: "Monthly dashboards show leads, recoveries, and dollars saved — you'll always know Otto's earning his keep.",
              icon: BarChart3,
            },
            {
              title: 'Prove Then Grow',
              desc: 'Otto earns his first role before you give him another. No bloated packages.',
              icon: TrendingUp,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition-all hover:border-slate-700"
            >
              <item.icon className="mb-3 h-5 w-5 text-blue-400" />
              <div className="mb-1 text-sm font-semibold text-white">{item.title}</div>
              <div className="text-sm text-slate-500">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Departments() {
  return (
    <section id="departments" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-925 via-slate-900/40 to-slate-925" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-blue-400">
            Otto's First Departments
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Hire Otto. Choose the departments.
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Otto starts with two roles that tackle the two biggest revenue leaks
            in contracting. Once he's proven himself, you can expand his responsibilities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {DEPARTMENTS.map((dept) => (
            <div
              key={dept.name}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-8 transition-all hover:border-blue-500/30 hover:bg-slate-900/80"
            >
              <div className="absolute top-0 right-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-blue-500/5 blur-2xl transition-all group-hover:bg-blue-500/10" />
              <div className="relative">
                <div className="mb-3 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                  {dept.tag}
                </div>
                <div className="mb-1 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                    <dept.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {dept.name}
                    </h3>
                    <span className="text-sm text-blue-400/80">{dept.role}</span>
                  </div>
                </div>
                <p className="mt-4 leading-relaxed text-slate-400">
                  {dept.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/40 p-8 text-center">
          <div className="flex items-center justify-center gap-3">
            <BarChart3 className="h-5 w-5 text-blue-400" />
            <span className="font-medium text-white">
              Otto reports in every month
            </span>
          </div>
          <p className="mt-2 text-sm text-slate-500">
            Leads captured, quotes followed up, and estimated dollars recovered
            — so you always know he's earning his keep.
          </p>
        </div>
      </div>
    </section>
  )
}

function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-blue-400">
            Otto's Growth Plan
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            More departments. Same employee.
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Once Otto's proven himself in his first roles, you can hand him new
            departments — each one proving its own value before the next.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ROADMAP_DEPARTMENTS.map((dept) => (
            <div
              key={dept.name}
              className="group rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition-all hover:border-slate-700 hover:bg-slate-900/60"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 transition-colors group-hover:bg-blue-500/10">
                  <dept.icon className="h-5 w-5 text-slate-500 transition-colors group-hover:text-blue-400" />
                </div>
                <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-xs text-slate-500">
                  {dept.name}
                </span>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-white">
                {dept.role}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                {dept.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Vision() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-925 via-blue-950/10 to-slate-925" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-blue-400">
          The Vision
        </span>
        <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Every business gets an{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Otto
          </span>
          .
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400">
          We're starting with roofing because that's where we know the problems
          inside and out. But Otto isn't a roofing tool — he's an AI employee
          that any service business can hire. Today it's your front desk and
          sales follow-up. Tomorrow it's claims, inspections, renewals, and
          reputation. You don't buy software — you hire Otto, and choose which
          departments you want him to run.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-925 bg-gradient-to-br from-blue-500/20 to-blue-600/20"
              >
                <Bot className="h-4 w-4 text-blue-400" />
              </div>
            ))}
          </div>
          <ChevronRight className="h-5 w-5 text-slate-600" />
          <span className="text-sm font-medium text-slate-500">
            One Otto per business. Every department covered.
          </span>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-925 via-slate-900/40 to-slate-925" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-blue-400">
          Get Started
        </span>
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Ready to hire Otto?
        </h2>
        <p className="mb-12 text-slate-400">
          Book a free 30-minute walkthrough. We'll show you exactly how Otto
          would fit into your current process — and what he can start handling
          from day one.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <a
            href="mailto:info@ottonomy.ai"
            className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-left transition-all hover:border-blue-500/30 hover:bg-slate-900/80"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
              <Mail className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <div className="text-sm text-slate-500">Email</div>
              <div className="font-medium text-white transition-colors group-hover:text-blue-400">
                info@ottonomy.ai
              </div>
            </div>
          </a>

          <a
            href="tel:+17809999999"
            className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-left transition-all hover:border-blue-500/30 hover:bg-slate-900/80"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
              <Phone className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <div className="text-sm text-slate-500">Phone</div>
              <div className="font-medium text-white transition-colors group-hover:text-blue-400">
                (780) 999-9999
              </div>
            </div>
          </a>
        </div>

        <div className="mt-8">
          <a
            href="mailto:info@ottonomy.ai?subject=I%20Want%20to%20Hire%20Otto"
            className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-10 py-4 text-base font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/25"
          >
            Hire Otto
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-800/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
            <Bot className="h-4 w-4 text-blue-400/50" />
            Ottonomy
          </div>
          <span className="text-sm text-slate-700">
            &copy; {new Date().getFullYear()}
          </span>
        </div>
        <div className="flex gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 transition-colors hover:text-slate-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyOtto />
      <Departments />
      <Roadmap />
      <Vision />
      <Contact />
      <Footer />
    </div>
  )
}
