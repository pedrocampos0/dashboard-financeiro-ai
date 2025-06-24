from datetime import datetime
from google.genai import types, Client


class GeminiService(Client):
    def __init__(self, api_key: str):
        hoje = datetime.now().date()
        prompt = f"""
            Aja como um assistente de pesquisa. Sua tarefa é encontrar as 10 notícias MAIS RECENTES sobre as "altas e baixas do Ibovespa" publicadas hoje, dia {hoje.day} de junho de {hoje.year}.

            REGRAS DE BUSCA:
        1.  **Links Funcionais:** Cada notícia DEVE ter um link direto e funcional. Ignore fontes sem link ou com o link quebrado, valide os links corretamente, notícias somente de hoje, dia {hoje.day} de junho de {hoje.year}.
        2.  **Conteúdo Relevante:** Foque em análises do pregão ou resumos diários da B3.
        3.  **Sem Duplicação:** As 10 notícias devem ser únicas.

        # FORMATO DE SAÍDA OBRIGATÓRIO
        - A saída deve ser um texto com o seguinte formato: Segue o JSON - objeto JSON válido e nada mais.
        - O objeto deve ser uma lista (array) contendo 10 dicionários (objetos).
        - Cada dicionário deve conter EXATAMENTE duas chaves: "titulo" e "link".
        """
        self.model = "gemini-2.5-pro"
        self.contents = [types.Content(role="user", parts=[types.Part.from_text(text=prompt)])]
        self.grounding_tool = types.Tool(google_search=types.GoogleSearch())
        self.generate_content_config = types.GenerateContentConfig(
            thinking_config=types.ThinkingConfig(
                thinking_budget=-1,
            ),
            response_mime_type="text/plain",
            tools=[self.grounding_tool]
        )
        super().__init__(api_key=api_key)
