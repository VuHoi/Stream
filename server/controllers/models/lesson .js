var mongoose = require('mongoose');

module.exports= mongoose.model('lesson',{
    title:{type: String, required: true},
    description:{type: String, required: false},
    vote:{type: String, required: false},
    teacher:{type: user, required: false},
    image:{
        title:{type: String, required: false},
        url:{type: String, required: false}
    },
    author:{type: user, required: false},
    startTime:{type: Date, required: true,default:new Date()},
    endTime:{type: Date, required: true,default:new Date()},
    tag:[{type: String, required: false}],
    attach:[{type: String, required: false}],
    members:[
        {
            username:{type: String, required: false},
            status:{type: Boolean, required: false}
        },
    ],
    questions:[
        {
            title:{type: String, required: false},
            answer:[{type: String, required: false}]
        }
    ],
    comments:[
        {
            username:{type: String, required: false},
            content:{type: String, required: false},
            numberQuestion:{type: Number, required: false, default : 0}
        }
    ]

});