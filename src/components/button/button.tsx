import { forwardRef } from 'react'
import { cn } from '~frontend/src/lib/utils'
import Icon from '@mdi/react'
import { mdiArrowRight } from '@mdi/js'
import type { ButtonProps } from './button.types'
import buttonVariants from './button.styles'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, disabled, variant, size, children, ...props }, ref) => {
		return (
			<button
				style={{
					background: disabled ? '#F9AABA' : undefined,
				}}
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				disabled={disabled}
				{...props}
			>
				{children}
				<Icon
					style={{
						marginLeft: 10,
					}}
					path={mdiArrowRight}
					size={'20px'}
				/>
			</button>
		)
	},
)

Button.displayName = 'Button'

export default Button
