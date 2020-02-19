import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import SectorContext from './context/SectorContext'
import './App.css'
import './index.css'
import API from './utils/API'
import Header from './elements/Header'
import Sidebar from './elements/Sidebar'
import Planning from './elements/Planning'
import EmployeeList from './elements/EmployeeList'
import List from './elements/List'
import LoginPage from './elements/LoginPage'

const App = styled.main`
	width: 100%;
	margin: 0 auto;
	position: relative;

	.wrapper {
		display: flex;
		justify-content: space-between;
		max-width: 1400px;
		margin: 0 auto;
		width: 100%;
		padding: 20px;

		/* -64px = hauteur du header */
		&.--main {
			height: calc(100vh - 64px);
		}

		&.--button {
			display: none;
		}
	}
`

export default () => {
	const [loading, setLoading] = useState(true)
	const [planning, setPlanning] = useState(null)
	const [currentSector, setCurrentSector] = useState(null)
	let sectors = useRef(null)

	useEffect(_ => {
		;(async function getPlanning() {
			const response = await API.getSectors()
			const zones = response.data.sectors
			sectors.current = zones
			setCurrentSector(zones[0]._id)
			setLoading(false)
		})()
	}, [])

	const toggleSector = id => {
		if (currentSector._id === id) {
			return
		}

		const newSector = sectors.current.find(sector => sector._id === id)
		setCurrentSector(newSector._id)
	}

	const context = React.useMemo(
		() => ({
			currentSector,
			toggleSector
		}),
		[currentSector]
	)

	const download = () => {
		let current = localStorage.getItem('current')
		window.open(
			`http://localhost:9000/api/exportPlanning/${current.replace('/', '')}`
		)
	}

	if (loading) {
		return <p>Loading...</p>
	}

	return (
		<SectorContext.Provider value={context}>
			<App>
				<LoginPage />
				{/* <Header />
				<div className="wrapper --main">
					{sectors.current && <Sidebar sectors={sectors.current} />}
					{planning && <Planning planning={planning} />}
					{list && <List list={list} />}
					<List />
				</div> */}
			</App>
			{/* <EmployeeList /> */}
		</SectorContext.Provider>
	)
}
