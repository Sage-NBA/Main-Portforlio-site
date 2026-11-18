import { Link } from "react-router-dom";
import Sam from "../component/Sam";

export function Services() {
  const serviceOfferings = [
    {
      title: "Frontend Engineering",
      desc: "Building fast, interactive web applications with React, TypeScript, and modern component systems.",
      icon: "ri-reactjs-line",
      tags: ["React 19", "TypeScript", "Vite", "SPA"],
    },
    {
      title: "Responsive UI & Styling",
      desc: "Pixel-perfect translation of wireframes into clean, mobile-first layouts with Tailwind CSS.",
      icon: "ri-layout-masonry-line",
      tags: ["Tailwind CSS", "Mobile-First", "Flex/Grid", "Dark Mode"],
    },
    {
      title: "API & Data Integration",
      desc: "Connecting live REST APIs, search filters, crypto/weather feeds, and real-time state.",
      icon: "ri-database-2-line",
      tags: ["REST APIs", "Async/Await", "State Management"],
    },
    {
      title: "Deployment & Production",
      desc: "Continuous deployment via Vercel, Git version control, and performance audits.",
      icon: "ri-cloud-line",
      tags: ["Vercel", "Git/GitHub", "Performance"],
    },
  ];

  return (
    <div className="w-full py-10 md:py-16 px-5 md:px-10 space-y-16">
      {/* Services Header */}
      <div className="space-y-4 max-w-4xl">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
          Capabilities & Journey
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-gray-900 tracking-tight leading-tight">
          Services Offered & Growth Milestones
        </h1>
        <p className="text-gray-600 text-lg">
          Frontend development tailored for modern startups, agencies, and businesses.
        </p>
      </div>

      {/* Services Grid — Full Width */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceOfferings.map((service, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition duration-200 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
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
      <div className="w-full space-y-6 pt-6">
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-3xl font-extrabold text-gray-900">
            A Snapshot of My Creative Growth
          </h2>
          <p className="text-base text-gray-500 mt-1">
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
      <div className="w-full p-8 md:p-12 rounded-3xl bg-black text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-2xl font-bold">Want to see these skills in action?</h3>
          <p className="text-sm text-gray-400">
            Explore 6 live web applications directly built by Emmanuel Samuel.
          </p>
        </div>
        <Link
          to="/Projects"
          className="px-6 py-3.5 bg-white text-black hover:bg-gray-100 font-bold text-sm rounded-2xl transition whitespace-nowrap"
        >
          View Live Projects
        </Link>
      </div>
    </div>
  );
}

export default Services;
