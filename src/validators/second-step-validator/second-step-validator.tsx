import * as yup from 'yup'
import dietExpValidator from '../diet-exp-validator/diet-exp-validator'

const secondStepValidator = yup
	.object()
	.shape({
		dietExp: dietExpValidator,
	})
	.required()
	.strict()

export default secondStepValidator
