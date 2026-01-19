from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers.survey import router as survey_router

app = FastAPI()

# CORS設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ルーターの登録
app.include_router(survey_router)


@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}
