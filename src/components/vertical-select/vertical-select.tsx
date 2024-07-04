import { mdiCheckCircle } from '@mdi/js'
import Icon from '@mdi/react'
import { useCallback } from 'react'
import type { VerticalSelectProperties } from '~frontend/src/components/vertical-select/vertical-select.types'

const VerticalSelect = ({ options, multiselect, onChange, value, name }: VerticalSelectProperties) => {
	const onOptionClick = useCallback(
		(newValue: string) => {
			if (!multiselect && !Array.isArray(value)) {
				onChange(name, newValue)
				return
			}
			const alreadyIncludeValue = value.includes(newValue)
			if (alreadyIncludeValue) {
				const previousStateAsSet = new Set(value)
				previousStateAsSet.delete(newValue)
				onChange(name, [...previousStateAsSet])
				return
			}
			onChange(name, [...value, newValue])
		},
		[onChange, multiselect, value, name],
	)
	return (
		<div>
			<p className='mb-[30px] font-medium text-[20px] text-center leading-[24px]'>
				Jakie jest Twoje doświadczenie z dietą i liczeniem kalorii?
			</p>
			{(!multiselect || (typeof multiselect === 'number' && multiselect <= 1)) && (
				<p className='text-[14px] font-light leading-[17.5px] text-center mb-[10px]'>Wybierz jedną z opcji</p>
			)}
			<div className='flex flex-col gap-[10px] w-full'>
				{options.map((option) => {
					const isActive = Array.isArray(value) ? value.includes(option) : option === value
					return (
						<div
							onClick={() => {
								onOptionClick(option)
							}}
							className='rounded-[12px] py-[10px] px-[20px] w-full flex justify-between	bg-white'
							style={{
								border: isActive ? '2px solid #f76d93' : '2px solid #fff',
							}}
							key={option}
						>
							{option}
							{isActive && (
								<Icon
									style={{
										color: '#f76d93',
									}}
									path={mdiCheckCircle}
									size={1}
								/>
							)}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default VerticalSelect
