const { Users } = require(`../Database`);
const { Assessments } = require(`../Database`);

exports.createSession = (login) => {
  return new Promise(async (resolve, reject) => { //eslint-disable-line
    try {
      let authenticated = {};

      console.log("hello from micro")
      console.log(login)
    // let newAssessment = await new Assessments(val).save().catch(function (e) {
    //     console.log('error in saving assessment')
    //     resolve(newAssessment);
    //   });

    //resolve(authenticated.toJSON());
    return;

    } catch (err) {
      reject();
    }
  });
};