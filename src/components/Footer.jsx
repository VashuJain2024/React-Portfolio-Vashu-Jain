import { ArrowUp, Heart } from "lucide-react";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <footer className="py-8 md:py-12 px-4 md:px-6 lg:px-8 bg-card relative border-t border-border mt-12 pt-8">
      <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row flex-wrap justify-between items-center gap-4">
        <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5">
          &copy; {new Date().getFullYear()}. Made with <Heart size={16} className="text-red-500" />
          by Vashu Jain.
        </p>
        <Link
          to="home"
          smooth={true}
          duration={600}
          offset={0}
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer"
        >
          <ArrowUp size={20} />
        </Link>
      </div>
    </footer>
  );
};
