const { AssessmentService } = require(`../../microservices`);
const { ResponseHandler } = require(`../../utils`);

const BASE_URL = `/assessment`;

module.exports = server => {

  server.post(
    `${ BASE_URL }/submit`,
    async (req, res, next) => {
      try {

        const  {assessment}  = req.params;
        await AssessmentService.submit(assessment);

        ResponseHandler(
          res,
          'Submission of assessment succeeded',
          null,
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
          'Retrieved assessments successfully',
          assessmentList,
          next
        );
      } catch (err) {
        console.log(err)
        next(err);
      }
    }
  );


  server.post(
    `${ BASE_URL }/delete`,
    async (req, res, next) => {
      try {

        let  {assessmentId}  = req.params;
        assessmentId = assessmentId.assessmentId;

        await AssessmentService.delete(assessmentId);

        ResponseHandler(
          res,
          'Assessment deleted successfully',
          null,
          next
        );
      } catch (err) {
        console.log(err)
        next(err);
      }
    }
  );
};
