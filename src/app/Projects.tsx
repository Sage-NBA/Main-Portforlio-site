import { Link } from "react-router-dom";

const allProjects = [
  {
    title: "Marketing & SEO Agency",
    tagline: "Live Client Platform with Google SERP Simulator",
    description:
      "A digital marketing agency website featuring an interactive live Google search simulator, audit request form, and responsive client case studies.",
    link: "https://marketing-portfolio-sage-nbas-projects.vercel.app",
    github: "https://github.com/Sage-NBA/Marketing-Portfolio",
    tech: "React • TypeScript • Tailwind",
    isLive: true,
  },
  {
    title: "Light & Dark Mode SaaS",
    tagline: "Dynamic Theme Switching Platform",
    description:
      "A modern web application featuring smooth light and dark mode switching, clean typography, and responsive layouts.",
    link: "https://light-and-dark-mode-beryl.vercel.app/",
    github: "https://github.com/Sage-NBA/Light-and-Dark-mode",
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
];

export function ProjectsPage() {
  return (
    <div className="w-full px-5 md:px-10 py-12 space-y-10">
      {/* Top Bar */}
      <div className="w-full flex items-center justify-between">
        <Link
          to="/"
          className="text-sm font-bold text-gray-700 hover:text-black flex items-center gap-1.5"
        >
          <i className="ri-arrow-left-line"></i>
          <span>Back to Home</span>
        </Link>

        <span className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full border border-emerald-200">
          6 Live Applications
        </span>
      </div>

      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight">
          Websites & Projects
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-3xl">
          Below is a complete collection of my web applications, client solutions, and dashboards.
          Click any link to visit the live site directly.
        </p>
      </div>

      {/* Projects Grid — Full Screen Width */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {allProjects.map((proj, idx) => (
          <div
            key={idx}
            className="w-full p-7 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                  {proj.tech}
                </span>
                {proj.isLive ? (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                    🟢 Live on Vercel
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700">
                    ⭐ Active Project
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold text-gray-900">{proj.title}</h3>
              <p className="text-xs font-semibold text-gray-500">{proj.tagline}</p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {proj.description}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3 px-4 bg-black hover:bg-gray-800 text-white text-sm font-bold rounded-2xl transition flex items-center justify-center gap-1.5"
              >
                <span>Visit Website</span>
                <i className="ri-arrow-right-up-line text-base"></i>
              </a>

              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-semibold rounded-2xl transition flex items-center gap-1.5"
                title="View on GitHub"
              >
                <i className="ri-github-fill text-base"></i>
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
