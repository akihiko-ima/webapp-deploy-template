# Deployment template for a full-stack web application

## 🚀 使用技術スタック

<ul>
  <li>⚛️ <strong>React</strong> — UIライブラリ</li>
  <li>⚡ <strong>Vite</strong> — フロントエンドビルドツール</li>
  <li>🟦 <strong>TypeScript</strong> — 型安全なJavaScript</li>
  <li>🔗 <strong>React Router DOM</strong> — ルーティング</li>
  <li>🌈 <strong>Tailwind CSS</strong> — ユーティリティファーストCSSフレームワーク</li>
  <li>✨ <strong>ShadCN UI</strong> — UIコンポーネント</li>
  <li>📝 <strong>React Hook Form</strong> — フォーム管理</li>
  <li>🔗 <strong>Axios</strong> — HTTPクライアント</li>
  <li>🖼️ <strong>Material Icons</strong> — アイコンフォント</li>
  <li>🎛️ <strong>Radix UI</strong> — アクセシブルなUIプリミティブ</li>
  <li>🦁 <strong>Lucide Icons</strong> — アイコンセット</li>
  <li>🐍 <strong>FastAPI</strong> — バックエンドAPIフレームワーク</li>
  <li>🗃️ <strong>SQLModel</strong> — DB ORM</li>
  <li>⚡ <strong>Uvicorn</strong> — ASGIサーバー</li>
  <li>🔑 <strong>python-dotenv</strong> — 環境変数管理</li>
  <li>🐳 <strong>Docker</strong> — コンテナ管理</li>
  <li>🌐 <strong>Nginx</strong> — Webサーバ</li>
  <li>🐘 <strong>PostgreSQL</strong> — データベース</li>
  <li>🗄️ <strong>pgAdmin4</strong> — DB管理ツール</li>
</ul>

### Docker commands

- Build the containers

```bash
docker compose build --no-cache
```

- Start the services in the background

```bash
docker compose up -d
```

- Stop all running services

```bash
docker compose down
```

-コンテナ・イメージ・ボリュームの削除

```bash
docker compose down -v --rmi all --remove-orphans
```

### 開発環境時のアクセス先

- web app
  [http://localhost:58080](http://localhost:58080)

- web api
  [http://localhost:58081/docs](http://localhost:58081/docs)

- pgadmin4
  [http://localhost:58082](http://localhost:58082)
  - email: `sample@sample.com`
  - password: `samplepass`

- postgres 接続設定
  - Host name/address: `postgres`
  - Port: `5432`
  - Maintenance database :`surveydb`
  - Username: `sampleuser`
  - Password: `samplepass`

### python インポートエラー対策

```bash
cd server/
```

- uv 仮想環境作成

```bash
uv init -p 3.11 .
```

- uv `requirements.txt`の読み込み

```bash
uv add -r requirements.txt
```

- uv `requirements.txt`の作成

```bash
uv pip freeze > requirements.txt
```

- uv でweb apiの実行

```bash
uv run fastapi dev src/main.py --host 0.0.0.0
```
