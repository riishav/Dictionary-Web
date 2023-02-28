const { response } = require('express');
const express = require('express')
const path = require("path")
var axios = require("axios").default;
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log(path.join(__dirname, 'public'))
  return res.sendFile('public/index.html', { root: __dirname });
})


app.get('/searchword', (req, res) => {
  console.log(req.query)

  var options = {
    method: 'GET',
    url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/theme/',
    params: { entry: req.query.entry},
    headers: {
      'X-RapidAPI-Key': '9ff9ccaf93mshf80f6f6cd1d463dp1dbc56jsnceea7c530953',
      'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
    }
  }; 

 
  

  axios.request(options).then(function (response) {
    // console.log(response.data);
    res.json(response.data)
  }).catch(function (error) {
    console.error(error);
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} - http://localhost:3000`)
})
