from dotenv import load_dotenv
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

load_dotenv()

db_url = os.getenv("DB_URL")


engine = create_engine(db_url, pool_pre_ping=True)
Session = sessionmaker(bind=engine)
