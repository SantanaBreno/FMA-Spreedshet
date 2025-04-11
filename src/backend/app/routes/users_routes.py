from fastapi import Depends, status, APIRouter
from fastapi.responses import JSONResponse
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from app.utils.depends import get_db_session, token_verifier
from app.services.auth_service import AuthService
from app.schemas.user import UserCreate, UserLogin

router = APIRouter(
    prefix="/user",
    tags=["User Routes"]
)

@router.post("/register")
def user_register(
    user: UserCreate,
    db_session: Session = Depends(get_db_session)
    ):
    auth_service = AuthService(db_session=db_session)
    auth_service.user_register(user=user)
    return JSONResponse(
        content={'msg': 'sucess'},
        status_code=status.HTTP_201_CREATED
    )

@router.post("/login")
def user_register(
    request_form_user: OAuth2PasswordRequestForm = Depends(),
    db_session: Session = Depends(get_db_session)
    ):
    auth_service = AuthService(db_session=db_session)
    
    user = UserLogin(
        email = request_form_user.username,
        password = request_form_user.password
    )

    auth_data = auth_service.user_login(user=user)
    return JSONResponse(
        content=auth_data,
        status_code=status.HTTP_200_OK
    )

@router.get('/test')
def test_user_verify(token_verify = Depends(token_verifier)):
    return 'It Works'