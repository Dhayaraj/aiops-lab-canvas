import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AIOps Course | Hands-On Artificial Intelligence for IT Operations Training" },
      {
        name: "description",
        content:
          "Hands-on AIOps Course by Jeevi Academy. Master observability, anomaly detection, event correlation, predictive maintenance, auto-remediation & self-healing infrastructure with local VirtualBox labs.",
      },
      { property: "og:title", content: "AIOps Course | Hands-On Artificial Intelligence for IT Operations Training" },
      {
        property: "og:description",
        content:
          "Vendor-neutral AIOps training with Prometheus, Grafana, Python ML, Ansible & local LLM labs on VirtualBox.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "AIOps Course – Artificial Intelligence for IT Operations",
          description:
            "Hands-on, vendor-neutral AIOps course covering observability, anomaly detection, event correlation, predictive maintenance, auto-remediation, and self-healing infrastructure using local VirtualBox labs and open-source tools.",
          provider: {
            "@type": "Organization",
            name: "Jeevi Academy",
            sameAs: "/",
          },
          hasCourseInstance: [
            { "@type": "CourseInstance", courseMode: "online" },
            { "@type": "CourseInstance", courseMode: "onsite" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: AIOpsLanding,
});

/* ---------- DATA ---------- */

const navLinks = [
  { href: "#highlights", label: "Course Highlights" },
  { href: "#lab", label: "Lab Setup" },
  { href: "#syllabus", label: "Syllabus" },
  { href: "#tools", label: "Tools" },
  { href: "#capstone", label: "Capstone" },
  { href: "#outcomes", label: "Career Outcomes" },
  { href: "#faq", label: "FAQ" },
];

const heroBadges = [
  "Vendor-Neutral Curriculum",
  "100% Local VirtualBox Labs",
  "Open-Source Tools",
  "Prometheus + Grafana",
  "Python ML for Anomaly Detection",
  "Ansible Auto-Remediation",
  "Local LLM Incident Assistant",
  "Capstone Project Included",
];

const trustItems = [
  "Hands-On Local Labs",
  "Vendor-Neutral Concepts",
  "Open-Source Toolchain",
  "SRE-Focused Curriculum",
  "Real Incident Simulations",
  "Capstone Portfolio Project",
  "Mentor-Led Training",
  "Career Guidance",
];

const pains = [
  { t: "Alert Storms, No Clarity", d: "Too many alerts but not enough root cause clarity for on-call engineers." },
  { t: "Scattered Signals", d: "Logs, metrics, and incidents live across disconnected tools and dashboards." },
  { t: "Repeated Toil", d: "Teams waste hours manually troubleshooting issues that keep coming back." },
  { t: "Blind Thresholds", d: "Static thresholds miss early warning signs hidden in metric patterns." },
  { t: "Late Capacity Hits", d: "Capacity problems are detected only after services start failing in production." },
  { t: "Runbook Drag", d: "Incident response depends too much on slow, manual, tribal-knowledge runbooks." },
];

const lifecycle = [
  { t: "Collect", d: "Gather metrics, logs, traces & events" },
  { t: "Observe", d: "Build dashboards & system visibility" },
  { t: "Detect", d: "Identify incidents and anomalies" },
  { t: "Correlate", d: "Group related alerts, reduce noise" },
  { t: "Predict", d: "Forecast risk & capacity issues" },
  { t: "Automate", d: "Trigger runbooks and playbooks" },
  { t: "Remediate", d: "Recover services safely" },
  { t: "Report", d: "Generate post-incident summaries" },
];

const careers = [
  { t: "AIOps Engineer", s: "Observability, ML detection, automation", o: "End-to-end AIOps pipeline" },
  { t: "Site Reliability Engineer", s: "SLO/SLI, error budgets, monitoring", o: "Reliability dashboards" },
  { t: "DevOps Engineer", s: "CI signal, alerting, remediation", o: "Self-healing workflows" },
  { t: "NOC Engineer", s: "Alert triage, correlation, escalation", o: "Noise-reduced alert system" },
  { t: "SOC Operations Engineer", s: "Event correlation, log analytics", o: "Incident timeline reports" },
  { t: "Infrastructure Monitoring Engineer", s: "Prometheus, Grafana, exporters", o: "Multi-VM monitoring stack" },
  { t: "Incident Response Engineer", s: "Runbooks, RCA, automation", o: "LLM-assisted incident reports" },
  { t: "Automation Engineer", s: "Ansible, scripting, safe automation", o: "Auto-remediation library" },
];

const highlights = [
  "Vendor-Neutral AIOps Concepts",
  "Observability Fundamentals",
  "Metrics, Logs, Traces & Events",
  "Prometheus Monitoring",
  "Grafana Dashboards",
  "Alertmanager Alert Routing",
  "Log Analytics",
  "Event Correlation",
  "Python ML for Anomaly Detection",
  "Predictive Maintenance",
  "Capacity Planning",
  "Ansible Auto-Remediation",
  "Self-Healing Infrastructure",
  "Local LLM Incident Assistant",
  "Final Capstone Project",
  "Career & Interview Preparation",
];

const vms = [
  {
    name: "aiops-control-vm",
    purpose: "Monitoring, dashboards, automation, ML scripts & local AI assistant",
    tools: ["Prometheus", "Grafana", "Alertmanager", "Python", "Ansible", "Ollama"],
  },
  {
    name: "app-server-vm",
    purpose: "Sample web application and application logs",
    tools: ["Nginx", "Python Flask", "Node Exporter", "Log Shipper"],
  },
  {
    name: "db-server-vm",
    purpose: "Database workload and failure simulation",
    tools: ["PostgreSQL / MySQL", "Node Exporter", "Log Shipper"],
  },
  {
    name: "optional-log-vm",
    purpose: "Centralized logging stack",
    tools: ["Elasticsearch / OpenSearch", "Logstash", "Kibana", "Loki + Grafana"],
  },
];

const tools = [
  "VirtualBox", "Ubuntu Server", "Prometheus", "Grafana", "Alertmanager", "Node Exporter",
  "Nginx", "Python Flask", "PostgreSQL / MySQL", "ELK / OpenSearch", "Loki + Promtail",
  "Python", "pandas", "scikit-learn", "matplotlib", "Ansible", "Bash", "Ollama (Local LLM)", "Git",
];

const syllabus = [
  {
    week: "Week 1",
    title: "Introduction to AIOps & Local Lab Foundation",
    objectives: [
      "Understand what AIOps means in IT operations",
      "Explain how AIOps supports SRE and DevOps teams",
      "Differentiate monitoring vs observability vs AIOps",
      "Build a local VirtualBox-based AIOps lab",
      "Deploy a sample app and Linux monitoring agents",
    ],
    topics: [
      "AIOps lifecycle: collect → observe → detect → correlate → predict → automate → remediate",
      "Role of SRE in modern operations",
      "Incident management basics",
      "Metrics, logs, traces, events",
      "Alert fatigue, slow RCA, repeated incidents, capacity issues",
    ],
    lab: "Create 3 Ubuntu VMs (aiops-control, app-server, db-server). Configure networking, SSH, Nginx, a Flask app, and Node Exporter. Draw the architecture diagram.",
    breakfix: "Stop Nginx, verify outage, troubleshoot with top, htop, free, df, journalctl, systemctl.",
  },
  {
    week: "Week 2",
    title: "Observability Fundamentals — Metrics, Logs & Traces",
    objectives: [
      "Explain the three pillars of observability",
      "Collect system metrics using Prometheus",
      "Visualize infrastructure health using Grafana",
      "Understand logs and log aggregation",
      "Identify key application and server metrics",
    ],
    topics: [
      "Observability vs monitoring",
      "CPU, memory, disk, network, RED & USE methods",
      "Golden signals: latency, traffic, errors, saturation",
      "System, application, web server & database logs",
      "Traces, request journeys, latency tracking",
    ],
    lab: "Install Prometheus + Grafana on aiops-control-vm. Scrape Node Exporter from app & db VMs. Build CPU/memory/disk/network dashboards. Configure Loki/Promtail or ELK for logs.",
    breakfix: "Simulate high CPU, disk growth, Nginx access spikes, and app error logs.",
  },
  {
    week: "Week 3",
    title: "Alerting, Incident Detection & Alert Fatigue Reduction",
    objectives: [
      "Create useful Prometheus + Alertmanager alerts",
      "Understand alert severity and routing",
      "Identify noisy alerts",
      "Reduce fatigue with grouping, inhibition, tuning",
      "Design symptom-based alerting rules",
    ],
    topics: [
      "Alert vs event vs incident",
      "Symptom-based vs cause-based alerting",
      "Severity: info, warning, critical",
      "Static thresholds & dynamic thresholding",
      "SLO, SLI, SLA & error budgets",
    ],
    lab: "Install Alertmanager. Create rules for high CPU, low disk, memory, Nginx down, endpoint down. Configure severity, grouping, inhibition. Build a Grafana alert dashboard.",
    breakfix: "Simulate app/db outages, full disk, Nginx stop. Tune alerts to reduce noise.",
  },
  {
    week: "Week 4",
    title: "Log Analytics & Intelligent Event Correlation",
    objectives: [
      "Collect and search logs from multiple systems",
      "Understand event correlation",
      "Identify related events across logs, metrics, alerts",
      "Build a rule-based correlation engine",
      "Reduce duplicate incidents by grouping symptoms",
    ],
    topics: [
      "Structured vs unstructured logs",
      "Log parsing & enrichment",
      "Time-window & dependency-based correlation",
      "Root cause vs symptom",
      "Common patterns: 5xx, auth fails, DB timeouts, disk errors",
    ],
    lab: "Forward logs from app & db VMs. Parse Nginx, app, DB logs. Build dashboards. Write a Python script to correlate alerts + logs within 5-minute windows.",
    breakfix: "Stop DB → app connection errors → Nginx 502s. Correlate alerts to find DB as root cause.",
  },
  {
    week: "Week 5",
    title: "Machine Learning for Anomaly Detection in IT Operations",
    objectives: [
      "Understand anomaly detection in IT operations",
      "Prepare monitoring data for ML analysis",
      "Build anomaly detection models in Python",
      "Detect abnormal CPU, memory, traffic & error patterns",
      "Compare static thresholds vs ML detection",
    ],
    topics: [
      "Point, contextual & collective anomalies",
      "Supervised vs unsupervised learning",
      "Z-score, moving average, Isolation Forest, LOF",
      "Feature engineering & time-series basics",
      "Baselines, seasonality, false positives",
    ],
    lab: "Export Prometheus metrics → CSV. Clean with Python. Build Z-score, rolling average & Isolation Forest detectors. Plot normal vs abnormal. Generate anomaly report.",
    breakfix: "Simulate CPU spike, memory pressure, traffic burst, disk spike. Verify detection.",
  },
  {
    week: "Week 6",
    title: "Predictive Maintenance & Capacity Planning",
    objectives: [
      "Understand predictive maintenance for infrastructure",
      "Forecast resource usage trends",
      "Estimate capacity requirements",
      "Detect early warning signs before failure",
      "Build a capacity planning report from local data",
    ],
    topics: [
      "Predictive maintenance fundamentals",
      "CPU, memory, disk & traffic forecasting",
      "Moving averages & linear regression",
      "Risk scoring for infrastructure",
      "Preventive actions before incidents",
    ],
    lab: "Generate controlled disk growth on db-server-vm. Export metrics. Build a Python forecaster predicting when disk crosses 80% and 90%. Add a Grafana capacity panel.",
    breakfix: "Simulate slow disk growth, log file growth, DB storage rise. Recommend preventive actions.",
  },
  {
    week: "Week 7",
    title: "Automated Incident Response, Auto-Remediation & Self-Healing",
    objectives: [
      "Understand incident response automation",
      "Build simple auto-remediation workflows",
      "Use Ansible for operational fixes",
      "Trigger scripts based on alerts",
      "Design safe self-healing with approval & rollback",
    ],
    topics: [
      "Self-healing infrastructure concept",
      "Runbooks vs playbooks",
      "Human-in-the-loop automation",
      "Safe automation: validate, act, verify, rollback, log",
      "Common actions: restart service, clear temp files, rotate logs",
    ],
    lab: "Install Ansible. Build playbooks for Nginx restart, log cleanup, Flask restart, disk & health checks. Webhook receiver triggered by Alertmanager → self-healing flow.",
    breakfix: "Simulate Nginx/Flask down, disk high, repeated failures. Confirm safe self-healing.",
  },
  {
    week: "Week 8",
    title: "Local LLMs for AIOps & Final Capstone Project",
    objectives: [
      "Understand how LLMs assist IT operations",
      "Use a local LLM for log summarization & incident explanation",
      "Generate human-readable incident reports",
      "Combine observability, ML, correlation & remediation",
      "Complete an end-to-end AIOps capstone project",
    ],
    topics: [
      "LLM roles: log summarization, incident explanation, runbook suggestion",
      "Post-incident report generation",
      "Risks: hallucination, unsafe recommendations, data exposure",
      "Human approval in AI-assisted operations",
      "AIOps maturity model",
    ],
    lab: "Install Ollama + lightweight model on aiops-control-vm. Python script gathers alerts + logs + anomaly + remediation history → LLM returns incident summary, RCA, remediation, prevention.",
    breakfix: "Full incident: DB fails → app errors → Nginx 502 → alerts → correlation → ML anomaly → LLM report → Ansible fix → Grafana confirms recovery.",
  },
];

const trainingModes = [
  {
    t: "Offline AIOps Training",
    s: "Classroom interaction & guided lab practice",
    f: ["Face-to-face mentoring", "Practical VirtualBox sessions", "Live troubleshooting", "Capstone guidance", "Resume & mock interviews"],
  },
  {
    t: "Online Live AIOps Training",
    s: "For working professionals and remote learners",
    f: ["Live online classes", "Flexible schedule", "Guided local lab setup", "Small group support", "Study material & tasks"],
    featured: true,
  },
  {
    t: "Corporate AIOps Training",
    s: "For IT Ops, DevOps, SRE, NOC & SOC teams",
    f: ["Customized curriculum", "Team workshops", "Incident simulation", "Automation runbook practice", "Vendor-neutral concepts"],
  },
];

const testimonials = [
  "This course helped me understand how monitoring, alerting, automation and AI work together in IT operations.",
  "The VirtualBox labs made AIOps practical — I could build, break and troubleshoot everything locally.",
  "Anomaly detection and self-healing labs helped me explain real AIOps use cases in interviews.",
  "The capstone project gave me a complete portfolio project for DevOps and SRE roles.",
];

const mentorSupport = [
  "Mentor-led live sessions",
  "Weekly lab tasks",
  "VirtualBox setup guidance",
  "Troubleshooting support",
  "Capstone project review",
  "Resume support",
  "Interview preparation",
  "Career roadmap planning",
];

const placement = [
  "Resume building",
  "Capstone project review",
  "Mock interviews",
  "DevOps / SRE interview prep",
  "Linux troubleshooting practice",
  "AIOps project explanation",
  "LinkedIn profile guidance",
  "Job search support",
];

const faqs = [
  { q: "Who can join this AIOps course?", a: "Linux admins, DevOps engineers, SRE beginners, NOC/SOC engineers, IT support, infrastructure engineers, and college students with Linux basics." },
  { q: "Do I need cloud experience before joining?", a: "No. This course is fully vendor-neutral and runs entirely on local VirtualBox VMs. Cloud experience is not required." },
  { q: "Is this course vendor-neutral?", a: "Yes. We focus on concepts and open-source tools that apply across any IT operations, DevOps or SRE environment." },
  { q: "Will all labs run locally on VirtualBox?", a: "Yes. Every lab — including ML anomaly detection and the local LLM assistant — runs on Ubuntu VMs inside VirtualBox on your laptop." },
  { q: "What laptop configuration is recommended?", a: "16 GB RAM, 4-core CPU and 80 GB free disk space are recommended. A low-resource 3-VM option is also provided." },
  { q: "Will I learn Prometheus and Grafana?", a: "Yes. You will install, configure and use Prometheus, Alertmanager and Grafana for end-to-end observability." },
  { q: "Will I learn anomaly detection using Python?", a: "Yes. You will build Z-score, moving average and Isolation Forest based anomaly detection scripts." },
  { q: "Will I learn auto-remediation using Ansible?", a: "Yes. You will write Ansible playbooks and integrate them with Alertmanager for safe auto-remediation." },
  { q: "Will I build a self-healing infrastructure lab?", a: "Yes. You will build a complete self-healing workflow with validation, approval and rollback steps." },
  { q: "Will I use a local LLM for incident summaries?", a: "Yes. You will run a lightweight model with Ollama locally to generate incident summaries and RCA suggestions." },
  { q: "Is this course suitable for DevOps engineers?", a: "Yes. The curriculum maps directly to modern DevOps and SRE responsibilities." },
  { q: "Is this course suitable for SRE beginners?", a: "Yes. SRE foundations like SLO/SLI, error budgets and reliability practices are integrated." },
  { q: "Do you provide placement assistance?", a: "Yes — we provide placement assistance, mock interviews, resume support and project portfolio reviews. We do not promise guaranteed placement." },
  { q: "Will I get a certificate?", a: "Yes. A Jeevi Academy course completion certificate is issued after the capstone project." },
  { q: "How can I know the course fees and next batch date?", a: "Book a free counselling call or message us on WhatsApp — our advisor will share fees, batch dates and lab requirements." },
];

const capstoneComponents = [
  { t: "Local App Environment", d: "Web server, sample application, database server" },
  { t: "Observability Stack", d: "Metrics collection, log collection, dashboards" },
  { t: "Alerting System", d: "Prometheus rules, Alertmanager routing, severity" },
  { t: "Event Correlation", d: "Python event grouping, root cause vs symptom" },
  { t: "ML Anomaly Detection", d: "Exported metrics, anomaly score reports" },
  { t: "Predictive Maintenance", d: "Disk/CPU forecasting, capacity risk report" },
  { t: "Auto-Remediation", d: "Ansible playbooks, health checks, approval flow" },
  { t: "Local LLM Assistant", d: "Incident summaries, RCA, post-incident reports" },
];

/* ---------- COMPONENTS ---------- */

function AIOpsLanding() {
  return (
    <div className="min-h-screen text-foreground antialiased selection:bg-primary/30 selection:text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <PainSection />
        <LifecycleSection />
        <CareerSection />
        <OverviewHighlights />
        <LabSection />
        <ToolsSection />
        <Assessment />
        <SyllabusSection />
        <CapstoneSection />
        <TrainingModes />
        <Testimonials />
        <MentorPlacement />
        <FeesCTA />
        <FAQSection />
        <LeadForm />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyBar />
      <DesktopStickyCard />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-xl bg-background/80 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-cream flex items-center justify-center text-primary-foreground font-bold">
            J
          </div>
          <span className="font-semibold tracking-tight">Jeevi Academy</span>
        </a>
        <nav className="hidden lg:flex items-center gap-6 text-sm text-muted-foreground">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <a
            href="tel:+919994051212"
            data-cta="call-now"
            className="px-4 py-2 text-sm rounded-lg border border-border hover:border-primary/60 hover:text-primary transition"
          >
            Call Now
          </a>
          <a
            href="#lead"
            data-cta="book-free-counselling"
            className="px-4 py-2 text-sm rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition glow-orange"
          >
            Book Free Counselling
          </a>
        </div>
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg border border-border"
        >
          <div className="space-y-1.5">
            <span className="block w-5 h-px bg-foreground" />
            <span className="block w-5 h-px bg-foreground" />
            <span className="block w-5 h-px bg-foreground" />
          </div>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-popover px-4 py-4 space-y-2">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <a href="tel:+919994051212" className="flex-1 text-center px-3 py-2 text-sm rounded-lg border border-border">Call</a>
            <a href="#lead" className="flex-1 text-center px-3 py-2 text-sm rounded-lg bg-primary text-primary-foreground font-semibold">Counselling</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 pt-12 lg:pt-20 pb-16 lg:pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-xs text-muted-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-success pulse-dot" />
            New Batch · Vendor-Neutral · Local Labs
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            AIOps Course with{" "}
            <span className="text-gradient-orange">Hands-On VirtualBox Labs</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
            Learn Artificial Intelligence for IT Operations through practical labs covering observability, metrics, logs, traces, anomaly detection, event correlation, alert fatigue reduction, predictive maintenance, auto-remediation and self-healing infrastructure.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {heroBadges.map((b) => (
              <span key={b} className="text-xs px-3 py-1.5 rounded-full border border-border bg-card/60 text-muted-foreground">
                {b}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#lead" data-cta="book-free-counselling" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition glow-orange">
              Book Free Career Counselling
            </a>
            <a href="#syllabus" data-cta="download-syllabus" className="px-6 py-3 rounded-lg border border-border hover:border-primary/60 hover:text-primary transition font-medium">
              Download Course Syllabus
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground max-w-md">
            Suitable for Linux admins, DevOps engineers, SRE beginners, NOC/SOC engineers, IT support engineers and infrastructure professionals.
          </p>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="gradient-border-inner">
        <div className="glass-card p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-destructive" />
              <span className="w-2 h-2 rounded-full bg-warning" />
              <span className="w-2 h-2 rounded-full bg-success" />
              <span className="text-xs text-muted-foreground ml-2 font-mono">aiops-control-vm</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-success/15 text-success border border-success/30">
              HEALTHY
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <Metric label="CPU" value="42%" trend={[10, 30, 22, 50, 38, 42, 60, 42]} />
            <Metric label="Mem" value="61%" trend={[40, 45, 50, 55, 58, 62, 60, 61]} />
            <Metric label="Errors/m" value="0.4" trend={[2, 1, 0, 3, 5, 1, 0, 0]} accent />
          </div>
          <div className="rounded-lg border border-border bg-popover/60 p-3 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-muted-foreground">incident-timeline.log</span>
              <span className="text-warning">3 correlated</span>
            </div>
            <TimelineRow time="14:02:01" sev="critical" msg="db-server-vm: postgres process down" />
            <TimelineRow time="14:02:04" sev="warning" msg="app-server-vm: 5xx errors rising" />
            <TimelineRow time="14:02:09" sev="warning" msg="nginx: upstream 502 bad gateway" />
            <TimelineRow time="14:02:18" sev="info" msg="LLM: probable root cause → DB outage" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-border bg-popover/60 p-3">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Anomaly Score</div>
              <div className="mt-1 flex items-end gap-2">
                <span className="text-2xl font-bold text-primary">0.87</span>
                <span className="text-xs text-warning mb-1">↑ isolation-forest</span>
              </div>
              <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                <div className="h-full w-[87%] bg-gradient-to-r from-warning to-destructive" />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-popover/60 p-3">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Self-Healing</div>
              <div className="mt-1 text-sm font-mono space-y-1">
                <div className="text-success">✓ verify health</div>
                <div className="text-success">✓ ansible: restart-db</div>
                <div className="text-muted-foreground">→ awaiting approval</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 -right-6 hidden md:block rotate-3">
        <div className="glass-card px-4 py-3 text-xs font-mono">
          <div className="text-muted-foreground">$ ollama run aiops-llm</div>
          <div className="text-primary">→ Incident summarized in 1.2s</div>
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value, trend, accent }: { label: string; value: string; trend: number[]; accent?: boolean }) {
  const max = Math.max(...trend, 1);
  return (
    <div className="rounded-lg border border-border bg-popover/60 p-3">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className={`text-lg font-bold mt-0.5 ${accent ? "text-primary" : ""}`}>{value}</div>
      <div className="mt-2 flex items-end gap-0.5 h-6">
        {trend.map((v, i) => (
          <div key={i} className={`flex-1 rounded-sm ${accent ? "bg-primary/70" : "bg-muted-foreground/40"}`} style={{ height: `${(v / max) * 100}%` }} />
        ))}
      </div>
    </div>
  );
}

function TimelineRow({ time, sev, msg }: { time: string; sev: "critical" | "warning" | "info"; msg: string }) {
  const color = sev === "critical" ? "text-destructive" : sev === "warning" ? "text-warning" : "text-ice";
  return (
    <div className="flex items-start gap-2 text-xs font-mono">
      <span className="text-muted-foreground">{time}</span>
      <span className={`uppercase ${color}`}>{sev}</span>
      <span className="text-foreground/80 truncate">{msg}</span>
    </div>
  );
}

function TrustBar() {
  const items = [...trustItems, ...trustItems];
  return (
    <section className="border-y border-border bg-secondary/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-5 overflow-hidden">
        <div className="flex gap-8 marquee whitespace-nowrap">
          {items.map((t, i) => (
            <span key={i} className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">{eyebrow}</div>}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function PainSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
      <SectionHeading
        eyebrow="The Problem"
        title="Modern IT Operations Are Becoming Too Noisy and Reactive"
        subtitle="This AIOps course teaches how to collect clean operational signals, detect anomalies, correlate events, predict failures, and automate safe remediation using local open-source labs."
      />
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pains.map((p, i) => (
          <div key={p.t} className="glass-card p-6 hover:border-primary/40 transition-colors group">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-destructive/10 border border-destructive/30 flex items-center justify-center text-destructive font-bold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-semibold">{p.t}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function LifecycleSection() {
  return (
    <section className="bg-secondary/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <SectionHeading eyebrow="AIOps Lifecycle" title="What You Will Learn in the AIOps Lifecycle" />
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {lifecycle.map((s, i) => (
            <div key={s.t} className="relative glass-card p-5">
              <div className="text-xs font-mono text-primary">0{i + 1}</div>
              <div className="mt-1 font-semibold">{s.t}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.d}</div>
              {i < lifecycle.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-primary/60 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareerSection() {
  return (
    <section id="outcomes" className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
      <SectionHeading eyebrow="Career Outcomes" title="Career Paths This Course Supports" />
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {careers.map((c) => (
          <div key={c.t} className="glass-card p-5 hover:border-primary/40 transition group">
            <div className="text-xs uppercase tracking-wider text-primary mb-2">Career</div>
            <h3 className="font-semibold mb-3">{c.t}</h3>
            <p className="text-xs text-muted-foreground"><span className="text-foreground/70">Skills:</span> {c.s}</p>
            <p className="text-xs text-muted-foreground mt-2"><span className="text-foreground/70">Portfolio:</span> {c.o}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function OverviewHighlights() {
  return (
    <section id="highlights" className="bg-secondary/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <SectionHeading eyebrow="Why Jeevi Academy" title="Why Choose Jeevi Academy's AIOps Training?" />
          <p className="mt-5 text-muted-foreground text-sm leading-relaxed">
            Jeevi Academy's AIOps Course is designed for learners who want practical, vendor-neutral skills in modern IT operations. Students learn observability, alerting, log analytics, anomaly detection, event correlation, predictive maintenance, automated incident response and self-healing infrastructure using VirtualBox virtual machines and open-source tools. Suitable for Linux administrators, DevOps engineers, SRE beginners, NOC/SOC engineers, IT support professionals and infrastructure engineers.
          </p>
          <a href="#lead" data-cta="check-next-batch" className="inline-block mt-6 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold glow-orange">
            Check Your Eligibility
          </a>
        </div>
        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-2">
          {highlights.map((h) => (
            <div key={h} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card/60">
              <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-sm">✓</div>
              <span className="text-sm">{h}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LabSection() {
  return (
    <section id="lab" className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
      <SectionHeading
        eyebrow="Lab Environment"
        title="100% Local VirtualBox Lab Environment"
        subtitle="Build and break a complete AIOps environment on your own laptop using open-source tools."
      />
      <div className="mt-10 grid lg:grid-cols-3 gap-6">
        <div className="glass-card p-6 lg:col-span-1">
          <h3 className="font-semibold mb-4">Recommended Setup</h3>
          <ul className="space-y-3 text-sm">
            {[
              ["RAM", "16 GB recommended"],
              ["CPU", "4 cores recommended"],
              ["Disk", "80 GB free space"],
              ["Hypervisor", "VirtualBox"],
              ["OS Image", "Ubuntu Server ISO"],
            ].map(([k, v]) => (
              <li key={k} className="flex justify-between border-b border-border pb-2 last:border-0">
                <span className="text-muted-foreground">{k}</span>
                <span className="font-mono text-foreground">{v}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 p-3 rounded-lg border border-warning/30 bg-warning/5 text-xs text-warning/90">
            Low-resource laptops can run a 3-VM option (control + app + db).
          </div>
        </div>
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
          {vms.map((vm) => (
            <div key={vm.name} className="glass-card p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-success pulse-dot" />
                <span className="font-mono text-sm text-primary">{vm.name}</span>
              </div>
              <p className="text-sm text-muted-foreground">{vm.purpose}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {vm.tools.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded border border-border bg-popover text-muted-foreground font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolsSection() {
  return (
    <section id="tools" className="bg-secondary/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <SectionHeading eyebrow="Toolchain" title="Open-Source Tools You Will Practice" />
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {tools.map((t) => (
            <div key={t} className="group glass-card p-4 hover:border-primary/40 transition text-center">
              <div className="text-sm font-medium">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Assessment() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
      <div className="gradient-border-inner">
        <div className="glass-card p-8 md:p-10 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <SectionHeading eyebrow="Free 60-Second Quiz" title="Not Sure If AIOps Is Right for You?" />
            <ol className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li><span className="text-primary font-semibold">Step 1.</span> Tell us your current role</li>
              <li><span className="text-primary font-semibold">Step 2.</span> Share your Linux / DevOps experience</li>
              <li><span className="text-primary font-semibold">Step 3.</span> Pick your operations career goal</li>
            </ol>
            <a href="#lead" data-cta="take-free-assessment" className="inline-block mt-6 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold glow-orange">
              Take Free AIOps Career Assessment
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {["Linux Admin → AIOps Path", "DevOps → SRE Path", "NOC/SOC → Automation Path", "Fresher → Infra Monitoring Path"].map((p) => (
              <div key={p} className="rounded-lg border border-border bg-popover p-4">
                <div className="text-xs text-primary uppercase tracking-wider mb-1">Result Preview</div>
                <div className="text-sm font-medium">{p}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SyllabusSection() {
  const [open, setOpen] = useState(0);
  return (
    <section id="syllabus" className="bg-secondary/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <SectionHeading
          eyebrow="Curriculum"
          title="8-Week AIOps Course Syllabus"
          subtitle="A practical week-by-week curriculum covering observability, anomaly detection, event correlation, predictive maintenance, self-healing automation and local LLM-assisted incident response."
        />
        <div className="mt-10 space-y-3">
          {syllabus.map((w, i) => {
            const isOpen = open === i;
            return (
              <div key={w.week} className={`glass-card overflow-hidden transition ${isOpen ? "border-primary/40" : ""}`}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm">
                      W{i + 1}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-primary font-mono">{w.week}</div>
                      <h3 className="font-semibold truncate">{w.title}</h3>
                    </div>
                  </div>
                  <span className={`shrink-0 text-primary transition ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 grid md:grid-cols-2 gap-6 border-t border-border pt-5">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Learning Objectives</h4>
                      <ul className="space-y-1.5 text-sm">
                        {w.objectives.map((o) => (
                          <li key={o} className="flex gap-2"><span className="text-success">✓</span><span>{o}</span></li>
                        ))}
                      </ul>
                      <h4 className="text-xs uppercase tracking-wider text-muted-foreground mt-5 mb-2">Core Topics</h4>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        {w.topics.map((t) => <li key={t}>• {t}</li>)}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
                        <div className="text-xs uppercase tracking-wider text-primary mb-2">VirtualBox Lab</div>
                        <p className="text-sm">{w.lab}</p>
                      </div>
                      <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4">
                        <div className="text-xs uppercase tracking-wider text-destructive mb-2">Break / Fix Activity</div>
                        <p className="text-sm">{w.breakfix}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CapstoneSection() {
  return (
    <section id="capstone" className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
      <SectionHeading
        eyebrow="Capstone"
        title="Final Capstone Project: Build a Local AIOps Platform"
        subtitle="Students must build a complete local AIOps workflow inside VirtualBox using Ubuntu VMs — combining observability, ML, automation and LLM-assisted incident response."
      />
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {capstoneComponents.map((c, i) => (
          <div key={c.t} className="glass-card p-5">
            <div className="text-xs font-mono text-primary">0{i + 1}</div>
            <h3 className="mt-1 font-semibold">{c.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 glass-card p-6">
        <h3 className="font-semibold mb-4">Final Student Deliverables</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
          {[
            "Architecture diagram",
            "VM setup documentation",
            "Prometheus configuration",
            "Grafana dashboard screenshots",
            "Alertmanager configuration",
            "Log dashboard screenshots",
            "Python anomaly detection script",
            "Python event correlation script",
            "Capacity planning report",
            "Ansible remediation playbooks",
            "LLM incident summary output",
            "Final incident report + demo video",
          ].map((d) => (
            <div key={d} className="flex items-start gap-2"><span className="text-success">✓</span><span>{d}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrainingModes() {
  return (
    <section className="bg-secondary/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <SectionHeading eyebrow="Training Modes" title="Choose Online, Offline, or Corporate AIOps Training" />
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {trainingModes.map((m) => (
            <div key={m.t} className={`glass-card p-6 flex flex-col ${m.featured ? "border-primary/50 glow-orange" : ""}`}>
              {m.featured && <div className="text-[10px] uppercase tracking-wider text-primary mb-2">Most Popular</div>}
              <h3 className="text-lg font-semibold">{m.t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{m.s}</p>
              <ul className="mt-5 space-y-2 text-sm flex-1">
                {m.f.map((f) => <li key={f} className="flex gap-2"><span className="text-success">✓</span>{f}</li>)}
              </ul>
              <a
                href="#lead"
                data-cta="enquire-now"
                className={`mt-6 text-center px-4 py-2.5 rounded-lg font-semibold transition ${
                  m.featured ? "bg-primary text-primary-foreground" : "border border-border hover:border-primary/60 hover:text-primary"
                }`}
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
      <SectionHeading eyebrow="Student Success" title="Student Success Stories" />
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {testimonials.map((t, i) => (
          <div key={i} className="glass-card p-5">
            <div className="text-primary text-2xl leading-none">&ldquo;</div>
            <p className="mt-2 text-sm text-foreground/90">{t}</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/40 to-ice/20 border border-border" />
              <div>
                <div className="text-sm font-medium">Alumni Learner</div>
                <div className="text-xs text-muted-foreground">AIOps Course Batch</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted-foreground max-w-3xl">
        Our learners and alumni have worked with or been associated with IT service companies, startups and enterprise technology teams.
      </p>
    </section>
  );
}

function MentorPlacement() {
  return (
    <section className="bg-secondary/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 grid lg:grid-cols-2 gap-10">
        <div>
          <SectionHeading eyebrow="Mentor Support" title="You Don't Learn AIOps Alone" />
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {mentorSupport.map((m) => (
              <div key={m} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card/60">
                <span className="text-primary">◆</span><span className="text-sm">{m}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="Career Support" title="Placement Assistance and Career Support" />
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {placement.map((p) => (
              <div key={p} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card/60">
                <span className="text-success">✓</span><span className="text-sm">{p}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            We provide placement assistance, mock interviews and project portfolio support — not guaranteed placement claims.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeesCTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
      <div className="relative overflow-hidden rounded-2xl border border-border p-8 md:p-12 bg-gradient-to-br from-card via-secondary to-background">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
            Want to Know the <span className="text-gradient-orange">Next Batch Date and Fees?</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Speak with our course advisor to understand batch timing, course fee, training mode, lab setup requirements and the right AIOps learning path for your background.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#lead" data-cta="book-free-counselling" className="px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold glow-orange">Talk to Course Advisor</a>
            <a href="https://wa.me/919994051212" data-cta="whatsapp-us" target="_blank" rel="noopener" className="px-5 py-3 rounded-lg border border-success/40 text-success font-medium hover:bg-success/10">WhatsApp Us</a>
            <a href="#syllabus" data-cta="download-syllabus" className="px-5 py-3 rounded-lg border border-border font-medium hover:border-primary/60 hover:text-primary">Download Syllabus</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number>(0);
  return (
    <section id="faq" className="bg-secondary/30 border-y border-border">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-20">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <div className="mt-10 space-y-2">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`glass-card overflow-hidden ${isOpen ? "border-primary/40" : ""}`}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full flex items-center justify-between gap-4 p-4 text-left">
                  <span className="font-medium text-sm md:text-base">{f.q}</span>
                  <span className={`text-primary text-xl shrink-0 transition ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-sm text-muted-foreground border-t border-border pt-3">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LeadForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("/api/leads/aiops", { method: "POST", body: data }).catch(() => {});
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("err");
    }
  };
  const getParam = (k: string) =>
    typeof window !== "undefined" ? new URLSearchParams(window.location.search).get(k) ?? "" : "";

  return (
    <section id="lead" className="max-w-7xl mx-auto px-4 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-start">
      <div>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Talk to a Course Advisor"
          subtitle="Share your details and our advisor will reach out with batch dates, fees and the right learning path for your background."
        />
        <div className="mt-6 space-y-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-3"><span className="text-primary">📞</span> +91 9994051212</div>
          <div className="flex items-center gap-3"><span className="text-success">💬</span> WhatsApp Advisor</div>
          <div className="flex items-center gap-3"><span className="text-ice">✉</span> Online · Offline · Corporate</div>
        </div>
      </div>
      <form onSubmit={onSubmit} className="glass-card p-6 md:p-8 space-y-4">
        <Field label="Name" name="name" required placeholder="Your full name" />
        <Field label="Mobile Number" name="mobile" required type="tel" placeholder="+91 ..." />
        <Field label="Email" name="email" required type="email" placeholder="you@example.com" />
        <div>
          <label className="text-xs uppercase tracking-wider text-muted-foreground">Current Status</label>
          <select name="status" required className="mt-1 w-full px-3 py-2.5 rounded-lg bg-input border border-border text-sm focus:outline-none focus:border-primary">
            {["Student","Fresher","Linux Administrator","DevOps Engineer","SRE Beginner","NOC/SOC Engineer","IT Support Engineer","Working Professional","Corporate Team"].map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs uppercase tracking-wider text-muted-foreground">Preferred Training Mode</label>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {["Online","Offline","Corporate"].map((m, i) => (
              <label key={m} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-popover text-sm cursor-pointer hover:border-primary/60">
                <input type="radio" name="mode" value={m} defaultChecked={i === 0} className="accent-[color:var(--primary)]" />
                {m}
              </label>
            ))}
          </div>
        </div>
        {/* hidden tracking */}
        {["utm_source","utm_medium","utm_campaign","utm_term","utm_content"].map((k) => (
          <input key={k} type="hidden" name={k} defaultValue={getParam(k)} />
        ))}
        <input type="hidden" name="referrer" defaultValue={typeof document !== "undefined" ? document.referrer : ""} />
        <input type="hidden" name="current_page_url" defaultValue={typeof window !== "undefined" ? window.location.href : ""} />
        <input type="hidden" name="landing_path" defaultValue={typeof window !== "undefined" ? window.location.pathname : ""} />
        <input type="hidden" name="user_agent" defaultValue={typeof navigator !== "undefined" ? navigator.userAgent : ""} />

        <button type="submit" data-cta="get-course-details" className="w-full px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 glow-orange">
          Get Course Details
        </button>
        {status === "ok" && <p className="text-sm text-success">Thanks! Our advisor will reach out shortly.</p>}
        {status === "err" && <p className="text-sm text-destructive">Something went wrong. Please try WhatsApp.</p>}
        <p className="text-[11px] text-muted-foreground text-center">We respect your privacy. No spam — only course details.</p>
      </form>
    </section>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1 w-full px-3 py-2.5 rounded-lg bg-input border border-border text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary"
      />
    </div>
  );
}

function FinalCTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Build Practical AIOps Skills with <span className="text-gradient-orange">Local Hands-On Labs</span>
        </h2>
        <p className="mt-5 text-muted-foreground">
          Book a free counselling call and get a clear roadmap for learning observability, anomaly detection, event correlation, predictive maintenance and self-healing operations.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#lead" data-cta="book-free-counselling" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold glow-orange">Book Free Counselling</a>
          <a href="tel:+919994051212" data-cta="call-now" className="px-6 py-3 rounded-lg border border-border hover:border-primary/60 hover:text-primary font-medium">Call +91 9994051212</a>
          <a href="https://wa.me/919994051212" data-cta="whatsapp-us" target="_blank" rel="noopener" className="px-6 py-3 rounded-lg border border-success/40 text-success hover:bg-success/10 font-medium">WhatsApp Us</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-popover/60">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-cream flex items-center justify-center text-primary-foreground font-bold">J</div>
            <span className="font-semibold">Jeevi Academy</span>
          </div>
          <p className="mt-3 text-muted-foreground text-xs">
            Practical, mentor-led IT training — online, offline and corporate modes.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Course</div>
          <ul className="space-y-2">
            {navLinks.map((l) => <li key={l.href}><a href={l.href} className="hover:text-primary">{l.label}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Contact</div>
          <ul className="space-y-2 text-muted-foreground">
            <li>📞 +91 9994051212</li>
            <li>💬 WhatsApp Advisor</li>
            <li>Online · Offline · Corporate</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Jeevi Academy · AIOps Course · Vendor-Neutral Curriculum
      </div>
    </footer>
  );
}

function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl grid grid-cols-3 p-2 gap-2">
      <a href="tel:+919994051212" data-cta="call-now" className="text-center text-xs font-medium py-2.5 rounded-lg border border-border">📞 Call</a>
      <a href="https://wa.me/919994051212" data-cta="whatsapp-us" target="_blank" rel="noopener" className="text-center text-xs font-medium py-2.5 rounded-lg border border-success/40 text-success">💬 WhatsApp</a>
      <a href="#lead" data-cta="enquire-now" className="text-center text-xs font-semibold py-2.5 rounded-lg bg-primary text-primary-foreground">Enquire</a>
    </div>
  );
}

function DesktopStickyCard() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <div className="hidden xl:block fixed right-6 bottom-6 z-40 w-64">
      <div className="glass-card p-4 space-y-2 glow-orange">
        <div className="text-xs uppercase tracking-wider text-primary font-semibold">Quick Actions</div>
        <a href="#syllabus" data-cta="download-syllabus" className="block text-sm px-3 py-2 rounded-lg border border-border hover:border-primary/60 hover:text-primary">📄 Download Syllabus</a>
        <a href="https://wa.me/919994051212" data-cta="whatsapp-us" target="_blank" rel="noopener" className="block text-sm px-3 py-2 rounded-lg border border-success/40 text-success hover:bg-success/10">💬 WhatsApp Advisor</a>
        <a href="#lead" data-cta="book-free-counselling" className="block text-center text-sm px-3 py-2 rounded-lg bg-primary text-primary-foreground font-semibold">Book Free Counselling</a>
      </div>
    </div>
  );
}
