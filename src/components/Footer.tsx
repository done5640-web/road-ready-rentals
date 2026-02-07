import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube, ArrowUp } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const footerLinks = {
  company: [
    { label: "Rreth Nesh", href: "/rreth-nesh", hash: "#rreth-nesh" },
    { label: "Makinat Tona", href: "/makinat", hash: "#makinat" },
    { label: "Galeria", href: "/galeria", hash: "#galeria" },
    { label: "Kontakt", href: "/kontakt", hash: "#kontakt" },
  ],
  legal: [
    { label: "Kushtet e Përdorimit", href: "#" },
    { label: "Privatësia", href: "#" },
    { label: "Politika e Kthimit", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (link: { href: string; hash?: string }) => {
    if (link.hash) {
      if (location.pathname === "/") {
        const element = document.querySelector(link.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(link.hash!);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link to="/" className="inline-block mb-6" onClick={scrollToTop}>
              <span className="text-2xl font-bold">
                Rental <span className="text-primary">Car</span> Ago
              </span>
            </Link>
            <p className="text-background/70 mb-6 max-w-sm">
              Udhëto me besim. Ne jemi këtu për t'ju ofruar eksperiencën më të mirë të qirasë së makinave në Shqipëri.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 bg-background/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Linqe të Shpejta</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link)}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Ligjore</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Rental Car Ago. Të gjitha të drejtat e rezervuara.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
