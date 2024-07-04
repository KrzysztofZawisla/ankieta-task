import i18nextBackend from 'i18next-http-backend'
import LocalStorageBackend from 'i18next-localstorage-backend'
import type { TranslationOptions } from './trasnlations-options.types'

const translationsOptions: TranslationOptions = {
	load: 'languageOnly',
	detection: {
		convertDetectedLanguage: (language: string) => {
			return language.replace('-', '_').split('_')[0]
		},
	},
	ns: 'translations',
	backend: {
		backends: [i18nextBackend, LocalStorageBackend],
		backendOptions: [
			{
				loadPath: `/locales/{{lng}}.json`,
			},
			{},
		],
	},
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
}

export default translationsOptions
