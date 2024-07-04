import AppProvider from '../../providers/app-provider'
import AppWrapper from '../app-wrapper/app-wrapper'
import type { AppProperties } from './app.types'

const App = ({ translations, router }: AppProperties) => {
	return (
		<AppProvider translations={translations}>
			<AppWrapper router={router} />
		</AppProvider>
	)
}

export default App
