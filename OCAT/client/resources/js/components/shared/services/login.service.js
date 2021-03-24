import axios from "axios";
import config from "../../../../../../config.json";

export class LoginService {
    static async submit (login) {
        try {
            await axios.post('http://localhost:4567/api/login/submit', login);
            return;
        }
        catch (err) {
            throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
        }
    }
}