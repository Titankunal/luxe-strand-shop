import { Button } from "@/components/ui/button";
import remyHairHero from "@/assets/remy-hair-hero.jpg";
import virginHairHero from "@/assets/virgin-hair-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 grid grid-cols-2 opacity-30">
        <div className="relative">
          <img
            src={remyHairHero}
            alt="Luxury Remy Hair"
            className="w-full h-full object-cover"
          />
          <div className="image-overlay" />
        </div>
        <div className="relative">
          <img
            src={virginHairHero}
            alt="Premium Virgin Hair"
            className="w-full h-full object-cover"
          />
          <div className="image-overlay" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-padding max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center px-6 py-2 bg-secondary/80 rounded-full text-accent font-medium mb-6 animate-fade-in-up">
          <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-glow"></span>
          About Us - Premium Hair Collection
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 animate-fade-in-up">
          <span className="text-gradient">Heritage</span>
          <br />
          <span className="text-foreground">in Every</span>
          <br />
          <span className="text-gradient">Strand</span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
          Discover the finest collection of Remy and Virgin hair extensions, 
          crafted with heritage techniques and uncompromising quality for the modern woman.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up">
          <Button variant="luxury" size="xl" className="min-w-[200px]">
            Discover Remy Hair
          </Button>
          <Button variant="outline" size="xl" className="min-w-[200px]">
            Discover Virgin Hair
          </Button>
        </div>

        {/* New Arrivals Badge */}
        <div className="mt-16 animate-float">
          <div className="inline-flex items-center px-8 py-4 bg-card/90 backdrop-blur-sm rounded-2xl shadow-luxury border border-border/50">
            <div className="text-left">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">New Arrivals</p>
              <p className="text-lg font-semibold text-foreground">Latest Collection Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
    </section>
  );
};

export default HeroSection;