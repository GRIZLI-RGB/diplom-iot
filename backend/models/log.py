from utils.database import Base
from sqlalchemy import Column, Integer

class Log(Base):
    __tablename__ = "logs"

    id = Column(Integer, primary_key=True, index=True)