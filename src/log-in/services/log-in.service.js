import axios from 'axios';
const API_URL = 'https://app-service-asimov-202202-agile.azurewebsites.net/auth/';

class AuthService {
    login(user, typeU) {
        return axios.post(API_URL + 'sign-in/' + typeU, {
            email: user.email,
            password: user.password
        })
    }
}
export default new AuthService();