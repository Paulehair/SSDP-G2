import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Button from '../molecules/Button';
import EmployeCard from '../molecules/EmployeCard';
import Input from '../atoms/Input';
import API from './../utils/API';

const EmployeList = styled.section`
	padding: 72px 120px;
	width: 100%;
	.title {
		font-size: 32px;
		color: #000000;
	}
	.employeHeader {
		display: flex;
		justify-content: space-between;
		margin-bottom: 30px;
	}
	.employeList {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 40px;
		grid-row-gap: 25px;
	}
`;
export default () => {
	const [employees, setEmployees] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(_ => {
		(async function getEmployees() {
			const response = await API.getEmployees();
			setEmployees(response.data.employees);
			setLoading(false);
		})();
	}, []);

	if (loading) {
		return <p>loading</p>;
	}

	return (
		<EmployeList>
			<div className="employeHeader">
				<div className="title">Liste des employés</div>
				<Button textColor="white" fontWeight="500" text="Ajouter un employé" />
			</div>
			{/* <Input searchIcon={true} placeholder='Rechercher nom / prénom...' type='text' /> */}
			<div className="employeList">
				{employees.map((employee, i) => (
					<EmployeCard data={employee} />
				))}
			</div>
		</EmployeList>
	);
};
