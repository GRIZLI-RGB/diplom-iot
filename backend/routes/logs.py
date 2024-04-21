from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Any

router = APIRouter()

@router.get("/logs", response_model=Any)
async def get_logs():
    return []