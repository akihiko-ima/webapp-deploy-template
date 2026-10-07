# ビルドステージ
FROM node:22-alpine AS builder
WORKDIR /app
# 依存関係のみ先にインストールしてレイヤーキャッシュを効かせる
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# 本番サーバーステージ
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
