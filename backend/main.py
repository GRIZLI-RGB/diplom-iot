from typing import Union
from fastapi import FastAPI
from utils.database import SessionLocal, Base, engine
from routes import router
from sqladmin import Admin
from models.log import Log

Base.metadata.create_all(engine)

app = FastAPI(title="IoT", openapi_prefix="/api")

@app.middleware("http")
async def db_session_middleware(request, call_next):
    request.state.db = SessionLocal()
    response = await call_next(request)
    request.state.db.close()
    return response

app.include_router(router)