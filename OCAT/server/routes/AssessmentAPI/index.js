const router = require(`express`).Router();
const { AssessmentService } = require(`../../libs`);
const { ErrorHandler } = require(`../../utils`);
const { AssessmentSubmitRoute } = require(`../../utils`);

router.post(`/submit`, (req, res) => {
    //call the AssessmentSubmit function from the server/libs/AssessmentService
    AssessmentService.submit(req.body);
    
});

exports.router = router;
//TODO what is correct?
// exports.path = `/api/assessment`;//original 
exports.path = `/assessment`;