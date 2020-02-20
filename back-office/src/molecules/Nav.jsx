import React from 'react'
import styled from 'styled-components'
import {Link, withRouter} from 'react-router-dom'
import PrimaryText from '../atoms/PrimaryText'

const Nav = styled.ul`
	display: flex;
	flex: 1;
	justify-content: center;
	li {
		margin-right: 40px;
		padding: 8px 16px;
		border-radius: 8px;
		&.active {
			background: rgba(7, 100, 159, 0.1);
		}
		a {
			color: ${({theme: {variables}}) => variables.black};
			font-weight: 500;
		}
	}
`

export default withRouter(props => {
	const {
		nav: {list}
	} = props
	const path = props.location.pathname
	return (
		<Nav>
			{list.map((el, i) => (
				<li key={i} className={`${path === el.link ? 'active' : ''}`}>
					<Link to={`${el.link}`}>
						<PrimaryText text={el.name} />
					</Link>
				</li>
			))}
		</Nav>
	)
})
