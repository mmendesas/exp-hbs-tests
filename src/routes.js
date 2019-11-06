const { Router } = require('express');
const routes = new Router();

routes.get('/', (req, res) => {
  return res.render('home');
});

module.exports = routes;