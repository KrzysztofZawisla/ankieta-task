import { useParams } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiArrowLeft } from '@mdi/js'
import { useCallback } from 'react'
import useNavigateInSurvey from '~frontend/src/hooks/use-navigate-in-survey/use-navigate-in-survey'

const BackArrow = () => {
	const navigate = useNavigateInSurvey()
	const { stepId = '1' } = useParams()
	const previousStep = useCallback(() => {
		const stepNumber = parseInt(stepId)
		navigate(stepNumber <= 1 ? '/' : `/survey/step/${stepNumber - 1}`)
	}, [navigate, stepId])
	return (
		<div className='absolute left-[20px]' onClick={previousStep}>
			<Icon path={mdiArrowLeft} size={1} />
		</div>
	)
}

export default BackArrow
