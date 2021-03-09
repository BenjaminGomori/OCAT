const { Assessments } = require(`../Database`);

exports.submit = (assessment) => {
  return new Promise(async (resolve, reject) => { //eslint-disable-line
    try {
      //use the bookshelf model Assessments from API/src/microservices/Database to save the assessment data in the PostgreSQL database
      console.log('before calling database')
      console.log(assessment);
      console.log(new Date(assessment.catDateOfBirth));
      
      
     

      let val = await Assessments.forge({ 
        'id': 1,
        'cat_name': assessment.catName,
        'cat_date_of_birth':new Date(assessment.catDateOfBirth),
        'instrument': assessment.instrument,
        'score': assessment.score,
        'risk_level': assessment.riskLevel,
        'created_at': new Date(2021, 11, 17),
        'deleted_at': null
      }).save()
      resolve();
 


      
    } catch (err) {
      reject(err);
    }
  });
};