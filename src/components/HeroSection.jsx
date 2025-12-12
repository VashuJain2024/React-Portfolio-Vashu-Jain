import { ArrowDown } from "lucide-react";
import { Link } from "react-scroll";
import { motion, useMotionValue, useTransform } from "framer-motion";

export const HeroSection = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, 500], [15, -15]);
  const rotateY = useTransform(x, [0, 500], [-15, 15]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-6 overflow-hidden"
      onMouseMove={handleMouse}
    >
      <div className="container max-w-5xl mx-auto text-center z-10 flex gap-8 md:gap-12 lg:gap-20 flex-col md:flex-row items-center md:items-center py-20 md:py-24 lg:py-32 justify-center">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="block sm:inline"
            >
              Hi, I'm
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary block sm:inline"
            >
              {" "}
              Vashu
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gradient ml-2 block sm:inline"
            >
              {" "}
              Jain
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="pt-4"
          >
            <Link
              to="projects"
              smooth={true}
              duration={600}
              className="cosmic-button cursor-pointer inline-block"
            >
              View My Work
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] shrink-0"
        >
          <motion.div
            animate={{ y: [-10, 10] }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
            className="w-full h-full"
          >
            <img
              src="/Me.png"
              alt="Profile Picture"
              className="object-cover w-full h-full rounded-full border-4 border-primary shadow-[0_0_30px_rgba(236,72,153,0.3)]"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};
