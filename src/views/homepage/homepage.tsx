import { useNavigate } from 'react-router-dom'
import Button from '../../components/button/button'
import useSurveysStore from '../../stores/surveys-store/surveys-store'
import store from 'store2'
import Separator from '../../components/seperator/separator'
import Task from '../../components/task/task'

export default function App() {
	const navigate = useNavigate()
	const openSurvey = () => navigate('/survey/step/1')
	const { surveys, popSurvey } = useSurveysStore()
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
					<div className='text-pink-intense text-lg'>Krzysztof Zawisła</div>
				</div>

				<Separator />

				<div className='text-foreground text-xl'>Formularz:</div>
				<Button onClick={openSurvey}>Wypełnij ankietę</Button>
				<Button
					variant='secondary'
					onClick={() => {
						popSurvey()
					}}
				>
					Usuń ostatnią
				</Button>

				<Separator />

				<div className='flex flex-col gap-0.5'>
					<div className='text-foreground text-xl'>Wersja robocza:</div>
					<div className='text-grey-500 text-sm font-light'>Local storage</div>
				</div>

				<div className='bg-white p-2.5 text-grey-600 text-sm tracking-normal font-medium rounded-[10px] font-mono'>
					<pre className='overflow-x-auto'>{JSON.stringify(store.get('current-form') ?? {}, null, 2)}</pre>
				</div>

				<Separator />

				<div className='flex flex-col gap-0.5'>
					<div className='text-foreground text-xl'>Ukończone ankiety:</div>
					<div className='text-grey-500 text-sm font-light'>Global state</div>
				</div>

				<div className='bg-white p-2.5 text-grey-600 text-sm tracking-normal font-medium rounded-[10px] font-mono'>
					<pre className='overflow-x-auto'>{JSON.stringify(surveys, null, 2)}</pre>
				</div>

				<Separator />

				<Task />
			</div>
		</>
	)
}
