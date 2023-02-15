import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users/';

class AuthService {
	login(user) {
		return axios.post(API_URL + "login", {
			email: user.email,
			password: user.password
		}).then(res => {
			if (res.data.token) {
				localStorage.setItem('user', JSON.stringify(res.data));
				console.log(res.data);
			}

			return res.data;
		}); // TODO: Virheenkäsittely
	}

	logout() {
		localStorage.removeItem('user');
	}

	register(user) {
		return http.post(API_URL, {
			first_name: user.first_name,
			last_name: user.last_name,
			email: user.email,
			password: user.password,
			account_type: user.account_type
		});
	}
}

export default new AuthService();