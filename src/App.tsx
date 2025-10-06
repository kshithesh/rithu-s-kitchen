import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Homepage } from "./components/Homepage";
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner@2.0.3";

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  price: number;
}

interface CartItem extends Product {
  quantity: number;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'products' | 'cart'>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Sample products data with pricing
  const products: Product[] = [
    {
      id: 1,
      name: "Homemade Cookies",
      description: "Freshly baked cookies with a perfect crispy edge and chewy center, made with love",
      imageUrl: "https://images.unsplash.com/photo-1643769781849-904ce171fe76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMGNvb2tpZXMlMjBmcmVzaCUyMGJha2VkfGVufDF8fHx8MTc1OTUwNTYzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "Homemade fresh cookies",
      price: 180
    },
    {
      id: 2,
      name: "Chocolate Brownies",
      description: "Rich, fudgy brownies made from scratch with premium chocolate and walnuts",
      imageUrl: "https://images.unsplash.com/photo-1629856428025-8689654d9fd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMGJyb3duaWVzJTIwY2hvY29sYXRlfGVufDF8fHx8MTc1OTUwNTY0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "Homemade chocolate brownies",
      price: 250
    },
    {
      id: 3,
      name: "Blueberry Muffins",
      description: "Fluffy, moist muffins bursting with fresh blueberries and a hint of vanilla",
      imageUrl: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMG11ZmZpbnMlMjBibHVlYmVycnl8ZW58MXx8fHwxNzU5NTA1NjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "Fresh blueberry muffins",
      price: 220
    },
    {
      id: 4,
      name: "Fresh Bread Loaf",
      description: "Soft, homemade bread baked daily with simple, wholesome ingredients",
      imageUrl: "https://images.unsplash.com/photo-1617406780191-b3b35fcc221f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMGJyZWFkJTIwbG9hZiUyMGZyZXNofGVufDF8fHx8MTc1OTUwNTY0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "Fresh homemade bread loaf",
      price: 350
    },
    {
      id: 5,
      name: "Cinnamon Rolls",
      description: "Warm, gooey cinnamon rolls with sweet glaze, perfect for breakfast or dessert",
      imageUrl: "https://images.unsplash.com/photo-1584966164218-42b0c3225e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMGNpbm5hbW9uJTIwcm9sbHN8ZW58MXx8fHx8MTc1OTUwNTY1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "Homemade cinnamon rolls",
      price: 300
    },
    {
      id: 6,
      name: "Banana Bread",
      description: "Moist and flavorful banana bread made with ripe bananas and a touch of cinnamon",
      imageUrl: "https://images.unsplash.com/photo-1584959730815-de397b40bdb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMGJhbmFuYSUyMGJyZWFkJTIwc2xpY2V8ZW58MXx8fHx8MTc1OTUwNTY1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "Homemade banana bread slice",
      price: 280
    }
  ];

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        toast.success(`Added another ${product.name} to cart!`);
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast.success(`${product.name} added to cart!`);
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    toast.success("Item removed from cart");
  };

  const clearCart = () => {
    setCartItems([]);
    toast.success("Cart cleared");
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Homepage 
            products={products}
            onAddToCart={addToCart}
            onNavigateToProducts={() => setCurrentPage('products')}
          />
        );
      case 'products':
        return (
          <Products 
            products={products}
            onAddToCart={addToCart}
          />
        );
      case 'cart':
        return (
          <Cart 
            cartItems={cartItems}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeFromCart}
            onClearCart={clearCart}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        cartItemCount={cartItemCount}
      />
      
      {renderCurrentPage()}
      
      <Toaster />
    </div>
  );
}