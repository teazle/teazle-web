import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Globe, Zap } from "lucide-react";
import businessWoman from "@/assets/business-woman.jpg";
import automationDevice from "@/assets/automation-device.jpg";

const About = () => {
  const stats = [
    { number: "500+", label: "Businesses Served", icon: Globe },
    { number: "99.9%", label: "Uptime Guarantee", icon: Zap },
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
              Translating Vision
              <span className="block text-primary">Into Reality</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              At Teazle, we believe in the power of intelligent automation to transform businesses. 
              Our cutting-edge AI solutions help companies streamline operations, enhance customer 
              experiences, and drive sustainable growth.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Enterprise-Grade Solutions</h3>
                  <p className="text-muted-foreground">Scalable automation platforms built for enterprise requirements with enterprise-level security and compliance.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Proven Track Record</h3>
                  <p className="text-muted-foreground">Over 500 successful implementations with measurable ROI and customer satisfaction.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">24/7 Support</h3>
                  <p className="text-muted-foreground">Dedicated support team ensuring your automation runs smoothly around the clock.</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-soft group">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <Card className="bg-gradient-card border-0 shadow-elegant overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src={businessWoman}
                  alt="Professional business woman using automation solutions"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={stat.label}
                className="bg-gradient-card border-0 shadow-soft hover:shadow-elegant transition-all duration-300 animate-scale-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Business Impact */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Device Image */}
          <div className="relative animate-scale-in order-2 lg:order-1">
            <Card className="bg-gradient-card border-0 shadow-elegant overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src={automationDevice}
                  alt="Teazle automation device in modern office environment"
                  className="w-full h-[400px] object-cover"
                />
              </CardContent>
            </Card>
          </div>

          {/* Business Impact Content */}
          <div className="animate-fade-in order-1 lg:order-2">
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