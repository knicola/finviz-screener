# API Docs

## Index
* [FinVizScreener](#FinVizScreener)
* [Type Definitions](#TypeDefinitions)


<br><a name="FinVizScreener"></a>

## FinVizScreener



* [FinVizScreener](#FinVizScreener)
    * [new FinVizScreener(options)](#new_FinVizScreener_new)
    * [fv.options](#FinVizScreener+options) : [<code>Options</code>](#Options)
    * [fv.scan()](#FinVizScreener+scan) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
    * [fv.exchange(filter)](#FinVizScreener+exchange) ⇒ <code>this</code>
    * [fv.index(filter)](#FinVizScreener+index) ⇒ <code>this</code>
    * [fv.sector(filter)](#FinVizScreener+sector) ⇒ <code>this</code>
    * [fv.industry(filter)](#FinVizScreener+industry) ⇒ <code>this</code>
    * [fv.country(filter)](#FinVizScreener+country) ⇒ <code>this</code>
    * [fv.marketCap(filter)](#FinVizScreener+marketCap) ⇒ <code>this</code>
    * [fv.pe(filter)](#FinVizScreener+pe) ⇒ <code>this</code>
    * [fv.forwardPe(filter)](#FinVizScreener+forwardPe) ⇒ <code>this</code>
    * [fv.peg(filter)](#FinVizScreener+peg) ⇒ <code>this</code>
    * [fv.ps(filter)](#FinVizScreener+ps) ⇒ <code>this</code>
    * [fv.pb(filter)](#FinVizScreener+pb) ⇒ <code>this</code>
    * [fv.priceCash(filter)](#FinVizScreener+priceCash) ⇒ <code>this</code>
    * [fv.priceFreeCashFlow(filter)](#FinVizScreener+priceFreeCashFlow) ⇒ <code>this</code>
    * [fv.epsGrowththisYear(filter)](#FinVizScreener+epsGrowththisYear) ⇒ <code>this</code>
    * [fv.epsGrowthnextYear(filter)](#FinVizScreener+epsGrowthnextYear) ⇒ <code>this</code>
    * [fv.epsGrowthpast5Years(filter)](#FinVizScreener+epsGrowthpast5Years) ⇒ <code>this</code>
    * [fv.epsGrowthnext5Years(filter)](#FinVizScreener+epsGrowthnext5Years) ⇒ <code>this</code>
    * [fv.salesGrowthpast5Years(filter)](#FinVizScreener+salesGrowthpast5Years) ⇒ <code>this</code>
    * [fv.epsGrowthqtrOverQtr(filter)](#FinVizScreener+epsGrowthqtrOverQtr) ⇒ <code>this</code>
    * [fv.salesGrowthqtrOverQtr(filter)](#FinVizScreener+salesGrowthqtrOverQtr) ⇒ <code>this</code>
    * [fv.earningsRevenueSurprise(filter)](#FinVizScreener+earningsRevenueSurprise) ⇒ <code>this</code>
    * [fv.dividendYield(filter)](#FinVizScreener+dividendYield) ⇒ <code>this</code>
    * [fv.returnOnAssets(filter)](#FinVizScreener+returnOnAssets) ⇒ <code>this</code>
    * [fv.returnOnEquity(filter)](#FinVizScreener+returnOnEquity) ⇒ <code>this</code>
    * [fv.returnOnInvestment(filter)](#FinVizScreener+returnOnInvestment) ⇒ <code>this</code>
    * [fv.currentRatio(filter)](#FinVizScreener+currentRatio) ⇒ <code>this</code>
    * [fv.quickRatio(filter)](#FinVizScreener+quickRatio) ⇒ <code>this</code>
    * [fv.ltDebtEquity(filter)](#FinVizScreener+ltDebtEquity) ⇒ <code>this</code>
    * [fv.debtEquity(filter)](#FinVizScreener+debtEquity) ⇒ <code>this</code>
    * [fv.grossMargin(filter)](#FinVizScreener+grossMargin) ⇒ <code>this</code>
    * [fv.operatingMargin(filter)](#FinVizScreener+operatingMargin) ⇒ <code>this</code>
    * [fv.netProfitMargin(filter)](#FinVizScreener+netProfitMargin) ⇒ <code>this</code>
    * [fv.payoutRatio(filter)](#FinVizScreener+payoutRatio) ⇒ <code>this</code>
    * [fv.insiderOwnership(filter)](#FinVizScreener+insiderOwnership) ⇒ <code>this</code>
    * [fv.insiderTransactions(filter)](#FinVizScreener+insiderTransactions) ⇒ <code>this</code>
    * [fv.institutionalOwnership(filter)](#FinVizScreener+institutionalOwnership) ⇒ <code>this</code>
    * [fv.institutionalTransactions(filter)](#FinVizScreener+institutionalTransactions) ⇒ <code>this</code>
    * [fv.floatShort(filter)](#FinVizScreener+floatShort) ⇒ <code>this</code>
    * [fv.analystRecom(filter)](#FinVizScreener+analystRecom) ⇒ <code>this</code>
    * [fv.optionShort(filter)](#FinVizScreener+optionShort) ⇒ <code>this</code>
    * [fv.earningsDate(filter)](#FinVizScreener+earningsDate) ⇒ <code>this</code>
    * [fv.performance(filter)](#FinVizScreener+performance) ⇒ <code>this</code>
    * [fv.performance2(filter)](#FinVizScreener+performance2) ⇒ <code>this</code>
    * [fv.volatility(filter)](#FinVizScreener+volatility) ⇒ <code>this</code>
    * [fv.rsi14(filter)](#FinVizScreener+rsi14) ⇒ <code>this</code>
    * [fv.gap(filter)](#FinVizScreener+gap) ⇒ <code>this</code>
    * [fv.twentyDaySimpleMovingAverage(filter)](#FinVizScreener+twentyDaySimpleMovingAverage) ⇒ <code>this</code>
    * [fv.fiftyDaySimpleMovingAverage(filter)](#FinVizScreener+fiftyDaySimpleMovingAverage) ⇒ <code>this</code>
    * [fv.twoHundredDaySimpleMovingAverage(filter)](#FinVizScreener+twoHundredDaySimpleMovingAverage) ⇒ <code>this</code>
    * [fv.change(filter)](#FinVizScreener+change) ⇒ <code>this</code>
    * [fv.changeFromOpen(filter)](#FinVizScreener+changeFromOpen) ⇒ <code>this</code>
    * [fv.twentyDayHighLow(filter)](#FinVizScreener+twentyDayHighLow) ⇒ <code>this</code>
    * [fv.fiftyDayHighLow(filter)](#FinVizScreener+fiftyDayHighLow) ⇒ <code>this</code>
    * [fv.fiftyTwoWeekHighLow(filter)](#FinVizScreener+fiftyTwoWeekHighLow) ⇒ <code>this</code>
    * [fv.allTimeHighLow(filter)](#FinVizScreener+allTimeHighLow) ⇒ <code>this</code>
    * [fv.pattern(filter)](#FinVizScreener+pattern) ⇒ <code>this</code>
    * [fv.candlestick(filter)](#FinVizScreener+candlestick) ⇒ <code>this</code>
    * [fv.beta(filter)](#FinVizScreener+beta) ⇒ <code>this</code>
    * [fv.averageTrueRange(filter)](#FinVizScreener+averageTrueRange) ⇒ <code>this</code>
    * [fv.averageVolume(filter)](#FinVizScreener+averageVolume) ⇒ <code>this</code>
    * [fv.relativeVolume(filter)](#FinVizScreener+relativeVolume) ⇒ <code>this</code>
    * [fv.currentVolume(filter)](#FinVizScreener+currentVolume) ⇒ <code>this</code>
    * [fv.price(filter)](#FinVizScreener+price) ⇒ <code>this</code>
    * [fv.targetPrice(filter)](#FinVizScreener+targetPrice) ⇒ <code>this</code>
    * [fv.ipoDate(filter)](#FinVizScreener+ipoDate) ⇒ <code>this</code>
    * [fv.sharesOutstanding(filter)](#FinVizScreener+sharesOutstanding) ⇒ <code>this</code>
    * [fv.float(filter)](#FinVizScreener+float) ⇒ <code>this</code>
    * [fv.singleCategory(filter)](#FinVizScreener+singleCategory) ⇒ <code>this</code>
    * [fv.assetType(filter)](#FinVizScreener+assetType) ⇒ <code>this</code>
    * [fv.sponsor(filter)](#FinVizScreener+sponsor) ⇒ <code>this</code>
    * [fv.netExpenseRatio(filter)](#FinVizScreener+netExpenseRatio) ⇒ <code>this</code>
    * [fv.netFundFlows(filter)](#FinVizScreener+netFundFlows) ⇒ <code>this</code>
    * [fv.annualizedReturn(filter)](#FinVizScreener+annualizedReturn) ⇒ <code>this</code>
    * [fv.tags(filter)](#FinVizScreener+tags) ⇒ <code>this</code>
    * [fv.signal(signal)](#FinVizScreener+signal) ⇒ <code>this</code>


<br><a name="new_FinVizScreener_new"></a>

### new FinVizScreener(options)

**Arguments**

- **options ([<code>Options</code>](#Options))** : Options



**Example**  
```js
const fv = new FinVizScreener()

const tickers = await fv
    .averageVolume('Over 2M')
    .sector('Technology')
    .price('Over $50')
    .scan()

console.log(tickers) //=> ['AAPL', 'MSFT', 'IBM', ... ]
```

<br><a name="FinVizScreener+options"></a>

### fv.options : [<code>Options</code>](#Options)

Client instance options



<br><a name="FinVizScreener+scan"></a>

### fv.scan() ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>

Scan for stocks.

**Returns**

- **<code>Promise.&lt;Array.&lt;string&gt;&gt;</code>** : List of stock tickers


<br><a name="FinVizScreener+exchange"></a>

### fv.exchange(filter) ⇒ <code>this</code>

Stock Exchange at which a stock is listed.

**Arguments**

- **filter (<code>&#x27;AMEX&#x27;</code> | <code>&#x27;NASDAQ&#x27;</code> | <code>&#x27;NYSE&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+index"></a>

### fv.index(filter) ⇒ <code>this</code>

A major index membership of a stock.

**Arguments**

- **filter (<code>&#x27;S&amp;P 500&#x27;</code> | <code>&#x27;NASDAQ 100&#x27;</code> | <code>&#x27;DJIA&#x27;</code> | <code>&#x27;RUSSELL 2000&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+sector"></a>

### fv.sector(filter) ⇒ <code>this</code>

The sector which a stock belongs to.

**Arguments**

- **filter (<code>&#x27;Basic Materials&#x27;</code> | <code>&#x27;Communication Services&#x27;</code> | <code>&#x27;Consumer Cyclical&#x27;</code> | <code>&#x27;Consumer Defensive&#x27;</code> | <code>&#x27;Energy&#x27;</code> | <code>&#x27;Financial&#x27;</code> | <code>&#x27;Healthcare&#x27;</code> | <code>&#x27;Industrials&#x27;</code> | <code>&#x27;Real Estate&#x27;</code> | <code>&#x27;Technology&#x27;</code> | <code>&#x27;Utilities&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+industry"></a>

### fv.industry(filter) ⇒ <code>this</code>

The industry which a stock belongs to.

**Arguments**

- **filter (<code>&#x27;Stocks only (ex-Funds)&#x27;</code> | <code>&#x27;Exchange Traded Fund&#x27;</code> | <code>&#x27;Advertising Agencies&#x27;</code> | <code>&#x27;Aerospace &amp; Defense&#x27;</code> | <code>&#x27;Agricultural Inputs&#x27;</code> | <code>&#x27;Airlines&#x27;</code> | <code>&#x27;Airports &amp; Air Services&#x27;</code> | <code>&#x27;Aluminum&#x27;</code> | <code>&#x27;Apparel Manufacturing&#x27;</code> | <code>&#x27;Apparel Retail&#x27;</code> | <code>&#x27;Asset Management&#x27;</code> | <code>&#x27;Auto Manufacturers&#x27;</code> | <code>&#x27;Auto Parts&#x27;</code> | <code>&#x27;Auto &amp; Truck Dealerships&#x27;</code> | <code>&#x27;Banks - Diversified&#x27;</code> | <code>&#x27;Banks - Regional&#x27;</code> | <code>&#x27;Beverages - Brewers&#x27;</code> | <code>&#x27;Beverages - Non-Alcoholic&#x27;</code> | <code>&#x27;Beverages - Wineries &amp; Distilleries&#x27;</code> | <code>&#x27;Biotechnology&#x27;</code> | <code>&#x27;Broadcasting&#x27;</code> | <code>&#x27;Building Materials&#x27;</code> | <code>&#x27;Building Products &amp; Equipment&#x27;</code> | <code>&#x27;Business Equipment &amp; Supplies&#x27;</code> | <code>&#x27;Capital Markets&#x27;</code> | <code>&#x27;Chemicals&#x27;</code> | <code>&#x27;Closed-End Fund - Debt&#x27;</code> | <code>&#x27;Closed-End Fund - Equity&#x27;</code> | <code>&#x27;Closed-End Fund - Foreign&#x27;</code> | <code>&#x27;Coking Coal&#x27;</code> | <code>&#x27;Communication Equipment&#x27;</code> | <code>&#x27;Computer Hardware&#x27;</code> | <code>&#x27;Confectioners&#x27;</code> | <code>&#x27;Conglomerates&#x27;</code> | <code>&#x27;Consulting Services&#x27;</code> | <code>&#x27;Consumer Electronics&#x27;</code> | <code>&#x27;Copper&#x27;</code> | <code>&#x27;Credit Services&#x27;</code> | <code>&#x27;Department Stores&#x27;</code> | <code>&#x27;Diagnostics &amp; Research&#x27;</code> | <code>&#x27;Discount Stores&#x27;</code> | <code>&#x27;Drug Manufacturers - General&#x27;</code> | <code>&#x27;Drug Manufacturers - Specialty &amp; Generic&#x27;</code> | <code>&#x27;Education &amp; Training Services&#x27;</code> | <code>&#x27;Electrical Equipment &amp; Parts&#x27;</code> | <code>&#x27;Electronic Components&#x27;</code> | <code>&#x27;Electronic Gaming &amp; Multimedia&#x27;</code> | <code>&#x27;Electronics &amp; Computer Distribution&#x27;</code> | <code>&#x27;Engineering &amp; Construction&#x27;</code> | <code>&#x27;Entertainment&#x27;</code> | <code>&#x27;Exchange Traded Fund&#x27;</code> | <code>&#x27;Farm &amp; Heavy Construction Machinery&#x27;</code> | <code>&#x27;Farm Products&#x27;</code> | <code>&#x27;Financial Conglomerates&#x27;</code> | <code>&#x27;Financial Data &amp; Stock Exchanges&#x27;</code> | <code>&#x27;Food Distribution&#x27;</code> | <code>&#x27;Footwear &amp; Accessories&#x27;</code> | <code>&#x27;Furnishings, Fixtures &amp; Appliances&#x27;</code> | <code>&#x27;Gambling&#x27;</code> | <code>&#x27;Gold&#x27;</code> | <code>&#x27;Grocery Stores&#x27;</code> | <code>&#x27;Healthcare Plans&#x27;</code> | <code>&#x27;Health Information Services&#x27;</code> | <code>&#x27;Home Improvement Retail&#x27;</code> | <code>&#x27;Household &amp; Personal Products&#x27;</code> | <code>&#x27;Industrial Distribution&#x27;</code> | <code>&#x27;Information Technology Services&#x27;</code> | <code>&#x27;Infrastructure Operations&#x27;</code> | <code>&#x27;Insurance Brokers&#x27;</code> | <code>&#x27;Insurance - Diversified&#x27;</code> | <code>&#x27;Insurance - Life&#x27;</code> | <code>&#x27;Insurance - Property &amp; Casualty&#x27;</code> | <code>&#x27;Insurance - Reinsurance&#x27;</code> | <code>&#x27;Insurance - Specialty&#x27;</code> | <code>&#x27;Integrated Freight &amp; Logistics&#x27;</code> | <code>&#x27;Internet Content &amp; Information&#x27;</code> | <code>&#x27;Internet Retail&#x27;</code> | <code>&#x27;Leisure&#x27;</code> | <code>&#x27;Lodging&#x27;</code> | <code>&#x27;Lumber &amp; Wood Production&#x27;</code> | <code>&#x27;Luxury Goods&#x27;</code> | <code>&#x27;Marine Shipping&#x27;</code> | <code>&#x27;Medical Care Facilities&#x27;</code> | <code>&#x27;Medical Devices&#x27;</code> | <code>&#x27;Medical Distribution&#x27;</code> | <code>&#x27;Medical Instruments &amp; Supplies&#x27;</code> | <code>&#x27;Metal Fabrication&#x27;</code> | <code>&#x27;Mortgage Finance&#x27;</code> | <code>&#x27;Oil &amp; Gas Drilling&#x27;</code> | <code>&#x27;Oil &amp; Gas E&amp;P&#x27;</code> | <code>&#x27;Oil &amp; Gas Equipment &amp; Services&#x27;</code> | <code>&#x27;Oil &amp; Gas Integrated&#x27;</code> | <code>&#x27;Oil &amp; Gas Midstream&#x27;</code> | <code>&#x27;Oil &amp; Gas Refining &amp; Marketing&#x27;</code> | <code>&#x27;Other Industrial Metals &amp; Mining&#x27;</code> | <code>&#x27;Other Precious Metals &amp; Mining&#x27;</code> | <code>&#x27;Packaged Foods&#x27;</code> | <code>&#x27;Packaging &amp; Containers&#x27;</code> | <code>&#x27;Paper &amp; Paper Products&#x27;</code> | <code>&#x27;Personal Services&#x27;</code> | <code>&#x27;Pharmaceutical Retailers&#x27;</code> | <code>&#x27;Pollution &amp; Treatment Controls&#x27;</code> | <code>&#x27;Publishing&#x27;</code> | <code>&#x27;Railroads&#x27;</code> | <code>&#x27;Real Estate - Development&#x27;</code> | <code>&#x27;Real Estate - Diversified&#x27;</code> | <code>&#x27;Real Estate Services&#x27;</code> | <code>&#x27;Recreational Vehicles&#x27;</code> | <code>&#x27;REIT - Diversified&#x27;</code> | <code>&#x27;REIT - Healthcare Facilities&#x27;</code> | <code>&#x27;REIT - Hotel &amp; Motel&#x27;</code> | <code>&#x27;REIT - Industrial&#x27;</code> | <code>&#x27;REIT - Mortgage&#x27;</code> | <code>&#x27;REIT - Office&#x27;</code> | <code>&#x27;REIT - Residential&#x27;</code> | <code>&#x27;REIT - Retail&#x27;</code> | <code>&#x27;REIT - Specialty&#x27;</code> | <code>&#x27;Rental &amp; Leasing Services&#x27;</code> | <code>&#x27;Residential Construction&#x27;</code> | <code>&#x27;Resorts &amp; Casinos&#x27;</code> | <code>&#x27;Restaurants&#x27;</code> | <code>&#x27;Scientific &amp; Technical Instruments&#x27;</code> | <code>&#x27;Security &amp; Protection Services&#x27;</code> | <code>&#x27;Semiconductor Equipment &amp; Materials&#x27;</code> | <code>&#x27;Semiconductors&#x27;</code> | <code>&#x27;Shell Companies&#x27;</code> | <code>&#x27;Silver&#x27;</code> | <code>&#x27;Software - Application&#x27;</code> | <code>&#x27;Software - Infrastructure&#x27;</code> | <code>&#x27;Solar&#x27;</code> | <code>&#x27;Specialty Business Services&#x27;</code> | <code>&#x27;Specialty Chemicals&#x27;</code> | <code>&#x27;Specialty Industrial Machinery&#x27;</code> | <code>&#x27;Specialty Retail&#x27;</code> | <code>&#x27;Staffing &amp; Employment Services&#x27;</code> | <code>&#x27;Steel&#x27;</code> | <code>&#x27;Telecom Services&#x27;</code> | <code>&#x27;Textile Manufacturing&#x27;</code> | <code>&#x27;Thermal Coal&#x27;</code> | <code>&#x27;Tobacco&#x27;</code> | <code>&#x27;Tools &amp; Accessories&#x27;</code> | <code>&#x27;Travel Services&#x27;</code> | <code>&#x27;Trucking&#x27;</code> | <code>&#x27;Uranium&#x27;</code> | <code>&#x27;Utilities - Diversified&#x27;</code> | <code>&#x27;Utilities - Independent Power Producers&#x27;</code> | <code>&#x27;Utilities - Regulated Electric&#x27;</code> | <code>&#x27;Utilities - Regulated Gas&#x27;</code> | <code>&#x27;Utilities - Regulated Water&#x27;</code> | <code>&#x27;Utilities - Renewable&#x27;</code> | <code>&#x27;Waste Management&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+country"></a>

### fv.country(filter) ⇒ <code>this</code>

The country where company of selected stock is based.

**Arguments**

- **filter (<code>&#x27;USA&#x27;</code> | <code>&#x27;Foreign (ex-USA)&#x27;</code> | <code>&#x27;Asia&#x27;</code> | <code>&#x27;Europe&#x27;</code> | <code>&#x27;Latin America&#x27;</code> | <code>&#x27;BRIC&#x27;</code> | <code>&#x27;Argentina&#x27;</code> | <code>&#x27;Australia&#x27;</code> | <code>&#x27;Bahamas&#x27;</code> | <code>&#x27;Belgium&#x27;</code> | <code>&#x27;BeNeLux&#x27;</code> | <code>&#x27;Bermuda&#x27;</code> | <code>&#x27;Brazil&#x27;</code> | <code>&#x27;Canada&#x27;</code> | <code>&#x27;Cayman Islands&#x27;</code> | <code>&#x27;Chile&#x27;</code> | <code>&#x27;China&#x27;</code> | <code>&#x27;China &amp; Hong Kong&#x27;</code> | <code>&#x27;Colombia&#x27;</code> | <code>&#x27;Cyprus&#x27;</code> | <code>&#x27;Denmark&#x27;</code> | <code>&#x27;Finland&#x27;</code> | <code>&#x27;France&#x27;</code> | <code>&#x27;Germany&#x27;</code> | <code>&#x27;Greece&#x27;</code> | <code>&#x27;Hong Kong&#x27;</code> | <code>&#x27;Hungary&#x27;</code> | <code>&#x27;Iceland&#x27;</code> | <code>&#x27;India&#x27;</code> | <code>&#x27;Indonesia&#x27;</code> | <code>&#x27;Ireland&#x27;</code> | <code>&#x27;Israel&#x27;</code> | <code>&#x27;Italy&#x27;</code> | <code>&#x27;Japan&#x27;</code> | <code>&#x27;Kazakhstan&#x27;</code> | <code>&#x27;Luxembourg&#x27;</code> | <code>&#x27;Malaysia&#x27;</code> | <code>&#x27;Malta&#x27;</code> | <code>&#x27;Mexico&#x27;</code> | <code>&#x27;Monaco&#x27;</code> | <code>&#x27;Netherlands&#x27;</code> | <code>&#x27;New Zealand&#x27;</code> | <code>&#x27;Norway&#x27;</code> | <code>&#x27;Panama&#x27;</code> | <code>&#x27;Peru&#x27;</code> | <code>&#x27;Philippines&#x27;</code> | <code>&#x27;Portugal&#x27;</code> | <code>&#x27;Russia&#x27;</code> | <code>&#x27;Singapore&#x27;</code> | <code>&#x27;South Africa&#x27;</code> | <code>&#x27;South Korea&#x27;</code> | <code>&#x27;Spain&#x27;</code> | <code>&#x27;Sweden&#x27;</code> | <code>&#x27;Switzerland&#x27;</code> | <code>&#x27;Taiwan&#x27;</code> | <code>&#x27;Turkey&#x27;</code> | <code>&#x27;United Arab Emirates&#x27;</code> | <code>&#x27;United Kingdom&#x27;</code> | <code>&#x27;Uruguay&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+marketCap"></a>

### fv.marketCap(filter) ⇒ <code>this</code>

Equals The total dollar market value of all of a company's outstanding shares.

**Arguments**

- **filter (<code>&#x27;Mega ($200bln and more)&#x27;</code> | <code>&#x27;Large ($10bln to $200bln)&#x27;</code> | <code>&#x27;Mid ($2bln to $10bln)&#x27;</code> | <code>&#x27;Small ($300mln to $2bln)&#x27;</code> | <code>&#x27;Micro ($50mln to $300mln)&#x27;</code> | <code>&#x27;Nano (under $50mln)&#x27;</code> | <code>&#x27;+Large (over $10bln)&#x27;</code> | <code>&#x27;+Mid (over $2bln)&#x27;</code> | <code>&#x27;+Small (over $300mln)&#x27;</code> | <code>&#x27;+Micro (over $50mln)&#x27;</code> | <code>&#x27;-Large (under $200bln)&#x27;</code> | <code>&#x27;-Mid (under $10bln)&#x27;</code> | <code>&#x27;-Small (under $2bln)&#x27;</code> | <code>&#x27;-Micro (under $300mln)&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+pe"></a>

### fv.pe(filter) ⇒ <code>this</code>

A valuation ratio of a company's current share price compared to its per-share earnings (ttm).

**Arguments**

- **filter (<code>&#x27;Low (&lt;15)&#x27;</code> | <code>&#x27;Profitable (&gt;0)&#x27;</code> | <code>&#x27;High (&gt;50)&#x27;</code> | <code>&#x27;Under 5&#x27;</code> | <code>&#x27;Under 10&#x27;</code> | <code>&#x27;Under 15&#x27;</code> | <code>&#x27;Under 20&#x27;</code> | <code>&#x27;Under 25&#x27;</code> | <code>&#x27;Under 30&#x27;</code> | <code>&#x27;Under 35&#x27;</code> | <code>&#x27;Under 40&#x27;</code> | <code>&#x27;Under 45&#x27;</code> | <code>&#x27;Under 50&#x27;</code> | <code>&#x27;Over 5&#x27;</code> | <code>&#x27;Over 10&#x27;</code> | <code>&#x27;Over 15&#x27;</code> | <code>&#x27;Over 20&#x27;</code> | <code>&#x27;Over 25&#x27;</code> | <code>&#x27;Over 30&#x27;</code> | <code>&#x27;Over 35&#x27;</code> | <code>&#x27;Over 40&#x27;</code> | <code>&#x27;Over 45&#x27;</code> | <code>&#x27;Over 50&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+forwardPe"></a>

### fv.forwardPe(filter) ⇒ <code>this</code>

A measure of the price-to-earnings ratio using forecasted earnings for the P/E calculation. Value for next fiscal year.

**Arguments**

- **filter (<code>&#x27;Low (&lt;15)&#x27;</code> | <code>&#x27;Profitable (&gt;0)&#x27;</code> | <code>&#x27;High (&gt;50)&#x27;</code> | <code>&#x27;Under 5&#x27;</code> | <code>&#x27;Under 10&#x27;</code> | <code>&#x27;Under 15&#x27;</code> | <code>&#x27;Under 20&#x27;</code> | <code>&#x27;Under 25&#x27;</code> | <code>&#x27;Under 30&#x27;</code> | <code>&#x27;Under 35&#x27;</code> | <code>&#x27;Under 40&#x27;</code> | <code>&#x27;Under 45&#x27;</code> | <code>&#x27;Under 50&#x27;</code> | <code>&#x27;Over 5&#x27;</code> | <code>&#x27;Over 10&#x27;</code> | <code>&#x27;Over 15&#x27;</code> | <code>&#x27;Over 20&#x27;</code> | <code>&#x27;Over 25&#x27;</code> | <code>&#x27;Over 30&#x27;</code> | <code>&#x27;Over 35&#x27;</code> | <code>&#x27;Over 40&#x27;</code> | <code>&#x27;Over 45&#x27;</code> | <code>&#x27;Over 50&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+peg"></a>

### fv.peg(filter) ⇒ <code>this</code>

A ratio used to determine a stock's value while taking into account earnings growth.

**Arguments**

- **filter (<code>&#x27;Low (&lt;1)&#x27;</code> | <code>&#x27;High (&gt;2)&#x27;</code> | <code>&#x27;Under 1&#x27;</code> | <code>&#x27;Under 2&#x27;</code> | <code>&#x27;Under 3&#x27;</code> | <code>&#x27;Over 1&#x27;</code> | <code>&#x27;Over 2&#x27;</code> | <code>&#x27;Over 3&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+ps"></a>

### fv.ps(filter) ⇒ <code>this</code>

P/S number reflects the value placed on sales by the market. It is calculated by dividing the current closing price of the stock by the dollar-sales value per share.

**Arguments**

- **filter (<code>&#x27;Low (&lt;1)&#x27;</code> | <code>&#x27;High (&gt;10)&#x27;</code> | <code>&#x27;Under 1&#x27;</code> | <code>&#x27;Under 2&#x27;</code> | <code>&#x27;Under 3&#x27;</code> | <code>&#x27;Under 4&#x27;</code> | <code>&#x27;Under 5&#x27;</code> | <code>&#x27;Under 6&#x27;</code> | <code>&#x27;Under 7&#x27;</code> | <code>&#x27;Under 8&#x27;</code> | <code>&#x27;Under 9&#x27;</code> | <code>&#x27;Under 10&#x27;</code> | <code>&#x27;Over 1&#x27;</code> | <code>&#x27;Over 2&#x27;</code> | <code>&#x27;Over 3&#x27;</code> | <code>&#x27;Over 4&#x27;</code> | <code>&#x27;Over 5&#x27;</code> | <code>&#x27;Over 6&#x27;</code> | <code>&#x27;Over 7&#x27;</code> | <code>&#x27;Over 8&#x27;</code> | <code>&#x27;Over 9&#x27;</code> | <code>&#x27;Over 10&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+pb"></a>

### fv.pb(filter) ⇒ <code>this</code>

A ratio used to compare a stock's market value to its book value. It is calculated by dividing the current closing price of the stock by the latest quarter's book value per share.

**Arguments**

- **filter (<code>&#x27;Low (&lt;1)&#x27;</code> | <code>&#x27;High (&gt;5)&#x27;</code> | <code>&#x27;Under 1&#x27;</code> | <code>&#x27;Under 2&#x27;</code> | <code>&#x27;Under 3&#x27;</code> | <code>&#x27;Under 4&#x27;</code> | <code>&#x27;Under 5&#x27;</code> | <code>&#x27;Under 6&#x27;</code> | <code>&#x27;Under 7&#x27;</code> | <code>&#x27;Under 8&#x27;</code> | <code>&#x27;Under 9&#x27;</code> | <code>&#x27;Under 10&#x27;</code> | <code>&#x27;Over 1&#x27;</code> | <code>&#x27;Over 2&#x27;</code> | <code>&#x27;Over 3&#x27;</code> | <code>&#x27;Over 4&#x27;</code> | <code>&#x27;Over 5&#x27;</code> | <code>&#x27;Over 6&#x27;</code> | <code>&#x27;Over 7&#x27;</code> | <code>&#x27;Over 8&#x27;</code> | <code>&#x27;Over 9&#x27;</code> | <code>&#x27;Over 10&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+priceCash"></a>

### fv.priceCash(filter) ⇒ <code>this</code>

A ratio used to compare a stock's market value to its cash assets. It is calculated by dividing the current closing price of the stock by the latest quarter's cash per share.

**Arguments**

- **filter (<code>&#x27;Low (&lt;3)&#x27;</code> | <code>&#x27;High (&gt;50)&#x27;</code> | <code>&#x27;Under 1&#x27;</code> | <code>&#x27;Under 2&#x27;</code> | <code>&#x27;Under 3&#x27;</code> | <code>&#x27;Under 4&#x27;</code> | <code>&#x27;Under 5&#x27;</code> | <code>&#x27;Under 6&#x27;</code> | <code>&#x27;Under 7&#x27;</code> | <code>&#x27;Under 8&#x27;</code> | <code>&#x27;Under 9&#x27;</code> | <code>&#x27;Under 10&#x27;</code> | <code>&#x27;Over 1&#x27;</code> | <code>&#x27;Over 2&#x27;</code> | <code>&#x27;Over 3&#x27;</code> | <code>&#x27;Over 4&#x27;</code> | <code>&#x27;Over 5&#x27;</code> | <code>&#x27;Over 6&#x27;</code> | <code>&#x27;Over 7&#x27;</code> | <code>&#x27;Over 8&#x27;</code> | <code>&#x27;Over 9&#x27;</code> | <code>&#x27;Over 10&#x27;</code> | <code>&#x27;Over 20&#x27;</code> | <code>&#x27;Over 30&#x27;</code> | <code>&#x27;Over 40&#x27;</code> | <code>&#x27;Over 50&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+priceFreeCashFlow"></a>

### fv.priceFreeCashFlow(filter) ⇒ <code>this</code>

A valuation metric that compares a company's market price to its level of annual free cash flow.

**Arguments**

- **filter (<code>&#x27;Low (&lt;15)&#x27;</code> | <code>&#x27;High (&gt;50)&#x27;</code> | <code>&#x27;Under 5&#x27;</code> | <code>&#x27;Under 10&#x27;</code> | <code>&#x27;Under 15&#x27;</code> | <code>&#x27;Under 20&#x27;</code> | <code>&#x27;Under 25&#x27;</code> | <code>&#x27;Under 30&#x27;</code> | <code>&#x27;Under 35&#x27;</code> | <code>&#x27;Under 40&#x27;</code> | <code>&#x27;Under 45&#x27;</code> | <code>&#x27;Under 50&#x27;</code> | <code>&#x27;Under 60&#x27;</code> | <code>&#x27;Under 70&#x27;</code> | <code>&#x27;Under 80&#x27;</code> | <code>&#x27;Under 90&#x27;</code> | <code>&#x27;Under 100&#x27;</code> | <code>&#x27;Over 5&#x27;</code> | <code>&#x27;Over 10&#x27;</code> | <code>&#x27;Over 15&#x27;</code> | <code>&#x27;Over 20&#x27;</code> | <code>&#x27;Over 25&#x27;</code> | <code>&#x27;Over 30&#x27;</code> | <code>&#x27;Over 35&#x27;</code> | <code>&#x27;Over 40&#x27;</code> | <code>&#x27;Over 45&#x27;</code> | <code>&#x27;Over 50&#x27;</code> | <code>&#x27;Over 60&#x27;</code> | <code>&#x27;Over 70&#x27;</code> | <code>&#x27;Over 80&#x27;</code> | <code>&#x27;Over 90&#x27;</code> | <code>&#x27;Over 100&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+epsGrowththisYear"></a>

### fv.epsGrowththisYear(filter) ⇒ <code>this</code>

EPS is the portion of a company's profit allocated to each outstanding share of common stock. EPS serves as an indicator of a company's profitability. Value for current fiscal year.

**Arguments**

- **filter (<code>&#x27;Negative (&lt;0%)&#x27;</code> | <code>&#x27;Positive (&gt;0%)&#x27;</code> | <code>&#x27;Positive Low (0-10%)&#x27;</code> | <code>&#x27;High (&gt;25%)&#x27;</code> | <code>&#x27;Under 5%&#x27;</code> | <code>&#x27;Under 10%&#x27;</code> | <code>&#x27;Under 15%&#x27;</code> | <code>&#x27;Under 20%&#x27;</code> | <code>&#x27;Under 25%&#x27;</code> | <code>&#x27;Under 30%&#x27;</code> | <code>&#x27;Over 5%&#x27;</code> | <code>&#x27;Over 10%&#x27;</code> | <code>&#x27;Over 15%&#x27;</code> | <code>&#x27;Over 20%&#x27;</code> | <code>&#x27;Over 25%&#x27;</code> | <code>&#x27;Over 30%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+epsGrowthnextYear"></a>

### fv.epsGrowthnextYear(filter) ⇒ <code>this</code>

EPS is the portion of a company's profit allocated to each outstanding share of common stock. EPS serves as an indicator of a company's profitability. Estimate for next fiscal year.

**Arguments**

- **filter (<code>&#x27;Negative (&lt;0%)&#x27;</code> | <code>&#x27;Positive (&gt;0%)&#x27;</code> | <code>&#x27;Positive Low (0-10%)&#x27;</code> | <code>&#x27;High (&gt;25%)&#x27;</code> | <code>&#x27;Under 5%&#x27;</code> | <code>&#x27;Under 10%&#x27;</code> | <code>&#x27;Under 15%&#x27;</code> | <code>&#x27;Under 20%&#x27;</code> | <code>&#x27;Under 25%&#x27;</code> | <code>&#x27;Under 30%&#x27;</code> | <code>&#x27;Over 5%&#x27;</code> | <code>&#x27;Over 10%&#x27;</code> | <code>&#x27;Over 15%&#x27;</code> | <code>&#x27;Over 20%&#x27;</code> | <code>&#x27;Over 25%&#x27;</code> | <code>&#x27;Over 30%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+epsGrowthpast5Years"></a>

### fv.epsGrowthpast5Years(filter) ⇒ <code>this</code>

EPS is the portion of a company's profit allocated to each outstanding share of common stock. EPS serves as an indicator of a company's profitability. Annual growth over past 5 years.

**Arguments**

- **filter (<code>&#x27;Negative (&lt;0%)&#x27;</code> | <code>&#x27;Positive (&gt;0%)&#x27;</code> | <code>&#x27;Positive Low (0-10%)&#x27;</code> | <code>&#x27;High (&gt;25%)&#x27;</code> | <code>&#x27;Under 5%&#x27;</code> | <code>&#x27;Under 10%&#x27;</code> | <code>&#x27;Under 15%&#x27;</code> | <code>&#x27;Under 20%&#x27;</code> | <code>&#x27;Under 25%&#x27;</code> | <code>&#x27;Under 30%&#x27;</code> | <code>&#x27;Over 5%&#x27;</code> | <code>&#x27;Over 10%&#x27;</code> | <code>&#x27;Over 15%&#x27;</code> | <code>&#x27;Over 20%&#x27;</code> | <code>&#x27;Over 25%&#x27;</code> | <code>&#x27;Over 30%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+epsGrowthnext5Years"></a>

### fv.epsGrowthnext5Years(filter) ⇒ <code>this</code>

EPS is the portion of a company's profit allocated to each outstanding share of common stock. EPS serves as an indicator of a company's profitability. Long term annual growth estimate.

**Arguments**

- **filter (<code>&#x27;Negative (&lt;0%)&#x27;</code> | <code>&#x27;Positive (&gt;0%)&#x27;</code> | <code>&#x27;Positive Low (&lt;10%)&#x27;</code> | <code>&#x27;High (&gt;25%)&#x27;</code> | <code>&#x27;Under 5%&#x27;</code> | <code>&#x27;Under 10%&#x27;</code> | <code>&#x27;Under 15%&#x27;</code> | <code>&#x27;Under 20%&#x27;</code> | <code>&#x27;Under 25%&#x27;</code> | <code>&#x27;Under 30%&#x27;</code> | <code>&#x27;Over 5%&#x27;</code> | <code>&#x27;Over 10%&#x27;</code> | <code>&#x27;Over 15%&#x27;</code> | <code>&#x27;Over 20%&#x27;</code> | <code>&#x27;Over 25%&#x27;</code> | <code>&#x27;Over 30%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+salesGrowthpast5Years"></a>

### fv.salesGrowthpast5Years(filter) ⇒ <code>this</code>

Annual growth over past 5 years.

**Arguments**

- **filter (<code>&#x27;Negative (&lt;0%)&#x27;</code> | <code>&#x27;Positive (&gt;0%)&#x27;</code> | <code>&#x27;Positive Low (0-10%)&#x27;</code> | <code>&#x27;High (&gt;25%)&#x27;</code> | <code>&#x27;Under 5%&#x27;</code> | <code>&#x27;Under 10%&#x27;</code> | <code>&#x27;Under 15%&#x27;</code> | <code>&#x27;Under 20%&#x27;</code> | <code>&#x27;Under 25%&#x27;</code> | <code>&#x27;Under 30%&#x27;</code> | <code>&#x27;Over 5%&#x27;</code> | <code>&#x27;Over 10%&#x27;</code> | <code>&#x27;Over 15%&#x27;</code> | <code>&#x27;Over 20%&#x27;</code> | <code>&#x27;Over 25%&#x27;</code> | <code>&#x27;Over 30%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+epsGrowthqtrOverQtr"></a>

### fv.epsGrowthqtrOverQtr(filter) ⇒ <code>this</code>

EPS is the portion of a company's profit allocated to each outstanding share of common stock. EPS serves as an indicator of a company's profitability. Quarter over quarter growth.

**Arguments**

- **filter (<code>&#x27;Negative (&lt;0%)&#x27;</code> | <code>&#x27;Positive (&gt;0%)&#x27;</code> | <code>&#x27;Positive Low (0-10%)&#x27;</code> | <code>&#x27;High (&gt;25%)&#x27;</code> | <code>&#x27;Under 5%&#x27;</code> | <code>&#x27;Under 10%&#x27;</code> | <code>&#x27;Under 15%&#x27;</code> | <code>&#x27;Under 20%&#x27;</code> | <code>&#x27;Under 25%&#x27;</code> | <code>&#x27;Under 30%&#x27;</code> | <code>&#x27;Over 5%&#x27;</code> | <code>&#x27;Over 10%&#x27;</code> | <code>&#x27;Over 15%&#x27;</code> | <code>&#x27;Over 20%&#x27;</code> | <code>&#x27;Over 25%&#x27;</code> | <code>&#x27;Over 30%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+salesGrowthqtrOverQtr"></a>

### fv.salesGrowthqtrOverQtr(filter) ⇒ <code>this</code>

Quarter over quarter growth compared on a year over year basis.

**Arguments**

- **filter (<code>&#x27;Negative (&lt;0%)&#x27;</code> | <code>&#x27;Positive (&gt;0%)&#x27;</code> | <code>&#x27;Positive Low (0-10%)&#x27;</code> | <code>&#x27;High (&gt;25%)&#x27;</code> | <code>&#x27;Under 5%&#x27;</code> | <code>&#x27;Under 10%&#x27;</code> | <code>&#x27;Under 15%&#x27;</code> | <code>&#x27;Under 20%&#x27;</code> | <code>&#x27;Under 25%&#x27;</code> | <code>&#x27;Under 30%&#x27;</code> | <code>&#x27;Over 5%&#x27;</code> | <code>&#x27;Over 10%&#x27;</code> | <code>&#x27;Over 15%&#x27;</code> | <code>&#x27;Over 20%&#x27;</code> | <code>&#x27;Over 25%&#x27;</code> | <code>&#x27;Over 30%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+earningsRevenueSurprise"></a>

### fv.earningsRevenueSurprise(filter) ⇒ <code>this</code>

Company's reported earnings/revenue are above or below analysts' expectations.

**Arguments**

- **filter (<code>&#x27;Both positive (&gt;0%)&#x27;</code> | <code>&#x27;Both met (0%)&#x27;</code> | <code>&#x27;Both negative (&lt;0%)&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+dividendYield"></a>

### fv.dividendYield(filter) ⇒ <code>this</code>

The dividend yield equals the annual dividend per share divided by the stock’s price. This measurement tells what percentage return a company pays out to shareholders in the form of dividends. If there is no forward dividend estimate available, trailing twelve month (TTM) value is used.

**Arguments**

- **filter (<code>&#x27;None (0%)&#x27;</code> | <code>&#x27;Positive (&gt;0%)&#x27;</code> | <code>&#x27;High (&gt;5%)&#x27;</code> | <code>&#x27;Very High (&gt;10%)&#x27;</code> | <code>&#x27;Over 1%&#x27;</code> | <code>&#x27;Over 2%&#x27;</code> | <code>&#x27;Over 3%&#x27;</code> | <code>&#x27;Over 4%&#x27;</code> | <code>&#x27;Over 5%&#x27;</code> | <code>&#x27;Over 6%&#x27;</code> | <code>&#x27;Over 7%&#x27;</code> | <code>&#x27;Over 8%&#x27;</code> | <code>&#x27;Over 9%&#x27;</code> | <code>&#x27;Over 10%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+returnOnAssets"></a>

### fv.returnOnAssets(filter) ⇒ <code>this</code>

An indicator of how profitable a company is relative to its total assets. ROA gives an idea as to how efficient management is at using its assets to generate earnings. Calculated by dividing a company's annual earnings by its total assets, ROA is displayed as a percentage.

**Arguments**

- **filter (<code>&#x27;Positive (&gt;0%)&#x27;</code> | <code>&#x27;Negative (&lt;0%)&#x27;</code> | <code>&#x27;Very Positive (&gt;15%)&#x27;</code> | <code>&#x27;Very Negative (&lt;-15%)&#x27;</code> | <code>&#x27;Under -50%&#x27;</code> | <code>&#x27;Under -45%&#x27;</code> | <code>&#x27;Under -40%&#x27;</code> | <code>&#x27;Under -35%&#x27;</code> | <code>&#x27;Under -30%&#x27;</code> | <code>&#x27;Under -25%&#x27;</code> | <code>&#x27;Under -20%&#x27;</code> | <code>&#x27;Under -15%&#x27;</code> | <code>&#x27;Under -10%&#x27;</code> | <code>&#x27;Under -5%&#x27;</code> | <code>&#x27;Over +5%&#x27;</code> | <code>&#x27;Over +10%&#x27;</code> | <code>&#x27;Over +15%&#x27;</code> | <code>&#x27;Over +20%&#x27;</code> | <code>&#x27;Over +25%&#x27;</code> | <code>&#x27;Over +30%&#x27;</code> | <code>&#x27;Over +35%&#x27;</code> | <code>&#x27;Over +40%&#x27;</code> | <code>&#x27;Over +45%&#x27;</code> | <code>&#x27;Over +50%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+returnOnEquity"></a>

### fv.returnOnEquity(filter) ⇒ <code>this</code>

A measure of a corporation's profitability that reveals how much profit a company generates with the money shareholders have invested. Calculated as Net Income / Shareholder's Equity.

**Arguments**

- **filter (<code>&#x27;Positive (&gt;0%)&#x27;</code> | <code>&#x27;Negative (&lt;0%)&#x27;</code> | <code>&#x27;Very Positive (&gt;30%)&#x27;</code> | <code>&#x27;Very Negative (&lt;-15%)&#x27;</code> | <code>&#x27;Under -50%&#x27;</code> | <code>&#x27;Under -45%&#x27;</code> | <code>&#x27;Under -40%&#x27;</code> | <code>&#x27;Under -35%&#x27;</code> | <code>&#x27;Under -30%&#x27;</code> | <code>&#x27;Under -25%&#x27;</code> | <code>&#x27;Under -20%&#x27;</code> | <code>&#x27;Under -15%&#x27;</code> | <code>&#x27;Under -10%&#x27;</code> | <code>&#x27;Under -5%&#x27;</code> | <code>&#x27;Over +5%&#x27;</code> | <code>&#x27;Over +10%&#x27;</code> | <code>&#x27;Over +15%&#x27;</code> | <code>&#x27;Over +20%&#x27;</code> | <code>&#x27;Over +25%&#x27;</code> | <code>&#x27;Over +30%&#x27;</code> | <code>&#x27;Over +35%&#x27;</code> | <code>&#x27;Over +40%&#x27;</code> | <code>&#x27;Over +45%&#x27;</code> | <code>&#x27;Over +50%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+returnOnInvestment"></a>

### fv.returnOnInvestment(filter) ⇒ <code>this</code>

Performance measure used to evaluate the efficiency of an investment or to compare the efficiency of a number of different investments. To calculate ROI, the benefit (return) of an investment is divided by the cost of the investment: (Gain from Investment - Cost of Investment) / Cost of Investment.

**Arguments**

- **filter (<code>&#x27;Positive (&gt;0%)&#x27;</code> | <code>&#x27;Negative (&lt;0%)&#x27;</code> | <code>&#x27;Very Positive (&gt;25%)&#x27;</code> | <code>&#x27;Very Negative (&lt;-10%)&#x27;</code> | <code>&#x27;Under -50%&#x27;</code> | <code>&#x27;Under -45%&#x27;</code> | <code>&#x27;Under -40%&#x27;</code> | <code>&#x27;Under -35%&#x27;</code> | <code>&#x27;Under -30%&#x27;</code> | <code>&#x27;Under -25%&#x27;</code> | <code>&#x27;Under -20%&#x27;</code> | <code>&#x27;Under -15%&#x27;</code> | <code>&#x27;Under -10%&#x27;</code> | <code>&#x27;Under -5%&#x27;</code> | <code>&#x27;Over +5%&#x27;</code> | <code>&#x27;Over +10%&#x27;</code> | <code>&#x27;Over +15%&#x27;</code> | <code>&#x27;Over +20%&#x27;</code> | <code>&#x27;Over +25%&#x27;</code> | <code>&#x27;Over +30%&#x27;</code> | <code>&#x27;Over +35%&#x27;</code> | <code>&#x27;Over +40%&#x27;</code> | <code>&#x27;Over +45%&#x27;</code> | <code>&#x27;Over +50%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+currentRatio"></a>

### fv.currentRatio(filter) ⇒ <code>this</code>

A liquidity ratio that measures a company's ability to pay short-term obligations. Calculated as Current Assets / Current Liabilities.

**Arguments**

- **filter (<code>&#x27;High (&gt;3)&#x27;</code> | <code>&#x27;Low (&lt;1)&#x27;</code> | <code>&#x27;Under 1&#x27;</code> | <code>&#x27;Under 0.5&#x27;</code> | <code>&#x27;Over 0.5&#x27;</code> | <code>&#x27;Over 1&#x27;</code> | <code>&#x27;Over 1.5&#x27;</code> | <code>&#x27;Over 2&#x27;</code> | <code>&#x27;Over 3&#x27;</code> | <code>&#x27;Over 4&#x27;</code> | <code>&#x27;Over 5&#x27;</code> | <code>&#x27;Over 10&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+quickRatio"></a>

### fv.quickRatio(filter) ⇒ <code>this</code>

An indicator of a company's short-term liquidity. The quick ratio measures a company's ability to meet its short-term obligations with its most liquid assets. The higher the quick ratio, the better the position of the company. Calculated as (Current Assets - Inventories) / Current Liabilities.

**Arguments**

- **filter (<code>&#x27;High (&gt;3)&#x27;</code> | <code>&#x27;Low (&lt;0.5)&#x27;</code> | <code>&#x27;Under 1&#x27;</code> | <code>&#x27;Under 0.5&#x27;</code> | <code>&#x27;Over 0.5&#x27;</code> | <code>&#x27;Over 1&#x27;</code> | <code>&#x27;Over 1.5&#x27;</code> | <code>&#x27;Over 2&#x27;</code> | <code>&#x27;Over 3&#x27;</code> | <code>&#x27;Over 4&#x27;</code> | <code>&#x27;Over 5&#x27;</code> | <code>&#x27;Over 10&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+ltDebtEquity"></a>

### fv.ltDebtEquity(filter) ⇒ <code>this</code>

A measure of a company's financial leverage calculated by dividing its long term debt by stockholders' equity. It indicates what proportion of equity and debt the company is using to finance its assets.

**Arguments**

- **filter (<code>&#x27;High (&gt;0.5)&#x27;</code> | <code>&#x27;Low (&lt;0.1)&#x27;</code> | <code>&#x27;Under 1&#x27;</code> | <code>&#x27;Under 0.9&#x27;</code> | <code>&#x27;Under 0.8&#x27;</code> | <code>&#x27;Under 0.7&#x27;</code> | <code>&#x27;Under 0.6&#x27;</code> | <code>&#x27;Under 0.5&#x27;</code> | <code>&#x27;Under 0.4&#x27;</code> | <code>&#x27;Under 0.3&#x27;</code> | <code>&#x27;Under 0.2&#x27;</code> | <code>&#x27;Under 0.1&#x27;</code> | <code>&#x27;Over 0.1&#x27;</code> | <code>&#x27;Over 0.2&#x27;</code> | <code>&#x27;Over 0.3&#x27;</code> | <code>&#x27;Over 0.4&#x27;</code> | <code>&#x27;Over 0.5&#x27;</code> | <code>&#x27;Over 0.6&#x27;</code> | <code>&#x27;Over 0.7&#x27;</code> | <code>&#x27;Over 0.8&#x27;</code> | <code>&#x27;Over 0.9&#x27;</code> | <code>&#x27;Over 1&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+debtEquity"></a>

### fv.debtEquity(filter) ⇒ <code>this</code>

A measure of a company's financial leverage calculated by dividing its liabilities by stockholders' equity. It indicates what proportion of equity and debt the company is using to finance its assets.

**Arguments**

- **filter (<code>&#x27;High (&gt;0.5)&#x27;</code> | <code>&#x27;Low (&lt;0.1)&#x27;</code> | <code>&#x27;Under 1&#x27;</code> | <code>&#x27;Under 0.9&#x27;</code> | <code>&#x27;Under 0.8&#x27;</code> | <code>&#x27;Under 0.7&#x27;</code> | <code>&#x27;Under 0.6&#x27;</code> | <code>&#x27;Under 0.5&#x27;</code> | <code>&#x27;Under 0.4&#x27;</code> | <code>&#x27;Under 0.3&#x27;</code> | <code>&#x27;Under 0.2&#x27;</code> | <code>&#x27;Under 0.1&#x27;</code> | <code>&#x27;Over 0.1&#x27;</code> | <code>&#x27;Over 0.2&#x27;</code> | <code>&#x27;Over 0.3&#x27;</code> | <code>&#x27;Over 0.4&#x27;</code> | <code>&#x27;Over 0.5&#x27;</code> | <code>&#x27;Over 0.6&#x27;</code> | <code>&#x27;Over 0.7&#x27;</code> | <code>&#x27;Over 0.8&#x27;</code> | <code>&#x27;Over 0.9&#x27;</code> | <code>&#x27;Over 1&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+grossMargin"></a>

### fv.grossMargin(filter) ⇒ <code>this</code>

A company's total sales revenue minus its cost of goods sold, divided by the total sales revenue, expressed as a percentage. The gross margin represents the percent of total sales revenue that the company retains after incurring the direct costs associated with producing the goods and services sold by a company. The higher the percentage, the more the company retains on each dollar of sales to service its other costs and obligations.

**Arguments**

- **filter (<code>&#x27;Positive (&gt;0%)&#x27;</code> | <code>&#x27;Negative (&lt;0%)&#x27;</code> | <code>&#x27;High (&gt;50%)&#x27;</code> | <code>&#x27;Under 90%&#x27;</code> | <code>&#x27;Under 80%&#x27;</code> | <code>&#x27;Under 70%&#x27;</code> | <code>&#x27;Under 60%&#x27;</code> | <code>&#x27;Under 50%&#x27;</code> | <code>&#x27;Under 45%&#x27;</code> | <code>&#x27;Under 40%&#x27;</code> | <code>&#x27;Under 35%&#x27;</code> | <code>&#x27;Under 30%&#x27;</code> | <code>&#x27;Under 25%&#x27;</code> | <code>&#x27;Under 20%&#x27;</code> | <code>&#x27;Under 15%&#x27;</code> | <code>&#x27;Under 10%&#x27;</code> | <code>&#x27;Under 5%&#x27;</code> | <code>&#x27;Under 0%&#x27;</code> | <code>&#x27;Under -10%&#x27;</code> | <code>&#x27;Under -20%&#x27;</code> | <code>&#x27;Under -30%&#x27;</code> | <code>&#x27;Under -50%&#x27;</code> | <code>&#x27;Under -70%&#x27;</code> | <code>&#x27;Under -100%&#x27;</code> | <code>&#x27;Over 0%&#x27;</code> | <code>&#x27;Over 5%&#x27;</code> | <code>&#x27;Over 10%&#x27;</code> | <code>&#x27;Over 15%&#x27;</code> | <code>&#x27;Over 20%&#x27;</code> | <code>&#x27;Over 25%&#x27;</code> | <code>&#x27;Over 30%&#x27;</code> | <code>&#x27;Over 35%&#x27;</code> | <code>&#x27;Over 40%&#x27;</code> | <code>&#x27;Over 45%&#x27;</code> | <code>&#x27;Over 50%&#x27;</code> | <code>&#x27;Over 60%&#x27;</code> | <code>&#x27;Over 70%&#x27;</code> | <code>&#x27;Over 80%&#x27;</code> | <code>&#x27;Over 90%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+operatingMargin"></a>

### fv.operatingMargin(filter) ⇒ <code>this</code>

Operating margin is a measurement of what proportion of a company's revenue is left over after paying for variable costs of production such as wages, raw materials, etc. A healthy operating margin is required for a company to be able to pay for its fixed costs, such as interest on debt. Calculated as Operating Income / Net Sales.

**Arguments**

- **filter (<code>&#x27;Positive (&gt;0%)&#x27;</code> | <code>&#x27;Negative (&lt;0%)&#x27;</code> | <code>&#x27;Very Negative (&lt;-20%)&#x27;</code> | <code>&#x27;High (&gt;25%)&#x27;</code> | <code>&#x27;Under 90%&#x27;</code> | <code>&#x27;Under 80%&#x27;</code> | <code>&#x27;Under 70%&#x27;</code> | <code>&#x27;Under 60%&#x27;</code> | <code>&#x27;Under 50%&#x27;</code> | <code>&#x27;Under 45%&#x27;</code> | <code>&#x27;Under 40%&#x27;</code> | <code>&#x27;Under 35%&#x27;</code> | <code>&#x27;Under 30%&#x27;</code> | <code>&#x27;Under 25%&#x27;</code> | <code>&#x27;Under 20%&#x27;</code> | <code>&#x27;Under 15%&#x27;</code> | <code>&#x27;Under 10%&#x27;</code> | <code>&#x27;Under 5%&#x27;</code> | <code>&#x27;Under 0%&#x27;</code> | <code>&#x27;Under -10%&#x27;</code> | <code>&#x27;Under -20%&#x27;</code> | <code>&#x27;Under -30%&#x27;</code> | <code>&#x27;Under -50%&#x27;</code> | <code>&#x27;Under -70%&#x27;</code> | <code>&#x27;Under -100%&#x27;</code> | <code>&#x27;Over 0%&#x27;</code> | <code>&#x27;Over 5%&#x27;</code> | <code>&#x27;Over 10%&#x27;</code> | <code>&#x27;Over 15%&#x27;</code> | <code>&#x27;Over 20%&#x27;</code> | <code>&#x27;Over 25%&#x27;</code> | <code>&#x27;Over 30%&#x27;</code> | <code>&#x27;Over 35%&#x27;</code> | <code>&#x27;Over 40%&#x27;</code> | <code>&#x27;Over 45%&#x27;</code> | <code>&#x27;Over 50%&#x27;</code> | <code>&#x27;Over 60%&#x27;</code> | <code>&#x27;Over 70%&#x27;</code> | <code>&#x27;Over 80%&#x27;</code> | <code>&#x27;Over 90%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+netProfitMargin"></a>

### fv.netProfitMargin(filter) ⇒ <code>this</code>

A ratio of profitability calculated as net income divided by revenues, or net profits divided by sales. It measures how much out of every dollar of sales a company actually keeps in earnings.

**Arguments**

- **filter (<code>&#x27;Positive (&gt;0%)&#x27;</code> | <code>&#x27;Negative (&lt;0%)&#x27;</code> | <code>&#x27;Very Negative (&lt;-20%)&#x27;</code> | <code>&#x27;High (&gt;20%)&#x27;</code> | <code>&#x27;Under 90%&#x27;</code> | <code>&#x27;Under 80%&#x27;</code> | <code>&#x27;Under 70%&#x27;</code> | <code>&#x27;Under 60%&#x27;</code> | <code>&#x27;Under 50%&#x27;</code> | <code>&#x27;Under 45%&#x27;</code> | <code>&#x27;Under 40%&#x27;</code> | <code>&#x27;Under 35%&#x27;</code> | <code>&#x27;Under 30%&#x27;</code> | <code>&#x27;Under 25%&#x27;</code> | <code>&#x27;Under 20%&#x27;</code> | <code>&#x27;Under 15%&#x27;</code> | <code>&#x27;Under 10%&#x27;</code> | <code>&#x27;Under 5%&#x27;</code> | <code>&#x27;Under 0%&#x27;</code> | <code>&#x27;Under -10%&#x27;</code> | <code>&#x27;Under -20%&#x27;</code> | <code>&#x27;Under -30%&#x27;</code> | <code>&#x27;Under -50%&#x27;</code> | <code>&#x27;Under -70%&#x27;</code> | <code>&#x27;Under -100%&#x27;</code> | <code>&#x27;Over 0%&#x27;</code> | <code>&#x27;Over 5%&#x27;</code> | <code>&#x27;Over 10%&#x27;</code> | <code>&#x27;Over 15%&#x27;</code> | <code>&#x27;Over 20%&#x27;</code> | <code>&#x27;Over 25%&#x27;</code> | <code>&#x27;Over 30%&#x27;</code> | <code>&#x27;Over 35%&#x27;</code> | <code>&#x27;Over 40%&#x27;</code> | <code>&#x27;Over 45%&#x27;</code> | <code>&#x27;Over 50%&#x27;</code> | <code>&#x27;Over 60%&#x27;</code> | <code>&#x27;Over 70%&#x27;</code> | <code>&#x27;Over 80%&#x27;</code> | <code>&#x27;Over 90%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+payoutRatio"></a>

### fv.payoutRatio(filter) ⇒ <code>this</code>

The percentage of earnings paid to shareholders in dividends.

**Arguments**

- **filter (<code>&#x27;None (0%)&#x27;</code> | <code>&#x27;Positive (&gt;0%)&#x27;</code> | <code>&#x27;Low (&lt;20%)&#x27;</code> | <code>&#x27;High (&gt;50%)&#x27;</code> | <code>&#x27;Over 0%&#x27;</code> | <code>&#x27;Over 10%&#x27;</code> | <code>&#x27;Over 20%&#x27;</code> | <code>&#x27;Over 30%&#x27;</code> | <code>&#x27;Over 40%&#x27;</code> | <code>&#x27;Over 50%&#x27;</code> | <code>&#x27;Over 60%&#x27;</code> | <code>&#x27;Over 70%&#x27;</code> | <code>&#x27;Over 80%&#x27;</code> | <code>&#x27;Over 90%&#x27;</code> | <code>&#x27;Over 100%&#x27;</code> | <code>&#x27;Under 10%&#x27;</code> | <code>&#x27;Under 20%&#x27;</code> | <code>&#x27;Under 30%&#x27;</code> | <code>&#x27;Under 40%&#x27;</code> | <code>&#x27;Under 50%&#x27;</code> | <code>&#x27;Under 60%&#x27;</code> | <code>&#x27;Under 70%&#x27;</code> | <code>&#x27;Under 80%&#x27;</code> | <code>&#x27;Under 90%&#x27;</code> | <code>&#x27;Under 100%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+insiderOwnership"></a>

### fv.insiderOwnership(filter) ⇒ <code>this</code>

Level to which a company is owned by its own management.

**Arguments**

- **filter (<code>&#x27;Low (&lt;5%)&#x27;</code> | <code>&#x27;High (&gt;30%)&#x27;</code> | <code>&#x27;Very High (&gt;50%)&#x27;</code> | <code>&#x27;Over 10%&#x27;</code> | <code>&#x27;Over 20%&#x27;</code> | <code>&#x27;Over 30%&#x27;</code> | <code>&#x27;Over 40%&#x27;</code> | <code>&#x27;Over 50%&#x27;</code> | <code>&#x27;Over 60%&#x27;</code> | <code>&#x27;Over 70%&#x27;</code> | <code>&#x27;Over 80%&#x27;</code> | <code>&#x27;Over 90%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+insiderTransactions"></a>

### fv.insiderTransactions(filter) ⇒ <code>this</code>

A company's shares being purchased or sold by its own management. Value represents 6-month percentual change in total insider ownership.

**Arguments**

- **filter (<code>&#x27;Very Negative (&lt;20%)&#x27;</code> | <code>&#x27;Negative (&lt;0%)&#x27;</code> | <code>&#x27;Positive (&gt;0%)&#x27;</code> | <code>&#x27;Very Positive (&gt;20%)&#x27;</code> | <code>&#x27;Under -90%&#x27;</code> | <code>&#x27;Under -80%&#x27;</code> | <code>&#x27;Under -70%&#x27;</code> | <code>&#x27;Under -60%&#x27;</code> | <code>&#x27;Under -50%&#x27;</code> | <code>&#x27;Under -45%&#x27;</code> | <code>&#x27;Under -40%&#x27;</code> | <code>&#x27;Under -35%&#x27;</code> | <code>&#x27;Under -30%&#x27;</code> | <code>&#x27;Under -25%&#x27;</code> | <code>&#x27;Under -20%&#x27;</code> | <code>&#x27;Under -15%&#x27;</code> | <code>&#x27;Under -10%&#x27;</code> | <code>&#x27;Under -5%&#x27;</code> | <code>&#x27;Over +5%&#x27;</code> | <code>&#x27;Over +10%&#x27;</code> | <code>&#x27;Over +15%&#x27;</code> | <code>&#x27;Over +20%&#x27;</code> | <code>&#x27;Over +25%&#x27;</code> | <code>&#x27;Over +30%&#x27;</code> | <code>&#x27;Over +35%&#x27;</code> | <code>&#x27;Over +40%&#x27;</code> | <code>&#x27;Over +45%&#x27;</code> | <code>&#x27;Over +50%&#x27;</code> | <code>&#x27;Over +60%&#x27;</code> | <code>&#x27;Over +70%&#x27;</code> | <code>&#x27;Over +80%&#x27;</code> | <code>&#x27;Over +90%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+institutionalOwnership"></a>

### fv.institutionalOwnership(filter) ⇒ <code>this</code>

Level to which a company is owned by financial institutions.

**Arguments**

- **filter (<code>&#x27;Low (&lt;5%)&#x27;</code> | <code>&#x27;High (&gt;90%)&#x27;</code> | <code>&#x27;Under 90%&#x27;</code> | <code>&#x27;Under 80%&#x27;</code> | <code>&#x27;Under 70%&#x27;</code> | <code>&#x27;Under 60%&#x27;</code> | <code>&#x27;Under 50%&#x27;</code> | <code>&#x27;Under 40%&#x27;</code> | <code>&#x27;Under 30%&#x27;</code> | <code>&#x27;Under 20%&#x27;</code> | <code>&#x27;Under 10%&#x27;</code> | <code>&#x27;Over 10%&#x27;</code> | <code>&#x27;Over 20%&#x27;</code> | <code>&#x27;Over 30%&#x27;</code> | <code>&#x27;Over 40%&#x27;</code> | <code>&#x27;Over 50%&#x27;</code> | <code>&#x27;Over 60%&#x27;</code> | <code>&#x27;Over 70%&#x27;</code> | <code>&#x27;Over 80%&#x27;</code> | <code>&#x27;Over 90%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+institutionalTransactions"></a>

### fv.institutionalTransactions(filter) ⇒ <code>this</code>

A company's shares being purchased or sold by financial institutions. Value represents 3-month change in institutional ownership.

**Arguments**

- **filter (<code>&#x27;Very Negative (&lt;20%)&#x27;</code> | <code>&#x27;Negative (&lt;0%)&#x27;</code> | <code>&#x27;Positive (&gt;0%)&#x27;</code> | <code>&#x27;Very Positive (&gt;20%)&#x27;</code> | <code>&#x27;Under -50%&#x27;</code> | <code>&#x27;Under -45%&#x27;</code> | <code>&#x27;Under -40%&#x27;</code> | <code>&#x27;Under -35%&#x27;</code> | <code>&#x27;Under -30%&#x27;</code> | <code>&#x27;Under -25%&#x27;</code> | <code>&#x27;Under -20%&#x27;</code> | <code>&#x27;Under -15%&#x27;</code> | <code>&#x27;Under -10%&#x27;</code> | <code>&#x27;Under -5%&#x27;</code> | <code>&#x27;Over +5%&#x27;</code> | <code>&#x27;Over +10%&#x27;</code> | <code>&#x27;Over +15%&#x27;</code> | <code>&#x27;Over +20%&#x27;</code> | <code>&#x27;Over +25%&#x27;</code> | <code>&#x27;Over +30%&#x27;</code> | <code>&#x27;Over +35%&#x27;</code> | <code>&#x27;Over +40%&#x27;</code> | <code>&#x27;Over +45%&#x27;</code> | <code>&#x27;Over +50%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+floatShort"></a>

### fv.floatShort(filter) ⇒ <code>this</code>

The amount of short-selling transactions of given stock.

**Arguments**

- **filter (<code>&#x27;Low (&lt;5%)&#x27;</code> | <code>&#x27;High (&gt;20%)&#x27;</code> | <code>&#x27;Under 5%&#x27;</code> | <code>&#x27;Under 10%&#x27;</code> | <code>&#x27;Under 15%&#x27;</code> | <code>&#x27;Under 20%&#x27;</code> | <code>&#x27;Under 25%&#x27;</code> | <code>&#x27;Under 30%&#x27;</code> | <code>&#x27;Over 5%&#x27;</code> | <code>&#x27;Over 10%&#x27;</code> | <code>&#x27;Over 15%&#x27;</code> | <code>&#x27;Over 20%&#x27;</code> | <code>&#x27;Over 25%&#x27;</code> | <code>&#x27;Over 30%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+analystRecom"></a>

### fv.analystRecom(filter) ⇒ <code>this</code>

An outlook of a stock-market analyst on a stock.

**Arguments**

- **filter (<code>&#x27;Strong Buy (1)&#x27;</code> | <code>&#x27;Buy or better&#x27;</code> | <code>&#x27;Buy&#x27;</code> | <code>&#x27;Hold or better&#x27;</code> | <code>&#x27;Hold&#x27;</code> | <code>&#x27;Hold or worse&#x27;</code> | <code>&#x27;Sell&#x27;</code> | <code>&#x27;Sell or worse&#x27;</code> | <code>&#x27;Strong Sell (5)&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+optionShort"></a>

### fv.optionShort(filter) ⇒ <code>this</code>

Stocks with options and/or available to sell short.

**Arguments**

- **filter (<code>&#x27;Optionable&#x27;</code> | <code>&#x27;Shortable&#x27;</code> | <code>&#x27;Not optionable&#x27;</code> | <code>&#x27;Not shortable&#x27;</code> | <code>&#x27;Optionable and shortable&#x27;</code> | <code>&#x27;Optionable and not shortable&#x27;</code> | <code>&#x27;Not optionable and shortable&#x27;</code> | <code>&#x27;Not optionable and not shortable&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+earningsDate"></a>

### fv.earningsDate(filter) ⇒ <code>this</code>

Date when company reports earnings

**Arguments**

- **filter (<code>&#x27;Today&#x27;</code> | <code>&#x27;Today Before Market Open&#x27;</code> | <code>&#x27;Today After Market Close&#x27;</code> | <code>&#x27;Tomorrow&#x27;</code> | <code>&#x27;Tomorrow Before Market Open&#x27;</code> | <code>&#x27;Tomorrow After Market Close&#x27;</code> | <code>&#x27;Yesterday&#x27;</code> | <code>&#x27;Yesterday Before Market Open&#x27;</code> | <code>&#x27;Yesterday After Market Close&#x27;</code> | <code>&#x27;Next 5 Days&#x27;</code> | <code>&#x27;Previous 5 Days&#x27;</code> | <code>&#x27;This Week&#x27;</code> | <code>&#x27;Next Week&#x27;</code> | <code>&#x27;Previous Week&#x27;</code> | <code>&#x27;This Month&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+performance"></a>

### fv.performance(filter) ⇒ <code>this</code>

Rate of return for a given stock.

**Arguments**

- **filter (<code>&#x27;Today Up&#x27;</code> | <code>&#x27;Today Down&#x27;</code> | <code>&#x27;Today -15%&#x27;</code> | <code>&#x27;Today -10%&#x27;</code> | <code>&#x27;Today -5%&#x27;</code> | <code>&#x27;Today +5%&#x27;</code> | <code>&#x27;Today +10%&#x27;</code> | <code>&#x27;Today +15%&#x27;</code> | <code>&#x27;Week -30%&#x27;</code> | <code>&#x27;Week -20%&#x27;</code> | <code>&#x27;Week -10%&#x27;</code> | <code>&#x27;Week Down&#x27;</code> | <code>&#x27;Week Up&#x27;</code> | <code>&#x27;Week +10%&#x27;</code> | <code>&#x27;Week +20%&#x27;</code> | <code>&#x27;Week +30%&#x27;</code> | <code>&#x27;Month -50%&#x27;</code> | <code>&#x27;Month -30%&#x27;</code> | <code>&#x27;Month -20%&#x27;</code> | <code>&#x27;Month -10%&#x27;</code> | <code>&#x27;Month Down&#x27;</code> | <code>&#x27;Month Up&#x27;</code> | <code>&#x27;Month +10%&#x27;</code> | <code>&#x27;Month +20%&#x27;</code> | <code>&#x27;Month +30%&#x27;</code> | <code>&#x27;Month +50%&#x27;</code> | <code>&#x27;Quarter -50%&#x27;</code> | <code>&#x27;Quarter -30%&#x27;</code> | <code>&#x27;Quarter -20%&#x27;</code> | <code>&#x27;Quarter -10%&#x27;</code> | <code>&#x27;Quarter Down&#x27;</code> | <code>&#x27;Quarter Up&#x27;</code> | <code>&#x27;Quarter +10%&#x27;</code> | <code>&#x27;Quarter +20%&#x27;</code> | <code>&#x27;Quarter +30%&#x27;</code> | <code>&#x27;Quarter +50%&#x27;</code> | <code>&#x27;Half -75%&#x27;</code> | <code>&#x27;Half -50%&#x27;</code> | <code>&#x27;Half -30%&#x27;</code> | <code>&#x27;Half -20%&#x27;</code> | <code>&#x27;Half -10%&#x27;</code> | <code>&#x27;Half Down&#x27;</code> | <code>&#x27;Half Up&#x27;</code> | <code>&#x27;Half +10%&#x27;</code> | <code>&#x27;Half +20%&#x27;</code> | <code>&#x27;Half +30%&#x27;</code> | <code>&#x27;Half +50%&#x27;</code> | <code>&#x27;Half +100%&#x27;</code> | <code>&#x27;Year -75%&#x27;</code> | <code>&#x27;Year -50%&#x27;</code> | <code>&#x27;Year -30%&#x27;</code> | <code>&#x27;Year -20%&#x27;</code> | <code>&#x27;Year -10%&#x27;</code> | <code>&#x27;Year Down&#x27;</code> | <code>&#x27;Year Up&#x27;</code> | <code>&#x27;Year +10%&#x27;</code> | <code>&#x27;Year +20%&#x27;</code> | <code>&#x27;Year +30%&#x27;</code> | <code>&#x27;Year +50%&#x27;</code> | <code>&#x27;Year +100%&#x27;</code> | <code>&#x27;Year +200%&#x27;</code> | <code>&#x27;Year +300%&#x27;</code> | <code>&#x27;Year +500%&#x27;</code> | <code>&#x27;YTD -75%&#x27;</code> | <code>&#x27;YTD -50%&#x27;</code> | <code>&#x27;YTD -30%&#x27;</code> | <code>&#x27;YTD -20%&#x27;</code> | <code>&#x27;YTD -10%&#x27;</code> | <code>&#x27;YTD -5%&#x27;</code> | <code>&#x27;YTD Down&#x27;</code> | <code>&#x27;YTD Up&#x27;</code> | <code>&#x27;YTD +5%&#x27;</code> | <code>&#x27;YTD +10%&#x27;</code> | <code>&#x27;YTD +20%&#x27;</code> | <code>&#x27;YTD +30%&#x27;</code> | <code>&#x27;YTD +50%&#x27;</code> | <code>&#x27;YTD +100%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+performance2"></a>

### fv.performance2(filter) ⇒ <code>this</code>

Rate of return for a given stock.

**Arguments**

- **filter (<code>&#x27;Today Up&#x27;</code> | <code>&#x27;Today Down&#x27;</code> | <code>&#x27;Today -15%&#x27;</code> | <code>&#x27;Today -10%&#x27;</code> | <code>&#x27;Today -5%&#x27;</code> | <code>&#x27;Today +5%&#x27;</code> | <code>&#x27;Today +10%&#x27;</code> | <code>&#x27;Today +15%&#x27;</code> | <code>&#x27;Week -30%&#x27;</code> | <code>&#x27;Week -20%&#x27;</code> | <code>&#x27;Week -10%&#x27;</code> | <code>&#x27;Week Down&#x27;</code> | <code>&#x27;Week Up&#x27;</code> | <code>&#x27;Week +10%&#x27;</code> | <code>&#x27;Week +20%&#x27;</code> | <code>&#x27;Week +30%&#x27;</code> | <code>&#x27;Month -50%&#x27;</code> | <code>&#x27;Month -30%&#x27;</code> | <code>&#x27;Month -20%&#x27;</code> | <code>&#x27;Month -10%&#x27;</code> | <code>&#x27;Month Down&#x27;</code> | <code>&#x27;Month Up&#x27;</code> | <code>&#x27;Month +10%&#x27;</code> | <code>&#x27;Month +20%&#x27;</code> | <code>&#x27;Month +30%&#x27;</code> | <code>&#x27;Month +50%&#x27;</code> | <code>&#x27;Quarter -50%&#x27;</code> | <code>&#x27;Quarter -30%&#x27;</code> | <code>&#x27;Quarter -20%&#x27;</code> | <code>&#x27;Quarter -10%&#x27;</code> | <code>&#x27;Quarter Down&#x27;</code> | <code>&#x27;Quarter Up&#x27;</code> | <code>&#x27;Quarter +10%&#x27;</code> | <code>&#x27;Quarter +20%&#x27;</code> | <code>&#x27;Quarter +30%&#x27;</code> | <code>&#x27;Quarter +50%&#x27;</code> | <code>&#x27;Half -75%&#x27;</code> | <code>&#x27;Half -50%&#x27;</code> | <code>&#x27;Half -30%&#x27;</code> | <code>&#x27;Half -20%&#x27;</code> | <code>&#x27;Half -10%&#x27;</code> | <code>&#x27;Half Down&#x27;</code> | <code>&#x27;Half Up&#x27;</code> | <code>&#x27;Half +10%&#x27;</code> | <code>&#x27;Half +20%&#x27;</code> | <code>&#x27;Half +30%&#x27;</code> | <code>&#x27;Half +50%&#x27;</code> | <code>&#x27;Half +100%&#x27;</code> | <code>&#x27;Year -75%&#x27;</code> | <code>&#x27;Year -50%&#x27;</code> | <code>&#x27;Year -30%&#x27;</code> | <code>&#x27;Year -20%&#x27;</code> | <code>&#x27;Year -10%&#x27;</code> | <code>&#x27;Year Down&#x27;</code> | <code>&#x27;Year Up&#x27;</code> | <code>&#x27;Year +10%&#x27;</code> | <code>&#x27;Year +20%&#x27;</code> | <code>&#x27;Year +30%&#x27;</code> | <code>&#x27;Year +50%&#x27;</code> | <code>&#x27;Year +100%&#x27;</code> | <code>&#x27;Year +200%&#x27;</code> | <code>&#x27;Year +300%&#x27;</code> | <code>&#x27;Year +500%&#x27;</code> | <code>&#x27;YTD -75%&#x27;</code> | <code>&#x27;YTD -50%&#x27;</code> | <code>&#x27;YTD -30%&#x27;</code> | <code>&#x27;YTD -20%&#x27;</code> | <code>&#x27;YTD -10%&#x27;</code> | <code>&#x27;YTD -5%&#x27;</code> | <code>&#x27;YTD Down&#x27;</code> | <code>&#x27;YTD Up&#x27;</code> | <code>&#x27;YTD +5%&#x27;</code> | <code>&#x27;YTD +10%&#x27;</code> | <code>&#x27;YTD +20%&#x27;</code> | <code>&#x27;YTD +30%&#x27;</code> | <code>&#x27;YTD +50%&#x27;</code> | <code>&#x27;YTD +100%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+volatility"></a>

### fv.volatility(filter) ⇒ <code>this</code>

A statistical measure of the dispersion of returns for a given stock. Represents average daily high/low trading range.

**Arguments**

- **filter (<code>&#x27;Week - Over 3%&#x27;</code> | <code>&#x27;Week - Over 4%&#x27;</code> | <code>&#x27;Week - Over 5%&#x27;</code> | <code>&#x27;Week - Over 6%&#x27;</code> | <code>&#x27;Week - Over 7%&#x27;</code> | <code>&#x27;Week - Over 8%&#x27;</code> | <code>&#x27;Week - Over 9%&#x27;</code> | <code>&#x27;Week - Over 10%&#x27;</code> | <code>&#x27;Week - Over 12%&#x27;</code> | <code>&#x27;Week - Over 15%&#x27;</code> | <code>&#x27;Month - Over 2%&#x27;</code> | <code>&#x27;Month - Over 3%&#x27;</code> | <code>&#x27;Month - Over 4%&#x27;</code> | <code>&#x27;Month - Over 5%&#x27;</code> | <code>&#x27;Month - Over 6%&#x27;</code> | <code>&#x27;Month - Over 7%&#x27;</code> | <code>&#x27;Month - Over 8%&#x27;</code> | <code>&#x27;Month - Over 9%&#x27;</code> | <code>&#x27;Month - Over 10%&#x27;</code> | <code>&#x27;Month - Over 12%&#x27;</code> | <code>&#x27;Month - Over 15%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+rsi14"></a>

### fv.rsi14(filter) ⇒ <code>this</code>

The Relative Strength Index (RSI) is a technical analysis oscillator showing price strength by comparing upward and downward close-to-close movements.

**Arguments**

- **filter (<code>&#x27;Overbought (90)&#x27;</code> | <code>&#x27;Overbought (80)&#x27;</code> | <code>&#x27;Overbought (70)&#x27;</code> | <code>&#x27;Overbought (60)&#x27;</code> | <code>&#x27;Oversold (40)&#x27;</code> | <code>&#x27;Oversold (30)&#x27;</code> | <code>&#x27;Oversold (20)&#x27;</code> | <code>&#x27;Oversold (10)&#x27;</code> | <code>&#x27;Not Overbought (&lt;60)&#x27;</code> | <code>&#x27;Not Overbought (&lt;50)&#x27;</code> | <code>&#x27;Not Oversold (&gt;50)&#x27;</code> | <code>&#x27;Not Oversold (&gt;40)&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+gap"></a>

### fv.gap(filter) ⇒ <code>this</code>

The difference between yesterday's closing price and today's opening price.

**Arguments**

- **filter (<code>&#x27;Up&#x27;</code> | <code>&#x27;Up 0%&#x27;</code> | <code>&#x27;Up 1%&#x27;</code> | <code>&#x27;Up 2%&#x27;</code> | <code>&#x27;Up 3%&#x27;</code> | <code>&#x27;Up 4%&#x27;</code> | <code>&#x27;Up 5%&#x27;</code> | <code>&#x27;Up 6%&#x27;</code> | <code>&#x27;Up 7%&#x27;</code> | <code>&#x27;Up 8%&#x27;</code> | <code>&#x27;Up 9%&#x27;</code> | <code>&#x27;Up 10%&#x27;</code> | <code>&#x27;Up 15%&#x27;</code> | <code>&#x27;Up 20%&#x27;</code> | <code>&#x27;Down&#x27;</code> | <code>&#x27;Down 0%&#x27;</code> | <code>&#x27;Down 1%&#x27;</code> | <code>&#x27;Down 2%&#x27;</code> | <code>&#x27;Down 3%&#x27;</code> | <code>&#x27;Down 4%&#x27;</code> | <code>&#x27;Down 5%&#x27;</code> | <code>&#x27;Down 6%&#x27;</code> | <code>&#x27;Down 7%&#x27;</code> | <code>&#x27;Down 8%&#x27;</code> | <code>&#x27;Down 9%&#x27;</code> | <code>&#x27;Down 10%&#x27;</code> | <code>&#x27;Down 15%&#x27;</code> | <code>&#x27;Down 20%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+twentyDaySimpleMovingAverage"></a>

### fv.twentyDaySimpleMovingAverage(filter) ⇒ <code>this</code>

20-Day simple moving average of closing price is the mean of the previous 20 days' closing prices.

**Arguments**

- **filter (<code>&#x27;Price below SMA20&#x27;</code> | <code>&#x27;Price 10% below SMA20&#x27;</code> | <code>&#x27;Price 20% below SMA20&#x27;</code> | <code>&#x27;Price 30% below SMA20&#x27;</code> | <code>&#x27;Price 40% below SMA20&#x27;</code> | <code>&#x27;Price 50% below SMA20&#x27;</code> | <code>&#x27;Price above SMA20&#x27;</code> | <code>&#x27;Price 10% above SMA20&#x27;</code> | <code>&#x27;Price 20% above SMA20&#x27;</code> | <code>&#x27;Price 30% above SMA20&#x27;</code> | <code>&#x27;Price 40% above SMA20&#x27;</code> | <code>&#x27;Price 50% above SMA20&#x27;</code> | <code>&#x27;Price crossed SMA20&#x27;</code> | <code>&#x27;Price crossed SMA20 above&#x27;</code> | <code>&#x27;Price crossed SMA20 below&#x27;</code> | <code>&#x27;SMA20 crossed SMA50&#x27;</code> | <code>&#x27;SMA20 crossed SMA50 above&#x27;</code> | <code>&#x27;SMA20 crossed SMA50 below&#x27;</code> | <code>&#x27;SMA20 crossed SMA200&#x27;</code> | <code>&#x27;SMA20 crossed SMA200 above&#x27;</code> | <code>&#x27;SMA20 crossed SMA200 below&#x27;</code> | <code>&#x27;SMA20 above SMA50&#x27;</code> | <code>&#x27;SMA20 below SMA50&#x27;</code> | <code>&#x27;SMA20 above SMA200&#x27;</code> | <code>&#x27;SMA20 below SMA200&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+fiftyDaySimpleMovingAverage"></a>

### fv.fiftyDaySimpleMovingAverage(filter) ⇒ <code>this</code>

50-Day simple moving average of closing price is the mean of the previous 50 days' closing prices.

**Arguments**

- **filter (<code>&#x27;Price below SMA50&#x27;</code> | <code>&#x27;Price 10% below SMA50&#x27;</code> | <code>&#x27;Price 20% below SMA50&#x27;</code> | <code>&#x27;Price 30% below SMA50&#x27;</code> | <code>&#x27;Price 40% below SMA50&#x27;</code> | <code>&#x27;Price 50% below SMA50&#x27;</code> | <code>&#x27;Price above SMA50&#x27;</code> | <code>&#x27;Price 10% above SMA50&#x27;</code> | <code>&#x27;Price 20% above SMA50&#x27;</code> | <code>&#x27;Price 30% above SMA50&#x27;</code> | <code>&#x27;Price 40% above SMA50&#x27;</code> | <code>&#x27;Price 50% above SMA50&#x27;</code> | <code>&#x27;Price crossed SMA50&#x27;</code> | <code>&#x27;Price crossed SMA50 above&#x27;</code> | <code>&#x27;Price crossed SMA50 below&#x27;</code> | <code>&#x27;SMA50 crossed SMA20&#x27;</code> | <code>&#x27;SMA50 crossed SMA20 above&#x27;</code> | <code>&#x27;SMA50 crossed SMA20 below&#x27;</code> | <code>&#x27;SMA50 crossed SMA200&#x27;</code> | <code>&#x27;SMA50 crossed SMA200 above&#x27;</code> | <code>&#x27;SMA50 crossed SMA200 below&#x27;</code> | <code>&#x27;SMA50 above SMA20&#x27;</code> | <code>&#x27;SMA50 below SMA20&#x27;</code> | <code>&#x27;SMA50 above SMA200&#x27;</code> | <code>&#x27;SMA50 below SMA200&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+twoHundredDaySimpleMovingAverage"></a>

### fv.twoHundredDaySimpleMovingAverage(filter) ⇒ <code>this</code>

200-Day simple moving average of closing price is the mean of the previous 200 days' closing prices.

**Arguments**

- **filter (<code>&#x27;Price below SMA200&#x27;</code> | <code>&#x27;Price 10% below SMA200&#x27;</code> | <code>&#x27;Price 20% below SMA200&#x27;</code> | <code>&#x27;Price 30% below SMA200&#x27;</code> | <code>&#x27;Price 40% below SMA200&#x27;</code> | <code>&#x27;Price 50% below SMA200&#x27;</code> | <code>&#x27;Price 60% below SMA200&#x27;</code> | <code>&#x27;Price 70% below SMA200&#x27;</code> | <code>&#x27;Price 80% below SMA200&#x27;</code> | <code>&#x27;Price 90% below SMA200&#x27;</code> | <code>&#x27;Price above SMA200&#x27;</code> | <code>&#x27;Price 10% above SMA200&#x27;</code> | <code>&#x27;Price 20% above SMA200&#x27;</code> | <code>&#x27;Price 30% above SMA200&#x27;</code> | <code>&#x27;Price 40% above SMA200&#x27;</code> | <code>&#x27;Price 50% above SMA200&#x27;</code> | <code>&#x27;Price 60% above SMA200&#x27;</code> | <code>&#x27;Price 70% above SMA200&#x27;</code> | <code>&#x27;Price 80% above SMA200&#x27;</code> | <code>&#x27;Price 90% above SMA200&#x27;</code> | <code>&#x27;Price 100% above SMA200&#x27;</code> | <code>&#x27;Price crossed SMA200&#x27;</code> | <code>&#x27;Price crossed SMA200 above&#x27;</code> | <code>&#x27;Price crossed SMA200 below&#x27;</code> | <code>&#x27;SMA200 crossed SMA20&#x27;</code> | <code>&#x27;SMA200 crossed SMA20 above&#x27;</code> | <code>&#x27;SMA200 crossed SMA20 below&#x27;</code> | <code>&#x27;SMA200 crossed SMA50&#x27;</code> | <code>&#x27;SMA200 crossed SMA50 above&#x27;</code> | <code>&#x27;SMA200 crossed SMA50 below&#x27;</code> | <code>&#x27;SMA200 above SMA20&#x27;</code> | <code>&#x27;SMA200 below SMA20&#x27;</code> | <code>&#x27;SMA200 above SMA50&#x27;</code> | <code>&#x27;SMA200 below SMA50&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+change"></a>

### fv.change(filter) ⇒ <code>this</code>

The difference between previous's close price and today's last price.

**Arguments**

- **filter (<code>&#x27;Up&#x27;</code> | <code>&#x27;Up 1%&#x27;</code> | <code>&#x27;Up 2%&#x27;</code> | <code>&#x27;Up 3%&#x27;</code> | <code>&#x27;Up 4%&#x27;</code> | <code>&#x27;Up 5%&#x27;</code> | <code>&#x27;Up 6%&#x27;</code> | <code>&#x27;Up 7%&#x27;</code> | <code>&#x27;Up 8%&#x27;</code> | <code>&#x27;Up 9%&#x27;</code> | <code>&#x27;Up 10%&#x27;</code> | <code>&#x27;Up 15%&#x27;</code> | <code>&#x27;Up 20%&#x27;</code> | <code>&#x27;Down&#x27;</code> | <code>&#x27;Down 1%&#x27;</code> | <code>&#x27;Down 2%&#x27;</code> | <code>&#x27;Down 3%&#x27;</code> | <code>&#x27;Down 4%&#x27;</code> | <code>&#x27;Down 5%&#x27;</code> | <code>&#x27;Down 6%&#x27;</code> | <code>&#x27;Down 7%&#x27;</code> | <code>&#x27;Down 8%&#x27;</code> | <code>&#x27;Down 9%&#x27;</code> | <code>&#x27;Down 10%&#x27;</code> | <code>&#x27;Down 15%&#x27;</code> | <code>&#x27;Down 20%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+changeFromOpen"></a>

### fv.changeFromOpen(filter) ⇒ <code>this</code>

The difference between today's open price and today's last price.

**Arguments**

- **filter (<code>&#x27;Up&#x27;</code> | <code>&#x27;Up 1%&#x27;</code> | <code>&#x27;Up 2%&#x27;</code> | <code>&#x27;Up 3%&#x27;</code> | <code>&#x27;Up 4%&#x27;</code> | <code>&#x27;Up 5%&#x27;</code> | <code>&#x27;Up 6%&#x27;</code> | <code>&#x27;Up 7%&#x27;</code> | <code>&#x27;Up 8%&#x27;</code> | <code>&#x27;Up 9%&#x27;</code> | <code>&#x27;Up 10%&#x27;</code> | <code>&#x27;Up 15%&#x27;</code> | <code>&#x27;Up 20%&#x27;</code> | <code>&#x27;Down&#x27;</code> | <code>&#x27;Down 1%&#x27;</code> | <code>&#x27;Down 2%&#x27;</code> | <code>&#x27;Down 3%&#x27;</code> | <code>&#x27;Down 4%&#x27;</code> | <code>&#x27;Down 5%&#x27;</code> | <code>&#x27;Down 6%&#x27;</code> | <code>&#x27;Down 7%&#x27;</code> | <code>&#x27;Down 8%&#x27;</code> | <code>&#x27;Down 9%&#x27;</code> | <code>&#x27;Down 10%&#x27;</code> | <code>&#x27;Down 15%&#x27;</code> | <code>&#x27;Down 20%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+twentyDayHighLow"></a>

### fv.twentyDayHighLow(filter) ⇒ <code>this</code>

Maximum/minimum of previous 20 days' highs/lows.

**Arguments**

- **filter (<code>&#x27;New High&#x27;</code> | <code>&#x27;New Low&#x27;</code> | <code>&#x27;5% or more below High&#x27;</code> | <code>&#x27;10% or more below High&#x27;</code> | <code>&#x27;15% or more below High&#x27;</code> | <code>&#x27;20% or more below High&#x27;</code> | <code>&#x27;30% or more below High&#x27;</code> | <code>&#x27;40% or more below High&#x27;</code> | <code>&#x27;50% or more below High&#x27;</code> | <code>&#x27;0-3% below High&#x27;</code> | <code>&#x27;0-5% below High&#x27;</code> | <code>&#x27;0-10% below High&#x27;</code> | <code>&#x27;5% or more above Low&#x27;</code> | <code>&#x27;10% or more above Low&#x27;</code> | <code>&#x27;15% or more above Low&#x27;</code> | <code>&#x27;20% or more above Low&#x27;</code> | <code>&#x27;30% or more above Low&#x27;</code> | <code>&#x27;40% or more above Low&#x27;</code> | <code>&#x27;50% or more above Low&#x27;</code> | <code>&#x27;0-3% above Low&#x27;</code> | <code>&#x27;0-5% above Low&#x27;</code> | <code>&#x27;0-10% above Low&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+fiftyDayHighLow"></a>

### fv.fiftyDayHighLow(filter) ⇒ <code>this</code>

Maximum/minimum of previous 50 days' highs/lows.

**Arguments**

- **filter (<code>&#x27;New High&#x27;</code> | <code>&#x27;New Low&#x27;</code> | <code>&#x27;5% or more below High&#x27;</code> | <code>&#x27;10% or more below High&#x27;</code> | <code>&#x27;15% or more below High&#x27;</code> | <code>&#x27;20% or more below High&#x27;</code> | <code>&#x27;30% or more below High&#x27;</code> | <code>&#x27;40% or more below High&#x27;</code> | <code>&#x27;50% or more below High&#x27;</code> | <code>&#x27;0-3% below High&#x27;</code> | <code>&#x27;0-5% below High&#x27;</code> | <code>&#x27;0-10% below High&#x27;</code> | <code>&#x27;5% or more above Low&#x27;</code> | <code>&#x27;10% or more above Low&#x27;</code> | <code>&#x27;15% or more above Low&#x27;</code> | <code>&#x27;20% or more above Low&#x27;</code> | <code>&#x27;30% or more above Low&#x27;</code> | <code>&#x27;40% or more above Low&#x27;</code> | <code>&#x27;50% or more above Low&#x27;</code> | <code>&#x27;0-3% above Low&#x27;</code> | <code>&#x27;0-5% above Low&#x27;</code> | <code>&#x27;0-10% above Low&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+fiftyTwoWeekHighLow"></a>

### fv.fiftyTwoWeekHighLow(filter) ⇒ <code>this</code>

Maximum/minimum of previous 52 weeks' highs/lows.

**Arguments**

- **filter (<code>&#x27;New High&#x27;</code> | <code>&#x27;New Low&#x27;</code> | <code>&#x27;5% or more below High&#x27;</code> | <code>&#x27;10% or more below High&#x27;</code> | <code>&#x27;15% or more below High&#x27;</code> | <code>&#x27;20% or more below High&#x27;</code> | <code>&#x27;30% or more below High&#x27;</code> | <code>&#x27;40% or more below High&#x27;</code> | <code>&#x27;50% or more below High&#x27;</code> | <code>&#x27;60% or more below High&#x27;</code> | <code>&#x27;70% or more below High&#x27;</code> | <code>&#x27;80% or more below High&#x27;</code> | <code>&#x27;90% or more below High&#x27;</code> | <code>&#x27;0-3% below High&#x27;</code> | <code>&#x27;0-5% below High&#x27;</code> | <code>&#x27;0-10% below High&#x27;</code> | <code>&#x27;5% or more above Low&#x27;</code> | <code>&#x27;10% or more above Low&#x27;</code> | <code>&#x27;15% or more above Low&#x27;</code> | <code>&#x27;20% or more above Low&#x27;</code> | <code>&#x27;30% or more above Low&#x27;</code> | <code>&#x27;40% or more above Low&#x27;</code> | <code>&#x27;50% or more above Low&#x27;</code> | <code>&#x27;60% or more above Low&#x27;</code> | <code>&#x27;70% or more above Low&#x27;</code> | <code>&#x27;80% or more above Low&#x27;</code> | <code>&#x27;90% or more above Low&#x27;</code> | <code>&#x27;100% or more above Low&#x27;</code> | <code>&#x27;120% or more above Low&#x27;</code> | <code>&#x27;150% or more above Low&#x27;</code> | <code>&#x27;200% or more above Low&#x27;</code> | <code>&#x27;300% or more above Low&#x27;</code> | <code>&#x27;500% or more above Low&#x27;</code> | <code>&#x27;0-3% above Low&#x27;</code> | <code>&#x27;0-5% above Low&#x27;</code> | <code>&#x27;0-10% above Low&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+allTimeHighLow"></a>

### fv.allTimeHighLow(filter) ⇒ <code>this</code>

Maximum/minimum of all-time highs/lows.

**Arguments**

- **filter (<code>&#x27;New High&#x27;</code> | <code>&#x27;New Low&#x27;</code> | <code>&#x27;5% or more below High&#x27;</code> | <code>&#x27;10% or more below High&#x27;</code> | <code>&#x27;15% or more below High&#x27;</code> | <code>&#x27;20% or more below High&#x27;</code> | <code>&#x27;30% or more below High&#x27;</code> | <code>&#x27;40% or more below High&#x27;</code> | <code>&#x27;50% or more below High&#x27;</code> | <code>&#x27;60% or more below High&#x27;</code> | <code>&#x27;70% or more below High&#x27;</code> | <code>&#x27;80% or more below High&#x27;</code> | <code>&#x27;90% or more below High&#x27;</code> | <code>&#x27;0-3% below High&#x27;</code> | <code>&#x27;0-5% below High&#x27;</code> | <code>&#x27;0-10% below High&#x27;</code> | <code>&#x27;5% or more above Low&#x27;</code> | <code>&#x27;10% or more above Low&#x27;</code> | <code>&#x27;15% or more above Low&#x27;</code> | <code>&#x27;20% or more above Low&#x27;</code> | <code>&#x27;30% or more above Low&#x27;</code> | <code>&#x27;40% or more above Low&#x27;</code> | <code>&#x27;50% or more above Low&#x27;</code> | <code>&#x27;60% or more above Low&#x27;</code> | <code>&#x27;70% or more above Low&#x27;</code> | <code>&#x27;80% or more above Low&#x27;</code> | <code>&#x27;90% or more above Low&#x27;</code> | <code>&#x27;100% or more above Low&#x27;</code> | <code>&#x27;120% or more above Low&#x27;</code> | <code>&#x27;150% or more above Low&#x27;</code> | <code>&#x27;200% or more above Low&#x27;</code> | <code>&#x27;300% or more above Low&#x27;</code> | <code>&#x27;500% or more above Low&#x27;</code> | <code>&#x27;0-3% above Low&#x27;</code> | <code>&#x27;0-5% above Low&#x27;</code> | <code>&#x27;0-10% above Low&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+pattern"></a>

### fv.pattern(filter) ⇒ <code>this</code>

A chart pattern is a distinct formation on a stock chart that creates a trading signal, or a sign of future price movements. Chartists use these patterns to identify current trends and trend reversals and to trigger buy and sell signals.

**Arguments**

- **filter (<code>&#x27;Horizontal S/R&#x27;</code> | <code>&#x27;Horizontal S/R (Strong)&#x27;</code> | <code>&#x27;TL Resistance&#x27;</code> | <code>&#x27;TL Resistance (Strong)&#x27;</code> | <code>&#x27;TL Support&#x27;</code> | <code>&#x27;TL Support (Strong)&#x27;</code> | <code>&#x27;Wedge Up&#x27;</code> | <code>&#x27;Wedge Up (Strong)&#x27;</code> | <code>&#x27;Wedge Down&#x27;</code> | <code>&#x27;Wedge Down (Strong)&#x27;</code> | <code>&#x27;Triangle Ascending&#x27;</code> | <code>&#x27;Triangle Ascending (Strong)&#x27;</code> | <code>&#x27;Triangle Descending&#x27;</code> | <code>&#x27;Triangle Descending (Strong)&#x27;</code> | <code>&#x27;Wedge&#x27;</code> | <code>&#x27;Wedge (Strong)&#x27;</code> | <code>&#x27;Channel Up&#x27;</code> | <code>&#x27;Channel Up (Strong)&#x27;</code> | <code>&#x27;Channel Down&#x27;</code> | <code>&#x27;Channel Down (Strong)&#x27;</code> | <code>&#x27;Channel&#x27;</code> | <code>&#x27;Channel (Strong)&#x27;</code> | <code>&#x27;Double Top&#x27;</code> | <code>&#x27;Double Bottom&#x27;</code> | <code>&#x27;Multiple Top&#x27;</code> | <code>&#x27;Multiple Bottom&#x27;</code> | <code>&#x27;Head &amp; Shoulders&#x27;</code> | <code>&#x27;Head &amp; Shoulders Inverse&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+candlestick"></a>

### fv.candlestick(filter) ⇒ <code>this</code>

Candlesticks are usually composed of the body (black or white), an upper and a lower shadow (wick). The wick illustrates the highest and lowest traded prices of a stock during the time interval represented. The body illustrates the opening and closing trades.

**Arguments**

- **filter (<code>&#x27;Long Lower Shadow&#x27;</code> | <code>&#x27;Long Upper Shadow&#x27;</code> | <code>&#x27;Hammer&#x27;</code> | <code>&#x27;Inverted Hammer&#x27;</code> | <code>&#x27;Spinning Top White&#x27;</code> | <code>&#x27;Spinning Top Black&#x27;</code> | <code>&#x27;Doji&#x27;</code> | <code>&#x27;Dragonfly Doji&#x27;</code> | <code>&#x27;Gravestone Doji&#x27;</code> | <code>&#x27;Marubozu White&#x27;</code> | <code>&#x27;Marubozu Black&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+beta"></a>

### fv.beta(filter) ⇒ <code>this</code>

A measure of a stock’s price volatility relative to the market. An asset with a beta of 0 means that its price is not at all correlated with the market. A positive beta means that the asset generally follows the market. A negative beta shows that the asset inversely follows the market, decreases in value if the market goes up.

**Arguments**

- **filter (<code>&#x27;Under 0&#x27;</code> | <code>&#x27;Under 0.5&#x27;</code> | <code>&#x27;Under 1&#x27;</code> | <code>&#x27;Under 1.5&#x27;</code> | <code>&#x27;Under 2&#x27;</code> | <code>&#x27;Over 0&#x27;</code> | <code>&#x27;Over 0.5&#x27;</code> | <code>&#x27;Over 1&#x27;</code> | <code>&#x27;Over 1.5&#x27;</code> | <code>&#x27;Over 2&#x27;</code> | <code>&#x27;Over 2.5&#x27;</code> | <code>&#x27;Over 3&#x27;</code> | <code>&#x27;Over 4&#x27;</code> | <code>&#x27;0 to 0.5&#x27;</code> | <code>&#x27;0 to 1&#x27;</code> | <code>&#x27;0.5 to 1&#x27;</code> | <code>&#x27;0.5 to 1.5&#x27;</code> | <code>&#x27;1 to 1.5&#x27;</code> | <code>&#x27;1 to 2&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+averageTrueRange"></a>

### fv.averageTrueRange(filter) ⇒ <code>this</code>

A measure of stock volatility. The Average True Range is an exponential moving average (14-days) of the True Ranges. The range of a day's trading is high−low, True Range extends it to yesterday's closing price if it was outside of today's range, True Range = max(high,closeprev) − min(low,closeprev)

**Arguments**

- **filter (<code>&#x27;Over 0.25&#x27;</code> | <code>&#x27;Over 0.5&#x27;</code> | <code>&#x27;Over 0.75&#x27;</code> | <code>&#x27;Over 1&#x27;</code> | <code>&#x27;Over 1.5&#x27;</code> | <code>&#x27;Over 2&#x27;</code> | <code>&#x27;Over 2.5&#x27;</code> | <code>&#x27;Over 3&#x27;</code> | <code>&#x27;Over 3.5&#x27;</code> | <code>&#x27;Over 4&#x27;</code> | <code>&#x27;Over 4.5&#x27;</code> | <code>&#x27;Over 5&#x27;</code> | <code>&#x27;Under 0.25&#x27;</code> | <code>&#x27;Under 0.5&#x27;</code> | <code>&#x27;Under 0.75&#x27;</code> | <code>&#x27;Under 1&#x27;</code> | <code>&#x27;Under 1.5&#x27;</code> | <code>&#x27;Under 2&#x27;</code> | <code>&#x27;Under 2.5&#x27;</code> | <code>&#x27;Under 3&#x27;</code> | <code>&#x27;Under 3.5&#x27;</code> | <code>&#x27;Under 4&#x27;</code> | <code>&#x27;Under 4.5&#x27;</code> | <code>&#x27;Under 5&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+averageVolume"></a>

### fv.averageVolume(filter) ⇒ <code>this</code>

The average number of shares traded in a security per day.

**Arguments**

- **filter (<code>&#x27;Under 50K&#x27;</code> | <code>&#x27;Under 100K&#x27;</code> | <code>&#x27;Under 500K&#x27;</code> | <code>&#x27;Under 750K&#x27;</code> | <code>&#x27;Under 1M&#x27;</code> | <code>&#x27;Over 50K&#x27;</code> | <code>&#x27;Over 100K&#x27;</code> | <code>&#x27;Over 200K&#x27;</code> | <code>&#x27;Over 300K&#x27;</code> | <code>&#x27;Over 400K&#x27;</code> | <code>&#x27;Over 500K&#x27;</code> | <code>&#x27;Over 750K&#x27;</code> | <code>&#x27;Over 1M&#x27;</code> | <code>&#x27;Over 2M&#x27;</code> | <code>&#x27;100K to 500K&#x27;</code> | <code>&#x27;100K to 1M&#x27;</code> | <code>&#x27;500K to 1M&#x27;</code> | <code>&#x27;500K to 10M&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+relativeVolume"></a>

### fv.relativeVolume(filter) ⇒ <code>this</code>

Ratio between current volume and 3-month average, intraday adjusted.

**Arguments**

- **filter (<code>&#x27;Over 10&#x27;</code> | <code>&#x27;Over 5&#x27;</code> | <code>&#x27;Over 3&#x27;</code> | <code>&#x27;Over 2&#x27;</code> | <code>&#x27;Over 1.5&#x27;</code> | <code>&#x27;Over 1&#x27;</code> | <code>&#x27;Over 0.75&#x27;</code> | <code>&#x27;Over 0.5&#x27;</code> | <code>&#x27;Over 0.25&#x27;</code> | <code>&#x27;Under 2&#x27;</code> | <code>&#x27;Under 1.5&#x27;</code> | <code>&#x27;Under 1&#x27;</code> | <code>&#x27;Under 0.75&#x27;</code> | <code>&#x27;Under 0.5&#x27;</code> | <code>&#x27;Under 0.25&#x27;</code> | <code>&#x27;Under 0.1&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+currentVolume"></a>

### fv.currentVolume(filter) ⇒ <code>this</code>

Number of shares traded today.

**Arguments**

- **filter (<code>&#x27;Under 50K&#x27;</code> | <code>&#x27;Under 100K&#x27;</code> | <code>&#x27;Under 500K&#x27;</code> | <code>&#x27;Under 750K&#x27;</code> | <code>&#x27;Under 1M&#x27;</code> | <code>&#x27;Over 0&#x27;</code> | <code>&#x27;Over 50K&#x27;</code> | <code>&#x27;Over 100K&#x27;</code> | <code>&#x27;Over 200K&#x27;</code> | <code>&#x27;Over 300K&#x27;</code> | <code>&#x27;Over 400K&#x27;</code> | <code>&#x27;Over 500K&#x27;</code> | <code>&#x27;Over 750K&#x27;</code> | <code>&#x27;Over 1M&#x27;</code> | <code>&#x27;Over 2M&#x27;</code> | <code>&#x27;Over 5M&#x27;</code> | <code>&#x27;Over 10M&#x27;</code> | <code>&#x27;Over 20M&#x27;</code> | <code>&#x27;Over 50% shares float&#x27;</code> | <code>&#x27;Over 100% shares float&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+price"></a>

### fv.price(filter) ⇒ <code>this</code>

The current stock price.

**Arguments**

- **filter (<code>&#x27;Under $1&#x27;</code> | <code>&#x27;Under $2&#x27;</code> | <code>&#x27;Under $3&#x27;</code> | <code>&#x27;Under $4&#x27;</code> | <code>&#x27;Under $5&#x27;</code> | <code>&#x27;Under $7&#x27;</code> | <code>&#x27;Under $10&#x27;</code> | <code>&#x27;Under $15&#x27;</code> | <code>&#x27;Under $20&#x27;</code> | <code>&#x27;Under $30&#x27;</code> | <code>&#x27;Under $40&#x27;</code> | <code>&#x27;Under $50&#x27;</code> | <code>&#x27;Over $1&#x27;</code> | <code>&#x27;Over $2&#x27;</code> | <code>&#x27;Over $3&#x27;</code> | <code>&#x27;Over $4&#x27;</code> | <code>&#x27;Over $5&#x27;</code> | <code>&#x27;Over $7&#x27;</code> | <code>&#x27;Over $10&#x27;</code> | <code>&#x27;Over $15&#x27;</code> | <code>&#x27;Over $20&#x27;</code> | <code>&#x27;Over $30&#x27;</code> | <code>&#x27;Over $40&#x27;</code> | <code>&#x27;Over $50&#x27;</code> | <code>&#x27;Over $60&#x27;</code> | <code>&#x27;Over $70&#x27;</code> | <code>&#x27;Over $80&#x27;</code> | <code>&#x27;Over $90&#x27;</code> | <code>&#x27;Over $100&#x27;</code> | <code>&#x27;$1 to $5&#x27;</code> | <code>&#x27;$1 to $10&#x27;</code> | <code>&#x27;$1 to $20&#x27;</code> | <code>&#x27;$5 to $10&#x27;</code> | <code>&#x27;$5 to $20&#x27;</code> | <code>&#x27;$5 to $50&#x27;</code> | <code>&#x27;$10 to $20&#x27;</code> | <code>&#x27;$10 to $50&#x27;</code> | <code>&#x27;$20 to $50&#x27;</code> | <code>&#x27;$50 to $100&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+targetPrice"></a>

### fv.targetPrice(filter) ⇒ <code>this</code>

Analysts' mean target price.

**Arguments**

- **filter (<code>&#x27;50% Above Price&#x27;</code> | <code>&#x27;40% Above Price&#x27;</code> | <code>&#x27;30% Above Price&#x27;</code> | <code>&#x27;20% Above Price&#x27;</code> | <code>&#x27;10% Above Price&#x27;</code> | <code>&#x27;5% Above Price&#x27;</code> | <code>&#x27;Above Price&#x27;</code> | <code>&#x27;Below Price&#x27;</code> | <code>&#x27;5% Below Price&#x27;</code> | <code>&#x27;10% Below Price&#x27;</code> | <code>&#x27;20% Below Price&#x27;</code> | <code>&#x27;30% Below Price&#x27;</code> | <code>&#x27;40% Below Price&#x27;</code> | <code>&#x27;50% Below Price&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+ipoDate"></a>

### fv.ipoDate(filter) ⇒ <code>this</code>

Date when company had an IPO.

**Arguments**

- **filter (<code>&#x27;Today&#x27;</code> | <code>&#x27;Yesterday&#x27;</code> | <code>&#x27;In the last week&#x27;</code> | <code>&#x27;In the last month&#x27;</code> | <code>&#x27;In the last quarter&#x27;</code> | <code>&#x27;In the last year&#x27;</code> | <code>&#x27;In the last 2 years&#x27;</code> | <code>&#x27;In the last 3 years&#x27;</code> | <code>&#x27;In the last 5 years&#x27;</code> | <code>&#x27;More than a year ago&#x27;</code> | <code>&#x27;More than 5 years ago&#x27;</code> | <code>&#x27;More than 10 years ago&#x27;</code> | <code>&#x27;More than 15 years ago&#x27;</code> | <code>&#x27;More than 20 years ago&#x27;</code> | <code>&#x27;More than 25 years ago&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+sharesOutstanding"></a>

### fv.sharesOutstanding(filter) ⇒ <code>this</code>

Shares outstanding represent the total number of shares issued by a corporation and held by its shareholders.

**Arguments**

- **filter (<code>&#x27;Under 1M&#x27;</code> | <code>&#x27;Under 5M&#x27;</code> | <code>&#x27;Under 10M&#x27;</code> | <code>&#x27;Under 20M&#x27;</code> | <code>&#x27;Under 50M&#x27;</code> | <code>&#x27;Under 100M&#x27;</code> | <code>&#x27;Over 1M&#x27;</code> | <code>&#x27;Over 2M&#x27;</code> | <code>&#x27;Over 5M&#x27;</code> | <code>&#x27;Over 10M&#x27;</code> | <code>&#x27;Over 20M&#x27;</code> | <code>&#x27;Over 50M&#x27;</code> | <code>&#x27;Over 100M&#x27;</code> | <code>&#x27;Over 200M&#x27;</code> | <code>&#x27;Over 500M&#x27;</code> | <code>&#x27;Over 1000M&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+float"></a>

### fv.float(filter) ⇒ <code>this</code>

Float is the number of stock shares that are available for trading to the public. This doesn't include shares held by insiders.

**Arguments**

- **filter (<code>&#x27;Under 1M&#x27;</code> | <code>&#x27;Under 5M&#x27;</code> | <code>&#x27;Under 10M&#x27;</code> | <code>&#x27;Under 20M&#x27;</code> | <code>&#x27;Under 50M&#x27;</code> | <code>&#x27;Under 100M&#x27;</code> | <code>&#x27;Over 1M&#x27;</code> | <code>&#x27;Over 2M&#x27;</code> | <code>&#x27;Over 5M&#x27;</code> | <code>&#x27;Over 10M&#x27;</code> | <code>&#x27;Over 20M&#x27;</code> | <code>&#x27;Over 50M&#x27;</code> | <code>&#x27;Over 100M&#x27;</code> | <code>&#x27;Over 200M&#x27;</code> | <code>&#x27;Over 500M&#x27;</code> | <code>&#x27;Over 1000M&#x27;</code> | <code>&#x27;Under 10%&#x27;</code> | <code>&#x27;Under 20%&#x27;</code> | <code>&#x27;Under 30%&#x27;</code> | <code>&#x27;Under 40%&#x27;</code> | <code>&#x27;Under 50%&#x27;</code> | <code>&#x27;Under 60%&#x27;</code> | <code>&#x27;Under 70%&#x27;</code> | <code>&#x27;Under 80%&#x27;</code> | <code>&#x27;Under 90%&#x27;</code> | <code>&#x27;Over 10%&#x27;</code> | <code>&#x27;Over 20%&#x27;</code> | <code>&#x27;Over 30%&#x27;</code> | <code>&#x27;Over 40%&#x27;</code> | <code>&#x27;Over 50%&#x27;</code> | <code>&#x27;Over 60%&#x27;</code> | <code>&#x27;Over 70%&#x27;</code> | <code>&#x27;Over 80%&#x27;</code> | <code>&#x27;Over 90%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+singleCategory"></a>

### fv.singleCategory(filter) ⇒ <code>this</code>

Single category of each ETF.

**Arguments**

- **filter (<code>&#x27;Bonds - Broad Market&#x27;</code> | <code>&#x27;Bonds - Convertible&#x27;</code> | <code>&#x27;Bonds - Corporate&#x27;</code> | <code>&#x27;Bonds - Inflation protected&#x27;</code> | <code>&#x27;Bonds - Leveraged / Inverse&#x27;</code> | <code>&#x27;Bonds - Mortgage&#x27;</code> | <code>&#x27;Bonds - Municipal&#x27;</code> | <code>&#x27;Bonds - Non Government Asset Backed Securities&#x27;</code> | <code>&#x27;Bonds - Treasury &amp; Government&#x27;</code> | <code>&#x27;Commodities &amp; Metals - Agricultural&#x27;</code> | <code>&#x27;Commodities &amp; Metals - Diversified Commodities&#x27;</code> | <code>&#x27;Commodities &amp; Metals - Energy&#x27;</code> | <code>&#x27;Commodities &amp; Metals - Gold / Metals&#x27;</code> | <code>&#x27;Commodities &amp; Metals - Leveraged / Inverse&#x27;</code> | <code>&#x27;Currency&#x27;</code> | <code>&#x27;Currency - Leveraged / Inverse&#x27;</code> | <code>&#x27;Equity - Leveraged / Inverse&#x27;</code> | <code>&#x27;Global or ExUS Equities - Broad / Regional&#x27;</code> | <code>&#x27;Global or ExUS Equities - Country Specific&#x27;</code> | <code>&#x27;Global or ExUS Equities - Dividend &amp; Fundamental&#x27;</code> | <code>&#x27;Global or ExUS Equities - Factor &amp; Thematic&#x27;</code> | <code>&#x27;Global or ExUS Equities - Industry Sector&#x27;</code> | <code>&#x27;Global or ExUS Equities - Quant Strat&#x27;</code> | <code>&#x27;Other Asset Types - Leveraged / Inverse&#x27;</code> | <code>&#x27;Other Asset Types - Multi-Asset / Other&#x27;</code> | <code>&#x27;Target Date / Multi-Asset - Leveraged / Inverse&#x27;</code> | <code>&#x27;Target Date / Multi-Asset - Other&#x27;</code> | <code>&#x27;US Equities - Broad Market &amp; Size&#x27;</code> | <code>&#x27;US Equities - Dividend &amp; Fundamental&#x27;</code> | <code>&#x27;US Equities - Factor &amp; Thematic&#x27;</code> | <code>&#x27;US Equities - Industry Sector&#x27;</code> | <code>&#x27;US Equities - Quant Strat&#x27;</code> | <code>&#x27;US Equities - US Style&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+assetType"></a>

### fv.assetType(filter) ⇒ <code>this</code>

The asset type of the ETF.

**Arguments**

- **filter (<code>&#x27;Bonds&#x27;</code> | <code>&#x27;Carbon Trading&#x27;</code> | <code>&#x27;Closed End Funds&#x27;</code> | <code>&#x27;Commodities &amp; Metals&#x27;</code> | <code>&#x27;CryptoCurrency&#x27;</code> | <code>&#x27;Currency&#x27;</code> | <code>&#x27;Equities (Stocks)&#x27;</code> | <code>&#x27;Equities (Stocks) - IPO Based&#x27;</code> | <code>&#x27;Freight Futures&#x27;</code> | <code>&#x27;Hedge Fund Replication&#x27;</code> | <code>&#x27;MLP&#x27;</code> | <code>&#x27;Multi-Asset - Conservative&#x27;</code> | <code>&#x27;Multi-Asset - Growth / Aggressive&#x27;</code> | <code>&#x27;Multi-Asset - Moderate&#x27;</code> | <code>&#x27;Multi-Asset - Tactical / Active&#x27;</code> | <code>&#x27;Preferred Stock&#x27;</code> | <code>&#x27;Private Equity&#x27;</code> | <code>&#x27;SPAC&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+sponsor"></a>

### fv.sponsor(filter) ⇒ <code>this</code>

The fund manager (ETF) or issuing bank (ETN).

**Arguments**

- **filter (<code>&#x27;Aberdeen&#x27;</code> | <code>&#x27;Absolute Investment Advisers&#x27;</code> | <code>&#x27;Academy AM&#x27;</code> | <code>&#x27;Acquirers Funds&#x27;</code> | <code>&#x27;Acruence Capital&#x27;</code> | <code>&#x27;ACSI Funds&#x27;</code> | <code>&#x27;ACV ETF&#x27;</code> | <code>&#x27;Adaptiv&#x27;</code> | <code>&#x27;ADAPTIVE INVESTMENTS&#x27;</code> | <code>&#x27;Adasina Social Capital&#x27;</code> | <code>&#x27;Advisor Shares&#x27;</code> | <code>&#x27;Advisors Asset Management&#x27;</code> | <code>&#x27;Advocate Capital Management&#x27;</code> | <code>&#x27;AGFiQ&#x27;</code> | <code>&#x27;Alexis Invests&#x27;</code> | <code>&#x27;Alger&#x27;</code> | <code>&#x27;AllianceBernstein&#x27;</code> | <code>&#x27;AllianzIM&#x27;</code> | <code>&#x27;Alpha Architect&#x27;</code> | <code>&#x27;AlphaMark&#x27;</code> | <code>&#x27;ALPS&#x27;</code> | <code>&#x27;Altrius Capital&#x27;</code> | <code>&#x27;AltShares&#x27;</code> | <code>&#x27;American Beacon&#x27;</code> | <code>&#x27;American Century Investments&#x27;</code> | <code>&#x27;Amplify Investments&#x27;</code> | <code>&#x27;Angel Oak&#x27;</code> | <code>&#x27;AOT INVEST&#x27;</code> | <code>&#x27;Applied Finance Funds&#x27;</code> | <code>&#x27;Aptus Capital Advisors&#x27;</code> | <code>&#x27;Argent Capital Management&#x27;</code> | <code>&#x27;ARK Funds&#x27;</code> | <code>&#x27;Armada ETF Advisors&#x27;</code> | <code>&#x27;ArrowShares&#x27;</code> | <code>&#x27;Astoria&#x27;</code> | <code>&#x27;ASYMshares&#x27;</code> | <code>&#x27;ATAC Funds&#x27;</code> | <code>&#x27;Avantis Investors&#x27;</code> | <code>&#x27;AXS Investments&#x27;</code> | <code>&#x27;Aztlan&#x27;</code> | <code>&#x27;BAD Investment&#x27;</code> | <code>&#x27;Bahl &amp; Gaynor&#x27;</code> | <code>&#x27;Ballast AM&#x27;</code> | <code>&#x27;Barclays&#x27;</code> | <code>&#x27;Barclays iPath&#x27;</code> | <code>&#x27;Beacon&#x27;</code> | <code>&#x27;Beyond Investing&#x27;</code> | <code>&#x27;Bitwise&#x27;</code> | <code>&#x27;Blackrock (iShares)&#x27;</code> | <code>&#x27;Blueprint Fund Management&#x27;</code> | <code>&#x27;BNY Mellon&#x27;</code> | <code>&#x27;BondBloxx&#x27;</code> | <code>&#x27;Bridges Capital&#x27;</code> | <code>&#x27;Bridgeway&#x27;</code> | <code>&#x27;Brookstone&#x27;</code> | <code>&#x27;Build Asset Management&#x27;</code> | <code>&#x27;Burney Investment&#x27;</code> | <code>&#x27;Bushido Capital&#x27;</code> | <code>&#x27;Cabana ETF&#x27;</code> | <code>&#x27;Calamos Investments&#x27;</code> | <code>&#x27;Cambiar Investors&#x27;</code> | <code>&#x27;Cambria Funds&#x27;</code> | <code>&#x27;Capital Group&#x27;</code> | <code>&#x27;Carbon Collective&#x27;</code> | <code>&#x27;Carbon Fund Advisors&#x27;</code> | <code>&#x27;CBOE Vest&#x27;</code> | <code>&#x27;Changebridge Capital&#x27;</code> | <code>&#x27;Clockwise Capital&#x27;</code> | <code>&#x27;Clouty&#x27;</code> | <code>&#x27;CNIC Funds&#x27;</code> | <code>&#x27;Columbia Management&#x27;</code> | <code>&#x27;Conductor ETF&#x27;</code> | <code>&#x27;Congress AMC&#x27;</code> | <code>&#x27;Convergence Investment Partners&#x27;</code> | <code>&#x27;ConvexityShares&#x27;</code> | <code>&#x27;CornerCap&#x27;</code> | <code>&#x27;Counterpoint Mutual Funds&#x27;</code> | <code>&#x27;Credit Suisse&#x27;</code> | <code>&#x27;CrossingBridge&#x27;</code> | <code>&#x27;Cultivar Funds&#x27;</code> | <code>&#x27;Davis Advisors&#x27;</code> | <code>&#x27;Day Hagan&#x27;</code> | <code>&#x27;Days Global Advisors&#x27;</code> | <code>&#x27;Defiance ETFs&#x27;</code> | <code>&#x27;Democracy Investments&#x27;</code> | <code>&#x27;Dimensional&#x27;</code> | <code>&#x27;Direxion Shares&#x27;</code> | <code>&#x27;Discipline Fund&#x27;</code> | <code>&#x27;Distillate Capital&#x27;</code> | <code>&#x27;DoubleLine Funds&#x27;</code> | <code>&#x27;DriveWealth&#x27;</code> | <code>&#x27;DWS&#x27;</code> | <code>&#x27;Dynamic Shares&#x27;</code> | <code>&#x27;Ecofin&#x27;</code> | <code>&#x27;Element Funds&#x27;</code> | <code>&#x27;Elevate Shares&#x27;</code> | <code>&#x27;Engine No. 1&#x27;</code> | <code>&#x27;EntrepreneurShares&#x27;</code> | <code>&#x27;Envestnet&#x27;</code> | <code>&#x27;ETF Managers Group&#x27;</code> | <code>&#x27;Euclid ETF&#x27;</code> | <code>&#x27;Evoke Advisors&#x27;</code> | <code>&#x27;Exchange Traded Concepts&#x27;</code> | <code>&#x27;F/m Investments&#x27;</code> | <code>&#x27;Fairlead Strategies&#x27;</code> | <code>&#x27;FCF Advisors&#x27;</code> | <code>&#x27;Federated Hermes&#x27;</code> | <code>&#x27;Fidelity&#x27;</code> | <code>&#x27;First Manhattan&#x27;</code> | <code>&#x27;First Pacific Advisors&#x27;</code> | <code>&#x27;First Trust&#x27;</code> | <code>&#x27;FIS&#x27;</code> | <code>&#x27;Flexshares (Northern Trust)&#x27;</code> | <code>&#x27;FolioBeyond&#x27;</code> | <code>&#x27;Formidable Funds&#x27;</code> | <code>&#x27;FormulaFolio Investments&#x27;</code> | <code>&#x27;Franklin Templeton&#x27;</code> | <code>&#x27;Freedom Day&#x27;</code> | <code>&#x27;FundX&#x27;</code> | <code>&#x27;Future Funds&#x27;</code> | <code>&#x27;Gadsden&#x27;</code> | <code>&#x27;GAMCO Investors&#x27;</code> | <code>&#x27;Gavekal Capital&#x27;</code> | <code>&#x27;Global X&#x27;</code> | <code>&#x27;God Bless&#x27;</code> | <code>&#x27;Goldman Sachs&#x27;</code> | <code>&#x27;Goose Hollow&#x27;</code> | <code>&#x27;Gotham ETF&#x27;</code> | <code>&#x27;GraniteShares&#x27;</code> | <code>&#x27;Grayscale&#x27;</code> | <code>&#x27;Grizzle&#x27;</code> | <code>&#x27;Guru Focus&#x27;</code> | <code>&#x27;Harbor Funds&#x27;</code> | <code>&#x27;Hartford Funds&#x27;</code> | <code>&#x27;Hashdex&#x27;</code> | <code>&#x27;Hennessy Funds&#x27;</code> | <code>&#x27;Horizon Kinetics&#x27;</code> | <code>&#x27;Howard Capital Management&#x27;</code> | <code>&#x27;Hoya Capital&#x27;</code> | <code>&#x27;Humankind&#x27;</code> | <code>&#x27;Hypatia Capital&#x27;</code> | <code>&#x27;iMGP Global Partner&#x27;</code> | <code>&#x27;Impact Shares&#x27;</code> | <code>&#x27;Index IQ&#x27;</code> | <code>&#x27;Infrastructure Capital Advisors&#x27;</code> | <code>&#x27;Innovative Portfolios&#x27;</code> | <code>&#x27;Innovator Management&#x27;</code> | <code>&#x27;Inspire Investing&#x27;</code> | <code>&#x27;Invesco&#x27;</code> | <code>&#x27;Ionic Capital Management&#x27;</code> | <code>&#x27;Jacob Funds&#x27;</code> | <code>&#x27;Janus&#x27;</code> | <code>&#x27;John Hancock Funds&#x27;</code> | <code>&#x27;JPMorgan Chase&#x27;</code> | <code>&#x27;Kaiju ETF Advisors&#x27;</code> | <code>&#x27;Kelly ETFs&#x27;</code> | <code>&#x27;Kingsbarn Capital&#x27;</code> | <code>&#x27;Kovitz&#x27;</code> | <code>&#x27;Krane Shares&#x27;</code> | <code>&#x27;Laffer Tengler&#x27;</code> | <code>&#x27;LeaderShares&#x27;</code> | <code>&#x27;Leatherback Asset Management&#x27;</code> | <code>&#x27;Leuthold Group&#x27;</code> | <code>&#x27;Liquid Strategies&#x27;</code> | <code>&#x27;Little Harbor Advisors&#x27;</code> | <code>&#x27;Logan Capital&#x27;</code> | <code>&#x27;Lyrical AM&#x27;</code> | <code>&#x27;Madison Funds&#x27;</code> | <code>&#x27;Main Management&#x27;</code> | <code>&#x27;Mairs &amp; Power&#x27;</code> | <code>&#x27;Matthews Asia&#x27;</code> | <code>&#x27;MAX ETNs&#x27;</code> | <code>&#x27;McElhenny Sheffield&#x27;</code> | <code>&#x27;Meet Kevin&#x27;</code> | <code>&#x27;Merk Investments&#x27;</code> | <code>&#x27;Merlyn AI&#x27;</code> | <code>&#x27;MicroSectors&#x27;</code> | <code>&#x27;MKAM ETF&#x27;</code> | <code>&#x27;MOHR Funds&#x27;</code> | <code>&#x27;Monarch Funds&#x27;</code> | <code>&#x27;Morgan Dempsey&#x27;</code> | <code>&#x27;Morgan Stanley&#x27;</code> | <code>&#x27;Motley Fool Asset Management&#x27;</code> | <code>&#x27;MUSQ&#x27;</code> | <code>&#x27;Nationwide&#x27;</code> | <code>&#x27;Natixis&#x27;</code> | <code>&#x27;NEOS Funds&#x27;</code> | <code>&#x27;Neuberger Berman&#x27;</code> | <code>&#x27;NEWDAY&#x27;</code> | <code>&#x27;Nuveen&#x27;</code> | <code>&#x27;OneAscent Investments&#x27;</code> | <code>&#x27;Optimize Advisors&#x27;</code> | <code>&#x27;Pacer Financial&#x27;</code> | <code>&#x27;Panagram&#x27;</code> | <code>&#x27;Parabla&#x27;</code> | <code>&#x27;Paralel Advisors&#x27;</code> | <code>&#x27;PGIM Investments&#x27;</code> | <code>&#x27;PIMCO&#x27;</code> | <code>&#x27;Pinnacle Dynamic Funds&#x27;</code> | <code>&#x27;PMV Capital&#x27;</code> | <code>&#x27;Point Bridge Capital&#x27;</code> | <code>&#x27;Principal Financial Services&#x27;</code> | <code>&#x27;ProcureAM&#x27;</code> | <code>&#x27;ProShares&#x27;</code> | <code>&#x27;Putnam Investments&#x27;</code> | <code>&#x27;Q3 All-Season&#x27;</code> | <code>&#x27;Qraft Technologies&#x27;</code> | <code>&#x27;R3 Global Capital&#x27;</code> | <code>&#x27;Rareview Funds&#x27;</code> | <code>&#x27;Rayliant&#x27;</code> | <code>&#x27;Reflection Asset Management&#x27;</code> | <code>&#x27;Regents Park Funds&#x27;</code> | <code>&#x27;Relative Sentiment&#x27;</code> | <code>&#x27;Renaissance&#x27;</code> | <code>&#x27;Returned Stack&#x27;</code> | <code>&#x27;Reverb&#x27;</code> | <code>&#x27;Robinson Capital&#x27;</code> | <code>&#x27;ROC Investments&#x27;</code> | <code>&#x27;Roundhill Financial&#x27;</code> | <code>&#x27;Running Oak&#x27;</code> | <code>&#x27;Saba Capital&#x27;</code> | <code>&#x27;Schwab&#x27;</code> | <code>&#x27;Segall Bryant &amp; Hamill&#x27;</code> | <code>&#x27;SEI Investments Company&#x27;</code> | <code>&#x27;Simplify ETF&#x27;</code> | <code>&#x27;Siren ETF&#x27;</code> | <code>&#x27;SmartETFs&#x27;</code> | <code>&#x27;Sofi&#x27;</code> | <code>&#x27;SonicShares&#x27;</code> | <code>&#x27;Sound ETF&#x27;</code> | <code>&#x27;Soundwatch&#x27;</code> | <code>&#x27;Sparkline Capital&#x27;</code> | <code>&#x27;Spear Invest&#x27;</code> | <code>&#x27;SPFunds&#x27;</code> | <code>&#x27;Spinnaker ETF Trust&#x27;</code> | <code>&#x27;Sprott Asset Management&#x27;</code> | <code>&#x27;State Street (SPDR)&#x27;</code> | <code>&#x27;Sterling Capital&#x27;</code> | <code>&#x27;STF Management&#x27;</code> | <code>&#x27;Strategas Asset Management&#x27;</code> | <code>&#x27;Strategy Shares&#x27;</code> | <code>&#x27;Strive Asset Management&#x27;</code> | <code>&#x27;Subversive ETFs&#x27;</code> | <code>&#x27;Summit Global Investments&#x27;</code> | <code>&#x27;SWAN Global Investments&#x27;</code> | <code>&#x27;Syntax&#x27;</code> | <code>&#x27;T. Rowe Price&#x27;</code> | <code>&#x27;Tactical Advantage&#x27;</code> | <code>&#x27;Tema&#x27;</code> | <code>&#x27;Teucrium&#x27;</code> | <code>&#x27;Texas Capital&#x27;</code> | <code>&#x27;THOR Financial Technologies&#x27;</code> | <code>&#x27;Thrivent&#x27;</code> | <code>&#x27;Timothy Plan&#x27;</code> | <code>&#x27;Toews Funds&#x27;</code> | <code>&#x27;Tortoise Capital Advisors&#x27;</code> | <code>&#x27;Touchstone Investments&#x27;</code> | <code>&#x27;Trajan Wealth&#x27;</code> | <code>&#x27;TrueShares&#x27;</code> | <code>&#x27;Tuttle Tactical Management&#x27;</code> | <code>&#x27;U.S. Global Investors&#x27;</code> | <code>&#x27;UBS&#x27;</code> | <code>&#x27;United States Commodity Funds&#x27;</code> | <code>&#x27;Unlimited&#x27;</code> | <code>&#x27;V-Square&#x27;</code> | <code>&#x27;Validus&#x27;</code> | <code>&#x27;Valkyrie Funds&#x27;</code> | <code>&#x27;Van Eck Associates Corporation&#x27;</code> | <code>&#x27;Vanguard&#x27;</code> | <code>&#x27;VegTech&#x27;</code> | <code>&#x27;Veridien&#x27;</code> | <code>&#x27;Vesper Capital Management&#x27;</code> | <code>&#x27;VictoryShares&#x27;</code> | <code>&#x27;Vident&#x27;</code> | <code>&#x27;Virtus ETF Solutions&#x27;</code> | <code>&#x27;Volatility Shares&#x27;</code> | <code>&#x27;Wahed Invest&#x27;</code> | <code>&#x27;WBI Shares&#x27;</code> | <code>&#x27;Wealth Trust&#x27;</code> | <code>&#x27;Wisdom Tree&#x27;</code> | <code>&#x27;X-Square ETF&#x27;</code> | <code>&#x27;Xfunds&#x27;</code> | <code>&#x27;Zacks&#x27;</code> | <code>&#x27;Zega ETF&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+netExpenseRatio"></a>

### fv.netExpenseRatio(filter) ⇒ <code>this</code>

Gross expense net of fee waivers, as a % of net assets as published by the ETF Issuer.

**Arguments**

- **filter (<code>&#x27;Under 0.1%&#x27;</code> | <code>&#x27;Under 0.2%&#x27;</code> | <code>&#x27;Under 0.3%&#x27;</code> | <code>&#x27;Under 0.4%&#x27;</code> | <code>&#x27;Under 0.5%&#x27;</code> | <code>&#x27;Under 0.6%&#x27;</code> | <code>&#x27;Under 0.7%&#x27;</code> | <code>&#x27;Under 0.8%&#x27;</code> | <code>&#x27;Under 0.9%&#x27;</code> | <code>&#x27;Under 1.0%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+netFundFlows"></a>

### fv.netFundFlows(filter) ⇒ <code>this</code>

Net Fund Flows of the ETF as percentage of Assets Under Management

**Arguments**

- **filter (<code>&#x27;1 Month - Over 0%&#x27;</code> | <code>&#x27;1 Month - Over 10%&#x27;</code> | <code>&#x27;1 Month - Over 25%&#x27;</code> | <code>&#x27;1 Month - Over 50%&#x27;</code> | <code>&#x27;1 Month - Under 0%&#x27;</code> | <code>&#x27;1 Month - Under -10%&#x27;</code> | <code>&#x27;1 Month - Under -25%&#x27;</code> | <code>&#x27;1 Month - Under -50%&#x27;</code> | <code>&#x27;3 Month - Over 0%&#x27;</code> | <code>&#x27;3 Month - Over 10%&#x27;</code> | <code>&#x27;3 Month - Over 25%&#x27;</code> | <code>&#x27;3 Month - Over 50%&#x27;</code> | <code>&#x27;3 Month - Under 0%&#x27;</code> | <code>&#x27;3 Month - Under -10%&#x27;</code> | <code>&#x27;3 Month - Under -25%&#x27;</code> | <code>&#x27;3 Month - Under -50%&#x27;</code> | <code>&#x27;YTD - Over 0%&#x27;</code> | <code>&#x27;YTD - Over 10%&#x27;</code> | <code>&#x27;YTD - Over 25%&#x27;</code> | <code>&#x27;YTD - Over 50%&#x27;</code> | <code>&#x27;YTD - Under 0%&#x27;</code> | <code>&#x27;YTD - Under -10%&#x27;</code> | <code>&#x27;YTD - Under -25%&#x27;</code> | <code>&#x27;YTD - Under -50%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+annualizedReturn"></a>

### fv.annualizedReturn(filter) ⇒ <code>this</code>

Annualized rate of Return of the ETF.

**Arguments**

- **filter (<code>&#x27;1 Year - Over 0%&#x27;</code> | <code>&#x27;1 Year - Over 5%&#x27;</code> | <code>&#x27;1 Year - Over 10%&#x27;</code> | <code>&#x27;1 Year - Over 25%&#x27;</code> | <code>&#x27;1 Year - Under 0%&#x27;</code> | <code>&#x27;1 Year - Under -5%&#x27;</code> | <code>&#x27;1 Year - Under -10%&#x27;</code> | <code>&#x27;1 Year - Under -25%&#x27;</code> | <code>&#x27;3 Year - Over 0%&#x27;</code> | <code>&#x27;3 Year - Over 5%&#x27;</code> | <code>&#x27;3 Year - Over 10%&#x27;</code> | <code>&#x27;3 Year - Over 25%&#x27;</code> | <code>&#x27;3 Year - Under 0%&#x27;</code> | <code>&#x27;3 Year - Under -5%&#x27;</code> | <code>&#x27;3 Year - Under -10%&#x27;</code> | <code>&#x27;3 Year - Under -25%&#x27;</code> | <code>&#x27;5 Year - Over 0%&#x27;</code> | <code>&#x27;5 Year - Over 5%&#x27;</code> | <code>&#x27;5 Year - Over 10%&#x27;</code> | <code>&#x27;5 Year - Over 25%&#x27;</code> | <code>&#x27;5 Year - Under 0%&#x27;</code> | <code>&#x27;5 Year - Under -5%&#x27;</code> | <code>&#x27;5 Year - Under -10%&#x27;</code> | <code>&#x27;5 Year - Under -25%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+tags"></a>

### fv.tags(filter) ⇒ <code>this</code>

Various ETF tags.

**Arguments**

- **filter (<code>&#x27;13F&#x27;</code> | <code>&#x27;3d-printing&#x27;</code> | <code>&#x27;5G&#x27;</code> | <code>&#x27;A.I.&#x27;</code> | <code>&#x27;AAPL&#x27;</code> | <code>&#x27;aerospace-defense&#x27;</code> | <code>&#x27;Africa&#x27;</code> | <code>&#x27;aggressive&#x27;</code> | <code>&#x27;agriculture&#x27;</code> | <code>&#x27;aircraft&#x27;</code> | <code>&#x27;airlines&#x27;</code> | <code>&#x27;alcohol-tobacco&#x27;</code> | <code>&#x27;AMD&#x27;</code> | <code>&#x27;AMZN&#x27;</code> | <code>&#x27;Argentina&#x27;</code> | <code>&#x27;ARKK&#x27;</code> | <code>&#x27;Asia&#x27;</code> | <code>&#x27;Asia-ex-Japan&#x27;</code> | <code>&#x27;Asia-Pacific&#x27;</code> | <code>&#x27;Asia-Pacific-ex-Japan&#x27;</code> | <code>&#x27;asset-rotation&#x27;</code> | <code>&#x27;AUD&#x27;</code> | <code>&#x27;Australia&#x27;</code> | <code>&#x27;Austria&#x27;</code> | <code>&#x27;auto-industry&#x27;</code> | <code>&#x27;automation&#x27;</code> | <code>&#x27;autonomous-vehicles&#x27;</code> | <code>&#x27;BABA&#x27;</code> | <code>&#x27;banks&#x27;</code> | <code>&#x27;batteries&#x27;</code> | <code>&#x27;BDC&#x27;</code> | <code>&#x27;Belgium&#x27;</code> | <code>&#x27;betting&#x27;</code> | <code>&#x27;big-data&#x27;</code> | <code>&#x27;biotechnology&#x27;</code> | <code>&#x27;bitcoin&#x27;</code> | <code>&#x27;blockchain&#x27;</code> | <code>&#x27;blue-chip&#x27;</code> | <code>&#x27;bonds&#x27;</code> | <code>&#x27;Brazil&#x27;</code> | <code>&#x27;brokerage&#x27;</code> | <code>&#x27;buffer&#x27;</code> | <code>&#x27;buyback&#x27;</code> | <code>&#x27;CAD&#x27;</code> | <code>&#x27;Canada&#x27;</code> | <code>&#x27;cancer&#x27;</code> | <code>&#x27;cannabis&#x27;</code> | <code>&#x27;capital-markets&#x27;</code> | <code>&#x27;carbon-allowances&#x27;</code> | <code>&#x27;carbon-low&#x27;</code> | <code>&#x27;cash-cow&#x27;</code> | <code>&#x27;casino&#x27;</code> | <code>&#x27;catholic-values&#x27;</code> | <code>&#x27;CHF&#x27;</code> | <code>&#x27;Chile&#x27;</code> | <code>&#x27;China&#x27;</code> | <code>&#x27;clean-energy&#x27;</code> | <code>&#x27;climate-change&#x27;</code> | <code>&#x27;clinical-trials&#x27;</code> | <code>&#x27;CLO&#x27;</code> | <code>&#x27;cloud-computing&#x27;</code> | <code>&#x27;cobalt&#x27;</code> | <code>&#x27;COIN&#x27;</code> | <code>&#x27;Colombia&#x27;</code> | <code>&#x27;commodity&#x27;</code> | <code>&#x27;communication-services&#x27;</code> | <code>&#x27;community-banks&#x27;</code> | <code>&#x27;conservative&#x27;</code> | <code>&#x27;consumer&#x27;</code> | <code>&#x27;consumer-discretionary&#x27;</code> | <code>&#x27;consumer-staples&#x27;</code> | <code>&#x27;convertible-securities&#x27;</code> | <code>&#x27;copper&#x27;</code> | <code>&#x27;corn&#x27;</code> | <code>&#x27;corporate-bonds&#x27;</code> | <code>&#x27;covered-call&#x27;</code> | <code>&#x27;crypto&#x27;</code> | <code>&#x27;crypto-spot&#x27;</code> | <code>&#x27;currencies&#x27;</code> | <code>&#x27;currency&#x27;</code> | <code>&#x27;currency-bonds&#x27;</code> | <code>&#x27;customer&#x27;</code> | <code>&#x27;cyber-security&#x27;</code> | <code>&#x27;data-centers&#x27;</code> | <code>&#x27;DAX&#x27;</code> | <code>&#x27;debt&#x27;</code> | <code>&#x27;debt-securities&#x27;</code> | <code>&#x27;democrats&#x27;</code> | <code>&#x27;Denmark&#x27;</code> | <code>&#x27;derivatives&#x27;</code> | <code>&#x27;Developed&#x27;</code> | <code>&#x27;Developed-ex-Japan&#x27;</code> | <code>&#x27;Developed-ex-U.S.&#x27;</code> | <code>&#x27;digital-infrastructure&#x27;</code> | <code>&#x27;digital-payments&#x27;</code> | <code>&#x27;DIS&#x27;</code> | <code>&#x27;Disaster-recovery&#x27;</code> | <code>&#x27;disruptive&#x27;</code> | <code>&#x27;dividend&#x27;</code> | <code>&#x27;dividend-growth&#x27;</code> | <code>&#x27;dividend-weight&#x27;</code> | <code>&#x27;DJIA&#x27;</code> | <code>&#x27;dry-bulk&#x27;</code> | <code>&#x27;e-commerce&#x27;</code> | <code>&#x27;e-sports&#x27;</code> | <code>&#x27;EAFE&#x27;</code> | <code>&#x27;education&#x27;</code> | <code>&#x27;Egypt&#x27;</code> | <code>&#x27;electric-vehicles&#x27;</code> | <code>&#x27;electricity&#x27;</code> | <code>&#x27;Emerging&#x27;</code> | <code>&#x27;Emerging-ex-China&#x27;</code> | <code>&#x27;energy&#x27;</code> | <code>&#x27;energy-management&#x27;</code> | <code>&#x27;energy-producers&#x27;</code> | <code>&#x27;energy-storage&#x27;</code> | <code>&#x27;entertainment&#x27;</code> | <code>&#x27;environmental&#x27;</code> | <code>&#x27;equal-weight&#x27;</code> | <code>&#x27;equity&#x27;</code> | <code>&#x27;ESG&#x27;</code> | <code>&#x27;ETFs&#x27;</code> | <code>&#x27;ethereum&#x27;</code> | <code>&#x27;EUR&#x27;</code> | <code>&#x27;Europe&#x27;</code> | <code>&#x27;Eurozone&#x27;</code> | <code>&#x27;ex-energy&#x27;</code> | <code>&#x27;ex-financial&#x27;</code> | <code>&#x27;ex-fossil-fuels&#x27;</code> | <code>&#x27;ex-healthcare&#x27;</code> | <code>&#x27;ex-technology&#x27;</code> | <code>&#x27;exchanges&#x27;</code> | <code>&#x27;factor-rotation&#x27;</code> | <code>&#x27;FANG&#x27;</code> | <code>&#x27;financial&#x27;</code> | <code>&#x27;Finland&#x27;</code> | <code>&#x27;fintech&#x27;</code> | <code>&#x27;fixed-income&#x27;</code> | <code>&#x27;fixed-period&#x27;</code> | <code>&#x27;floating-rate&#x27;</code> | <code>&#x27;food&#x27;</code> | <code>&#x27;food-beverage&#x27;</code> | <code>&#x27;fossil-fuels&#x27;</code> | <code>&#x27;France&#x27;</code> | <code>&#x27;fundamental&#x27;</code> | <code>&#x27;fundamental-weight&#x27;</code> | <code>&#x27;futures&#x27;</code> | <code>&#x27;gaming&#x27;</code> | <code>&#x27;GBP&#x27;</code> | <code>&#x27;gender&#x27;</code> | <code>&#x27;genomics&#x27;</code> | <code>&#x27;Germany&#x27;</code> | <code>&#x27;GLD&#x27;</code> | <code>&#x27;Global&#x27;</code> | <code>&#x27;Global-ex-U.S.&#x27;</code> | <code>&#x27;gold&#x27;</code> | <code>&#x27;gold-miners&#x27;</code> | <code>&#x27;GOOGL&#x27;</code> | <code>&#x27;government-bonds&#x27;</code> | <code>&#x27;Greece&#x27;</code> | <code>&#x27;growth&#x27;</code> | <code>&#x27;hardware&#x27;</code> | <code>&#x27;healthcare&#x27;</code> | <code>&#x27;hedge-currency&#x27;</code> | <code>&#x27;hedge-fund&#x27;</code> | <code>&#x27;hedge-inflation&#x27;</code> | <code>&#x27;hedge-rates&#x27;</code> | <code>&#x27;hedge-risk&#x27;</code> | <code>&#x27;high-beta&#x27;</code> | <code>&#x27;high-yield&#x27;</code> | <code>&#x27;home-construction&#x27;</code> | <code>&#x27;home-office&#x27;</code> | <code>&#x27;Honk-Kong&#x27;</code> | <code>&#x27;hotel&#x27;</code> | <code>&#x27;hydrogen&#x27;</code> | <code>&#x27;I.T.&#x27;</code> | <code>&#x27;income&#x27;</code> | <code>&#x27;India&#x27;</code> | <code>&#x27;Indonesia&#x27;</code> | <code>&#x27;industrials&#x27;</code> | <code>&#x27;inflation&#x27;</code> | <code>&#x27;infrastructure&#x27;</code> | <code>&#x27;innovation&#x27;</code> | <code>&#x27;insurance&#x27;</code> | <code>&#x27;International&#x27;</code> | <code>&#x27;internet&#x27;</code> | <code>&#x27;internet-of-things&#x27;</code> | <code>&#x27;inverse&#x27;</code> | <code>&#x27;investment-grade&#x27;</code> | <code>&#x27;IPO&#x27;</code> | <code>&#x27;Ireland&#x27;</code> | <code>&#x27;Israel&#x27;</code> | <code>&#x27;Italy&#x27;</code> | <code>&#x27;Japan&#x27;</code> | <code>&#x27;Jim-Cramer&#x27;</code> | <code>&#x27;JPM&#x27;</code> | <code>&#x27;JPY&#x27;</code> | <code>&#x27;Kuwait&#x27;</code> | <code>&#x27;large-cap&#x27;</code> | <code>&#x27;Latin-America&#x27;</code> | <code>&#x27;leadership&#x27;</code> | <code>&#x27;leverage&#x27;</code> | <code>&#x27;lifestyle&#x27;</code> | <code>&#x27;lithium&#x27;</code> | <code>&#x27;loans&#x27;</code> | <code>&#x27;long-short&#x27;</code> | <code>&#x27;luxury&#x27;</code> | <code>&#x27;M&amp;A&#x27;</code> | <code>&#x27;machine-learning&#x27;</code> | <code>&#x27;macro&#x27;</code> | <code>&#x27;Malaysia&#x27;</code> | <code>&#x27;market-sentiment&#x27;</code> | <code>&#x27;marketing&#x27;</code> | <code>&#x27;materials&#x27;</code> | <code>&#x27;MBS&#x27;</code> | <code>&#x27;media&#x27;</code> | <code>&#x27;medical&#x27;</code> | <code>&#x27;mega-cap&#x27;</code> | <code>&#x27;META&#x27;</code> | <code>&#x27;metals&#x27;</code> | <code>&#x27;metaverse&#x27;</code> | <code>&#x27;Mexico&#x27;</code> | <code>&#x27;micro-cap&#x27;</code> | <code>&#x27;mid-cap&#x27;</code> | <code>&#x27;mid-large-cap&#x27;</code> | <code>&#x27;midstream&#x27;</code> | <code>&#x27;military&#x27;</code> | <code>&#x27;millennial&#x27;</code> | <code>&#x27;miners&#x27;</code> | <code>&#x27;MLP&#x27;</code> | <code>&#x27;mobile-payments&#x27;</code> | <code>&#x27;moderate&#x27;</code> | <code>&#x27;momentum&#x27;</code> | <code>&#x27;monopolies&#x27;</code> | <code>&#x27;MSFT&#x27;</code> | <code>&#x27;multi-asset&#x27;</code> | <code>&#x27;multi-factor&#x27;</code> | <code>&#x27;multi-sector&#x27;</code> | <code>&#x27;municipal-bonds&#x27;</code> | <code>&#x27;music&#x27;</code> | <code>&#x27;Nasdaq-composite&#x27;</code> | <code>&#x27;Nasdaq100&#x27;</code> | <code>&#x27;natural-gas&#x27;</code> | <code>&#x27;natural-resources&#x27;</code> | <code>&#x27;Netherlands&#x27;</code> | <code>&#x27;network&#x27;</code> | <code>&#x27;New-Zealand&#x27;</code> | <code>&#x27;next-gen&#x27;</code> | <code>&#x27;NFLX&#x27;</code> | <code>&#x27;nickel&#x27;</code> | <code>&#x27;Nigeria&#x27;</code> | <code>&#x27;Nikkei-400&#x27;</code> | <code>&#x27;non-ESG&#x27;</code> | <code>&#x27;North-America&#x27;</code> | <code>&#x27;Norway&#x27;</code> | <code>&#x27;nuclear-energy&#x27;</code> | <code>&#x27;NVDA&#x27;</code> | <code>&#x27;ocean&#x27;</code> | <code>&#x27;oil&#x27;</code> | <code>&#x27;oil-gas-exp-prod&#x27;</code> | <code>&#x27;oil-gas-services&#x27;</code> | <code>&#x27;online-stores&#x27;</code> | <code>&#x27;options&#x27;</code> | <code>&#x27;Pakistan&#x27;</code> | <code>&#x27;palladium&#x27;</code> | <code>&#x27;patents&#x27;</code> | <code>&#x27;Peru&#x27;</code> | <code>&#x27;pet-care&#x27;</code> | <code>&#x27;pharmaceutical&#x27;</code> | <code>&#x27;philippines&#x27;</code> | <code>&#x27;physical&#x27;</code> | <code>&#x27;pipelines&#x27;</code> | <code>&#x27;platinum&#x27;</code> | <code>&#x27;Poland&#x27;</code> | <code>&#x27;politics&#x27;</code> | <code>&#x27;Portugal&#x27;</code> | <code>&#x27;precious-metals&#x27;</code> | <code>&#x27;preferred&#x27;</code> | <code>&#x27;preferred-securities&#x27;</code> | <code>&#x27;private-credit&#x27;</code> | <code>&#x27;private-equity&#x27;</code> | <code>&#x27;put-write&#x27;</code> | <code>&#x27;PYPL&#x27;</code> | <code>&#x27;quality&#x27;</code> | <code>&#x27;quantitative&#x27;</code> | <code>&#x27;quantum-computing&#x27;</code> | <code>&#x27;Quatar&#x27;</code> | <code>&#x27;R&amp;D&#x27;</code> | <code>&#x27;rare-earth&#x27;</code> | <code>&#x27;real-assets&#x27;</code> | <code>&#x27;real-estate&#x27;</code> | <code>&#x27;regional-banks&#x27;</code> | <code>&#x27;REITs&#x27;</code> | <code>&#x27;relative-strength&#x27;</code> | <code>&#x27;renewable-energy&#x27;</code> | <code>&#x27;republicans&#x27;</code> | <code>&#x27;responsible&#x27;</code> | <code>&#x27;restaurant&#x27;</code> | <code>&#x27;retail&#x27;</code> | <code>&#x27;retail-stores&#x27;</code> | <code>&#x27;revenue&#x27;</code> | <code>&#x27;rising-rates&#x27;</code> | <code>&#x27;robotics&#x27;</code> | <code>&#x27;Russell-1000&#x27;</code> | <code>&#x27;Russell-200&#x27;</code> | <code>&#x27;Russell-2000&#x27;</code> | <code>&#x27;Russell-2500&#x27;</code> | <code>&#x27;Russell-3000&#x27;</code> | <code>&#x27;Saudi-Arabia&#x27;</code> | <code>&#x27;sector-rotation&#x27;</code> | <code>&#x27;semiconductors&#x27;</code> | <code>&#x27;senior-loans&#x27;</code> | <code>&#x27;sharia-compliant&#x27;</code> | <code>&#x27;shipping&#x27;</code> | <code>&#x27;short&#x27;</code> | <code>&#x27;silver&#x27;</code> | <code>&#x27;silver-miners&#x27;</code> | <code>&#x27;Singapore&#x27;</code> | <code>&#x27;single-asset&#x27;</code> | <code>&#x27;SLV&#x27;</code> | <code>&#x27;small-cap&#x27;</code> | <code>&#x27;small-mid-cap&#x27;</code> | <code>&#x27;smart-grid&#x27;</code> | <code>&#x27;smart-mobility&#x27;</code> | <code>&#x27;social&#x27;</code> | <code>&#x27;social-media&#x27;</code> | <code>&#x27;software&#x27;</code> | <code>&#x27;solar&#x27;</code> | <code>&#x27;South-Africa&#x27;</code> | <code>&#x27;South-Korea&#x27;</code> | <code>&#x27;soybean&#x27;</code> | <code>&#x27;SP100&#x27;</code> | <code>&#x27;SP1000&#x27;</code> | <code>&#x27;SP1500&#x27;</code> | <code>&#x27;SP400&#x27;</code> | <code>&#x27;SP500&#x27;</code> | <code>&#x27;SP600&#x27;</code> | <code>&#x27;SPAC&#x27;</code> | <code>&#x27;space-exploration&#x27;</code> | <code>&#x27;Spain&#x27;</code> | <code>&#x27;spin-off&#x27;</code> | <code>&#x27;steel&#x27;</code> | <code>&#x27;sugar&#x27;</code> | <code>&#x27;sukuk&#x27;</code> | <code>&#x27;sustainability&#x27;</code> | <code>&#x27;Sweden&#x27;</code> | <code>&#x27;Switzerland&#x27;</code> | <code>&#x27;tactical&#x27;</code> | <code>&#x27;Taiwan&#x27;</code> | <code>&#x27;target-drawdown&#x27;</code> | <code>&#x27;technology&#x27;</code> | <code>&#x27;Thailand&#x27;</code> | <code>&#x27;timber&#x27;</code> | <code>&#x27;TIPS&#x27;</code> | <code>&#x27;transportation&#x27;</code> | <code>&#x27;travel&#x27;</code> | <code>&#x27;treasuries&#x27;</code> | <code>&#x27;TSLA&#x27;</code> | <code>&#x27;Turkey&#x27;</code> | <code>&#x27;U.K.&#x27;</code> | <code>&#x27;U.S.&#x27;</code> | <code>&#x27;UAE&#x27;</code> | <code>&#x27;upside-cap&#x27;</code> | <code>&#x27;upstream&#x27;</code> | <code>&#x27;uranium&#x27;</code> | <code>&#x27;uranium-miners&#x27;</code> | <code>&#x27;USD&#x27;</code> | <code>&#x27;USO&#x27;</code> | <code>&#x27;utilities&#x27;</code> | <code>&#x27;value&#x27;</code> | <code>&#x27;variable-rate&#x27;</code> | <code>&#x27;vegan&#x27;</code> | <code>&#x27;Vietnam&#x27;</code> | <code>&#x27;vix&#x27;</code> | <code>&#x27;volatility&#x27;</code> | <code>&#x27;volatility-index&#x27;</code> | <code>&#x27;volatility-weight&#x27;</code> | <code>&#x27;water&#x27;</code> | <code>&#x27;weapons&#x27;</code> | <code>&#x27;wellness&#x27;</code> | <code>&#x27;wheat&#x27;</code> | <code>&#x27;wind&#x27;</code> | <code>&#x27;wood&#x27;</code> | <code>&#x27;XOM&#x27;</code> | <code>&#x27;Yuan&#x27;</code> | <code>&#x27;zero-coupon&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+signal"></a>

### fv.signal(signal) ⇒ <code>this</code>

TA Signal

**Arguments**

- **signal (<code>&#x27;Top Gainers&#x27;</code> | <code>&#x27;Top Losers&#x27;</code> | <code>&#x27;New High&#x27;</code> | <code>&#x27;New Low&#x27;</code> | <code>&#x27;Most Volatile&#x27;</code> | <code>&#x27;Most Active&#x27;</code> | <code>&#x27;Unusual Volume&#x27;</code> | <code>&#x27;Overbought&#x27;</code> | <code>&#x27;Oversold&#x27;</code> | <code>&#x27;Downgrades&#x27;</code> | <code>&#x27;Upgrades&#x27;</code> | <code>&#x27;Earnings Before&#x27;</code> | <code>&#x27;Earnings After&#x27;</code> | <code>&#x27;Recent Insider Buying&#x27;</code> | <code>&#x27;Recent Insider Selling&#x27;</code> | <code>&#x27;Major News&#x27;</code> | <code>&#x27;Horizontal S/R&#x27;</code> | <code>&#x27;TL Resistance&#x27;</code> | <code>&#x27;TL Support&#x27;</code> | <code>&#x27;Wedge Up&#x27;</code> | <code>&#x27;Wedge Down&#x27;</code> | <code>&#x27;Triangle Ascending&#x27;</code> | <code>&#x27;Triangle Descending&#x27;</code> | <code>&#x27;Wedge&#x27;</code> | <code>&#x27;Channel Up&#x27;</code> | <code>&#x27;Channel Down&#x27;</code> | <code>&#x27;Channel&#x27;</code> | <code>&#x27;Double Top&#x27;</code> | <code>&#x27;Double Bottom&#x27;</code> | <code>&#x27;Multiple Top&#x27;</code> | <code>&#x27;Multiple Bottom&#x27;</code> | <code>&#x27;Head &amp; Shoulders&#x27;</code> | <code>&#x27;Head &amp; Shoulders Inverse&#x27;</code>)** : TA signal

**Returns**

- **<code>this</code>** : this


<br><a name="TypeDefinitions"></a>

## Type Definitions

<br><a name="Options"></a>

## Options : <code>object</code>


**Properties**

- **pageLimit (<code>number</code>)** : Maximum number of pages to fetch. Set to `0` to disable. Default is 1
- **requestTimeout (<code>number</code>)** : Number of milliseconds to wait between requests. Default is 1000

