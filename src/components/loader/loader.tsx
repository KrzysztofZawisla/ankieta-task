import type { FunctionComponent, JSX } from 'react'

const Loader: FunctionComponent = (): JSX.Element => {
	return (
		<div className='animate-pulse grid place-items-center w-full h-full flex-1'>
			<div className='w-[min(30%,150px)] h-[0.6rem] rounded-1 bg-[#FF4C73] overflow-hidden	'>
				<div className='h-full rounded-1' />
			</div>
		</div>
	)
}

export default Loader
