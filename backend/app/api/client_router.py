from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.schemas.client import ClientCreate, ClientResponse
from app.services.client_service import ClientService

router = APIRouter(prefix="/clients", tags=["Clients"])

service = ClientService()


@router.post("/", response_model=ClientResponse)
def create_client(
    client: ClientCreate,
    db: Session = Depends(get_db),
):
    return service.create_client(db, client)


@router.get("/", response_model=list[ClientResponse])
def list_clients(
    db: Session = Depends(get_db),
):
    return service.list_clients(db)