from contextlib import asynccontextmanager
from fastapi import FastAPI
from sql.database import create_db_and_tables
from routes.ativos import ativos_router

@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Gerencia o ciclo de vida da aplicação, como inicializar o banco de dados.
    """
    print("Iniciando o banco de dados...")
    create_db_and_tables()
    yield
    print("Desligando o banco de dados...")

app = FastAPI(
    title="Dashboard Financeiro",
    description="Backend do dashboard financeiro",
    version="0.1.0",
    lifespan=lifespan
)
app.include_router(ativos_router)
