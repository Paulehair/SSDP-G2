import React from 'react'
import Area from '../../molecules/Area'
import {action} from '@storybook/addon-actions'
import data from '../../data/inputData'

export default {
	component: Area,
	title: 'Area',
	excludeStories: /.*Data$/
}

export const actionsData = {
	onChange: action('onChange')
}
export const areaData = {
	...data.zone,
	zones: [
		{
			code: 'Paris',
			active: true
		},
		{
			code: '92/94',
			active: false
		}
	],
	onChange: actionsData.onChange,
	placeholder: 'test place',
	value: 'lol'
}

export const AreaStory = () => {
	return <Area {...areaData} />
}
