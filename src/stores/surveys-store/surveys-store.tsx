import { create, type StoreApi, type UseBoundStore } from 'zustand'
import type { UseSurveysStoreState } from './surveys-store.types'

const useSurveysStore: UseBoundStore<StoreApi<UseSurveysStoreState>> = create<UseSurveysStoreState>((set) => {
	return {
		surveys: [],
		pushSurvey: (survey) => {
			set(({ surveys }) => {
				return { surveys: [...surveys, survey] }
			})
		},
		popSurvey: () => {
			set(({ surveys }) => {
				const newSurveys = [...surveys]
				newSurveys.pop()
				return { surveys: newSurveys }
			})
		},
		clearSurveys: () => {
			set({ surveys: [] })
		},
	}
})

export default useSurveysStore
