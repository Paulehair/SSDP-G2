import React, {useState, useContext, useEffect} from 'react'
import styled from 'styled-components'
import SectorContext from './../context/SectorContext'
import Board from 'react-trello'
import TableHead from '../molecules/TableHead'
import Card from '../elements/Card'
// import NotifBanner from './NotifBanner'
import API from './../utils/API'

const Planning = styled.section`
	position: relative;
	width: 100%;
	height: 100%;
	margin: 0 0 0 15px;
	background: ${({theme: {variables}}) => variables.white};
	border-radius: 8px;
	/* overflow: hidden; */

	.react-trello-board {
		display: flex;
		height: 100%;

		> div {
			height: 100%;

			.smooth-dnd-container.horizontal {
				max-width: 1115px;
				width: 100%;
				height: 100%;
				display: grid;
				grid-template-rows: 1fr;
				grid-template-columns: repeat(5, 1fr);

				.react-trello-lane {
					height: 100%;
					max-width: 222px;
					background: ${({theme: {variables}}) => variables.white};
					border-right: 1px solid ${({theme: {variables}}) => variables.grey};

					&:last-child {
						border-right: none;
					}
				}
			}
		}
	}
`

export default () => {
	const [planning, setPlanning] = useState(null)
	const [draggablePlanning, setDraggablePlanning] = useState(null)
	const [loading, setLoading] = useState(true)
	const {currentSector} = useContext(SectorContext)

	useEffect(
		_ => {
			setLoading(true)
			;(async function getPlanning() {
				const planningResponse = await API.getPlanning(currentSector)
				const formattedPlanning = format(planningResponse.data.planning)
				setPlanning(planningResponse.data.planning)
				setDraggablePlanning(formattedPlanning)
				setLoading(false)
			})()
		},
		[currentSector]
	)

	const format = array => {
		const newPlanning = {
			lanes: []
		}

		array.forEach((el, i) => {
			el.forEach((card, i) => {
				card.id = card._id
			})
			let lane = {
				id: `lane${i + 1}`,
				cards: el
			}
			newPlanning.lanes.push(lane)
		})

		newPlanning.lanes.push({
			id: 'lane5',
			cards: []
		})

		return newPlanning
	}

	const boardStyle = {
		backgroundColor: '#FFFFFF'
	}

	return (
		<Planning>
			<TableHead />
			{loading ? (
				<p>loading...</p>
			) : (
				<Board
					style={boardStyle}
					components={{Card: Card}}
					laneDraggable={false}
					data={draggablePlanning}
				/>
			)}
			{/* <NotifBanner /> */}
		</Planning>
	)
}
