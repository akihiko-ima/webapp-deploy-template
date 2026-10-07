# 本番用Dockerfile
FROM python:3.11-slim
WORKDIR /app
# 依存関係のみ先にインストールしてレイヤーキャッシュを効かせる
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install fastapi[standard]
COPY ./ ./
CMD ["fastapi", "run", "src/main.py", "--port", "8000"]
