from pydantic import BaseModel
from enum import Enum


class Login(BaseModel):
    login: str
    password: str


class StatusEnum(str, Enum):
    success = "success"
    failed = "failed"


class Auth(BaseModel):
    status: StatusEnum
    token: str = None
