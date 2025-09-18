import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageSquare, Users, Brain, Zap, BarChart3, MessageCircle, Calendar, Bell } from "lucide-react";

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
      title: "Natural AI Chat",
      description: "Engage leads instantly and turn conversations into booked appointments",
      features: ["Smart lead qualification", "Automated scheduling", "Integrated reminders", "Real-time analytics"]
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
            Turn Conversations into Customers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From first contact to booked appointment, our AI does the heavy lifting for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
               <Card 
                 key={solution.title}
                 className="bg-gradient-card border-0 shadow-soft hover:shadow-elegant hover-scale transition-all duration-500 animate-fade-in opacity-0 group"
                 style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
               >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                   <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300">
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
              Turn Leads into Loyal Customers
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience how seamless AI-driven workflows handle the entire journey — start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary">Lead Engagement</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Your prospect clicks an ad or link and starts a conversation on Messenger or WhatsApp.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary">Qualification</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Your AI engages naturally, answers questions, and gathers key business details.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary">Scheduling</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Prospects see your real-time availability and lock in an appointment instantly.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Bell className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary">Reminders</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Automated follow-ups ensure they show up — with reminders sent 24h and 1h before the meeting.
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Solutions;