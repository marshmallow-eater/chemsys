export const supportedLanguages = ['en', 'ua', 'ru'] as const

export type LanguageCode = typeof supportedLanguages[number]
