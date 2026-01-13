import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-6 backdrop-blur-sm bg-background/50 border-b border-white/5">
      <span className="text-sm font-bold tracking-widest uppercase">LA</span>
      <div className="flex gap-8 text-[10px] uppercase tracking-widest font-medium text-gray-400">
        <a href="#work" className="hover:text-white transition">Work</a>
        <a href="#skills" className="hover:text-white transition">Skills</a>
        <a href="#education" className="hover:text-white transition">Education</a>
      </div>
    </nav>
  );
};

export default Navbar;