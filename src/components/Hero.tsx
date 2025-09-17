import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--teazle-teal))_1px,_transparent_0)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                AI Automation
                <span className="block text-primary">for Business</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Automate customer interactions and boost your team's productivity with intelligent AI solutions tailored for enterprise growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Trusted by 500+ businesses</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>99.9% uptime</span>
                </div>
              </div>
            </div>

            {/* Product Showcase */}
            <div className="relative animate-scale-in">
              <Card className="bg-gradient-card border-0 shadow-elegant p-8 backdrop-blur-sm">
                <div className="bg-teazle-teal rounded-lg p-6 text-center shadow-glow">
                  <div className="text-primary-foreground">
                    <h3 className="text-2xl font-bold mb-2">TEAZLE</h3>
                    <p className="text-primary-foreground/80 mb-4">Innovation for a Better World</p>
                    <div className="w-12 h-1 bg-primary-foreground/60 mx-auto rounded-full"></div>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">Response Time</span>
                    <span className="text-primary font-bold">1 min</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">Automation Rate</span>
                    <span className="text-primary font-bold">98%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">Active Workflows</span>
                    <span className="text-primary font-bold">24/7</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;