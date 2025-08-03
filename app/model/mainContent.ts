import z from 'zod'

import { db } from '~/db'

const MainContent = z.object({
  _id: z.string(),
  title: z.object({
    ua: z.string(),
    ru: z.string(),
    en: z.string(),
  }),
  about: z.object({
    ua: z.string(),
    ru: z.string(),
    en: z.string(),
  }),
})

export const get = async (lang: 'en' | 'ua' | 'ru') => {
  const maybeContent = await db.get('main-page-content')
  const {
    about,
    title,
  } = await MainContent.parseAsync(maybeContent)

  return {
    about: about[lang],
    title: title[lang],
  }
}
