import { useMemo } from 'react'
import store from 'store2'
import firstStepValidator from '~frontend/src/validators/first-step-validator/first-step-validator'
import secondStepValidator from '~frontend/src/validators/second-step-validator/second-step-validator'
import thirdStepValidator from '~frontend/src/validators/third-step-validator/third-step-validator'
import type { FormikSurveyState } from '~frontend/src/types/formik-survey-state/formik-survey-state'
import emptySurveyValues from '~frontend/src/constants/empty-survey-values/empty-survey-values'
import useNavigateInSurvey from '~frontend/src/hooks/use-navigate-in-survey/use-navigate-in-survey'

const useGetInitialValues = () => {
	const navigate = useNavigateInSurvey()
	return useMemo(() => {
		const restoredValues = store.get('current-form')
		const { email, firstName, lastName, dietExp, priorityGoals, workoutsPlace } = restoredValues ?? {}
		let targetStep = 1
		let result: Partial<FormikSurveyState> = {}
		try {
			firstStepValidator.validateSync({ email, firstName, lastName }, {})
			result = { email, firstName, lastName }
		} catch {
			return emptySurveyValues
		}
		try {
			secondStepValidator.validateSync({ dietExp })
			result = { ...result, dietExp }
			targetStep = 2
		} catch {
			navigate(`/survey/step/${targetStep}`)
			return {
				...emptySurveyValues,
				...result,
			}
		}
		try {
			thirdStepValidator.validateSync({
				priorityGoals,
				workoutsPlace,
			})
			result = { ...result, priorityGoals, workoutsPlace }
			targetStep = 3
		} catch {
			navigate(`/survey/step/${targetStep}`)
			return {
				...emptySurveyValues,
				...result,
			}
		}
		navigate(`/survey/step/${targetStep}`)
		return result as FormikSurveyState
	}, [])
}

export default useGetInitialValues
