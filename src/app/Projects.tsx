import { Link } from "react-router-dom";

const allProjects = [
  {
    title: "Marketing & SEO Agency",
    tagline: "Client Platform with Google SERP Simulator",
    description:
      "A digital marketing agency website featuring an interactive live Google search simulator, audit request form, and responsive client case studies.",
    link: "https://marketing-portfolio-sage-nbas-projects.vercel.app",
    github: "https://github.com/Sage-NBA/Marketing-Portfolio",
    tech: "React • TypeScript • Tailwind",
    isLive: true,
  },
  {
    title: "Nimbus Weather & Crypto",
    tagline: "Live Multi-Widget Dashboard",
    description:
      "An interactive real-time dashboard featuring live weather forecasts, crypto price trackers, daily quotes, and quick notes.",
    link: "https://github.com/Sage-NBA/Weather",
    github: "https://github.com/Sage-NBA/Weather",
    tech: "React • TypeScript • Tailwind",
    isLive: false,
  },
  {
    title: "Roadmap & Milestone Tracker",
    tagline: "Project Timeline & Analytics",
    description:
      "A project management tool with dual timeline and grid views, milestone creation modal, and real-time progress tracking.",
    link: "https://github.com/Sage-NBA/Road-Map",
    github: "https://github.com/Sage-NBA/Road-Map",
    tech: "React • TypeScript • Tailwind",
    isLive: false,
  },
  {
    title: "CamTrack Security Dashboard",
    tagline: "CCTV Camera Monitoring",
    description:
      "A security dashboard to monitor CCTV camera statuses, active recording streams, and online/offline camera triage.",
    link: "https://github.com/Sage-NBA/Camera-site",
    github: "https://github.com/Sage-NBA/Camera-site",
    tech: "React • TypeScript • Tailwind",
    isLive: false,
  },
  {
    title: "SoundWave Music Player",
    tagline: "Audio Streaming & iTunes Search API",
    description:
      "Music streaming web application featuring live track search via iTunes API, audio previews, and custom playlists.",
    link: "https://github.com/Sage-NBA/Music-Repo",
    github: "https://github.com/Sage-NBA/Music-Repo",
    tech: "React • TypeScript • iTunes API",
    isLive: false,
  },
  {
    title: "Aura SaaS & Theme Engine",
    tagline: "Dynamic Dark & Light Theme Showcase",
    description:
      "Multi-page SaaS website with smooth light and dark mode switching, modern typography, and responsive layouts.",
    link: "https://github.com/Sage-NBA/Light-and-Dark-mode",
    github: "https://github.com/Sage-NBA/Light-and-Dark-mode",
    tech: "React • TypeScript • React Router",
    isLive: false,
  },
];

export function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-12 space-y-10">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="text-xs font-bold text-gray-600 hover:text-black flex items-center gap-1.5"
        >
          <i className="ri-arrow-left-line"></i>
          <span>Back to Home</span>
        </Link>

        <span className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
          6 Live Applications
        </span>
      </div>

      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
          Websites & Projects
        </h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
          Below is a complete collection of my web applications, client solutions, and dashboards.
          Click any link to visit the live site directly.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProjects.map((proj, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wide">
                  {proj.tech}
                </span>
                {proj.isLive ? (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    🟢 Live on Vercel
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-gray-100 text-gray-700">
                    ⭐ Active
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-900">{proj.title}</h3>
              <p className="text-xs font-medium text-gray-500">{proj.tagline}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{proj.description}</p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center gap-2">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 px-4 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-1"
              >
                <span>Visit Website</span>
                <i className="ri-arrow-right-up-line text-sm"></i>
              </a>

              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold rounded-xl transition flex items-center gap-1"
                title="View on GitHub"
              >
                <i className="ri-github-fill text-sm"></i>
                <span>Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
