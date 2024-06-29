import { forwardRef } from 'react'
import { cn } from '../lib/utils'

type SeparatorProps = React.HTMLAttributes<HTMLDivElement> & {
	orientation?: 'horizontal' | 'vertical'
}

const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
	({ className, orientation = 'horizontal', ...props }, ref) => {
		return (
			<div
				className={cn(
					'bg-grey-400-70 shrink-0',
					orientation === 'horizontal' ? 'h-[1px] w-full' : 'w-[1px] h-full',

					className,
				)}
				ref={ref}
				{...props}
			/>
		)
	},
)

Separator.displayName = 'Separator'

export { Separator }
