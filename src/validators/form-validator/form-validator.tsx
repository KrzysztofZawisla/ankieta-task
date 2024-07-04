import * as yup from 'yup'
import firstNameValidator from '../first-name-validator/first-name-validator'
import emailValidator from '../email-validator/email-validator'
import lastNameValidator from '../last-name-validator/last-name-validator'
import priorityGoalsValidator from '../priority-goals-validator/priority-goals-validator'
import dietExpValidator from '../diet-exp-validator/diet-exp-validator'
import workoutsPlaceValidator from '../workouts-place-validator/workouts-place-validator'

const formValidator = yup
	.object()
	.shape({
		email: emailValidator,
		firstName: firstNameValidator,
		lastName: lastNameValidator,
		priorityGoals: priorityGoalsValidator,
		dietExp: dietExpValidator,
		workoutsPlace: workoutsPlaceValidator,
	})
	.required()
	.strict()

export default formValidator
