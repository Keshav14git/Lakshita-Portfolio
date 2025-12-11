import Section from '../components/Section';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'Portfolio Website',
            description: 'Designed and developed a professional, responsive portfolio website to showcase technical skills and projects. Implemented modern UI/UX principles and efficient front-end component structure.',
            tech: ['React.js', 'HTML', 'CSS'],
            github: '#',
            demo: '#',
        },
        {
            title: 'NeuroTask',
            description: 'Built a productivity app enabling intuitive CRUD operations with robust user authentication. Delivered real-time task management with modular REST APIs and responsive design. Utilized MERN Stack to create a seamless end-to-end user experience.',
            tech: ['MERN Stack'],
            github: '#',
            demo: '#',
        },
        {
            title: 'ByteByer',
            description: 'Developed an online store featuring product catalog, shopping cart, checkout flow, and admin dashboard. Engineered RESTful APIs for modular, maintainable backend and React Context for advanced state management.',
            tech: ['React.js', 'RESTful APIs'],
            github: '#',
            demo: '#',
        },
    ];

    return (
        <Section id="projects">
            <h2 className="flex items-center text-2xl md:text-3xl font-bold text-textPrimary mb-12">
                <span className="text-accent font-mono text-xl mr-2">03.</span> Some Things I've Built
                <span className="h-[1px] bg-secondary flex-grow ml-4 max-w-[200px]"></span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-secondary p-8 rounded shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
                        <div className="flex justify-between items-center mb-6">
                            <div className="text-accent text-4xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                </svg>
                            </div>
                            <div className="flex gap-4 text-textSecondary">
                                <a href={project.github} className="hover:text-accent transition-colors"><FaGithub size={20} /></a>
                                <a href={project.demo} className="hover:text-accent transition-colors"><FaExternalLinkAlt size={20} /></a>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-textPrimary mb-2 group-hover:text-accent">{project.title}</h3>
                        <p className="text-textSecondary mb-6 flex-grow">{project.description}</p>

                        <ul className="flex flex-wrap gap-3 text-xs font-mono text-textSecondary/80">
                            {project.tech.map(t => <li key={t}>{t}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
