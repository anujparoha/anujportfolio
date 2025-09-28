import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Github, Code, ExternalLink, MapPin } from "lucide-react";

export const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "anujparoha2000@gmail.com",
      href: "mailto:anujparoha2000@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "8225824277",
      href: "tel:8225824277",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anuj-paroha22/",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/anujparoha",
      gradient: "from-gray-600 to-gray-800"
    },
    {
      icon: <Code className="h-5 w-5" />,
      label: "LeetCode",
      href: "https://leetcode.com/u/anuj_paroha_22/",
      gradient: "from-orange-500 to-yellow-600"
    },
    {
      icon: <Code className="h-5 w-5" />,
      label: "CodeChef",
      href: "https://www.codechef.com/users/anuj_paroha22",
      gradient: "from-brown-500 to-amber-600"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to new opportunities and collaborations. Let's build something amazing together!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="text-center mb-12">
            <Badge className="bg-gradient-primary text-primary-foreground px-6 py-3 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Available for Full-time Opportunities
              </div>
            </Badge>
          </div>
          
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 shadow-medium hover:shadow-strong transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${method.gradient} shadow-soft`}>
                      <div className="text-white">
                        {method.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {method.label}
                      </h3>
                      <a 
                        href={method.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {method.value}
                      </a>
                    </div>
                    <Button size="sm" variant="ghost" asChild>
                      <a href={method.href}>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Social Links */}
          <Card className="bg-gradient-card border-border/50 shadow-medium">
            <CardHeader>
              <CardTitle className="text-center text-xl font-semibold text-foreground">
                Connect With Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {socialLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    asChild
                    className="h-auto p-4 border-border/50 hover:shadow-glow transition-all duration-300 group"
                  >
                    <a href={link.href} className="flex flex-col items-center gap-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${link.gradient}`}>
                        <div className="text-white">
                          {link.icon}
                        </div>
                      </div>
                      <span className="text-sm font-medium group-hover:text-primary transition-colors">
                        {link.label}
                      </span>
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
<div className="text-center mt-12">
    <Card className="bg-gradient-secondary border-border/50 shadow-medium">
        <CardContent className="p-8">
            {/* ... other content ... */}
            <h3 className="text-xl font-semibold text-foreground mb-4">
                Based in India, Available Globally
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're looking for a full-time developer, project collaboration, 
                or just want to discuss technology, I'm always excited to connect with fellow developers and innovators.
            </p>

            <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                asChild // Use asChild if your Button component supports rendering an anchor tag
            >
                <a 
                    href="mailto:YOUR_EMAIL_ADDRESS?subject=Conversation%20about%20a%20Project&body=Hello%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20start%20a%20conversation%20about..."
                    target="_blank" // Optional: Opens the email client in a new tab/window
                    rel="noopener noreferrer"
                >
                    <Mail className="mr-2 h-4 w-4" />
                    Start a Conversation
                </a>
            </Button>

        </CardContent>
    </Card>
</div> 
        </div>
      </div>
    </section>
  );
};