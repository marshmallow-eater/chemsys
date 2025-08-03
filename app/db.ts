import Nano from 'nano'

const n = Nano(`http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@localhost:${process.env.COUCHDB_PORT}`)

export const db = n.db.use(process.env.COUCHDB_DBNAME as string)
