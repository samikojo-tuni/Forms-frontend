import http from "../http-common";

const url = "/employees";

class EmployeeDataService {
	getAll() {
		return http.get(url);
	}

	get(id) {
		return http.get(`${url}/${id}`);
	}

	create(data) {
		return http.post(url, data);
	}

	update(id, data) {
		return http.update(`${url}/${id}`, data);
	}

	delete(id) {
		return http.delete(`${url}/${id}`);
	}

	deleteAll() {
		return http.delete(url);
	}
}

export default new EmployeeDataService();