import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./ui/Reveal";
import { SpotlightCard } from "./ui/SpotlightCard";

const skills = [
  // Frontend
  { name: "HTML", level: 95, category: "frontend" },
  { name: "CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "BootStrap", level: 85, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "SQL", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 50, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "Canva", level: 85, category: "tools" },
  { name: "Docker", level: 40, category: "tools" },

  // Languages
  { name: "C", level: 70, category: "languages" },
  { name: "C++", level: 80, category: "languages" },
  { name: "Python", level: 80, category: "languages" },
  { name: "Java", level: 60, category: "languages" },
];

const categories = ["all", "frontend", "backend", "tools", "languages"];




export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 relative bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <Reveal width="100%">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My <span className="text-shimmer">Skills</span>
          </h2>
        </Reveal>

        <Reveal width="100%" delay={0.2}>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </Reveal>

        <Reveal width="100%">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
            {categories.map((category, key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 md:px-5 py-2 rounded-full transition-all duration-300 capitalize text-sm md:text-base font-medium",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(236,72,153,0.4)] scale-105"
                    : "bg-secondary/70 text-foreground hover:bg-secondary hover:scale-105"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 transition-all duration-300"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {

              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  className="h-full"
                >
                  <SpotlightCard
                    className="h-full bg-card/50 backdrop-blur-sm border-white/10 p-5 md:p-6 min-h-[100px] flex items-center justify-center"
                    spotlightColor="hsl(347.37deg 15.97% 53.33% / 0.25)"
                  >
                    <div className="flex flex-col items-center justify-center gap-4 w-full">
                      <h3 className="font-semibold text-base md:text-lg text-foreground whitespace-nowrap">
                        {skill.name}
                      </h3>

                      {/* Progress Bar */}
                      <div className="flex-1 min-w-[120px] max-w-[200px]">
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                          <motion.div
                            className="bg-primary h-2 rounded-full origin-left box-glow"
                            initial={{ width: 0 }}
                            whileInView={{ width: skill.level + "%" }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
