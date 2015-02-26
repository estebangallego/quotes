var quoteController = require('../controllers/quotes.js');
module.exports = function(app) {
  // route to display
  app.get('/quotes', function (req, res){
    quoteController.show(req, res);
  })
  // route to add
  app.post('/quotes', function (req, res) {
    quoteController.add(req, res);
  })
  //route to delete
  app.get('/quotes/:id', function (req, res){
    quoteController.delete(req, res);
  })
}