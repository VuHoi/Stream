var mongoose = require('mongoose');

module.exports= mongoose.model('image',{
    name:{type: String, required: true},
    url:{type: String, required: true},
});