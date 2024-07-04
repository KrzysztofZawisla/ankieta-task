import type { InitOptions } from 'i18next'

export type TranslationOptions = InitOptions & {
	backend: Record<string, unknown>
}
