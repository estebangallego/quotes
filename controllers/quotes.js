// Model
var Quote = require('../Models/Quote.js');

var quoteController = {}

quoteController.show = function(req, res) {
    Quote.find({}, function (err, quotes){
      if(err){
        console.log('error');
      }
      else
      {
        console.log(quotes);
        res.render("quotes", {quotes: quotes});  
      }
    })
}

quoteController.add = function(req, res) {
	console.log("POST DATA", req.body);
    var user = new Quote({name: req.body.name, quote: req.body.quote});
    user.save(function(err) {
      // if there is an error console.log that something went wrong!
      if(err) 
      {
        console.log('something went wrong');
      } 
      else 
      { // else console.log that we did well and then redirect to the root route
        console.log('Quote successfully added!');
        res.redirect('/quotes');
      }
    })
}

quoteController.delete = function(req, res) {
	console.log(req.params.id);
    Quote.remove({_id: req.params.id}, function (err, user){
        res.redirect('/quotes');
    })

}

module.exports = quoteController;