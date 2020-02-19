import React, {useContext} from 'react'
import styled from 'styled-components'
import SectorContext from './../context/SectorContext'
import PrimaryText from './../atoms/PrimaryText'
import {backgroundColor} from './../data/theme'

const Sectors = styled.ul`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-bottom: 20px;
	margin-top: 30px;
	p {
		font-weight: bold;
	}
	li {
		font-size: 16px;
		font-weight: bold;
		padding: 10px;
		background-color: ${({theme: {variables}}) => variables.white};
		border-radius: 3px 5px;
		margin-left: 10px;
		opacity: 0.5;
		cursor: pointer;
		&.active {
			opacity: 1;
			background: ${backgroundColor};
			color: ${({theme: {variables}}) => variables.white};
			cursor: initial;
		}
	}
`

export default ({sectors}) => {
	const {currentSector, toggleSector} = useContext(SectorContext)

	const handleClick = event => {
		const id = event.target.dataset.zone
		toggleSector(id)
	}

	return (
		<Sectors>
			<PrimaryText text="Sélectionnez un secteur : " />
			{sectors.map((sector, i) => (
				<li
					onClick={handleClick}
					data-zone={sector._id}
					key={i}
					className={`${sector._id === currentSector && 'active'}`}
				>
					{sector.zone}
				</li>
			))}
		</Sectors>
	)
}
