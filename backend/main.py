from fastapi import FastAPI
from api.routes.user_routes import auth_router

app = FastAPI()

app.include_router(auth_router)

@app.get('/')
def home():
 return {"message": "API is running"}