import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, CreditCard } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const PaymentSection = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  const handleWhatsAppConfirmation = () => {
    const message = encodeURIComponent("Hi! I have made payment for my Royal Ladies Conference merchandise order. Please find my payment receipt attached for confirmation.");
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

        <Card className="border-pink/20 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in max-w-2xl mx-auto">
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
                className="text-lg px-8 py-3 hover-scale animate-enter shadow-glow"
              >
                I have made my payment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PaymentSection;