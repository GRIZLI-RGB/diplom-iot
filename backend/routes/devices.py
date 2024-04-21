from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List

router = APIRouter()

# Модель устройства
class Device(BaseModel):
    id: int
    name: str
    type: str

# Пример базы данных (в реальном проекте здесь нужно использовать базу данных)
fake_devices_db = [
    {"id": 1, "name": "Device 1", "type": "Type 1"},
    {"id": 2, "name": "Device 2", "type": "Type 2"},
]

@router.get("/devices", response_model=List[Device])
async def read_devices():
    return fake_devices_db

@router.get("/device/{device_id}", response_model=Device)
async def read_device(device_id: int):
    device = next((device for device in fake_devices_db if device["id"] == device_id), None)
    if device is None:
        raise HTTPException(status_code=404, detail="Device not found")
    return device

@router.post("/device", response_model=Device)
async def create_device(device: Device):
    fake_devices_db.append(device.dict())
    return device

@router.patch("/device/{device_id}", response_model=Device)
async def update_device(device_id: int, device: Device):
    for d in fake_devices_db:
        if d["id"] == device_id:
            d.update(device.dict())
            return device
    raise HTTPException(status_code=404, detail="Device not found")

@router.delete("/device/{device_id}")
async def delete_device(device_id: int):
    for i, d in enumerate(fake_devices_db):
        if d["id"] == device_id:
            del fake_devices_db[i]
            return {"message": "Device deleted successfully"}
    raise HTTPException(status_code=404, detail="Device not found")