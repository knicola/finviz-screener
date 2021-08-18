# FinViz Screener Library for Node.js

Free, open-source Node.js client for the [FinViz Screener](https://finviz.com/screener.ashx).

## Installing

Using npm:
```sh
$ npm install finviz-screener
```

Using yarn:
```sh
$ yarn add finviz-screener
```

## Usage

> **NOTE**: Currently, fetches results only from the first page which can have up to 1000 tickers.

```js
const finviz = require('finviz-screener')
// import finviz from 'finviz-screener'

const tickers = await finviz()
    .marketCap('Small ($300mln to $2bln)')
    .averageVolume('Over 1M')
    .dividendYield('Over 2%')
    .price('Under $10')
    .scan()

console.log(tickers) //=> [
//   'TIC','KER','RES',
//   'ULTS','WILL','BE',
//   'RE','TUR','NED'
// ]
```

## API
See [API Docs](API.md) file.

## Development
Most of FinViz client, tests, types and API docs are script generated. See [scripts](./scrpts/) folder for the scripts and templates.

## License

This project is open-sourced software licensed under the [MIT license](./LICENSE).
