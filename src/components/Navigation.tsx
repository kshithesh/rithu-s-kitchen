import { Home, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

interface NavigationProps {
  currentPage: 'home' | 'order';
  onNavigate: (page: 'home' | 'order') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between px-8 py-6 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-medium text-primary">Pasticherria</h1>
        </div>
        <div className="flex items-center space-x-6">
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
            onClick={() => onNavigate('order')}
            className={`transition-colors ${
              currentPage === 'order' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Order
          </button>
        </div>
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
            variant={currentPage === 'order' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onNavigate('order')}
            className="flex flex-col items-center space-y-1 h-auto py-2"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="text-xs">Order</span>
          </Button>
        </div>
      </nav>

      {/* Mobile Logo Header */}
      <div className="md:hidden bg-background/80 backdrop-blur-sm border-b border-border px-6 py-4">
        <h1 className="text-xl font-medium text-primary text-center">Pasticherria</h1>
      </div>
    </>
  );
}