import psycopg2
from psycopg2 import OperationalError

def testar_conexao():
    try:
        # Substitua pelos dados reais da sua conexão
        conexao = psycopg2.connect("postgresql://postgres.rekhmejertagteokatfx:FM4D3c0r4t10n!@aws-0-us-east-1.pooler.supabase.com:5432/postgres")
        print("Conexão estabelecida com sucesso!")
        conexao.close()
    except OperationalError as e:
        print("Erro ao conectar ao banco de dados:")
        print(e)

if __name__ == "__main__":
    testar_conexao()
