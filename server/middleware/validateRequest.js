


var db = require('../controllers/models/db');
var jwt = require('jsonwebtoken');


module.exports = function(req, res, next) {



    var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
    var key = (req.body && req.body.x_key) || (req.query && req.query.x_key) || req.headers['x-key'];

    if (token || key) {
        try {

            jwt.verify(token,db.secret, function(err, user){

                // console.log(ms(1531984293));

                //   if (new Date(user.exp) <= Date.now()) {
                //     res.status(400);
                //     res.json({
                //       "status": 400,
                //       "message": "Token Expired"
                //     });
                //     return;
                //   }




                if(user){
                    if(req.url.indexOf('/api/') >= 0){
                        next();
                    }else {
                        res.status(403);
                        res.json({
                            "status": 403,
                            "message": "Not Authorized"
                        });
                        return;
                    }
                }
                else{
                    res.status(401);
                    res.json({
                        "status": 401,
                        "message": "Invalid User"
                    });
                    return;
                }

                //  next();

            });


        } catch (err) {
            res.status(500);
            res.json({
                "status": 500,
                "message": "Oops something went wrong",
                "error": err
            });
        }
    } else {
        res.status(401);
        res.json({
            "status": 401,
            "message": "Invalid Token or Key"
        });
        return;
    }
};