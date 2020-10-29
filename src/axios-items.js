import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://minido-app.firebaseio.com/'
});

export default instance;