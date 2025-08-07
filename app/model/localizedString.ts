import { Schema } from 'mongoose'

export const localizedStringSchema = new Schema({
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
