import React, {Fragment} from 'react'
import styled from 'styled-components'
import labels from './../data/list'
import SecondaryText from '../atoms/SecondaryText'
import Modal from '../elements/Modal'
import useToggle from '../helpers/useToggle'

const ListItem = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	letter-spacing: 0.02rem;
	padding: 0px 20px;
	font-size: 16px;
	border-bottom: solid 1px rgba(0, 0, 0, 0.2);
	&:before {
		content: '';
		position: absolute;
		left: 0;
		width: 5px;
		height: 100%;
		opacity: 0;
		background: ${({theme: {variables}}) => variables.blue};
		transition: ease 0.1s opacity;
	}
	&:hover {
		cursor: pointer;
		&:before {
			opacity: 1;
		}
	}
	.name {
		font-weight: bold;
		color: ${({theme: {variables}}) => variables.blue};
	}
	.sector {
		p {
			display: inline;
			font-weight: bold;
			padding: 5px;
			box-sizing: border-box;
			border-radius: 2px;
			color: ${({theme: {variables}}) => variables.white};
			background: ${({theme: {variables}}) => variables.blue};
			opacity: 0.6;
		}
	}
	.actions {
		display: flex;
		justify-content: flex-end;
	}
	button {
		background: ${({theme: {variables}}) => variables.blue};
		p {
			margin: 0;
			color: ${({theme: {variables}}) => variables.white};
		}
	}
`

export default ({data, type, onClick}) => {
	const [open, toggle] = useToggle(false)

	return (
		<ListItem>
			{Array.from(Object.keys(data)).map((key, i) => {
				if (labels[type][key]) {
					return (
						<Fragment key={i}>
							<div onClick={toggle} className={`cell ${key}`}>
								<SecondaryText text={data[key]} />
							</div>
							{open && <Modal data={data} title="Hôtel" toggle={toggle} />}
						</Fragment>
					)
				}
			})}
			<div className="cell"></div>

			{/* <div className="cell name">
			<SecondaryText text={`${data.firstName} ${data.lastName}`} />
		</div>
		<div className="cell sector">
			<SecondaryText text={data.sector} />
		</div>
		<div className="cell phone">
			<SecondaryText text={`${data.phone || '0600000000'}`} />
		</div>
		<div className="cell">
			<SecondaryText text={data.email} />
		</div>
		<div className="cell actions">
			<Icon size="24" type="caltimes" />
			<Icon size="24" iconColor="#D80000" type="trash" />
			<Button data-id={data._id} onClick={onClick} text="Détails" />
		</div>
		<div className="cardInfo">
			<div className="cardName">
				{data.firstName} {data.lastName}
			</div>
			<SecondaryText black="black" text={`Secteur du ${data.sector}`} />
		</div>
		<div className="">
			<Icon size="24" type="caltimes" />
			<Icon size="24" iconColor="#D80000" type="trash" />
		</div> */}
		</ListItem>
	)
}
