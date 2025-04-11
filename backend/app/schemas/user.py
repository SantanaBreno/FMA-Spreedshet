from pydantic import BaseModel, EmailStr 
from uuid import UUID
from datetime import datetime

class UserCreate(BaseModel):
    name: str   
    email: EmailStr
    password: str
    role_id: UUID

class UserResponse(BaseModel):
    id: UUID
    name: str
    email: EmailStr
    role_id: UUID
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True # permite retornar os dados  diretamente de modelos SQLAlchemy

class UserLogin(BaseModel):
    email: str
    password: str        