
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { brazilianStocks } from "@/utils/mockData";

const Trading = () => {
  const [selectedStock, setSelectedStock] = useState("");
  const [orderType, setOrderType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container py-6">
        <h1 className="text-3xl font-bold mb-6">Mesa de Negociação</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Nova Ordem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="stock">Ativo</Label>
                <Select value={selectedStock} onValueChange={setSelectedStock}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um ativo" />
                  </SelectTrigger>
                  <SelectContent>
                    {brazilianStocks.map((stock) => (
                      <SelectItem key={stock.symbol} value={stock.symbol}>
                        {stock.symbol} - {stock.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="orderType">Tipo de Ordem</Label>
                <Select value={orderType} onValueChange={setOrderType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de ordem" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="market">Mercado</SelectItem>
                    <SelectItem value="limit">Limitada</SelectItem>
                    <SelectItem value="stop">Stop</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="quantity">Quantidade</Label>
                <Input
                  id="quantity"
                  type="number"
                  placeholder="100"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="price">Preço</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="R$ 0,00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2 pt-4">
                <Button className="flex-1 bg-green-600 hover:bg-green-700">
                  Comprar
                </Button>
                <Button variant="destructive" className="flex-1">
                  Vender
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Livro de Ofertas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Compra</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>R$ 45,20</span>
                      <span>1.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>R$ 45,15</span>
                      <span>500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>R$ 45,10</span>
                      <span>750</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">Venda</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>R$ 45,25</span>
                      <span>800</span>
                    </div>
                    <div className="flex justify-between">
                      <span>R$ 45,30</span>
                      <span>1.200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>R$ 45,35</span>
                      <span>600</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Trading;
