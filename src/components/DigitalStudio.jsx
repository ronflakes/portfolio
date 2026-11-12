import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TbExternalLink, TbPlayerPlayFilled } from "react-icons/tb";

// type: "video" = file in public/studio (hover preview + modal player)
//       "youtube" = embedded from YouTube in the modal
//       "site" = opens the live website in a new tab
const works = [
  // Digital Twins
  { id: 1, category: "Digital Twins", type: "video", src: "studio/course-twin.mp4", poster: "studio/course-twin.jpg",
    title: "Digital Twin E-Learning Module",
    description: "The client's digital twin presents a leadership course module, with on-screen frameworks and B-roll layered in.",
    tags: ["Digital Twin", "eLearning", "Kinetic text"] },
  { id: 2, category: "Digital Twins", type: "video", src: "studio/founder-story.mp4", poster: "studio/founder-story.jpg",
    title: "Founder Story Ad",
    description: "A founder-story ad for Modernisation Solutions, presented by a digital twin with cutaways and kinetic text.",
    tags: ["Digital Twin", "Video ad"] },
  { id: 3, category: "Digital Twins", type: "video", src: "studio/real-estate.mp4", poster: "studio/real-estate.jpg",
    title: "One Twin, Any Location",
    description: "A digital twin walks through a property listing, showing how one recording can be placed into new scenes.",
    tags: ["Digital Twin", "Real estate"] },
  { id: 4, category: "Digital Twins", type: "video", src: "studio/any-scene.mp4", poster: "studio/any-scene.jpg", vertical: true,
    title: "One Presenter, Any Scene",
    description: "A vertical social ad where the same presenter shows up on a beach, on a plane and on a premium set.",
    tags: ["Digital Twin", "Vertical", "Social ad"] },
  { id: 5, category: "Digital Twins", type: "video", src: "studio/three-presenters.mp4", poster: "studio/three-presenters.jpg", vertical: true,
    title: "Three Presenters, One Message",
    description: "Three different digital presenters deliver the same brand message in one vertical ad.",
    tags: ["Digital Twin", "Vertical", "Social ad"] },

  // Motion Graphics
  { id: 6, category: "Motion Graphics", type: "video", src: "studio/plate.mp4", poster: "studio/plate.jpg",
    title: "The One Who Fills the Plates",
    description: "A 2-minute paper-cutout motion graphics story about a young man who rebuilds his family's life with AI. Built in code with Claude.",
    tags: ["Motion graphics", "Storytelling", "Made with Claude"] },
  { id: 7, category: "Motion Graphics", type: "video", src: "studio/beyond-the-avatar.mp4", poster: "studio/beyond-the-avatar.jpg",
    title: "Beyond the Avatar",
    description: "Kinetic type, data visuals and a digital twin presenter combined in one branded promo.",
    tags: ["Motion graphics", "Kinetic type", "Digital Twin"] },
  { id: 8, category: "Motion Graphics", type: "video", src: "studio/how-it-works.mp4", poster: "studio/how-it-works.jpg", vertical: true,
    title: "How a Digital Twin Works",
    description: "A vertical animated explainer where a mascot walks viewers through the digital twin process, step by step.",
    tags: ["Animated explainer", "Mascot", "Vertical"] },
  { id: 15, category: "Motion Graphics", type: "youtube", youtubeId: "M0svE3nHnTg",
    title: "Innodata TCP Showcase",
    description: "A 5-minute motion graphics reel presenting Innodata's technical writing practice and its client work for Ericsson, EA, Dell, Sharecare and Blackboard.",
    tags: ["Motion graphics", "Kinetic type", "Corporate"] },

  // Films & Edits (YouTube)
  { id: 9, category: "Films & Edits", type: "youtube", youtubeId: "e0QIIg43tew",
    title: "KAGAT: Isang Kagat Lang",
    description: "Episode 1 of KAGAT, my Filipino zombie drama series made with AI.",
    tags: ["AI film", "Series", "Filipino"] },
  { id: 10, category: "Films & Edits", type: "youtube", youtubeId: "_3UOT4jriDE",
    title: "Diwata",
    description: "An AI-generated music video released on my YouTube channel.",
    tags: ["Music video", "AI-generated"] },
  { id: 16, category: "Films & Edits", type: "youtube", youtubeId: "Op7gxCue2KU",
    title: "Parang Kailan Lamang ang Minsan",
    description: "An AI-generated music video released on my YouTube channel.",
    tags: ["Music video", "AI-generated"] },
  { id: 11, category: "Films & Edits", type: "youtube", youtubeId: "qlkSKfW5Ygw",
    title: "The Friend You Stopped Calling",
    description: "A faceless storytelling video for my YouTube channel Lonely Hours Club, with AI visuals, AI voice and a full edit.",
    tags: ["Faceless channel", "Mental health", "AI visuals"] },
  { id: 12, category: "Films & Edits", type: "youtube", youtubeId: "Lfd7P2YlUkA",
    title: "Did Celina Home Prices Really Crash?",
    description: "A data-driven YouTube edit for a North Dallas real estate channel, breaking down 24,000 home sales.",
    tags: ["Video editing", "YouTube", "Real estate"] },

  // Websites
  { id: 13, category: "Websites", type: "site", src: "studio/site-modernisation.mp4", poster: "studio/site-modernisation.jpg",
    link: "https://modernisationsolutions.com.au/",
    title: "Modernisation Solutions",
    description: "Website for an Australian digital twin video and eLearning studio. I built the site and produced the videos on it.",
    tags: ["React", "Vite", "Tailwind", "Netlify"] },
  { id: 14, category: "Websites", type: "site", src: "studio/site-apex.mp4", poster: "studio/site-apex.jpg",
    link: "https://apexdynamics.net.au/",
    title: "Apex Dynamics",
    description: "Website for a leadership and team performance coaching company.",
    tags: ["React", "Vite", "Tailwind", "Framer Motion", "Netlify"] },
];

