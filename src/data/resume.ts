import React from 'react';
import { resumeData } from './data/resume'; // Must be in curly braces { }
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="bg-[#050505] text-white p-10">
      <h1>{resumeData.name}</h1>
      
      {/* ADD A DOWNLOAD BUTTON FOR THE ACTUAL PDF */}
      <a 
        href={resumeData.pdfUrl} 
        download 
        className="px-6 py-2 border border-white hover:bg-white hover:text-black transition"
      >
        Download Resume PDF
      </a>

      {/* Map through projects to avoid repeating code */}
      {resumeData.projects.map((project) => (
        <div key={project.title} className="mt-10">
          <h2>{project.title}</h2>import React from 'react';
import { resumeData } from './data/resume'; // Must be in curly braces { }
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="bg-[#050505] text-white p-10">
      <h1>{resumeData.name}</h1>
      
      {/* ADD A DOWNLOAD BUTTON FOR THE ACTUAL PDF */}
      <a 
        href={resumeData.pdfUrl} 
        download 
        className="px-6 py-2 border border-white hover:bg-white hover:text-black transition"
      >
        Download Resume PDF
      </a>

      {/* Map through projects to avoid repeating code */}
      {resumeData.projects.map((project) => (
        <div key={project.title} className="mt-10">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default App;