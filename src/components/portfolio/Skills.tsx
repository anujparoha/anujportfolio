import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Wrench, Brain, Cloud, Globe } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="h-5 w-5" />,
      skills: ["C++", "Java", "C", "JavaScript", "HTML", "CSS"],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Libraries & Frameworks",
      icon: <Globe className="h-5 w-5" />,
      skills: ["React", "Tailwind CSS", "NodeJS", "Express JS", "Redux", "Socket.io"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="h-5 w-5" />,
      skills: ["Git", "GitHub", "AWS", "Docker", "Rest API", "Firebase"],
      gradient: "from-purple-500 to-violet-600"
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: ["SQL", "MongoDB"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Core Subjects",
      icon: <Brain className="h-5 w-5" />,
      skills: ["OOPS", "OS", "Networking", "DSA"],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Areas of Interest",
      icon: <Cloud className="h-5 w-5" />,
      skills: ["Backend Development", "UI Designing", "Cloud Computing"],
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 group hover-lift animate-fade-in stagger-animation" 
              style={{ '--stagger': index } as any}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient} shadow-soft`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs px-3 py-1 hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-secondary border-border/50 shadow-medium">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Always Learning & Growing
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Passionate about staying updated with the latest technologies and best practices. 
                Currently exploring advanced cloud architectures, microservices, and modern DevOps practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};