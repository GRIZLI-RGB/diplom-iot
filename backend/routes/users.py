from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List

router = APIRouter()

# Модель пользователя
class User(BaseModel):
    id: int
    name: str
    email: str

# Пример базы данных (в реальном проекте здесь нужно использовать базу данных)
fake_users_db = [
    {"id": 1, "name": "Alice", "email": "alice@example.com"},
    {"id": 2, "name": "Bob", "email": "bob@example.com"},
]

@router.get("/users", response_model=List[User])
async def read_users():
    return fake_users_db

@router.get("/users/{user_id}", response_model=User)
async def read_user(user_id: int):
    user = next((user for user in fake_users_db if user["id"] == user_id), None)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.post("/users", response_model=User)
async def create_user(user: User):
    # Пример создания пользователя
    fake_users_db.append(user.dict())
    return user

@router.put("/users/{user_id}", response_model=User)
async def update_user(user_id: int, user: User):
    # Пример обновления данных пользователя
    for u in fake_users_db:
        if u["id"] == user_id:
            u.update(user.dict())
            return user
    raise HTTPException(status_code=404, detail="User not found")

@router.delete("/users/{user_id}")
async def delete_user(user_id: int):
    # Пример удаления пользователя
    for i, u in enumerate(fake_users_db):
        if u["id"] == user_id:
            del fake_users_db[i]
            return {"message": "User deleted successfully"}
    raise HTTPException(status_code=404, detail="User not found")