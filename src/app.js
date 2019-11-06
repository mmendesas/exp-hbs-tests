const express = require('express');
const exphbs = require('express-handlebars');
const { resolve, join } = require('path');

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
      defaultLayout: 'main',
      extname: '.hbs',
      layoutsDir: resolve(__dirname, 'views', 'layouts'),
      partialsDir: resolve(__dirname, 'views', 'partials')
    })

    // define views folder
    this.server.set('views', resolve(__dirname, 'views'));

    // register handlebars view engine
    this.server.engine('.hbs', hbs.engine);
    this.server.set('view engine', '.hbs')
  }

  middlewares() {
    this.server.use(express.json())
    this.server.use(express.static(resolve(__dirname, '..', 'public')))
  }

  routes() {
    this.server.use(routes)
  }
}

module.exports = new App().server;