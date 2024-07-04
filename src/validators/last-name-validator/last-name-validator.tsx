import * as yup from 'yup'

const lastNameValidator = yup.string().required('Pole nie może być puste').strict()

export default lastNameValidator
