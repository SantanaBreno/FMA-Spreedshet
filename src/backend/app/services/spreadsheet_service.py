from sqlalchemy.orm import Session
from app.models.spreadsheet_models import Item

class SpreadsheetService:
    def __init__(self, db_session: Session):
        self.db_session  = db_session

    def process_spreadsheet(self, df, filename: str):
        for _, row in df.iterrows():
            
            
            row["IMAGEM"] = "caminho_da_imagem_s3"

            item = Item(
                item=row["ITEM"],
                quantidade=row["QNT"],
                produto=row["PRODUTO"],
                descricao=row["DESCRIÇÃO"],
                ambiente=row["AMBIENTE"],
                imagem=row["IMAGEM"],
                dimensao=row["DIMENSÃO"],
                fornecedor=row["FORNECEDOR"],
                categoria=row["CATEGORIA"],
                valor_unitario=row["VALOR UNITÁRIO"],
                valor_total=row["VALOR TOTAL"],
                filename=filename
            )


            self.db_session.add(item)
        

        self.db_session.commit()