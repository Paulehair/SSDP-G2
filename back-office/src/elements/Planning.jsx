import React, {useState, useContext, useEffect} from 'react'
import styled from 'styled-components'
import SectorContext from './../context/SectorContext'
import Board, {onCardClick, onDataChange} from 'react-trello'
import TableHead from '../molecules/TableHead'
import Card from '../elements/Card'
import useToggle from '../helpers/useToggle'

// import NotifBanner from './NotifBanner'
import API from './../utils/API'

const Planning = styled.section`
	position: relative;
	width: 100%;
	height: 100%;
	margin: 0;
	background: ${({theme: {variables}}) => variables.white};
	border-radius: 8px;
	margin: 15px;
	overflow: hidden;

	.react-trello-board {
		width: 100%;
		height: 90vh;
		/* max-width: 1115px; */
		margin: 0 auto;
		overflow-y: scroll;
		padding: 0;

		> div {
			display: flex;
			justify-content: center;
			width: 100%;
			height: 100%;

			.smooth-dnd-container.horizontal {
				/* max-width: 1115px; */
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
	const [planning, setPlanning] = useState(null)
	const [draggablePlanning, setDraggablePlanning] = useState(null)
	const [loading, setLoading] = useState(true)
	const [open, toggle] = useToggle(false)
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
				card.initials = []
				card.team.forEach(el => {
					let initials = `${el.firstName[0]}${el.lastName[0]}`
					card.initials.push(initials)
				})
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
	const handleChange = () => {
		console.log('changing')
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
					onDataChange={handleChange}
					onCardClick={onCardClick}
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
