const router = require(`express`).Router();
const { AssessmentService } = require(`../../libs`);
const { ErrorHandler } = require(`../../utils`);
const { AssessmentSubmitRoute } = require(`../../utils`);

router.post(`/submit`, (req, res) => {
    console.log(req);
    //call the AssessmentSubmit function from the server/libs/AssessmentService
    
});

exports.router = router;
// exports.path = `/api/assessment`;//original
exports.path = `/assessment`;