export type UseSurveysStoreState = {
	surveys: Record<string, unknown>[]
	pushSurvey: (argument: UseSurveysStoreState['surveys'][0]) => void
	popSurvey: () => void
	clearSurveys: () => void
}
