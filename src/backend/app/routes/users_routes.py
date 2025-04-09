from fastapi import Depends, status, APIRouter
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from app.utils.depends import get_db_session
from app.services.auth_service import AuthService
from app.schemas.user import UserCreate

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