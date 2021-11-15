import axios from 'axios';

class CreatePasswordService {
    constructor() {
        this.service = axios.create({
            baseURL: import.meta.env.VITE_API_ENDPOINT,
        });

        this.service.interceptors.response.use(
            response => {
                // parse response
                return response;
            },
            error => {
                // generic error handling
                return Promise.reject(error.message);
            }
        );
    }

    create(data) {
        console.log('create');
        const success = Math.random() >= 0.5;
        return success
            ? Promise.resolve({ hasMasterPassword: true })
            : Promise.reject();
        //return this.service.post('/create', { data });
    }
}

const service = new CreatePasswordService();

export default service;
