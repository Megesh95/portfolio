import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Shopsy E-Commerce",
      description: "A full-featured e-commerce platform with product catalog, cart, payment integration, and order management system for a seamless shopping experience.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReBlSi-Ul_iH-ssdIB-EK1OEl9rgNs4G0O1w&s", 
      tags: ["React", "Express", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "https://github.com/Megesh95/shopsy.git"
    },
    {
      id: 2,
      title: "F1 Lap Time Predictor",
      description: "An AI-powered mobile app that predicts Formula 1 lap times using historical race data, weather conditions, and car performance metrics.",
      image: "https://image.api.playstation.com/vulcan/ap/rnd/202405/3115/d42f49dbdc6b9202f8356339e9eb6e82531e37ad2557cc58.png", 
      tags: ["React Native", "Python", "Flask", "Machine Learning", "TensorFlow"],
      liveUrl: "#",
      githubUrl: "https://github.com/Megesh95/F1.git"
    },
    {
      id: 3,
      title: "V-Lens Glasses Platform",
      description: "An innovative platform for virtual glasses try-on, featuring AR-based fitting, product recommendations, and seamless e-commerce integration.",
      image: "https://turis.app/wp-content/uploads/2024/03/b2b-storefront-design-product-display.png", 
      tags: ["React", "Tailwind CSS", "Firebase"],
      liveUrl: "#",
      githubUrl: "https://github.com/Megesh95/v-lens.git"
    }
  ];
  

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience 
              in building modern web applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="group bg-card border-border hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-all duration-300"></div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-secondary text-secondary-foreground text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-3 pt-2">
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary-glow text-primary-foreground"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-medium"
            >
              <a href="https://github.com/Megesh95" target="_blank" rel="noopener noreferrer">
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;