const tabs = ["All", "Digital Twins", "Motion Graphics", "Films & Edits", "Websites"];

const track = (action, label) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", action, { event_category: "Digital Studio", event_label: label });
  }
};

function Thumb({ work }) {
  const videoRef = useRef(null);
  const poster = work.type === "youtube" ? `https://i.ytimg.com/vi/${work.youtubeId}/hqdefault.jpg` : work.poster;

  // Preview plays muted on hover only, so the page does not download every video up front.
  const play = () => videoRef.current?.play().catch(() => {});
  const stop = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-neutral-900" onMouseEnter={play} onMouseLeave={stop}>
      {work.type === "youtube" ? (
        <img src={poster} alt={work.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      ) : (
        <video
          ref={videoRef}
          src={work.src}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          className={`w-full h-full group-hover:scale-105 transition-transform duration-500 ${work.vertical ? "object-contain" : "object-cover object-top"}`}
        />
      )}
      {work.type !== "site" && (
        <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="w-11 h-11 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <TbPlayerPlayFilled size={20} />
          </span>
        </span>
      )}
    </div>
  );
}

export default function DigitalStudio() {
  const [tab, setTab] = useState("All");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const shown = useMemo(() => (tab === "All" ? works : works.filter((w) => w.category === tab)), [tab]);

  const open = (work) => {
    track(work.type === "site" ? "website_visit" : "video_play", work.title);
    if (work.type === "site") window.open(work.link, "_blank", "noopener,noreferrer");
    else setSelected(work);
  };

  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="studio">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        Digital <span className="font-extrabold">Studio</span>
      </h2>
      <p className="text-center text-gray-400 mt-3 max-w-4xl mx-auto text-sm lg:text-base">
        Digital twins, motion graphics, AI films and websites I've built beyond the course itself.
      </p>

      <div className="flex flex-wrap justify-center gap-2 lg:gap-3 mt-8">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
              tab === t ? "bg-white text-black border-white" : "text-white border-gray-600 hover:border-white"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-8 lg:mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {shown.map((work, index) => (
          <motion.button
            key={work.id}
            type="button"
            onClick={() => open(work)}
            className="group text-left bg-neutral-950 rounded-xl border border-gray-800 hover:border-gray-500 p-3 flex flex-col gap-3 transition-colors"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 12, delay: (index % 4) * 0.1 }}
            viewport={{ once: true }}
            aria-label={work.type === "site" ? `Visit ${work.title} website` : `Play ${work.title}`}
          >
            <Thumb work={work} />
            <div className="space-y-1.5">
              <p className="text-[10px] uppercase tracking-widest text-gray-500">{work.category}</p>
              <p className="font-bold text-white text-base flex items-center gap-2">
                {work.title}
                {work.type === "site" && <TbExternalLink size={16} className="shrink-0" />}
              </p>
              <p className="font-light text-xs/5 text-gray-300">{work.description}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {work.tags.map((tag) => (
                  <span key={tag} className="text-[10px] text-gray-300 border border-gray-700 rounded-full px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 lg:p-8"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <motion.div
            className={`relative w-full ${selected.vertical ? "max-w-sm" : "max-w-5xl"}`}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-11 right-0 bg-white text-black rounded-full w-9 h-9 flex items-center justify-center"
              aria-label="Close"
            >
              ✕
            </button>
            {selected.type === "youtube" ? (
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${selected.youtubeId}?autoplay=1&rel=0`}
                  title={selected.title}
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              </div>
            ) : (
              <video src={selected.src} poster={selected.poster} controls autoPlay playsInline className="w-full max-h-[80vh] rounded-lg bg-black" />
            )}
            <p className="text-white font-bold text-lg mt-3">{selected.title}</p>
            <p className="text-gray-300 text-sm">{selected.description}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
