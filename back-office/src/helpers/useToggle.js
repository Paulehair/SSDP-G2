import {useState} from 'react'

const useToggle = initial => {
	const [open, setOpen] = useState(initial)
	return [open, () => setOpen(status => !status)]
}

export default useToggle
