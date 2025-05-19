from sqlalchemy.orm import Session
import pandas as pd 
from app.models.spreadsheet_models import Item
from app.services.area_service import AreaService

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

    def treat_spreadsheet(self, df):
        numeric_cols = ['QNT', 'VALOR UNITÁRIO', 'VALOR TOTAL']
        
        for col in numeric_cols:
            df[col] = pd.to_numeric(df[col], errors='coerce')

        values_to_exclude = [
        'NÃO CONSTAM NESTA PLANILHA (SALVO MENCIONADO O CONTRÁRIO):',
        'LOUÇAS,  METAIS E ACESSÓRIOS PARA USO NOS BANHEIROS E COPAS;',
        'MÃO DE OBRA PARA INSTALAÇÃO DE LUMINÁRIAS DECORATIVAS, ILUMINAÇÃO TÉCNICA E ELETROELETRONICOS;',
        'ILUMINAÇÃO TÉCNICA ESPECÍFICA TIPO TENSOFLEX;',
        'EQUIPAMENTOS FITNESS E DE USO ESPECÍFICO (LAVANDERIAS);',
        'MATERIAIS E CONSTRUÇÃO CIVIL PARA USO DE REVESTIMENTOS (BANCADAS, BASES, MONOLITOS);',
        'ANDAIME PARA INSTALAÇÕES DE TODOS ITENS ESPECIFICADOS EM PLANILHA;',
        'IMPORTANTE: ',
        '01 - OS ORÇAMENTOS PODERÃO SOFRER ALTERAÇÃO E REAJUSTE EM RELAÇÃO À DATA DO FECHAMENTO DA PLANILHA;',
        '02 -TODO E QUALQUER ITEM E/OU FORNECEDOR QUE NÃO ESTIVER CONTIDO NESTA PLANILHA, DEVE PASSAR POR APROVAÇÃO DO ESCRITÓRIO FERNANDA MARQUES;',
        '03 - CUSTOS DE FRETE FORA DO ESTADO DE SP NÃO ESTÃO INCLUSOS NO VALOR TOTAL.'
        ]

        df = df[~df['ITEM'].isin(values_to_exclude)].reset_index(drop=True)

        area_service = AreaService(self.db_session)
        created_area = area_service.insert()
        return df
