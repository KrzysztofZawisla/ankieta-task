import translations from './public/locales/en.json'

declare module 'i18next' {
	interface CustomTypeOptions {
		defaultNS: 'translations'
		resources: {
			translations: typeof translations
		}
	}
}
