import { lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

const App = lazy(() => {
	return Promise.resolve(import('../../views/homepage/homepage'))
})

const Step = lazy(() => {
	return Promise.resolve(import('../../views/step/step'))
})

const routesAsRouterContent: RouteObject[] = [
	{
		path: '/',
		children: [
			{
				path: '/',
				element: <App />,
			},
			{
				path: 'survey/step/:stepId',
				element: <Step />,
			},
		],
	},
]

export default routesAsRouterContent
