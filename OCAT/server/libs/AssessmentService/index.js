let request = require(`request`);
const config = require(`../Config`);

exports.submit = ( assessment ) => {
    return new Promise((resolve, reject) => {
  
    //supply the correct uri and method here

    //TODO perhaps change it to path?
      const options = {
          uri: `${ config.api.url}/assessment/submit/`,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: {
            assessment: assessment
          }
      };
  
      //this function sends a request to the API
      // finish the logic to handle the response when returned from the API
      request(options, (error, response) => {
        if(error == null){
          let json = JSON.parse(body);
          console.log(json);
          resolve(response);
        }
        if(error != null){
          let json = JSON.parse(body);
          console.log(json);
          reject(error);
        }
      });
    });
  };