import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Trophy } from "lucide-react";

export const Education = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in computer science and technology
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-border/50 shadow-medium hover:shadow-strong transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 shadow-soft">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Bachelor's in Information Technology
                    </CardTitle>
                    <p className="text-lg font-semibold text-primary mt-1">
                      Gyan Ganga Institute of Technology and Sciences
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Jabalpur</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-start md:items-end gap-3">
                  <Badge className="bg-gradient-primary text-primary-foreground">
                    <Trophy className="h-3 w-3 mr-1" />
                    CGPA: 8.56
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>06/2020 - 06/2024</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Core Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Data Structures & Algorithms", "Object-Oriented Programming", "Operating Systems", "Computer Networks", "Database Management", "Software Engineering", "Web Development", "Cloud Computing"].map((course, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Academic Highlights
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-muted-foreground flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Consistent academic performance with 8.56 CGPA</span>
                    </li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Strong foundation in computer science fundamentals</span>
                    </li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Active participation in coding competitions and projects</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};