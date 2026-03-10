import asyncio
from motor.motor_asyncio import AsyncIOMotorClient

async def test_connection():
    try:
        client = AsyncIOMotorClient(
            'mongodb+srv://athish:Athish2006@cluster0.zs2ud.mongodb.net/?appName=Cluster0',
            serverSelectionTimeoutMS=10000
        )
        await client.admin.command('ping')
        print('✅ MongoDB Connected Successfully!')
        
        # List databases
        dbs = await client.list_database_names()
        print(f'📦 Available databases: {dbs}')
        
        client.close()
    except Exception as e:
        print(f'❌ MongoDB Connection Failed: {e}')

asyncio.run(test_connection())
