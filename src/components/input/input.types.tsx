import type { InputHTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import type inputVariants from '~frontend/src/components/input/input.styles'

export type InputProperties = InputHTMLAttributes<HTMLInputElement> &
	VariantProps<typeof inputVariants> & {
		error?: string
		label: string
	}
