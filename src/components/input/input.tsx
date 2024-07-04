import { forwardRef } from 'react'
import { cn } from '../../lib/utils'
import inputVariants from './input.styles'
import type { InputProperties } from './input.types'

const Input = forwardRef<HTMLInputElement, InputProperties>(({ className, error, label, ...properties }, ref) => {
	return (
		<div className='mb-[20px]'>
			<p className='text-[14px] leading-[17.5px] text-[#919EAB]'>{label}</p>
			<input className={cn(inputVariants({ className }))} {...properties} ref={ref} />
			{error && <p className='text-[14px] text-[#FC4647]'>{error}</p>}
		</div>
	)
})

export default Input
