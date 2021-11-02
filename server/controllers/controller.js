const Exam = require('../models/models');

module.exports = {
    Indexs: (req,res) =>{
        Exam.find().sort({animaltype:1})
            .then(data => res.json({results:data}))
            .catch(err => res.status(400).json(err))
    },
    Show: (req,res) => {
        Exam.findOne({_id:req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.status(400).json(err))
    },
    Create: (req,res) =>{
        Exam.create(req.body)
            .then(data => res.json({results:data}))
            .catch(err => res.status(400).json(err))
    },
    Update: (req,res) =>{
        Exam.findOneAndUpdate({_id: req.params.id},req.body,{new:true,runValidators:true})
        .then(data => res.json({results:data}))
        .catch(err => res.status(400).json(err))
    },
    Delete: (req,res) =>{
        Exam.deleteOne({_id: req.params.id})
        .then(data => res.json({results:data}))
        .catch(err => res.status(400).json(err))
    }
}