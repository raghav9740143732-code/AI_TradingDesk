from sqlalchemy.orm import Session

from app.repositories.client_repository import ClientRepository
from app.schemas.client import ClientCreate


class ClientService:

    def __init__(self):
        self.repository = ClientRepository()

    def create_client(self, db: Session, client: ClientCreate):
        return self.repository.create(db, client)

    def list_clients(self, db: Session):
        return self.repository.get_all(db)