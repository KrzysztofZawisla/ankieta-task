import { forwardRef } from 'react'
import { cn } from '~frontend/src/lib/utils'
import type { SeparatorProps } from './seperator.types'
import separatorVariants from './separator.styles'

const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
	({ className, orientation = 'horizontal', ...props }, ref) => {
		return (
			<div
				className={cn(
					separatorVariants({
						variant: orientation === 'horizontal' ? 'default' : 'vertical',
						className,
					}),
				)}
				ref={ref}
				{...props}
			/>
		)
	},
)

Separator.displayName = 'Separator'

export default Separator
