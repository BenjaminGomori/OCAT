const router = require(`express`).Router();
const { supervisorLogin } = require("../../../../API/src/microservices/Identity-Management-Service");
const { UserService } = require(`../../libs`);
const { LoginRoute } = require(`../../utils`);
const config = require(`../../../config.json`);

router.post(`/submit`, (req, res) => {
    UserService.submit(req.body).then((response) => {

        console.log(response.body.data.username);
        res.send(response.body.data) 

        // console.log('we are back!!')
        // console.log(req.session);
        // console.log(response.body.data);
        // console.log(response.body.data.username == 'supervisor');
        // console.log('supervisor');
        
        // if(response.body.data.username == 'supervisor'){
        //     req.session.isSupervisor= true;
        //     console.log('yay');
        //     console.log(req.session)

        //     req.session.save();
        // }else{
        //     req.session.isSupervisor = false; 
        //     //res.status(301).redirect('/');  
        // }
       
    });
});

exports.router = router;
exports.path = `/api/login`;