import { cva } from 'class-variance-authority'

const errorBoxVariants = cva(
	'h-[64px] py-[10px] px-[18px] border-solid border-[1px] w-[calc(100%-36px)] flex items-center	rounded-[12px]',
	{
		variants: {
			variant: {
				error: 'border-[#FD8C8D] text-[#FC4647] bg-[#FFF6F6]',
				success: 'border-[#51D12A99] text-[#51D12A] bg-[#51D12A0D]',
			},
		},
		defaultVariants: {
			variant: 'error',
		},
	},
)

export default errorBoxVariants
