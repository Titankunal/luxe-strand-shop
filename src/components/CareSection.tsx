import { Droplets, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import hairCareProducts from "@/assets/hair-care-products.jpg";

const CareSection = () => {
  const careSteps = [
    {
      icon: Droplets,
      title: "Gentle Cleansing",
      description: "Use sulfate-free shampoos to maintain hair integrity and natural oils",
      tips: ["Lukewarm water only", "Gentle massage motions", "Focus on scalp, not lengths"]
    },
    {
      icon: Sparkles,
      title: "Moisture Restoration", 
      description: "Deep conditioning treatments to keep extensions soft and manageable",
      tips: ["Weekly deep treatments", "Leave-in conditioners", "Natural oil treatments"]
    },
    {
      icon: Clock,
      title: "Extended Wear",
      description: "Proper maintenance techniques for maximum lifespan and beauty",
      tips: ["Protective sleeping styles", "Regular brushing routine", "Professional check-ups"]
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-secondary/20 to-primary/5">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Washing & <span className="text-gradient">Cleaning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert care instructions to maintain the beauty and longevity of your premium hair extensions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Care Steps */}
          <div className="space-y-8">
            {careSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start space-x-6 p-6 rounded-2xl bg-card/50 border border-border/50 hover:bg-card hover:shadow-card transition-all duration-300">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center group-hover:animate-glow">
                        <Icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Tips */}
                      <div className="space-y-2">
                        {step.tips.map((tip, tipIndex) => (
                          <div key={tipIndex} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                            <span className="text-sm text-accent font-medium">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image and Care Kit */}
          <div className="relative">
            <div className="card-luxury overflow-hidden">
              <img
                src={hairCareProducts}
                alt="Premium Hair Care Products"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/60 via-transparent to-transparent" />
              
              {/* Care Kit Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                  <h4 className="font-serif text-xl font-bold text-foreground mb-2">
                    Complete Care Kit
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Everything you need for perfect hair maintenance
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary">$89</span>
                      <span className="text-lg text-muted-foreground line-through ml-2">$120</span>
                    </div>
                    <Button variant="luxury" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Benefits */}
            <div className="absolute -top-4 -right-4 bg-card shadow-glow rounded-2xl p-4 border border-primary/20 animate-float">
              <div className="text-center">
                <p className="text-lg font-bold text-gradient">30 Days</p>
                <p className="text-xs text-muted-foreground">Money Back</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Need Professional Care?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book a consultation with our certified hair extension specialists
            </p>
            <Button variant="outline" size="lg" className="mr-4">
              Book Consultation
            </Button>
            <Button variant="luxury" size="lg">
              Shop Care Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareSection;