const router = require(`express`).Router();
const { UserService } = require(`../../libs`);

router.post(`/submit`, (req, res) => {

    const sess = req.session;
    console.log(req.body);

    UserService.submit(req.body).then((response) => {
        console.log('back in Frone End Router',response.body.data );
        sess.isLoggedIn = response.body.data.isLoggedIn;
        sess.isSupervisor = response.body.data.is_supervisor;
        sess.username = response.body.data.username;

        console.log('seesion',sess );

        res.send({isLoggedIn: response.body.data.isLoggedIn, isSupervisor: response.body.data.is_supervisor});
    });
});

router.post(`/signUp`, (req, res) => {
    UserService.signUp(req.body).then((response) => {
        console.log('222222222222222222222');
        console.log(response.body.data);
        res.send(response.body.data);
    });
});

exports.router = router;
exports.path = `/api/login`;