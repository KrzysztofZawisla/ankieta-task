import * as yup from 'yup'
import firstNameValidator from '../first-name-validator/first-name-validator'
import emailValidator from '../email-validator/email-validator'
import lastNameValidator from '../last-name-validator/last-name-validator'

const firstStepValidator = yup
	.object()
	.shape({
		email: emailValidator,
		firstName: firstNameValidator,
		lastName: lastNameValidator,
	})
	.required()
	.strict()

export default firstStepValidator
