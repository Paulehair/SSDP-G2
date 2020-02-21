import React from 'react'
import Sectors from './../molecules/Sectors'
import Planning from './../elements/Planning'
import Sidebar from './../elements/Sidebar'

export default ({sectors}) => {
	return (
		<div className="home">
			<Sectors sectors={sectors} />
			<div className="wrapper --main">
				{/* <Sidebar sectors={sectors} /> */}
				<Planning />
			</div>
		</div>
	)
}
