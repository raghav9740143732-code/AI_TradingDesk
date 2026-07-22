from sqlalchemy.orm import Session

from app.models.client import Client
from app.schemas.client import ClientCreate


class ClientRepository:

    def create(self, db: Session, client: ClientCreate):

        db_client = Client(
            client_name=client.client_name,
            broker=client.broker,
            api_key=client.api_key,
            access_token=client.access_token,
            refresh_token=client.refresh_token,
        )

        db.add(db_client)
        db.commit()
        db.refresh(db_client)

        return db_client

    def get_all(self, db: Session):
        return db.query(Client).all()