from fastapi import APIRouter, Request

ativos_router = APIRouter(prefix="/ativos", tags=["Ativos"])


@ativos_router.post("/altas")
async def inserir_altas(request: Request):
    """
    Endpoint para inserir as ações em alta.
    """
    try:
        content = await request.json()
        print(content)
        print("Requisição recebida em /ativos/altas")
        return {"message": "Dados de ações em alta"}
    except Exception as e:
        print(f"Erro ao processar /ativos/altas: {e}")
        raise e


@ativos_router.post("/baixas")
async def inserir_baixas(request: Request):
    """
    Endpoint para inserir as ações em baixa.
    """
    try:
        content = await request.json()
        print(content)
        print("Requisição recebida em /ativos/baixas")
        return {"message": "Dados de ações em baixa"}
    except Exception as e:
        print(f"Erro ao processar /ativos/baixas: {e}")
        raise e


@ativos_router.post("")
async def inserir(request: Request):
    """
    Endpoint para inserir tudo.
    """
    try:
        content = await request.json()
        print(content)
        print("Requisição recebida em /ativos")
        return {"message": "Dados de ações"}
    except Exception as e:
        print(f"Erro ao processar /ativos: {e}")
        raise e
