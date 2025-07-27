import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-display font-bold text-xl bg-gradient-primary bg-clip-text text-transparent mb-4 md:mb-0">
            Portfolio
          </div>
          <div className="flex gap-4 mb-4 md:mb-0">
            <a href="https://github.com/Megesh95" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/megeshwar-j-b-40404a28b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
          <div className="text-muted-foreground text-sm text-center md:text-left">
            © 2024 Megeshwar JB. All rights reserved. Built with React & Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;