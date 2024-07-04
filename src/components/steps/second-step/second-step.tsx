import VerticalSelect from '../../vertical-select/vertical-select'
import { useFormikContext } from 'formik'
import useHandleStepAccess from '~frontend/src/hooks/use-handle-step-access/use-handle-step-access'
import useNextStepNavigation from '~frontend/src/hooks/use-next-step-navigation/use-next-step-navigation'
import ProgressBar from '../../progress-bar/progress-bar'
import Button from '../../button/button'
import ContentContainer from '~frontend/src/components/content-container/content-container'
import { useMemo, useEffect } from 'react'
import store from 'store2'
import TopBar from '../../top-bar/top-bar'
import { useTranslation } from 'react-i18next'

const SecondStep = () => {
	useHandleStepAccess()
	const nextStep = useNextStepNavigation()
	const { setFieldValue, values, errors } = useFormikContext<{
		dietExp: string
	}>()
	const { dietExp: dietExpError } = errors ?? {}
	const { dietExp } = values ?? {}
	useEffect(() => {
		store.add('current-form', { dietExp })
	}, [dietExp])
	const isButtonDisabled = useMemo(() => {
		return Boolean(dietExpError) || !dietExp
	}, [dietExpError, dietExp])
	const { t: translate } = useTranslation()
	return (
		<>
			<TopBar />
			<ProgressBar items={['Dane', 'Dieta', 'Treningi']} activeItems={2} />
			<ContentContainer>
				<VerticalSelect
					name='dietExp'
					value={dietExp}
					onChange={setFieldValue}
					options={['Nigdy nie próbowałem', 'Dopiero zaczynam', 'Liczę już jakiś czas', 'Jestem doświadczona']}
				/>
				<Button
					type='button'
					disabled={isButtonDisabled}
					onClick={() => {
						nextStep()
					}}
				>
					{translate('steps.second.button')}
				</Button>
			</ContentContainer>
		</>
	)
}

export default SecondStep
