from fastapi import Depends
from app.db.connection import Session
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordBearer
from app.services.auth_service import AuthService

oauth_scheme = OAuth2PasswordBearer(tokenUrl='/user/login')

def get_db_session():
    try:
        session =  Session()
        yield session
    finally:
        session.close()


def token_verifier(
        db_session: Session = Depends(get_db_session),
        token = Depends(oauth_scheme)
    ):

    auth_service = AuthService(db_session=db_session)
    auth_service.verify_token(access_token=token) 
