import { Schema } from 'mongoose'

import { db } from '~/db'
import type { LanguageCode } from '~/supportedLanguage'

import { localizedStringSchema } from './localizedString'

const productSchema = new Schema({
  code: { type: String, required: true },
  title: { type: localizedStringSchema, required: true },
  description: { type: localizedStringSchema, required: true },
  applience: { type: localizedStringSchema },
  price: { type: Number }, // ALL prices considered to be in UAH
  priceSetOn: { type: Date }, // when price were set, we can hide price if it was set more than 24 hours ago
  avaliability: { type: Boolean }, // If this product avaliable to immidiatly send to client
  avaliabilitySetOn: { type: Boolean }, // when avaliablity was set
  synonims: { type: [localizedStringSchema] },
  origin: { type: localizedStringSchema },
  packaging: { type: localizedStringSchema },
  internationalName: { type: String },
  chemicalFormula: { type: String },
  industries: { type: [localizedStringSchema] },
})

const Product = db.models.Products || db.model('Products', productSchema)

export const getByIndustrie = async (lang: LanguageCode, industryName: string) => {
  return Product.find({
    industries: {
      $elemMatch: { [lang]: new RegExp(industryName, 'i') },
    },
  })
}

export const getByNameOrTag = async (lang: LanguageCode, searchPhrase: string) => {
  const searchRegex = new RegExp(`.*${searchPhrase}.*`)

  return Product.find({
    $or: [
      { [`title.${lang}`]: searchRegex },
      { synonims: { $elemMatch: { [lang]: searchRegex } } },
      { internationalName: searchRegex },
      { code: searchPhrase },
    ],
  })
}
