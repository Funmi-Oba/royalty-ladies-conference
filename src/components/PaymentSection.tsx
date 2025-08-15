import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, CreditCard, ShoppingBag } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { OrderData } from "@/pages/Index";

interface PaymentSectionProps {
  orderData: OrderData;
}

const PaymentSection = ({ orderData }: PaymentSectionProps) => {
  const { toast } = useToast();
  
  const shirtTotal = orderData.shirtQuantity * 6000;
  const capTotal = orderData.wantCap ? orderData.capQuantity * 3000 : 0;
  const grandTotal = shirtTotal + capTotal;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  const handleWhatsAppConfirmation = () => {
    const orderSummary = `
Order Summary:
- T-shirt: ${orderData.shirtColor} (Size: ${orderData.shirtSize}) x${orderData.shirtQuantity} = ₦${shirtTotal.toLocaleString()}${orderData.wantCap ? `
- Cap: ${orderData.capColor} x${orderData.capQuantity} = ₦${capTotal.toLocaleString()}` : ''}

Total Amount: ₦${grandTotal.toLocaleString()}

I have made payment for my Royal Ladies Conference merchandise order. Please find my payment receipt attached for confirmation.`;
    
    const message = encodeURIComponent(orderSummary);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <section id="payment" className="py-20 px-4 bg-muted">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent mb-4 animate-shimmer bg-300%">
            Payment Information
          </h2>
          <p className="text-xl text-muted-foreground">
            Complete your merchandise order by making payment to the account below
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <Card className="border-purple/20 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple to-pink rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-soft">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-purple">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-purple/10 rounded-lg border border-purple/20">
                <h3 className="font-semibold text-purple mb-2">T-Shirt</h3>
                <p className="text-sm text-gray-600">Color: <span className="font-medium">{orderData.shirtColor}</span></p>
                <p className="text-sm text-gray-600">Size: <span className="font-medium">{orderData.shirtSize}</span></p>
                <p className="text-sm text-gray-600">Quantity: <span className="font-medium">{orderData.shirtQuantity}</span></p>
                <p className="text-sm text-gray-600">Price: <span className="font-medium">₦{shirtTotal.toLocaleString()}</span></p>
              </div>
              
              {orderData.wantCap && (
                <div className="p-4 bg-pink/10 rounded-lg border border-pink/20">
                  <h3 className="font-semibold text-pink mb-2">Cap</h3>
                  <p className="text-sm text-gray-600">Color: <span className="font-medium">{orderData.capColor}</span></p>
                  <p className="text-sm text-gray-600">Size: <span className="font-medium">One Size Fits All</span></p>
                  <p className="text-sm text-gray-600">Quantity: <span className="font-medium">{orderData.capQuantity}</span></p>
                  <p className="text-sm text-gray-600">Price: <span className="font-medium">₦{capTotal.toLocaleString()}</span></p>
                </div>
              )}
              
              <div className="p-4 bg-gradient-to-r from-purple/10 to-pink/10 rounded-lg border border-purple/20">
                <h3 className="font-bold text-lg text-purple">Total Amount</h3>
                <p className="text-2xl font-bold text-purple">₦{grandTotal.toLocaleString()}</p>
              </div>
            </CardContent>
          </Card>

          {/* Bank Payment Details */}
          <Card className="border-pink/20 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink to-purple rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-soft">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl text-pink">Bank Payment Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-pink/10 rounded-lg border border-pink/20">
                <div>
                  <p className="font-medium text-sm text-gray-600">Account Number</p>
                  <p className="text-xl font-bold text-pink">1308014283</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard("1308014283", "Account number")}
                  className="hover:bg-pink/10"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex justify-between items-center p-4 bg-purple/10 rounded-lg border border-purple/20">
                <div>
                  <p className="font-medium text-sm text-gray-600">Account Name</p>
                  <p className="text-xl font-bold text-purple">Royalty Ladies</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard("Royalty Ladies", "Account name")}
                  className="hover:bg-purple/10"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex justify-between items-center p-4 bg-pink/10 rounded-lg border border-pink/20">
                <div>
                  <p className="font-medium text-sm text-gray-600">Bank Name</p>
                  <p className="text-xl font-bold text-pink">Providus Bank</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard("Providus Bank", "Bank name")}
                  className="hover:bg-pink/10"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="text-center pt-6">
              <p className="text-sm text-muted-foreground mb-4">
                After making your payment, click the button below to share your receipt for confirmation
              </p>
              <Button 
                variant="elegant" 
                size="lg"
                onClick={handleWhatsAppConfirmation}
                className="text-lg bg-purple text-white px-8 py-3 hover-scale animate-enter shadow-glow"
              >
                I have made my payment
              </Button>
            </div>
          </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;