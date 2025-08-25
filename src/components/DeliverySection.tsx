import { Mail, Briefcase, MessageSquare, Truck, Wrench, Droplets, Phone, MessageCircle } from "lucide-react";

const DeliverySection = () => {
  const infoItems = [
    {
      icon: Mail,
      title: "Let’s text",
      desc: "Be the first to hear when you sign-up to SMS messaging.",
      links: ["Sign Up Now"],
    },
    {
      icon: Briefcase,
      title: "Services",
      desc: "We provide premium salon and hair care services for all your needs.",
      links: ["View Services"],
    },
    {
      icon: MessageSquare,
      title: "Expert Advice",
      desc: "Questions? Ask away. We love hearing from you.",
      links: ["Contact Us"],
    },
    {
      icon: Truck,
      title: "Free Shipping",
      desc: "On orders over £300.",
      links: ["About Shipping", "About Returns"],
    },
    {
      icon: Wrench,
      title: "Warranty & Repairs",
      desc: "We offer a one-year warranty on all products.",
      links: ["Repair Services"],
    },
    {
      icon: Droplets,
      title: "Washing & Cleaning",
      desc: "Gentle cleaning, moisture restoration, extended wear.",
      links: ["Learn More"],
    },
    {
      icon: Phone,
      title: "Phone Orders",
      desc: "Give us a call to place your order with our agents!",
      links: ["Contact Us"],
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      desc: "Questions? Ask away via WhatsApp.",
      links: ["Find Out More"],
    },
  ];

  return (
    <section className="section-padding bg-accent text-accent-foreground">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            <span className="text-primary-glow">Our Services</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover premium services designed to help you look and feel your best.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {infoItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="mb-4 flex items-center justify-center">
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="opacity-80 leading-relaxed mb-2">{item.desc}</p>

                <div className="space-y-1">
                  {item.links.map((label) => (
                    <a key={label} href="#" className="text-sm font-semibold underline">
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
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
