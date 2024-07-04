import type { ProgressBarProperties } from './progress-bar.types'

const ProgressBar = ({ items, activeItems }: ProgressBarProperties) => {
	return (
		<div className='flex my-[10px] w-[calc(100%-40px)]'>
			{items.map((value, index) => {
				const isArray = Array.isArray(activeItems)
				const isActive = (isArray && activeItems.includes(value)) || (!isArray && index < activeItems)
				return (
					<div key={value} className='flex flex-col mb-[12px] items-center mr-[5px] flex-1'>
						<div
							style={{
								color: isActive ? '#FF4C73' : '#C4CDD5',
							}}
						>
							{value}
						</div>
						<div
							className='h-[8px] w-full rounded-full'
							style={{
								background: isActive ? '#FF4C73' : '#DFE3E8',
							}}
						/>
					</div>
				)
			})}
		</div>
	)
}

export default ProgressBar
