
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StockData, getUpdatedStockData } from "@/utils/mockData";

export const MarketOverview = ({ onSelectStock }: { onSelectStock: (stock: StockData) => void }) => {
  const [stocks, setStocks] = useState<StockData[]>([]);

  useEffect(() => {
    // Initial load
    setStocks(getUpdatedStockData());

    // Update every 3 seconds
    const interval = setInterval(() => {
      setStocks(getUpdatedStockData());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatVolume = (volume: number) => {
    if (volume >= 1000000) {
      return `${(volume / 1000000).toFixed(1)}M`;
    }
    if (volume >= 1000) {
      return `${(volume / 1000).toFixed(1)}K`;
    }
    return volume.toString();
  };

  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1000000000000) {
      return `${(marketCap / 1000000000000).toFixed(2)}T`;
    }
    if (marketCap >= 1000000000) {
      return `${(marketCap / 1000000000).toFixed(2)}B`;
    }
    if (marketCap >= 1000000) {
      return `${(marketCap / 1000000).toFixed(2)}M`;
    }
    return marketCap.toString();
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle>Visão Geral do Mercado</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ativo</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Variação</TableHead>
              <TableHead className="hidden md:table-cell">Volume</TableHead>
              <TableHead className="hidden md:table-cell">Market Cap</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stocks.map((stock) => (
              <TableRow 
                key={stock.symbol} 
                className="cursor-pointer hover:bg-muted transition-colors"
                onClick={() => onSelectStock(stock)}
              >
                <TableCell>
                  <div className="font-medium">{stock.symbol}</div>
                  <div className="text-xs text-muted-foreground">{stock.name}</div>
                </TableCell>
                <TableCell>R$ {stock.price.toFixed(2)}</TableCell>
                <TableCell className={stock.change >= 0 ? "stock-up" : "stock-down"}>
                  {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                </TableCell>
                <TableCell className="hidden md:table-cell">{formatVolume(stock.volume)}</TableCell>
                <TableCell className="hidden md:table-cell">R$ {formatMarketCap(stock.marketCap)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
