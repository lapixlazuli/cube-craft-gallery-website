import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cubes.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-neon-pink rounded-lg cube-float opacity-60 transform rotate-12"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-neon-cyan rounded-lg cube-float opacity-70 transform -rotate-12" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-blue-violet rounded-lg cube-float opacity-50 transform rotate-45" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-gradient-cube rounded-lg cube-float opacity-60" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold font-montserrat mb-6 leading-tight">
            We turn <span className="text-neon-pink">ideas</span> into{" "}
            <span className="text-neon-cyan">reality</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl font-medium font-montserrat mb-4 text-muted-foreground">
            with precision, quality, and innovation
          </p>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl font-montserrat mb-12 text-foreground">
            On-demand printing. Quality under control.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold min-w-[200px]"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
            </Button>
            
            <Button 
              variant="neon-cyan" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold min-w-[200px]"
            >
              Buy Product
            </Button>
            
            <Button 
              variant="blue-violet" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold min-w-[200px]"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Create Product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;