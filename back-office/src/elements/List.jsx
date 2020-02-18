import React, {useState, useCallback, useContext, useEffect} from 'react';
import styled from 'styled-components';
import {range, inRange} from 'lodash';

import SectorContext from '../context/SectorContext';

import API from '../utils/API';

import ListHead from '../molecules/ListHead';
import Table from '../molecules/Table';
import NotifBanner from './NotifBanner';
import ListItem from '../molecules/ListItem';

const List = styled.section`
	/* position: relative; */
	width: 100%;
	height: 100%;
	margin: 0 0 0 15px;
	background: ${({theme: {variables}}) => variables.white};
	border-radius: 8px;
	overflow: hidden;

	ol {
		position: relative;
	}
`;

const MAX = 5;
const HEIGHT = 80;

export default () => {
	const {currentSector} = useContext(SectorContext);

	const items = range(MAX);
	const [state, setState] = useState({
		order: items,
		dragOrder: items, // items order while dragging
		draggedIndex: null
	});

	const [loading, setLoading] = useState(true);

	const [list, setList] = useState(null);

	const handleDrag = useCallback(
		({translation, id}) => {
			const delta = Math.round(translation.y / HEIGHT);
			const index = state.order.indexOf(id);
			const dragOrder = state.order.filter(index => index !== id);

			if (!inRange(index + delta, 0, items.length)) {
				return;
			}

			dragOrder.splice(index + delta, 0, id);

			setState(state => ({
				...state,
				draggedIndex: id,
				dragOrder
			}));
		},
		[state.order, items.length]
	);

	useEffect(
		_ => {
			(async function getList() {
				const response = await API.getList(currentSector);
				setLoading(false);
				const {hotels} = response.data.data;
				setList(hotels);
			})();
		},
		[currentSector]
	);

	const handleDragEnd = useCallback(() => {
		setState(state => ({
			...state,
			order: state.dragOrder,
			draggedIndex: null
		}));
	}, []);

	if (loading || !list) {
		return <p>Loading...</p>;
	}

	return (
		<List>
			<ListHead />
			<ol>
				{list.map((item, index) => {
					const isDragging = state.draggedIndex === index;
					const top = state.dragOrder.indexOf(index) * (HEIGHT + 10);
					const draggedTop = state.order.indexOf(index) * (HEIGHT + 10);

					return (
						<ListItem
							key={index}
							id={index}
							onDrag={handleDrag}
							onDragEnd={handleDragEnd}
							isDragging={isDragging}
							top={isDragging ? draggedTop : top}
							data={item}
						>
							{index}
						</ListItem>
					);
				})}
			</ol>
			{/* <NotifBanner /> */}
		</List>
	);
};
