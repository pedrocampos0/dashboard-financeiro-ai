
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { StockChart } from "@/components/StockChart";
import { MarketOverview } from "@/components/MarketOverview";
import { Portfolio } from "@/components/Portfolio";
import { News } from "@/components/News";
import { TradingPanel } from "@/components/TradingPanel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { brazilianStocks, StockData } from "@/utils/mockData";

const Index = () => {
  const [selectedStock, setSelectedStock] = useState<StockData>(brazilianStocks[0]);
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container py-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard Financeiro</h1>
        
        <Tabs
          defaultValue="dashboard"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full mb-6"
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="portfolio">Portfólio</TabsTrigger>
            <TabsTrigger value="charts">Gráficos</TabsTrigger>
            <TabsTrigger value="news">Notícias</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <StockChart stock={selectedStock} />
                <div className="mt-6">
                  <MarketOverview onSelectStock={setSelectedStock} />
                </div>
              </div>
              <div>
                <TradingPanel stock={selectedStock} />
                <div className="mt-6">
                  <News />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="portfolio" className="mt-6">
            <Portfolio />
          </TabsContent>
          
          <TabsContent value="charts" className="mt-6">
            <div className="grid grid-cols-1 gap-6">
              <StockChart stock={selectedStock} />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {brazilianStocks.slice(1, 4).map((stock) => (
                  <div 
                    key={stock.symbol}
                    className="cursor-pointer border rounded-lg p-4 hover:bg-muted transition-colors"
                    onClick={() => setSelectedStock(stock)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">{stock.symbol}</div>
                        <div className="text-sm text-muted-foreground">{stock.name}</div>
                      </div>
                      <div className={stock.change >= 0 ? "stock-up" : "stock-down"}>
                        {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="news" className="mt-6">
            <News />
          </TabsContent>
        </Tabs>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col md:h-16 items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FinTrader. Todos os direitos reservados.
          </p>
          <div className="text-sm text-muted-foreground">
            Este é um sistema de demonstração. Não use para decisões reais de investimento.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
