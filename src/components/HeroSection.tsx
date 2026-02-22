import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import ShaderBackground from './cybernetic-shader';
import id from '@/assets/id-card.png';
import TypewriterText from "@/components/TypewriterText";
import ScrambledText from "@/components/ui/ScrambledText";
import SplitText from "@/components/SplitText";
import Shuffle from '@/components/ShuffleText';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
 const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv/cv.pdf"; 
    link.download = "Praveen_CV.pdf"; 
    link.click();
  };
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-32 lg:pt-40"
    >

      {/* Background Image */}
      <div >
        <ShaderBackground />
        {/* <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-hero"></div> */}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
            <SplitText
              text="Hello, I'm"
              className="block"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
            />
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-center">
          <Shuffle
            text="Praveen"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
          />
</h2>

          <div className="text-2xl md:text-3xl font-semibold mb-2">
            I'm a
            <TypewriterText
              words={["Fullstack Developer", "Web Developer"]}
              typingSpeed={100}
              deletingSpeed={50}
              delayBetween={1500}
              className="text-primary ml-2"
            />
          </div>
        </div>

        <div
          className="animate-slide-up mt-2"
          style={{ animationDelay: '0.2s' }}
        >
          <ScrambledText
            className="scrambled-text-demo max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
          >
            I'm someone who immerses themselves in the world of programming and
            <br/>development, constantly exploring new tech stacks. Crafting code to
            turn ideas into reality
          </ScrambledText>
        </div>

        <div
          className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
          style={{ animationDelay: '0.4s' }}
        >
          <Button
            variant="hero"
            size="lg"
            onClick={() => scrollToSection('#projects')}
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>

          <Button variant="outline" size="lg" onClick={handleDownload}>
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>

          <Button
            variant="accent"
            size="lg"
            onClick={() => scrollToSection('#contact')}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection('#about')}
            className="rounded-full"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
