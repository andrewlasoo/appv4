import { useState } from "react";
import {
  Menu,
  X,
  Moon,
  BookOpen,
  ExternalLink,
  LogOut,
  Trash2,
  Upload,
} from "lucide-react";

interface Resource {
  id: number;
  title: string;
  type: string;
  year: number;
  description: string;
  link: string;
}

interface Whitepaper {
  id: number;
  title: string;
  organization: string;
  year: number;
  description: string;
  pdfUrl?: string;
}

const resources: Resource[] = [
  {
    id: 1,
    title: "The State of Open Humanitarian Data 2026",
    type: "Annual Report",
    year: 2026,
    description:
      "The most authoritative annual audit of humanitarian data availability. The 2026 edition reveals crisis-data availability dropped to 68%, IM staff were cut by 40% at major agencies.",
    link: "https://centre.humdata.org/the-state-of-open-humanitarian-data-2026/",
  },
  {
    id: 2,
    title: "Global Humanitarian Overview 2026",
    type: "Annual Report",
    year: 2026,
    description:
      "OCHA's flagship annual overview documents 239 million people in need, $23B funding requirement. Prioritizes technology-driven accountability.",
    link: "https://www.unocha.org/publications/report/world/global-humanitarian-overview-2026-enesfr",
  },
  {
    id: 3,
    title: "Emergency Information Management: The 3/4/5W Tool",
    type: "Operational Guidance",
    year: 2024,
    description:
      "UNHCR's authoritative operational guide on 3W/4W/5W databases as essential aspects of coordination.",
    link: "https://emergency.unhcr.org/coordination-and-communication/information-management/emergency-information-management-coordination",
  },
  {
    id: 4,
    title: "The Coming Humanitarian Data Drought",
    type: "Research Blog",
    year: 2025,
    description:
      "Documents how WFP primary data interviews dropped significantly. Makes the case for efficiency tools.",
    link: "https://www.cgdev.org/blog/coming-humanitarian-data-drought",
  },
  {
    id: 5,
    title: "How Are Humanitarians Using AI in 2025?",
    type: "Research Report",
    year: 2025,
    description:
      "The world's first baseline study of AI adoption in the humanitarian sector.",
    link: "https://www.humanitarianleadershipacademy.org/resources/humanitarian-ai-podcast-series-the-collection/",
  },
  {
    id: 6,
    title: "From Digital Promise to Frontline Practice",
    type: "Policy Report",
    year: 2021,
    description:
      "OCHA's landmark policy report on digital technologies in humanitarian action.",
    link: "https://www.unocha.org/publications/report/world/digital-promise-frontline-practice-new-and-emerging-technologies-humanitarian-action",
  },
  {
    id: 7,
    title: "Global Humanitarian Assistance Report 2025",
    type: "Annual Report",
    year: 2025,
    description:
      "Reveals funding flow transparency issues and the accountability vacuum.",
    link: "https://alnap.hacdn.io/media/documents/GHA_Chapter_2_1606v3.pdf",
  },
  {
    id: 8,
    title: "Grand Bargain 2023-2026 Framework",
    type: "Policy Framework",
    year: 2023,
    description:
      "Inter-agency agreement signed by 71 organizations committing to harmonized reporting.",
    link: "https://interagencystandingcommittee.org/grand-bargain",
  },
  {
    id: 9,
    title: "Humanitarian AI Today Podcast",
    type: "Podcast Series",
    year: 2024,
    description:
      "The leading AI-for-good podcast series with applied cases from IFRC, WFP, FAO.",
    link: "https://humanitarianaitoday.org/",
  },
  {
    id: 10,
    title: "Humanitarian AI Podcast Series (6 Episodes)",
    type: "Podcast Mini-Series",
    year: 2025,
    description:
      "Deep-dive series covering AI governance gaps and localization challenges.",
    link: "https://www.humanitarianleadershipacademy.org/resources/humanitarian-ai-podcast-series-the-collection/",
  },
];

