const { ResponseHandler } = require(`../../utils`);
const { IdentityService } = require(`../../microservices`);
const session = require('express-session')

const BASE_URL = `/user`;

module.exports = server => {

    server.post(
        `${ BASE_URL }/submit`,
        async (req, res, next) => {
          try {
    
            const  {login}  = req.params;
            supervisorUsername = await IdentityService.supervisorLogin(login);

            ResponseHandler(
              res,
              'User Login Succeeded',
              {username: supervisorUsername},
              next
            );
          } catch (err) {
            console.log(err)
            next(err);
          }
        }
      );
};