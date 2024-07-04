import * as yup from 'yup'

const priorityGoalsValidator = yup
	.array(yup.string())
	.min(2, 'Wybrano za mało opcji')
	.required('To pole jest wymagane')
	.strict()

export default priorityGoalsValidator
