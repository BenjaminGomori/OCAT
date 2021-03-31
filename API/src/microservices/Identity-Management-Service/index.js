const { Users } = require(`../Database`);
const { Password } = require(`../../utils`);

exports.supervisorLogin = (login) => {
  return new Promise(async (resolve, reject) => { //eslint-disable-line
    try {

      let storedSupervisor = await new Users().where({id: 1}).fetch().catch(function (e) {
        console.log('error in retrieving supervisor information')
        resolve();
      });

      const supervisor = storedSupervisor.toJSON()
      let correctUsername = false;

      correctUsername = validateUsername(login.username, supervisor);
      if (correctUsername) {
        validateSupervisorPassword(login.password, supervisor,returnResult);
      }else{
        resolve(false);
      }

      function returnResult(result){
        resolve(result);
      }

      return;

    } catch (err) {
      reject();
    }
  });

  function validateUsername(username, supervisor){
    return username.trim() == supervisor.username;
  }

  async function validateSupervisorPassword(password, supervisor, returnResult ){
    await Password(password.trim(),supervisor.password, returnResult);
  }
};