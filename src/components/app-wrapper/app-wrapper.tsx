import { Suspense } from 'react'
import useHandleI18NextCache from '../../hooks/use-handle-i18next-cache/use-handle-i18next-cache'
import type { AppWrapperProperties } from './app-wrapper.types'
import Loader from '../loader/loader'

const AppWrapper = ({ router }: AppWrapperProperties) => {
	useHandleI18NextCache()
	return (
		<Suspense fallback={<Loader />}>
			<div className='w-[390px] h-[844px] max-w-dvw max-h-dvh flex flex-col bg-background'>{router}</div>
		</Suspense>
	)
}

export default AppWrapper
