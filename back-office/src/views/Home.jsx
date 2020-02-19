import React from 'react'
import Sectors from './../molecules/Sectors'
import Planning from './../elements/Planning'

export default ({sectors}) => {
	return (
		<div className="home">
			<Sectors sectors={sectors} />
			<Planning />
		</div>
	)
}