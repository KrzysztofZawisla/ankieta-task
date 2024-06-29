import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Survey from './views/Survey'
import Step from './views/Step'

const router = createBrowserRouter([
	{
		path: '/',
		children: [
			{
				path: '/',
				element: <App />,
			},
			{
				path: 'survey',
				element: <Survey />,
			},
			{
				path: 'survey/step/:stepId',
				element: <Step />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<div className='w-[390px] h-[844px] max-w-dvw max-h-dvh flex flex-col bg-background'>
			<RouterProvider router={router} />
		</div>
	</React.StrictMode>,
)
