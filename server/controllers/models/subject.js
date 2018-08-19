var mongoose =require('mongoose')

module.exports= mongoose.model('subject',{
    title:{type: String, required: true},
    image:{
        title:{type: String, required: false},
        url:{type: String, required: false}
    },
    tags:[{type: String, required: false}]
});