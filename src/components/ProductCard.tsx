import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
  rating?: number;
  reviews?: number;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  category,
  isNew = false,
  isBestseller = false,
  rating = 5,
  reviews = 0
}: ProductCardProps) => {
  return (
    <div className="card-product group">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/5]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-accent/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && <Badge className="bg-primary text-primary-foreground">New</Badge>}
          {isBestseller && <Badge variant="secondary">Bestseller</Badge>}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
          <Button size="icon" variant="ghost" className="bg-background/90 hover:bg-background shadow-md">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" className="bg-background/90 hover:bg-background shadow-md">
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {/* Add to Cart Button */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
          <Button variant="luxury" className="w-full" size="sm">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">
          {category}
        </p>
        
        <h3 className="font-serif text-lg font-semibold text-foreground mb-3 line-clamp-2">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-sm ${i < rating ? 'text-primary' : 'text-muted-foreground'}`}
              >
                ★
              </span>
            ))}
          </div>
          {reviews > 0 && (
            <span className="text-sm text-muted-foreground">({reviews})</span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-foreground">
            ${price}
          </span>
          {originalPrice && (
            <span className="text-lg text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;