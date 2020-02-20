import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Binome from './../molecules/Binome'
import Details from './../molecules/Details'
import Modal from './../elements/Modal'
import useToggle from '../helpers/useToggle'

import {backgroundColor} from './../data/theme'

const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: ${backgroundColor};
	border-radius: 8px;
	padding: 16px 10px 10px 16px;
	margin: 8px 0 0 0;
	color: #fff;

	:first-child {
		margin: 15px 0 0 0;
	}

	:last-child {
		margin: 8px 0;
	}
`

export default props => {
	return (
		<Card key={props._id}>
			<Details
				hotel={props.name}
				rooms={`${props.rooms} chambres`}
				hour="10h30 - 13h"
			/>
			<Binome initials={props.initials} />
		</Card>
	)
}
