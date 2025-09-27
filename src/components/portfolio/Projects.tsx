import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Database, Shield, Users, TrendingUp } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Edu Flux",
      subtitle: "Ed-tech Website",
      description: "A comprehensive full-stack educational platform serving 30+ users with optimized data retrieval and secure authentication.",
      features: [
        "40% faster data retrieval through MongoDB optimization",
        "JWT-based authentication reducing security vulnerabilities by 35%",
        "Full-stack architecture with modern React frontend",
        "Scalable backend with Express.js and Node.js"
      ],
      technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
      icon: <Database className="h-6 w-6" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Blog Sphere",
      subtitle: "Modern Blogging Platform",
      description: "A feature-rich blogging platform with real-time interactions and personalized user experience powered by intelligent recommendations.",
      features: [
        "Real-time commenting system for enhanced user engagement",
        "JWT authentication for secure user sessions",
        "30% increase in user retention through personalized recommendations",
        "MongoDB aggregation for intelligent content suggestions"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
      icon: <Users className="h-6 w-6" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Placement Guidance",
      subtitle: "Educational Resource Platform",
      description: "A comprehensive platform providing placement preparation resources, serving 50+ students with mock interviews and coding materials.",
      features: [
        "Dedicated sections for placement resources and study materials",
        "Integrated coding contests and practice problems",
        "Mock interview system with personalized feedback",
        "Firebase integration for secure resource access"
      ],
      technologies: ["Tailwind CSS", "JavaScript", "Google Drive API", "Firebase"],
      icon: <TrendingUp className="h-6 w-6" />,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of full-stack applications built with modern technologies and best practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-medium hover:shadow-strong transition-all duration-300 group overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} shadow-soft`}>
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-primary font-medium">
                    {project.subtitle}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs px-2 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};