import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+65 91031399",
      description: "Available 24/7 for urgent inquiries"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@teazle.ai",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Singapore",
      description: "Schedule a consultation"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your business with AI automation. Contact us today to discuss your needs 
            and discover how Teazle can drive your success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Get in Touch
            </h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card 
                    key={info.title}
                    className="bg-gradient-card border-0 shadow-soft hover:shadow-elegant transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h4>
                          <p className="text-lg font-medium text-primary mb-1">
                            {info.details}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* CTA Box */}
            <Card className="bg-gradient-hero border-0 shadow-elegant">
              <CardContent className="p-8 text-center">
                <h4 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Transform Your Business?
                </h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Join 500+ businesses that trust Teazle for their automation needs. 
                  Schedule a free consultation today.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-soft group">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="bg-gradient-card border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="John"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input 
                    type="email"
                    placeholder="john@company.com"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input 
                    placeholder="Your Company Name"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your automation needs..."
                    rows={4}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 shadow-soft group"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy. 
                  We'll never share your information with third parties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;