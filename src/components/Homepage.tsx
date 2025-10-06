import { ProductCarousel } from "./ProductCarousel";
import { ProductCard } from "./ProductCard";
import { Button } from "./ui/button";

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  price: number;
}

interface HomepageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onNavigateToProducts: () => void;
}

export function Homepage({ products, onAddToCart, onNavigateToProducts }: HomepageProps) {
  // Featured products for carousel (first 4)
  const featuredProducts = products.slice(0, 4);
  // Additional products for grid (remaining)
  const additionalProducts = products.slice(4, 8);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Carousel Section */}
      <ProductCarousel 
        products={featuredProducts}
      />

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/30 to-accent/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-foreground">
            Welcome to Rithu's Kitchen
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Delicious homemade treats crafted with love and the finest ingredients. 
            From traditional favorites to innovative creations, we bring you authentic flavors that feel like home.
            Every item is made fresh daily with care, using family recipes and premium ingredients.
          </p>
        </div>
      </section>

      {/* More Products Section */}
      {additionalProducts.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4 text-foreground">More Delicious Treats</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover more of our handcrafted specialties
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button 
                size="lg" 
                onClick={onNavigateToProducts}
                variant="outline"
                className="px-8 py-3 shadow-lg hover:shadow-xl transition-shadow"
              >
                View All Products
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Mobile spacing for bottom navigation */}
      <div className="md:hidden h-20"></div>
    </div>
  );
}