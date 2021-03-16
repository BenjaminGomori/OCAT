const { AssessmentService } = require(`../../microservices`);
const { ResponseHandler } = require(`../../utils`);

const BASE_URL = `/assessment`;

module.exports = server => {

  server.post(
    `${ BASE_URL }/submit`,
    async (req, res, next) => {
      try {

        const  {assessment}  = req.params;
        const newAssessment  = await AssessmentService.submit(assessment);

        ResponseHandler(
          res,
          '',
          newAssessment,
          next
        );
      } catch (err) {
        console.log(err)
        next(err);
      }
    }
  );
};
