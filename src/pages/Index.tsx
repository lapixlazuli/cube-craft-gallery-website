import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CreativeDimensions from "@/components/CreativeDimensions";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CreativeDimensions />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
