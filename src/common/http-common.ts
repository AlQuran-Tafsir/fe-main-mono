import axios from 'axios';

const http = axios.create({
    baseURL: import.meta.env.VITE_APP_URL,
    headers: {
        "Content-type": "application/json",
    }
});

export default http