import React, {useRef} from 'react'
import styled from 'styled-components'
import API from './../utils/API'
import SecondaryText from '../atoms/SecondaryText'
import PrimaryText from '../atoms/PrimaryText'
import Logo from '../atoms/Logo'
import Input from '../atoms/Input'
import Button from '../molecules/Button'
import data from '../data/formData'
import Link from '../atoms/Link'

const LoginPage = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background: ${({theme: {variables}}) => variables.grey};
	.loginContain {
		padding: 55px 40px;
		background-color: white;
		width: 458px;
		border-radius: 16px;
		color: ${({theme: {variables}}) => variables.black} !important;
	}
	.loginConnexion {
		margin-bottom: 21px;
		text-align: center;
		.loginConnexionText {
			margin-bottom: 6px;
		}
	}
	.loginInputs {
		.loginInput {
			&:last-child {
				margin-top: 21px;
			}
		}
		.loginInputsText {
			margin-bottom: 8px;
		}
	}
	.loginButton {
		margin-top: 21px;
	}
`

const inputData = {
	...data.input.login
}

export default ({onAuth}) => {
	let form = useRef(null)
	const handleSubmit = async event => {
		event.persist()
		event.preventDefault()
		setTimeout(() => {
			onAuth()
			localStorage.setItem('isAuth', true)
		}, 500)
	}
	return (
		<LoginPage>
			<div className="loginContain">
				<div className="loginConnexion">
					<Logo />
				</div>
				<form ref={el => (form = el)} onSubmit={handleSubmit}>
					<div className="loginInputs">
						{Object.keys(inputData).map(i => {
							var inputInfos = inputData[i]

							return (
								<div className="loginInput" key={i}>
									<div className="loginInputsText">
										<PrimaryText
											text={inputInfos.text}
											textColor="#241F1F"
											fontWeight="500"
										/>
									</div>
									<Input
										data={{
											name: inputInfos.name,
											type: inputInfos.type,
											placeholder: inputInfos.placeholder
										}}
									/>
								</div>
							)
						})}
					</div>
					<div className="loginButton">
						<Button
							onClick={handleSubmit}
							btnType="submit"
							width="100"
							textColor="white"
							fontWeight="500"
							text="Se connecter"
							textColor="white"
							backgroundColor="#006CB1"
						></Button>
					</div>
				</form>
			</div>
		</LoginPage>
	)
}
