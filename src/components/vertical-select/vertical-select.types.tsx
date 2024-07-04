import type { FormikErrors } from 'formik'

export type VerticalSelectPropertiesBase = {
	options: string[]
	onChange: (
		field: string,
		value: VerticalSelectPropertiesBase['value'],
		shouldValidate?: boolean | undefined,
	) => Promise<void | FormikErrors<unknown>>
	value: string | string[]
	name: string
}

export type VerticalSelectPropertiesWithMultiselect = {
	multiselect: true | number
	value: string[]
	onChange: (
		field: string,
		value: VerticalSelectPropertiesWithMultiselect['value'],
		shouldValidate?: boolean | undefined,
	) => Promise<void | FormikErrors<unknown>>
}

export type VerticalSelectPropertiesWithoutMultiselect = {
	multiselect?: false
	value: string
	onChange: (
		field: string,
		value: VerticalSelectPropertiesWithoutMultiselect['value'],
		shouldValidate?: boolean | undefined,
	) => Promise<void | FormikErrors<unknown>>
}

export type VerticalSelectProperties =
	| VerticalSelectPropertiesBase &
			(VerticalSelectPropertiesWithMultiselect | VerticalSelectPropertiesWithoutMultiselect)
