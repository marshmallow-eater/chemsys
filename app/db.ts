import Nano from 'nano'

const env = process.env

const n = Nano(`http://${env.COUCHDB_USER}:${env.COUCHDB_PASSWORD}@${env.COUCH_HOST??'localhost'}:${env.COUCHDB_PORT}`)

export const db = n.db.use(process.env.COUCHDB_DBNAME as string)
