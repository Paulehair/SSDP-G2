import React, {useState, useContext, useEffect} from 'react'
import styled from 'styled-components'
import SectorContext from './../context/SectorContext'
import TableHead from '../molecules/TableHead'
import Table from '../molecules/Table'
import API from './../utils/API'

const Planning = styled.section`
	position: relative;
	width: 100%;
	height: 100%;
	margin: 0 0 0 15px;
	background: ${({theme: {variables}}) => variables.white};
	border-radius: 8px;
	overflow: hidden;
`

export default () => {
	const [planning, setPlanning] = useState(null)
	const [loading, setLoading] = useState(true)
	const {currentSector} = useContext(SectorContext)

	useEffect(
		_ => {
			setLoading(true)
			;(async function getPlanning() {
				const planningResponse = await API.getPlanning(currentSector)
				setPlanning(planningResponse.data.planning)
				setLoading(false)
			})()
		},
		[currentSector]
	)

	return (
		<Planning>
			<TableHead />
			{loading ? <p>loading...</p> : <Table planning={planning} />}
		</Planning>
	)
}
