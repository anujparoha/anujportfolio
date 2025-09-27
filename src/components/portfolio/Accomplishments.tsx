import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Code, Award, Star, TrendingUp } from "lucide-react";

export const Accomplishments = () => {
  const achievements = [
    {
      title: "Competitive Programming Excellence",
      icon: <Code className="h-5 w-5" />,
      items: [
        {
          platform: "CodeChef",
          achievement: "3-star Coder (Max Rating: 1645)",
          badge: "3-Star",
          color: "from-yellow-500 to-orange-600"
        },
        {
          platform: "LeetCode", 
          achievement: "Top 15% in contests",
          badge: "Top 15%",
          color: "from-blue-500 to-indigo-600"
        }
      ]
    },
    {
      title: "Problem Solving Mastery",
      icon: <Target className="h-5 w-5" />,
      items: [
        {
          platform: "Overall",
          achievement: "Solved 1000+ problems across platforms",
          badge: "1000+",
          color: "from-green-500 to-emerald-600"
        },
        {
          platform: "Advanced",
          achievement: "300+ Medium, 150+ Hard problems",
          badge: "450+ Advanced",
          color: "from-purple-500 to-violet-600"
        }
      ]
    },
    {
      title: "Academic & Competition Rankings",
      icon: <Trophy className="h-5 w-5" />,
      items: [
        {
          platform: "GFG Institute",
          achievement: "Top 5 out of 1300+ students",
          badge: "Top 5",
          color: "from-red-500 to-pink-600"
        },
        {
          platform: "CodeChef SnackDown",
          achievement: "1st place in college round",
          badge: "1st Place",
          color: "from-amber-500 to-yellow-600"
        }
      ]
    }
  ];

  const stats = [
    { label: "Problems Solved", value: "1000+", icon: <Code className="h-4 w-4" /> },
    { label: "Contest Rating", value: "1645", icon: <Star className="h-4 w-4" /> },
    { label: "Hard Problems", value: "150+", icon: <Target className="h-4 w-4" /> },
    { label: "Ranking", value: "Top 5", icon: <Trophy className="h-4 w-4" /> }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Accomplishments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for dedication to problem-solving and competitive programming excellence
          </p>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 text-center">
              <CardContent className="p-4">
                <div className="flex justify-center mb-2">
                  <div className="p-2 rounded-lg bg-gradient-primary">
                    <div className="text-primary-foreground">
                      {stat.icon}
                    </div>
                  </div>
                </div>
                <div className="text-lg md:text-xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Detailed Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-medium hover:shadow-strong transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-primary shadow-soft">
                    <div className="text-primary-foreground">
                      {category.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="p-4 rounded-lg bg-secondary/30 border border-border/30">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="text-sm font-semibold text-foreground">
                        {item.platform}
                      </div>
                      <Badge className={`bg-gradient-to-r ${item.color} text-white border-none text-xs`}>
                        {item.badge}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.achievement}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-secondary border-border/50 shadow-medium">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-gradient-primary shadow-soft">
                  <TrendingUp className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Continuous Growth Mindset
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                These achievements reflect my commitment to continuous learning and problem-solving. 
                I believe in challenging myself daily and contributing to the tech community through code and collaboration.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};