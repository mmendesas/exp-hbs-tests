const express = require('express');
const exphbs = require('express-handlebars');
const { resolve } = require('path');

const routes = require('./routes');

class App {
  constructor() {
    this.server = express();

    this.setupEngine();
    this.middlewares();
    this.routes()
  }

  setupEngine() {
    const hbs = exphbs.create({
      defaultLayout: 'main'
    })

    // define views folder
    this.server.set('views', resolve(__dirname, './views'));

    // register handlebars view engine
    this.server.engine('handlebars', hbs.engine);
    this.server.set('view engine', 'handlebars')
  }

  middlewares() {
    this.server.use(express.json())
  }

  routes() {
    this.server.use(routes)
  }
}

module.exports = new App().server;