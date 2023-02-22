import axios from 'axios';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.defaults.responseType = 'json';

axios.interceptors.response.use((response) => {
    return Promise.resolve(response);
}, (error) => {
    return Promise.reject(error);
});

export default axios;
