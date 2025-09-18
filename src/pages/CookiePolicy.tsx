import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-section border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Button 
            variant="ghost" 
            className="mb-6 hover:bg-primary/10"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cookie Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. What Are Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cookies are small text files that are stored on your device when you visit our website. They help us 
              provide you with a better experience by remembering your preferences, analyzing how you use our services, 
              and improving our website functionality.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Teazle uses cookies and similar tracking technologies for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Essential website functionality and security</li>
              <li>Remembering your preferences and settings</li>
              <li>Analyzing website traffic and user behavior</li>
              <li>Improving our services and user experience</li>
              <li>Providing personalized content and recommendations</li>
              <li>Measuring the effectiveness of our marketing campaigns</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Types of Cookies We Use</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Essential Cookies</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These cookies are necessary for the website to function properly. They enable core functionality such as 
                security, network management, and accessibility. You cannot opt-out of these cookies.
              </p>
              <div className="bg-card p-4 rounded-lg border">
                <p className="text-sm text-muted-foreground">
                  <strong>Examples:</strong> Session management, authentication, load balancing, security features
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Performance Cookies</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These cookies collect information about how visitors use our website, such as which pages are visited 
                most often and if users get error messages. This data helps us improve website performance.
              </p>
              <div className="bg-card p-4 rounded-lg border">
                <p className="text-sm text-muted-foreground">
                  <strong>Examples:</strong> Google Analytics, page load times, error tracking, usage statistics
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Functional Cookies</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These cookies allow the website to remember choices you make and provide enhanced, more personal features. 
                They may be set by us or by third-party providers whose services we have added to our pages.
              </p>
              <div className="bg-card p-4 rounded-lg border">
                <p className="text-sm text-muted-foreground">
                  <strong>Examples:</strong> Language preferences, theme settings, remembered login details, chat widgets
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Marketing Cookies</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These cookies are used to deliver advertisements more relevant to you and your interests. They may also 
                be used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.
              </p>
              <div className="bg-card p-4 rounded-lg border">
                <p className="text-sm text-muted-foreground">
                  <strong>Examples:</strong> Social media pixels, advertising networks, conversion tracking, remarketing
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Third-Party Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may use third-party services that set cookies on our website. These include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
              <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
              <li><strong>Customer Support Tools:</strong> For chat functionality and support services</li>
              <li><strong>Marketing Platforms:</strong> For advertising and campaign measurement</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These third parties have their own privacy policies and cookie practices, which we encourage you to review.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Managing Your Cookie Preferences</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Browser Settings</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>View what cookies are stored on your device</li>
                <li>Delete existing cookies</li>
                <li>Block cookies from specific websites</li>
                <li>Block all cookies</li>
                <li>Delete cookies when you close your browser</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Cookie Consent Management</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you first visit our website, you'll see a cookie consent banner where you can choose which types 
                of cookies to accept. You can change your preferences at any time by accessing the cookie settings 
                through the link in our website footer.
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <p className="text-yellow-800 dark:text-yellow-200 font-medium mb-2">Important Note:</p>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                Disabling certain cookies may affect the functionality of our website and limit your access to some features.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookie Retention</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cookies have different lifespans:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until manually deleted</li>
              <li><strong>Third-party Cookies:</strong> Managed according to the third party's retention policies</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Updates to This Cookie Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
              operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
              updated policy on our website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-foreground font-medium mb-2">Teazle Privacy Team</p>
              <p className="text-muted-foreground">Email: vincent.yap@teazlemedia.com</p>
              <p className="text-muted-foreground">Phone: +65 91031399</p>
              <p className="text-muted-foreground">Location: Singapore</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Useful Links</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For more information about cookies and how to manage them, visit:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li><a href="https://www.allaboutcookies.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">All About Cookies</a></li>
              <li><a href="https://www.youronlinechoices.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Your Online Choices</a></li>
              <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;