from fastapi import status
from fastapi.exceptions import HTTPException
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from app.models.user_models import User
from app.schemas import UserCreate  
from passlib.context import CryptContext

crypt_context = CryptContext(schemes=['sha256_crypt'])

class AuthService:
    def __init__(self, db_session: Session):
        self.db_session = db_session


    def user_register(self, user: UserCreate):
        user = User(
            name = user.name,
            email = user.email,
            password = crypt_context.hash(user.password),
            role_id = user.role_id
        )

        try:
            self.db_session.add(user)
            self.db_session.commit()

        except IntegrityError: 
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail='Usuário já existe!'
            )