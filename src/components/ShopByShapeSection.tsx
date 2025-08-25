import { Button } from "@/components/ui/button";
import hairClipsShapes from "@/assets/hair-clips-shapes.jpg";

const ShopByShapeSection = () => {
  const shapes = [
    {
      name: "Clip-In Extensions",
      description: "Easy application, perfect for daily wear",
      icon: "📎"
    },
    {
      name: "Tape-In Extensions", 
      description: "Semi-permanent solution, lasts 6-8 weeks",
      icon: "🎞️"
    },
    {
      name: "Weft Extensions",
      description: "Professional application, maximum volume",
      icon: "🌊"
    },
    {
      name: "Closure Pieces",
      description: "Complete coverage for thinning areas", 
      icon: "⭕"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Shop by <span className="text-gradient">Shape</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect extension type for your lifestyle and hair goals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="relative">
            <div className="card-luxury overflow-hidden">
              <img
                src={hairClipsShapes}
                alt="Hair Extension Shapes and Accessories"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-card shadow-luxury rounded-2xl p-6 border border-border/50">
              <div className="text-center">
                <p className="text-3xl font-bold text-gradient">50+</p>
                <p className="text-sm text-muted-foreground">Shape Options</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            {shapes.map((shape, index) => (
              <div
                key={shape.name}
                className="group p-6 rounded-2xl bg-secondary/30 hover:bg-secondary/50 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {shape.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {shape.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {shape.description}
                    </p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="card-luxury p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Not Sure Which Shape to Choose?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our hair experts are here to help you find the perfect match for your hair type and lifestyle.
            </p>
            <Button variant="outline" size="lg">
              Get Personal Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByShapeSection;