
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { portfolioData } from "@/utils/mockData";

export const Portfolio = () => {
  // Calculate portfolio metrics
  const totalInvestment = portfolioData.reduce(
    (sum, holding) => sum + holding.purchasePrice * holding.shares, 
    0
  );
  
  const currentValue = portfolioData.reduce(
    (sum, holding) => sum + holding.currentPrice * holding.shares, 
    0
  );
  
  const totalProfit = currentValue - totalInvestment;
  const totalProfitPercentage = (totalProfit / totalInvestment) * 100;

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle>Meu Portfólio</CardTitle>
          <div className="text-right">
            <div className="font-medium">Valor Atual</div>
            <div className="text-xl font-bold">R$ {currentValue.toFixed(2)}</div>
            <div className={totalProfit >= 0 ? "stock-up" : "stock-down"}>
              {totalProfit >= 0 ? "+" : ""}{totalProfit.toFixed(2)} ({totalProfitPercentage.toFixed(2)}%)
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ativo</TableHead>
              <TableHead>Quantidade</TableHead>
              <TableHead>Preço Médio</TableHead>
              <TableHead>Preço Atual</TableHead>
              <TableHead>Variação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {portfolioData.map((holding) => {
              const profitLoss = (holding.currentPrice - holding.purchasePrice) * holding.shares;
              const profitLossPercentage = ((holding.currentPrice - holding.purchasePrice) / holding.purchasePrice) * 100;

              return (
                <TableRow key={holding.symbol}>
                  <TableCell>
                    <div className="font-medium">{holding.symbol}</div>
                    <div className="text-xs text-muted-foreground">{holding.name}</div>
                  </TableCell>
                  <TableCell>{holding.shares}</TableCell>
                  <TableCell>R$ {holding.purchasePrice.toFixed(2)}</TableCell>
                  <TableCell>R$ {holding.currentPrice.toFixed(2)}</TableCell>
                  <TableCell className={profitLoss >= 0 ? "stock-up" : "stock-down"}>
                    {profitLoss >= 0 ? "+" : ""}R$ {profitLoss.toFixed(2)}
                    <div className="text-xs">
                      ({profitLossPercentage >= 0 ? "+" : ""}{profitLossPercentage.toFixed(2)}%)
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
