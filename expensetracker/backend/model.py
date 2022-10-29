from datetime import date
from pydantic import BaseModel, Field

class Expense(BaseModel):
    id: str
    type: str
    name: str
    date: date
    amount: int = Field(gt=0, description="The amount must be greater than 0")