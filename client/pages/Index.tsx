import { useState } from "react";
import {
  Menu,
  X,
  Moon,
  ArrowRight,
  Upload,
  Clock,
  Database,
  Users,
  WandSparkles,
  MapPin,
  FileCheck,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary">5W.Ai</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12 text-[1.05rem] text-muted-foreground">
            <button
              onClick={() => scrollToSection("home")}
              className="transition-colors hover:text-foreground"
            >
              Home
            </button>
            <a
              href="https://5-w-ai.vercel.app/upload"
              className="transition-colors hover:text-foreground"
            >
              Product
            </a>
            <button
              onClick={() => scrollToSection("investors")}
              className="transition-colors hover:text-foreground"
            >
              Investors
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="transition-colors hover:text-foreground"
            >
              Resources
            </button>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="border border-input bg-background hover:bg-muted rounded-full h-11 px-3 sm:px-4 transition-colors flex items-center gap-2">
              <Moon className="h-4 w-4" />
              <span className="hidden lg:inline text-sm">Dark</span>
            </button>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-11 px-5 sm:px-7 text-sm font-semibold transition-colors flex items-center gap-2">
              Request Demo
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-border/60 px-4 py-4">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => scrollToSection("home")}
                className="rounded-md px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("product")}
                className="rounded-md px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                Product
              </button>
              <button
                onClick={() => scrollToSection("investors")}
                className="rounded-md px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                Investors
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="rounded-md px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                Resources
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden border-b border-border bg-background bg-[radial-gradient(circle_at_6%_18%,hsl(var(--primary)/0.18),transparent_34%),radial-gradient(circle_at_95%_12%,hsl(var(--accent)/0.14),transparent_34%)]"
      >
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-12 lg:py-24 lg:px-8">
          {/* Left Column */}
          <div className="space-y-7">
            <div className="inline-flex items-center rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80 w-fit">
              5W.Ai Platform
            </div>

            <h1 className="text-[2.6rem] font-bold leading-[1.04] tracking-tight sm:text-[3.3rem] lg:text-[4.15rem]">
              Turn Excel chaos into verified data
            </h1>

            <p className="max-w-xl text-[1.03rem] leading-relaxed text-muted-foreground sm:text-lg">
              AI-powered platform that cleans, validates, and aggregates humanitarian data in minutes—not days. Built for reporting organizations and coordination teams.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row pt-4">
              <a
                href="mailto:mark@5ws.io"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 px-8 text-base font-semibold transition-colors flex items-center justify-center gap-2"
              >
                Request Investor Demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://5-w-ai.vercel.app/upload"
                className="border border-input bg-background hover:bg-muted/50 rounded-full h-12 px-8 text-base font-semibold transition-colors flex items-center justify-center gap-2"
              >
                See How It Works
              </a>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-3">
              <div>
                <div className="text-[1.95rem] font-bold leading-none text-primary">
                  90%
                </div>
                <p className="text-sm text-muted-foreground pt-2">
                  less cleaning time
                </p>
              </div>
              <div>
                <div className="text-[1.95rem] font-bold leading-none text-primary">
                  30-90m
                </div>
                <p className="text-sm text-muted-foreground pt-2">
                  end-to-end workflow
                </p>
              </div>
              <div>
                <div className="text-[1.95rem] font-bold leading-none text-accent">
                  100%
                </div>
                <p className="text-sm text-muted-foreground pt-2">
                  audit-ready approvals
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Upload Card */}
          <div className="rounded-2xl border border-border bg-card shadow-forge backdrop-blur-sm overflow-hidden">
            <div className="bg-gradient-accent px-6 py-4">
              <h3 className="text-lg font-semibold text-white">
                Upload Center Snapshot
              </h3>
            </div>

            <div className="p-6 space-y-5">
              {/* Upload Box */}
              <div className="rounded-xl border-2 border-dashed border-border bg-muted/60 p-4 text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm font-medium">Drag and drop Excel / CSV</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Workbook and single-sheet conversions supported.
                </p>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold">Admin2 Mapping</span>
                    <span className="text-xs font-semibold">96%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-2.5 w-[96%] bg-primary/80 shadow-sm"
                      style={{ transition: "width 0.3s ease" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold">Activity Match</span>
                    <span className="text-xs font-semibold">84%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-2.5 w-[84%] bg-accent/80 shadow-sm"
                      style={{ transition: "width 0.3s ease" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold">Metric Type</span>
                    <span className="text-xs font-semibold">72%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-2.5 w-[72%] bg-warning shadow-sm"
                      style={{ transition: "width 0.3s ease" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* AI Summary */}
              <div className="border-t border-border pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  AI Summary
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <div className="text-lg font-bold">1,154</div>
                    <p className="text-xs text-muted-foreground">Reached</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">1,860</div>
                    <p className="text-xs text-muted-foreground">Target</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-destructive">706</div>
                    <p className="text-xs text-muted-foreground">Gap</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-success">98%</div>
                    <p className="text-xs text-muted-foreground">Quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section - The Challenge */}
      <section
        id="product"
        className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-10 lg:mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3">
              The Challenge
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Teams must report more—using fewer resources
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Database className="h-6 w-6" />,
                title: "Different Templates",
                description:
                  "Every donor uses a different Excel template, creating chaos",
              },
              {
                icon: <Clock className="h-6 w-6" />,
                title: "Slow Aggregation",
                description: "Excel aggregation creates delays and errors",
              },
              {
                icon: <Database className="h-6 w-6" />,
                title: "Data Cleaning",
                description:
                  "Coordination teams spend days cleaning data manually",
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Reduced Capacity",
                description:
                  "Funding cuts mean fewer M&E staff for the same workload",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-forge hover:border-primary/40 transition-all"
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                <div className="rounded-lg bg-muted p-3 w-fit mb-4 group-hover:bg-primary/10 transition-colors">
                  {card.icon}
                </div>
                <h3 className="font-bold text-lg">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5W Workflow Section */}
      <section className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 border-y border-border">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-10 lg:mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3">
              The 5W Workflow
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              AI assists. Humans approve.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
            {[
              {
                step: 1,
                icon: <Upload className="h-5 w-5" />,
                title: "Upload",
                description: "Excel or offline collection",
              },
              {
                step: 2,
                icon: <WandSparkles className="h-5 w-5" />,
                title: "AI Detection",
                description: "Auto-detect structure & fields",
              },
              {
                step: 3,
                icon: <MapPin className="h-5 w-5" />,
                title: "Map & Clean",
                description: "Map to 5W standards",
              },
              {
                step: 4,
                icon: <FileCheck className="h-5 w-5" />,
                title: "Approve & Publish",
                description: "Generate narratives & dashboards",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-5 sm:p-6 shadow-sm hover:shadow-forge hover:border-primary/40 transition-all h-full"
              >
                <div className="flex h-8 w-8 rounded-full bg-primary/15 text-primary font-bold text-sm items-center justify-center mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}

            {/* Decorative connector line */}
            <div className="hidden lg:block absolute top-20 -right-8 w-16 h-0.5 bg-gradient-to-r from-primary/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Before vs After Section */}
      <section className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-10 lg:mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3">
              Before vs After
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              The 5W Difference
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Manual Excel */}
            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-full bg-destructive/15 p-3 flex-shrink-0">
                  <XCircle className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold">Manual Excel</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "3–10 days to clean and aggregate",
                  "Inconsistent definitions across partners",
                  "Late error discovery and follow-ups",
                  "Heavy coordinator follow-ups required",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5W.Ai */}
            <div className="rounded-2xl border border-success/40 bg-success/10 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-full bg-success/20 p-3 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-success" />
                </div>
                <h3 className="text-2xl font-bold">5W.Ai</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "30–90 minutes end-to-end",
                  "Standardized definitions engine built-in",
                  "Issues detected before submission",
                  "Coordinator approves instead of cleans",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Two Audiences Section */}
      <section className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-10 lg:mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3">
              Two Audiences
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Built for Reporting Organizations & Coordinators
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* For Reporting Organizations */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="rounded-lg bg-primary/15 p-3 flex-shrink-0">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                For Reporting Organizations
              </h3>
              <p className="text-muted-foreground mb-6">
                Upload templates, clean data, and get approval workflows.
              </p>
              <ul className="space-y-3">
                {[
                  "Upload any Excel template",
                  "AI cleaning + validation",
                  "Preferences (individuals vs households)",
                  "Natural language summary generation",
                  "HQ approval workflow",
                  "Donor-ready exports",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Coordinators & Agencies */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="rounded-lg bg-accent/15 p-3 flex-shrink-0">
                  <Users className="h-6 w-6 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                For Coordinators & Agencies
              </h3>
              <p className="text-muted-foreground mb-6">
                Aggregate data, monitor quality, and publish dashboards.
              </p>
              <ul className="space-y-3">
                {[
                  "Inter-agency aggregation",
                  "Quality gate + revert workflow",
                  "Sector dashboards + gap analysis",
                  "HRP / indicator monitoring",
                  "Timeliness & compliance tracking",
                  "Multi-format exports",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Grade Section */}
      <section
        id="features"
        className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-10 lg:mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3">
              Enterprise Grade
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Built for auditable, secure coordination
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Role-Based Access",
                description: "Field / PM / HQ / Coordinator roles",
              },
              {
                title: "Audit Trail",
                description: "Full versioning + change history",
              },
              {
                title: "Quality Scoring",
                description: "Confidence indicators + validation",
              },
              {
                title: "Export Traceability",
                description: "Link dashboards to source submissions",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-forge hover:border-primary/40 transition-all"
              >
                <div className="rounded-lg bg-primary/10 p-3 w-fit mb-4">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors CTA Section */}
      <section
        id="investors"
        className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-accent"
      >
        <div className="mx-auto w-full max-w-3xl">
          <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 sm:p-10 lg:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              See 5W.Ai in Action
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Experience the future of humanitarian reporting. Transform Excel
              chaos into verified, coordination-ready insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://5-w-ai.vercel.app/upload"
                className="bg-white text-slate-900 hover:bg-white/90 rounded-md h-12 px-8 font-semibold transition-colors flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:mark@5ws.io"
                className="border-2 border-white bg-transparent text-white hover:bg-white/10 rounded-md h-12 px-8 font-semibold transition-colors flex items-center justify-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 sm:px-6 lg:px-8 py-12 bg-background">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            {/* Brand */}
            <div>
              <h4 className="font-bold text-lg mb-3">5W.Ai</h4>
              <p className="text-sm text-muted-foreground">
                The AI layer for humanitarian reporting.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-bold mb-3">Product</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("product")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Security
                  </button>
                </li>
                <li>
                  <a
                    href="mailto:mark@5ws.io"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold mb-3">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-bold mb-3">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:mark@5ws.io"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Email Us
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("investors")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Investor Demo
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 5W.Ai. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
