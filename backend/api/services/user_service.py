from schemas.user_scehma import UserCreate, UserInDB
from db.models.user_model import user_collection
from utils.response import api_response
from utils.hash import hash_password
from utils.email import send_email
from utils.otp import generate_otp
from fastapi import status


class UserService:
    @staticmethod
    async def signup(user: UserCreate):
        existing = await user_collection.find_one({"email": user.email})
        if existing:
            return api_response(
                success=False,
                message="Email already registered",
                status_code=status.HTTP_400_BAD_REQUEST,
            )
        
        hased_pass = hash_password(user.password)

        user_db = UserInDB(
            email=user.email,
            username=user.username,
            hashed_password=hased_pass
        )

        result = await user_collection.insert_one(user_db.dict())
        user_id = str(result.inserted_id)

        otp = generate_otp(user_id)

        await send_email(user.email, otp)

        return api_response(
            success=True,
            message=f"Signup successful. OTP sent to {user.email}",
            data={"user_id": user_id},
            status_code=status.HTTP_201_CREATED,
        )




