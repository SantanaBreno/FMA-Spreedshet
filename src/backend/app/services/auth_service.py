from datetime import datetime, timedelta
from dotenv import load_dotenv
import os

from fastapi import status
from fastapi.exceptions import HTTPException
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from app.models.user_models import User
from app.schemas.user import UserCreate, UserLogin 
from passlib.context import CryptContext
from jose import jwt, JWTError

crypt_context = CryptContext(schemes=['sha256_crypt'])

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")

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
        
    def user_login(self, user: UserLogin, expires_in: int = 30):
        user_on_db = self.db_session.query(User).filter_by(email=user.email).first()

        print(user_on_db)
        if user_on_db is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail='Nome ou senha inválida!'
            )
        
        if not crypt_context.verify(user.password, user_on_db.password):
             raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail='Nome ou senha inválida!'
            )
        
        exp = datetime.utcnow() + timedelta(minutes=expires_in)

        payload = {
            'sub': user.email,
            'exp': exp,
            'role': user_on_db.role_id
        }

        access_token = jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

        return {
            'access_token': access_token,
            'exp': exp.isoformat()
        }