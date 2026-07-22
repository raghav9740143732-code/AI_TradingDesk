class BrokerManager:

    def __init__(self):
        self.clients = {}

    def register_client(self, client):
        self.clients[client["id"]] = client

    def get_clients(self):
        return self.clients