import axios from "axios";

export class AssessmentService {
    static async submit (assessment) {
        try {
            //Choose the correct method, url, and data to send in a request to the express OCAT/server/routes
            //await axios({});
            console.log('sending ');
            console.log( assessment);

            let res = await axios.post('http://127.0.0.1:3000/assessment/submit', assessment);

            let data = res.data;
            console.log(data);

            return;
        }
        catch (err) {
            throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
        }
    }
}