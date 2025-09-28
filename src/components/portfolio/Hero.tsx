import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
} from "lucide-react";
import { Slot } from "@radix-ui/react-slot"

export const Hero = () => {
  return (
    <section className="min-h-screen bg-hero-pattern relative overflow-hidden flex items-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <Badge className="mb-6 bg-gradient-primary text-primary-foreground px-4 py-2 text-sm font-medium animate-fade-in hover-lift">
            Available for Full-time Opportunities
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight animate-scale-in">
            Anuj Paroha
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium animate-fade-in stagger-animation"
            style={{ "--stagger": "1" } as any}
          >
            Full Stack Developer & Problem Solver
          </p>

          {/* Description */}
          <p
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in stagger-animation"
            style={{ "--stagger": "2" } as any}
          >
            Experienced in software development with a focus on creating
            scalable solutions and solving problems. Passionate about building
            impactful applications and learning continuously.
          </p>

          {/* Contact Info */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground animate-fade-in stagger-animation"
            style={{ "--stagger": "3" } as any}
          >
            <div className="flex items-center gap-2 hover-lift">
              <Mail className="h-4 w-4" />
              <span>anujparoha2000@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 hover-lift">
              <Phone className="h-4 w-4" />
              <span>8225824277</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in stagger-animation"
            style={{ "--stagger": "4" } as any}
          >
            <a href="https://github.com/anujparoha" target="_blank">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 hover-lift hover:scale-105"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Projects
              </Button>
            </a>
           <Button
  variant="outline"
  size="lg"
  className="border-primary/50 hover:bg-primary/10 transition-all px-8 transform hover:-translate-y-1 hover:scale-105"
  asChild
>
  <a
  href="mailto:anujparohaji@gmail.com?subject=Portfolio%20Inquiry%20from%20Website"
  className="inline-flex items-center border border-primary/50 rounded-lg px-8 py-3 text-sm font-medium hover:bg-primary/10 transition-all transform hover:-translate-y-1 hover:scale-105"
>
  <Mail className="mr-2 h-4 w-4" />
  
  Get in Touch
</a>

</Button>

          </div>

          {/* Social Links */}
          <div
            className="flex justify-center gap-6 animate-fade-in stagger-animation"
            style={{ "--stagger": "5" } as any}
          >
            <a
              href="https://www.linkedin.com/in/anuj-paroha22/"
              className="p-3 rounded-full bg-secondary/50 hover:bg-gradient-primary hover:shadow-glow transition-all duration-300 group hover-lift hover:scale-110"
            >
              <Linkedin className="h-5 w-5 group-hover:text-primary-foreground transition-colors" />
            </a>
            <a
              href="https://github.com/anujparoha"
              className="p-3 rounded-full bg-secondary/50 hover:bg-gradient-primary hover:shadow-glow transition-all duration-300 group hover-lift hover:scale-110"
            >
              <Github className="h-5 w-5 group-hover:text-primary-foreground transition-colors" />
            </a>
            <a
              href="https://leetcode.com/u/anuj_paroha_22/"
              className="p-3 rounded-full bg-secondary/50 hover:bg-gradient-primary hover:shadow-glow transition-all duration-300 group hover-lift hover:scale-110"
            >
              <Code className="h-5 w-5 group-hover:text-primary-foreground transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Animated Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/10 rounded-full blur-lg animate-pulse delay-500" />
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse delay-700" />
    </section>
  );
};
