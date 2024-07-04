import type { FormikSurveyState } from '~frontend/src/types/formik-survey-state/formik-survey-state'

const emptySurveyValues: FormikSurveyState = {
	email: '',
	firstName: '',
	lastName: '',
	priorityGoals: [] as string[],
	workoutsPlace: '',
	dietExp: '',
}

export default emptySurveyValues
