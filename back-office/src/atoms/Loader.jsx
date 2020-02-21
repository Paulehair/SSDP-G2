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
	@keyframes ball-a {
		from {
			height: 20px;
			opacity: 0.3;
			background: white;
		}
		to {
			height: 70px;
			opacity: 1;
			background: #ffde00;
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
			background: #ed1c24;
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
			background: #044d70;
		}
	}
`

export default () => (
	<Loader>
		<div class="ball a"></div>
		<div class="ball b"></div>
		<div class="ball c"></div>
	</Loader>
)
