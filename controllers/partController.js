
//Item model
const db = require("../models");

//get item
module.exports ={
    findAll: (req, res) => {
        db.part
        .find(req.query)
        .sort({
            date: -1
        })
        .then(parts => res.json(parts))
        .catch(err => res.status(422).json(err));       

},
findById: (req, res) => {
    db.part
      .findById(req.params.id)
      .then(dbpart => res.json(dbpart))
      .catch(err => res.status(422).json(err));
  },
//post item
//-------------------------------------------------
create: (req, res) => {
    const newPart = {
        partModel: req.body.partModel,
        Description: req.body.Description,
        Year: req.body.Year,
        partGrade: req.body.partGrade,
        price: req.body.price,
        image: req.body.image
    };
    db.part
    .create(newPart)
    .then(dbPart => res.json(dbPart))
    .catch(err => res.status(422).json(err));

},



//--------------------------------------------------

 update: (req, res) => {
db.part
    .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
},

//----------------------------------------------------
 remove: (req, res) => {
db.part
    .findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err =>res.status(404).json({success: false}))
}

};
