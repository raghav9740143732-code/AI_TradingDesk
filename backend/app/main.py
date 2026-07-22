from fastapi import FastAPI

app = FastAPI(
    title="Nexus Trading Desk API",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "status": "running",
        "application": "Nexus Trading Desk"
    }

@app.get("/health")
def health():
    return {"status": "healthy"}