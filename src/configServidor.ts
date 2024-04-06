import dotenv from 'dotenv'
dotenv.config()

export const configServidor = {
    PORT: process.env.PORT,
    SECRET_KEY: process.env.SECRET_KEY,
    DB_URL: process.env.BD_URL
}
