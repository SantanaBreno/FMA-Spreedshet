from pydantic import BaseModel, EmailStr
from uuid import UUID

class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str 
    role_id: UUID