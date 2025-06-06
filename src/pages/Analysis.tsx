
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Analysis = () => {
  const topAnalyses = [
    {
      id: "1",
      title: "PETR4: Análise Técnica Indica Tendência de Alta",
      analyst: "João Silva",
      company: "XP Investimentos",
      rating: "COMPRA",
      target: "R$ 42,00",
      date: "2025-05-20",
      summary: "Com base na análise técnica, PETR4 apresenta padrão de reversão e rompimento de resistência importante.",
      ratingColor: "bg-green-100 text-green-800"
    },
    {
      id: "2",
      title: "VALE3: Revisão de Projeções para 2025",
      analyst: "Maria Santos",
      company: "Itaú BBA",
      rating: "NEUTRO",
      target: "R$ 58,50",
      date: "2025-05-19",
      summary: "Mantemos recomendação neutra para VALE3, com ajuste no preço-alvo devido às condições do mercado de commodities.",
      ratingColor: "bg-yellow-100 text-yellow-800"
    },
    {
      id: "3",
      title: "ITUB4: Perspectivas Positivas para o Setor Bancário",
      analyst: "Carlos Oliveira",
      company: "BTG Pactual",
      rating: "COMPRA",
      target: "R$ 28,00",
      date: "2025-05-18",
      summary: "Setor bancário deve se beneficiar da manutenção dos juros altos e melhora na qualidade da carteira de crédito.",
      ratingColor: "bg-green-100 text-green-800"
    },
    {
      id: "4",
      title: "MGLU3: Reestruturação em Curso",
      analyst: "Ana Costa",
      company: "Goldman Sachs",
      rating: "VENDA",
      target: "R$ 8,50",
      date: "2025-05-17",
      summary: "Processo de reestruturação da Magazine Luiza ainda em estágio inicial, com pressão sobre margens continuando.",
      ratingColor: "bg-red-100 text-red-800"
    },
    {
      id: "5",
      title: "WEGE3: Liderança no Setor de Motores Elétricos",
      analyst: "Pedro Lima",
      company: "Bradesco BBI",
      rating: "COMPRA",
      target: "R$ 52,00",
      date: "2025-05-16",
      summary: "WEG mantém posição de liderança e deve se beneficiar da transição energética global e demanda por eficiência.",
      ratingColor: "bg-green-100 text-green-800"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container py-6">
        <h1 className="text-3xl font-bold mb-6">Top Análises</h1>
        
        <div className="space-y-6">
          {topAnalyses.map((analysis) => (
            <Card key={analysis.id} className="hover:shadow-md transition-shadow duration-200">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl leading-tight">{analysis.title}</CardTitle>
                  <Badge className={analysis.ratingColor}>
                    {analysis.rating}
                  </Badge>
                </div>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>{analysis.analyst} - {analysis.company}</span>
                  <span>{analysis.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{analysis.summary}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Preço-alvo: {analysis.target}</span>
                  <Badge variant="outline">Análise Completa</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Analysis;
