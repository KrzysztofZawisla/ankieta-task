import * as yup from 'yup'
import priorityGoalsValidator from '../priority-goals-validator/priority-goals-validator'
import workoutsPlaceValidator from '../workouts-place-validator/workouts-place-validator'

const thirdStepValidator = yup
	.object()
	.shape({
		priorityGoals: priorityGoalsValidator,
		workoutsPlace: workoutsPlaceValidator,
	})
	.required()
	.strict()

export default thirdStepValidator
