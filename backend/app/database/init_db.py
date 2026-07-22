from app.database import Base, engine

# Import all models so SQLAlchemy knows about them.
import app.models

def init_database():
    Base.metadata.create_all(bind=engine)