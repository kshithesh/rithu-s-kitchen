import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border-border">
      <div className="aspect-square overflow-hidden">
        <ImageWithFallback
          src={product.imageUrl}
          alt={product.imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-foreground flex-1">{product.name}</h3>
          <span className="text-lg text-primary ml-2">₹{product.price}</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{product.description}</p>
        <Button
          onClick={() => onAddToCart(product)}
          className="w-full flex items-center justify-center space-x-2"
          size="sm"
        >
          <Plus className="h-4 w-4" />
          <span>Add to Cart</span>
        </Button>
      </CardContent>
    </Card>
  );
}