from fastapi import APIRouter
from . import users, devices, logs, scenarios, auth

router = APIRouter()

router.include_router(auth.router, tags=["Авторизация"])
router.include_router(users.router, tags=["Пользователи"])
router.include_router(devices.router, tags=["Устройства"])
router.include_router(logs.router, tags=["Логи"])
router.include_router(scenarios.router, tags=["Сценарии"])