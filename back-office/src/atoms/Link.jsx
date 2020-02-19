import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
	padding: 8px;
	color: ${({blue, theme: {variables}}) =>
		blue ? variables.blue : variables.black};
	text-decoration: none;
`

export default ({href, children, blue}) => (
	<Link blue={blue ? blue : null}>{children}</Link>
)
