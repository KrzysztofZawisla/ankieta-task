import type { FormikErrors } from 'formik'

export type HorizontalSelectPropertiesBase = {
	options: string[]
	multiselect?: boolean | number
	header: string
	description: string
	onChange: (
		field: string,
		value: HorizontalSelectProperties['value'],
		shouldValidate?: boolean | undefined,
	) => Promise<void | FormikErrors<unknown>>
	value: string | string[]
	name: string
}

export type HorizontalSelectPropertiesWithMultiselect = {
	multiselect: true | number
	value: string[]
	onChange: (
		field: string,
		value: HorizontalSelectPropertiesWithMultiselect['value'],
		shouldValidate?: boolean | undefined,
	) => Promise<void | FormikErrors<unknown>>
}

export type HorizontalSelectPropertiesWithoutMultiselect = {
	multiselect?: false
	value: string
	onChange: (
		field: string,
		value: HorizontalSelectPropertiesWithoutMultiselect['value'],
		shouldValidate?: boolean | undefined,
	) => Promise<void | FormikErrors<unknown>>
}

export type HorizontalSelectProperties =
	| HorizontalSelectPropertiesBase &
			(HorizontalSelectPropertiesWithMultiselect | HorizontalSelectPropertiesWithoutMultiselect)
