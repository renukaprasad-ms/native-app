from db.database import db

# Collection to store OTPs issued to users for verification flows.
otp_collection = db["user_otps"]
