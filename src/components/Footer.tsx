import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import teazleLogo from "@/assets/teazle-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Solutions",
      links: [
        { name: "AI Automation", href: "#solutions" },
        { name: "Customer Service", href: "#solutions" },
        { name: "Lead Management", href: "#solutions" },
        { name: "Workflow Automation", href: "#solutions" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Team", href: "#about" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Us", href: "#contact" },
        { name: "System Status", href: "#" },
        { name: "Privacy Policy", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" }
  ];

  return (
    <footer className="bg-gradient-section border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src={teazleLogo} 
                  alt="Teazle" 
                  className="h-8 w-auto"
                />
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Translating vision into reality through intelligent AI automation solutions. 
                Empowering businesses to achieve unprecedented efficiency and growth.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">+65 91031399</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">hello@teazle.ai</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Singapore</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={social.label}
                      variant="ghost"
                      size="icon"
                      className="hover:bg-primary/10 hover:text-primary"
                      asChild
                    >
                      <a href={social.href} aria-label={social.label}>
                        <Icon className="w-5 h-5" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-4 grid md:grid-cols-4 gap-8">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-semibold text-foreground mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Teazle. All rights reserved. Innovation for a Better World.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;