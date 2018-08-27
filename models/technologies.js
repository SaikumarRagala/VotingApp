var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var TechSchema = new Schema({
	_id : String,
    ML: Number,
    Blockchain: Number,
    Serverless: Number,
    AR : Number
});

TechSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('technologies', TechSchema);
