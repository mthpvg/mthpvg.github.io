const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(
  path.join(__dirname, 'public'),
  { maxAge: 31557600000 }
));

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

app.listen(PORT, function () {
  console.log(`app listening on port ${PORT}`)
});
