from typing import List, Optional
from sqlmodel.ext.asyncio.session import AsyncSession
from sqlmodel import select

import models.survey as survey_model
import schemas.survey as survey_schema


# 新規登録
async def create_survey(
    db_session: AsyncSession, survey_data: survey_schema.SurveyCreate
) -> survey_model.Survey:
    """
    新しいアンケートをデータベースに登録する関数
    Args:
        db_session (AsyncSession): 非同期DBセッション
        survey_data (SurveyCreate): 作成するアンケートのデータ
    Returns:
        Survey: 作成されたアンケートのモデル
    """
    new_survey = survey_model.Survey(**survey_data.model_dump())
    db_session.add(new_survey)
    await db_session.commit()
    await db_session.refresh(new_survey)
    return new_survey


# 全件取得
async def get_surveys(db_session: AsyncSession) -> List[survey_model.Survey]:
    """
    アンケート全件を取得する関数
    Args:
        db_session (AsyncSession): 非同期DBセッション
    Returns:
        List[Survey]: 取得したアンケートのリスト
    """
    result = await db_session.exec(select(survey_model.Survey))
    return result.all()


# 1件取得
async def get_survey(
    db_session: AsyncSession, survey_id: int
) -> Optional[survey_model.Survey]:
    """
    指定IDのアンケートを1件取得する関数
    Args:
        db_session (AsyncSession): 非同期DBセッション
        survey_id (int): 取得するアンケートのID
    Returns:
        Optional[Survey]: 取得したアンケート or None
    """
    return await db_session.get(survey_model.Survey, survey_id)
