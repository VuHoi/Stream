var mongoose =require('mongoose')

module.exports= mongoose.model('chat',{
    form:{type: String, required: true},
    to:{type: String, required: true},
    time:{type: Date, required: false, default:new Date()},
    content:{type: String, required: false}
});