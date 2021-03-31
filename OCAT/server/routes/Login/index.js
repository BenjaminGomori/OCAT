const router = require(`express`).Router();
const { supervisorLogin } = require("../../../../API/src/microservices/Identity-Management-Service");
const { UserService } = require(`../../libs`);
const { LoginRoute } = require(`../../utils`);
const config = require(`../../../config.json`);

router.post(`/submit`, (req, res) => {

    const sess = req.session;
    const { username, password } = req.body;
    sess.username = username;
    sess.password = password;
    sess.isSupervisor = false;

    UserService.submit(req.body).then((response) => {
        sess.isLoggedIn = true;
        if(!response.body.data.username){
            sess.isSupervisor = false;
        }else{
            sess.isSupervisor = true;
        }

        res.send(sess.isSupervisor);
    });
});

exports.router = router;
exports.path = `/api/login`;