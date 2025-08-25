import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerLinks = {
    "Shop": [
      "Remy Hair Extensions",
      "Virgin Hair Extensions", 
      "Clip-In Extensions",
      "Tape-In Extensions",
      "Weft Extensions",
      "Closure Pieces"
    ],
    "Care & Support": [
      "Care Instructions",
      "Installation Guide",
      "Styling Tips",
      "Maintenance",
      "Color Matching",
      "Size Guide"
    ],
    "Company": [
      "About Us",
      "Our Story",
      "Team",
      "Careers",
      "Press",
      "Awards"
    ],
    "Customer Service": [
      "Contact Us",
      "Shipping Info",
      "Returns",
      "Size Guide",
      "FAQ",
      "Live Chat"
    ]
  };

  return (
    <footer className="bg-accent text-accent-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary/20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Stay Beautiful with <span className="text-primary-glow">Luxe Strand</span>
            </h3>
            <p className="text-xl opacity-90 mb-8">
              Get exclusive access to new collections, styling tips, and special offers
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-background/10 border-primary/30 text-accent-foreground placeholder:text-accent-foreground/60"
              />
              <Button variant="luxury" className="bg-primary-glow hover:bg-primary-glow/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif font-bold text-primary-glow mb-4">
              Luxe Strand
            </h2>
            <p className="opacity-90 leading-relaxed mb-6">
              Premium hair extensions crafted with heritage techniques. 
              Discover the finest collection of Remy and Virgin hair for the modern woman.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-primary-glow mr-3" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-primary-glow mr-3" />
                <span className="text-sm">hello@luxestrand.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-primary-glow mr-3" />
                <span className="text-sm">123 Beauty Ave, NYC 10001</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-primary-glow mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm opacity-80 hover:opacity-100 hover:text-primary-glow transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-6 mt-12 pt-8 border-t border-primary/20">
          {[
            { icon: Facebook, label: "Facebook" },
            { icon: Instagram, label: "Instagram" }, 
            { icon: Twitter, label: "Twitter" },
            { icon: Youtube, label: "YouTube" }
          ].map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#"
              className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 group"
              aria-label={label}
            >
              <Icon className="h-5 w-5 text-primary-glow group-hover:scale-110 transition-transform duration-300" />
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 pt-8 border-t border-primary/20 text-sm opacity-60">
          <p>&copy; 2024 Luxe Strand. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-100 transition-opacity duration-300">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity duration-300">Terms of Service</a>
            <a href="#" className="hover:opacity-100 transition-opacity duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;