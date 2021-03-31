import axios from "axios";
import { Redirect } from "react-router";
import config from "../../../../../../config.json";
// from https://loizenai.com/reactjs-jwt-authentication-example/#implement-reactjs-jwt-authentication-service

export class LoginService {
    static async submit (login) {
        try {
            await axios.post('http://localhost:4567/api/login/submit', login).then(response => {
                localStorage.setItem("isSupervisor", JSON.stringify(response.data));
                localStorage.setItem("isLogedIn", true);

                window.location.replace("http://localhost:4567/assessment/list");
              })
        }
        catch (err) {
            throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
        }
    }

    static async logout() {
        try {
            localStorage.removeItem("isSupervisor");
            localStorage.removeItem("isLogedIn");
            //await axios.get('http://localhost:4567/api/logout');
            window.location.replace("http://localhost:4567/api/logout");
        }
        catch (err) {
            throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
        }
    }

    static getCurrentUser() {
        const user = {};
        user.isLogedIn = JSON.parse(localStorage.getItem('isLogedIn'));
        user.isSupervisor = JSON.parse(localStorage.getItem('isSupervisor'));
        return user;
    }
}