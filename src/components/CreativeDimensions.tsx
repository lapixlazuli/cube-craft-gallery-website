import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Cpu, Building, Waves, Palette, Fish } from "lucide-react";

const CreativeDimensions = () => {
  const dimensions = [
    {
      name: "Eco Dimension",
      description: "Sustainable 3D printing solutions",
      icon: Leaf,
      color: "bg-gradient-eco",
      textColor: "text-green-700",
    },
    {
      name: "Tech Dimension", 
      description: "Cutting-edge prototypes & gadgets",
      icon: Cpu,
      color: "bg-gradient-tech",
      textColor: "text-blue-violet",
    },
    {
      name: "Architecture",
      description: "Precision architectural models",
      icon: Building,
      color: "bg-muted",
      textColor: "text-foreground",
    },
    {
      name: "Reef Aquarium",
      description: "Marine habitat innovations",
      icon: Waves,
      color: "bg-neon-cyan",
      textColor: "text-white",
    },
    {
      name: "Luix Shrimps",
      description: "Ornamental aquatic solutions",
      icon: Fish,
      color: "bg-blue-violet",
      textColor: "text-white",
    },
    {
      name: "Creativity",
      description: "Limitless artistic expression",
      icon: Palette,
      color: "bg-gradient-cube",
      textColor: "text-white",
    },
  ];

  return (
    <section id="dimensions" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            Creative <span className="text-neon-pink">Dimensions</span>
          </h2>
          <p className="text-xl text-muted-foreground font-montserrat max-w-3xl mx-auto">
            Explore our diverse portfolio across multiple dimensions of creativity and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dimensions.map((dimension, index) => {
            const IconComponent = dimension.icon;
            return (
              <Card 
                key={dimension.name} 
                className="hover-scale cursor-pointer group overflow-hidden border-2 hover:border-neon-pink transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardContent className="p-0">
                  <div className={`${dimension.color} p-8 text-center`}>
                    <IconComponent 
                      size={48} 
                      className={`${dimension.textColor} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} 
                    />
                    <h3 className={`text-2xl font-bold font-montserrat mb-2 ${dimension.textColor}`}>
                      {dimension.name}
                    </h3>
                    <p className={`${dimension.textColor} opacity-90 font-montserrat`}>
                      {dimension.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CreativeDimensions;