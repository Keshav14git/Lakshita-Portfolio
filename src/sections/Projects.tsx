import Section from '../components/Section';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'Portfolio Website',
            description: 'Designed and developed a professional, responsive portfolio website to showcase technical skills and projects. Implemented modern UI/UX principles and efficient front-end component structure.',
            tech: ['React.js', 'HTML', 'CSS'],
            image: 'https://placehold.co/600x400/112240/64ffda?text=Portfolio+Website',
            github: '#',
            demo: '#',
        },
        {
            title: 'NeuroTask',
            description: 'Built a productivity app enabling intuitive CRUD operations with robust user authentication. Delivered real-time task management with modular REST APIs and responsive design. Utilized MERN Stack to create a seamless end-to-end user experience.',
            tech: ['MERN Stack'],
            image: 'https://placehold.co/600x400/112240/64ffda?text=NeuroTask',
            github: '#',
            demo: '#',
        },
        {
            title: 'ByteByer',
            description: 'Developed an online store featuring product catalog, shopping cart, checkout flow, and admin dashboard. Explicitly utilized React Context for advanced state management and engineered RESTful APIs for a modular, maintainable backend.',
            tech: ['React.js', 'RESTful APIs'],
            image: 'https://placehold.co/600x400/112240/64ffda?text=ByteByer',
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
                    <div key={index} className="bg-secondary rounded shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col h-full group border border-transparent hover:border-accent/20 overflow-hidden">
                        <div className="h-48 overflow-hidden relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-primary/30 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>

                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-textPrimary group-hover:text-accent transition-colors">{project.title}</h3>
                                <div className="flex gap-4 text-textSecondary">
                                    <a href={project.github} className="hover:text-accent transition-colors" aria-label="GitHub Repo"><FaGithub size={20} /></a>
                                    <a href={project.demo} className="hover:text-accent transition-colors" aria-label="Live Demo"><FaExternalLinkAlt size={20} /></a>
                                </div>
                            </div>

                            <p className="text-textSecondary mb-6 flex-grow text-sm leading-relaxed">{project.description}</p>

                            <ul className="flex flex-wrap gap-3 text-xs font-mono text-textSecondary/80">
                                {project.tech.map(t => <li key={t} className="bg-primary/50 px-2 py-1 rounded text-accent">{t}</li>)}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
