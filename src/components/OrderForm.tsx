import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { toast } from "sonner@2.0.3";

export function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderDetails: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.phone || !formData.orderDetails) {
      toast.error("Please fill in all fields");
      return;
    }

    // Mock submission
    toast.success("Order submitted successfully! We'll contact you soon.");
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      orderDetails: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background py-8 md:py-16">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl mb-4 text-foreground">Place Your Order</h1>
          <p className="text-lg text-muted-foreground">
            Tell us what delicious treats you'd like, and we'll prepare them fresh for you
          </p>
        </div>

        <Card className="shadow-lg border-border">
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="bg-input-background border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="bg-input-background border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="bg-input-background border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="orderDetails">Order Details</Label>
                <Textarea
                  id="orderDetails"
                  name="orderDetails"
                  value={formData.orderDetails}
                  onChange={handleChange}
                  placeholder="Please describe what you'd like to order (e.g., 2 chocolate croissants, 1 dozen macarons in assorted flavors, etc.)"
                  className="bg-input-background border-border min-h-[120px]"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full shadow-lg hover:shadow-xl transition-shadow"
              >
                Submit Order
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="mt-8 text-center">
          <h3 className="mb-4 text-foreground">Need Help?</h3>
          <p className="text-muted-foreground mb-2">
            Call us at <span className="text-primary">+1 (555) 123-BAKE</span>
          </p>
          <p className="text-muted-foreground">
            Or email us at <span className="text-primary">orders@pasticherria.com</span>
          </p>
        </div>

        {/* Mobile spacing for bottom navigation */}
        <div className="md:hidden h-20"></div>
      </div>
    </div>
  );
}