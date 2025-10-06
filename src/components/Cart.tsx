import { Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CartItem {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  price: number;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onClearCart: () => void;
}

export function Cart({ cartItems, onUpdateQuantity, onRemoveItem, onClearCart }: CartProps) {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleWhatsAppOrder = () => {
    const phoneNumber = "+919949002388"; // Replace with actual WhatsApp business number
    
    let message = "Hi! I'd like to place an order for the following items:\n\n";
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x${item.quantity} - ₹${(item.price * item.quantity)}\n`;
    });
    
    message += `\nTotal: ₹${total}\n`;
    message += `Total Items: ${itemCount}\n\n`;
    message += "Please confirm availability and delivery details. Thank you!";
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background py-8 md:py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl mb-4 text-foreground">Your Cart</h1>
            <div className="bg-muted rounded-lg p-12">
              <p className="text-lg text-muted-foreground mb-6">Your cart is empty</p>
              <p className="text-muted-foreground">Add some delicious items from our bakery to get started!</p>
            </div>
          </div>
          {/* Mobile spacing for bottom navigation */}
          <div className="md:hidden h-20"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 md:py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl text-foreground">Your Cart</h1>
          <Button 
            variant="outline" 
            onClick={onClearCart}
            className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
          >
            Clear Cart
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="border-border">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-24 h-24 flex-shrink-0">
                      <ImageWithFallback
                        src={item.imageUrl}
                        alt={item.imageAlt}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="mb-1 text-foreground">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                      <p className="text-lg text-primary">₹{item.price} each</p>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center text-foreground">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <p className="text-foreground">
                        ₹{(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="border-border sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Items ({itemCount})</span>
                  <span className="text-foreground">₹{total}</span>
                </div>
                
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between">
                    <span className="text-foreground">Total</span>
                    <span className="text-xl text-foreground">₹{total}</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center space-x-2"
                  size="lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Complete Purchase via WhatsApp</span>
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  You'll be redirected to WhatsApp to confirm your order and arrange delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mobile spacing for bottom navigation */}
        <div className="md:hidden h-20"></div>
      </div>
    </div>
  );
}