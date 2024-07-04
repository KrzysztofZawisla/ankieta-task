import { useParams } from 'react-router-dom'
import { useMemo } from 'react'
import useNavigateInSurvey from '~frontend/src/hooks/use-navigate-in-survey/use-navigate-in-survey'

const useNextStepNavigation = () => {
	const { stepId = '1' } = useParams()
	const stepNumber = useMemo(() => {
		return parseInt(stepId)
	}, [stepId])
	const navigate = useNavigateInSurvey()
	const nextStep = () => {
		navigate(stepNumber >= 3 ? '/' : `/survey/step/${stepNumber + 1}`)
	}
	return nextStep
}

export default useNextStepNavigation
