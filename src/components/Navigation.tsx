import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LazyImage } from "@/components/ui/lazy-image";
import { Menu, X } from "lucide-react";
import teazleLogo from "@/assets/teazle_logo.webp";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "Solutions", href: "#solutions" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-soft animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center animate-scale-in">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="cursor-pointer"
              aria-label="Scroll to top"
            >
              <LazyImage 
                src={teazleLogo} 
                alt="Teazle AI Automation Logo - Business Productivity Solutions" 
                className="h-8 w-auto hover-scale transition-transform duration-300 !bg-transparent"
              />
            </button>
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
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-elegant"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
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
              className="p-3 hover:bg-accent/50 transition-all duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-2 overflow-hidden'
        }`}>
          <div className="px-4 pt-4 pb-6 space-y-2 bg-background/95 backdrop-blur-md border-t border-border/50 shadow-lg">
            {navigationItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-foreground hover:text-primary hover:bg-accent/30 rounded-lg transition-all duration-200 font-medium text-lg active:scale-95"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <Button 
                variant="default" 
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-200 shadow-soft text-lg py-3"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsOpen(false);
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;