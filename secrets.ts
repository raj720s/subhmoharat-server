import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export const PORT = process.env.PORT || 3500
export const JWT_SECRET = process.env.JWT_SECRET || 'secret'
export const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/postgres'