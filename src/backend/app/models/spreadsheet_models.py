import uuid
from sqlalchemy import Column, String, Integer, Text, Numeric
from sqlalchemy.dialects.postgresql import UUID
from app.db.base import Base

class Item(Base):
    __tablename__ = 'itens'

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    item = Column(Text)
    quantidade = Column(Numeric(12, 2))
    produto = Column(Text)
    descricao = Column(Text)
    ambiente = Column(Text)
    imagem = Column(Text)
    dimensao = Column(Text)
    fornecedor = Column(Text)
    categoria = Column(Text)
    valor_unitario = Column(Numeric(12, 2))
    valor_total = Column(Numeric(12, 2))
    filename = Column(Text)

