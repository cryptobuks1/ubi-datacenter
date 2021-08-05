import axios from 'axios';
import Utils from './Utils';
import constant from './Constant';

class Auth {

    login(credentials, redirectTo) {
        let email = credentials.email;
        let type = 'email';
        if(!isNaN(credentials.email)) { 
            type = 'number';
            email =  credentials.email.substring(credentials.email.length - 10,  credentials.email.length);
        }

        const f = new URLSearchParams();
        f.append('email', email);
        f.append('password', credentials.password);
        f.append('type', type);
        axios.post(Utils._getApi(constant.login), f, {
            headers: ''
        }).then(response => {
            const status = response.data.status;
            if (status) {
                localStorage.setItem('token', response.data.data.token);
                localStorage.setItem('id', response.data.data.id);

                console.log('redirec to ', redirectTo);
            }
         }).catch(err => {})
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
    }
}

export default new Auth();