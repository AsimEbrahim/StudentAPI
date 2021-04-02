const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StudentSchema = new Schema({
    name: {type: String, require: true, max: 100},
    regno: {type: Number, require: true}
});

module.exports = mongoose.model('Student',StudentSchema)