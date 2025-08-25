import { Button } from "@/components/ui/button";
import remyHairHero from "@/assets/remy-hair-hero.jpg";
import virginHairHero from "@/assets/virgin-hair-hero.jpg";

const CollectionsSection = () => {
  const collections = [
    {
      title: "Remy Hair",
      description: "Premium quality with cuticles aligned for natural flow and shine",
      features: ["100% Human Hair", "Natural Cuticle Direction", "Long-lasting", "Easy to Style"],
      image: remyHairHero,
      buttonText: "Shop Remy Hair"
    },
    {
      title: "Virgin Hair", 
      description: "Completely unprocessed hair in its most natural state",
      features: ["Never Chemically Treated", "Superior Quality", "Maximum Durability", "Natural Texture"],
      image: virginHairHero,
      buttonText: "Shop Virgin Hair"
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Explore Our <span className="text-gradient">Collections</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect hair extension for your unique style and needs
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {collections.map((collection, index) => (
            <div
              key={collection.title}
              className={`card-luxury group overflow-hidden ${
                index === 0 ? "animate-fade-in-up" : "animate-fade-in-up"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/70 via-accent/20 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6">
                  <div className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="font-serif font-semibold text-accent">Premium Quality</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
                  {collection.title}
                </h3>
                
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {collection.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {collection.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <span className="text-sm text-accent font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                >
                  {collection.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button variant="luxury" size="xl">
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;