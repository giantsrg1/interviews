//Article Schema
let schema = {
	owner_name:{
		type: String,
		required: true
	},
	model:{
		type: String,
		required: true
	},
	seat_capacity:{
		type: Number,
		required: true
	},
	manufactured_date:{
		type: Date,
		required: true
	},
	purchase_price:{
		type: Number,
		required: true
	},
	broker_email:{
		type: String,
		required: true
	},
	approved:{
		type: String,
		required: true
	},
	reason:{
		type: Array
	}
};

//mongoose setup
const mongoose = require('mongoose');
let quote = module.exports = mongoose.model('quote', mongoose.Schema(schema));