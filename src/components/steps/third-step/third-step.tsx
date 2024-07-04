import { useFormikContext } from 'formik'
import useHandleStepAccess from '~frontend/src/hooks/use-handle-step-access/use-handle-step-access'
import ProgressBar from '../../progress-bar/progress-bar'
import Button from '../../button/button'
import ContentContainer from '~frontend/src/components/content-container/content-container'
import { useMemo, useEffect } from 'react'
import store from 'store2'
import TopBar from '../../top-bar/top-bar'
import ErrorBox from '../../error-box/error-box'
import HorizontalSelect from '../../horizontal-select/horizontal-select'
import type { ThirdStepProperties } from './third-step.types'

const ThirdStep = ({ formState, isRequestPending }: ThirdStepProperties) => {
	useHandleStepAccess()
	const { setFieldValue, values, errors } = useFormikContext<{
		priorityGoals: string[]
		workoutsPlace: string
	}>()
	const { priorityGoals, workoutsPlace } = values ?? {}
	const { priorityGoals: priorityGoalsError, workoutsPlace: workoutsPlaceError } = errors ?? {}
	useEffect(() => {
		store.add('current-form', { priorityGoals, workoutsPlace })
	}, [priorityGoals, workoutsPlace])
	const isButtonDisabled = useMemo(() => {
		return Boolean(priorityGoalsError || workoutsPlaceError) || !priorityGoals || !workoutsPlace || isRequestPending
	}, [priorityGoalsError, workoutsPlaceError, priorityGoals, workoutsPlace, isRequestPending])
	return (
		<>
			<TopBar />
			{formState === 'pending' ? (
				<ProgressBar items={['Dane', 'Dieta', 'Treningi']} activeItems={3} />
			) : (
				<ErrorBox variant={formState} />
			)}
			<ContentContainer>
				<section>
					<HorizontalSelect
						name='priorityGoals'
						onChange={setFieldValue}
						value={priorityGoals}
						options={['Pośladki', 'Uda', 'Brzuch', 'Łydki', 'Ramiona']}
						multiselect
						header={'Priorytety'}
						description={'Na których partiach najmocniej Ci zależy?'}
					/>
					<HorizontalSelect
						name='workoutsPlace'
						onChange={setFieldValue}
						value={workoutsPlace}
						options={['W domu', 'Na siłowni', 'Pół na pół']}
						header={'Miejsce'}
						description={'Gdzie chciałabyś trenować?'}
					/>
				</section>
				<Button disabled={isButtonDisabled} type='submit'>
					Wyślij ankietę
				</Button>
			</ContentContainer>
		</>
	)
}

export default ThirdStep
