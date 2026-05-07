import { useState } from "react";
import { Menu, X, Moon, BookOpen, ExternalLink } from "lucide-react";

interface Resource {
  id: number;
  title: string;
  type: string;
  year: number;
  description: string;
  link: string;
}

const resources: Resource[] = [
  {
    id: 1,
    title: "The State of Open Humanitarian Data 2026",
    type: "Annual Report",
    year: 2026,
    description:
      "The most authoritative annual audit of humanitarian data availability. The 2026 edition reveals crisis-data availability dropped to 68%, IM staff were cut by 40% at major agencies, and organizations must 'do better with less.' Directly validates 5W.AI's efficiency proposition.",
    link: "https://centre.humdata.org/the-state-of-open-humanitarian-data-2026/",
  },
  {
    id: 2,
    title: "Global Humanitarian Overview 2026",
    type: "Annual Report",
    year: 2026,
    description:
      "OCHA's flagship annual overview documents 239 million people in need, $23B funding requirement. The 2026 GHO explicitly prioritizes technology-driven accountability and data-driven coordination.",
    link: "https://www.unocha.org/publications/report/world/global-humanitarian-overview-2026-enesfr",
  },
  {
    id: 3,
    title: "Emergency Information Management: The 3/4/5W Tool",
    type: "Operational Guidance",
    year: 2024,
    description:
      "UNHCR's authoritative operational guide on 3W/4W/5W databases as 'essential aspects of coordination.' Defines the WHO/WHAT/WHERE/WHEN/FOR WHOM framework 5W.AI is built around.",
    link: "https://emergency.unhcr.org/coordination-and-communication/information-management/emergency-information-management-coordination",
  },
  {
    id: 4,
    title: "The Coming Humanitarian Data Drought",
    type: "Research Blog / Analysis",
    year: 2025,
    description:
      "Documents how WFP primary data interviews dropped from 1.1M (2024) to 800K (2025). Makes the case for efficiency tools like 5W.AI that maximize output from reduced IM staff.",
    link: "https://www.cgdev.org/blog/coming-humanitarian-data-drought",
  },
  {
    id: 5,
    title: "How Are Humanitarians Using AI in 2025?",
    type: "Research Report",
    year: 2025,
    description:
      "The world's first baseline study of AI adoption in the humanitarian sector. Finds only 9% of humanitarian organizations are fully AI-ready but individual staff are experimenting daily.",
    link: "https://www.humanitarianleadershipacademy.org/resources/humanitarian-ai-podcast-series-the-collection/",
  },
  {
    id: 6,
    title: "From Digital Promise to Frontline Practice",
    type: "Flagship Policy Report",
    year: 2021,
    description:
      "OCHA's landmark policy report on digital technologies in humanitarian action. Identifies data standardization, quality, and interoperability as key enablers - exactly the infrastructure 5W.AI provides.",
    link: "https://www.unocha.org/publications/report/world/digital-promise-frontline-practice-new-and-emerging-technologies-humanitarian-action",
  },
  {
    id: 7,
    title: "Global Humanitarian Assistance Report 2025",
    type: "Annual Report",
    year: 2025,
    description:
      "Reveals that 89% of humanitarian funding flows through intermediaries with no public accountability trail. Directly documents the accountability vacuum 5W.AI's financial monitoring module addresses.",
    link: "https://alnap.hacdn.io/media/documents/GHA_Chapter_2_1606v3.pdf",
  },
  {
    id: 8,
    title: "Grand Bargain 2023-2026 Framework",
    type: "Policy Framework",
    year: 2023,
    description:
      "Inter-agency agreement signed by 71 organizations committing to harmonized reporting requirements and increased funding transparency. Every 5W.AI client is likely a Grand Bargain signatory.",
    link: "https://interagencystandingcommittee.org/grand-bargain",
  },
  {
    id: 9,
    title: "Humanitarian AI Today Podcast",
    type: "Podcast Series",
    year: 2024,
    description:
      "The leading AI-for-good podcast series for the humanitarian sector. Episodes include applied AI use cases from IFRC, WFP, FAO, and UNHCR.",
    link: "https://humanitarianaitoday.org/",
  },
  {
    id: 10,
    title: "Humanitarian AI Podcast Series (6 Episodes)",
    type: "Podcast Mini-Series",
    year: 2025,
    description:
      "Six-episode deep-dive series covering AI governance gaps, AI literacy barriers, and localization challenges. Positions responsible AI tools like 5W.AI as the needed solution.",
    link: "https://www.humanitarianleadershipacademy.org/resources/humanitarian-ai-podcast-series-the-collection/",
  },
  {
    id: 11,
    title: "The State of the World's Cash 2023",
    type: "Flagship Report",
    year: 2023,
    description:
      "Definitive state-of-the-sector report for cash and voucher assistance. Highlights the need for interoperable tracking systems and improved CVA reporting.",
    link: "https://www.calpnetwork.org/collection/the-state-of-the-worlds-cash-2023-report/",
  },
  {
    id: 12,
    title: "Why the Future of Grand Bargain Aid Reforms Hinges on Accountability",
    type: "Investigative Analysis",
    year: 2024,
    description:
      "Documents how Grand Bargain self-reporting is 'impossible to verify'. Directly argues for verifiable, machine-readable reporting systems that replace subjective self-assessment.",
    link: "https://www.thenewhumanitarian.org/news/2024/10/15/why-grand-bargain-future-hinges-accountability",
  },
  {
    id: 13,
    title: "Humanitarian AI Unpacked - Monthly Briefings 2025",
    type: "Monthly Briefing Series",
    year: 2025,
    description:
      "Monthly practitioner briefings on AI in the humanitarian sector. Covers the SAFE AI project (Standards and Assurance Framework for Ethical AI).",
    link: "https://www.ukhih.org/news/humanitarian-ai-unpacked-march-2025/",
  },
  {
    id: 14,
    title: "Donor Crisis Prompts Rethink on Rules of Humanitarian Data Partnerships",
    type: "Investigative News",
    year: 2025,
    description:
      "Examines how the humanitarian funding crisis is pushing organizations toward risky private-sector data partnerships. Validates 5W.AI's humanitarian-native design.",
    link: "https://genevasolutions.news/peace-humanitarian/donor-crisis-prompts-a-rethink-on-rules-of-collaboration-for-humanitarian-data-partnerships",
  },
  {
    id: 15,
    title: "Humanitarian Data Exchange (HDX)",
    type: "Open Data Platform",
    year: 2026,
    description:
      "The global open humanitarian data platform managing data for 22 active crises. Integration with HDX is a key 5W.AI roadmap feature.",
    link: "https://data.humdata.org/",
  },
  {
    id: 16,
    title: "Data Collection in a Crisis: Best Practices for Humanitarian Aid",
    type: "Practitioner Guide",
    year: 2025,
    description:
      "Practitioner-focused guide on humanitarian data collection challenges. Highlights why offline data capture with robust sync and audit trail is critical.",
    link: "https://www.surveycto.com/data-collection-quality/data-collection-in-humanitarian-aid/",
  },
  {
    id: 17,
    title: "Artificial Intelligence in Humanitarian Aid: A Review and Future Research Agenda",
    type: "Peer-Reviewed Academic Review",
    year: 2025,
    description:
      "Comprehensive peer-reviewed review of AI applications across the humanitarian programme cycle. Establishes the academic evidence base.",
    link: "https://www.sciencedirect.com/science/article/pii/S0166497225002470",
  },
  {
    id: 18,
    title: "The Humanitarian Reset - IASC Examined",
    type: "Policy Analysis",
    year: 2025,
    description:
      "Analysis of the March 2025 IASC Humanitarian Reset. Calls for democratising data - promoting information systems designed by those closest to crisis-affected communities.",
    link: "https://www.icvanetwork.org/humanitarianreset/",
  },
  {
    id: 19,
    title: "Rethinking Humanitarianism Podcast: The Aid Sector's Techno-Colonialism Problem",
    type: "Audio / Video Podcast",
    year: 2026,
    description:
      "Critical examination of AI and technology adoption in the humanitarian sector. Provides perspective on responsible AI implementation.",
    link: "https://www.thenewhumanitarian.org/podcasts/2026/02/26/rethinking-humanitarianism-aid-sectors-techno-colonialism-problem",
  },
  {
    id: 20,
    title: "ICT4D Conference 2026 - Nairobi",
    type: "Conference / Event",
    year: 2026,
    description:
      "The 2026 ICT4D Conference in Nairobi has data as its primary theme. Explicitly covers 'AI's potential and pitfalls' and 'responsible data sharing.'",
    link: "https://www.ict4dconference.org/",
  },
];

