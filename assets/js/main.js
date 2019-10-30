import axiosApi from 'axios';

const axios = axiosApi.create({
    baseURL:`your_base_url`,
    headers:{ header:value }
});



//Use the window object to make it available globally.
window.axios = axios;
