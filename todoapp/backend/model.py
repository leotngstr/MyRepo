from pydantic import BaseModel

class Todo(BaseModel):
    text: str