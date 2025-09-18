import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LazyImage } from "@/components/ui/lazy-image";
import { TiltCard, FloatingElement, GlowEffect } from "@/components/ui/3d-animations";
import { ArrowRight, Award, Globe, Zap } from "lucide-react";
import businessWoman from "@/assets/business-woman.webp";
import automationDevice from "@/assets/automation-kiosk.webp";

const About = () => {
  const stats = [
    { number: "500+", label: "Businesses Served", icon: Globe },
    { number: "Almost 2 decades", label: "of experience", icon: Zap },
    { number: "24/7", label: "Support Available", icon: Award },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Teazle
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              At Teazle, we've spent nearly two decades helping businesses harness the power of intelligent automation. Our AI-driven solutions don't just streamline operations — they elevate customer experiences and unlock sustainable growth at scale.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Teazle</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Enterprise-Grade Solutions</h3>
                  <p className="text-muted-foreground">Scalable automation platforms designed to meet the toughest enterprise requirements — backed by enterprise-level security and compliance.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Proven Expertise</h3>
                  <p className="text-muted-foreground">With almost 20 years in the industry and more than 500 successful implementations, we deliver measurable ROI and lasting customer satisfaction.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Unmatched Support</h3>
                  <p className="text-muted-foreground">Our dedicated team provides 24/7 monitoring and assistance, ensuring your automation runs smoothly every hour of every day.</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 shadow-soft group"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </div>

          {/* Image */}
          <TiltCard className="relative animate-scale-in">
            <Card className="bg-gradient-card border-0 shadow-elegant overflow-hidden">
              <CardContent className="p-0">
                <LazyImage 
                  src={businessWoman}
                  alt="Professional business woman using automation solutions"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </CardContent>
            </Card>
          </TiltCard>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <FloatingElement key={stat.label} delay={index * 200} amplitude={8}>
                <TiltCard>
                  <Card 
                    className="bg-gradient-card border-0 shadow-soft hover:shadow-elegant transition-all duration-300 animate-scale-in text-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8">
                      <GlowEffect color="rgb(59, 130, 246)" intensity={0.2}>
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                          <Icon className="w-8 h-8" />
                        </div>
                      </GlowEffect>
                      <div className="text-4xl font-bold text-primary mb-2">
                        {stat.number}
                      </div>
                      <p className="text-muted-foreground font-medium">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                </TiltCard>
              </FloatingElement>
            );
          })}
        </div>

        {/* Business Impact */}
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Device Image */}
          <TiltCard className="relative animate-scale-in order-2 lg:order-1 w-4/5 mx-auto">
            <Card className="bg-gradient-card border-0 shadow-elegant overflow-hidden h-full">
              <CardContent className="p-0 h-full">
                <LazyImage 
                  src={automationDevice}
                  alt="Teazle automation device in modern office environment"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </CardContent>
            </Card>
          </TiltCard>

          {/* Business Impact Content */}
          <div className="animate-fade-in order-1 lg:order-2 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Business Impact & ROI
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our automation solutions have helped businesses handle over 100K inquiries monthly, 
              demonstrating the scalability and reliability of our platform.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between p-4 bg-background/80 rounded-lg shadow-soft">
                <span className="font-medium text-foreground">Average ROI</span>
                <span className="text-2xl font-bold text-primary">300%</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-background/80 rounded-lg shadow-soft">
                <span className="font-medium text-foreground">Implementation Time</span>
                <span className="text-2xl font-bold text-primary">2 weeks</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-background/80 rounded-lg shadow-soft">
                <span className="font-medium text-foreground">Customer Satisfaction</span>
                <span className="text-2xl font-bold text-primary">98%</span>
              </div>
            </div>

            <div className="bg-teazle-light-mint/30 p-6 rounded-lg border-l-4 border-primary">
              <p className="text-primary font-semibold mb-2">
                "Our automation has helped businesses handle over 100K inquiries monthly."
              </p>
              <p className="text-muted-foreground">
                Don't wait—reserve your spot today and transform your business operations with Teazle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;