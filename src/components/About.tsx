import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "React",
    "Tailwind CSS",
    "Java",
    "C++",
    "Python",
    "JavaScript",
    "MySQL",
    "Git",
    "GitHub",
    "AI/ML",
    "VS Code",
    "Jupyter",
    "Vite",
    "Oracle OCI services"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6 flex justify-center">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center justify-center text-center md:text-left">
            <div className="space-y-6 md:mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
              👋 Hi, I’m J. B. Megeshwar – a full-stack developer who loves turning ideas into sleek, modern web apps. I’m all about writing clean code, crafting smooth user experiences, and making tech feel effortless.


              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
              🏏 When I’m not coding, you’ll probably find me smashing boundaries on the cricket field  or geeking out over Formula 1 races 🏎️ (yes, I can talk strategy for hours).

🚀 Always exploring new tech, building cool projects, and chasing that perfect mix of performance and design
              </p>

              <div className="pt-4">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  What I Do
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Full-Stack Web Development</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>AI/ML projects</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Mobile App Development</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Technical Consulting</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8 md:mx-auto">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  Technologies I Work With
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-3 py-1 text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