export default function ResourcesLibrary() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* Logo */}
          <a href="/" className="text-2xl font-semibold tracking-tight">
            5W.Ai
          </a>

          {/* Desktop Navigation */}
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

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="border border-input bg-background hover:bg-muted rounded-full h-11 px-3 sm:px-4 transition-colors flex items-center gap-2">
              <Moon className="h-4 w-4" />
              <span className="hidden lg:inline text-sm">Dark</span>
            </button>
            <a
              href="mailto:mark@5ws.io"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-11 px-5 sm:px-7 text-sm font-semibold transition-colors"
            >
              Request Demo
            </a>
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
        {/* Hero Section */}
        <section className="border-b border-border bg-background/80">
          <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4">
              {/* Icon Card */}
              <div className="rounded-xl border border-border bg-card p-3 flex-shrink-0">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
                  Resources
                </p>
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl mt-2">
                  Supporting Resources
                </h1>
              </div>

              {/* Public View Badge */}
              <div className="mt-4">
                <div className="inline-flex items-center rounded-full border border-transparent bg-secondary text-secondary-foreground px-2.5 py-0.5 text-xs font-semibold hover:bg-secondary/80 transition-colors">
                  Public View
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Table Section */}
        <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-card/95 shadow-forge overflow-hidden">
            {/* Table Header */}
            <div className="border-b border-border/60 px-5 py-4">
              <h2 className="text-sm font-semibold tracking-tight text-foreground">
                5W.AI Supporting Resources
              </h2>
            </div>

            {/* Table */}
            <div className="p-5 overflow-x-auto">
              <table className="w-full min-w-[980px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    <th className="py-3 pr-3">#</th>
                    <th className="py-3 pr-4">Resource</th>
                    <th className="py-3 pr-4">Type</th>
                    <th className="py-3 pr-4">Year</th>
                    <th className="py-3 pr-4">Why It Matters</th>
                    <th className="py-3 pr-0">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {resources.map((resource) => (
                    <tr
                      key={resource.id}
                      className="border-b border-border/60 align-top last:border-b-0"
                    >
                      <td className="py-4 pr-3 font-semibold text-primary">
                        {resource.id}
                      </td>
                      <td className="py-4 pr-4">
                        <p className="font-medium text-foreground">
                          {resource.title}
                        </p>
                      </td>
                      <td className="py-4 pr-4">
                        <div className="inline-flex items-center rounded-full border border-transparent bg-secondary text-secondary-foreground px-2.5 py-0.5 text-xs font-semibold hover:bg-secondary/80 transition-colors">
                          {resource.type}
                        </div>
                      </td>
                      <td className="py-4 pr-4 text-muted-foreground">
                        {resource.year}
                      </td>
                      <td className="py-4 pr-4 text-muted-foreground text-xs max-w-xs">
                        {resource.description}
                      </td>
                      <td className="py-4 pr-0">
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary underline-offset-2 hover:underline transition-colors"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Open
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
