const mongoose = require('mongoose');

    const ExamSchema = new mongoose.Schema({
        name:{
            type:String,
            required:[true,"Name is required"], 
            minlength:[3,"Product name must be more than 3 characters long"]
        },
        price:{
            type:Number,
            required:[true,"Price is required"]
        },
        description:{
            type:String,
            required:[true,"Description is required"], 
            minlength:[3,"Product Description must be more than 3 characters long"]
        },
        picture:{
            type:Image,
            required:[true,"An image is required"]
        }
    }, 
    { timestamps: true });

    const Exam = mongoose.model("Exam", ExamSchema);

    module.exports = Exam;