import Section from '../components/Section';
import { FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiNodedotjs } from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frameworks / Tools',
            description: 'End-to-end web application development expertise',
            skills: [
                { name: 'React.js', icon: <FaReact /> },
                { name: 'MERN Stack', icon: <SiNodedotjs /> },
            ]
        },
        {
            title: 'Languages',
            description: 'Building interactive, responsive web applications',
            skills: [
                { name: 'Java', icon: <FaJava /> },
                { name: 'JavaScript', icon: <FaJs /> },
                { name: 'HTML', icon: <FaHtml5 /> },
                { name: 'CSS', icon: <FaCss3Alt /> },
            ]
        },
        {
            title: 'Core Concepts',
            description: 'Efficient problem-solving techniques for software development',
            skills: [
                { name: 'DSA', icon: <span className="font-bold text-xl">{ }</span> },
            ]
        },
        {
            title: 'Version Control',
            description: 'Collaborative code management and workflow',
            skills: [
                { name: 'Git', icon: <FaGitAlt /> },
                { name: 'GitHub', icon: <FaGithub /> },
            ]
        }
    ];

    return (
        <Section id="skills">
            <h2 className="flex items-center text-2xl md:text-3xl font-bold text-textPrimary mb-12">
                <span className="text-accent font-mono text-xl mr-2">02.</span> Technical Skills
                <span className="h-[1px] bg-secondary flex-grow ml-4 max-w-[200px]"></span>
            </h2>

            <div className="grid gap-8">
                {skillCategories.map((category, idx) => (
                    <div key={idx}>
                        <h3 className="text-xl font-bold text-textPrimary mb-1">{category.title}</h3>
                        <p className="text-textSecondary text-sm mb-4 italic">{category.description}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {category.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="bg-secondary p-4 rounded shadow hover:-translate-y-1 transition-transform duration-300 flex items-center gap-3"
                                >
                                    <div className="text-2xl text-accent">
                                        {skill.icon}
                                    </div>
                                    <span className="text-textPrimary font-medium text-sm">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
