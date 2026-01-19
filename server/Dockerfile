# 本番用Dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY ./ ./
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install fastapi[standard]
CMD ["fastapi", "run", "src/main.py", "--port", "8000"]
