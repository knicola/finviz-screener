# FinViz Screener Library for Node.js

Free, open-source Node.js client for the [FinViz Stock Screener](https://finviz.com/screener.ashx).

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
```js
// ES6
import finviz from 'finviz-screener'
```
```js
// CommonJs
const finviz = require('finviz-screener')
```
```js
const options = {
    // Maximum number of pages to fetch. Set to `0` to disable. Default is 1
    pageLimit: 1,
    // Number of milliseconds to wait between requests. Default is 1000
    requestTimeout: 1000,
}

const tickers = await finviz(options)
    .averageVolume('Over 2M')
    .sector('Technology')
    .price('Over $50')
    .scan()

console.log(tickers) //=> ['AAPL', 'MSFT', 'IBM', ... ]
```
> By default, the client will fetch only the first page of tickers (~1000 per page). To fetch more pages, increase the `pageLimit` option. Set `pageLimit = 0` to fetch all available pages.

## API
See [docs/API.md](docs/API.md) file for the full list of available methods.

## Development
This library is built using [file generators](scripts/). They do most of the heavy lifting around here by generating the "filter" [methods](src/finviz.js) and [tests](tests/finviz.spec.js), the [typescript definitions](types/index.d.ts) and the [API documentation](docs/API.md) 🎉.

Any changes to this library, must be introduced to the file generators or the [`src/index.js`](src/index.js) and [`src/base.js`](src/base.js) files. Make sure to run `npm run build` and review the changes before submitting anything.

## License

This project is open-sourced software licensed under the [MIT license](./LICENSE).
