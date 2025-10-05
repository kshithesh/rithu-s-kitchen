import { Button } from "./ui/button";
import { ProductCard } from "./ProductCard";

interface HomepageProps {
  onNavigateToOrder: () => void;
}

export function Homepage({ onNavigateToOrder }: HomepageProps) {
  const products = [
    {
      name: "Fresh Croissants",
      description: "Buttery, flaky pastries baked fresh daily with premium French butter",
      imageUrl: "https://images.unsplash.com/photo-1751151856149-5ebf1d21586a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY3JvaXNzYW50cyUyMGJha2VyeXxlbnwxfHx8fDE3NTk0OTg1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "Golden fresh croissants"
    },
    {
      name: "French Macarons",
      description: "Delicate almond cookies with creamy ganache filling in vibrant colors",
      imageUrl: "https://images.unsplash.com/photo-1580914653908-19a80ae52b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMG1hY2Fyb25zJTIwcGFzdHJ5fGVufDF8fHx8MTc1OTQ5ODUzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "Colorful French macarons"
    },
    {
      name: "Chocolate Cake",
      description: "Rich, moist chocolate cake layered with smooth chocolate ganache",
      imageUrl: "https://images.unsplash.com/photo-1700448293876-07dca826c161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwc2xpY2V8ZW58MXx8fHwxNzU5MzczOTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "Decadent chocolate cake slice"
    },
    {
      name: "Artisan Bread",
      description: "Handcrafted sourdough loaves with perfect crust and soft interior",
      imageUrl: "https://images.unsplash.com/photo-1663904460424-91895028aa9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJyZWFkJTIwbG9hdmVzfGVufDF8fHx8MTc1OTQ5MTM0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "Fresh artisan bread loaves"
    },
    {
      name: "Danish Pastries",
      description: "Flaky pastries filled with seasonal fruits and sweet cream",
      imageUrl: "https://images.unsplash.com/photo-1657026910103-38e7f9f306a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYW5pc2glMjBwYXN0cmllcyUyMGJha2VyeXxlbnwxfHx8fDE3NTk0OTg1NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "Fresh Danish pastries"
    },
    {
      name: "Gourmet Cupcakes",
      description: "Moist cupcakes topped with artisanal buttercream in various flavors",
      imageUrl: "https://images.unsplash.com/photo-1622984799015-9adf9e1e4234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlcyUyMGNvbG9yZnVsJTIwZnJvc3Rpbmd8ZW58MXx8fHwxNzU5NDk4NTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "Colorful gourmet cupcakes"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-secondary/50 py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl mb-6 text-foreground">
            Welcome to Pasticherria
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Artisanal baked goods crafted with love and the finest ingredients. 
            From delicate pastries to hearty breads, we bring you the authentic taste of European bakery tradition.
          </p>
          <Button 
            size="lg" 
            onClick={onNavigateToOrder}
            className="px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Order Now
          </Button>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Our Specialties</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each item is carefully crafted by our master bakers using traditional techniques and premium ingredients
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                description={product.description}
                imageUrl={product.imageUrl}
                imageAlt={product.imageAlt}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              onClick={onNavigateToOrder}
              className="px-8 py-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              Place Your Order
            </Button>
          </div>
        </div>
      </section>

      {/* Mobile spacing for bottom navigation */}
      <div className="md:hidden h-20"></div>
    </div>
  );
}