import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  const handleDownload = (e) => {
    e.preventDefault();
    const choice = window.prompt("Do you want to download the resume?(1) or view it in a new tab?(2) \n Enter 1 or 2:");
    if (choice === '1') {
      const link = document.createElement('a');
      link.href = '/Resume.pdf';
      link.download = 'Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (choice === '2') {
      window.open('/Resume.pdf', '_blank');
    } else {
      alert('Invalid choice. Please enter 1 or 2.');
    }
  };

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack Web Developer & Lifelong Learner
            </h3>

            <p className="text-muted-foreground">
              I specialize in building full stack web applications with modern
              technologies, focusing on performance, scalability, and user
              experience.
            </p>

            <p className="text-muted-foreground">
              Alongside development, I’m actively learning Data Structures &
              Algorithms to sharpen my problem-solving skills while maintaining
              consistency in my projects and growth journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Resume.pdf"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                download={false}
                onClick={(e) => { handleDownload(e); }}
              >
                Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building scalable web apps from frontend to backend using
                    modern frameworks and tools.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">DSA & Consistency</h4>
                  <p className="text-muted-foreground">
                    Strengthening problem-solving through DSA while staying
                    consistent in daily learning and coding.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project & Time Management</h4>
                  <p className="text-muted-foreground">
                    Managing projects efficiently while balancing productivity
                    and time management for consistent progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
