const { AssessmentService } = require(`../../microservices`);
const { ResponseHandler } = require(`../../utils`);

const BASE_URL = `/assessment`;

module.exports = server => {

  server.post(
    `${ BASE_URL }/submit`,
    async (req, res, next) => {
      try {

        const  {assessment}  = req.params;
        const assessmentCreated = await AssessmentService.submit(assessment);
        let message = '';
        if(assessmentCreated === 'true'){
          message ='Submission of assessment succeeded';
        }else{
          message ='Submission of assessment failed';
        }

        ResponseHandler(
          res,
          message,
          {isAssessmentCreated: assessmentCreated},
          next
        );
      } catch (err) {
        console.log(err)
        next(err);
      }
    }
  );

  server.get(
    `${ BASE_URL }/retrieve`,
    async (req, res, next) => {
      try {
        const assessmentList = await AssessmentService.retrieve();

        ResponseHandler(
          res,
          'Retrieved Assessments successfully',
          assessmentList,
          next
        );
      } catch (err) {
        console.log(err)
        next(err);
      }
    }
  );
};
