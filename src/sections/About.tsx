import Section from '../components/Section';

const About = () => {
    return (
        <Section id="about">
            <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-2/3">
                    <h2 className="flex items-center text-2xl md:text-3xl font-bold text-textPrimary mb-8">
                        <span className="text-accent font-mono text-xl mr-2">01.</span> About Me
                        <span className="h-[1px] bg-secondary flex-grow ml-4 max-w-[200px]"></span>
                    </h2>

                    <div className="text-textSecondary space-y-4 text-lg">
                        <p>
                            I am a passionate Full Stack Developer currently pursuing my B.Tech in Computer Science and Engineering.
                        </p>

                        <div className="mt-6">
                            <h3 className="text-xl font-bold text-textPrimary mb-2">Education</h3>
                            <div className="bg-secondary/50 p-4 rounded border-l-4 border-accent">
                                <h4 className="text-lg text-textPrimary font-semibold">Bachelor of Technology in Computer Science and Engineering</h4>
                                <p className="text-accent">JECRC University, Jaipur</p>
                                <p className="text-sm font-mono mt-1">2022 - 2026</p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-xl font-bold text-textPrimary mb-2">Soft Skills</h3>
                            <ul className="list-disc list-inside text-textSecondary">
                                <li>Communication</li>
                                <li>Team Management</li>
                                <li>Problem Solving</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/3 flex justify-center">
                    <div className="relative group">
                        <div className="absolute inset-0 border-2 border-accent rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                        <div className="relative bg-accent/20 rounded overflow-hidden w-64 h-64 md:w-72 md:h-72">
                            {/* Placeholder for profile image */}
                            <div className="w-full h-full bg-secondary flex items-center justify-center text-textSecondary text-center p-4">
                                <span className="font-mono text-sm">Add your photo here</span>
                            </div>
                            <div className="absolute inset-0 bg-accent/20 hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
