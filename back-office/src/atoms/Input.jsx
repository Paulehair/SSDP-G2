import React from "react";
import styled from "styled-components";

const Input = styled.input`
	padding: 8px;
	font-size: 14px;
	align-items: center;
	letter-spacing: 0.15px;
	color: rgba(0, 0, 0, 0.5);
	opacity: 0.5;
	border: none;
	border-radius: 4px;
	position: ${({searchIcon}) => (searchIcon ? 'relative' : 'none')};
	&:focus {
		outline: none;
	}
	&[type='text'] {
		width: 100%;
		background: ${({searchIcon}) => (searchIcon ? 'white' : '#e8e8e8')};
		height: ${({searchIcon}) => (searchIcon ? '56px' : 'none')};
		border: ${({searchIcon}) =>
			searchIcon ? '1px solid rgb(217, 217, 217)' : 'none'};
		padding-left: ${({searchIcon}) => (searchIcon ? '43px' : 'none')};
	}
	&[type='textlight'] {
		width: 100%;
		height: ${({searchIcon}) => (searchIcon ? '56px' : 'none')};
		border: ${({searchIcon}) =>
			searchIcon ? '1px solid rgb(217, 217, 217)' : 'none'};
		padding-left: ${({searchIcon}) => (searchIcon ? '43px' : 'none')};
		border: 1px solid #e4e4e4;
	}
	&[type='radio'] {
		width: 18px;
		height: 18px;
		margin-right: 12px;
		background: ${({searchIcon}) => (searchIcon ? 'white' : '#e8e8e8')};
	}
	/* .inconSearch {
    position: absolute;
    margin-top: 9px;
    margin-left: 4px;
  } */
`;

export default ({
	data: {
		type,
		name,
		placeholder,
		value,
		searchIcon = null,
		checked = null,
		onChange
	}
}) => {
	if (type === 'radio') {
		return (
			<Input
				type={type}
				name={name}
				onChange={onChange}
				defaultChecked={checked}
				placeholder={placeholder}
				defaultValue={value}
			/>
		)
	}

	return (
		<Input
			name={name}
			onChange={onChange}
			searchIcon={searchIcon}
			placeholder={placeholder}
			type={type}
			defaultValue={value}
		/>
	)
}
