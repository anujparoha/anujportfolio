import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, TrendingUp } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "MTS Intern (Web Development)",
      company: "GeeksforGeeks",
      period: "09/2024 – 04/2025",
      type: "Current",
      description: "Contributing to the development of web applications as part of the Web Development Team using JavaScript, React.js and Node.js.",
      achievements: [
        "Increased web development domain reach from 7M to 9.7M users (39% growth)",
        "Led design reviews and technology selection decisions",
        "Collaborated with cross-functional teams using MySQL, Express.js, and REST APIs",
        "Implemented automated deployment workflows with Git"
      ],
      technologies: ["React.js", "Node.js", "JavaScript", "MySQL", "Express.js", "REST APIs", "Git"]
    },
    {
      title: "Full Stack Developer Intern",
      company: "Quality Webs",
      period: "04/2023 - 10/2023",
      type: "Completed",
      description: "Collaborated with a team of developers and designers to create fully functional web applications using React.js and Node.js.",
      achievements: [
        "Built dynamic and interactive user interfaces with React.js",
        "Developed and maintained APIs for seamless front-end/back-end communication",
        "Ensured efficient data transfer between client and server",
        "Worked closely with design team for optimal user experience"
      ],
      technologies: ["React.js", "Node.js", "REST APIs", "JavaScript", "HTML", "CSS"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building impactful web solutions and contributing to teams that serve millions of users
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 shadow-medium hover:shadow-strong transition-all duration-300 overflow-hidden group hover-lift animate-fade-in stagger-animation" 
              style={{ '--stagger': index } as any}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <Badge 
                      variant={exp.type === "Current" ? "default" : "secondary"}
                      className={exp.type === "Current" ? "bg-gradient-primary" : ""}
                    >
                      {exp.type}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
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