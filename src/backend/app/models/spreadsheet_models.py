import uuid 
from sqlalchemy import Column, String, Integer, Text, TIMESTAMP, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from datetime import datetime
from app.db.base import Base
# from app.models.user_models import User


class SpreadSheet(Base):
    __table__ = "spreasheet"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    amount = Column(Integer, nullable=False)
    description = Column(Text)

    owner = relationship("User", back_populates="owned_spreadsheets")

