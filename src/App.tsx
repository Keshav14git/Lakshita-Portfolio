import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const githubId = "lakshita78";
  const email = "lakshitaashwani14@gmail.com";
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="#08080a" stroke="#93c5fd" stroke-width="4"/><path d="M40 30 V70 H60" stroke="#f9a8d4" stroke-width="8" fill="none" stroke-linecap="round"/></svg>`;
    const link = (document.querySelector("link[rel~='icon']") as HTMLLinkElement) || document.createElement('link');
    link.href = `data:image/svg+xml;base64,${btoa(svg)}`;
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  const projects = [
    {
      title: "PicsBoard",
      desc: "MERN Image Sharing Platform",
      details: [
        "Designed and developed a full-stack social application with secure user authentication and a modern, responsive UI.",
        "Implemented dynamic galleries with user registration, image upload, and delete features using scalable RESTful APIs.",
        "Ensured maintainable architecture using MERN stack patterns and reusable React components."
      ],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      color: "bg-blue-100/5 border-blue-200/10"
    },
    {
      title: "NeuroTask",
      desc: "Full Stack Task Manager",
      details: [
        "Built a productivity web app enabling intuitive CRUD operations with robust user authentication and protected routes.",
        "Delivered real-time task management workflows with modular REST APIs and responsive, mobile-friendly design.",
        "Utilized MERN stack to create a seamless end-to-end user experience and clean separation of concerns."
      ],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      color: "bg-purple-100/5 border-purple-200/10"
    },
    {
      title: "ByteByer",
      desc: "E-Commerce Prototype",
      details: [
        "Developed an online store featuring product catalog, shopping cart, checkout flow, and basic admin dashboard.",
        "Engineered RESTful APIs for a modular backend and used React Context for advanced state management.",
        "Demonstrated strong understanding of full-stack architecture for real-world e-commerce use cases."
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      color: "bg-pink-100/5 border-pink-200/10"
    }
  ];

  return (
    <div className="min-h-screen bg-[#08080a] text-[#f0f0f0] font-sans selection:bg-pink-300 selection:text-black">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-pink-400 origin-left z-50" style={{ scaleX }} />

      <main className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-16">
        
        {/* --- HERO SECTION --- */}
        <header className="flex flex-col md:flex-row items-center justify-between gap-16 mb-48 pt-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 leading-[0.9] mb-4">
              Lakshita Ashwani
            </h1>
            <p className="text-lg md:text-xl uppercase tracking-[0.5em] font-medium text-gray-500 mb-10">
              Full Stack Web Developer
            </p>
            <div className="flex flex-wrap gap-8 text-[11px] font-bold tracking-[0.4em]">
              <a href={`mailto:${email}`} className="text-blue-300 hover:text-white transition underline underline-offset-8 decoration-blue-500/30">Email</a>
              <a href={`https://github.com/${githubId}`} target="_blank" rel="noreferrer" className="text-pink-300 hover:text-white transition underline underline-offset-8 decoration-pink-500/30">GitHub</a>
              <a href="https://linkedin.com/in/lakshita-ashwani-b3b038250" target="_blank" rel="noreferrer" className="text-purple-300 hover:text-white transition underline underline-offset-8 decoration-purple-500/30">LinkedIn</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative w-64 h-80 md:w-72 md:h-96 shrink-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-pink-400/20 rounded-[3rem] blur-2xl" />
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <img src="/profile.jpg" alt="Lakshita" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </motion.div>
        </header>

        {/* --- EXPERTISE --- */}
        <section className="mb-48">
          <h2 className="text-[10px] uppercase tracking-[0.8em] text-gray-600 mb-12 font-black italic">Expertise</h2>
          <div className="p-10 md:p-16 rounded-[4rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl">
            <div className="flex flex-wrap gap-4 justify-center">
              {["Java", "JavaScript", "React.js", "Node.js", "Express", "MongoDB", "DSA", "DBMS", "RESTful APIs"].map((skill) => (
                <motion.span 
                  key={skill} 
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.05)", color: "#fff" }}
                  className="px-8 py-5 md:px-10 md:py-6 border border-white/10 rounded-full text-lg md:text-2xl font-bold text-gray-500 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* --- EDUCATION & CERTIFICATIONS (BENTO GRID) --- */}
        <section className="mb-48">
          <h2 className="text-[10px] uppercase tracking-[0.8em] text-gray-600 mb-12 font-black italic">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Education 1 */}
            <div className="md:col-span-2 p-12 rounded-[3.5rem] border border-blue-200/10 bg-blue-100/5">
              <span className="text-[10px] font-mono text-blue-300 block mb-6 uppercase tracking-widest">2022 — 2026</span>
              <h3 className="text-4xl font-bold text-white mb-4 uppercase tracking-tighter leading-tight">JECRC University</h3>
              <p className="text-gray-400 text-lg">B.Tech in Computer Science & Engineering</p>
            </div>

            {/* Schooling */}
            <div className="p-12 rounded-[3.5rem] border border-white/5 bg-white/[0.02]">
              <span className="text-[10px] font-mono text-gray-500 block mb-6 uppercase tracking-widest">Schooling</span>
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tighter">DAV Public School</h3>
              <div className="space-y-4 text-xs uppercase tracking-widest text-gray-500">
                <p className="flex justify-between border-b border-white/5 pb-2">Class 12 <span className="text-white font-black italic">79%</span></p>
                <p className="flex justify-between">Class 10 <span className="text-white font-black italic">82.4%</span></p>
              </div>
            </div>

            {/* Certifications (Bento style) */}
            <div className="md:col-span-3 p-12 rounded-[4rem] border border-pink-200/10 bg-pink-100/5 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div>
                <h3 className="text-4xl font-black uppercase text-pink-200 tracking-tighter">Certifications</h3>
                <p className="text-xs text-pink-300/40 uppercase tracking-[0.3em] mt-2 italic">Verified Achievements</p>
              </div>
              <div className="md:col-span-2 flex flex-wrap gap-6">
                {[
                  { name: "React Full Course", org: "Scaler Topics", date: "Nov 2025" },
                  { name: "SQL Skill Up", org: "GeeksForGeeks", date: "Sep 2025" },
                  { name: "NPTEL E-Business", org: "IIT Kharagpur", date: "Apr 2024" },
                  { name: "Smart India Hackathon", org: "Qualified", date: "Sep 2023" }
                ].map((c, idx) => (
                  <div key={idx} className="bg-black/20 p-6 rounded-3xl border border-white/5 flex-1 min-w-[200px]">
                    <p className="text-white font-bold text-sm mb-1">{c.name}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">{c.org} • {c.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- PROJECTS --- */}
        <section className="mb-48">
          <h2 className="text-[10px] uppercase tracking-[0.8em] text-gray-600 mb-12 font-black italic">Selected Work</h2>
          <div className="grid grid-cols-1 gap-12">
            {projects.map((p, i) => (
              <motion.div key={i} whileHover={{ scale: 0.99 }} className={`p-10 md:p-16 rounded-[4rem] border ${p.color} flex flex-col md:flex-row gap-12 transition-all duration-500`}>
                <div className="flex-1">
                  <h3 className="text-5xl font-bold text-white mb-4 tracking-tighter uppercase leading-none">{p.title}</h3>
                  <p className="text-blue-200/60 text-sm mb-8 uppercase tracking-widest font-bold">{p.desc}</p>
                  <ul className="space-y-4">
                    {p.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-400 text-lg leading-relaxed font-light list-disc list-inside marker:text-pink-400">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap md:flex-col gap-3 justify-end h-min min-w-[150px]">
                  {p.tech.map(t => <span key={t} className="px-5 py-2 bg-white/5 rounded-full text-[10px] uppercase tracking-widest text-gray-500 border border-white/5 text-center md:text-right">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] font-black tracking-[0.5em] text-gray-700 uppercase">
           <p>LAKSHITA ASHWANI © 2026</p>
           <div className="flex gap-10">
             <a href="https://leetcode.com/lakshitaashwani" className="hover:text-white transition decoration-white/20 underline underline-offset-8">LeetCode</a>
             <a href={`https://github.com/${githubId}`} className="hover:text-white transition decoration-white/20 underline underline-offset-8">GitHub</a>
           </div>
        </footer>
      </main>
    </div>
  );
};

export default App;