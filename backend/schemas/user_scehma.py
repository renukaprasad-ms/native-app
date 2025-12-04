from pydantic import BaseModel, EmailStr, Field
from datetime import datetime

class UserCreate(BaseModel):
    email: EmailStr
    username: str
    password: str

class UserInDB(BaseModel):
    email: EmailStr
    username: str
    hashed_password: str = Field(..., max_length=72)
    is_verified: bool = False
    created_at: datetime = datetime.utcnow()
    updated_at: datetime = datetime.utcnow()

class UserResponse(BaseModel):
    id: str
    email: EmailStr
    username: str
    is_verified: bool
