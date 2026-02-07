import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/rental logo.png";

const navLinks = [
  { href: "/", label: "Kreu", hash: "#kreu" },
  { href: "/rreth-nesh", label: "Rreth Nesh", hash: "#rreth-nesh" },
  { href: "/makinat", label: "Makinat", hash: "#makinat" },
  { href: "/galeria", label: "Galeria", hash: "#galeria" },
  { href: "/kontakt", label: "Kontakt", hash: "#kontakt" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (link: typeof navLinks[0]) => {
    setIsOpen(false);
    if (location.pathname === "/") {
      // On homepage, scroll to section
      const element = document.querySelector(link.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // On other pages, navigate to homepage then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(link.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="Rental Car Ago" className="h-10 lg:h-12 w-auto" />
            <span className="text-xl lg:text-2xl font-bold text-foreground">
              Rental <span className="text-primary">Car</span> Ago
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+355123456789" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="h-4 w-4" />
              +355 123 456 789
            </a>
            <Button onClick={() => handleNavClick(navLinks[2])} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Rezervo Tani
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2 text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button onClick={() => { handleNavClick(navLinks[2]); }} className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-2">
                Rezervo Tani
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
