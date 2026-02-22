import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

/* -------------------- IMAGE CAROUSEL COMPONENT -------------------- */
const ImageCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  // Optional auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <div className="relative w-full aspect-video overflow-hidden flex items-center justify-center bg-black/5">
      {/* Images */}
      {images.map((img, index) => (
        <img
          key={img}
          src={img}
          alt={`Slide ${index}`}
          className={`absolute inset-0 mx-auto my-auto max-w-full max-h-full transition-opacity duration-700 object-contain ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-1 hover:bg-black/60 transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-1 hover:bg-black/60 transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  index === current ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

/* -------------------- MAIN PROJECTS SECTION -------------------- */
const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Medihub - Ascendsoft',
      description:
        'An advanced healthcare management system featuring patient and doctor onboarding, video doctor consultation with smooth payment integration.',
      images: ['/emedihub-1.png', '/emedihub-2.png'],
      tech: ['React', 'Node.js', 'Tailwind CSS'],
      featured: true,
    },
    {
      title: 'School Management System - Scottech Technologies',
      description:
        'A comprehensive school management system with features for student, teacher, and parent enrollment, attendance tracking, library management, and grade management.',
      images: ['/school-1.png', '/school-2.png', '/school-3.png'],
      tech: ['Next.js', 'TypeScript', 'MongoDB', 'Prisma'],
      featured: true,
    },
    {
      title: 'Twixt - UI',
      description:
        'Developed an reusable components similar to material UI including Icons, Header, Sidebar, Modal, Dialog, Switch, Checkbox, Simple Table. Created Storybook documentation for each component for easy integration and usage reference.',
      images: ['/placeholder.svg'],
      tech: ['React',  'Tailwind CSS', 'Storybook','NPM'],
      featured: false,
    },
    {
      title: 'Praveen Hub',
      description:
        'A responsive portfolio website showcasing creative animations and modern design patterns.',
      images: ['/placeholder.svg'],
      tech: ['React', 'Framer Motion', 'Three.js', 'Tailwind CSS'],
      github: '#',
      live: '#',
      featured: false,
    },
    {
      title: 'Chat Application',
      description:
        'Real-time messaging app with file sharing, group chats, and end-to-end encryption.',
      images: ['/placeholder.svg'],
      tech: ['Socket.io', 'Express', 'React', 'Redis'],
      github: 'https://github.com/prvn-mhsh/secure-chat',
      live: 'https://prvn-mhsh.github.io/secure-chat/',
      featured: false,
    },
    // {
    //   title: 'AI Image Generator',
    //   description:
    //     'An AI-powered image generation tool with custom prompts and style transfer capabilities.',
    //   images: ['/placeholder.svg'],
    //   tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    //   github: '#',
    //   live: '#',
    //   featured: false,
    // },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Work Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating technical skills and creative problem-solving.
          </p>
        </div>

        {/* Featured Projects with Carousel */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card-gradient border-border hover:border-primary transition-smooth group overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <ImageCarousel images={project.images} />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-gradient transition-smooth">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* <div className="flex gap-3 pt-2">
                  <Button variant="default" size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="animate-slide-up">
          <h3 className="text-3xl font-bold text-center mb-12">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {otherProjects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-card-gradient border-border hover:border-primary transition-smooth group cursor-pointer transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-gradient transition-smooth flex items-center justify-between">
                    {project.title}
                    <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center">
            <Button variant="outline" size="lg">
              View All Projects on GitHub
              <Github className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
