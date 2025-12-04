from fastapi import APIRouter
from api.controllers.user_controller import UserController
from schemas.user_scehma import UserCreate

auth_router = APIRouter(prefix="/auth", tags=["Auth"])

@auth_router.post("/signup")
async def signup(user:UserCreate):
    return await UserController.signup(user)