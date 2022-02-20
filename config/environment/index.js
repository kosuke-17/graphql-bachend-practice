import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

// プロジェクトの開発環境を判定
const env = {
  development: process.env.NODE_ENV === "development",
  test: process.env.NODE_ENV === "test",
  staging: process.env.NODE_ENV === "staging",
  production: process.env.NODE_ENV === "production",
};

export { port, env };
