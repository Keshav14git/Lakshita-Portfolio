import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-textSecondary text-sm">
            <div className="flex justify-center gap-6 mb-4">
                <a href="#" className="hover:text-accent transition-colors"><FaGithub size={20} /></a>
                <a href="#" className="hover:text-accent transition-colors"><FaLinkedin size={20} /></a>
                <a href="#" className="hover:text-accent transition-colors"><FaTwitter size={20} /></a>
                <a href="#" className="hover:text-accent transition-colors"><FaInstagram size={20} /></a>
            </div>
            <p className="font-mono">
                Designed & Built by Laksh
            </p>
        </footer>
    );
};

export default Footer;
