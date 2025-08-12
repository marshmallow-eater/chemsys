import { Schema } from 'mongoose'
import type { LanguageCode } from '~/supportedLanguage'

type LocalizedStr = {
  [key in LanguageCode]: string
}

export const localizedStringSchema = new Schema<LocalizedStr>({
  en: {
    type: String,
    required: [true, 'English translation is required'],
  },
  ua: {
    type: String,
    required: [true, 'Ukrainian translation is required'],
  },
  ru: {
    type: String,
    required: [true, 'russian translation is required'],
  },
}, {
  _id: false,
})
