import { cn } from '~frontend/src/lib/utils'
import type { ContentContainerProperties } from './content-container.types'
import contentContainerVariants from './content-container.stytes'

const ContentContainer = ({ children, white }: ContentContainerProperties) => {
	return (
		<div
			className={cn(
				contentContainerVariants({
					variant: white ? 'white' : 'default',
				}),
			)}
		>
			{children}
		</div>
	)
}

export default ContentContainer
