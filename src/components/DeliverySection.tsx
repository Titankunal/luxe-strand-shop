import { Truck, Shield, Clock, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const DeliverySection = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Cash on Delivery",
      description: "Pay when you receive your order. No upfront payment required.",
      highlight: "0% Risk"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Complimentary delivery on all orders above $150.",
      highlight: "Nationwide"
    },
    {
      icon: Shield,
      title: "Quality Guarantee", 
      description: "100% authentic products with quality assurance.",
      highlight: "Certified"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Express delivery within 2-3 business days.",
      highlight: "Express"
    }
  ];

  return (
    <section className="section-padding bg-accent text-accent-foreground">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            <span className="text-primary-glow">Cash on Delivery</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Customer pays upon delivery - Shop with confidence and pay only when you receive your premium hair extensions
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-background/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-300 group-hover:animate-glow">
                    <Icon className="h-10 w-10 text-primary-glow" />
                  </div>
                  
                  {/* Highlight Badge */}
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-semibold">
                    {feature.highlight}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-glow transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="opacity-80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-background/10 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto border border-primary/20">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Ready to Experience Premium Quality?
            </h3>
            <p className="text-xl opacity-90 mb-8">
              Start shopping with zero risk. Pay only when you're completely satisfied with your order.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                variant="luxury" 
                size="xl" 
                className="min-w-[200px] bg-primary-glow hover:bg-primary-glow/90"
              >
                Start Shopping
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="min-w-[200px] border-primary-glow text-primary-glow hover:bg-primary-glow hover:text-background"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 opacity-60">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary-glow">10K+</p>
            <p className="text-sm">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary-glow">5★</p>
            <p className="text-sm">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary-glow">99%</p>
            <p className="text-sm">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary-glow">2-3</p>
            <p className="text-sm">Days Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;