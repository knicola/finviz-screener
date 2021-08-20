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

- **filter (<code>&#x27;S&amp;P 500&#x27;</code> | <code>&#x27;DJIA&#x27;</code>)** : Filter

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

Quarter over quarter growth.

**Arguments**

- **filter (<code>&#x27;Negative (&lt;0%)&#x27;</code> | <code>&#x27;Positive (&gt;0%)&#x27;</code> | <code>&#x27;Positive Low (0-10%)&#x27;</code> | <code>&#x27;High (&gt;25%)&#x27;</code> | <code>&#x27;Under 5%&#x27;</code> | <code>&#x27;Under 10%&#x27;</code> | <code>&#x27;Under 15%&#x27;</code> | <code>&#x27;Under 20%&#x27;</code> | <code>&#x27;Under 25%&#x27;</code> | <code>&#x27;Under 30%&#x27;</code> | <code>&#x27;Over 5%&#x27;</code> | <code>&#x27;Over 10%&#x27;</code> | <code>&#x27;Over 15%&#x27;</code> | <code>&#x27;Over 20%&#x27;</code> | <code>&#x27;Over 25%&#x27;</code> | <code>&#x27;Over 30%&#x27;</code>)** : Filter

**Returns**

- **<code>this</code>** : this


<br><a name="FinVizScreener+dividendYield"></a>

### fv.dividendYield(filter) ⇒ <code>this</code>

The dividend yield equals the annual dividend per share divided by the stock’s price. This measurement tells what percentage return a company pays out to shareholders in the form of dividends.

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

- **filter (<code>&#x27;Optionable&#x27;</code> | <code>&#x27;Shortable&#x27;</code> | <code>&#x27;Optionable and shortable&#x27;</code>)** : Filter

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

- **filter (<code>&#x27;Under 50K&#x27;</code> | <code>&#x27;Under 100K&#x27;</code> | <code>&#x27;Under 500K&#x27;</code> | <code>&#x27;Under 750K&#x27;</code> | <code>&#x27;Under 1M&#x27;</code> | <code>&#x27;Over 0&#x27;</code> | <code>&#x27;Over 50K&#x27;</code> | <code>&#x27;Over 100K&#x27;</code> | <code>&#x27;Over 200K&#x27;</code> | <code>&#x27;Over 300K&#x27;</code> | <code>&#x27;Over 400K&#x27;</code> | <code>&#x27;Over 500K&#x27;</code> | <code>&#x27;Over 750K&#x27;</code> | <code>&#x27;Over 1M&#x27;</code> | <code>&#x27;Over 2M&#x27;</code> | <code>&#x27;Over 5M&#x27;</code> | <code>&#x27;Over 10M&#x27;</code> | <code>&#x27;Over 20M&#x27;</code>)** : Filter

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

- **filter (<code>&#x27;Under 1M&#x27;</code> | <code>&#x27;Under 5M&#x27;</code> | <code>&#x27;Under 10M&#x27;</code> | <code>&#x27;Under 20M&#x27;</code> | <code>&#x27;Under 50M&#x27;</code> | <code>&#x27;Under 100M&#x27;</code> | <code>&#x27;Over 1M&#x27;</code> | <code>&#x27;Over 2M&#x27;</code> | <code>&#x27;Over 5M&#x27;</code> | <code>&#x27;Over 10M&#x27;</code> | <code>&#x27;Over 20M&#x27;</code> | <code>&#x27;Over 50M&#x27;</code> | <code>&#x27;Over 100M&#x27;</code> | <code>&#x27;Over 200M&#x27;</code> | <code>&#x27;Over 500M&#x27;</code> | <code>&#x27;Over 1000M&#x27;</code>)** : Filter

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

