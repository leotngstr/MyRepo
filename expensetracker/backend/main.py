from cmath import exp
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import Expense
from database import (
    fetch_all_expenses,
    create_expense,
    remove_expense
)

app = FastAPI()

origins = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ['*'],
    allow_headers = ['*']
)

@app.get('/api/all_expenses')
async def get_all_expenses():
    res = await fetch_all_expenses()
    return res

@app.post('/api/add_expense', response_model=Expense)
async def add_expense(expense: Expense):
    res = await create_expense(expense.dict())
    if res:
        return res
    raise HTTPException(400, 'Bad request')

@app.delete('/api/delete_expense/{id}')
async def delete_expense(id):
    res = await remove_expense(id)
    if res:
        return 'Successfully deleted'
    raise HTTPException(404, 'There is no expense like this')