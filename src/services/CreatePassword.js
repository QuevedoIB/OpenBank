import axios from 'axios';

const PRUEBA_KO = 'pruebaKO123';

const RESPONSE_OK = { status: 200, hasMasterPassword: true };
const RESPONSE_KO = { status: 401 };

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
            setTimeout(
                () =>
                    data.password !== PRUEBA_KO
                        ? resolve(RESPONSE_OK)
                        : reject(RESPONSE_KO),
                3000
            );
        });

        //return this.service.post('/create', { data });
    }
}

const service = new CreatePasswordService();

export default service;
