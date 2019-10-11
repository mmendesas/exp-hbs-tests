const express = require('express');
const exphbs = require("express-handlebars");
const path = require('path');

const PORT = process.env.PORT || 4444;

const app = express();

// define views folder
app.set('views', path.resolve(__dirname, './views'));

// register handlebars view engine
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

// use handlebars view engine
app.set('view engine', 'handlebars');


// routes
app.get('/', (req, res) => {
  res.render("home");
});

app.listen(PORT, () => {
  console.log(`Sample app is running -> ${PORT}`)
})