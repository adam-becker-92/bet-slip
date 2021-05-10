const express = require('express');
const app = express();
const cors = require('cors');
const { union } = require('ramda');
const data = require('./data/data.json');

app.use(cors());

const filterOverTwo = (isOverTwo) => ({ oddsDecimal }) => isOverTwo ? oddsDecimal > 2.0 : oddsDecimal < 2.0;
const filterBetsData = (filterFunction, bets) => {
  const filteredOdds = bets
    .map(({odds, ...props}) => {
      return odds.filter(filterFunction).map((odds) => ({ ...odds, ...props }));
    })
    .filter((bet) => !!bet.length);
  return union(...filteredOdds);
};

app.get('/decimalOddsMoreThanTwo', (req, res) => {
  const filteredData = filterBetsData(filterOverTwo(true), data.bets)
  res.send(filteredData);
});

app.get('/decimalOddsLessThanTwo', (req, res) => {
  const filteredData = filterBetsData(filterOverTwo(false), data.bets)
  res.send(filteredData);
});

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});