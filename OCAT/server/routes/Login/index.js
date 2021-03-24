const router = require(`express`).Router();
const { UserService } = require(`../../libs`);
const { LoginRoute } = require(`../../utils`);

router.post(`/submit`, (req, res) => {
    UserService.submit(req.body);
});

exports.router = router;
exports.path = `/api/login`;