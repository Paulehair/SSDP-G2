import React from 'react'
import styled from 'styled-components'
import Input from './../atoms/Input'
import Button from './../atoms/Button'
import Select from './../atoms/Select'
import Text from '../atoms/Text'
// import Team from '../molecules/Team'
import SecondaryText from '../atoms/SecondaryText'
import labels from '../data/labels'

const ModalBody = styled.div`
	width: 100%;
	height: 100%;
	/* display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 80px);

	p {
		margin: 0 0 10px 0;
	}

	h4 {
		font-weight: bold;
	}

	.team {
		grid-row: 1 / span 2;
	}

	.sector {
		grid-row: 1;
		grid-column: 2;
	}

	.rate {
		grid-row: 1;
		grid-column: 3;
	}

	.hour {
		grid-row: 2;
		grid-column: 2;
	}

	.rooms {
		grid-row: 2;
		grid-column: 3;
	} */
`

export default ({data, type}) => {
	//TODO: filter les labels requis

	if (type === 'form') {
		return (
			<ModalBody>
				{data.map(el => {
					if (el.type === 'select') {
						return <Select options={el.options} />
					} else {
						return <Input data={el} />
					}
				})}
				<Button />
			</ModalBody>
		)
	}
	return (
		<ModalBody>
			{Array.from(Object.keys(data)).map((key, i) => {
				if (labels[key]) {
					return (
						<div key={i}>
							<Text text={labels[key]} />
							<SecondaryText text={data[key]} />
						</div>
					)
				}
			})}
		</ModalBody>
	)
}
