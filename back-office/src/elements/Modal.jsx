import React from 'react'
import styled from 'styled-components'
import ModalHead from '../molecules/ModalHead'
import ModalBody from '../molecules/ModalBody'
import {backgroundColor} from './../data/theme'

const Modal = styled.section`
	width: 100vw;
	height: 100vh;
	background: ${({theme: {variables}}) => variables.opBlack};
	position: fixed;
	top: 0;
	left: 0;
	z-index: 666;
	display: grid;

	> div {
		width: 100%;
		max-width: 720px;
		padding: 40px 32px;
		margin: 0 auto;
		justify-self: center;
		align-self: center;
		border-radius: 8px;
		background: ${backgroundColor};
		&.form {
			max-width: 400px;
			color: ${({theme: {variables}}) => variables.black};
			background: ${({theme: {variables}}) => variables.white};
		}
	}
`

export default ({toggle, data, type, title}) => {
	const dontClose = e => {
		e.stopPropagation()
	}

	return (
		<Modal onClick={toggle}>
			<div className={type} onClick={dontClose}>
				<ModalHead data={data} title={title} />
				<ModalBody data={data} type={type} />
			</div>
		</Modal>
	)
}
