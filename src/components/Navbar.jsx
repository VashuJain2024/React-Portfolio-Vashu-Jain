import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 backdrop-blur-xs",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between w-full">
        <Link
          to="home"
          smooth={true}
          duration={600}
          offset={0}
          className="text-xl font-bold text-primary flex items-center cursor-pointer flex-1"
        >
          <motion.span
            className="relative z-10 flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-foreground">&lt;</span>
            <span className="text-glow text-primary">Vashu</span>
            <span className="text-foreground">/</span>
            <span className="text-glow text-primary">Jain</span>
            <span className="text-foreground">&gt;</span>
          </motion.span>
        </Link>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <Link
              key={key}
              to={item.href.replace("#", "")}
              smooth={true}
              duration={600}
              offset={0}
              spy={true}
              onMouseEnter={() => setHoveredIndex(key)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              {item.name}
              {hoveredIndex === key && (
                <motion.span
                  layoutId="hover-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* MOBILE NAV BUTTON + THEME TOGGLE */}
        <div className="z-50 md:hidden flex items-center gap-3">
          {/* Theme toggle visible only on mobile */}
          <ThemeToggle className="md:hidden" />

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>


        {/* MOBILE MENU OVERLAY */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center p-8 md:hidden"
            >
              <div className="flex flex-col space-y-8 text-xl text-center">
                {navItems.map((item, key) => (
                  <Link
                    key={key}
                    to={item.href.replace('#', '')}
                    smooth={true}
                    duration={600}
                    spy={true}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer text-2xl font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
