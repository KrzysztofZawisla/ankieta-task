import type { VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes } from 'react'
import errorBoxVariants from '~frontend/src/components/error-box/error-box.styles'

export type ErrorBoxProperties = ButtonHTMLAttributes<HTMLDivElement> & VariantProps<typeof errorBoxVariants>
