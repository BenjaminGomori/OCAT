let request = require(`request`);
const config = require(`../Config`);

exports.submit = ( assessment ) => {
    return new Promise((resolve, reject) => {
  
      //supply the correct uri and method here
      const options = {
          uri: `http://${ config.api.url}/assessment/submit/`,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: {
            assessment: assessment
          },
          json: true
      };
  
      //this function sends a request to the API
      // finish the logic to handle the response when returned from the API
      request(options, (error, response) => {
        if(error == null){
          resolve(response);
        }
        if(error != null){
          reject(error);
        }
      });
    });
  };

  exports.retrieve = (  ) => {
    return new Promise((resolve, reject) => {
  
      //supply the correct uri and method here
      const options = {
          uri: `http://${ config.api.url}/assessment/retrieve/`,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          json: true
      };
  
      //this function sends a request to the API
      // finish the logic to handle the response when returned from the API
      request(options, (error, response) => {
        if(error == null){
          resolve(response);
        }
        if(error != null){
          console.log('###########################################################')
          reject(error);
        }
      });
    });
  };