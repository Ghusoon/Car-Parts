const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

//create schema.
const partSchema = new Schema({
   partModel: {
        type: String,
        required: true
    },
    Year: {
     type:Number,
     required:true
    },
    Description: {
        type: String,
        required: true
    },
    partGrade: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports =part = mongoose.model("part" , partSchema);