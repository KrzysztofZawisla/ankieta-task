import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import routesAsRouterContent from './constants/routes-as-router-content/routes-as-router-content'
import App from './components/app/app'
import initTranslations from './utils/translations/init-trasnlations/init-trasnlations'

const run = async () => {
	const rootElement = document.getElementById('root')

	if (rootElement) {
		const translationsPromise = initTranslations()
		const router = createBrowserRouter(routesAsRouterContent)
		const translations = await translationsPromise
		createRoot(rootElement).render(
			<StrictMode>
				<App translations={translations} router={<RouterProvider router={router} />} />
			</StrictMode>,
		)
	}
}

run()
