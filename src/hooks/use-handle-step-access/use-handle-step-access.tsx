import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const useHandleStepAccess = () => {
	const { state } = useLocation()
	const navigate = useNavigate()
	const { isFromPreviousStep } = state ?? {}
	useEffect(() => {
		!isFromPreviousStep && navigate('/')
	}, [isFromPreviousStep, navigate])
}

export default useHandleStepAccess
