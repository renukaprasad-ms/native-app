from schemas.user_scehma import UserCreate
from api.services.user_service import UserService

class UserController:
    @staticmethod
    async def signup(user:UserCreate):
        return await UserService.signup(user)