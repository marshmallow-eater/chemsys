import { Schema } from 'mongoose'

import { db } from '~/db'

import { localizedStringSchema } from './localizedString'
import type { LanguageCode } from '~/supportedLanguage'

const productSchema = new Schema({
  code: { type: String, required: true },
  title: { type: localizedStringSchema, required: true },
  description: { type: localizedStringSchema, required: true },
  price: { type: Number }, // ALL prices considered to be in UAH
  priceSetOn: { type: Date }, // when price were set, we can hide price if it was set more than 24 hours ago
  avaliability: { type: Boolean }, // If this product avaliable to immidiatly send to client
  avaliabilitySetOn: { type: Boolean }, // when avaliablity was set
  synonims: { type: [localizedStringSchema] },
  // TODO: add more fields
  // country of origin
  // packaging
  // international name
  // chemical formula
  // tags, might or no as it is similar to synonims
  // industries where it is used
  // how it is used in this industries
})

const Product = db.models.Products || db.model('Products', productSchema)

export const getByGroup = async (lang: LanguageCode) => {
  return Product.find({})
}

export const getByNameOrTag = async (lang: LanguageCode) => {
  return Product.find({})
}
