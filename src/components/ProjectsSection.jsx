import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./ui/Reveal";
import { SpotlightCard } from "./ui/SpotlightCard";

const projects = [
  {
    id: 1,
    title: "War on 64 Squares",
    description:
      "A real-time online chess game with room-based gameplay, where two players can play while others spectate. Includes WebRTC-based voice chat for live communication.",
    image: "/waron64squares.png",
    tags: ["React.js", "Node.js", "Socket.IO", "WebRTC"],
    demoUrl: "https://waron64squares-production.up.railway.app/",
    githubUrl: "https://github.com/VashuJain2024/war_on_64_squares",
  },
  {
    id: 2,
    title: "PoseFit",
    description:
      "An AI-powered yoga assistant that detects poses using MediaPipe/OpenCV and provides real-time feedback for posture correction.",
    image: "/posefit.png",
    tags: ["React.js", "Tensorflow", "MediaPipe", "OpenCV"],
    demoUrl: "https://posefityoga.netlify.app/",
    githubUrl: "https://github.com/VashuJain2024/PoseFit_Yoga",
  },
  {
    id: 3,
    title: "KTS Club Website",
    description:
      "Official website for my college’s KTS Club, designed to showcase events, bootcamps, and resources. Built with a modern responsive UI to engage students and highlight club activities.",
    image: "/kts.png",
    tags: ["React.js", "TailwindCSS", "Framer Motion"],
    demoUrl: "https://kts-website.netlify.app/",
    githubUrl: "https://github.com/Kinesis-Technical-Society/Official-Website-2025",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <Reveal width="100%">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {" "}
            Featured <span className="text-shimmer"> Projects </span>
          </h2>
        </Reveal>

        <Reveal width="100%" delay={0.4}>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <SpotlightCard className="h-full bg-card/50 backdrop-blur-sm border-white/10" spotlightColor="hsl(347.37deg 15.97% 53.33% / 0.25)">
                <div className="h-48 overflow-hidden relative border-b border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="p-2 bg-background rounded-full hover:bg-primary hover:text-white transition-colors"
                      title="View Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="p-2 bg-background rounded-full hover:bg-primary hover:text-white transition-colors"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs font-medium border border-white/10 rounded-full bg-secondary/50 text-secondary-foreground transition-transform duration-200 hover:scale-110 hover:bg-primary/20 cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-2"> {project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Reveal width="100%">
            <a
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
              target="_blank"
              href="https://github.com/VashuJain2024"
            >
              Check My Github <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
