module.exports = (res, message, data = {}, next) => {
  
  let status = 'SUCCESS';
  message = 'Submission of Assessment Succeeded';

  if(!data.attributes){
    message = 'Submission of Assessment Failed';
    status ='FAILURE';
  } 
  
  res.json({
    status: status,
    message,
    data
  });
  
  next();
};