import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import portfolioArch from "@/assets/portfolio-architecture.jpg";
import portfolioEco from "@/assets/portfolio-eco.jpg";
import portfolioTech from "@/assets/portfolio-tech.jpg";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const portfolioItems = [
    {
      id: 1,
      title: "Modern Office Complex",
      category: "Architecture",
      image: portfolioArch,
      description: "Precision architectural model showcasing modern design",
    },
    {
      id: 2,
      title: "Sustainable Planters",
      category: "Eco",
      image: portfolioEco,
      description: "Eco-friendly 3D printed plant containers",
    },
    {
      id: 3,
      title: "IoT Prototype Case",
      category: "Tech",
      image: portfolioTech,
      description: "Custom housing for electronic prototypes",
    },
    {
      id: 4,
      title: "Residential Tower",
      category: "Architecture",
      image: portfolioArch,
      description: "Detailed scale model of residential complex",
    },
    {
      id: 5,
      title: "Solar Panel Mount",
      category: "Eco",
      image: portfolioEco,
      description: "Innovative mounting system for renewable energy",
    },
    {
      id: 6,
      title: "Sensor Housing",
      category: "Tech",
      image: portfolioTech,
      description: "Weatherproof housing for environmental sensors",
    },
  ];

  const filters = ["All", "Architecture", "Eco", "Tech", "Reef", "Creativity"];

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            Our <span className="text-neon-cyan">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground font-montserrat max-w-3xl mx-auto mb-8">
            Discover the precision and innovation behind every project we create
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "neon-pink" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="font-montserrat"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden hover-glow cursor-pointer border-2 hover:border-neon-cyan transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold font-montserrat mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm opacity-90 font-montserrat">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-neon-pink font-montserrat">
                      {item.category}
                    </span>
                    <Button variant="ghost" size="sm" className="text-neon-cyan hover:text-neon-pink">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;