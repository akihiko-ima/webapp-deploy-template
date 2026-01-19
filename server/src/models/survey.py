from sqlmodel import SQLModel, Field
from typing import Optional
from datetime import datetime, timezone
from sqlalchemy import DateTime


class Survey(SQLModel, table=True):
    __tablename__ = "survey"

    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(max_length=255, nullable=False)
    age: int = Field(nullable=False)
    gender: str = Field(max_length=50, nullable=False)
    email: str = Field(max_length=255, nullable=False)
    color: str = Field(max_length=50, nullable=False)
    created_at: datetime = Field(
        sa_type=DateTime(timezone=True),
        default_factory=lambda: datetime.now(timezone.utc),
        nullable=False,
        sa_column_kwargs={"server_default": "CURRENT_TIMESTAMP"},
    )
    updated_at: datetime = Field(
        sa_type=DateTime(timezone=True),
        default_factory=lambda: datetime.now(timezone.utc),
        nullable=False,
        sa_column_kwargs={
            "server_default": "CURRENT_TIMESTAMP",
            "onupdate": lambda: datetime.now(timezone.utc),
        },
    )
