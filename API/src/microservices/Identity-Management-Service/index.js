const { Users } = require(`../Database`);
const { Assessments } = require(`../Database`);
const { Password } = require(`../../utils`);

exports.supervisorLogin = (login) => {
  return new Promise(async (resolve, reject) => { //eslint-disable-line
    try {

      console.log("hello from micro")

      let storedSupervisor = await new Users().where({id: 1}).fetch().catch(function (e) {
        console.log('error in retrieving supervisor information')
        resolve(storedSupervisor.toJSON());
      });

      const supervisor = storedSupervisor.toJSON()
      let correctUsername = false;

      correctUsername = validateUsername(login.username, supervisor);
      if (correctUsername) {
        validateSupervisorPassword(login.password, supervisor,createSession);
      }

      function createSession(result){
        console.log('callback');
        console.log(result);
        console.log(supervisor);
        resolve(supervisor.username);
      }

      return;

    } catch (err) {
      reject();
    }
  });

  function validateUsername(username, supervisor){
    return username.trim() == supervisor.username;
  }

  async function validateSupervisorPassword(password, supervisor, createSession ){
    await Password(password.trim(),supervisor.password, createSession);
  }
};