import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Benefits />
        <Solutions />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
