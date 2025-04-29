from fastapi import APIRouter
from typing import List
from pydantic import BaseModel
import os
import psycopg2
from dotenv import load_dotenv

load_dotenv()

router = APIRouter()

# Conexão com o banco Supabase (PostgreSQL)
conn = psycopg2.connect(os.getenv("DB_URL"))

class Spreadsheet(BaseModel):
    title: str

@router.get("/spreadsheets", response_model=List[Spreadsheet])
def get_spreadsheets():
    cur = conn.cursor()
    cur.execute("SELECT DISTINCT filename FROM itens WHERE filename IS NOT NULL")
    rows = cur.fetchall()
    cur.close()

    # Retorna como uma lista de dicionários
    return [{"title": row[0]} for row in rows]
