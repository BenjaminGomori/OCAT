import axios from "axios";
import config from "../../../../../../config.json";
// from https://loizenai.com/reactjs-jwt-authentication-example/#implement-reactjs-jwt-authentication-service

export class LoginService {
    static async submit (login) {
        try {
            await axios.post('http://localhost:4567/api/login/submit', login).then(response => {
                console.log(response);
                if (response) {
                  localStorage.setItem("user", JSON.stringify(response));
                }
                return response;
              })
              console.log('hmmmmm');
            return;
        }
        catch (err) {
            throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
        }
    }

    static signOut() {
        localStorage.removeItem("user");
    }

    static getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}