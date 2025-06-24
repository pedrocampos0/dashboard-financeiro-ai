from google.genai import types
from services.gemini import GeminiService


class GeminiController(GeminiService):
    def __init__(self, api_key: str):
        super().__init__(api_key)

    def search_news(self) -> types.GenerateContentResponse:
        response = self.models.generate_content(
            model=self.model,
            contents=self.contents,
            config=self.generate_content_config,
        )
        return response


if __name__ == "__main__":
    g = GeminiController('MINHA_API_KEY')
    news = g.search_news()
    print(news.candidates[0].content.parts[0].text)
