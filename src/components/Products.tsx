import { ProductCard } from "./ProductCard";

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  price: number;
}

interface ProductsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function Products({ products, onAddToCart }: ProductsProps) {
  return (
    <div className="min-h-screen bg-background py-8 md:py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl mb-4 text-foreground">Our Products</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each item is carefully crafted by our master bakers using traditional techniques and premium ingredients
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* Mobile spacing for bottom navigation */}
        <div className="md:hidden h-20"></div>
      </div>
    </div>
  );
}