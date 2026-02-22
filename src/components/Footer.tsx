import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gradient mb-2">Portfolio</h3>
            <p className="text-muted-foreground text-sm">
              Building digital experiences that make a difference.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:glow-primary transition-smooth">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:glow-primary transition-smooth">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:glow-primary transition-smooth">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* Back to Top */}
          <div className="flex justify-center md:justify-end">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={scrollToTop}
              className="hover:glow-primary transition-smooth"
            >
              <ArrowUp className="mr-2 h-4 w-4" />
              Back to Top
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p className="flex items-center mb-4 md:mb-0">
            © {currentYear} Portfolio. Made with 
            <Heart className="mx-2 h-4 w-4 text-red-500 animate-pulse" />
            and lots of Love.
          </p>
          <p>
            Designed & Developed by{' '}
            <span className="text-gradient font-medium">Praveen</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;