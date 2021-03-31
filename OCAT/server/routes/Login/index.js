const router = require(`express`).Router();
const { UserService } = require(`../../libs`);

router.post(`/submit`, (req, res) => {

    const sess = req.session;
    const { username, password } = req.body;
    sess.username = username;
    sess.password = password;
    sess.isSupervisor = false;
    sess.isLoggedIn = false;

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