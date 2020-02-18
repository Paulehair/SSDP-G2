import React, {useContext} from 'react';
import styled from 'styled-components';
import SectorContext from './../context/SectorContext';
import PrimaryText from './../atoms/PrimaryText';
import SecondaryText from './../atoms/SecondaryText';
import Input from './../atoms/Input';
import data from '../data/data';

const Area = styled.div`
	div {
		display: flex;
		align-items: center;
		margin-bottom: 5px;
	}
	.areaTitle {
		margin-bottom: 10px;
	}
`;

export default ({sectors}) => {
	const {currentSector, toggleSector} = useContext(SectorContext);

	const handleChange = event => {
		const id = event.target.value;
		console.log(id);
		toggleSector(id);
	};

	const inputData = {
		...data.input.zone,
		onChange: handleChange,
		placeholder: data.input.zone.name,
		value: data.input.zone.name
	};

	return (
		<Area>
			<div className="areaTitle">
				<PrimaryText text="Secteurs" />
			</div>
			{sectors.map((sector, i) => (
				<div key={i}>
					<Input
						data={{
							...inputData,
							value: sector._id,
							checked: currentSector === sector._id ? true : false
						}}
					/>
					<SecondaryText text={`Secteur du ${sector.zone}`} black={true} />
				</div>
			))}
		</Area>
	);
};
