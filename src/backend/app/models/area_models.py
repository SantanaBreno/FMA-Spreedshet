import uuid
from sqlalchemy import Column, String, Integer, Text, Numeric
from sqlalchemy.dialects.postgresql import UUID
from app.db.base import Base

class Area(Base):
    __tablename__ = 'areas'

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(255), nullable=False)