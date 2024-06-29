import { useNavigate } from 'react-router-dom'
import Task from '../components/Task'
import { Button } from '../components/Button'
import { Separator } from '../components/Separator'
import { draftExample, surveyExample } from '../examples'

export default function App() {
	const navigate = useNavigate()
	const openSurvey = () => navigate('/survey')

	return (
		<>
			<div className='z-10 bg-white h-[62px] relative flex items-center px-5'>
				<span className='text-2xl text-foreground'>
					<span className='text-pink-intense'>Zadanie</span> rekrutacyjne
				</span>
				<div className='h-[1px] absolute bottom-0 inset-x-0 bg-border' />
			</div>

			<div className='flex-1 overflow-auto py-7 px-5 gap-5 flex flex-col'>
				<div className='flex flex-col gap-1'>
					<div className='text-foreground text-xl'>Autor:</div>
					<div className='text-pink-intense text-lg'>Imię Nazwisko</div>
				</div>

				<Separator />

				<div className='text-foreground text-xl'>Formularz:</div>
				<Button onClick={openSurvey}>Wypełnij ankietę</Button>
				<Button variant={'secondary'}>Usuń ostatnią</Button>

				<Separator />

				<div className='flex flex-col gap-0.5'>
					<div className='text-foreground text-xl'>Wersja robocza:</div>
					<div className='text-grey-500 text-sm font-light'>Local storage</div>
				</div>

				<div className='bg-white p-2.5 text-grey-600 text-sm tracking-normal font-medium rounded-[10px] font-mono'>
					<pre>{draftExample}</pre>
				</div>

				<Separator />

				<div className='flex flex-col gap-0.5'>
					<div className='text-foreground text-xl'>Ukończone ankiety:</div>
					<div className='text-grey-500 text-sm font-light'>Global state</div>
				</div>

				<div className='bg-white p-2.5 text-grey-600 text-sm tracking-normal font-medium rounded-[10px] font-mono'>
					<pre>{surveyExample}</pre>
				</div>

				<Separator />

				<Task />
			</div>
		</>
	)
}
