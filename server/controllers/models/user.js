
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');


const schema = mongoose.Schema;

var userSchema = new schema({
    username:{type: String, required: true,unique:true},
    password:{type: String, required: true},
    email:{type: String, required: true,unique:true},
    role:{type: String, required: true,default:'user'},
    firstName:{type: String, required: false},
    lastName:{type: String, required: false},
    voted:{type: Number, required: false},
    experienced:{type: Number, required: false},
    level:{type: Number, required: false},
    jobs:[{type: String, required: false}],
    hometown:{type: String, required: false},
    avatar:{type: String, required: false},
    hobbies:[{type: String, required: false}],
    money:{type: Number, required: false},
    favoriteTags:[{type: String, required: false}],
    noteBooks:[{name:{type: String, required: false},content:{type: String, required: false}}]
})
userSchema.statics.authenticate = function (email, password, callback) {
    User.findOne({ email: email })
        .exec(function (err, user) {
            if (err) {
                return callback(err)
            } else if (!user) {
                var err = new Error('User not found.');
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(password, user.password, function (err, result) {
                if (result === true) {
                    return callback(null, user);
                } else {
                    var err = new Error('Invalid password.');
                    err.status = 400;
                    return callback(err);
                }
            })

        });
}

var User = mongoose.model('User', userSchema);
module.exports= User;