import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../components/Button'

export default function Step() {
	const { stepId = '1' } = useParams()
	const stepNumber = parseInt(stepId)
	const navigate = useNavigate()
	const nextStep = () => navigate(stepNumber >= 3 ? '/' : `/survey/step/${stepNumber + 1}`)

	return (
		<div className='p-5 flex flex-col items-center gap-5'>
			<div>Krok {stepNumber}</div>
			<Button onClick={nextStep}>Dalej</Button>
		</div>
	)
}
