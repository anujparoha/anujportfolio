import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, ExternalLink, Code } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-hero-pattern relative overflow-hidden flex items-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <Badge className="mb-6 bg-gradient-primary text-primary-foreground px-4 py-2 text-sm font-medium">
            Available for Full-time Opportunities
          </Badge>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
            Anuj Paroha
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Full Stack Developer & Problem Solver
          </p>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            MTS Intern at GeeksforGeeks with expertise in MERN stack. 
            Passionate about building scalable web applications and solving complex problems.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>anujparoha2000@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>8225824277</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:bg-primary/10 transition-smooth px-8"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="#" 
              className="p-3 rounded-full bg-secondary/50 hover:bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            >
              <Linkedin className="h-5 w-5 group-hover:text-primary-foreground transition-colors" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-secondary/50 hover:bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            >
              <Github className="h-5 w-5 group-hover:text-primary-foreground transition-colors" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-secondary/50 hover:bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            >
              <Code className="h-5 w-5 group-hover:text-primary-foreground transition-colors" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
};