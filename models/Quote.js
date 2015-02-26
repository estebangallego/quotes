var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotes_db');
var QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String,
});
var Quote = mongoose.model('Quote', QuoteSchema);
module.exports = mongoose.model('Quote', QuoteSchema);