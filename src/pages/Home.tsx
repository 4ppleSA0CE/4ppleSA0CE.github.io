import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        
        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Your Name
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Creative Developer & Designer
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I craft beautiful digital experiences with clean code and thoughtful design. 
            Passionate about creating innovative solutions that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="group">
              <Link to="/projects">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 pt-8">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Mail, href: "/contact" },
            ].map((social, index) => (
              <Link
                key={index}
                to={social.href}
                className="p-3 rounded-full bg-secondary hover:bg-card-hover transition-colors group"
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>
      
      {/* Quick About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">About Me</h2>
              <p className="text-muted-foreground leading-relaxed">
                With a passion for clean design and efficient code, I bring ideas to life 
                through thoughtful digital experiences. I specialize in modern web technologies 
                and love collaborating on projects that push creative boundaries.
              </p>
              <Button asChild variant="outline">
                <Link to="/projects">Explore Projects</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Projects", value: "25+" },
                { label: "Experience", value: "3+ Years" },
                { label: "Technologies", value: "10+" },
                { label: "Coffee Cups", value: "∞" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;