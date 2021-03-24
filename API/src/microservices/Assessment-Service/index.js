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
        resolve(newAssessment);
      });

      resolve(newAssessment);

    } catch (err) {
      reject();
    }
  });
};

exports.retrieve = () => {
  return new Promise(async (resolve, reject) => { //eslint-disable-line
    try {
      let assesmentList = await new Assessments().where({deleted_at: null}).fetchAll().catch(function (e) {
        console.log('error in retrieving assessments')
        resolve(assesmentList.toJSON());
      });

      resolve(assesmentList.toJSON());

    } catch (err) {
      reject();
    }
  });
};