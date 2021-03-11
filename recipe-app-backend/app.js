const express = require('express');
const request = require('request');

const app = express();
const port = 5000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

const appId = '5b1133da';
const appKey = 'b8a4eabf90998bdce5d6893935275a50';
// ex req: `https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${app_key}`

app.get('/search', (req, res) => {
  if(req.query.query) {
    request(`https://api.edamam.com/search?q=${req.query.query}&app_id=${appId}&app_key=${appKey}&from=${req.query.page.toString()}&to=${(req.query.page + 10).toString()}&calories=591-722&health=alcohol-free`, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        res.send(body);
      } else {
        res.send(error, 'hey error');
      }
    });
  }
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});