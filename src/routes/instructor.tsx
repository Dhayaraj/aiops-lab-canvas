import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Award,
  BookOpen,
  Users,
  Calendar,
  Star,
  ArrowLeft,
  ChevronRight,
  Quote,
  Briefcase,
  GraduationCap,
  Target,
  Heart,
  Lightbulb,
  Code,
  Server,
  Shield,
} from "lucide-react";

export const Route = createFileRoute("/instructor")({
  head: () => ({
    meta: [
      {
        title:
          "About Our Instructor | AIOps Course | Jeevi Academy",
      },
      {
        name: "description",
        content:
          "Meet the instructor behind Jeevi Academy's AIOps Course. Explore their IT operations journey, teaching philosophy, student reviews, and hands-on training approach.",
      },
      {
        property: "og:title",
        content:
          "About Our Instructor | AIOps Course | Jeevi Academy",
      },
      {
        property: "og:description",
        content:
          "Discover the story, experience, and teaching approach of the instructor leading Jeevi Academy's hands-on AIOps training program.",
      },
    ],
  }),
  component: InstructorPage,
});

/* ---------- DATA ---------- */

const experienceTimeline = [
  {
    year: "2008–2012",
    role: "Linux System Administrator",
    org: "Enterprise IT Services",
    description:
      "Started career managing Linux servers, learning the fundamentals of system monitoring, troubleshooting, and infrastructure reliability from the ground up.",
    icon: Server,
  },
  {
    year: "2012–2015",
    role: "Senior Infrastructure Engineer",
    org: "Cloud & Data Center Operations",
    description:
      "Managed large-scale infrastructure with Nagios, Zabbix, and custom alerting pipelines. Led incident response for production environments serving millions of users.",
    icon: Shield,
  },
  {
    year: "2015–2018",
    role: "DevOps & SRE Lead",
    org: "Product Engineering Company",
    description:
      "Built CI/CD pipelines, implemented SLO/SLI frameworks, introduced Prometheus + Grafana observability stack, and reduced MTTR by 60% through automated incident workflows.",
    icon: Code,
  },
  {
    year: "2018–2021",
    role: "AIOps & Automation Architect",
    org: "Enterprise AIOps Practice",
    description:
      "Designed ML-driven anomaly detection systems, event correlation engines, and self-healing infrastructure using Python, Ansible, and local LLM assistants.",
    icon: Lightbulb,
  },
  {
    year: "2021–Present",
    role: "Lead Instructor & Founder",
    org: "Jeevi Academy",
    description:
      "Founded Jeevi Academy to bridge the gap between theoretical IT training and real-world operations skills. Designed the AIOps curriculum with 100% hands-on VirtualBox labs.",
    icon: GraduationCap,
  },
];

const teachingPhilosophy = [
  {
    title: "Learn by Building",
    description:
      "Every concept is taught through practical labs. Students don't just read about AIOps — they build monitoring stacks, break systems, and fix them.",
    icon: Target,
  },
  {
    title: "Vendor-Neutral Approach",
    description:
      "Focus on transferable concepts and open-source tools that work across any IT environment — no vendor lock-in, no paid cloud dependencies.",
    icon: BookOpen,
  },
  {
    title: "Small Batch, Deep Support",
    description:
      "Intentionally small batches ensure every student gets personal attention, code reviews, and career mentoring throughout the course.",
    icon: Users,
  },
  {
    title: "Real Incident Simulations",
    description:
      "Students practice with realistic break/fix scenarios modeled after actual production incidents — preparing them for real-world on-call situations.",
    icon: Briefcase,
  },
  {
    title: "Career-First Curriculum",
    description:
      "The syllabus is designed around what hiring managers actually look for in AIOps, SRE, and DevOps roles — not just theoretical knowledge.",
    icon: Award,
  },
  {
    title: "Passion for Teaching",
    description:
      "Teaching isn't a side project — it's a calling. Every lesson, lab, and review is crafted with genuine care for each student's growth and success.",
    icon: Heart,
  },
];

const achievements = [
  { value: "15+", label: "Years in IT Operations" },
  { value: "500+", label: "Students Trained" },
  { value: "50+", label: "Batches Completed" },
  { value: "98%", label: "Student Satisfaction" },
];

