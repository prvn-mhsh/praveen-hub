import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Github, 
  Linkedin, 
  Twitter, 
  Send,
  MessageCircle
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      value: 'praveenmahesh06@gmail.com',
      href: 'mailto:praveenmahesh06@gmail.com'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: 'Phone',
      value: '+91 8778890942',
      href: 'tel:+918778890942'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: 'Location',
      value: 'Chennai, TN',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-foreground'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-primary'
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      label: 'Twitter',
      href: 'https://twitter.com',
      color: 'hover:text-accent'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-in-left">
            <Card className="bg-card-gradient border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MessageCircle className="mr-3 h-6 w-6 text-primary" />
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border focus:border-primary transition-smooth"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border focus:border-primary transition-smooth"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border focus:border-primary transition-smooth"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border focus:border-primary transition-smooth resize-none"
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Contact Information */}
            <Card className="bg-card-gradient border-border">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-4 text-muted-foreground hover:text-foreground transition-smooth group"
                  >
                    <div className="text-primary group-hover:glow-primary transition-smooth">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card-gradient border-border">
              <CardHeader>
                <CardTitle className="text-xl">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground ${social.color} transition-smooth transform hover:scale-110 glow-primary`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Follow me for updates on my latest projects and tech insights.
                </p>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-card-gradient border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Quick Response</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Need a quick answer? Reach out directly and I'll respond within 24 hours.
                </p>
                <Button variant="outline" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Quick Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;