import { Home, ShoppingCart, MessageCircle, Package } from "lucide-react";
import { Button } from "./ui/button";
import logoImage from 'figma:asset/31e5f2abb8d318b23f23344033ee5ad1d8be3c70.png';

interface NavigationProps {
  currentPage: 'home' | 'products' | 'cart';
  onNavigate: (page: 'home' | 'products' | 'cart') => void;
  cartItemCount: number;
}

export function Navigation({ currentPage, onNavigate, cartItemCount }: NavigationProps) {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+1234567890"; // Replace with actual WhatsApp business number
    const message = "Hi! I'd like to know more about Rithu's Kitchen products.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between px-8 py-6 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center space-x-3">
          <img 
            src={logoImage} 
            alt="Rithu's Kitchen Logo" 
            className="h-12 w-12 object-contain"
          />
          <h1 className="text-2xl font-medium text-primary">Rithu's Kitchen</h1>
        </div>
        
        {/* Center Navigation */}
        <div className="flex items-center space-x-8">
          <button
            onClick={() => onNavigate('home')}
            className={`transition-colors ${
              currentPage === 'home' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('products')}
            className={`transition-colors ${
              currentPage === 'products' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => onNavigate('cart')}
            className={`relative transition-colors ${
              currentPage === 'cart' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Cart
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>

        {/* WhatsApp Button */}
        <Button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white flex items-center space-x-2"
        >
          <MessageCircle className="h-4 w-4" />
          <span>WhatsApp</span>
        </Button>
      </nav>

      {/* Mobile Navigation - Sticky Bottom */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border z-50">
        <div className="flex items-center justify-around py-3">
          <Button
            variant={currentPage === 'home' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onNavigate('home')}
            className="flex flex-col items-center space-y-1 h-auto py-2"
          >
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </Button>
          <Button
            variant={currentPage === 'products' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onNavigate('products')}
            className="flex flex-col items-center space-y-1 h-auto py-2"
          >
            <Package className="h-5 w-5" />
            <span className="text-xs">Products</span>
          </Button>
          <Button
            variant={currentPage === 'cart' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onNavigate('cart')}
            className="relative flex flex-col items-center space-y-1 h-auto py-2"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="text-xs">Cart</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartItemCount > 9 ? '9+' : cartItemCount}
              </span>
            )}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleWhatsAppClick}
            className="flex flex-col items-center space-y-1 h-auto py-2 text-green-600"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-xs">WhatsApp</span>
          </Button>
        </div>
      </nav>

      {/* Mobile Logo Header */}
      <div className="md:hidden bg-background/80 backdrop-blur-sm border-b border-border px-6 py-4">
        <div className="flex items-center justify-center space-x-2">
          <img 
            src={logoImage} 
            alt="Rithu's Kitchen Logo" 
            className="h-8 w-8 object-contain"
          />
          <h1 className="text-xl font-medium text-primary">Rithu's Kitchen</h1>
        </div>
      </div>
    </>
  );
}