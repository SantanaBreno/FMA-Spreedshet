from dotenv import load_dotenv
import os
from sqlalchemy import create_engine
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker

load_dotenv()

db_url = os.getenv("DB_URL")
print(db_url)
engine = create_engine(db_url, pool_pre_ping=True)
Session = sessionmaker(bind=engine)
