import { useParams } from 'react-router-dom'
import { Formik } from 'formik'
import { useCallback, useMemo, useState } from 'react'
import { mockApi } from '~frontend/src/api/mockApi'
import store from 'store2'
import formValidator from '../../validators/form-validator/form-validator'
import useRedirectOnInvalidStep from '../../hooks/use-redirect-on-invalid-step/use-redirect-on-invalid-step'
import stepsMatcher from '../../constants/steps-matcher/steps-matcher'
import useSurveysStore from '../../stores/surveys-store/surveys-store'
import { useMutation } from '@tanstack/react-query'
import type { FormikSurveyState } from '../../types/formik-survey-state/formik-survey-state'
import useNavigateInSurvey from '../../hooks/use-navigate-in-survey/use-navigate-in-survey'
import useGetInitialValues from '../../hooks/use-get-initial-values/use-get-initial-values'

export default function Step() {
	const navigate = useNavigateInSurvey()
	const { stepId = '1' } = useParams()
	const stepNumber = useMemo(() => {
		return parseInt(stepId)
	}, [stepId])
	const SelectedStep = stepsMatcher[stepNumber - 1]
	useRedirectOnInvalidStep()
	const { pushSurvey } = useSurveysStore()
	const [formState, setFormState] = useState<'pending' | 'error' | 'success'>('pending')
	const initialValues: FormikSurveyState = useGetInitialValues()
	const { mutateAsync, isPending } = useMutation({
		onError: () => {
			setFormState('error')
		},
		mutationFn: async (values: FormikSurveyState) => {
			const result = await mockApi(values)
			if (result !== 'success') {
				throw new Error('error')
			}
		},
	})
	const onSubmit = useCallback(
		async (values: FormikSurveyState) => {
			await mutateAsync(values)
			store.remove('current-form')
			pushSurvey(values)
			setFormState('success')
			setTimeout(() => {
				navigate('/')
			}, 5_000)
		},
		[mutateAsync, navigate, pushSurvey],
	)
	const isRequestPending = useMemo(() => {
		return formState === 'success' || isPending
	}, [formState, isPending])
	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={formValidator}>
			{({ handleSubmit }) => {
				return (
					<form onSubmit={handleSubmit} className='h-full flex flex-col items-center gap-5 bg-[#F1F4F6]'>
						{SelectedStep && <SelectedStep isRequestPending={isRequestPending} formState={formState} />}
					</form>
				)
			}}
		</Formik>
	)
}
