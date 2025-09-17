import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import teazleLogo from "@/assets/teazle-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "Solutions", href: "#solutions" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-soft animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center animate-scale-in">
            <img 
              src={teazleLogo} 
              alt="Teazle - Translating Vision into Reality" 
              className="h-8 w-auto hover-scale transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block animate-fade-in">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="story-link text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button variant="default" className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-elegant">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-smooth font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button variant="default" className="w-full bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;