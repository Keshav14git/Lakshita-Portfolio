import Section from '../components/Section';

const Contact = () => {
    return (
        <Section id="contact" className="text-center max-w-[600px]">
            <p className="text-accent font-mono mb-4">04. What's Next?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">Get In Touch</h2>
            <p className="text-textSecondary text-lg mb-12">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
            </p>

            <div className="bg-secondary p-8 rounded shadow-lg mb-8 text-left">
                <form
                    className="space-y-4"
                    action="https://formspree.io/f/YOUR_FORM_ID"
                    method="POST"
                >
                    <div>
                        <label htmlFor="name" className="block text-textPrimary mb-2 text-sm">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-primary border border-textSecondary/20 rounded p-3 text-textPrimary focus:border-accent outline-none transition-colors" placeholder="Your Name" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-textPrimary mb-2 text-sm">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-primary border border-textSecondary/20 rounded p-3 text-textPrimary focus:border-accent outline-none transition-colors" placeholder="your@email.com" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-textPrimary mb-2 text-sm">Message</label>
                        <textarea id="message" name="message" rows={4} className="w-full bg-primary border border-textSecondary/20 rounded p-3 text-textPrimary focus:border-accent outline-none transition-colors" placeholder="Hello..." required></textarea>
                    </div>
                    <button type="submit" className="w-full border border-accent text-accent py-3 rounded hover:bg-accent/10 transition-colors duration-300 font-mono">
                        Send Message
                    </button>
                </form>
            </div>

            <a
                href="mailto:lakshitaashwani14@gmail.com"
                className="text-accent hover:underline font-mono"
            >
                lakshitaashwani14@gmail.com
            </a>
        </Section>
    );
};

export default Contact;
