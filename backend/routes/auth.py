from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Any
from schemas.auth import Login, AuthStatus

router = APIRouter()

@router.post("/auth", response_model=AuthStatus)
async def login(data: Login):
    return {"status": "success", "token": "123456789"}