import { cva } from 'class-variance-authority'

const inputVariants = cva(
	'w-full my-[10px] bg-[#F1F4F6] py-[10px] px-[16px] items-center mt justify-center whitespace-nowrap rounded-xl text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
)

export default inputVariants
