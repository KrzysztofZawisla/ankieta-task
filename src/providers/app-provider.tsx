import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import { I18nextProvider } from 'react-i18next'
import type { AppProviderProperties } from './app-provider.types'

const queryClient = new QueryClient()

const AppProvider = ({ translations, children }: AppProviderProperties) => {
	return (
		<QueryClientProvider client={queryClient}>
			<HelmetProvider>
				<I18nextProvider i18n={translations}>{children}</I18nextProvider>
			</HelmetProvider>
		</QueryClientProvider>
	)
}

export default AppProvider
