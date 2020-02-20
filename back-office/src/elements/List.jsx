import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import PrimaryText from '../atoms/PrimaryText'
import ListItem from '../molecules/ListItem'
// import Input from '../atoms/Input'
import Modal from './Modal'
import useToggle from '../helpers/useToggle'
import form from '../data/formData'
import API from '../utils/API'

const List = styled.section`
	width: 100%;
	color: ${({theme: {variables}}) => variables.black};
	.table {
		display: flex;
		font-size: 14px;
		font-weight: bold;
		padding: 0px 20px;
	}
	.container {
		margin-top: 10px;
		border-radius: 8px;
		background: ${({theme: {variables}}) => variables.white};
		overflow: hidden;
	}
	.cell {
		display: flex;
		align-items: center;
		flex: 2;
		height: 40px;
		&.sector,
		&.phone,
		&.capacity,
		&.anomaly,
		&.rooms {
			flex: 1;
		}
	}
`
export default props => {
	const [data, setData] = useState(null)
	const [type, setType] = useState(null)
	const [loading, setLoading] = useState(true)
	const [open, toggle] = useToggle(false)

	useEffect(_ => {
		;(async function getData() {
			setLoading(true)
			let response
			switch (props.location.pathname) {
				case '/employees':
					response = await API.getEmployees()
					const employeesCopy = response.data.employees.map(el => ({
						name: `${el.firstName} ${el.lastName}`,
						sector: el.sector,
						phone: '0600000000',
						...el
					}))
					setData(employeesCopy)
					setType('employees')
					break
				case '/hotels':
					response = await API.getHotels()
					setData(response.data.hotels)
					setType('hotels')
					break
			}
			setLoading(false)
		})()
	}, [])

	const setHead = () => {
		if (type === 'employees') {
			return (
				<div className="table">
					<div className="cell">
						<span>Nom</span>
					</div>
					<div className="cell sector">
						<span>Secteur</span>
					</div>
					<div className="cell phone">
						<span>Téléphone</span>
					</div>
					<div className="cell">
						<span>Email</span>
					</div>
					<div className="cell"></div>
				</div>
			)
		}
		return (
			<div className="table">
				<div className="cell">
					<span>Nom</span>
				</div>
				<div className="cell address">
					<span>Adresse</span>
				</div>
				<div className="cell capacity">
					<span>Capacité</span>
				</div>
				<div className="cell">
					<span>Dernière visite</span>
				</div>
				<div className="cell anomaly">
					<span>Note</span>
				</div>
				<div className="cell"></div>
			</div>
		)
	}

	if (loading) {
		return <p>loading</p>
	}

	return (
		<List>
			<div>
				{setHead()}
				<div className="container">
					{data.map((el, i) => (
						<ListItem key={i} type={type} data={el} onClick={toggle} />
					))}
				</div>
			</div>
			{/* <Input searchIcon={true} placeholder='Rechercher nom / prénom...' type='text' /> */}
			{open && (
				<Modal
					data={form.input.addEmployee}
					title="Ajouter un employé"
					type="form"
					toggle={toggle}
				/>
			)}
		</List>
	)
}
