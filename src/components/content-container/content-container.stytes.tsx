import { cva } from 'class-variance-authority'

const contentContainerVariants = cva('flex flex-col justify-between w-full grow px-[20px] pt-[22px]', {
	variants: {
		variant: {
			default: '',
			white: 'rounded-t-lg bg-white',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
})

export default contentContainerVariants
