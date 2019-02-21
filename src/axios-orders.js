import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgero-buildero.firebaseio.com/'
});

export default instance;