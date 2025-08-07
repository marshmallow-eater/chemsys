import mongoose from 'mongoose'

export const db = mongoose.createConnection(process.env.DATABASE_URL as string)
