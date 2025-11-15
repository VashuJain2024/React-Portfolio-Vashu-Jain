import { ArrowUp, Heart } from "lucide-react";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground flex items-center gap-1.5">
        {" "}
        &copy; {new Date().getFullYear()}. Made with <Heart size={18} className="text-red-500" />
        by Vashu Jain. All rights reserved.
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
    </footer>
  );
};
