import { Link } from "react-router-dom";

export function About() {
  return (
    <section className="w-full py-10 md:py-16 px-5 md:px-10 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-4xl">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
          My Story & Craft
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-gray-900 tracking-tight leading-tight">
          Design has always been more than code — it's my passion.
        </h1>
      </div>

      {/* Main Narrative */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed">
          <p className="font-semibold text-gray-900 text-2xl">
            Hey! I'm <strong className="text-blue-600">Emmanuel Samuel</strong>, a frontend developer
            who loves building modern, responsive, and user-friendly web applications.
          </p>

          <p>
            I specialize in <strong>React, TypeScript, Tailwind CSS, and JavaScript</strong>. I love
            turning ideas into clean, interactive digital experiences.
          </p>

          <p className="text-gray-600">
            My goal is to create websites that are fast, accessible, and easy to use. In addition to
            coding, I am constantly learning new technologies and improving my skills through hands-on
            projects.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              to="/Projects"
              className="px-6 py-3.5 bg-black hover:bg-gray-800 text-white text-sm font-semibold rounded-2xl shadow-md transition"
            >
              Explore My 6 Live Websites
            </Link>

            <Link
              to="/Contact"
              className="px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-semibold rounded-2xl transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Video Card */}
        <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black aspect-video lg:aspect-auto lg:h-[450px]">
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

      {/* Hairstyling Section */}
      <div className="w-full p-8 md:p-12 rounded-3xl bg-gray-50 border border-gray-200 space-y-6">
        <div className="max-w-4xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
            Creative Discipline
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Creativity Across Disciplines
          </h2>
          <p className="text-gray-700 text-lg">
            In addition to web development, I am a talented hairstylist. This reflects my creativity,
            patience, symmetry, and eye for detail in everything I do.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-gray-200">
            <img
              className="w-full h-full object-cover"
              src="images/kid.jpg"
              alt="Hairstyling"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-gray-200">
            <img
              className="w-full h-full object-cover"
              src="images/ifesi.jpg"
              alt="Styling"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-black sm:col-span-2 lg:col-span-1">
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
