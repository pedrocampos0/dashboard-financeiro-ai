
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { StockData } from "@/utils/mockData";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts';

interface StockChartProps {
  stock: StockData;
}

export const StockChart = ({ stock }: StockChartProps) => {
  const [period, setPeriod] = useState<string>("1M");
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [chartData, setChartData] = useState(stock.historicalData);

  useEffect(() => {
    setChartData(stock.historicalData);
  }, [stock]);

  // Calculate min and max for better visualization
  const minPrice = Math.min(...chartData.map(d => d.price)) * 0.99;
  const maxPrice = Math.max(...chartData.map(d => d.price)) * 1.01;

  // Format data for chart
  const formattedData = chartData.map(d => ({
    date: d.date,
    price: d.price,
  }));

  const priceColor = stock.change >= 0 ? "hsl(var(--gain))" : "hsl(var(--loss))";

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="flex items-center gap-2">
              {stock.symbol} 
              <span className="text-sm font-normal text-muted-foreground">
                {stock.name}
              </span>
            </CardTitle>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xl font-semibold">R$ {stock.price.toFixed(2)}</span>
              <span 
                className={`text-sm font-medium ${stock.change >= 0 ? 'stock-up' : 'stock-down'}`}
              >
                {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
              </span>
            </div>
          </div>
          <Tabs defaultValue="1M" className="w-auto">
            <TabsList className="grid grid-cols-4 h-8">
              <TabsTrigger value="1D" onClick={() => setPeriod("1D")}>1D</TabsTrigger>
              <TabsTrigger value="1W" onClick={() => setPeriod("1W")}>1W</TabsTrigger>
              <TabsTrigger value="1M" onClick={() => setPeriod("1M")}>1M</TabsTrigger>
              <TabsTrigger value="1Y" onClick={() => setPeriod("1Y")}>1Y</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent ref={chartContainerRef}>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={formattedData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="date"
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => {
                  if (period === "1D") return value.split(" ")[1];
                  return value.split("T")[0].slice(5);
                }}
                minTickGap={30}
              />
              <YAxis 
                domain={[minPrice, maxPrice]}
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `${value.toFixed(2)}`}
              />
              <Tooltip 
                formatter={(value) => [`R$ ${Number(value).toFixed(2)}`, "Preço"]}
                labelFormatter={(label) => `Data: ${label}`}
              />
              <ReferenceLine y={stock.price - stock.change} stroke="rgba(255,255,255,0.2)" />
              <Line 
                type="monotone"
                dataKey="price"
                stroke={priceColor}
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
