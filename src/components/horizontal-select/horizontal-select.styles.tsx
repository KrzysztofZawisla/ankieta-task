import { cva } from 'class-variance-authority'

const horizontalSelectItem = cva(
	'h-[40px] flex justify-center items-center py-[8px] px-[14px] rounded-[12px] border-2	border-solid bg-[]',
	{
		variants: {
			variant: {
				default: 'border-[#DFE3E8] bg-[#DFE3E8] text-[#454F5B]',
				active: 'border-[#f76d93] bg-[#FFEDF2] text-[#F76D93]',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
)

export default horizontalSelectItem
