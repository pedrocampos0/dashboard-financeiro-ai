// Stock data interface
export interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
  historicalData: { date: string; price: number }[];
}

// News interface
export interface NewsItem {
  id: string;
  title: string;
  source: string;
  date: string;
  summary: string;
  url: string;
  imageUrl: string;
}

// Brazilian stock data
export const brazilianStocks: StockData[] = [
  {
    symbol: "PETR4",
    name: "Petrobras",
    price: 36.75,
    change: 0.65,
    changePercent: 1.8,
    volume: 32500000,
    marketCap: 478500000000,
    historicalData: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      price: 36 + Math.sin(i / 3) * 3 + Math.random() * 0.5,
    })),
  },
  {
    symbol: "VALE3",
    name: "Vale",
    price: 68.42,
    change: -0.58,
    changePercent: -0.84,
    volume: 28700000,
    marketCap: 312600000000,
    historicalData: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      price: 69 + Math.sin(i / 4) * 2 - Math.random() * 0.3,
    })),
  },
  {
    symbol: "ITUB4",
    name: "Itaú Unibanco",
    price: 34.12,
    change: 0.22,
    changePercent: 0.65,
    volume: 19800000,
    marketCap: 334100000000,
    historicalData: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      price: 33.5 + Math.cos(i / 5) * 1.5 + Math.random() * 0.4,
    })),
  },
  {
    symbol: "BBDC4",
    name: "Bradesco",
    price: 16.88,
    change: -0.12,
    changePercent: -0.71,
    volume: 22100000,
    marketCap: 169000000000,
    historicalData: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      price: 17 + Math.sin(i / 2) * 0.8 - Math.random() * 0.2,
    })),
  },
  {
    symbol: "ABEV3",
    name: "Ambev",
    price: 14.56,
    change: 0.34,
    changePercent: 2.39,
    volume: 17300000,
    marketCap: 229400000000,
    historicalData: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      price: 14 + Math.cos(i / 3) * 0.7 + Math.random() * 0.3,
    })),
  },
  {
    symbol: "B3SA3",
    name: "B3",
    price: 12.84,
    change: 0.09,
    changePercent: 0.71,
    volume: 14500000,
    marketCap: 78200000000,
    historicalData: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      price: 12.5 + Math.sin(i / 4) * 0.6 + Math.random() * 0.2,
    })),
  },
];

// Portfolio data
export const portfolioData = [
  {
    symbol: "PETR4",
    name: "Petrobras",
    shares: 100,
    purchasePrice: 34.50,
    currentPrice: 36.75,
  },
  {
    symbol: "VALE3",
    name: "Vale",
    shares: 150,
    purchasePrice: 67.20,
    currentPrice: 68.42,
  },
  {
    symbol: "ITUB4",
    name: "Itaú Unibanco",
    shares: 200,
    purchasePrice: 32.75,
    currentPrice: 34.12,
  },
];

// News data
export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Petrobras anuncia novo plano de investimentos para 2025",
    source: "Valor Econômico",
    date: "2025-05-20",
    summary: "A Petrobras divulgou hoje seu novo plano de investimentos para 2025, com foco em exploração offshore e redução de emissões de carbono.",
    url: "#",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop&auto=format",
  },
  {
    id: "2",
    title: "Vale supera expectativas no primeiro trimestre de 2025",
    source: "InfoMoney",
    date: "2025-05-19",
    summary: "A Vale S.A. registrou lucro acima das expectativas no primeiro trimestre de 2025, impulsionada pelos preços do minério de ferro.",
    url: "#",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&auto=format",
  },
  {
    id: "3",
    title: "Banco Central mantém taxa Selic em 9,5%",
    source: "G1 Economia",
    date: "2025-05-18",
    summary: "O Comitê de Política Monetária (Copom) do Banco Central decidiu manter a taxa Selic em 9,5%, em linha com as projeções do mercado.",
    url: "#",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop&auto=format",
  },
  {
    id: "4",
    title: "Ibovespa alcança novo recorde histórico ultrapassando 150 mil pontos",
    source: "Exame",
    date: "2025-05-17",
    summary: "O principal índice da B3 atingiu um novo patamar histórico, superando os 150 mil pontos pela primeira vez, com destaque para o setor bancário.",
    url: "#",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop&auto=format",
  },
  {
    id: "5",
    title: "Governo anuncia novo pacote de estímulo econômico",
    source: "Folha de São Paulo",
    date: "2025-05-16",
    summary: "O Ministério da Economia anunciou hoje um novo pacote de medidas para estimular o crescimento econômico e a geração de empregos no país.",
    url: "#",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop&auto=format",
  },
];

// Generate real-time data with small random changes
export function getUpdatedStockData(): StockData[] {
  return brazilianStocks.map(stock => {
    const changeAmount = (Math.random() - 0.5) * 0.2;
    const newPrice = parseFloat((stock.price + changeAmount).toFixed(2));
    const newChange = parseFloat((stock.change + changeAmount).toFixed(2));
    const newChangePercent = parseFloat(((newChange / (stock.price - stock.change)) * 100).toFixed(2));
    
    // Add new data point to historical data
    const newHistoricalData = [...stock.historicalData];
    if (newHistoricalData.length > 50) {
      newHistoricalData.shift();
    }

    return {
      ...stock,
      price: newPrice,
      change: newChange,
      changePercent: newChangePercent,
      historicalData: newHistoricalData,
    };
  });
}
