
var mongoose = require('mongoose');
var jwt    = require('jsonwebtoken');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var db=require('../models/db');




var user =require('../models/user')


module.exports = function(app)
{


// http get
    app.get('/user', (req, res) => {

        user.find({}).then(item=>{
            item.forEach(element => {
                element.password="*"
            });
            res.json(item);
        })

    });




    app.get('/api/user/:id', (req, res) => {
        var id = mongoose.Types.ObjectId(req.params.id);
        user.findOne({_id: id}).then(item=>{
            res.json(item);
        })

    });

//http post
    app.post('/register',(req,res)=>{
        var User=req.body;
        bcrypt.hash(User.password, saltRounds, function(err, hash) {
            User.password = hash;
        });
        setTimeout(()=>{
            user.create(User).then(() => {
                    //    req.cookies.userId = user._id;
                    res.json({status:200});
            })
                .catch((err) => {
                    res.json(err)
                })
        },500)
        //nn



    })

//http put
    app.put('/api/user/:id',(req,res)=>{
        var id = mongoose.Types.ObjectId(req.params.id);
        user.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, user) {

            if (err)

                res.json(err);

            res.json(user);

        });

    })






// http delete
    app.delete('/api/user/:id',(req,res)=>{
        var id = mongoose.Types.ObjectId(req.params.id);
        user.remove({_id:id},(err,result)=>{
            if (err)

                res.json(err);

            res.json({_id:id});
        })
    })



// login
    app.post('/login',(req,res)=>{
        var User=req.body;
        user.authenticate(User.email, User.password, function (error, user) {
            if (error || !user) {

                res.json({
                    title:'Wrong email or password.',
                    status:401
                });
                // return next(err);
            } else {
                const payload = {
                    id:user._id,
                    email:user.email,
                    username:user.username,
                    role:user.role
                };



                var token = jwt.sign(payload, app.get('superSecret'), {
                    expiresIn : "2 days"
                });
                res.json({
                    status: 200,
                    token: token
                });

                //https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens



            }
        });




    })

//get user by token
    app.get('/api/userid/',(req,res)=>{
        var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];

        var id=  jwt.verify(token,db.secret, function(err, user){

            return user.id;
        })

        user.findOne({_id: id}).then(item=>{
            res.json(item);
        })
    })


// GET for logout logout
    app.get('/logout', function (req, res, next) {
        if (req.session) {
            // delete session object
            req.session.destroy(function (err) {
                if (err) {
                    return next(err);
                } else {
                    res.json("Successful");
                }
            });
        }
    });



    app.post('/upload/image',(req, res, next)=>{
        console.log("upload")
    })

}