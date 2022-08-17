import axios from 'axios';

export const auth = (email: string = '', password: string = '') => {
	const URL = "https://reqres.in/api/login";
	return axios.post(URL, {
		email,
		password
	})
}