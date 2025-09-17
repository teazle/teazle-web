import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Users, Target } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      percentage: "35%",
      title: "Admin Reduction",
      description: "Reduce repetitive tasks and streamline operations",
      color: "text-primary"
    },
    {
      icon: Target,
      percentage: "40%",
      title: "Conversion Increase",
      description: "Grow revenue via intelligent automation",
      color: "text-accent"
    },
    {
      icon: Clock,
      percentage: "1 min",
      title: "Response Time",
      description: "Reply to inquiries instantly with AI",
      color: "text-teazle-teal"
    },
    {
      icon: Users,
      number: "100K+",
      title: "Inquiries Monthly",
      description: "Handle massive scale effortlessly",
      color: "text-teazle-mint"
    }
  ];

  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Key Benefits
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your business operations with measurable results and proven ROI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={benefit.title}
                className="bg-gradient-card border-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="text-center p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-background shadow-soft mb-6 group-hover:shadow-glow transition-all duration-300 ${benefit.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <div className={`text-4xl md:text-5xl font-bold mb-2 ${benefit.color}`}>
                    {benefit.percentage || benefit.number}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;