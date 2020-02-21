import React from 'react'

import Card from '../../elements/Card'

export default {
	title: 'Card',
	excludeStories: /.*Data$/
}

const cardData = {
	name: 'Santana',
	address: '109 rue Legendre',
	zipCode: 75017,
	city: 'PARIS',
	status: '0',
	rooms: 18,
	lastVisit: '2019-04-18T22:00:00.000Z',
	anomaly: 45.46,
	initials: ['JS', 'JS', 'VS', 'MS', 'SS', 'CS']
}

export const CardStory = () => {
	return (
		<div style={{width: 250}}>
			<Card {...cardData} />
		</div>
	)
}
