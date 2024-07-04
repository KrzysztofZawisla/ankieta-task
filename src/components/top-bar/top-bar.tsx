import { useTranslation } from 'react-i18next'
import BackArrow from '../back-arrow/back-arrow'

const TopBar = () => {
	const { t: translate } = useTranslation()
	return (
		<div className='h-[62px] w-full relative flex justify-center text-center items-center bg-white'>
			<BackArrow />
			<p>{translate('header')}</p>
		</div>
	)
}

export default TopBar
