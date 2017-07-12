const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const hsnSchema = new Schema({
    HSN_CODE:{type:Number, required:true},
    Description:{type:String, required: true },
})
const hsnModel = mongoose.model('Gst',hsnSchema, 'gst')

module.exports = hsnModel;
