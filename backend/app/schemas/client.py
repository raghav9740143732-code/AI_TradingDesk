from pydantic import BaseModel, ConfigDict


class ClientCreate(BaseModel):
    client_name: str
    broker: str
    api_key: str | None = None
    access_token: str | None = None
    refresh_token: str | None = None


class ClientResponse(BaseModel):
    id: int
    client_name: str
    broker: str
    is_active: bool

    model_config = ConfigDict(from_attributes=True)