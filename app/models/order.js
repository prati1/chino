var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    cart: {type: Object, required: true},
    address: {type: String, required: true},
    name: {type: String, required: true},
    contact: {type: Number, required: true},
    email: {type: String, required: true},
    paymentId: {type: String}
});

module.exports = mongoose.model('Order', schema);