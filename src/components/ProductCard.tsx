import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";

interface ProductCardProps {
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export function ProductCard({ name, description, imageUrl, imageAlt }: ProductCardProps) {
  return (
    <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border-border">
      <div className="aspect-square overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="mb-2 text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}