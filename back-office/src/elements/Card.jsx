import React from 'react'
import styled from 'styled-components'
import Icon from '../atoms/Icon'
import Details from './../molecules/Details'

import {backgroundColor} from './../data/theme'

const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: ${backgroundColor};
	border-radius: 8px;
	margin: 8px 0 0 0;
	padding-bottom: 10px;
	color: #fff;

	:first-child {
		margin: 15px 0 0 0;
	}

	:last-child {
		margin: 8px 0;
	}

	div.inner_ctn {
		padding: 16px 10px 10px 16px;
	}

	p {
		font-size: 14px;
		opacity: 1;
		&:not(:last-child) {
			margin-bottom: 5px;
		}
		&.team {
			text-align: right;
		}
	}

	i {
		font-size: 18px;
		color: #fff;
		position: absolute;
		cursor: pointer;
		top: 15px;
		right: 10px;
	}
`

export default props => {
	const minToHours = num => {
		var hours = Math.floor(num / 60)
		var minutes = num % 60
		if (hours === 0) {
			return minutes + ' minutes'
		}
		return hours + 'h' + minutes
	}

	const dontDelete = e => {
		// console.log(e)
		e.stopPropagation()
	}

	return (
		<Card key={props._id} onClick={() => props.onDelete()}>
			<div className="inner_ctn" onClick={dontDelete}>
				<Details
					hotel={props.hotel_name}
					anomaly={`Note actuelle : ${props.anomaly}`}
					rooms={`${props.rooms} chambres`}
					hour={`Durée estimée : ${minToHours(props.duration)}`}
				/>
				<br />
				{props.team.map((el, i) => (
					<p className="team" key={i}>
						{el.firstName} {el.lastName}
					</p>
				))}
			</div>

			<Icon
				iconColor={({theme: {variables}}) => variables.white}
				size={20}
				type={`trash`}
			/>
		</Card>
	)
}
