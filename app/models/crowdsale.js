var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crowdsale = new Schema ({
 crowdsale : {},
 token : {type : String},
 userId : {type : String}
});
module.exports = mongoose.model('crowdsale',crowdsale);