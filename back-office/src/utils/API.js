import axios from 'axios'

const URL = {
	global: 'http://localhost:9000/api',
	params: {
		employees: 'employees',
		hotels: 'hotels',
		planning: 'planning',
		visits: 'visits',
		sectors: 'sectors'
	}
}
export default {
	getEmployees() {
		return axios.get(`${URL.global}/${URL.params.employees}`)
	},

	getEmployee(id) {
		return axios.get(`${URL.global}/${URL.params.employees}/${id}`)
	},

	createEmployee(body) {
		return axios.post(`${URL.global}/${URL.params.employees}`, body)
	},

	updateEmployee(id, body) {
		return axios.patch(`${URL.global}/${URL.params.employees}/${id}`, body)
	},

	deleteEmployee(id) {
		return axios.delete(`${URL.global}/${URL.params.employees}/${id}`)
	},

	getHotels() {
		return axios.get(`${URL.global}/${URL.params.hotels}`)
	},

	getHotel(id) {
		return axios.get(`${URL.global}/${URL.params.hotels}/${id}`)
	},

	createHotel(body) {
		return axios.post(`${URL.global}/${URL.params.hotels}`, body)
	},

	updateHotel(id, body) {
		return axios.patch(`${URL.global}/${URL.params.hotels}/${id}`, body)
	},

	deleteHotel(id) {
		return axios.delete(`${URL.global}/${URL.params.hotels}/${id}`)
	},

	getSectors() {
		return axios.get(`${URL.global}/${URL.params.sectors}`)
	},

	getSector(id) {
		return axios.get(`${URL.global}/${URL.params.sectors}/${id}`)
	},

	createSector(body) {
		return axios.post(`${URL.global}/${URL.params.sectors}`, body)
	},

	updateSector(id, body) {
		return axios.patch(`${URL.global}/${URL.params.sectors}/${id}`, body)
	},

	deleteSector(id) {
		return axios.delete(`${URL.global}/${URL.params.sectors}/${id}`)
	},

	getPlanning(sector) {
		return axios.get(`${URL.global}/${URL.params.visits}/${sector}`)
	},

	getList(sector) {
		return axios.get(`${URL.global}/${URL.params.hotels}/list/${sector}`)
	}
}
