from datetime import datetime
from typing import Optional

from pydantic import BaseModel, Field


class OTPRecord(BaseModel):
    user_id: str
    otp_code: str = Field(..., min_length=4, max_length=8, description="One-time code sent to the user")
    expires_at: datetime
    created_at: datetime = Field(default_factory=datetime.utcnow)
    verified_at: Optional[datetime] = None
    is_verified: bool = False


class OTPVerifyRequest(BaseModel):
    user_id: str
    otp_code: str
