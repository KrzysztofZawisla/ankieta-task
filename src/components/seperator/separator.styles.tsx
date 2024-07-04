import { cva } from 'class-variance-authority'

const separatorVariants = cva('bg-grey-400-70 shrink-0', {
	variants: {
		variant: {
			default: 'h-[1px] w-full',
			vertical: 'w-[1px] h-full',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
})

export default separatorVariants
