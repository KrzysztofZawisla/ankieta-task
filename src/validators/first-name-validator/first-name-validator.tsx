import * as yup from 'yup'

const firstNameValidator = yup.string().required('Pole nie może być puste').strict()

export default firstNameValidator
