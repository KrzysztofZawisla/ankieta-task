import { cva } from 'class-variance-authority'

const buttonVariants = cva(
	'inline-flex mb-[34px] items-center justify-center whitespace-nowrap rounded-xl text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-100 disabled:bg-pink-disabled',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-primary/90',
				secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-hover',
			},
			size: {
				default: 'h-12 w-full px-4 py-2',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

export default buttonVariants
