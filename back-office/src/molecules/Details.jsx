import React from 'react'
import styled from 'styled-components'
import SecondaryText from './../atoms/SecondaryText'
import Text from './../atoms/Text'

const Div = styled.div`
	p:not(:last-child) {
		margin-bottom: 10px;
	}
	p:first-child {
		font-weight: bold;
	}
`

export default ({hotel, rooms, hour, anomaly}) => (
	<Div>
		<SecondaryText black={false} text={hotel} />
		<Text text={anomaly} />
		<Text text={rooms} />
		<Text text={hour} />
	</Div>
)
