//Article Schema
let schema = {
	title:{
		type: String,
		required: true
	},
	author:{
		type: String,
		required: true
	},
	body:{
		type: String,
		required: true
	},
	date:{
		type: Date,
		default: Date.now
	}
};

//mongoose setup
const mongoose = require('mongoose');
let article = module.exports = mongoose.model('article', mongoose.Schema(schema));