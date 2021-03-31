const router = require(`express`).Router();
const { resolve } = require("app-root-path");
const { AssessmentService } = require(`../../libs`);
const { ErrorHandler } = require(`../../utils`);

router.post(`/submit`, (req, res) => {
    AssessmentService.submit(req.body).then((response) => {
        res.send(response.body)        
     });;
});

router.post(`/delete`, (req, res) => {
    AssessmentService.delete(req.body).then((response) => {
        res.send(response.body)        
     });;
});

router.get(`/retrieve`, (req, res) => {
    if(req.session && req.session.isSupervisor)
    AssessmentService.retrieve().then((response) => {
         res.send(response.body.data)        
      });
});

exports.router = router;
exports.path = `/api/assessment`; 
