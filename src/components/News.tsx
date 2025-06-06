
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { newsData } from "@/utils/mockData";
import { triggerWebhook } from "@/utils/webhook";

export const News = () => {
  useEffect(() => {
    // Trigger the n8n webhook with all news data when component mounts
    triggerWebhook('https://pedrocamposborges.app.n8n.cloud/webhook-test/news-agent-trigger', { 
      newsData,
      timestamp: new Date().toISOString(),
      source: 'FinTrader Dashboard'
    });
  }, []);

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle>Notícias do Mercado</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {newsData.map((news) => (
            <a
              key={news.id}
              href={news.url}
              className="block group"
            >
              <div className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="relative">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {news.source}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-lg leading-tight">
                      {news.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {news.summary}
                  </p>
                  <div className="text-xs text-muted-foreground">
                    {news.date}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
