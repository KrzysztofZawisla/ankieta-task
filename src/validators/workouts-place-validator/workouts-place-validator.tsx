import * as yup from 'yup'

const workoutsPlaceValidator = yup.string().required({ message: 'Żadna opcja nie została wybrana' }).strict()

export default workoutsPlaceValidator
