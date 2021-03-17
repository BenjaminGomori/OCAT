import axios from "axios";

export class AssessmentService {
    static async submit (assessment) {
        try {
            await axios.post('http://localhost:4567/api/assessment/submit', assessment);
            
            return;
        }
        catch (err) {
            throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
        }
    }

    static async retrieveAll() {
        try {
            //console.log('2222222222222222222222222222222222222');
            const assessments =  axios.get('http://localhost:4567/api/assessment/retrieve').then((res) => {
                console.log(res);
                return res;
             });
            console.log(assessments);    
            return assessments;
        }
        catch (err) {
            throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
        }
    }
}