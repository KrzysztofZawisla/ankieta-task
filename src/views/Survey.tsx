import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'

export default function Survey() {
	const navigate = useNavigate()
	const nextStep = () => navigate('/survey/step/1')

	return (
		<div className='p-5 flex flex-col items-center gap-5'>
			<div>Ankieta</div>
			<Button onClick={nextStep}>Dalej</Button>
		</div>
	)
}
