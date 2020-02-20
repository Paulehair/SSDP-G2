import React from 'react'

import ModalBody from '../../molecules/ModalBody.jsx'
import ModalHead from '../../molecules/ModalHead.jsx'
import Modal from '../../elements/Modal.jsx'

export default {
	title: 'Modal'
}

const modalBodyData = {
	data: [
		{
			name: 'firstName',
			type: 'text',
			value: '',
			required: true,
			placeholder: 'Prénom'
		},
		{
			name: 'lastName',
			type: 'text',
			value: '',
			required: true,
			placeholder: 'Nom'
		},
		{
			name: 'address',
			type: 'text',
			value: '',
			required: true,
			placeholder: 'Adresse'
		},
		{
			name: 'email',
			type: 'email',
			value: '',
			required: true,
			placeholder: 'Adresse email'
		},
		{
			name: 'sector',
			type: 'select',
			value: '',
			required: true,
			options: [('75', '92-94', '93')]
		}
	]
}

const modalHeadBody = {
	title: 'title'
}

export const ModalBodyStory = () => {
	return <ModalBody {...modalBodyData} />
}

export const ModalFormStory = () => {
	return <Modal data={modalBodyData.data}></Modal>
}
export const ModalStory = () => {
	return (
		<Modal type="form" {...modalHeadBody} data={modalBodyData.data}></Modal>
	)
}

export const ModalHeadStory = () => {
	return (
		<div style={{backgroundColor: '#006CB1', color: 'white'}}>
			<ModalHead {...modalHeadBody} />
		</div>
	)
}
