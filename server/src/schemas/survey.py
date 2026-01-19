from pydantic import BaseModel, EmailStr, Field


class SurveyCreate(BaseModel):
    name: str
    age: int = Field(..., ge=0, le=120)
    gender: str
    email: EmailStr
    color: str
