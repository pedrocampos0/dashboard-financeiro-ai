
import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const educationContent = [
    {
      id: "1",
      title: "Fundamentos do Mercado de Ações",
      category: "Iniciante",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=300&h=200&fit=crop&auto=format",
      link: "https://www.investopedia.com/articles/basics/06/invest1000.asp"
    },
    {
      id: "2", 
      title: "Análise Técnica Avançada",
      category: "Avançado",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&auto=format",
      link: "https://www.investopedia.com/terms/t/technicalanalysis.asp"
    },
    {
      id: "3",
      title: "Gestão de Risco e Portfolio",
      category: "Intermediário", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop&auto=format",
      link: "https://www.investopedia.com/terms/r/riskmanagement.asp"
    },
    {
      id: "4",
      title: "Análise Fundamentalista",
      category: "Intermediário",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop&auto=format", 
      link: "https://www.investopedia.com/terms/f/fundamentalanalysis.asp"
    },
    {
      id: "5",
      title: "Estratégias de Day Trading",
      category: "Avançado",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=300&h=200&fit=crop&auto=format",
      link: "https://www.investopedia.com/terms/d/daytrading.asp"
    },
    {
      id: "6",
      title: "Investimentos em Dividendos",
      category: "Iniciante",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=300&h=200&fit=crop&auto=format",
      link: "https://www.investopedia.com/terms/d/dividend.asp"
    },
    {
      id: "7",
      title: "ETFs e Fundos de Investimento", 
      category: "Intermediário",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&auto=format",
      link: "https://www.investopedia.com/terms/e/etf.asp"
    },
    {
      id: "8",
      title: "Psicologia do Investidor",
      category: "Iniciante",
      image: "https://images.unsplash.com/photo-1559526324-593bc2d016ef?w=300&h=200&fit=crop&auto=format",
      link: "https://www.investopedia.com/terms/b/behavioralfinance.asp"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Iniciante":
        return "bg-green-100 text-green-800";
      case "Intermediário":
        return "bg-yellow-100 text-yellow-800";
      case "Avançado":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container py-6">
        <h1 className="text-3xl font-bold mb-6">Educação Financeira</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {educationContent.map((content) => (
            <a
              key={content.id}
              href={content.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="relative">
                  <img
                    src={content.image}
                    alt={content.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-medium ${getCategoryColor(content.category)}`}>
                    {content.category}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {content.title}
                  </h3>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Education;
