from fastapi import Depends, status, APIRouter, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
import pandas as pd
from app.utils.depends import get_db_session
from app.services.spreadsheet_service import SpreadsheetService
from app.schemas.user import UserCreate, UserLogin

router = APIRouter(
    prefix="/spreadsheet",
    tags=["Spreadsheet Routes"]
)

@router.post("/spreadsheet")
def upload_spreadsheet(
    file: UploadFile = File(...),
    db_session: Session = Depends(get_db_session)
    ):

    if not file.filename.endswith((".csv", ".xlsx", ".xls")):
        raise HTTPException(
            status_code=400,
            detail="O arquivo deve ser .csv ou.xlsx"
        )

    try: 
        df = pd.read_csv(file.file, sheet_name=0, skiprows=25) if file.filename.endswith(".csv") else pd.read_excel(file.file, sheet_name=0, skiprows=25)
        
        numeric_cols = ['QNT', 'VALOR UNITÁRIO', 'VALOR TOTAL']
        
        for col in numeric_cols:
            df[col] = pd.to_numeric(df[col], errors='coerce')


        filename = file.filename

        spreadsheet_service = SpreadsheetService(db_session=db_session)
        spreadsheet_service.process_spreadsheet(df, filename)

        return JSONResponse(
        content={'msg': 'Planilha salva com sucesso'},
        status_code=status.HTTP_201_CREATED
    )

    except Exception as e:
        raise HTTPException(status_code=500, detail=(e))