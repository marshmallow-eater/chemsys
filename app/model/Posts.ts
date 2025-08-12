import { Schema } from 'mongoose'

import { db } from '~/db'
import type { LanguageCode } from '~/supportedLanguage'

import { localizedStringSchema } from './localizedString'

const postSchema = new Schema({
  name: { type: String, required: true, unique: true },
  title: { type: localizedStringSchema, required: true },
  content: { type: localizedStringSchema, required: true },
})

const Post = db.models.Posts || db.model('Posts', postSchema)

export const getContactPage = async (lang: LanguageCode) => {
  const contactPagePost = await Post.findOne({ name: 'contact-page' })
  if (!contactPagePost) {
    throw 'no  contact page post'
  }

  return {
    title: contactPagePost.title[lang],
    content: contactPagePost.content[lang],
  }
}

export const getMainPage = async (lang: LanguageCode) => {
  const mainPagePost = await Post.findOne({ name: 'main-page' })
  if (!mainPagePost) {
    throw 'no main page post'
  }

  return {
    title: mainPagePost.title[lang],
    content: mainPagePost.content[lang],
  }
}
