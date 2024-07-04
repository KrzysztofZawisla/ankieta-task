import { useCallback } from 'react'
import type { HorizontalSelectProperties } from './horizontal-select.types'
import { cn } from '~frontend/src/lib/utils'
import horizontalSelectItem from './horizontal-select.styles'
import { useTranslation } from 'react-i18next'

const HorizontalSelect = ({
	options,
	header,
	multiselect,
	description,
	value,
	onChange,
	name,
}: HorizontalSelectProperties) => {
	const { t: translate } = useTranslation()
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
		<div className='w-full py-[14px]'>
			<p className='mb-[16px] text-center font-medium text-[20px] leading-[24px]'>{header}</p>
			<p className='font-medium text-[15px] leading-[18.75px]'>{description}</p>
			{multiselect && (
				<span className='font-light text-[14px] leading-[17.5px]'>
					{translate('horizontal-select.multiselect.label')}
				</span>
			)}
			<div className='flex mt-[16px] gap-[10px] overflow-x-auto scrollbar-hide'>
				{options.map((option) => {
					const isActive = Array.isArray(value) ? value.includes(option) : option === value
					return (
						<div
							onClick={() => {
								onOptionClick(option)
							}}
							className={cn(
								horizontalSelectItem({
									variant: isActive ? 'active' : 'default',
								}),
							)}
							key={option}
						>
							{option}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default HorizontalSelect
