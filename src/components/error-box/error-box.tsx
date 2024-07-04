import { mdiAlertCircle, mdiCheckCircle } from '@mdi/js'
import Icon from '@mdi/react'
import { cn } from '~frontend/src/lib/utils'
import errorBoxVariants from './error-box.styles'
import type { ErrorBoxProperties } from './error-box.types'
import { useTranslation } from 'react-i18next'

const ErrorBox = ({ className, variant, ...properties }: ErrorBoxProperties) => {
	const { t: translate } = useTranslation()
	return (
		<div className={cn(errorBoxVariants({ variant, className }))} {...properties}>
			<Icon
				className='mr-[12px]'
				style={{
					color: variant === 'error' ? '#FC4647' : '#51D12A',
				}}
				path={variant === 'error' ? mdiAlertCircle : mdiCheckCircle}
				size={1}
			/>
			<p>{translate(variant === 'error' ? 'steps.third.error-box.error' : 'steps.third.error-box.success')}</p>
		</div>
	)
}

export default ErrorBox
