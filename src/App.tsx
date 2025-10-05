import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Homepage } from "./components/Homepage";
import { OrderForm } from "./components/OrderForm";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'order'>('home');

  const navigateToOrder = () => setCurrentPage('order');

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
      />
      
      {currentPage === 'home' ? (
        <Homepage onNavigateToOrder={navigateToOrder} />
      ) : (
        <OrderForm />
      )}
      
      <Toaster />
    </div>
  );
}