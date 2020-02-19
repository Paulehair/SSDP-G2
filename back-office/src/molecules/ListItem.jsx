import React, {useState, useCallback, useMemo, useEffect} from 'react'
import styled from 'styled-components'

import Text from '../atoms/Text'
import SecondaryText from '../atoms/SecondaryText'
import Icon from '../atoms/Icon'
import data from '../data/formData'

const HEIGHT = 80

const ListItem = styled.div.attrs(props => ({
	style: {
		transition: props.isDragging ? 'none' : 'all 500ms'
	}
}))`
	/* width: 300px; */
	user-select: none;
	height: ${HEIGHT}px;
	background: #fff;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
	position: absolute;
	top: ${({top}) => 100 + top}px;
	/* left: calc(50vw - 150px); */
	font-size: 20px;
	color: #777;

	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: 10% 30% 20% 1fr 1fr 1fr 1fr 1fr;
	grid-column-gap: 0;
	/* position: relative; */
	width: 100%;
	height: 100%;
	max-width: 1115px;
	/* max-height: 70px; */
	margin: 0 auto;
	border-bottom: 1px solid ${({theme: {variables}}) => variables.grey};
`
const POSITION = {x: 0, y: 0}

export default ({children, id, onDrag, onDragEnd, data}) => {
	const [state, setState] = useState({
		isDragging: false,
		origin: POSITION,
		translation: POSITION
	})

	const handleMouseDown = useCallback(({clientX, clientY}) => {
		setState(state => ({
			...state,
			isDragging: true,
			origin: {x: clientX, y: clientY}
		}))
	}, [])

	const handleMouseMove = useCallback(
		({clientX, clientY}) => {
			const translation = {
				x: clientX - state.origin.x,
				y: clientY - state.origin.y
			}

			setState(state => ({
				...state,
				translation
			}))

			onDrag({translation, id})
		},
		[state.origin, onDrag, id]
	)

	const handleMouseUp = useCallback(() => {
		setState(state => ({
			...state,
			isDragging: false
		}))

		onDragEnd()
	}, [onDragEnd])

	useEffect(() => {
		if (state.isDragging) {
			window.addEventListener('mousemove', handleMouseMove)
			window.addEventListener('mouseup', handleMouseUp)
		} else {
			window.removeEventListener('mousemove', handleMouseMove)
			window.removeEventListener('mouseup', handleMouseUp)

			setState(state => ({...state, translation: {x: 0, y: 0}}))
		}
	}, [state.isDragging, handleMouseMove, handleMouseUp])

	const styles = useMemo(
		() => ({
			cursor: state.isDragging ? '-webkit-grabbing' : '-webkit-grab',
			transform: `translate(${state.translation.x}px, ${state.translation.y}px)`,
			transition: state.isDragging ? 'none' : 'transform 500ms',
			zIndex: state.isDragging ? 2 : 1,
			position: state.isDragging ? 'absolute' : 'relative'
		}),
		[state.isDragging, state.translation]
	)

	return (
		<ListItem style={styles} onMouseDown={handleMouseDown}>
			<Icon
				iconColor={({theme: {variables}}) => variables.grey}
				size={20}
				type={`cancel`}
			/>
			<Text text={data.name} />
			<SecondaryText text={data.address} />
			<SecondaryText text={`${data.rooms} chambres`} />
			<SecondaryText text={data.lastVisit} />
			<Text day={'8'} month={'Juin'} />
			<Icon
				iconColor={({theme: {variables}}) => variables.grey}
				size={20}
				type={`cancel`}
			/>
			<Icon
				iconColor={({theme: {variables}}) => variables.grey}
				size={20}
				type={`cancel`}
			/>
		</ListItem>
	)
}
