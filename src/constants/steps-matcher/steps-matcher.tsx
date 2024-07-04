import { lazy } from 'react'

const FirstStep = lazy(() => {
	return Promise.resolve(import('../../components/steps/first-step/first-step'))
})

const SecondStep = lazy(() => {
	return Promise.resolve(import('../../components/steps/second-step/second-step'))
})

const ThirdStep = lazy(() => {
	return Promise.resolve(import('../../components/steps/third-step/third-step'))
})

const stepsMatcher: (typeof FirstStep | typeof SecondStep | typeof ThirdStep)[] = [FirstStep, SecondStep, ThirdStep]

export default stepsMatcher
