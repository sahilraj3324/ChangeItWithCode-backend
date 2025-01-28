const mongoose = require("mongoose");

const cont = mongoose.Schema({
    day : {
        type : String,
        required : true
    },
    title : {
        type : String ,
        required : true
    },
    question1 : {
        type : String 
    },
    question2 : {
        type : String 
    },
    question3 : {
        type : String 
    },
    question4 : {
        type : String 
    },question5 : {
        type : String 
    },
    answer1 : {
        type : String 
    },
    answer2 : {
        type : String 
    },
    answer3 : {
        type : String 
    },
    answer4 : {
        type : String 
    },
    answer5 : {
        type : String 
    },


})

const Content = mongoose.model("Content" , cont );

module.exports = Content ;

