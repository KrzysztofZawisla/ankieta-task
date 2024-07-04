export type SurveyData = {
	firstName: string
	lastName: string
	email: string
	dietExp: string
	priorityGoals: string[]
	workoutsPlace: string
}

const validateUserData = (data: SurveyData): boolean => {
	const { firstName, lastName, email, dietExp, priorityGoals, workoutsPlace } = data

	// Simple validation
	if (
		!firstName ||
		!lastName ||
		!email.includes('@') ||
		!email.includes('.') ||
		email.length < 5 ||
		email.includes(' ')
	) {
		return false
	}

	if (!dietExp || priorityGoals.length < 2 || !workoutsPlace) {
		return false
	}

	return true
}

export const mockApi = (data: SurveyData): Promise<string> => {
	return new Promise((resolve, reject) => {
		if (validateUserData(data)) {
			setTimeout(() => {
				const successOrFail = Math.random() > 0.5 ? 'success' : 'error'

				if (successOrFail === 'error') {
					reject('error')
				}

				resolve('success')
			}, 1500)
		} else {
			setTimeout(() => reject('error'), 1000)
		}
	})
}
