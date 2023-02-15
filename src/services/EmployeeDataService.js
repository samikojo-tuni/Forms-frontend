import http from "../http-common";
import authHeader from "./auth-headers";

const url = "/employees";

class EmployeeDataService {
	getAll() {
		return http.get(url, { headers: authHeader() });
	}

	get(id) {
		return http.get(`${url}/${id}`, { headers: authHeader() });
	}

	create(data) {
		return http.post(url, data, { headers: authHeader() });
	}

	update(id, data) {
		return http.update(`${url}/${id}`, data, { headers: authHeader() });
	}

	delete(id) {
		return http.delete(`${url}/${id}`, { headers: authHeader() });
	}

	deleteAll() {
		return http.delete(url, { headers: authHeader() });
	}
}

export default new EmployeeDataService();