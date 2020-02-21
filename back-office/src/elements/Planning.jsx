import React, {useState, useContext, useEffect} from 'react'
import styled from 'styled-components'
import Loader from './../atoms/Loader'
import SectorContext from './../context/SectorContext'
import Board from 'react-trello'
import TableHead from '../molecules/TableHead'
import Card from '../elements/Card'

// import NotifBanner from './NotifBanner'
import API from './../utils/API'

const Planning = styled.section`
	position: relative;
	width: 100%;
	height: 100vh;
	margin: 0;
	background: ${({theme: {variables}}) => variables.white};
	border-radius: 8px;
	margin: 15px;
	overflow: hidden;

	.react-trello-board {
		width: 100%;
		height: 90vh;
		margin: 0 auto;
		overflow-y: scroll;
		padding: 0;

		> div {
			display: flex;
			justify-content: center;
			width: 100%;
			height: 100%;

			.smooth-dnd-container.horizontal {
				margin: 0 auto;
				width: 100%;
				height: 100%;
				display: grid;
				grid-template-rows: auto;
				grid-template-columns: repeat(5, 1fr);

				.react-trello-lane {
					padding: 0;
					margin: 0;
					background: ${({theme: {variables}}) => variables.white};
					border-right: 1px solid ${({theme: {variables}}) => variables.grey};

					&:last-child {
						border-right: none;
					}

					.sc-fzXfLV.gzqtHV {
						min-width: 196px;
					}

					.smooth-dnd-container.vertical {
						height: 100%;
					}
				}
			}
		}
	}
`

export default () => {
	// const [planning, setPlanning] = useState(null)
	const [planningId, setPlanningId] = useState(null)
	const [draggablePlanning, setDraggablePlanning] = useState(null)
	const [loading, setLoading] = useState(true)
	const {currentSector} = useContext(SectorContext)

	useEffect(
		_ => {
			setLoading(true)
			;(async function getPlanning() {
				const planningResponse = await API.getPlanning(currentSector)
				setPlanningId(planningResponse.data.planning.planning_id)
				const planningFormatted = format(planningResponse.data.planning)
				setDraggablePlanning(planningFormatted)
				setLoading(false)
			})()
		},
		[currentSector]
	)

	const format = array => {
		const planningFormatted = {
			lanes: []
		}
		array.lanes.forEach((lane, i) => {
			let newLane = {}
			newLane.id = `lane${i}`
			newLane.cards = lane
			newLane.cards.forEach(card => {
				card.id = card.visit_id
			})
			planningFormatted.lanes.push(newLane)
		})
		return planningFormatted
	}

	const boardStyle = {
		backgroundColor: '#FFFFFF'
	}

	const onDataChange = async lanes => {
		await API.updatePlanning(planningId, lanes)
	}

	const onCardDelete = id => {
		// log l'id de la carte supprimée
		console.log(id)
	}

	return (
		<Planning>
			<TableHead />
			{loading ? (
				<Loader />
			) : (
				<Board
					style={boardStyle}
					components={{
						Card: Card
					}}
					laneDraggable={false}
					onDataChange={onDataChange}
					onCardDelete={onCardDelete}
					data={draggablePlanning}
				/>
			)}
		</Planning>
	)
}
