import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Database, 
  Cloud, 
  Zap,
  Globe,
  Users
} from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'Cloud Services', level: 75 },
  ];

  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: 'Frontend Development',
      description: 'Modern, responsive web applications using React, Next.js, and cutting-edge technologies.'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Backend Development',
      description: 'Scalable server-side solutions with Node.js, Python, and cloud-native architectures.'
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that provide exceptional user experiences.'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications that work seamlessly across all devices.'
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud Solutions',
      description: 'Deployment and management of applications on AWS, Azure, and other cloud platforms.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Performance Optimization',
      description: 'Fast, efficient applications optimized for performance and user experience.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with 5+ years of experience creating digital solutions 
            that combine technical excellence with beautiful design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Personal Info */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate full-stack developer who loves turning ideas into reality through code. 
              With expertise in modern web technologies and a keen eye for design, I create applications 
              that are not only functional but also visually stunning.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="glow-secondary">
                <Globe className="mr-2 h-4 w-4" />
                Remote Available
              </Badge>
              <Badge variant="outline" className="glow-primary">
                <Users className="mr-2 h-4 w-4" />
                Team Player
              </Badge>
              <Badge variant="outline" className="glow-accent">
                <Zap className="mr-2 h-4 w-4" />
                Fast Learner
              </Badge>
            </div>
          </div>

          {/* Skills */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out group-hover:glow-primary"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="animate-slide-up">
          <h3 className="text-3xl font-bold text-center mb-12">What I Do</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="bg-card-gradient border-border hover:border-primary transition-smooth group cursor-pointer transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-primary mb-4 group-hover:glow-primary transition-smooth">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;