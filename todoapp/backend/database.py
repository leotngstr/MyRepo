import motor.motor_asyncio
from model import Todo

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')
database = client.TodoApp
collection = database.todo

async def fetch_all_tasks():
    todos = []
    cursor = collection.find({})
    async for document in cursor:
        todos.append(Todo(**document))
    return todos

async def create_task(todo):
    document = todo
    result = await collection.insert_one(document)
    return document

async def remove_task(text):
    if await collection.find_one({'text': text}):
        await collection.delete_one({'text': text})
        return True
    return False