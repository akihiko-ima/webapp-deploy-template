from fastapi import APIRouter, HTTPException, Depends
from sqlmodel.ext.asyncio.session import AsyncSession

from db import get_db_session
from cruds import survey as survey_crud
from schemas import survey as survey_schema

router = APIRouter(tags=["Survey"], prefix="/surveys")


# 新規登録のエンドポイント
@router.post("/")
async def create_survey(
    survey: survey_schema.SurveyCreate, db: AsyncSession = Depends(get_db_session)
):
    try:
        await survey_crud.create_survey(db, survey)
        return {"message": "Survey created successfully"}
    except Exception as e:
        await db.rollback()
        raise HTTPException(status_code=500, detail=str(e))


# 全件取得のエンドポイント
@router.get("/")
async def get_surveys(db: AsyncSession = Depends(get_db_session)):
    surveys = await survey_crud.get_surveys(db)
    return surveys


# 1件取得のエンドポイント
@router.get("/{survey_id}")
async def get_survey(survey_id: int, db: AsyncSession = Depends(get_db_session)):
    survey = await survey_crud.get_survey(db, survey_id)
    if not survey:
        raise HTTPException(status_code=404, detail="Survey not found")
    return survey
