from motor import motor_asyncio
from model import Expense
import uuid

client = motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')
database = client.ExpenseTracker
collection = database.expense

async def fetch_all_expenses():
    expenses = []
    cursor = collection.find({})
    async for document in cursor:
        expenses.append(Expense(**document))
    return expenses

async def create_expense(expense):
    # MongoDB can only accept string values
    expense['id'] = uuid.UUID(str(uuid.uuid1())).hex
    expense['date'] = str(expense['date'])
    document = expense
    await collection.insert_one(document)
    return document

async def remove_expense(id):
    id = uuid.UUID(str(id)).hex
    if await collection.find_one({'id': id}):
        await collection.delete_one({'id': id})
        return True
    return False