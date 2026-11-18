import { useState } from "react";
import { Link } from "react-router-dom";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("Sammy2007bright@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      name: "WhatsApp",
      icon: "ri-whatsapp-fill",
      url: "https://wa.me/qr/HZ3MKMKKDZRHJ1",
      color: "hover:bg-emerald-500 hover:text-white",
      tag: "+234 9070685246",
    },
    {
      name: "LinkedIn",
      icon: "ri-linkedin-fill",
      url: "http://bit.ly/4v7Ukpr",
      color: "hover:bg-blue-600 hover:text-white",
      tag: "Professional Profile",
    },
    {
      name: "GitHub",
      icon: "ri-github-fill",
      url: "https://github.com/Sage-NBA",
      color: "hover:bg-black hover:text-white",
      tag: "github.com/Sage-NBA",
    },
    {
      name: "Instagram",
      icon: "ri-instagram-fill",
      url: "https://www.instagram.com/samuelemmanuel668/",
      color: "hover:bg-pink-600 hover:text-white",
      tag: "@samuelemmanuel668",
    },
    {
      name: "Facebook",
      icon: "ri-facebook-circle-fill",
      url: "https://www.facebook.com/share/1EXC4sJ43C/",
      color: "hover:bg-blue-700 hover:text-white",
      tag: "Emmanuel Samuel",
    },
  ];

  return (
    <div className="w-full py-10 md:py-16 px-5 md:px-10 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-4xl">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
          Get in Touch
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-gray-900 tracking-tight leading-tight">
          Let's Start a Conversation.
        </h1>
        <p className="text-gray-600 text-lg">
          Whether you have a freelance project, an open developer role, or want to collaborate.
        </p>
      </div>

      {/* Primary Contact Cards Grid — Full Width */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email Card */}
        <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl">
              <i className="ri-mail-send-fill"></i>
            </div>
            <h3 className="font-bold text-gray-900 text-xl">Email</h3>
            <p className="font-semibold text-gray-900 text-sm break-all">
              Sammy2007bright@gmail.com
            </p>
          </div>

          <div className="pt-2 flex items-center gap-2">
            <a
              href="mailto:Sammy2007bright@gmail.com"
              className="flex-1 text-center py-2.5 px-3 bg-black hover:bg-gray-800 text-white text-xs font-semibold rounded-xl transition"
            >
              Send Email
            </a>
            <button
              onClick={copyEmail}
              className="py-2.5 px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-xl transition"
              title="Copy to clipboard"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* WhatsApp & Phone Card */}
        <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl">
              <i className="ri-whatsapp-fill"></i>
            </div>
            <h3 className="font-bold text-gray-900 text-xl">WhatsApp & Phone</h3>
            <p className="font-semibold text-gray-900 text-sm">+234 9070685246</p>
          </div>

          <div className="pt-2">
            <a
              href="https://wa.me/qr/HZ3MKMKKDZRHJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl transition"
            >
              <i className="ri-whatsapp-fill text-base"></i>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Location Card */}
        <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl">
              <i className="ri-map-pin-2-fill"></i>
            </div>
            <h3 className="font-bold text-gray-900 text-xl">Location</h3>
            <p className="font-semibold text-gray-900 text-sm">Lagos, Nigeria</p>
          </div>

          <div className="pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 text-gray-700 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Open to Remote & Global Work</span>
            </span>
          </div>
        </div>
      </div>

      {/* Social Networks Grid — Full Width */}
      <div className="w-full space-y-6">
        <h2 className="text-2xl font-extrabold text-gray-900">Connect Across Social Channels</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-2xl bg-white border border-gray-200 text-gray-800 transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md ${social.color} group`}
            >
              <div className="flex items-center justify-between">
                <i className={`${social.icon} text-3xl`}></i>
                <i className="ri-arrow-right-up-line text-sm opacity-50 group-hover:opacity-100 transition"></i>
              </div>
              <div className="mt-4">
                <h4 className="font-bold text-base">{social.name}</h4>
                <p className="text-xs opacity-70 mt-0.5">{social.tag}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Full Width Banner */}
      <div className="w-full p-8 md:p-12 rounded-3xl bg-black text-white space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-white/10 pb-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Availability Status</h3>
            <p className="text-sm text-gray-400 mt-1">Currently open to frontend developer roles & projects.</p>
          </div>
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold w-fit">
            Ready to Start
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <i className="ri-check-line text-emerald-400 text-lg"></i>
            <span>Frontend Development</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-check-line text-emerald-400 text-lg"></i>
            <span>Remote Friendly</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-check-line text-emerald-400 text-lg"></i>
            <span>Freelance Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-check-line text-emerald-400 text-lg"></i>
            <span>Full-Time Internships</span>
          </div>
        </div>

        <div className="pt-4 flex flex-wrap gap-4 items-center justify-between">
          <p className="text-xs text-gray-400">
            Responds within 24 hours.
          </p>
          <Link
            to="/Projects"
            className="text-sm font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
          >
            <span>View All 6 Websites First</span>
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
