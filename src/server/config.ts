const env = process.env;

export const HOST = env.HOST ?? "127.0.0.1";
export const PORT = env.PORT ?? "9056";
export const SERVER_URL = `http://${HOST}:${PORT}`;

export const MONGODB_URI = env.MONGODB_URI ?? "mongodb://localhost:27017/?readPreference=primary&ssl=false&directConnection=true";
export const DATABASE_NAME = env.DATABASE_NAME ?? "local";

export default {
  HOST,
  PORT,
  SERVER_URL
}