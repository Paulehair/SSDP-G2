import React from 'react';
import styled from 'styled-components';
import Calendar from './../molecules/Calendar';
import Search from './../molecules/Search';
import Area from './../molecules/Area';

const Sidebar = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 28%;
	max-width: 300px;
	padding: 24px;
	border-radius: 8px;
	background-color: ${({theme: {variables}}) => variables.white};
	overflow-y: scroll;
`;

export default ({sectors}) => (
	<Sidebar>
		<Calendar />
		<Search />
		<Area sectors={sectors} />
	</Sidebar>
);
