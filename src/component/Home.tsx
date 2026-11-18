import { Link } from "react-router-dom";

const projects = [
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

export function Home() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-5 py-8 md:py-16 space-y-20">
      {/* HERO SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* Left: Headline & Bio */}
        <div className="md:col-span-7 space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
            Frontend Developer & Creative Designer
          </p>

          <h1
            style={{ fontFamily: "Bitcount Grid Double, sans-serif" }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
          >
            Creative <br /> Designer
          </h1>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            Hi, I'm <strong className="text-gray-900">Emmanuel Samuel</strong>. I build clean,
            modern, and responsive web experiences with <strong>React</strong>,{" "}
            <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>. Check out my live
            websites and projects below.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 bg-gray-900 hover:bg-black text-white text-sm font-semibold rounded-2xl shadow-md transition"
            >
              View My Websites ↓
            </button>

            <Link
              to="/Contact"
              className="px-6 py-3 bg-white border border-gray-300 hover:border-gray-900 text-gray-800 text-sm font-semibold rounded-2xl transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="md:col-span-5 flex justify-center">
          <div className="w-full max-w-sm aspect-[10/12] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gray-100">
            <img
              src="images/samuel.jpeg"
              alt="Emmanuel Samuel"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* WEBSITES & PROJECTS SECTION */}
      <section id="projects" className="space-y-8 pt-8 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
              My Websites & Projects
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-2">
              Click "Visit Website" to open any of my live sites or "GitHub" to view the source code.
            </p>
          </div>

          <a
            href="https://github.com/Sage-NBA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-black self-start sm:self-auto bg-gray-100 px-3 py-2 rounded-xl transition"
          >
            <i className="ri-github-fill text-base"></i>
            <span>All on GitHub</span>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between space-y-4"
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

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-2">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 px-4 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-xl shadow-sm transition flex items-center justify-center gap-1"
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
      </section>

      {/* QUICK CONTACT BANNER */}
      <section className="p-8 sm:p-10 rounded-3xl bg-gray-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-2xl font-bold">Have a project in mind?</h3>
          <p className="text-sm text-gray-400">
            Let's build something clean and modern together.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://wa.me/qr/HZ3MKMKKDZRHJ1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs rounded-xl transition flex items-center gap-1.5"
          >
            <i className="ri-whatsapp-fill text-base"></i>
            <span>WhatsApp</span>
          </a>

          <Link
            to="/Contact"
            className="px-5 py-2.5 bg-white text-gray-900 hover:bg-gray-100 font-semibold text-xs rounded-xl transition"
          >
            Contact Page
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
