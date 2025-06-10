
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StockData } from "@/utils/mockData";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TradingPanelProps {
  stock: StockData;
}

export const TradingPanel = ({ stock }: TradingPanelProps) => {
  const [quantity, setQuantity] = useState<string>("0");
  const [orderType, setOrderType] = useState<"market" | "limit">("market");
  const [limitPrice, setLimitPrice] = useState<string>(stock.price.toFixed(2));

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers
    const value = e.target.value.replace(/[^0-9]/g, "");
    setQuantity(value);
  };

  const handleLimitPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow numbers and one decimal point
    const value = e.target.value.replace(/[^0-9.]/g, "");
    
    // Ensure only one decimal point
    const decimalCount = (value.match(/\./g) || []).length;
    if (decimalCount > 1) return;
    
    // Ensure only two decimal places
    const parts = value.split(".");
    if (parts[1] && parts[1].length > 2) return;
    
    setLimitPrice(value);
  };

  const handleBuy = () => {
    if (parseInt(quantity) <= 0) {
      toast.error("A quantidade deve ser maior que zero");
      return;
    }

    const totalCost = orderType === "market" 
      ? parseInt(quantity) * stock.price
      : parseInt(quantity) * parseFloat(limitPrice);

    toast.success(`Ordem de compra enviada para ${quantity} ações de ${stock.symbol} a R$ ${orderType === "market" ? stock.price.toFixed(2) : limitPrice}`);
  };

  const handleSell = () => {
    if (parseInt(quantity) <= 0) {
      toast.error("A quantidade deve ser maior que zero");
      return;
    }

    const totalValue = orderType === "market" 
      ? parseInt(quantity) * stock.price
      : parseInt(quantity) * parseFloat(limitPrice);

    toast.success(`Ordem de venda enviada para ${quantity} ações de ${stock.symbol} a R$ ${orderType === "market" ? stock.price.toFixed(2) : limitPrice}`);
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle>Negociar {stock.symbol}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="market" onValueChange={(value) => setOrderType(value as "market" | "limit")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="market">Mercado</TabsTrigger>
            <TabsTrigger value="limit">Limite</TabsTrigger>
          </TabsList>
          
          <div className="mt-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantidade</Label>
              <Input
                id="quantity"
                type="text"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>

            {orderType === "limit" && (
              <div className="space-y-2">
                <Label htmlFor="limitPrice">Preço Limite (R$)</Label>
                <Input
                  id="limitPrice"
                  type="text"
                  value={limitPrice}
                  onChange={handleLimitPriceChange}
                />
              </div>
            )}

            <div className="space-y-2">
              <Label>Total Estimado</Label>
              <div className="text-xl font-bold">
                R$ {(
                  parseFloat(quantity || "0") * 
                  (orderType === "market" ? stock.price : parseFloat(limitPrice || "0"))
                ).toFixed(2)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <Button 
                className="w-full bg-gain hover:bg-gain/90" 
                onClick={handleBuy}
              >
                Comprar
              </Button>
              <Button 
                className="w-full bg-loss hover:bg-loss/90" 
                onClick={handleSell}
              >
                Vender
              </Button>
            </div>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};
