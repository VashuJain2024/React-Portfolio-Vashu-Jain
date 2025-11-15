import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { ThemeToggle } from "./ThemeToggle";

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
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
          <span className="relative z-10">
            <span className="text-foreground">&lt;</span>
            <span className="text-glow text-primary">Vashu</span>
            <span className="text-foreground">/</span>
            <span className="text-glow text-primary">Jain</span>
            <span className="text-foreground">&gt;</span>
          </span>
        </Link>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <Link
              key={key}
              to={item.href.replace("#", "")}   // removes '#' for react-scroll
              smooth={true}
              duration={600}
              offset={0}
              spy={true}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 hover:scale-105 cursor-pointer"
            >
              {item.name}
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
        <div
          className={cn(
            "fixed inset-0 bg-[var(--color-primary)] backdrop-blur-lg z-40 flex flex-col items-center justify-center p-[30px] h-fit",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <Link
                key={key}
                to={item.href.replace('#', '')}
                smooth={true}
                duration={600}
                spy={true}
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
