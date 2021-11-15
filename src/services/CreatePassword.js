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
        return new Promise((resolve, reject) => {
            const success = Math.random() >= 0.5;
            setTimeout(
                () =>
                    success
                        ? resolve({ data: { hasMasterPassword: true } })
                        : reject({ status: 500 }),
                3000
            );
        });

        //return this.service.post('/create', { data });
    }
}

const service = new CreatePasswordService();

export default service;
