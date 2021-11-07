const Product = require('../models/models');

module.exports = {
    Indexs: (req,res) =>{
        Product.find().sort({animaltype:1})
            .then(data => res.json({results:data}))
            .catch(err => res.status(400).json(err))
    },
    Show: (req,res) => {
        Product.findOne({_id:req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.status(400).json(err))
    },
    Create: (req,res) =>{
        Product.create(req.body)
            .then(data => res.json({results:data}))
            .catch(err => res.status(400).json(err))
    },
    Update: (req,res) =>{
        Product.findOneAndUpdate({_id: req.params.id},req.body,{new:true,runValidators:true})
        .then(data => res.json({results:data}))
        .catch(err => res.status(400).json(err))
    },
    Delete: (req,res) =>{
        Product.deleteOne({_id: req.params.id})
        .then(data => res.json({results:data}))
        .catch(err => res.status(400).json(err))
    }
}