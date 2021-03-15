const { Assessments } = require(`../Database`);

exports.submit = (assessment) => {
  return new Promise(async (resolve, reject) => { //eslint-disable-line
    try {
      var date = new Date();
      var shortDate = date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate() 
                      + ' '  +date.getHours()+ ':' + date.getMinutes()+ ':' + date.getSeconds();
      let val = { 
        'cat_name': assessment.catName,
        'cat_date_of_birth':assessment.catDateOfBirth,
        'instrument': assessment.instrument,
        'score': assessment.score,
        'risk_level': assessment.riskLevel,
        'created_at': shortDate,
        'deleted_at': null
      }

      console.log('before calling database')
      console.log(val);
      
      return new Assessments(val).save()
      //resolve();

    } catch (err) {
      reject(err);
    }
  });
};