import { ArrowRight, ExternalLink, Github } from "lucide-react";

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
  // {
  //   id: 4,
  //   title: "ServiceSphere",
  //   description:
  //     "A platform that connects service seekers with service providers, helping users easily find and offer services within their local area.",
  //   image: "/servicesphere.png",
  //   tags: ["React.js", "Taiwind CSS", "BotPress"],
  //   demoUrl: "https://vashujain2024.github.io/home",
  //   githubUrl: "https://github.com/VashuJain2024/ServiceSphere",
  // },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/VashuJain2024"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
