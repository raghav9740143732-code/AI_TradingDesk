from contextlib import asynccontextmanager

from fastapi import FastAPI
from app.api.client_router import router as client_router
from app.database.init_db import init_database


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_database()
    yield


app = FastAPI(
    title="AI Trading Desk",
    version="1.0.0",
    lifespan=lifespan,
)


app.include_router(client_router)

@app.get("/")
def root():
    return {
        "status": "running",
        "application": "AI Trading Desk",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
    }
