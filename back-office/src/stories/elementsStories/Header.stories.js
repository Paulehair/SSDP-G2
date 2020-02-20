import React from 'react'
import {action} from '@storybook/addon-actions'

import Header from '../../elements/Header.jsx'

export default {
	title: 'Header',
	excludeStories: /.*Data$/
}

const actionsData = {
	onClick: action('test onclick')
}

export const CardStory = () => {
	return <Header />
}
