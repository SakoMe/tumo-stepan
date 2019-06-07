import axios from 'axios';

const ACCESS_KEY = 'Client-ID ' + process.env.REACT_APP_UNSPLASH;

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: ACCESS_KEY,
	},
});
