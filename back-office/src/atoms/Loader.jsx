import React from 'react'
import styled from 'styled-components'

const Loader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: auto;
	height: 100vh;
	.ball {
		width: 30px;
		height: 30px;
		border-radius: 15px;
		background: white;
		opacity: 0.3;
	}
	.a {
		margin-right: 10px;
		animation: ball-a 0.7s ease-out 0s infinite alternate;
		/*animation-tutorial: name duration ease delay iterate-count direction*/
	}
	.b {
		margin-right: 10px;
		animation: ball-b 0.7s ease-out 0.2s infinite alternate;
	}
	.c {
		animation: ball-c 0.7s ease-out 0.4s infinite alternate;
	}
	/*ANIMATION STORAGE*/
	@keyframes ball-a {
		from {
			height: 20px;
			opacity: 0.3;
			background: white;
		}
		to {
			height: 70px;
			opacity: 1;
			background: ${({theme: {variables}}) => variables.blue};
		}
	}
	@keyframes ball-b {
		from {
			height: 20px;
			opacity: 0.3;
			background: white;
		}
		to {
			height: 65px;
			opacity: 1;
			background: ${({theme: {variables}}) => variables.blue};
		}
	}
	@keyframes ball-c {
		from {
			height: 20px;
			opacity: 0.3;
			background: white;
		}
		to {
			height: 60px;
			opacity: 1;
			background: ${({theme: {variables}}) => variables.blue};
		}
	}
`

export default () => (
	<Loader>
		<div className="ball a"></div>
		<div className="ball b"></div>
		<div className="ball c"></div>
	</Loader>
)
