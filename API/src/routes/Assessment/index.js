const { AssessmentService } = require(`../../microservices`);
const { ResponseHandler } = require(`../../utils`);

const BASE_URL = `/assessment`;

module.exports = server => {

  server.post(
    `${ BASE_URL }/submit`,
    async (req, res, next) => {
      try {
        //original
        // const { assessment } = req.params;
        const  assessment  = req.params;
    
        //verify that your data is making it here to the API by using console.log(assessment);
        console.log('in api router')
        console.log(assessment);
        
        //call the AssessmentService.submit function from the API/src/microservices/Assessment/ and supply the correct parameters
        const ben  = await AssessmentService.submit(assessment);

        ResponseHandler(
          res,
          '',
          ben,
          next
        );
      } catch (err) {
        console.log(err)
        next(err);
      }
    }
  );
};
