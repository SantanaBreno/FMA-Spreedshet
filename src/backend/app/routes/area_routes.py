from typing import List
from fastapi import Depends, status, APIRouter, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from app.utils.depends import get_db_session
from app.services.area_service import AreaService
from app.schemas.area import AreaCreate

router = APIRouter(
    prefix="/area",
    tags=["Area Routes"]
)

@router.post("/")
def post_area(
    areas: List[AreaCreate],
    db_session: Session = Depends(get_db_session)
    ):
    
    try:
        area_service = AreaService(db_session=db_session)
        area_service.insert(areas)

        return JSONResponse(
        content={'msg': 'sucess'},
        status_code=status.HTTP_201_CREATED
        )
    
    except Exception as e:
          raise HTTPException(status_code=500, detail=(e)) 