import { Link } from "react-router-dom";

const projects = [
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
    link: "https://wheather-mocha-two.vercel.app/",
    github: "https://github.com/Sage-NBA/Weather",
    tech: "React • TypeScript • Tailwind",
    isLive: true,
  },
  {
    title: "Roadmap & Milestone Tracker",
    tagline: "Project Timeline & Analytics",
    description:
      "A project management tool with dual timeline and grid views, milestone creation modal, and real-time progress tracking.",
    link: "https://road-map-pink.vercel.app/",
    github: "https://github.com/Sage-NBA/Road-Map",
    tech: "React • TypeScript • Tailwind",
    isLive: true,
  },
  {
    title: "CamTrack Security Dashboard",
    tagline: "CCTV Camera Monitoring",
    description:
      "A security dashboard to monitor CCTV camera statuses, active recording streams, and online/offline camera triage.",
    link: "https://camera-site-chi.vercel.app/",
    github: "https://github.com/Sage-NBA/Camera-site",
    tech: "React • TypeScript • Tailwind",
    isLive: true,
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
    <div className="w-full px-5 md:px-10 py-8 md:py-14 space-y-24">
      {/* HERO SECTION — FULL WIDTH */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left: Massive Headline & Bio */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full w-fit">
            Frontend Developer & Creative Designer
          </p>

          <h1
            style={{ fontFamily: "Bitcount Grid Double, sans-serif" }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[90px] xl:text-[110px] font-bold text-gray-900 leading-[0.98] tracking-tight"
          >
            Creative <br /> Designer
          </h1>

          <p className="text-lg md:text-2xl text-gray-700 leading-relaxed max-w-3xl">
            Hi, I'm <strong className="text-gray-900">Emmanuel Samuel</strong>.
            I build clean, responsive, and modern web applications with{" "}
            <strong>React</strong>, <strong>TypeScript</strong>, and{" "}
            <strong>Tailwind CSS</strong>. Explore my live websites and projects
            below.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-black hover:bg-gray-800 text-white text-base font-semibold rounded-2xl shadow-lg transition"
            >
              View My Websites ↓
            </button>

            <Link
              to="/Contact"
              className="px-8 py-4 bg-white border border-gray-300 hover:border-black text-gray-900 text-base font-semibold rounded-2xl transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right: Full Width Framed Photo */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-lg aspect-[10/12] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
            <img
              src="images/samuel.jpeg"
              alt="Emmanuel Samuel"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FULL WIDTH WEBSITES & PROJECTS SECTION */}
      <section
        id="projects"
        className="w-full space-y-8 pt-10 border-t border-gray-200"
      >
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
              My Websites & Projects
            </h2>
            <p className="text-gray-600 text-base md:text-lg mt-2">
              Click "Visit Website" to launch any live site, or click "Code" to
              inspect the repository on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/Sage-NBA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-gray-800 hover:text-black self-start md:self-auto bg-gray-100 hover:bg-gray-200 px-4 py-2.5 rounded-2xl transition"
          >
            <i className="ri-github-fill text-lg"></i>
            <span>All on GitHub</span>
          </a>
        </div>

        {/* Projects Grid — Occupies Full Screen Width */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="w-full p-7 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
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

                <h3 className="text-2xl font-bold text-gray-900">
                  {proj.title}
                </h3>
                <p className="text-xs font-semibold text-gray-500">
                  {proj.tagline}
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-3 px-4 bg-black hover:bg-gray-800 text-white text-sm font-bold rounded-2xl shadow-sm transition flex items-center justify-center gap-1.5"
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
      </section>

      {/* FULL WIDTH CONTACT CALLOUT */}
      <section className="w-full p-8 md:p-14 rounded-3xl bg-black text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-bold">
            Have a project in mind?
          </h3>
          <p className="text-base text-gray-400">
            Let's build something responsive, fast, and modern together.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/qr/HZ3MKMKKDZRHJ1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm rounded-2xl transition flex items-center gap-2"
          >
            <i className="ri-whatsapp-fill text-lg"></i>
            <span>WhatsApp Me</span>
          </a>

          <Link
            to="/Contact"
            className="px-6 py-3.5 bg-white text-black hover:bg-gray-100 font-semibold text-sm rounded-2xl transition"
          >
            Contact Page
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
