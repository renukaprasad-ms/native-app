import random
from db.models.user_otp_model import otp_collection
from schemas.otp_schema import OTPVerifyRequest
from datetime import datetime, timedelta

def generate_otp(user_id: str):
    otp = str(random.randint(1000, 9999))

    new_record = {
        "user_id": user_id,
        "otp_code": otp,
        "expires_at": datetime.utcnow() + timedelta(minutes=5),
        "created_at": datetime.utcnow(),
        "verified_at": None,
        "is_verified": False
    }

    otp_collection.update_one(
        {"user_id": user_id},
        {"$set": new_record},
        upsert=True  
    )

    return otp


def verify_otp(data: OTPVerifyRequest):
    record = otp_collection.find_one({"user_id": data.user_id}, sort=[("_id", -1)])
    if not record:
        return False, "OTP not found"

    if record["expires_at"] < datetime.utcnow():
        return False, "OTP expired"

    if record["otp_code"] != data.otp_code:
        return False, "Invalid OTP"

    otp_collection.update_one(
        {"_id": record["_id"]},
        {"$set": {"is_verified": True, "verified_at": datetime.utcnow()}}
    )

    return True, "OTP verified successfully"
