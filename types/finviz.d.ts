export class FinVizScreener {
    /**
     * @param options Options
     * @example
     * const fv = new FinVizScreener()
     * 
     * const tickers = await fv
     *     .averageVolume('Over 2M')
     *     .sector('Technology')
     *     .price('Over $50')
     *     .scan()
     * 
     * console.log(tickers) //=> ['AAPL', 'MSFT', 'IBM', ... ]
     */
    constructor(options: Options)
    /**
     * Client instance options
     */
    options: Options;
    /**
     * Scan for stocks.
     * @returns List of stock tickers
     */
    scan(): Promise<Array<string>>;
    /**
     * Stock Exchange at which a stock is listed.
     * @param filter Filter
     * @returns this
     */
    exchange(filter: 'AMEX'|'NASDAQ'|'NYSE'): this;
    /**
     * A major index membership of a stock.
     * @param filter Filter
     * @returns this
     */
    index(filter: 'S&P 500'|'NASDAQ 100'|'DJIA'|'RUSSELL 2000'): this;
    /**
     * The sector which a stock belongs to.
     * @param filter Filter
     * @returns this
     */
    sector(filter: 'Basic Materials'|'Communication Services'|'Consumer Cyclical'|'Consumer Defensive'|'Energy'|'Financial'|'Healthcare'|'Industrials'|'Real Estate'|'Technology'|'Utilities'): this;
    /**
     * The industry which a stock belongs to.
     * @param filter Filter
     * @returns this
     */
    industry(filter: 'Stocks only (ex-Funds)'|'Exchange Traded Fund'|'Advertising Agencies'|'Aerospace & Defense'|'Agricultural Inputs'|'Airlines'|'Airports & Air Services'|'Aluminum'|'Apparel Manufacturing'|'Apparel Retail'|'Asset Management'|'Auto Manufacturers'|'Auto Parts'|'Auto & Truck Dealerships'|'Banks - Diversified'|'Banks - Regional'|'Beverages - Brewers'|'Beverages - Non-Alcoholic'|'Beverages - Wineries & Distilleries'|'Biotechnology'|'Broadcasting'|'Building Materials'|'Building Products & Equipment'|'Business Equipment & Supplies'|'Capital Markets'|'Chemicals'|'Closed-End Fund - Debt'|'Closed-End Fund - Equity'|'Closed-End Fund - Foreign'|'Coking Coal'|'Communication Equipment'|'Computer Hardware'|'Confectioners'|'Conglomerates'|'Consulting Services'|'Consumer Electronics'|'Copper'|'Credit Services'|'Department Stores'|'Diagnostics & Research'|'Discount Stores'|'Drug Manufacturers - General'|'Drug Manufacturers - Specialty & Generic'|'Education & Training Services'|'Electrical Equipment & Parts'|'Electronic Components'|'Electronic Gaming & Multimedia'|'Electronics & Computer Distribution'|'Engineering & Construction'|'Entertainment'|'Exchange Traded Fund'|'Farm & Heavy Construction Machinery'|'Farm Products'|'Financial Conglomerates'|'Financial Data & Stock Exchanges'|'Food Distribution'|'Footwear & Accessories'|'Furnishings, Fixtures & Appliances'|'Gambling'|'Gold'|'Grocery Stores'|'Healthcare Plans'|'Health Information Services'|'Home Improvement Retail'|'Household & Personal Products'|'Industrial Distribution'|'Information Technology Services'|'Infrastructure Operations'|'Insurance Brokers'|'Insurance - Diversified'|'Insurance - Life'|'Insurance - Property & Casualty'|'Insurance - Reinsurance'|'Insurance - Specialty'|'Integrated Freight & Logistics'|'Internet Content & Information'|'Internet Retail'|'Leisure'|'Lodging'|'Lumber & Wood Production'|'Luxury Goods'|'Marine Shipping'|'Medical Care Facilities'|'Medical Devices'|'Medical Distribution'|'Medical Instruments & Supplies'|'Metal Fabrication'|'Mortgage Finance'|'Oil & Gas Drilling'|'Oil & Gas E&P'|'Oil & Gas Equipment & Services'|'Oil & Gas Integrated'|'Oil & Gas Midstream'|'Oil & Gas Refining & Marketing'|'Other Industrial Metals & Mining'|'Other Precious Metals & Mining'|'Packaged Foods'|'Packaging & Containers'|'Paper & Paper Products'|'Personal Services'|'Pharmaceutical Retailers'|'Pollution & Treatment Controls'|'Publishing'|'Railroads'|'Real Estate - Development'|'Real Estate - Diversified'|'Real Estate Services'|'Recreational Vehicles'|'REIT - Diversified'|'REIT - Healthcare Facilities'|'REIT - Hotel & Motel'|'REIT - Industrial'|'REIT - Mortgage'|'REIT - Office'|'REIT - Residential'|'REIT - Retail'|'REIT - Specialty'|'Rental & Leasing Services'|'Residential Construction'|'Resorts & Casinos'|'Restaurants'|'Scientific & Technical Instruments'|'Security & Protection Services'|'Semiconductor Equipment & Materials'|'Semiconductors'|'Shell Companies'|'Silver'|'Software - Application'|'Software - Infrastructure'|'Solar'|'Specialty Business Services'|'Specialty Chemicals'|'Specialty Industrial Machinery'|'Specialty Retail'|'Staffing & Employment Services'|'Steel'|'Telecom Services'|'Textile Manufacturing'|'Thermal Coal'|'Tobacco'|'Tools & Accessories'|'Travel Services'|'Trucking'|'Uranium'|'Utilities - Diversified'|'Utilities - Independent Power Producers'|'Utilities - Regulated Electric'|'Utilities - Regulated Gas'|'Utilities - Regulated Water'|'Utilities - Renewable'|'Waste Management'): this;
    /**
     * The country where company of selected stock is based.
     * @param filter Filter
     * @returns this
     */
    country(filter: 'USA'|'Foreign (ex-USA)'|'Asia'|'Europe'|'Latin America'|'BRIC'|'Argentina'|'Australia'|'Bahamas'|'Belgium'|'BeNeLux'|'Bermuda'|'Brazil'|'Canada'|'Cayman Islands'|'Chile'|'China'|'China & Hong Kong'|'Colombia'|'Cyprus'|'Denmark'|'Finland'|'France'|'Germany'|'Greece'|'Hong Kong'|'Hungary'|'Iceland'|'India'|'Indonesia'|'Ireland'|'Israel'|'Italy'|'Japan'|'Kazakhstan'|'Luxembourg'|'Malaysia'|'Malta'|'Mexico'|'Monaco'|'Netherlands'|'New Zealand'|'Norway'|'Panama'|'Peru'|'Philippines'|'Portugal'|'Russia'|'Singapore'|'South Africa'|'South Korea'|'Spain'|'Sweden'|'Switzerland'|'Taiwan'|'Turkey'|'United Arab Emirates'|'United Kingdom'|'Uruguay'): this;
    /**
     * Equals The total dollar market value of all of a company's outstanding shares.
     * @param filter Filter
     * @returns this
     */
    marketCap(filter: 'Mega ($200bln and more)'|'Large ($10bln to $200bln)'|'Mid ($2bln to $10bln)'|'Small ($300mln to $2bln)'|'Micro ($50mln to $300mln)'|'Nano (under $50mln)'|'+Large (over $10bln)'|'+Mid (over $2bln)'|'+Small (over $300mln)'|'+Micro (over $50mln)'|'-Large (under $200bln)'|'-Mid (under $10bln)'|'-Small (under $2bln)'|'-Micro (under $300mln)'): this;
    /**
     * A valuation ratio of a company's current share price compared to its per-share earnings (ttm).
     * @param filter Filter
     * @returns this
     */
    pe(filter: 'Low (<15)'|'Profitable (>0)'|'High (>50)'|'Under 5'|'Under 10'|'Under 15'|'Under 20'|'Under 25'|'Under 30'|'Under 35'|'Under 40'|'Under 45'|'Under 50'|'Over 5'|'Over 10'|'Over 15'|'Over 20'|'Over 25'|'Over 30'|'Over 35'|'Over 40'|'Over 45'|'Over 50'): this;
    /**
     * A measure of the price-to-earnings ratio using forecasted earnings for the P/E calculation. Value for next fiscal year.
     * @param filter Filter
     * @returns this
     */
    forwardPe(filter: 'Low (<15)'|'Profitable (>0)'|'High (>50)'|'Under 5'|'Under 10'|'Under 15'|'Under 20'|'Under 25'|'Under 30'|'Under 35'|'Under 40'|'Under 45'|'Under 50'|'Over 5'|'Over 10'|'Over 15'|'Over 20'|'Over 25'|'Over 30'|'Over 35'|'Over 40'|'Over 45'|'Over 50'): this;
    /**
     * A ratio used to determine a stock's value while taking into account earnings growth.
     * @param filter Filter
     * @returns this
     */
    peg(filter: 'Low (<1)'|'High (>2)'|'Under 1'|'Under 2'|'Under 3'|'Over 1'|'Over 2'|'Over 3'): this;
    /**
     * P/S number reflects the value placed on sales by the market. It is calculated by dividing the current closing price of the stock by the dollar-sales value per share.
     * @param filter Filter
     * @returns this
     */
    ps(filter: 'Low (<1)'|'High (>10)'|'Under 1'|'Under 2'|'Under 3'|'Under 4'|'Under 5'|'Under 6'|'Under 7'|'Under 8'|'Under 9'|'Under 10'|'Over 1'|'Over 2'|'Over 3'|'Over 4'|'Over 5'|'Over 6'|'Over 7'|'Over 8'|'Over 9'|'Over 10'): this;
    /**
     * A ratio used to compare a stock's market value to its book value. It is calculated by dividing the current closing price of the stock by the latest quarter's book value per share.
     * @param filter Filter
     * @returns this
     */
    pb(filter: 'Low (<1)'|'High (>5)'|'Under 1'|'Under 2'|'Under 3'|'Under 4'|'Under 5'|'Under 6'|'Under 7'|'Under 8'|'Under 9'|'Under 10'|'Over 1'|'Over 2'|'Over 3'|'Over 4'|'Over 5'|'Over 6'|'Over 7'|'Over 8'|'Over 9'|'Over 10'): this;
    /**
     * A ratio used to compare a stock's market value to its cash assets. It is calculated by dividing the current closing price of the stock by the latest quarter's cash per share.
     * @param filter Filter
     * @returns this
     */
    priceCash(filter: 'Low (<3)'|'High (>50)'|'Under 1'|'Under 2'|'Under 3'|'Under 4'|'Under 5'|'Under 6'|'Under 7'|'Under 8'|'Under 9'|'Under 10'|'Over 1'|'Over 2'|'Over 3'|'Over 4'|'Over 5'|'Over 6'|'Over 7'|'Over 8'|'Over 9'|'Over 10'|'Over 20'|'Over 30'|'Over 40'|'Over 50'): this;
    /**
     * A valuation metric that compares a company's market price to its level of annual free cash flow.
     * @param filter Filter
     * @returns this
     */
    priceFreeCashFlow(filter: 'Low (<15)'|'High (>50)'|'Under 5'|'Under 10'|'Under 15'|'Under 20'|'Under 25'|'Under 30'|'Under 35'|'Under 40'|'Under 45'|'Under 50'|'Under 60'|'Under 70'|'Under 80'|'Under 90'|'Under 100'|'Over 5'|'Over 10'|'Over 15'|'Over 20'|'Over 25'|'Over 30'|'Over 35'|'Over 40'|'Over 45'|'Over 50'|'Over 60'|'Over 70'|'Over 80'|'Over 90'|'Over 100'): this;
    /**
     * EPS is the portion of a company's profit allocated to each outstanding share of common stock. EPS serves as an indicator of a company's profitability. Value for current fiscal year.
     * @param filter Filter
     * @returns this
     */
    epsGrowththisYear(filter: 'Negative (<0%)'|'Positive (>0%)'|'Positive Low (0-10%)'|'High (>25%)'|'Under 5%'|'Under 10%'|'Under 15%'|'Under 20%'|'Under 25%'|'Under 30%'|'Over 5%'|'Over 10%'|'Over 15%'|'Over 20%'|'Over 25%'|'Over 30%'): this;
    /**
     * EPS is the portion of a company's profit allocated to each outstanding share of common stock. EPS serves as an indicator of a company's profitability. Estimate for next fiscal year.
     * @param filter Filter
     * @returns this
     */
    epsGrowthnextYear(filter: 'Negative (<0%)'|'Positive (>0%)'|'Positive Low (0-10%)'|'High (>25%)'|'Under 5%'|'Under 10%'|'Under 15%'|'Under 20%'|'Under 25%'|'Under 30%'|'Over 5%'|'Over 10%'|'Over 15%'|'Over 20%'|'Over 25%'|'Over 30%'): this;
    /**
     * EPS is the portion of a company's profit allocated to each outstanding share of common stock. EPS serves as an indicator of a company's profitability. Annual growth over past 5 years.
     * @param filter Filter
     * @returns this
     */
    epsGrowthpast5Years(filter: 'Negative (<0%)'|'Positive (>0%)'|'Positive Low (0-10%)'|'High (>25%)'|'Under 5%'|'Under 10%'|'Under 15%'|'Under 20%'|'Under 25%'|'Under 30%'|'Over 5%'|'Over 10%'|'Over 15%'|'Over 20%'|'Over 25%'|'Over 30%'): this;
    /**
     * EPS is the portion of a company's profit allocated to each outstanding share of common stock. EPS serves as an indicator of a company's profitability. Long term annual growth estimate.
     * @param filter Filter
     * @returns this
     */
    epsGrowthnext5Years(filter: 'Negative (<0%)'|'Positive (>0%)'|'Positive Low (<10%)'|'High (>25%)'|'Under 5%'|'Under 10%'|'Under 15%'|'Under 20%'|'Under 25%'|'Under 30%'|'Over 5%'|'Over 10%'|'Over 15%'|'Over 20%'|'Over 25%'|'Over 30%'): this;
    /**
     * Annual growth over past 5 years.
     * @param filter Filter
     * @returns this
     */
    salesGrowthpast5Years(filter: 'Negative (<0%)'|'Positive (>0%)'|'Positive Low (0-10%)'|'High (>25%)'|'Under 5%'|'Under 10%'|'Under 15%'|'Under 20%'|'Under 25%'|'Under 30%'|'Over 5%'|'Over 10%'|'Over 15%'|'Over 20%'|'Over 25%'|'Over 30%'): this;
    /**
     * EPS is the portion of a company's profit allocated to each outstanding share of common stock. EPS serves as an indicator of a company's profitability. Quarter over quarter growth.
     * @param filter Filter
     * @returns this
     */
    epsGrowthqtrOverQtr(filter: 'Negative (<0%)'|'Positive (>0%)'|'Positive Low (0-10%)'|'High (>25%)'|'Under 5%'|'Under 10%'|'Under 15%'|'Under 20%'|'Under 25%'|'Under 30%'|'Over 5%'|'Over 10%'|'Over 15%'|'Over 20%'|'Over 25%'|'Over 30%'): this;
    /**
     * Quarter over quarter growth compared on a year over year basis.
     * @param filter Filter
     * @returns this
     */
    salesGrowthqtrOverQtr(filter: 'Negative (<0%)'|'Positive (>0%)'|'Positive Low (0-10%)'|'High (>25%)'|'Under 5%'|'Under 10%'|'Under 15%'|'Under 20%'|'Under 25%'|'Under 30%'|'Over 5%'|'Over 10%'|'Over 15%'|'Over 20%'|'Over 25%'|'Over 30%'): this;
    /**
     * Company's reported earnings/revenue are above or below analysts' expectations.
     * @param filter Filter
     * @returns this
     */
    earningsRevenueSurprise(filter: 'Both positive (>0%)'|'Both met (0%)'|'Both negative (<0%)'): this;
    /**
     * The dividend yield equals the annual dividend per share divided by the stock’s price. This measurement tells what percentage return a company pays out to shareholders in the form of dividends. If there is no forward dividend estimate available, trailing twelve month (TTM) value is used.
     * @param filter Filter
     * @returns this
     */
    dividendYield(filter: 'None (0%)'|'Positive (>0%)'|'High (>5%)'|'Very High (>10%)'|'Over 1%'|'Over 2%'|'Over 3%'|'Over 4%'|'Over 5%'|'Over 6%'|'Over 7%'|'Over 8%'|'Over 9%'|'Over 10%'): this;
    /**
     * An indicator of how profitable a company is relative to its total assets. ROA gives an idea as to how efficient management is at using its assets to generate earnings. Calculated by dividing a company's annual earnings by its total assets, ROA is displayed as a percentage.
     * @param filter Filter
     * @returns this
     */
    returnOnAssets(filter: 'Positive (>0%)'|'Negative (<0%)'|'Very Positive (>15%)'|'Very Negative (<-15%)'|'Under -50%'|'Under -45%'|'Under -40%'|'Under -35%'|'Under -30%'|'Under -25%'|'Under -20%'|'Under -15%'|'Under -10%'|'Under -5%'|'Over +5%'|'Over +10%'|'Over +15%'|'Over +20%'|'Over +25%'|'Over +30%'|'Over +35%'|'Over +40%'|'Over +45%'|'Over +50%'): this;
    /**
     * A measure of a corporation's profitability that reveals how much profit a company generates with the money shareholders have invested. Calculated as Net Income / Shareholder's Equity.
     * @param filter Filter
     * @returns this
     */
    returnOnEquity(filter: 'Positive (>0%)'|'Negative (<0%)'|'Very Positive (>30%)'|'Very Negative (<-15%)'|'Under -50%'|'Under -45%'|'Under -40%'|'Under -35%'|'Under -30%'|'Under -25%'|'Under -20%'|'Under -15%'|'Under -10%'|'Under -5%'|'Over +5%'|'Over +10%'|'Over +15%'|'Over +20%'|'Over +25%'|'Over +30%'|'Over +35%'|'Over +40%'|'Over +45%'|'Over +50%'): this;
    /**
     * Performance measure used to evaluate the efficiency of an investment or to compare the efficiency of a number of different investments. To calculate ROI, the benefit (return) of an investment is divided by the cost of the investment: (Gain from Investment - Cost of Investment) / Cost of Investment.
     * @param filter Filter
     * @returns this
     */
    returnOnInvestment(filter: 'Positive (>0%)'|'Negative (<0%)'|'Very Positive (>25%)'|'Very Negative (<-10%)'|'Under -50%'|'Under -45%'|'Under -40%'|'Under -35%'|'Under -30%'|'Under -25%'|'Under -20%'|'Under -15%'|'Under -10%'|'Under -5%'|'Over +5%'|'Over +10%'|'Over +15%'|'Over +20%'|'Over +25%'|'Over +30%'|'Over +35%'|'Over +40%'|'Over +45%'|'Over +50%'): this;
    /**
     * A liquidity ratio that measures a company's ability to pay short-term obligations. Calculated as Current Assets / Current Liabilities.
     * @param filter Filter
     * @returns this
     */
    currentRatio(filter: 'High (>3)'|'Low (<1)'|'Under 1'|'Under 0.5'|'Over 0.5'|'Over 1'|'Over 1.5'|'Over 2'|'Over 3'|'Over 4'|'Over 5'|'Over 10'): this;
    /**
     * An indicator of a company's short-term liquidity. The quick ratio measures a company's ability to meet its short-term obligations with its most liquid assets. The higher the quick ratio, the better the position of the company. Calculated as (Current Assets - Inventories) / Current Liabilities.
     * @param filter Filter
     * @returns this
     */
    quickRatio(filter: 'High (>3)'|'Low (<0.5)'|'Under 1'|'Under 0.5'|'Over 0.5'|'Over 1'|'Over 1.5'|'Over 2'|'Over 3'|'Over 4'|'Over 5'|'Over 10'): this;
    /**
     * A measure of a company's financial leverage calculated by dividing its long term debt by stockholders' equity. It indicates what proportion of equity and debt the company is using to finance its assets.
     * @param filter Filter
     * @returns this
     */
    ltDebtEquity(filter: 'High (>0.5)'|'Low (<0.1)'|'Under 1'|'Under 0.9'|'Under 0.8'|'Under 0.7'|'Under 0.6'|'Under 0.5'|'Under 0.4'|'Under 0.3'|'Under 0.2'|'Under 0.1'|'Over 0.1'|'Over 0.2'|'Over 0.3'|'Over 0.4'|'Over 0.5'|'Over 0.6'|'Over 0.7'|'Over 0.8'|'Over 0.9'|'Over 1'): this;
    /**
     * A measure of a company's financial leverage calculated by dividing its liabilities by stockholders' equity. It indicates what proportion of equity and debt the company is using to finance its assets.
     * @param filter Filter
     * @returns this
     */
    debtEquity(filter: 'High (>0.5)'|'Low (<0.1)'|'Under 1'|'Under 0.9'|'Under 0.8'|'Under 0.7'|'Under 0.6'|'Under 0.5'|'Under 0.4'|'Under 0.3'|'Under 0.2'|'Under 0.1'|'Over 0.1'|'Over 0.2'|'Over 0.3'|'Over 0.4'|'Over 0.5'|'Over 0.6'|'Over 0.7'|'Over 0.8'|'Over 0.9'|'Over 1'): this;
    /**
     * A company's total sales revenue minus its cost of goods sold, divided by the total sales revenue, expressed as a percentage. The gross margin represents the percent of total sales revenue that the company retains after incurring the direct costs associated with producing the goods and services sold by a company. The higher the percentage, the more the company retains on each dollar of sales to service its other costs and obligations.
     * @param filter Filter
     * @returns this
     */
    grossMargin(filter: 'Positive (>0%)'|'Negative (<0%)'|'High (>50%)'|'Under 90%'|'Under 80%'|'Under 70%'|'Under 60%'|'Under 50%'|'Under 45%'|'Under 40%'|'Under 35%'|'Under 30%'|'Under 25%'|'Under 20%'|'Under 15%'|'Under 10%'|'Under 5%'|'Under 0%'|'Under -10%'|'Under -20%'|'Under -30%'|'Under -50%'|'Under -70%'|'Under -100%'|'Over 0%'|'Over 5%'|'Over 10%'|'Over 15%'|'Over 20%'|'Over 25%'|'Over 30%'|'Over 35%'|'Over 40%'|'Over 45%'|'Over 50%'|'Over 60%'|'Over 70%'|'Over 80%'|'Over 90%'): this;
    /**
     * Operating margin is a measurement of what proportion of a company's revenue is left over after paying for variable costs of production such as wages, raw materials, etc. A healthy operating margin is required for a company to be able to pay for its fixed costs, such as interest on debt. Calculated as Operating Income / Net Sales.
     * @param filter Filter
     * @returns this
     */
    operatingMargin(filter: 'Positive (>0%)'|'Negative (<0%)'|'Very Negative (<-20%)'|'High (>25%)'|'Under 90%'|'Under 80%'|'Under 70%'|'Under 60%'|'Under 50%'|'Under 45%'|'Under 40%'|'Under 35%'|'Under 30%'|'Under 25%'|'Under 20%'|'Under 15%'|'Under 10%'|'Under 5%'|'Under 0%'|'Under -10%'|'Under -20%'|'Under -30%'|'Under -50%'|'Under -70%'|'Under -100%'|'Over 0%'|'Over 5%'|'Over 10%'|'Over 15%'|'Over 20%'|'Over 25%'|'Over 30%'|'Over 35%'|'Over 40%'|'Over 45%'|'Over 50%'|'Over 60%'|'Over 70%'|'Over 80%'|'Over 90%'): this;
    /**
     * A ratio of profitability calculated as net income divided by revenues, or net profits divided by sales. It measures how much out of every dollar of sales a company actually keeps in earnings.
     * @param filter Filter
     * @returns this
     */
    netProfitMargin(filter: 'Positive (>0%)'|'Negative (<0%)'|'Very Negative (<-20%)'|'High (>20%)'|'Under 90%'|'Under 80%'|'Under 70%'|'Under 60%'|'Under 50%'|'Under 45%'|'Under 40%'|'Under 35%'|'Under 30%'|'Under 25%'|'Under 20%'|'Under 15%'|'Under 10%'|'Under 5%'|'Under 0%'|'Under -10%'|'Under -20%'|'Under -30%'|'Under -50%'|'Under -70%'|'Under -100%'|'Over 0%'|'Over 5%'|'Over 10%'|'Over 15%'|'Over 20%'|'Over 25%'|'Over 30%'|'Over 35%'|'Over 40%'|'Over 45%'|'Over 50%'|'Over 60%'|'Over 70%'|'Over 80%'|'Over 90%'): this;
    /**
     * The percentage of earnings paid to shareholders in dividends.
     * @param filter Filter
     * @returns this
     */
    payoutRatio(filter: 'None (0%)'|'Positive (>0%)'|'Low (<20%)'|'High (>50%)'|'Over 0%'|'Over 10%'|'Over 20%'|'Over 30%'|'Over 40%'|'Over 50%'|'Over 60%'|'Over 70%'|'Over 80%'|'Over 90%'|'Over 100%'|'Under 10%'|'Under 20%'|'Under 30%'|'Under 40%'|'Under 50%'|'Under 60%'|'Under 70%'|'Under 80%'|'Under 90%'|'Under 100%'): this;
    /**
     * Level to which a company is owned by its own management.
     * @param filter Filter
     * @returns this
     */
    insiderOwnership(filter: 'Low (<5%)'|'High (>30%)'|'Very High (>50%)'|'Over 10%'|'Over 20%'|'Over 30%'|'Over 40%'|'Over 50%'|'Over 60%'|'Over 70%'|'Over 80%'|'Over 90%'): this;
    /**
     * A company's shares being purchased or sold by its own management. Value represents 6-month percentual change in total insider ownership.
     * @param filter Filter
     * @returns this
     */
    insiderTransactions(filter: 'Very Negative (<20%)'|'Negative (<0%)'|'Positive (>0%)'|'Very Positive (>20%)'|'Under -90%'|'Under -80%'|'Under -70%'|'Under -60%'|'Under -50%'|'Under -45%'|'Under -40%'|'Under -35%'|'Under -30%'|'Under -25%'|'Under -20%'|'Under -15%'|'Under -10%'|'Under -5%'|'Over +5%'|'Over +10%'|'Over +15%'|'Over +20%'|'Over +25%'|'Over +30%'|'Over +35%'|'Over +40%'|'Over +45%'|'Over +50%'|'Over +60%'|'Over +70%'|'Over +80%'|'Over +90%'): this;
    /**
     * Level to which a company is owned by financial institutions.
     * @param filter Filter
     * @returns this
     */
    institutionalOwnership(filter: 'Low (<5%)'|'High (>90%)'|'Under 90%'|'Under 80%'|'Under 70%'|'Under 60%'|'Under 50%'|'Under 40%'|'Under 30%'|'Under 20%'|'Under 10%'|'Over 10%'|'Over 20%'|'Over 30%'|'Over 40%'|'Over 50%'|'Over 60%'|'Over 70%'|'Over 80%'|'Over 90%'): this;
    /**
     * A company's shares being purchased or sold by financial institutions. Value represents 3-month change in institutional ownership.
     * @param filter Filter
     * @returns this
     */
    institutionalTransactions(filter: 'Very Negative (<20%)'|'Negative (<0%)'|'Positive (>0%)'|'Very Positive (>20%)'|'Under -50%'|'Under -45%'|'Under -40%'|'Under -35%'|'Under -30%'|'Under -25%'|'Under -20%'|'Under -15%'|'Under -10%'|'Under -5%'|'Over +5%'|'Over +10%'|'Over +15%'|'Over +20%'|'Over +25%'|'Over +30%'|'Over +35%'|'Over +40%'|'Over +45%'|'Over +50%'): this;
    /**
     * The amount of short-selling transactions of given stock.
     * @param filter Filter
     * @returns this
     */
    floatShort(filter: 'Low (<5%)'|'High (>20%)'|'Under 5%'|'Under 10%'|'Under 15%'|'Under 20%'|'Under 25%'|'Under 30%'|'Over 5%'|'Over 10%'|'Over 15%'|'Over 20%'|'Over 25%'|'Over 30%'): this;
    /**
     * An outlook of a stock-market analyst on a stock.
     * @param filter Filter
     * @returns this
     */
    analystRecom(filter: 'Strong Buy (1)'|'Buy or better'|'Buy'|'Hold or better'|'Hold'|'Hold or worse'|'Sell'|'Sell or worse'|'Strong Sell (5)'): this;
    /**
     * Stocks with options and/or available to sell short.
     * @param filter Filter
     * @returns this
     */
    optionShort(filter: 'Optionable'|'Shortable'|'Not optionable'|'Not shortable'|'Optionable and shortable'|'Optionable and not shortable'|'Not optionable and shortable'|'Not optionable and not shortable'): this;
    /**
     * Date when company reports earnings
     * @param filter Filter
     * @returns this
     */
    earningsDate(filter: 'Today'|'Today Before Market Open'|'Today After Market Close'|'Tomorrow'|'Tomorrow Before Market Open'|'Tomorrow After Market Close'|'Yesterday'|'Yesterday Before Market Open'|'Yesterday After Market Close'|'Next 5 Days'|'Previous 5 Days'|'This Week'|'Next Week'|'Previous Week'|'This Month'): this;
    /**
     * Rate of return for a given stock.
     * @param filter Filter
     * @returns this
     */
    performance(filter: 'Today Up'|'Today Down'|'Today -15%'|'Today -10%'|'Today -5%'|'Today +5%'|'Today +10%'|'Today +15%'|'Week -30%'|'Week -20%'|'Week -10%'|'Week Down'|'Week Up'|'Week +10%'|'Week +20%'|'Week +30%'|'Month -50%'|'Month -30%'|'Month -20%'|'Month -10%'|'Month Down'|'Month Up'|'Month +10%'|'Month +20%'|'Month +30%'|'Month +50%'|'Quarter -50%'|'Quarter -30%'|'Quarter -20%'|'Quarter -10%'|'Quarter Down'|'Quarter Up'|'Quarter +10%'|'Quarter +20%'|'Quarter +30%'|'Quarter +50%'|'Half -75%'|'Half -50%'|'Half -30%'|'Half -20%'|'Half -10%'|'Half Down'|'Half Up'|'Half +10%'|'Half +20%'|'Half +30%'|'Half +50%'|'Half +100%'|'Year -75%'|'Year -50%'|'Year -30%'|'Year -20%'|'Year -10%'|'Year Down'|'Year Up'|'Year +10%'|'Year +20%'|'Year +30%'|'Year +50%'|'Year +100%'|'Year +200%'|'Year +300%'|'Year +500%'|'YTD -75%'|'YTD -50%'|'YTD -30%'|'YTD -20%'|'YTD -10%'|'YTD -5%'|'YTD Down'|'YTD Up'|'YTD +5%'|'YTD +10%'|'YTD +20%'|'YTD +30%'|'YTD +50%'|'YTD +100%'): this;
    /**
     * Rate of return for a given stock.
     * @param filter Filter
     * @returns this
     */
    performance2(filter: 'Today Up'|'Today Down'|'Today -15%'|'Today -10%'|'Today -5%'|'Today +5%'|'Today +10%'|'Today +15%'|'Week -30%'|'Week -20%'|'Week -10%'|'Week Down'|'Week Up'|'Week +10%'|'Week +20%'|'Week +30%'|'Month -50%'|'Month -30%'|'Month -20%'|'Month -10%'|'Month Down'|'Month Up'|'Month +10%'|'Month +20%'|'Month +30%'|'Month +50%'|'Quarter -50%'|'Quarter -30%'|'Quarter -20%'|'Quarter -10%'|'Quarter Down'|'Quarter Up'|'Quarter +10%'|'Quarter +20%'|'Quarter +30%'|'Quarter +50%'|'Half -75%'|'Half -50%'|'Half -30%'|'Half -20%'|'Half -10%'|'Half Down'|'Half Up'|'Half +10%'|'Half +20%'|'Half +30%'|'Half +50%'|'Half +100%'|'Year -75%'|'Year -50%'|'Year -30%'|'Year -20%'|'Year -10%'|'Year Down'|'Year Up'|'Year +10%'|'Year +20%'|'Year +30%'|'Year +50%'|'Year +100%'|'Year +200%'|'Year +300%'|'Year +500%'|'YTD -75%'|'YTD -50%'|'YTD -30%'|'YTD -20%'|'YTD -10%'|'YTD -5%'|'YTD Down'|'YTD Up'|'YTD +5%'|'YTD +10%'|'YTD +20%'|'YTD +30%'|'YTD +50%'|'YTD +100%'): this;
    /**
     * A statistical measure of the dispersion of returns for a given stock. Represents average daily high/low trading range.
     * @param filter Filter
     * @returns this
     */
    volatility(filter: 'Week - Over 3%'|'Week - Over 4%'|'Week - Over 5%'|'Week - Over 6%'|'Week - Over 7%'|'Week - Over 8%'|'Week - Over 9%'|'Week - Over 10%'|'Week - Over 12%'|'Week - Over 15%'|'Month - Over 2%'|'Month - Over 3%'|'Month - Over 4%'|'Month - Over 5%'|'Month - Over 6%'|'Month - Over 7%'|'Month - Over 8%'|'Month - Over 9%'|'Month - Over 10%'|'Month - Over 12%'|'Month - Over 15%'): this;
    /**
     * The Relative Strength Index (RSI) is a technical analysis oscillator showing price strength by comparing upward and downward close-to-close movements.
     * @param filter Filter
     * @returns this
     */
    rsi14(filter: 'Overbought (90)'|'Overbought (80)'|'Overbought (70)'|'Overbought (60)'|'Oversold (40)'|'Oversold (30)'|'Oversold (20)'|'Oversold (10)'|'Not Overbought (<60)'|'Not Overbought (<50)'|'Not Oversold (>50)'|'Not Oversold (>40)'): this;
    /**
     * The difference between yesterday's closing price and today's opening price.
     * @param filter Filter
     * @returns this
     */
    gap(filter: 'Up'|'Up 0%'|'Up 1%'|'Up 2%'|'Up 3%'|'Up 4%'|'Up 5%'|'Up 6%'|'Up 7%'|'Up 8%'|'Up 9%'|'Up 10%'|'Up 15%'|'Up 20%'|'Down'|'Down 0%'|'Down 1%'|'Down 2%'|'Down 3%'|'Down 4%'|'Down 5%'|'Down 6%'|'Down 7%'|'Down 8%'|'Down 9%'|'Down 10%'|'Down 15%'|'Down 20%'): this;
    /**
     * 20-Day simple moving average of closing price is the mean of the previous 20 days' closing prices.
     * @param filter Filter
     * @returns this
     */
    twentyDaySimpleMovingAverage(filter: 'Price below SMA20'|'Price 10% below SMA20'|'Price 20% below SMA20'|'Price 30% below SMA20'|'Price 40% below SMA20'|'Price 50% below SMA20'|'Price above SMA20'|'Price 10% above SMA20'|'Price 20% above SMA20'|'Price 30% above SMA20'|'Price 40% above SMA20'|'Price 50% above SMA20'|'Price crossed SMA20'|'Price crossed SMA20 above'|'Price crossed SMA20 below'|'SMA20 crossed SMA50'|'SMA20 crossed SMA50 above'|'SMA20 crossed SMA50 below'|'SMA20 crossed SMA200'|'SMA20 crossed SMA200 above'|'SMA20 crossed SMA200 below'|'SMA20 above SMA50'|'SMA20 below SMA50'|'SMA20 above SMA200'|'SMA20 below SMA200'): this;
    /**
     * 50-Day simple moving average of closing price is the mean of the previous 50 days' closing prices.
     * @param filter Filter
     * @returns this
     */
    fiftyDaySimpleMovingAverage(filter: 'Price below SMA50'|'Price 10% below SMA50'|'Price 20% below SMA50'|'Price 30% below SMA50'|'Price 40% below SMA50'|'Price 50% below SMA50'|'Price above SMA50'|'Price 10% above SMA50'|'Price 20% above SMA50'|'Price 30% above SMA50'|'Price 40% above SMA50'|'Price 50% above SMA50'|'Price crossed SMA50'|'Price crossed SMA50 above'|'Price crossed SMA50 below'|'SMA50 crossed SMA20'|'SMA50 crossed SMA20 above'|'SMA50 crossed SMA20 below'|'SMA50 crossed SMA200'|'SMA50 crossed SMA200 above'|'SMA50 crossed SMA200 below'|'SMA50 above SMA20'|'SMA50 below SMA20'|'SMA50 above SMA200'|'SMA50 below SMA200'): this;
    /**
     * 200-Day simple moving average of closing price is the mean of the previous 200 days' closing prices.
     * @param filter Filter
     * @returns this
     */
    twoHundredDaySimpleMovingAverage(filter: 'Price below SMA200'|'Price 10% below SMA200'|'Price 20% below SMA200'|'Price 30% below SMA200'|'Price 40% below SMA200'|'Price 50% below SMA200'|'Price 60% below SMA200'|'Price 70% below SMA200'|'Price 80% below SMA200'|'Price 90% below SMA200'|'Price above SMA200'|'Price 10% above SMA200'|'Price 20% above SMA200'|'Price 30% above SMA200'|'Price 40% above SMA200'|'Price 50% above SMA200'|'Price 60% above SMA200'|'Price 70% above SMA200'|'Price 80% above SMA200'|'Price 90% above SMA200'|'Price 100% above SMA200'|'Price crossed SMA200'|'Price crossed SMA200 above'|'Price crossed SMA200 below'|'SMA200 crossed SMA20'|'SMA200 crossed SMA20 above'|'SMA200 crossed SMA20 below'|'SMA200 crossed SMA50'|'SMA200 crossed SMA50 above'|'SMA200 crossed SMA50 below'|'SMA200 above SMA20'|'SMA200 below SMA20'|'SMA200 above SMA50'|'SMA200 below SMA50'): this;
    /**
     * The difference between previous's close price and today's last price.
     * @param filter Filter
     * @returns this
     */
    change(filter: 'Up'|'Up 1%'|'Up 2%'|'Up 3%'|'Up 4%'|'Up 5%'|'Up 6%'|'Up 7%'|'Up 8%'|'Up 9%'|'Up 10%'|'Up 15%'|'Up 20%'|'Down'|'Down 1%'|'Down 2%'|'Down 3%'|'Down 4%'|'Down 5%'|'Down 6%'|'Down 7%'|'Down 8%'|'Down 9%'|'Down 10%'|'Down 15%'|'Down 20%'): this;
    /**
     * The difference between today's open price and today's last price.
     * @param filter Filter
     * @returns this
     */
    changeFromOpen(filter: 'Up'|'Up 1%'|'Up 2%'|'Up 3%'|'Up 4%'|'Up 5%'|'Up 6%'|'Up 7%'|'Up 8%'|'Up 9%'|'Up 10%'|'Up 15%'|'Up 20%'|'Down'|'Down 1%'|'Down 2%'|'Down 3%'|'Down 4%'|'Down 5%'|'Down 6%'|'Down 7%'|'Down 8%'|'Down 9%'|'Down 10%'|'Down 15%'|'Down 20%'): this;
    /**
     * Maximum/minimum of previous 20 days' highs/lows.
     * @param filter Filter
     * @returns this
     */
    twentyDayHighLow(filter: 'New High'|'New Low'|'5% or more below High'|'10% or more below High'|'15% or more below High'|'20% or more below High'|'30% or more below High'|'40% or more below High'|'50% or more below High'|'0-3% below High'|'0-5% below High'|'0-10% below High'|'5% or more above Low'|'10% or more above Low'|'15% or more above Low'|'20% or more above Low'|'30% or more above Low'|'40% or more above Low'|'50% or more above Low'|'0-3% above Low'|'0-5% above Low'|'0-10% above Low'): this;
    /**
     * Maximum/minimum of previous 50 days' highs/lows.
     * @param filter Filter
     * @returns this
     */
    fiftyDayHighLow(filter: 'New High'|'New Low'|'5% or more below High'|'10% or more below High'|'15% or more below High'|'20% or more below High'|'30% or more below High'|'40% or more below High'|'50% or more below High'|'0-3% below High'|'0-5% below High'|'0-10% below High'|'5% or more above Low'|'10% or more above Low'|'15% or more above Low'|'20% or more above Low'|'30% or more above Low'|'40% or more above Low'|'50% or more above Low'|'0-3% above Low'|'0-5% above Low'|'0-10% above Low'): this;
    /**
     * Maximum/minimum of previous 52 weeks' highs/lows.
     * @param filter Filter
     * @returns this
     */
    fiftyTwoWeekHighLow(filter: 'New High'|'New Low'|'5% or more below High'|'10% or more below High'|'15% or more below High'|'20% or more below High'|'30% or more below High'|'40% or more below High'|'50% or more below High'|'60% or more below High'|'70% or more below High'|'80% or more below High'|'90% or more below High'|'0-3% below High'|'0-5% below High'|'0-10% below High'|'5% or more above Low'|'10% or more above Low'|'15% or more above Low'|'20% or more above Low'|'30% or more above Low'|'40% or more above Low'|'50% or more above Low'|'60% or more above Low'|'70% or more above Low'|'80% or more above Low'|'90% or more above Low'|'100% or more above Low'|'120% or more above Low'|'150% or more above Low'|'200% or more above Low'|'300% or more above Low'|'500% or more above Low'|'0-3% above Low'|'0-5% above Low'|'0-10% above Low'): this;
    /**
     * Maximum/minimum of all-time highs/lows.
     * @param filter Filter
     * @returns this
     */
    allTimeHighLow(filter: 'New High'|'New Low'|'5% or more below High'|'10% or more below High'|'15% or more below High'|'20% or more below High'|'30% or more below High'|'40% or more below High'|'50% or more below High'|'60% or more below High'|'70% or more below High'|'80% or more below High'|'90% or more below High'|'0-3% below High'|'0-5% below High'|'0-10% below High'|'5% or more above Low'|'10% or more above Low'|'15% or more above Low'|'20% or more above Low'|'30% or more above Low'|'40% or more above Low'|'50% or more above Low'|'60% or more above Low'|'70% or more above Low'|'80% or more above Low'|'90% or more above Low'|'100% or more above Low'|'120% or more above Low'|'150% or more above Low'|'200% or more above Low'|'300% or more above Low'|'500% or more above Low'|'0-3% above Low'|'0-5% above Low'|'0-10% above Low'): this;
    /**
     * A chart pattern is a distinct formation on a stock chart that creates a trading signal, or a sign of future price movements. Chartists use these patterns to identify current trends and trend reversals and to trigger buy and sell signals.
     * @param filter Filter
     * @returns this
     */
    pattern(filter: 'Horizontal S/R'|'Horizontal S/R (Strong)'|'TL Resistance'|'TL Resistance (Strong)'|'TL Support'|'TL Support (Strong)'|'Wedge Up'|'Wedge Up (Strong)'|'Wedge Down'|'Wedge Down (Strong)'|'Triangle Ascending'|'Triangle Ascending (Strong)'|'Triangle Descending'|'Triangle Descending (Strong)'|'Wedge'|'Wedge (Strong)'|'Channel Up'|'Channel Up (Strong)'|'Channel Down'|'Channel Down (Strong)'|'Channel'|'Channel (Strong)'|'Double Top'|'Double Bottom'|'Multiple Top'|'Multiple Bottom'|'Head & Shoulders'|'Head & Shoulders Inverse'): this;
    /**
     * Candlesticks are usually composed of the body (black or white), an upper and a lower shadow (wick). The wick illustrates the highest and lowest traded prices of a stock during the time interval represented. The body illustrates the opening and closing trades.
     * @param filter Filter
     * @returns this
     */
    candlestick(filter: 'Long Lower Shadow'|'Long Upper Shadow'|'Hammer'|'Inverted Hammer'|'Spinning Top White'|'Spinning Top Black'|'Doji'|'Dragonfly Doji'|'Gravestone Doji'|'Marubozu White'|'Marubozu Black'): this;
    /**
     * A measure of a stock’s price volatility relative to the market. An asset with a beta of 0 means that its price is not at all correlated with the market. A positive beta means that the asset generally follows the market. A negative beta shows that the asset inversely follows the market, decreases in value if the market goes up.
     * @param filter Filter
     * @returns this
     */
    beta(filter: 'Under 0'|'Under 0.5'|'Under 1'|'Under 1.5'|'Under 2'|'Over 0'|'Over 0.5'|'Over 1'|'Over 1.5'|'Over 2'|'Over 2.5'|'Over 3'|'Over 4'|'0 to 0.5'|'0 to 1'|'0.5 to 1'|'0.5 to 1.5'|'1 to 1.5'|'1 to 2'): this;
    /**
     * A measure of stock volatility. The Average True Range is an exponential moving average (14-days) of the True Ranges. The range of a day's trading is high−low, True Range extends it to yesterday's closing price if it was outside of today's range, True Range = max(high,closeprev) − min(low,closeprev)
     * @param filter Filter
     * @returns this
     */
    averageTrueRange(filter: 'Over 0.25'|'Over 0.5'|'Over 0.75'|'Over 1'|'Over 1.5'|'Over 2'|'Over 2.5'|'Over 3'|'Over 3.5'|'Over 4'|'Over 4.5'|'Over 5'|'Under 0.25'|'Under 0.5'|'Under 0.75'|'Under 1'|'Under 1.5'|'Under 2'|'Under 2.5'|'Under 3'|'Under 3.5'|'Under 4'|'Under 4.5'|'Under 5'): this;
    /**
     * The average number of shares traded in a security per day.
     * @param filter Filter
     * @returns this
     */
    averageVolume(filter: 'Under 50K'|'Under 100K'|'Under 500K'|'Under 750K'|'Under 1M'|'Over 50K'|'Over 100K'|'Over 200K'|'Over 300K'|'Over 400K'|'Over 500K'|'Over 750K'|'Over 1M'|'Over 2M'|'100K to 500K'|'100K to 1M'|'500K to 1M'|'500K to 10M'): this;
    /**
     * Ratio between current volume and 3-month average, intraday adjusted.
     * @param filter Filter
     * @returns this
     */
    relativeVolume(filter: 'Over 10'|'Over 5'|'Over 3'|'Over 2'|'Over 1.5'|'Over 1'|'Over 0.75'|'Over 0.5'|'Over 0.25'|'Under 2'|'Under 1.5'|'Under 1'|'Under 0.75'|'Under 0.5'|'Under 0.25'|'Under 0.1'): this;
    /**
     * Number of shares traded today.
     * @param filter Filter
     * @returns this
     */
    currentVolume(filter: 'Under 50K'|'Under 100K'|'Under 500K'|'Under 750K'|'Under 1M'|'Over 0'|'Over 50K'|'Over 100K'|'Over 200K'|'Over 300K'|'Over 400K'|'Over 500K'|'Over 750K'|'Over 1M'|'Over 2M'|'Over 5M'|'Over 10M'|'Over 20M'|'Over 50% shares float'|'Over 100% shares float'): this;
    /**
     * The current stock price.
     * @param filter Filter
     * @returns this
     */
    price(filter: 'Under $1'|'Under $2'|'Under $3'|'Under $4'|'Under $5'|'Under $7'|'Under $10'|'Under $15'|'Under $20'|'Under $30'|'Under $40'|'Under $50'|'Over $1'|'Over $2'|'Over $3'|'Over $4'|'Over $5'|'Over $7'|'Over $10'|'Over $15'|'Over $20'|'Over $30'|'Over $40'|'Over $50'|'Over $60'|'Over $70'|'Over $80'|'Over $90'|'Over $100'|'$1 to $5'|'$1 to $10'|'$1 to $20'|'$5 to $10'|'$5 to $20'|'$5 to $50'|'$10 to $20'|'$10 to $50'|'$20 to $50'|'$50 to $100'): this;
    /**
     * Analysts' mean target price.
     * @param filter Filter
     * @returns this
     */
    targetPrice(filter: '50% Above Price'|'40% Above Price'|'30% Above Price'|'20% Above Price'|'10% Above Price'|'5% Above Price'|'Above Price'|'Below Price'|'5% Below Price'|'10% Below Price'|'20% Below Price'|'30% Below Price'|'40% Below Price'|'50% Below Price'): this;
    /**
     * Date when company had an IPO.
     * @param filter Filter
     * @returns this
     */
    ipoDate(filter: 'Today'|'Yesterday'|'In the last week'|'In the last month'|'In the last quarter'|'In the last year'|'In the last 2 years'|'In the last 3 years'|'In the last 5 years'|'More than a year ago'|'More than 5 years ago'|'More than 10 years ago'|'More than 15 years ago'|'More than 20 years ago'|'More than 25 years ago'): this;
    /**
     * Shares outstanding represent the total number of shares issued by a corporation and held by its shareholders.
     * @param filter Filter
     * @returns this
     */
    sharesOutstanding(filter: 'Under 1M'|'Under 5M'|'Under 10M'|'Under 20M'|'Under 50M'|'Under 100M'|'Over 1M'|'Over 2M'|'Over 5M'|'Over 10M'|'Over 20M'|'Over 50M'|'Over 100M'|'Over 200M'|'Over 500M'|'Over 1000M'): this;
    /**
     * Float is the number of stock shares that are available for trading to the public. This doesn't include shares held by insiders.
     * @param filter Filter
     * @returns this
     */
    float(filter: 'Under 1M'|'Under 5M'|'Under 10M'|'Under 20M'|'Under 50M'|'Under 100M'|'Over 1M'|'Over 2M'|'Over 5M'|'Over 10M'|'Over 20M'|'Over 50M'|'Over 100M'|'Over 200M'|'Over 500M'|'Over 1000M'|'Under 10%'|'Under 20%'|'Under 30%'|'Under 40%'|'Under 50%'|'Under 60%'|'Under 70%'|'Under 80%'|'Under 90%'|'Over 10%'|'Over 20%'|'Over 30%'|'Over 40%'|'Over 50%'|'Over 60%'|'Over 70%'|'Over 80%'|'Over 90%'): this;
    /**
     * Single category of each ETF.
     * @param filter Filter
     * @returns this
     */
    singleCategory(filter: 'Bonds - Broad Market'|'Bonds - Convertible'|'Bonds - Corporate'|'Bonds - Inflation protected'|'Bonds - Leveraged / Inverse'|'Bonds - Mortgage'|'Bonds - Municipal'|'Bonds - Non Government Asset Backed Securities'|'Bonds - Treasury & Government'|'Commodities & Metals - Agricultural'|'Commodities & Metals - Diversified Commodities'|'Commodities & Metals - Energy'|'Commodities & Metals - Gold / Metals'|'Commodities & Metals - Leveraged / Inverse'|'Currency'|'Currency - Leveraged / Inverse'|'Equity - Leveraged / Inverse'|'Global or ExUS Equities - Broad / Regional'|'Global or ExUS Equities - Country Specific'|'Global or ExUS Equities - Dividend & Fundamental'|'Global or ExUS Equities - Factor & Thematic'|'Global or ExUS Equities - Industry Sector'|'Global or ExUS Equities - Quant Strat'|'Other Asset Types - Leveraged / Inverse'|'Other Asset Types - Multi-Asset / Other'|'Target Date / Multi-Asset - Leveraged / Inverse'|'Target Date / Multi-Asset - Other'|'US Equities - Broad Market & Size'|'US Equities - Dividend & Fundamental'|'US Equities - Factor & Thematic'|'US Equities - Industry Sector'|'US Equities - Quant Strat'|'US Equities - US Style'): this;
    /**
     * The asset type of the ETF.
     * @param filter Filter
     * @returns this
     */
    assetType(filter: 'Bonds'|'Carbon Trading'|'Closed End Funds'|'Commodities & Metals'|'CryptoCurrency'|'Currency'|'Equities (Stocks)'|'Equities (Stocks) - IPO Based'|'Freight Futures'|'Hedge Fund Replication'|'MLP'|'Multi-Asset - Conservative'|'Multi-Asset - Growth / Aggressive'|'Multi-Asset - Moderate'|'Multi-Asset - Tactical / Active'|'Preferred Stock'|'Private Equity'|'SPAC'): this;
    /**
     * The fund manager (ETF) or issuing bank (ETN).
     * @param filter Filter
     * @returns this
     */
    sponsor(filter: 'Aberdeen'|'Absolute Investment Advisers'|'Academy AM'|'Acquirers Funds'|'Acruence Capital'|'ACSI Funds'|'ACV ETF'|'Adaptiv'|'ADAPTIVE INVESTMENTS'|'Adasina Social Capital'|'Advisor Shares'|'Advisors Asset Management'|'Advocate Capital Management'|'AGFiQ'|'Alexis Invests'|'Alger'|'AllianceBernstein'|'AllianzIM'|'Alpha Architect'|'AlphaMark'|'ALPS'|'Altrius Capital'|'AltShares'|'American Beacon'|'American Century Investments'|'Amplify Investments'|'Angel Oak'|'AOT INVEST'|'Applied Finance Funds'|'Aptus Capital Advisors'|'Argent Capital Management'|'ARK Funds'|'Armada ETF Advisors'|'ArrowShares'|'Astoria'|'ASYMshares'|'ATAC Funds'|'Avantis Investors'|'AXS Investments'|'Aztlan'|'BAD Investment'|'Bahl & Gaynor'|'Ballast AM'|'Barclays'|'Barclays iPath'|'Beacon'|'Beyond Investing'|'Bitwise'|'Blackrock (iShares)'|'Blueprint Fund Management'|'BNY Mellon'|'BondBloxx'|'Bridges Capital'|'Bridgeway'|'Brookstone'|'Build Asset Management'|'Burney Investment'|'Bushido Capital'|'Cabana ETF'|'Calamos Investments'|'Cambiar Investors'|'Cambria Funds'|'Capital Group'|'Carbon Collective'|'Carbon Fund Advisors'|'CBOE Vest'|'Changebridge Capital'|'Clockwise Capital'|'Clouty'|'CNIC Funds'|'Columbia Management'|'Conductor ETF'|'Congress AMC'|'Convergence Investment Partners'|'ConvexityShares'|'CornerCap'|'Counterpoint Mutual Funds'|'Credit Suisse'|'CrossingBridge'|'Cultivar Funds'|'Davis Advisors'|'Day Hagan'|'Days Global Advisors'|'Defiance ETFs'|'Democracy Investments'|'Dimensional'|'Direxion Shares'|'Discipline Fund'|'Distillate Capital'|'DoubleLine Funds'|'DriveWealth'|'DWS'|'Dynamic Shares'|'Ecofin'|'Element Funds'|'Elevate Shares'|'Engine No. 1'|'EntrepreneurShares'|'Envestnet'|'ETF Managers Group'|'Euclid ETF'|'Evoke Advisors'|'Exchange Traded Concepts'|'F/m Investments'|'Fairlead Strategies'|'FCF Advisors'|'Federated Hermes'|'Fidelity'|'First Manhattan'|'First Pacific Advisors'|'First Trust'|'FIS'|'Flexshares (Northern Trust)'|'FolioBeyond'|'Formidable Funds'|'FormulaFolio Investments'|'Franklin Templeton'|'Freedom Day'|'FundX'|'Future Funds'|'Gadsden'|'GAMCO Investors'|'Gavekal Capital'|'Global X'|'God Bless'|'Goldman Sachs'|'Goose Hollow'|'Gotham ETF'|'GraniteShares'|'Grayscale'|'Grizzle'|'Guru Focus'|'Harbor Funds'|'Hartford Funds'|'Hashdex'|'Hennessy Funds'|'Horizon Kinetics'|'Howard Capital Management'|'Hoya Capital'|'Humankind'|'Hypatia Capital'|'iMGP Global Partner'|'Impact Shares'|'Index IQ'|'Infrastructure Capital Advisors'|'Innovative Portfolios'|'Innovator Management'|'Inspire Investing'|'Invesco'|'Ionic Capital Management'|'Jacob Funds'|'Janus'|'John Hancock Funds'|'JPMorgan Chase'|'Kaiju ETF Advisors'|'Kelly ETFs'|'Kingsbarn Capital'|'Kovitz'|'Krane Shares'|'Laffer Tengler'|'LeaderShares'|'Leatherback Asset Management'|'Leuthold Group'|'Liquid Strategies'|'Little Harbor Advisors'|'Logan Capital'|'Lyrical AM'|'Madison Funds'|'Main Management'|'Mairs & Power'|'Matthews Asia'|'MAX ETNs'|'McElhenny Sheffield'|'Meet Kevin'|'Merk Investments'|'Merlyn AI'|'MicroSectors'|'MKAM ETF'|'MOHR Funds'|'Monarch Funds'|'Morgan Dempsey'|'Morgan Stanley'|'Motley Fool Asset Management'|'MUSQ'|'Nationwide'|'Natixis'|'NEOS Funds'|'Neuberger Berman'|'NEWDAY'|'Nuveen'|'OneAscent Investments'|'Optimize Advisors'|'Pacer Financial'|'Panagram'|'Parabla'|'Paralel Advisors'|'PGIM Investments'|'PIMCO'|'Pinnacle Dynamic Funds'|'PMV Capital'|'Point Bridge Capital'|'Principal Financial Services'|'ProcureAM'|'ProShares'|'Putnam Investments'|'Q3 All-Season'|'Qraft Technologies'|'R3 Global Capital'|'Rareview Funds'|'Rayliant'|'Reflection Asset Management'|'Regents Park Funds'|'Relative Sentiment'|'Renaissance'|'Returned Stack'|'Reverb'|'Robinson Capital'|'ROC Investments'|'Roundhill Financial'|'Running Oak'|'Saba Capital'|'Schwab'|'Segall Bryant & Hamill'|'SEI Investments Company'|'Simplify ETF'|'Siren ETF'|'SmartETFs'|'Sofi'|'SonicShares'|'Sound ETF'|'Soundwatch'|'Sparkline Capital'|'Spear Invest'|'SPFunds'|'Spinnaker ETF Trust'|'Sprott Asset Management'|'State Street (SPDR)'|'Sterling Capital'|'STF Management'|'Strategas Asset Management'|'Strategy Shares'|'Strive Asset Management'|'Subversive ETFs'|'Summit Global Investments'|'SWAN Global Investments'|'Syntax'|'T. Rowe Price'|'Tactical Advantage'|'Tema'|'Teucrium'|'Texas Capital'|'THOR Financial Technologies'|'Thrivent'|'Timothy Plan'|'Toews Funds'|'Tortoise Capital Advisors'|'Touchstone Investments'|'Trajan Wealth'|'TrueShares'|'Tuttle Tactical Management'|'U.S. Global Investors'|'UBS'|'United States Commodity Funds'|'Unlimited'|'V-Square'|'Validus'|'Valkyrie Funds'|'Van Eck Associates Corporation'|'Vanguard'|'VegTech'|'Veridien'|'Vesper Capital Management'|'VictoryShares'|'Vident'|'Virtus ETF Solutions'|'Volatility Shares'|'Wahed Invest'|'WBI Shares'|'Wealth Trust'|'Wisdom Tree'|'X-Square ETF'|'Xfunds'|'Zacks'|'Zega ETF'): this;
    /**
     * Gross expense net of fee waivers, as a % of net assets as published by the ETF Issuer.
     * @param filter Filter
     * @returns this
     */
    netExpenseRatio(filter: 'Under 0.1%'|'Under 0.2%'|'Under 0.3%'|'Under 0.4%'|'Under 0.5%'|'Under 0.6%'|'Under 0.7%'|'Under 0.8%'|'Under 0.9%'|'Under 1.0%'): this;
    /**
     * Net Fund Flows of the ETF as percentage of Assets Under Management
     * @param filter Filter
     * @returns this
     */
    netFundFlows(filter: '1 Month - Over 0%'|'1 Month - Over 10%'|'1 Month - Over 25%'|'1 Month - Over 50%'|'1 Month - Under 0%'|'1 Month - Under -10%'|'1 Month - Under -25%'|'1 Month - Under -50%'|'3 Month - Over 0%'|'3 Month - Over 10%'|'3 Month - Over 25%'|'3 Month - Over 50%'|'3 Month - Under 0%'|'3 Month - Under -10%'|'3 Month - Under -25%'|'3 Month - Under -50%'|'YTD - Over 0%'|'YTD - Over 10%'|'YTD - Over 25%'|'YTD - Over 50%'|'YTD - Under 0%'|'YTD - Under -10%'|'YTD - Under -25%'|'YTD - Under -50%'): this;
    /**
     * Annualized rate of Return of the ETF.
     * @param filter Filter
     * @returns this
     */
    annualizedReturn(filter: '1 Year - Over 0%'|'1 Year - Over 5%'|'1 Year - Over 10%'|'1 Year - Over 25%'|'1 Year - Under 0%'|'1 Year - Under -5%'|'1 Year - Under -10%'|'1 Year - Under -25%'|'3 Year - Over 0%'|'3 Year - Over 5%'|'3 Year - Over 10%'|'3 Year - Over 25%'|'3 Year - Under 0%'|'3 Year - Under -5%'|'3 Year - Under -10%'|'3 Year - Under -25%'|'5 Year - Over 0%'|'5 Year - Over 5%'|'5 Year - Over 10%'|'5 Year - Over 25%'|'5 Year - Under 0%'|'5 Year - Under -5%'|'5 Year - Under -10%'|'5 Year - Under -25%'): this;
    /**
     * Various ETF tags.
     * @param filter Filter
     * @returns this
     */
    tags(filter: '13F'|'3d-printing'|'5G'|'A.I.'|'AAPL'|'aerospace-defense'|'Africa'|'aggressive'|'agriculture'|'aircraft'|'airlines'|'alcohol-tobacco'|'AMD'|'AMZN'|'Argentina'|'ARKK'|'Asia'|'Asia-ex-Japan'|'Asia-Pacific'|'Asia-Pacific-ex-Japan'|'asset-rotation'|'AUD'|'Australia'|'Austria'|'auto-industry'|'automation'|'autonomous-vehicles'|'BABA'|'banks'|'batteries'|'BDC'|'Belgium'|'betting'|'big-data'|'biotechnology'|'bitcoin'|'blockchain'|'blue-chip'|'bonds'|'Brazil'|'brokerage'|'buffer'|'buyback'|'CAD'|'Canada'|'cancer'|'cannabis'|'capital-markets'|'carbon-allowances'|'carbon-low'|'cash-cow'|'casino'|'catholic-values'|'CHF'|'Chile'|'China'|'clean-energy'|'climate-change'|'clinical-trials'|'CLO'|'cloud-computing'|'cobalt'|'COIN'|'Colombia'|'commodity'|'communication-services'|'community-banks'|'conservative'|'consumer'|'consumer-discretionary'|'consumer-staples'|'convertible-securities'|'copper'|'corn'|'corporate-bonds'|'covered-call'|'crypto'|'crypto-spot'|'currencies'|'currency'|'currency-bonds'|'customer'|'cyber-security'|'data-centers'|'DAX'|'debt'|'debt-securities'|'democrats'|'Denmark'|'derivatives'|'Developed'|'Developed-ex-Japan'|'Developed-ex-U.S.'|'digital-infrastructure'|'digital-payments'|'DIS'|'Disaster-recovery'|'disruptive'|'dividend'|'dividend-growth'|'dividend-weight'|'DJIA'|'dry-bulk'|'e-commerce'|'e-sports'|'EAFE'|'education'|'Egypt'|'electric-vehicles'|'electricity'|'Emerging'|'Emerging-ex-China'|'energy'|'energy-management'|'energy-producers'|'energy-storage'|'entertainment'|'environmental'|'equal-weight'|'equity'|'ESG'|'ETFs'|'ethereum'|'EUR'|'Europe'|'Eurozone'|'ex-energy'|'ex-financial'|'ex-fossil-fuels'|'ex-healthcare'|'ex-technology'|'exchanges'|'factor-rotation'|'FANG'|'financial'|'Finland'|'fintech'|'fixed-income'|'fixed-period'|'floating-rate'|'food'|'food-beverage'|'fossil-fuels'|'France'|'fundamental'|'fundamental-weight'|'futures'|'gaming'|'GBP'|'gender'|'genomics'|'Germany'|'GLD'|'Global'|'Global-ex-U.S.'|'gold'|'gold-miners'|'GOOGL'|'government-bonds'|'Greece'|'growth'|'hardware'|'healthcare'|'hedge-currency'|'hedge-fund'|'hedge-inflation'|'hedge-rates'|'hedge-risk'|'high-beta'|'high-yield'|'home-construction'|'home-office'|'Honk-Kong'|'hotel'|'hydrogen'|'I.T.'|'income'|'India'|'Indonesia'|'industrials'|'inflation'|'infrastructure'|'innovation'|'insurance'|'International'|'internet'|'internet-of-things'|'inverse'|'investment-grade'|'IPO'|'Ireland'|'Israel'|'Italy'|'Japan'|'Jim-Cramer'|'JPM'|'JPY'|'Kuwait'|'large-cap'|'Latin-America'|'leadership'|'leverage'|'lifestyle'|'lithium'|'loans'|'long-short'|'luxury'|'M&A'|'machine-learning'|'macro'|'Malaysia'|'market-sentiment'|'marketing'|'materials'|'MBS'|'media'|'medical'|'mega-cap'|'META'|'metals'|'metaverse'|'Mexico'|'micro-cap'|'mid-cap'|'mid-large-cap'|'midstream'|'military'|'millennial'|'miners'|'MLP'|'mobile-payments'|'moderate'|'momentum'|'monopolies'|'MSFT'|'multi-asset'|'multi-factor'|'multi-sector'|'municipal-bonds'|'music'|'Nasdaq-composite'|'Nasdaq100'|'natural-gas'|'natural-resources'|'Netherlands'|'network'|'New-Zealand'|'next-gen'|'NFLX'|'nickel'|'Nigeria'|'Nikkei-400'|'non-ESG'|'North-America'|'Norway'|'nuclear-energy'|'NVDA'|'ocean'|'oil'|'oil-gas-exp-prod'|'oil-gas-services'|'online-stores'|'options'|'Pakistan'|'palladium'|'patents'|'Peru'|'pet-care'|'pharmaceutical'|'philippines'|'physical'|'pipelines'|'platinum'|'Poland'|'politics'|'Portugal'|'precious-metals'|'preferred'|'preferred-securities'|'private-credit'|'private-equity'|'put-write'|'PYPL'|'quality'|'quantitative'|'quantum-computing'|'Quatar'|'R&D'|'rare-earth'|'real-assets'|'real-estate'|'regional-banks'|'REITs'|'relative-strength'|'renewable-energy'|'republicans'|'responsible'|'restaurant'|'retail'|'retail-stores'|'revenue'|'rising-rates'|'robotics'|'Russell-1000'|'Russell-200'|'Russell-2000'|'Russell-2500'|'Russell-3000'|'Saudi-Arabia'|'sector-rotation'|'semiconductors'|'senior-loans'|'sharia-compliant'|'shipping'|'short'|'silver'|'silver-miners'|'Singapore'|'single-asset'|'SLV'|'small-cap'|'small-mid-cap'|'smart-grid'|'smart-mobility'|'social'|'social-media'|'software'|'solar'|'South-Africa'|'South-Korea'|'soybean'|'SP100'|'SP1000'|'SP1500'|'SP400'|'SP500'|'SP600'|'SPAC'|'space-exploration'|'Spain'|'spin-off'|'steel'|'sugar'|'sukuk'|'sustainability'|'Sweden'|'Switzerland'|'tactical'|'Taiwan'|'target-drawdown'|'technology'|'Thailand'|'timber'|'TIPS'|'transportation'|'travel'|'treasuries'|'TSLA'|'Turkey'|'U.K.'|'U.S.'|'UAE'|'upside-cap'|'upstream'|'uranium'|'uranium-miners'|'USD'|'USO'|'utilities'|'value'|'variable-rate'|'vegan'|'Vietnam'|'vix'|'volatility'|'volatility-index'|'volatility-weight'|'water'|'weapons'|'wellness'|'wheat'|'wind'|'wood'|'XOM'|'Yuan'|'zero-coupon'): this;
    /**
     * TA Signal
     * @param signal TA signal
     * @returns this
     */
    signal(signal: 'Top Gainers'|'Top Losers'|'New High'|'New Low'|'Most Volatile'|'Most Active'|'Unusual Volume'|'Overbought'|'Oversold'|'Downgrades'|'Upgrades'|'Earnings Before'|'Earnings After'|'Recent Insider Buying'|'Recent Insider Selling'|'Major News'|'Horizontal S/R'|'TL Resistance'|'TL Support'|'Wedge Up'|'Wedge Down'|'Triangle Ascending'|'Triangle Descending'|'Wedge'|'Channel Up'|'Channel Down'|'Channel'|'Double Top'|'Double Bottom'|'Multiple Top'|'Multiple Bottom'|'Head & Shoulders'|'Head & Shoulders Inverse'): this;
}
export type Options = {
    /**
     * Maximum number of pages to fetch. Set to `0` to disable. Default is 1
     */
    pageLimit: number;
    /**
     * Number of milliseconds to wait between requests. Default is 1000
     */
    requestTimeout: number;
};
