import type { Module, i18n as TranslationType } from 'i18next'
import type { TranslationOptions } from '../translations-options/trasnlations-options.types'

export type SetupTranslationArguments<ModuleType extends Module> = {
	translation: TranslationType
	options: TranslationOptions
	modules: ModuleType[]
}

export type InitTranslations = () => Promise<TranslationType>
export type SetupTranslation = <ModuleType extends Module>(
	argument: SetupTranslationArguments<ModuleType>,
) => Promise<TranslationType>
