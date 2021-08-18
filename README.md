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

## API
See [API Docs](./docs/API.md) file.

## Usage

> **NOTE**: The client will return only the first 1000 tickers available.

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

## License

This project is open-sourced software licensed under the [MIT license](./LICENSE).
