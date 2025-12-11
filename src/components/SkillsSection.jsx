import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./ui/Reveal";

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
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <Reveal width="100%">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-shimmer"> Skills</span>
          </h2>
        </Reveal>

        <Reveal width="100%">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-all duration-300 capitalize",
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-card p-6 rounded-lg shadow-xs card-hover border border-transparent hover:border-primary/20"
              >
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg"> {skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-primary h-2 rounded-full origin-left box-glow"
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level + "%" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>

                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
