const { Assessments } = require(`../Database`);

exports.submit = (assessment) => {
  return new Promise(async (resolve, reject) => { //eslint-disable-line
    try {
      const date = new Date();
      const shortDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

      let val = { 
        'cat_name': assessment.catName,
        'cat_date_of_birth':assessment.catDateOfBirth,
        'instrument': assessment.instrument,
        'score': assessment.score,
        'risk_level': assessment.riskLevel,
        'created_at': shortDate,
        'deleted_at': null
      }

      let newAssessment = await new Assessments(val).save().catch(function (e) {
        console.log('error in saving assessment')
        resolve('false');
      });

      resolve('true');

    } catch (err) {
      reject();
    }
  });
};

exports.retrieve = () => {
  return new Promise(async (resolve, reject) => { //eslint-disable-line
    try {
      let assessmentList = await new Assessments().where({deleted_at: null}).fetchAll().catch(function (e) {
        console.log('error in retrieving assessments')
        resolve();
      });

      resolve(assessmentList.toJSON());

    } catch (err) {
      reject();
    }
  });
};

exports.delete = (assessmentId) => {
  return new Promise(async (resolve, reject) => { //eslint-disable-line
    try {
      const date = new Date();
      const shortDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

      //from https://stackoverflow.com/questions/41914802/how-do-i-properly-update-models-with-bookshelf-js
      await new Assessments({'id':assessmentId}).fetch()
      .then(function (model) {
        if (model) {
          var params = { 'deleted_at': shortDate }
           model.save(params, {
            method: 'update',
            patch: true
          });
        } 
      })
      .then(()=>{resolve()})
      .catch(function (err) {
          console.log("error in deleting assessment", err);
          resolve();
      });

    } catch (err) {
      reject();
    }
  });
};