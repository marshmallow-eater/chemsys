import { Schema } from 'mongoose'

import { db } from '~/db'

import { localizedStringSchema } from './localizedString'

const postSchema = new Schema({
  name: { type: String, required: true, unique: true },
  title: { type: localizedStringSchema, required: true },
  content: { type: localizedStringSchema, required: true },
})

const Post = db.model('Posts', postSchema)

export const getMainPage = async (lang: 'en' | 'ua' | 'ru') => {
  const mainPagePost = await Post.findOne({ name: 'main-page' })
  if (!mainPagePost) {
    throw 'no main page post'
  }

  return {
    title: mainPagePost.title[lang],
    content: mainPagePost.content[lang],
  }
}
