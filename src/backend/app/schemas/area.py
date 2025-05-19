from pydantic import BaseModel, EmailStr 

class AreaCreate(BaseModel):
    name: str   


class AreaList(BaseModel):
    areas: list[str]
