const router = require(`express`).Router();
const { resolve } = require("app-root-path");
const { AssessmentService } = require(`../../libs`);
const { ErrorHandler } = require(`../../utils`);

router.post(`/submit`, (req, res) => {
    //Only logged in users can submit assessment
    if(req.session && req.session.isLoggedIn){
        AssessmentService.submit(req.body).then((response) => {
            res.send(response.body.data)        
         });
    }
});

router.get(`/retrieve`, (req, res) => {
    //Only supervisors can view assessment list
    if(req.session && req.session.isSupervisor)
    AssessmentService.retrieve().then((response) => {
         res.send(response.body.data)        
      });
});

router.post(`/delete`, (req, res) => {
    AssessmentService.delete(req.body).then((response) => {
        res.send(response.body)        
     });;
});

exports.router = router;
exports.path = `/api/assessment`; 
