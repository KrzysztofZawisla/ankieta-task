import i18next, { type Module, type ThirdPartyModule, type i18n as TranslationType } from 'i18next'
import i18nextDetector from 'i18next-browser-languagedetector'
import chainedBackend from 'i18next-chained-backend'
import translationsOptions from '../translations-options/translations-options'
import type { InitTranslations, SetupTranslation, SetupTranslationArguments } from './init-translations.types'

const fixedI18NextDetector: ThirdPartyModule = i18nextDetector as unknown as ThirdPartyModule
const fixedChainedBackend: ThirdPartyModule = chainedBackend as unknown as ThirdPartyModule

export const setupTranslation: SetupTranslation = async <ModuleType extends Module>({
	translation,
	options,
	modules,
}: SetupTranslationArguments<ModuleType>): Promise<TranslationType> => {
	modules.forEach((module: ModuleType) => {
		translation = translation.use(module)
	})
	await translation.init(options)
	return translation
}

const initTranslations: InitTranslations = async (): Promise<TranslationType> => {
	return await setupTranslation({
		translation: i18next,
		options: translationsOptions,
		modules: [fixedChainedBackend, fixedI18NextDetector],
	})
}

export default initTranslations
