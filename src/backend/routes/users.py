from fastapi import APIRouter

router = APIRouter(
    tags=["User Routes"]
)

@router.get("/")
def get():
    return {"message": "API is running"}