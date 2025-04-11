from fastapi import APIRouter

router = APIRouter(
    tags=["Health Check Routes"]
)

@router.get("/healthcheck")
def health_check():
    return "Ok, it's working"