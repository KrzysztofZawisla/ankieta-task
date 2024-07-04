import * as yup from 'yup'

const emailValidator = yup
	.string()
	.required('Pole nie może być puste')
	.email('Podany adres e-mail jest nieprawidłowy')
	.strict()

export default emailValidator
