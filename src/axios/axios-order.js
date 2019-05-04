import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-my-burger-8356a.firebaseio.com/"
});

export default instance;