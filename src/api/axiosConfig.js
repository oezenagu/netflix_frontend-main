import axios from 'axios';

export default axios.create({
    baseURL:'http://51.21.220.36:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
