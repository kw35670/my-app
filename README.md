# MyApp

このアプリは React（フロントエンド）＋ Ruby on Rails（バックエンド）＋ PostgreSQL（DB） で構成されています。
Docker Compose を使えばすぐにローカルで立ち上げられます。

---

## 🚀 起動方法（Docker）

### 1. このリポジトリをクローン

```bash
git clone https://github.com/kw35670/my-app.git
cd my-app
```

### 2. Dockerイメージのビルドと起動
```bash
docker-compose up --build
```
- React：`http://localhost:3000`
- Rails API：`http://localhost:3001`
- PostgreSQL：`localhost:5432`

### 3. Railsのセットアップ
```bash
docker-compose exec backend rails db:create db:migrate
```
必要に応じてシードデータの投入
```bash

```bash
docker-compose exec backend rails db:seed
```