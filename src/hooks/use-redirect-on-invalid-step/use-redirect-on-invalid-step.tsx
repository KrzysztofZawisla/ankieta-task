import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import stepsMatcher from '~frontend/src/constants/steps-matcher/steps-matcher'

const useRedirectOnInvalidStep = () => {
	const navigate = useNavigate()
	const { stepId = '1' } = useParams()
	useEffect(() => {
		const stepNumber = parseInt(stepId)
		if (stepNumber > stepsMatcher.length || stepNumber < 0 || isNaN(stepNumber)) {
			navigate('/', { replace: true })
		}
	}, [stepId, navigate])
}

export default useRedirectOnInvalidStep
