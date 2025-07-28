import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/geral/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigation = [
    { name: "Início", href: "/#home" },
    { name: "Portfólio", href: "/portfolio" },
    { name: "Dimensões", href: "/#dimensions" },
    { name: "Contato", href: "/#contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 backdrop-blur-sm transition-colors",
        isScrolled ? "bg-background border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-48">
          {/* Logo */}
          <a href="/#home" className="flex items-center">
            <img
              src={logo}
              alt="3DimensionLabs logo"
              className="h-48 w-48 mr-2"
            />
            <div className="text-[7.5rem] font-bold font-montserrat text-foreground text-outline-black">
              <span className="text-neon-pink">3D</span>
              <span className="text-neon-cyan">imension</span>
              <span className="text-blue-violet">Labs</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-black text-5xl hover:text-neon-pink transition-colors duration-300 font-medium font-montserrat"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-neon-pink"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-black text-5xl hover:text-neon-pink transition-colors duration-300 font-medium font-montserrat py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;