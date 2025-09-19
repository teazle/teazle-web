import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LazyImage } from "@/components/ui/lazy-image";
import { Phone, Mail, ArrowRight } from "lucide-react";
import contactusImage from "@/assets/contactus.webp";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+65 91031399",
      description: "Available 24/7 for urgent inquiries",
      action: () => window.open("tel:+6591031399", "_self")
    },
    {
      icon: Mail,
      title: "Email Us", 
      details: "vincent.yap@teazlemedia.com",
      description: "We'll respond within 24 hours",
      action: () => window.open("mailto:vincent.yap@teazlemedia.com", "_self")
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
                    className="bg-gradient-card border-0 shadow-soft hover:shadow-elegant transition-all duration-300 animate-scale-in cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={info.action}
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


          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            {/* Contact Image */}
            <div className="h-[85%] p-8 flex items-center justify-center">
              <LazyImage 
                src={contactusImage} 
                alt="Professional using mobile device" 
                className="w-full h-full object-contain rounded-2xl shadow-elegant hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;