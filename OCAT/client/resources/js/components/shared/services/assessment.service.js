import axios from "axios";

export class AssessmentService {
    static async submit (assessment) {
        try {
            //Choose the correct method, url, and data to send in a request to the express OCAT/server/routes
            //console.log('server sending');
            //console.log( assessment);

            let res = await axios.post('http://localhost:3000/assessment/submit', assessment);
            let data = res.data;

            //console.log('server came back');
            //console.log(data);

            return;
        }
        catch (err) {
            throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
        }
    }
}