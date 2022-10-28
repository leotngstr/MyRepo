from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware # Connect backend with frontend
from database import (
    fetch_all_tasks,
    create_task,
    remove_task
)
from model import Todo

app = FastAPI()

origins = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ['*'],
    allow_headers = ['*'],
)

@app.get('/api/all_tasks')
async def get_all_tasks():
    res = await fetch_all_tasks()
    return res

@app.post('/api/add_task', response_model=Todo)
async def post_task(todo: Todo):
    res = await create_task(todo.dict())
    if res:
        return res
    raise HTTPException(400, 'Bad Request')

@app.delete('/api/delete_task/{text}')
async def delete_task(text):
    res = await remove_task(text)
    if res:
        return 'Successfully deleted'
    raise HTTPException(404, f"There is no task like this")