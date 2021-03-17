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
          'Submission of Assessment Succeeded',
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
        console.log('2121212122121212121212221212212121212121212121212')

        const assessmentList = await AssessmentService.retrieve();
        console.log(assessmentList.length)


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
