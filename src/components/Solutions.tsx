import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageSquare, Users, Brain, Zap, BarChart3 } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: MessageSquare,
      title: "Instant replies to inquiries 24/7",
      description: "AI-powered customer service that never sleeps",
      features: ["Real-time responses", "Multi-language support", "Integration ready"]
    },
    {
      icon: Users,
      title: "Pre-qualified lead segmentation",
      description: "Smart lead scoring and automated qualification",
      features: ["Advanced filtering", "Behavioral analysis", "CRM integration"]
    },
    {
      icon: Brain,
      title: "Automated follow-ups",
      description: "Nurture leads with intelligent conversation flows",
      features: ["Personalized messaging", "Timing optimization", "Conversion tracking"]
    },
    {
      icon: BarChart3,
      title: "Feedback surveys",
      description: "Gather insights and improve customer satisfaction",
      features: ["Custom questionnaires", "Analytics dashboard", "Action insights"]
    }
  ];

  const workflowSteps = [
    {
      icon: MessageSquare,
      title: "Initial Contact",
      description: "Parent clicks on Facebook Ad and initiates Messenger chat"
    },
    {
      icon: Brain,
      title: "Data Collection",
      description: "Bot answers questions and collects age/subject details"
    },
    {
      icon: CheckCircle,
      title: "Scheduling",
      description: "Presents available time slots; parent selects preferred date"
    },
    {
      icon: Zap,
      title: "Reminders",
      description: "Automated reminders sent 24h and 1h before appointment"
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strategic Solutions */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Strategic Automation Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI-powered tools designed to transform your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card 
                key={solution.title}
                className="bg-gradient-card border-0 shadow-soft hover:shadow-elegant transition-all duration-300 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Sample Workflow */}
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Sample Workflow
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our automation seamlessly handles customer interactions from initial contact to conversion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.title}
                  className="relative animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Card className="bg-gradient-card border-0 shadow-soft hover:shadow-elegant transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teazle-light-mint text-primary mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-3">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Connection Arrow */}
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <div className="w-6 h-0.5 bg-primary opacity-30"></div>
                      <div className="absolute -right-1 -top-1 w-2 h-2 border-r-2 border-t-2 border-primary opacity-30 rotate-45"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-soft">
              View All Workflow Examples
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;