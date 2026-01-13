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
                    <div key={idx} className="mb-8">
                        <h3 className="text-xl font-bold text-textPrimary mb-1">{category.title}</h3>
                        <p className="text-textSecondary text-sm mb-4 italic">{category.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                            {category.skills.map((skill) => (
                                <div key={skill.name} className="bg-secondary/50 p-4 rounded hover:bg-secondary transition-colors duration-300">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="text-2xl text-accent">
                                            {skill.icon}
                                        </div>
                                        <span className="text-textPrimary font-medium">{skill.name}</span>
                                    </div>
                                    <div className="w-full bg-primary h-2 rounded-full overflow-hidden">
                                        <div
                                            className="bg-accent h-full rounded-full"
                                            style={{ width: '85%' }} // Placeholder width, could be dynamic
                                        ></div>
                                    </div>
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
