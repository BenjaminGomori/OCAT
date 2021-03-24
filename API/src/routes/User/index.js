const { ResponseHandler } = require(`../../utils`);
const { IdentityService } = require(`../../microservices`);

const BASE_URL = `/user`;

module.exports = server => {

    server.post(
        `${ BASE_URL }/submit`,
        async (req, res, next) => {
          try {
    
            const  {login}  = req.params;
            await IdentityService.createSession(login);
    
            ResponseHandler(
              res,
              'User Login Succeeded',
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