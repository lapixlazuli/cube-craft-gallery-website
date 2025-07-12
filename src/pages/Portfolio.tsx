import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
