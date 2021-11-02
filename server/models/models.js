const mongoose = require('mongoose');

    const ExamSchema = new mongoose.Schema({
        name:{
            type:String,
            required:[
                true,"Name is required"
            ], minlength:[3,"Pet Name must be more than 3 characters long"]
        },
        animaltype:{
            type:String,
            required:[
                true,"Type is required"
            ], minlength:[3,"Pet Type must be more than 3 characters long"]
        },
        description:{
            type:String,
            required:[
                true,"Description is required"
            ], minlength:[3,"Pet Description must be more than 3 characters long"]
        },
        skill1:{
            type:String
        },
        skill2:{
            type:String
        },
        skill3:{
            type:String
        }

    }, { timestamps: true });

    const Exam = mongoose.model("Exam", ExamSchema);

    module.exports = Exam;