const certifications = [
  "Red Hat Certified System Administrator (RHCSA)",
  "AWS Solutions Architect – Associate",
  "Certified Kubernetes Administrator (CKA)",
  "Prometheus Certified Associate (PCA)",
  "ITIL Foundation Certified",
  "HashiCorp Terraform Associate",
];

const reviews = [
  {
    name: "Premkumar V",
    role: "DevOps Engineer",
    batch: "Batch 12",
    rating: 5,
    text: "The instructor's real-world experience makes all the difference. Every concept was explained with actual production incident examples. I felt like I was learning from a senior engineer on my team.",
    highlight: "Production-grade teaching",
  },
  {
    name: "Rex F",
    role: "Linux Administrator",
    batch: "Batch 10",
    rating: 5,
    text: "What stood out was the patience and depth. He didn't rush through topics — every student's doubt was addressed. The VirtualBox labs made everything practical and memorable.",
    highlight: "Patient & thorough",
  },
  {
    name: "Ivan Maxwell",
    role: "SRE Beginner",
    batch: "Batch 14",
    rating: 5,
    text: "I came with zero observability experience and left with a complete AIOps project portfolio. The instructor personally reviewed my capstone and helped me prepare for interviews.",
    highlight: "Hands-on mentoring",
  },
  {
    name: "Perumal Sivam",
    role: "NOC Engineer",
    batch: "Batch 8",
    rating: 5,
    text: "The break/fix labs were incredible. We actually broke production-like systems and had to troubleshoot them. This is exactly what we do in real NOC environments.",
    highlight: "Real-world simulations",
  },
  {
    name: "Anitha R",
    role: "Infrastructure Engineer",
    batch: "Batch 11",
    rating: 5,
    text: "The anomaly detection and self-healing automation modules were game-changers. The instructor showed us exactly how ML fits into IT operations without overcomplicating it.",
    highlight: "ML made practical",
  },
  {
    name: "Karthik S",
    role: "IT Support Engineer",
    batch: "Batch 15",
    rating: 5,
    text: "Career guidance was exceptional. Beyond the technical training, the instructor helped me rewrite my resume, practice mock interviews, and understand what SRE roles actually require.",
    highlight: "Career transformation",
  },
];

const expertiseAreas = [
  "Observability & Monitoring",
  "Prometheus & Grafana",
  "Anomaly Detection (ML)",
  "Event Correlation",
  "Incident Response",
  "Auto-Remediation (Ansible)",
  "Self-Healing Infrastructure",
  "Local LLM for AIOps",
  "Linux Administration",
  "SRE Principles",
  "Capacity Planning",
  "Python for Operations",
];

/* ---------- COMPONENTS ---------- */

function InstructorPage() {
  return (
    <div className="min-h-screen text-foreground antialiased selection:bg-primary/30 selection:text-foreground">
      <InstructorHeader />
      <main>
        <InstructorHero />
        <AchievementBar />
        <StorySection />
        <ExperienceTimeline />
        <ExpertiseSection />
        <PhilosophySection />
        <CertificationsSection />
        <ReviewsSection />
        <CTASection />
      </main>
      <InstructorFooter />
    </div>
  );
}

function InstructorHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Course</span>
          </Link>
          <div className="w-px h-6 bg-border hidden sm:block" />
          <a href="/" className="flex items-center gap-2">
            <img
              src="/favicon.ico"
              alt="Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="font-semibold tracking-tight">Jeevi Academy</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="tel:+919994051212"
            className="px-4 py-2 text-sm rounded-lg border border-border hover:border-primary/60 hover:text-primary transition"
          >
            Call Now
          </a>
          <Link
            to="/"
            hash="lead"
            className="hidden sm:inline-flex px-4 py-2 text-sm rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition glow-orange"
          >
            Book Free Counselling
          </Link>
        </div>
      </div>
    </header>
  );
}

function InstructorHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-blue-800">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 pt-12 lg:pt-20 pb-16 lg:pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-xs text-muted-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-success pulse-dot" />
            Meet Your Instructor
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            The Story Behind{" "}
            <span className="text-gradient-orange">
              Jeevi Academy's AIOps Training
            </span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
            From managing Linux servers in production to designing ML-driven
            incident response systems — discover the journey that shaped a
            curriculum built for real-world IT operations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#story"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition glow-orange"
            >
              Read the Full Story
            </a>
            <a
              href="#reviews"
              className="px-6 py-3 rounded-lg border border-border hover:border-primary/60 hover:text-primary transition font-medium"
            >
              Student Reviews
            </a>
          </div>
        </div>

        {/* Visual Card */}
        <div className="relative">
          <div className="gradient-border-inner">
            <div className="glass-card p-6 space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/40 to-ice/20 border-2 border-primary/30 flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-bold">Lead Instructor</div>
                  <div className="text-sm text-muted-foreground">
                    AIOps & SRE Specialist
                  </div>
                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {achievements.map((a) => (
                  <div
                    key={a.label}
                    className="rounded-lg border border-border bg-popover/60 p-3 text-center"
                  >
                    <div className="text-2xl font-bold text-primary">
                      {a.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                      {a.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {[
                  "Prometheus",
                  "Grafana",
                  "Python ML",
                  "Ansible",
                  "Linux",
                  "SRE",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded border border-border bg-popover text-muted-foreground font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AchievementBar() {
  const items = [...achievements, ...achievements];
  return (
    <section className="border-y border-border bg-secondary/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-5 overflow-hidden">
        <div className="flex gap-8 marquee whitespace-nowrap">
          {items.map((a, i) => (
            <span
              key={i}
              className="text-sm text-muted-foreground flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-primary" />
              <span className="font-bold text-foreground">{a.value}</span>{" "}
              {a.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section id="story" className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
          The Journey
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          From Production Incidents to Building India's Most Practical AIOps
          Course
        </h2>
      </div>

      <div className="mt-10 grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Server className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">The Beginning</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The journey started in 2008 with a simple Linux server and a
              terminal. Like many IT professionals, the early years were spent
              learning through late-night incident calls, cryptic log files, and
              the hard-earned skill of reading system behavior from raw metrics.
            </p>
          </div>
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-warning/10 border border-warning/30 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-warning" />
              </div>
              <h3 className="font-semibold text-lg">The Turning Point</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              After years of firefighting incidents reactively, the realization
              hit — most outages could be predicted and prevented with the right
              observability, automation, and ML-driven detection. This insight
              became the foundation for the AIOps curriculum.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-success/10 border border-success/30 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-success" />
              </div>
              <h3 className="font-semibold text-lg">The Mission</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Most IT training programs teach theory without practice. Jeevi
              Academy was founded to change that — every single lesson has a
              hands-on VirtualBox lab where students build, break, and fix real
              infrastructure. No cloud bills. No vendor lock-in. Just pure,
              practical skills.
            </p>
          </div>
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-ice/10 border border-ice/30 flex items-center justify-center">
                <Heart className="w-5 h-5 text-ice" />
              </div>
              <h3 className="font-semibold text-lg">The Why</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every student who walks through the door deserves a genuine shot at
              building a career in modern IT operations. The goal isn't just to
              teach AIOps — it's to transform careers, build confidence, and
              create professionals who can own production reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceTimeline() {
  return (
    <section className="bg-secondary/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
            Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            15+ Years of IT Operations Experience
          </h2>
          <p className="mt-4 text-muted-foreground">
            A career spanning system administration, DevOps, SRE leadership, and
            AIOps architecture — each role shaped the curriculum you'll learn.
          </p>
        </div>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />

          <div className="space-y-8 lg:space-y-12">
            {experienceTimeline.map((item, i) => {
              const Icon = item.icon;
              const isLeft = i % 2 === 0;
              return (
                <div key={item.year} className="relative">
                  {/* Center dot (desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                  <div
                    className={`lg:w-[calc(50%-2rem)] ${isLeft ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"}`}
                  >
                    <div className="glass-card p-6 hover:border-primary/40 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs font-mono text-primary">
                            {item.year}
                          </div>
                          <h3 className="font-semibold">{item.role}</h3>
                        </div>
                      </div>
                      <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
                        {item.org}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
          Technical Expertise
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Core Areas of Expertise
        </h2>
        <p className="mt-4 text-muted-foreground">
          Battle-tested skills across the full AIOps lifecycle — from
          observability setup to ML-powered incident response.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {expertiseAreas.map((area) => (
          <div
            key={area}
            className="glass-card p-4 hover:border-primary/40 transition-colors text-center group"
          >
            <div className="text-sm font-medium group-hover:text-primary transition-colors">
              {area}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="bg-secondary/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
            Teaching Philosophy
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            How This Course Is Taught
          </h2>
          <p className="mt-4 text-muted-foreground">
            A teaching approach built on years of hands-on production experience
            — not slides and theory.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teachingPhilosophy.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-card p-6 hover:border-primary/40 transition-colors group"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
          Credentials
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Industry Certifications
        </h2>
        <p className="mt-4 text-muted-foreground">
          Professional certifications that validate deep expertise across Linux,
          cloud, containers, monitoring, and IT service management.
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {certifications.map((cert) => (
          <div
            key={cert}
            className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card/60 hover:border-primary/40 transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
              <Award className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm font-medium">{cert}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReviewsSection() {
  const [activeReview, setActiveReview] = useState(0);

  return (
    <section
      id="reviews"
      className="bg-secondary/30 border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
            Student Reviews
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What Students Say About the Training
          </h2>
          <p className="mt-4 text-muted-foreground">
            Honest feedback from students who completed the AIOps course and
            transformed their IT operations careers.
          </p>
        </div>

        {/* Featured review */}
        <div className="mt-10">
          <div className="gradient-border-inner">
            <div className="glass-card p-8 md:p-10">
              <Quote className="w-10 h-10 text-primary/40 mb-4" />
              <p className="text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
                {reviews[activeReview].text}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/40 to-ice/20 border border-border flex items-center justify-center text-lg font-bold text-primary-foreground">
                  {reviews[activeReview].name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">
                    {reviews[activeReview].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {reviews[activeReview].role} ·{" "}
                    {reviews[activeReview].batch}
                  </div>
                </div>
                <div className="ml-auto hidden sm:flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4 inline-flex px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs text-primary font-medium">
                {reviews[activeReview].highlight}
              </div>
            </div>
          </div>
        </div>

        {/* Review selector */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {reviews.map((r, i) => (
            <button
              key={r.name}
              onClick={() => setActiveReview(i)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                activeReview === i
                  ? "border-primary/60 bg-primary/5"
                  : "border-border bg-card/40 hover:border-primary/30"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/30 to-ice/20 border border-border flex items-center justify-center text-[10px] font-bold">
                  {r.name.charAt(0)}
                </div>
                <div className="text-xs font-medium truncate">{r.name}</div>
              </div>
              <div className="flex gap-0.5 mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-3 h-3 fill-primary text-primary"
                  />
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
      <div className="relative overflow-hidden rounded-2xl border border-border p-8 md:p-12 bg-gradient-to-br from-card via-secondary to-background">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to Learn AIOps from{" "}
            <span className="text-gradient-orange">
              Someone Who's Lived It?
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Book a free counselling call and discuss your career goals, learning
            path, and how the AIOps course can help you grow in IT operations.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              hash="lead"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold glow-orange hover:opacity-90 transition"
            >
              Book Free Counselling
            </Link>
            <a
              href="tel:+919994051212"
              className="px-6 py-3 rounded-lg border border-border hover:border-primary/60 hover:text-primary font-medium transition"
            >
              Call +91 9994051212
            </a>
            <a
              href="https://wa.me/919994051212"
              target="_blank"
              rel="noopener"
              className="px-6 py-3 rounded-lg border border-success/40 text-success hover:bg-success/10 font-medium transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InstructorFooter() {
  return (
    <footer className="border-t border-border bg-popover/60">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <img
              src="/favicon.ico"
              alt="Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="font-semibold">Jeevi Academy</span>
          </div>
          <p className="mt-3 text-muted-foreground text-xs">
            Practical, mentor-led IT training — online, offline and corporate
            modes.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
            Quick Links
          </div>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-primary">
                AIOps Course
              </Link>
            </li>
            <li>
              <Link to="/" hash="syllabus" className="hover:text-primary">
                Syllabus
              </Link>
            </li>
            <li>
              <Link to="/" hash="faq" className="hover:text-primary">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/" hash="lead" className="hover:text-primary">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
            Contact
          </div>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5" /> +91 9994051212
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5" /> jeevicounsellor@gmail.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                No.6, First Floor,
                <br />
                2nd Main Road, New Colony,
                <br />
                Chrompet, Chennai - 600044
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Jeevi Academy · AIOps Course ·
        Vendor-Neutral Curriculum
      </div>
    </footer>
  );
}
