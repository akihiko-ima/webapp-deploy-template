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
  - フロントからは `/api/*` で呼び出す（nginx がリバースプロキシ。`npm run dev` 時は Vite が `http://localhost:58081` へプロキシ）
  - `server/src` は volume マウントされており、変更はホットリロードされる

- pgadmin4
  [http://localhost:58082](http://localhost:58082)
  - email: `sample@sample.com`
  - password: `samplepass`

### PostgreSQL 接続情報

接続元によって Host / Port が異なる点に注意。

| 項目 | pgAdmin から（コンテナ内） | ホスト PC から（DBeaver, psql など） |
| --- | --- | --- |
| Host name/address | `postgres` | `localhost` |
| Port | `5432` | `58083` |
| Database | `surveydb` | `surveydb` |
| Username | `sampleuser` | `sampleuser` |
| Password | `samplepass` | `samplepass` |

- pgAdmin では「Register → Server」を開き、General タブの Name に任意の名前（例: `surveydb`）、Connection タブに上記を入力する
- pgAdmin はコンテナ内から接続するため、Host は `localhost` ではなくサービス名の `postgres` を指定する
- psql の例: `psql -h localhost -p 58083 -U sampleuser -d surveydb`
- `api_user` / `api_pass` は web api 用ユーザー（SELECT / INSERT / UPDATE / DELETE のみ）。管理作業には `sampleuser` を使う
- 接続情報は `docker-compose.yml`、`db/postgres/init.d/01_create_api_user.sql`、`server/.env` で定義している

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
