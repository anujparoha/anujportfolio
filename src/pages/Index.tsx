import { Hero } from "@/components/portfolio/Hero";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Accomplishments } from "@/components/portfolio/Accomplishments";
import { Contact } from "@/components/portfolio/Contact";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <ThemeToggle />
      <div className="animate-fade-in">
        <Hero />
        <div className="animate-slide-up">
          <Experience />
        </div>
        <div className="animate-slide-up" style={{ '--stagger': '1' } as any}>
          <Projects />
        </div>
        <div className="animate-slide-up stagger-animation" style={{ '--stagger': '2' } as any}>
          <Skills />
        </div>
        <div className="animate-slide-up stagger-animation" style={{ '--stagger': '3' } as any}>
          <Education />
        </div>
        <div className="animate-slide-up stagger-animation" style={{ '--stagger': '4' } as any}>
          <Accomplishments />
        </div>
        <div className="animate-slide-up stagger-animation" style={{ '--stagger': '5' } as any}>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Index;
