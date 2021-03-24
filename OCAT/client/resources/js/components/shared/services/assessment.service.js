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
            const assessments = await axios.get('http://localhost:4567/api/assessment/retrieve');
            return assessments;
        }
        catch (err) {
            throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
        }
    }
}