import { useFormikContext } from 'formik'
import Input from '../../input/input'
import useNextStepNavigation from '~frontend/src/hooks/use-next-step-navigation/use-next-step-navigation'
import { useEffect, useMemo } from 'react'
import ProgressBar from '../../progress-bar/progress-bar'
import Button from '../../button/button'
import ContentContainer from '../../content-container/content-container'
import store from 'store2'
import TopBar from '../../top-bar/top-bar'
import Header from '../../header/header'
import { useTranslation } from 'react-i18next'

const FirstStep = () => {
	const nextStep = useNextStepNavigation()
	const { handleChange, handleBlur, errors, values, touched } = useFormikContext<{
		firstName: string
		lastName: string
		email: string
	}>()
	const { t: translate } = useTranslation()
	const { firstName: firstNameTouched, lastName: lastNameTouched, email: emailTouched } = touched ?? {}
	const { firstName, lastName, email } = values
	const { firstName: firstNameError, lastName: lastNameError, email: emailError } = errors ?? {}
	useEffect(() => {
		store.add('current-form', { firstName, lastName, email })
	}, [firstName, lastName, email])
	const isButtonDisabled = useMemo(() => {
		return Boolean(firstNameError || lastNameError || emailError) || !firstName || !lastName || !email
	}, [firstNameError, lastNameError, emailError, firstName, lastName, email])
	return (
		<>
			<TopBar />
			<ProgressBar items={['Dane', 'Dieta', 'Treningi']} activeItems={1} />
			<ContentContainer white>
				<section>
					<Header className='mb-[20px]'>{translate('steps.first.header')}:</Header>
					<Input
						error={firstNameTouched ? firstNameError : undefined}
						label={translate('steps.first.inputs.name.label')}
						name='firstName'
						onChange={handleChange}
						onBlur={handleBlur}
						value={firstName}
					/>
					<Input
						error={lastNameTouched ? lastNameError : undefined}
						label={translate('steps.first.inputs.surname.label')}
						name='lastName'
						value={lastName}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					<Input
						error={emailTouched ? emailError : undefined}
						label={translate('steps.first.inputs.email.label')}
						name='email'
						value={email}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</section>
				<Button
					type='button'
					disabled={isButtonDisabled}
					onClick={() => {
						nextStep()
					}}
				>
					{translate('steps.third.button')}
				</Button>
			</ContentContainer>
		</>
	)
}

export default FirstStep
