import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Linkedin, Twitter, Instagram, Youtube, Dribbble, Coffee } from "lucide-react";

const Socials = () => {
  const socialPlatforms = [
    {
      name: "GitHub",
      icon: Github,
      handle: "@yourusername",
      description: "Open source projects and code repositories",
      followers: "2.3k",
      url: "https://github.com/yourusername",
      color: "hover:bg-gray-100 dark:hover:bg-gray-800",
      featured: true,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      handle: "@yourname",
      description: "Professional network and career updates",
      followers: "1.8k",
      url: "https://linkedin.com/in/yourname",
      color: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
      featured: true,
    },
    {
      name: "Twitter",
      icon: Twitter,
      handle: "@yourusername",
      description: "Tech thoughts, tutorials, and daily updates",
      followers: "892",
      url: "https://twitter.com/yourusername",
      color: "hover:bg-sky-50 dark:hover:bg-sky-900/20",
      featured: true,
    },
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@yourname",
      description: "Behind the scenes and life moments",
      followers: "654",
      url: "https://instagram.com/yourname",
      color: "hover:bg-pink-50 dark:hover:bg-pink-900/20",
      featured: false,
    },
    {
      name: "YouTube",
      icon: Youtube,
      handle: "Your Channel",
      description: "Coding tutorials and tech reviews",
      followers: "423",
      url: "https://youtube.com/@yourchannel",
      color: "hover:bg-red-50 dark:hover:bg-red-900/20",
      featured: false,
    },
    {
      name: "Dribbble",
      icon: Dribbble,
      handle: "@yourname",
      description: "Design work and creative projects",
      followers: "321",
      url: "https://dribbble.com/yourname",
      color: "hover:bg-pink-50 dark:hover:bg-pink-900/20",
      featured: false,
    },
  ];

  const featuredPlatforms = socialPlatforms.filter(platform => platform.featured);
  const otherPlatforms = socialPlatforms.filter(platform => !platform.featured);

  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="container mx-auto max-w-6xl py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Connect With <span className="text-primary">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow my journey across different platforms and stay updated with my latest work.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: "Total Followers", value: "6.2k+" },
            { label: "Active Platforms", value: "6" },
            { label: "Posts This Month", value: "47" },
            { label: "Response Rate", value: "98%" },
          ].map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Platforms */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Coffee className="h-6 w-6 text-primary" />
            Most Active
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPlatforms.map((platform, index) => (
              <Card key={index} className={`group transition-all duration-300 ${platform.color} border-2 hover:border-primary/20`}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <platform.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{platform.name}</h3>
                        <p className="text-sm text-muted-foreground">{platform.handle}</p>
                      </div>
                    </div>
                    <Badge variant="secondary">{platform.followers}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{platform.description}</p>
                  <Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <a href={platform.url} target="_blank" rel="noopener noreferrer">
                      Follow <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Platforms */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Other Platforms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherPlatforms.map((platform, index) => (
              <Card key={index} className={`group transition-all duration-300 ${platform.color} hover:shadow-lg`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <platform.icon className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium">{platform.name}</h3>
                        <p className="text-xs text-muted-foreground">{platform.handle}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">{platform.followers}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{platform.description}</p>
                  <Button asChild variant="ghost" size="sm" className="w-full">
                    <a href={platform.url} target="_blank" rel="noopener noreferrer">
                      Visit <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
              <p className="text-muted-foreground mb-6">
                Don't miss out on my latest projects, tutorials, and insights. Follow me on your preferred platform!
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {featuredPlatforms.map((platform, index) => (
                  <Button key={index} asChild variant="outline" size="sm">
                    <a href={platform.url} target="_blank" rel="noopener noreferrer">
                      <platform.icon className="mr-2 h-4 w-4" />
                      {platform.name}
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Socials;
