from pydantic import BaseModel
from enum import Enum

# class UserCreate(BaseModel):
#     username: str
#     password: str
#
# class UserInDB(BaseModel):
#     id: int
#     username: str
#


class Login(BaseModel):
    login: str
    password: str


class StatusEnum(str, Enum):
    success = "success"
    failed = "failed"


class Auth(BaseModel):
    status: StatusEnum
    token: str = None
