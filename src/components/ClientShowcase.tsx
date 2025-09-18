import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import clientShowcaseImage from '../assets/clientshowcase.webp';

const ClientShowcase: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* CTA Content - Now at the top */}
        <div className="text-center space-y-8 mb-16 max-w-4xl mx-auto">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm rounded-full text-primary font-semibold text-sm border border-primary/20">
            ✨ Trusted by 500+ Businesses
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent leading-tight">
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium max-w-3xl mx-auto">
            Join 500+ businesses that trust Teazle for their automation needs. Schedule a free consultation today.
          </p>
          
          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-2xl hover:shadow-primary/30 text-white px-10 py-6 text-xl font-semibold group transform hover:scale-105 transition-all duration-300 rounded-xl"
              onClick={scrollToContact}
            >
              Schedule Free Consultation
              <ArrowRight className="ml-4 h-7 w-7 group-hover:translate-x-2 transition-all duration-300" />
            </Button>
          </div>
        </div>

        {/* Client Showcase Image - Now bigger and below, without gradients */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <img
              src={clientShowcaseImage}
              alt="Trusted by 500+ businesses including AIA Vitality, CapitaLand, Nanyang, Grab, Airbnb, Singtel, and many more"
              className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-700 border border-border/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;