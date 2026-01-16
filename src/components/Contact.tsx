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
      details: "+65 91051399",
      description: "Available 24/7 for urgent inquiries",
      action: () => window.open("tel:+6591051399", "_self")
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <div className="animate-fade-in order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-foreground mb-6 sm:mb-8 text-center lg:text-left">
              Get in Touch
            </h3>
            
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card 
                    key={info.title}
                    className="bg-gradient-card border-0 shadow-soft hover:shadow-elegant transition-all duration-300 animate-scale-in cursor-pointer active:scale-95"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={info.action}
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                            {info.title}
                          </h4>
                          <p className="text-base sm:text-lg font-medium text-primary mb-1 break-all">
                            {info.details}
                          </p>
                          <p className="text-xs sm:text-sm text-muted-foreground">
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

          {/* Contact Image */}
          <div className="animate-fade-in order-1 lg:order-2">
            <div className="h-64 sm:h-80 lg:h-[85%] p-6 sm:p-8 lg:p-12 flex items-center justify-center">
              <LazyImage 
                src={contactusImage} 
                alt="Business professional using mobile AI automation app - Contact Teazle" 
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