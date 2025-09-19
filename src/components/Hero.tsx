import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LazyImage } from "@/components/ui/lazy-image";
import { FloatingElement, TiltCard, GlowEffect } from "@/components/ui/3d-animations";
import { ArrowRight, Play } from "lucide-react";
import namecardImage from "@/assets/namecard image.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden py-24 sm:py-28 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--teazle-teal))_1px,_transparent_0)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in text-center lg:text-left">
              <FloatingElement delay={200} amplitude={5}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                  AI Automation
                  <span className="block text-primary">for Business</span>
                </h1>
              </FloatingElement>
              
              <FloatingElement delay={400} amplitude={3}>
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Automate customer interactions and boost your team's productivity with intelligent AI solutions tailored for enterprise growth.
                </p>
              </FloatingElement>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12 animate-fade-in justify-center lg:justify-start" style={{ animationDelay: '0.4s' }}>
                <GlowEffect color="rgb(59, 130, 246)" intensity={0.3}>
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 hover:scale-105 text-primary-foreground shadow-soft group transition-all duration-300 w-full sm:w-auto px-8 py-4 text-lg"
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-all duration-300" />
                  </Button>
                </GlowEffect>
              </div>
            </div>

            {/* Product Showcase */}
            <TiltCard className="relative animate-scale-in w-full sm:w-4/5 lg:w-[90%] mx-auto order-first lg:order-last">
              <Card className="relative overflow-hidden rounded-2xl shadow-elegant bg-card border-border/50 p-3 sm:p-5">
                <div className="relative overflow-hidden rounded-xl">
                  <LazyImage 
                    src={namecardImage} 
                    alt="AI Business Automation Dashboard - Teazle Enterprise Solutions" 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </Card>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;