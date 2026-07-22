from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware
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

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
