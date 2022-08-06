var express = require('express');
var router = express.Router();
const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 

/* GET users listing. */
router.get('/', function(req, res, next) {
    models.departamento.findAll({ 
        attributes: { exclude: ["updatedAt"] }
      })
      .then(departamento => {
         res.send(departamento)
      })
      .catch(error => res.status(400).send(error))
});

router.get('/:id', function(req, res, next) {
  models.departamento.findAll({ 
      attributes: { exclude: ["updatedAt"] },
      where: {id: req.params.id},

    })
    .then(departamento => {
      console.log(departamento)
       if (departamento) {
        res.send(departamento)
       }
       else {
        res.status(404).send({"message":"No existe departamento con ese id"})
       }
    })
    .catch(error => res.status(505).send({"message":`Problemas para obtener el departamento con el ${id}` }))
});


router.post('/',async (req,res,next)=>{
  try {
      console.log(req.body)
      const departamento = await models.departamento.create({id:req.body.id, nombre:req.body.nombre});
      res.status(201).send(departamento)
  } catch (error) {
    next(error)
  }
  
})

module.exports = router;
