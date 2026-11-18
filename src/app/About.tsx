import { Link } from "react-router-dom";

export function About() {
  return (
    <section className="py-12 md:py-20 px-5 max-w-6xl mx-auto space-y-16">
      {/* Header */}
      <div className="space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
          My Story & Craft
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight">
          Design has always been more than code — it's my passion and discipline.
        </h1>
      </div>

      {/* Main Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
          <p className="font-medium text-gray-900 text-xl">
            Hey! I'm <strong className="text-blue-600">Emmanuel Samuel</strong>, a frontend developer
            who loves building modern, responsive, and user-centric web applications.
          </p>

          <p>
            I specialize in <strong>React, TypeScript, Tailwind CSS, and JavaScript</strong>. I get
            excited about turning raw ideas and Figma wireframes into interactive, accessible, and
            high-converting digital experiences.
          </p>

          <p className="text-gray-600">
            My engineering philosophy centers on clean architecture, lightning-fast load times, and
            intuitive user interfaces. When I'm not writing frontend code, you will find me exploring
            the newest ecosystem tools, testing UI component patterns, and building real-world projects
            that challenge me to expand my capabilities.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              to="/Projects"
              className="inline-flex items-center gap-2 px-5 py-3 bg-gray-900 hover:bg-black text-white text-sm font-semibold rounded-xl shadow-md transition"
            >
              <i className="ri-folder-open-fill text-blue-400"></i>
              <span>Explore My 6 Live Websites</span>
            </Link>

            <Link
              to="/Contact"
              className="inline-flex items-center gap-2 px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold rounded-xl transition"
            >
              <span>Get in Touch</span>
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>

        {/* Video / Visual card */}
        <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-100 bg-black aspect-video lg:aspect-auto lg:h-96">
          <video
            className="w-full h-full object-cover"
            loop
            autoPlay
            muted
            playsInline
            src="images/response.mp4"
          />
        </div>
      </div>

      {/* Hairstyling / Creative Discipline Section */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gray-50 border border-gray-200 space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-100/70 px-3 py-1 rounded-full">
            Creative Synergy
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
            Precision Craftsmanship Across Disciplines
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            In addition to web development, I am a skilled hairstylist. Styling hair demands spatial
            awareness, symmetry, strict attention to fine contours, and active listening to client
            needs — skills that translate directly into crafting responsive, balanced, and aesthetic
            user interfaces.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-gray-200 group">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              src="images/kid.jpg"
              alt="Hairstyling craft"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-gray-200 group">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              src="images/ifesi.jpg"
              alt="Creative portrait styling"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-black group sm:col-span-2 lg:col-span-1">
            <video
              className="w-full h-full object-cover"
              loop
              autoPlay
              muted
              playsInline
              src="images/sam.mp4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
