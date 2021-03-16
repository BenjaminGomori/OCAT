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
          next
        );
      } catch (err) {
        console.log(err)
        next(err);
      }
    }
  );
};
