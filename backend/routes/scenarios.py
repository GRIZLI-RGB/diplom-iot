from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List

router = APIRouter()

class Scenario(BaseModel):
    id: int
    name: str
    description: str

fake_scenarios_db = [
    {"id": 1, "name": "Scenario 1", "description": "Description for Scenario 1"},
    {"id": 2, "name": "Scenario 2", "description": "Description for Scenario 2"},
]

@router.get("/scenarios", response_model=List[Scenario])
async def get_scenarios():
    return fake_scenarios_db

@router.get("/scenario/{scenario_id}", response_model=Scenario)
async def get_scenario_by_id(scenario_id: int):
    scenario = next((scenario for scenario in fake_scenarios_db if scenario["id"] == scenario_id), None)
    if scenario is None:
        raise HTTPException(status_code=404, detail="Scenario not found")
    return scenario

@router.post("/scenario", response_model=Scenario)
async def create_scenario(scenario: Scenario):
    # Пример создания сценария
    fake_scenarios_db.append(scenario.dict())
    return scenario

@router.patch("/scenario/{scenario_id}", response_model=Scenario)
async def update_scenario(scenario_id: int, scenario: Scenario):
    for s in fake_scenarios_db:
        if s["id"] == scenario_id:
            s.update(scenario.dict())
            return scenario
    raise HTTPException(status_code=404, detail="Scenario not found")

@router.delete("/scenario/{scenario_id}")
async def delete_scenario(scenario_id: int):
    for i, s in enumerate(fake_scenarios_db):
        if s["id"] == scenario_id:
            del fake_scenarios_db[i]
            return {"message": "Scenario deleted successfully"}
    raise HTTPException(status_code=404, detail="Scenario not found")