from fastapi import status
from schemas.response_schema import ApiResponse


def api_response(
    data=None,
    message: str = "",
    status_code: int = status.HTTP_200_OK,
    success: bool = True,
):
    return ApiResponse(
        status="success" if success else "error",
        status_code=status_code,
        message=message,
        data=data,
    )
