import { Link } from "react-router-dom";
import Sam from "../component/Sam";

export function Services() {
  const serviceOfferings = [
    {
      title: "Frontend Engineering",
      desc: "Architecting interactive single-page applications and dashboards with React, TypeScript, and modern component systems.",
      icon: "ri-reactjs-line",
      tags: ["React 19", "TypeScript", "Vite", "SPA"],
    },
    {
      title: "Responsive UI & Styling",
      desc: "Pixel-perfect translation of wireframes into clean, mobile-first layouts with Tailwind CSS, micro-interactions, and accessibility.",
      icon: "ri-layout-masonry-line",
      tags: ["Tailwind CSS", "Mobile-First", "Flex/Grid", "Dark Mode"],
    },
    {
      title: "API & Data Integration",
      desc: "Connecting third-party RESTful APIs, live search features, weather/crypto data feeds, and state management pipelines.",
      icon: "ri-database-2-line",
      tags: ["REST APIs", "Async/Await", "State Management"],
    },
    {
      title: "Deployment & Maintenance",
      desc: "Continuous integration, Git version control, Vercel deployments, and production speed audits.",
      icon: "ri-cloud-line",
      tags: ["Vercel", "Git/GitHub", "Web Performance"],
    },
  ];

  return (
    <div className="py-12 md:py-20 px-5 max-w-6xl mx-auto space-y-16">
      {/* Services Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
          Capabilities & Journey
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
          Services Offered & Growth Milestones
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          I provide end-to-end frontend development tailored for modern startups, agencies, and businesses.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {serviceOfferings.map((service, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl">
              <i className={service.icon}></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Timeline Section */}
      <div className="space-y-6 pt-6">
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            A Snapshot of My Creative Growth
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Education, technical development, and creative discipline over the years.
          </p>
        </div>

        <div className="divide-y divide-gray-200">
          <Sam
            text="Web Developer"
            children="Specializing in React, TypeScript, and modern responsive frontend engineering."
            head="2025 – Present"
          />
          <Sam
            text="Creative Hairstylist"
            children="Honing discipline, visual symmetry, customer relations, and meticulous attention to craft."
            head="2023 – Present"
          />
          <Sam
            text="S.S.C.E Certificate"
            children="Community Senior Secondary School"
            head="2023 – 2025"
          />
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 rounded-3xl bg-gray-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl font-bold">Want to see these skills in action?</h3>
          <p className="text-sm text-gray-400">
            Explore 6 live web applications directly built by Emmanuel Samuel.
          </p>
        </div>
        <Link
          to="/Projects"
          className="px-6 py-3 bg-white text-gray-900 hover:bg-gray-100 font-bold text-sm rounded-xl transition whitespace-nowrap"
        >
          View Live Projects
        </Link>
      </div>
    </div>
  );
}

export default Services;
