import React from 'react'
import {action} from '@storybook/addon-actions'

import Card from './../../elements/Card'
import Column from '../../molecules/Column.jsx'

export default {
	title: 'Column',
	excludeStories: /.*Data$/
}

const columnData = {
	visits: {}
}

export const ColumnStory = () => {
	return (
		<Column>
			{columnData.visits !== null &&
				columnData.visits.map((visit, i) => <Card key={i} visit={visit} />)}
		</Column>
	)
}
