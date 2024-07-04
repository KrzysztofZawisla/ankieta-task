import { useNavigate } from 'react-router-dom'
import type { To } from '@remix-run/router'
import type { NavigateOptions } from 'react-router/dist/lib/context'

const useNavigateInSurvey = () => {
	const navigate = useNavigate()
	return (to: To, options?: NavigateOptions) => {
		return navigate(to, {
			...options,
			replace: true,
			state: {
				...options?.state,
				isFromPreviousStep: true,
			},
		})
	}
}

export default useNavigateInSurvey
