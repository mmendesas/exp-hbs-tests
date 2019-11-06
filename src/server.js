const app = require('./app');
const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`Sample app is running -> ${PORT}`)
})