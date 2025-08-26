import { useState, useEffect } from "react";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ["Home", "Collections", "Care Guide", "About Us", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/40 backdrop-blur-lg border-b border-border/50 shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between py-2 px-4 sm:px-6 relative">
          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1
              className={`font-serif text-gradient transition-all duration-1000 ${
                isScrolled
                  ? "text-3xl font-extrabold"
                  : "text-xl font-bold"
              }`}
            >
              Ormee Hairs
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center space-x-3 ml-auto">
            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Search products..."
                    className="w-48 bg-secondary/50 border-primary/30 text-sm"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  className="hover:bg-secondary"
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-secondary"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>

            {/* User Account */}
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-secondary"
              aria-label="Account"
            >
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-secondary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border/50 py-3 px-4 sm:px-6 bg-background/70 backdrop-blur-md">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
