import React from 'react'
import styled from 'styled-components'
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
	.loginContain {
		padding: 55px 40px;
		background-color: white;
		width: 458px;
		border-radius: 16px;
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

export default () => {
	return (
		<LoginPage>
			<div className="loginContain">
				<div className="loginConnexion">
					<div className="loginConnexionText">
						<PrimaryText
							text="connectez-vous au"
							textColor="#231f1fbf"
							fontWeight="500"
						/>
					</div>
					<Logo />
				</div>
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
				<Link blue={true}>
					<SecondaryText text="Mot de passe oublié ?" black={false} />
				</Link>
				<div className="loginButton">
					<Button
						width="100"
						textColor="white"
						fontWeight="500"
						text="Se connecter"
						textColor="white"
						backgroundColor="#006CB1"
					></Button>
				</div>
			</div>
		</LoginPage>
	)
}
