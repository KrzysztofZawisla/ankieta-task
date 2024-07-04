import type { HeaderProperties } from './header.types'
import { cn } from '~frontend/src/lib/utils'

const Header = ({ children, className, ...properties }: HeaderProperties) => {
	return (
		<h1 className={cn(`text-[20px] font-medium leading-[25px] text-[#001122]`, className)} {...properties}>
			{children}
		</h1>
	)
}

export default Header