export default function ResourcesLibrary() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [whitepapers, setWhitepapers] = useState<Whitepaper[]>([
    {
      id: 1,
      title: "Humanitarian Data Standards Framework",
      organization: "5W.Ai Research Team",
      year: 2026,
      description:
        "A comprehensive guide to implementing standardized data collection and reporting frameworks across humanitarian operations.",
    },
    {
      id: 2,
      title: "AI-Driven Data Validation in Crisis Response",
      organization: "5W.Ai & OCHA Partnership",
      year: 2025,
      description:
        "Technical whitepaper exploring AI-powered validation mechanisms for rapid data quality assurance.",
    },
    {
      id: 3,
      title: "Coordination Data Aggregation: Best Practices",
      organization: "5W.Ai Research Team",
      year: 2026,
      description:
        "Guide on aggregating data from multiple sources while maintaining integrity and standardization.",
    },
  ]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [newWhitepaper, setNewWhitepaper] = useState({
    title: "",
    organization: "",
    year: new Date().getFullYear(),
    description: "",
    pdfUrl: "",
  });
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    if (username === "admin" && password === "B0ny0@%$") {
      setIsLoggedIn(true);
      setShowLoginModal(false);
      setUsername("");
      setPassword("");
    } else {
      setLoginError("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  const handleAddWhitepaper = (e: React.FormEvent) => {
    e.preventDefault();
    if (newWhitepaper.title && newWhitepaper.organization) {
      // In a real app, you'd upload the PDF to a server
      // For now, we'll create a local blob URL for demo purposes
      let pdfUrl = "";
      if (pdfFile) {
        pdfUrl = URL.createObjectURL(pdfFile);
      }

      setWhitepapers([
        ...whitepapers,
        {
          id: Math.max(...whitepapers.map((wp) => wp.id), 0) + 1,
          ...newWhitepaper,
          pdfUrl,
        },
      ]);
      setNewWhitepaper({
        title: "",
        organization: "",
        year: new Date().getFullYear(),
        description: "",
        pdfUrl: "",
      });
      setPdfFile(null);
    }
  };

  const handleDeleteWhitepaper = (id: number) => {
    setWhitepapers(whitepapers.filter((wp) => wp.id !== id));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-10">
          <a href="/" className="text-2xl font-semibold tracking-tight">
            5W.Ai
          </a>

          <nav className="hidden md:flex items-center gap-12 text-[1.05rem] text-muted-foreground">
            <a href="/" className="transition-colors hover:text-foreground">
              Home
            </a>
            <a
              href="https://5-w-ai.vercel.app/upload"
              className="transition-colors hover:text-foreground"
            >
              Product
            </a>
            <a
              href="https://5-w-ai.vercel.app/investors"
              className="transition-colors hover:text-foreground"
            >
              Investors
            </a>
            <a
              href="/resources-library"
              className="transition-colors hover:text-foreground text-foreground font-medium"
            >
              Resources
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="border border-input bg-background hover:bg-muted rounded-full h-11 px-3 sm:px-4 transition-colors flex items-center gap-2">
              <Moon className="h-4 w-4" />
              <span className="hidden lg:inline text-sm">Dark</span>
            </button>
            {!isLoggedIn && (
              <button
                onClick={() => setShowLoginModal(true)}
                className="bg-background border border-primary text-primary hover:bg-primary/5 rounded-full h-11 px-5 sm:px-7 text-sm font-semibold transition-colors"
              >
                Admin
              </button>
            )}
            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="bg-background border border-border text-foreground hover:bg-muted rounded-full h-11 px-5 sm:px-7 text-sm font-semibold transition-colors flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            )}
            <a
              href="mailto:mark@5ws.io"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-11 px-5 sm:px-7 text-sm font-semibold transition-colors"
            >
              Request Demo
            </a>
          </div>

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

        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-border/60 px-4 py-4">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="/"
                className="rounded-md px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                Home
              </a>
              <a
                href="https://5-w-ai.vercel.app/upload"
                className="rounded-md px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                Product
              </a>
              <a
                href="https://5-w-ai.vercel.app/investors"
                className="rounded-md px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                Investors
              </a>
              <a
                href="/resources-library"
                className="rounded-md px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted"
              >
                Resources
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="min-h-screen bg-background text-foreground">
        {/* Page Header */}
        <section className="border-b border-border bg-background/80">
          <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4">
              <div className="rounded-xl border border-border bg-card p-3 flex-shrink-0">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>

              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
                  Resources
                </p>
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl mt-2">
                  Supporting Resources
                </h1>
              </div>

              <div className="mt-4">
                <div className="inline-flex items-center rounded-full border border-transparent bg-secondary text-secondary-foreground px-2.5 py-0.5 text-xs font-semibold hover:bg-secondary/80 transition-colors">
                  Public View
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Login Modal */}
        {showLoginModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-lg max-w-md w-full">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Admin Login</h2>
                <button
                  onClick={() => setShowLoginModal(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    autoFocus
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {loginError && (
                  <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm">
                    {loginError}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg py-2 font-semibold transition-colors"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Two Column Layout */}
        <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Whitepapers */}
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">Whitepapers</h2>
                <p className="text-muted-foreground text-sm">
                  Technical publications and research papers from 5W.Ai
                </p>
              </div>

              {/* Upload Section (Admin Only) */}
              {isLoggedIn && (
                <div className="mb-8 rounded-2xl border border-border bg-card/95 shadow-forge p-6">
                  <h3 className="text-lg font-bold mb-4">Upload Whitepaper</h3>
                  <form onSubmit={handleAddWhitepaper} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Title
                      </label>
                      <input
                        type="text"
                        value={newWhitepaper.title}
                        onChange={(e) =>
                          setNewWhitepaper({
                            ...newWhitepaper,
                            title: e.target.value,
                          })
                        }
                        placeholder="Whitepaper title"
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        value={newWhitepaper.organization}
                        onChange={(e) =>
                          setNewWhitepaper({
                            ...newWhitepaper,
                            organization: e.target.value,
                          })
                        }
                        placeholder="Organization name"
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Year
                      </label>
                      <input
                        type="number"
                        value={newWhitepaper.year}
                        onChange={(e) =>
                          setNewWhitepaper({
                            ...newWhitepaper,
                            year: parseInt(e.target.value),
                          })
                        }
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Description
                      </label>
                      <textarea
                        value={newWhitepaper.description}
                        onChange={(e) =>
                          setNewWhitepaper({
                            ...newWhitepaper,
                            description: e.target.value,
                          })
                        }
                        placeholder="Whitepaper description"
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        PDF File
                      </label>
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={(e) =>
                          setPdfFile(e.target.files?.[0] || null)
                        }
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                      {pdfFile && (
                        <p className="text-xs text-primary mt-2">
                          Selected: {pdfFile.name}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg py-2 font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <Upload className="h-4 w-4" />
                      Add Whitepaper
                    </button>
                  </form>
                </div>
              )}

              {/* Whitepapers List */}
              <div className="space-y-4">
                {whitepapers.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No whitepapers yet
                  </div>
                ) : (
                  whitepapers.map((wp) => (
                    <div
                      key={wp.id}
                      className="rounded-xl border border-border bg-card p-4 hover:shadow-forge transition-shadow"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-foreground">
                            {wp.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {wp.organization} • {wp.year}
                          </p>
                          <p className="text-sm text-muted-foreground mt-2">
                            {wp.description}
                          </p>
                          {wp.pdfUrl && (
                            <a
                              href={wp.pdfUrl}
                              download={`${wp.title}.pdf`}
                              className="inline-flex items-center gap-1 text-primary hover:underline text-sm mt-3 transition-colors"
                            >
                              <ExternalLink className="h-3 w-3" />
                              Download PDF
                            </a>
                          )}
                        </div>
                        {isLoggedIn && (
                          <button
                            onClick={() => handleDeleteWhitepaper(wp.id)}
                            className="flex-shrink-0 p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                            title="Delete whitepaper"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Right Column - Supporting Resources */}
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">Supporting Resources</h2>
                <p className="text-muted-foreground text-sm">
                  Industry reports, research papers, and policy documents
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card/95 shadow-forge overflow-hidden">
                <div className="border-b border-border/60 px-5 py-4">
                  <h3 className="text-sm font-semibold tracking-tight text-foreground">
                    Resources
                  </h3>
                </div>

                <div className="p-5 space-y-4 max-h-[800px] overflow-y-auto">
                  {resources.map((resource) => (
                    <div
                      key={resource.id}
                      className="border-b border-border/60 pb-4 last:border-b-0"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-semibold text-primary">
                              {resource.id}
                            </span>
                            <div className="inline-flex items-center rounded-full border border-transparent bg-secondary text-secondary-foreground px-2 py-0.5 text-xs font-semibold">
                              {resource.type}
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {resource.year}
                            </span>
                          </div>
                          <h4 className="font-bold text-foreground text-sm">
                            {resource.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            {resource.description}
                          </p>
                        </div>
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 inline-flex items-center gap-1 text-primary hover:underline transition-colors text-xs"
                        >
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
