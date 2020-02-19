import React from 'react'
import styled from 'styled-components'
import SecondaryText from './../atoms/SecondaryText'
import Button from './../atoms/Button'
import Text from './../atoms/Text'

const Div = styled.div`
	p:not(:last-child) {
		/* margin-bottom: 5px; */
	}
`

export default ({data}) => (
	<Div>
		<div className="type">
			<Text text={'Type'} />
			<Team team={data.type} />
		</div>
		<div className="name">
			<Text text={'Visiteur'} />
			<SecondaryText text={data.name} />
		</div>
		<div className="desc">
			<Text text={'Description'} />
			<SecondaryText text={data.desc} />
		</div>
		<Button text={'Accepter'} backgroundColor={'#EA554'} />
		<Button text={'Accepter'} backgroundColor={'#EA554'} />
	</Div>
)
