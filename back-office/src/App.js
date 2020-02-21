import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import SectorContext from './context/SectorContext'
import Loader from './atoms/Loader'
import Login from './views/Login'
import './App.css'
import './index.css'
import API from './utils/API'
import Home from './views/Home'
import Header from './elements/Header'
import List from './elements/List'

const App = styled.main`
	width: 100%;
	margin: 0 auto;
	position: relative;
	background-color: ${({theme: {variables}}) => variables.grey};
	.wrapper {
		display: flex;
		justify-content: center;
		max-width: 1400px;
		margin: 0 auto;
		width: 100%;
		padding: 20px;

		/* -64px = hauteur du header */
		&.--main {
			/* height: calc(100vh - 64px); */
			padding: 0;
		}

		&.--button {
			display: none;
		}
	}
`

export default () => {
	const [loading, setLoading] = useState(true)
	const [isAuth, setIsAuth] = useState(false)
	const [currentSector, setCurrentSector] = useState(null)
	let sectors = useRef(null)

	useEffect(_ => {
		setLoading(true)
		;(async function getSectors() {
			const sectorResponse = await API.getSectors()
			const zones = sectorResponse.data.sectors
			sectors.current = zones
			setCurrentSector(zones[0]._id)
			setLoading(false)
		})()
	}, [])

	const handleLogin = () => {
		setIsAuth(true)
	}

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

	// const download = () => {
	// 	let current = localStorage.getItem('current')
	// 	window.open(
	// 		`http://localhost:9000/api/exportPlanning/${current.replace('/', '')}`
	// 	)
	// }

	if (loading) {
		return <Loader />
	}

	return (
		<SectorContext.Provider value={context}>
			<Router>
				{!isAuth && !localStorage.getItem('isAuth') ? (
					<Login onAuth={handleLogin} />
				) : (
					<div>
						<Header />
						<App>
							<div className="wrapper --main">
								<Route
									exact
									path="/"
									render={props => <Home sectors={sectors.current} />}
								/>
								<Route path="/employees" component={List} />
								<Route path="/hotels" component={List} />
							</div>
						</App>
					</div>
				)}
			</Router>
		</SectorContext.Provider>
	)
}
