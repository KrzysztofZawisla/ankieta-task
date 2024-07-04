import * as yup from 'yup'

const dietExpValidator = yup.string().required('Żadna opcja nie została wybrana').strict()

export default dietExpValidator
