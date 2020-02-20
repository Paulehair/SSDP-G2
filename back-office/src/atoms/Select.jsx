import React from 'react'
import styled from 'styled-components'

const Select = styled.select``

export default props => (
	<Select>
		{props.options.map((option, i) => (
			<option key={i} value={option.value}>
				{option.value}
			</option>
		))}
	</Select>
)
