'use strict'

const axios = require('axios').default
const cheerio = require('cheerio')
const selector = '#screener-content > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > span'

const signalsMap = {
    'Top Gainers': 'ta_topgainers',
    'Top Losers': 'ta_toplosers',
    'New High': 'ta_newhigh',
    'New Low': 'ta_newlow',
    'Most Volatile': 'ta_mostvolatile',
    'Most Active': 'ta_mostactive',
    'Unusual Volume': 'ta_unusualvolume',
    'Overbought': 'ta_overbought',
    'Oversold': 'ta_oversold',
    'Downgrades': 'n_downgrades',
    'Upgrades': 'n_upgrades',
    'Earnings Before': 'n_earningsbefore',
    'Earnings After': 'n_earningsafter',
    'Recent Insider Buying': 'it_latestbuys',
    'Recent Insider Selling': 'it_latestsales',
    'Major News': 'n_majornews',
    'Horizontal S/R': 'ta_p_horizontal',
    'TL Resistance': 'ta_p_tlresistance',
    'TL Support': 'ta_p_tlsupport',
    'Wedge Up': 'ta_p_wedgeup',
    'Wedge Down': 'ta_p_wedgedown',
    'Triangle Ascending': 'ta_p_wedgeresistance',
    'Triangle Descending': 'ta_p_wedgesupport',
    'Wedge': 'ta_p_wedge',
    'Channel Up': 'ta_p_channelup',
    'Channel Down': 'ta_p_channeldown',
    'Channel': 'ta_p_channel',
    'Double Top': 'ta_p_doubletop',
    'Double Bottom': 'ta_p_doublebottom',
    'Multiple Top': 'ta_p_multipletop',
    'Multiple Bottom': 'ta_p_multiplebottom',
    'Head & Shoulders': 'ta_p_headandshoulders',
    'Head & Shoulders Inverse': 'ta_p_headandshouldersinv'
}

const exchangeMap = {
    'AMEX': 'amex',
    'NASDAQ': 'nasd',
    'NYSE': 'nyse'
}

const indexMap = {
    'S&P 500': 'sp500',
    'DJIA': 'dji'
}

const sectorMap = {
    'Basic Materials': 'basicmaterials',
    'Communication Services': 'communicationservices',
    'Consumer Cyclical': 'consumercyclical',
    'Consumer Defensive': 'consumerdefensive',
    'Energy': 'energy',
    'Financial': 'financial',
    'Healthcare': 'healthcare',
    'Industrials': 'industrials',
    'Real Estate': 'realestate',
    'Technology': 'technology',
    'Utilities': 'utilities'
}

const industryMap = {
    'Stocks only (ex-Funds)': 'stocksonly',
    'Exchange Traded Fund': 'exchangetradedfund',
    'Advertising Agencies': 'advertisingagencies',
    'Aerospace & Defense': 'aerospacedefense',
    'Agricultural Inputs': 'agriculturalinputs',
    'Airlines': 'airlines',
    'Airports & Air Services': 'airportsairservices',
    'Aluminum': 'aluminum',
    'Apparel Manufacturing': 'apparelmanufacturing',
    'Apparel Retail': 'apparelretail',
    'Asset Management': 'assetmanagement',
    'Auto Manufacturers': 'automanufacturers',
    'Auto Parts': 'autoparts',
    'Auto & Truck Dealerships': 'autotruckdealerships',
    'Banks - Diversified': 'banksdiversified',
    'Banks - Regional': 'banksregional',
    'Beverages - Brewers': 'beveragesbrewers',
    'Beverages - Non-Alcoholic': 'beveragesnonalcoholic',
    'Beverages - Wineries & Distilleries': 'beverageswineriesdistilleries',
    'Biotechnology': 'biotechnology',
    'Broadcasting': 'broadcasting',
    'Building Materials': 'buildingmaterials',
    'Building Products & Equipment': 'buildingproductsequipment',
    'Business Equipment & Supplies': 'businessequipmentsupplies',
    'Capital Markets': 'capitalmarkets',
    'Chemicals': 'chemicals',
    'Closed-End Fund - Debt': 'closedendfunddebt',
    'Closed-End Fund - Equity': 'closedendfundequity',
    'Closed-End Fund - Foreign': 'closedendfundforeign',
    'Coking Coal': 'cokingcoal',
    'Communication Equipment': 'communicationequipment',
    'Computer Hardware': 'computerhardware',
    'Confectioners': 'confectioners',
    'Conglomerates': 'conglomerates',
    'Consulting Services': 'consultingservices',
    'Consumer Electronics': 'consumerelectronics',
    'Copper': 'copper',
    'Credit Services': 'creditservices',
    'Department Stores': 'departmentstores',
    'Diagnostics & Research': 'diagnosticsresearch',
    'Discount Stores': 'discountstores',
    'Drug Manufacturers - General': 'drugmanufacturersgeneral',
    'Drug Manufacturers - Specialty & Generic': 'drugmanufacturersspecialtygeneric',
    'Education & Training Services': 'educationtrainingservices',
    'Electrical Equipment & Parts': 'electricalequipmentparts',
    'Electronic Components': 'electroniccomponents',
    'Electronic Gaming & Multimedia': 'electronicgamingmultimedia',
    'Electronics & Computer Distribution': 'electronicscomputerdistribution',
    'Engineering & Construction': 'engineeringconstruction',
    'Entertainment': 'entertainment',
    'Farm & Heavy Construction Machinery': 'farmheavyconstructionmachinery',
    'Farm Products': 'farmproducts',
    'Financial Conglomerates': 'financialconglomerates',
    'Financial Data & Stock Exchanges': 'financialdatastockexchanges',
    'Food Distribution': 'fooddistribution',
    'Footwear & Accessories': 'footwearaccessories',
    'Furnishings, Fixtures & Appliances': 'furnishingsfixturesappliances',
    'Gambling': 'gambling',
    'Gold': 'gold',
    'Grocery Stores': 'grocerystores',
    'Healthcare Plans': 'healthcareplans',
    'Health Information Services': 'healthinformationservices',
    'Home Improvement Retail': 'homeimprovementretail',
    'Household & Personal Products': 'householdpersonalproducts',
    'Industrial Distribution': 'industrialdistribution',
    'Information Technology Services': 'informationtechnologyservices',
    'Infrastructure Operations': 'infrastructureoperations',
    'Insurance Brokers': 'insurancebrokers',
    'Insurance - Diversified': 'insurancediversified',
    'Insurance - Life': 'insurancelife',
    'Insurance - Property & Casualty': 'insurancepropertycasualty',
    'Insurance - Reinsurance': 'insurancereinsurance',
    'Insurance - Specialty': 'insurancespecialty',
    'Integrated Freight & Logistics': 'integratedfreightlogistics',
    'Internet Content & Information': 'internetcontentinformation',
    'Internet Retail': 'internetretail',
    'Leisure': 'leisure',
    'Lodging': 'lodging',
    'Lumber & Wood Production': 'lumberwoodproduction',
    'Luxury Goods': 'luxurygoods',
    'Marine Shipping': 'marineshipping',
    'Medical Care Facilities': 'medicalcarefacilities',
    'Medical Devices': 'medicaldevices',
    'Medical Distribution': 'medicaldistribution',
    'Medical Instruments & Supplies': 'medicalinstrumentssupplies',
    'Metal Fabrication': 'metalfabrication',
    'Mortgage Finance': 'mortgagefinance',
    'Oil & Gas Drilling': 'oilgasdrilling',
    'Oil & Gas E&P': 'oilgasep',
    'Oil & Gas Equipment & Services': 'oilgasequipmentservices',
    'Oil & Gas Integrated': 'oilgasintegrated',
    'Oil & Gas Midstream': 'oilgasmidstream',
    'Oil & Gas Refining & Marketing': 'oilgasrefiningmarketing',
    'Other Industrial Metals & Mining': 'otherindustrialmetalsmining',
    'Other Precious Metals & Mining': 'otherpreciousmetalsmining',
    'Packaged Foods': 'packagedfoods',
    'Packaging & Containers': 'packagingcontainers',
    'Paper & Paper Products': 'paperpaperproducts',
    'Personal Services': 'personalservices',
    'Pharmaceutical Retailers': 'pharmaceuticalretailers',
    'Pollution & Treatment Controls': 'pollutiontreatmentcontrols',
    'Publishing': 'publishing',
    'Railroads': 'railroads',
    'Real Estate - Development': 'realestatedevelopment',
    'Real Estate - Diversified': 'realestatediversified',
    'Real Estate Services': 'realestateservices',
    'Recreational Vehicles': 'recreationalvehicles',
    'REIT - Diversified': 'reitdiversified',
    'REIT - Healthcare Facilities': 'reithealthcarefacilities',
    'REIT - Hotel & Motel': 'reithotelmotel',
    'REIT - Industrial': 'reitindustrial',
    'REIT - Mortgage': 'reitmortgage',
    'REIT - Office': 'reitoffice',
    'REIT - Residential': 'reitresidential',
    'REIT - Retail': 'reitretail',
    'REIT - Specialty': 'reitspecialty',
    'Rental & Leasing Services': 'rentalleasingservices',
    'Residential Construction': 'residentialconstruction',
    'Resorts & Casinos': 'resortscasinos',
    'Restaurants': 'restaurants',
    'Scientific & Technical Instruments': 'scientifictechnicalinstruments',
    'Security & Protection Services': 'securityprotectionservices',
    'Semiconductor Equipment & Materials': 'semiconductorequipmentmaterials',
    'Semiconductors': 'semiconductors',
    'Shell Companies': 'shellcompanies',
    'Silver': 'silver',
    'Software - Application': 'softwareapplication',
    'Software - Infrastructure': 'softwareinfrastructure',
    'Solar': 'solar',
    'Specialty Business Services': 'specialtybusinessservices',
    'Specialty Chemicals': 'specialtychemicals',
    'Specialty Industrial Machinery': 'specialtyindustrialmachinery',
    'Specialty Retail': 'specialtyretail',
    'Staffing & Employment Services': 'staffingemploymentservices',
    'Steel': 'steel',
    'Telecom Services': 'telecomservices',
    'Textile Manufacturing': 'textilemanufacturing',
    'Thermal Coal': 'thermalcoal',
    'Tobacco': 'tobacco',
    'Tools & Accessories': 'toolsaccessories',
    'Travel Services': 'travelservices',
    'Trucking': 'trucking',
    'Uranium': 'uranium',
    'Utilities - Diversified': 'utilitiesdiversified',
    'Utilities - Independent Power Producers': 'utilitiesindependentpowerproducers',
    'Utilities - Regulated Electric': 'utilitiesregulatedelectric',
    'Utilities - Regulated Gas': 'utilitiesregulatedgas',
    'Utilities - Regulated Water': 'utilitiesregulatedwater',
    'Utilities - Renewable': 'utilitiesrenewable',
    'Waste Management': 'wastemanagement'
}

const countryMap = {
    'USA': 'usa',
    'Foreign (ex-USA)': 'notusa',
    'Asia': 'asia',
    'Europe': 'europe',
    'Latin America': 'latinamerica',
    'BRIC': 'bric',
    'Argentina': 'argentina',
    'Australia': 'australia',
    'Bahamas': 'bahamas',
    'Belgium': 'belgium',
    'BeNeLux': 'benelux',
    'Bermuda': 'bermuda',
    'Brazil': 'brazil',
    'Canada': 'canada',
    'Cayman Islands': 'caymanislands',
    'Chile': 'chile',
    'China': 'china',
    'China & Hong Kong': 'chinahongkong',
    'Colombia': 'colombia',
    'Cyprus': 'cyprus',
    'Denmark': 'denmark',
    'Finland': 'finland',
    'France': 'france',
    'Germany': 'germany',
    'Greece': 'greece',
    'Hong Kong': 'hongkong',
    'Hungary': 'hungary',
    'Iceland': 'iceland',
    'India': 'india',
    'Indonesia': 'indonesia',
    'Ireland': 'ireland',
    'Israel': 'israel',
    'Italy': 'italy',
    'Japan': 'japan',
    'Kazakhstan': 'kazakhstan',
    'Luxembourg': 'luxembourg',
    'Malaysia': 'malaysia',
    'Malta': 'malta',
    'Mexico': 'mexico',
    'Monaco': 'monaco',
    'Netherlands': 'netherlands',
    'New Zealand': 'newzealand',
    'Norway': 'norway',
    'Panama': 'panama',
    'Peru': 'peru',
    'Philippines': 'philippines',
    'Portugal': 'portugal',
    'Russia': 'russia',
    'Singapore': 'singapore',
    'South Africa': 'southafrica',
    'South Korea': 'southkorea',
    'Spain': 'spain',
    'Sweden': 'sweden',
    'Switzerland': 'switzerland',
    'Taiwan': 'taiwan',
    'Turkey': 'turkey',
    'United Arab Emirates': 'unitedarabemirates',
    'United Kingdom': 'unitedkingdom',
    'Uruguay': 'uruguay'
}

const marketCapMap = {
    'Mega ($200bln and more)': 'mega',
    'Large ($10bln to $200bln)': 'large',
    'Mid ($2bln to $10bln)': 'mid',
    'Small ($300mln to $2bln)': 'small',
    'Micro ($50mln to $300mln)': 'micro',
    'Nano (under $50mln)': 'nano',
    '+Large (over $10bln)': 'largeover',
    '+Mid (over $2bln)': 'midover',
    '+Small (over $300mln)': 'smallover',
    '+Micro (over $50mln)': 'microover',
    '-Large (under $200bln)': 'largeunder',
    '-Mid (under $10bln)': 'midunder',
    '-Small (under $2bln)': 'smallunder',
    '-Micro (under $300mln)': 'microunder'
}

const peMap = {
    'Low (<15)': 'low',
    'Profitable (>0)': 'profitable',
    'High (>50)': 'high',
    'Under 5': 'u5',
    'Under 10': 'u10',
    'Under 15': 'u15',
    'Under 20': 'u20',
    'Under 25': 'u25',
    'Under 30': 'u30',
    'Under 35': 'u35',
    'Under 40': 'u40',
    'Under 45': 'u45',
    'Under 50': 'u50',
    'Over 5': 'o5',
    'Over 10': 'o10',
    'Over 15': 'o15',
    'Over 20': 'o20',
    'Over 25': 'o25',
    'Over 30': 'o30',
    'Over 35': 'o35',
    'Over 40': 'o40',
    'Over 45': 'o45',
    'Over 50': 'o50'
}

const forwardPeMap = {
    'Low (<15)': 'low',
    'Profitable (>0)': 'profitable',
    'High (>50)': 'high',
    'Under 5': 'u5',
    'Under 10': 'u10',
    'Under 15': 'u15',
    'Under 20': 'u20',
    'Under 25': 'u25',
    'Under 30': 'u30',
    'Under 35': 'u35',
    'Under 40': 'u40',
    'Under 45': 'u45',
    'Under 50': 'u50',
    'Over 5': 'o5',
    'Over 10': 'o10',
    'Over 15': 'o15',
    'Over 20': 'o20',
    'Over 25': 'o25',
    'Over 30': 'o30',
    'Over 35': 'o35',
    'Over 40': 'o40',
    'Over 45': 'o45',
    'Over 50': 'o50'
}

const pegMap = {
    'Low (<1)': 'low',
    'High (>2)': 'high',
    'Under 1': 'u1',
    'Under 2': 'u2',
    'Under 3': 'u3',
    'Over 1': 'o1',
    'Over 2': 'o2',
    'Over 3': 'o3'
}

const psMap = {
    'Low (<1)': 'low',
    'High (>10)': 'high',
    'Under 1': 'u1',
    'Under 2': 'u2',
    'Under 3': 'u3',
    'Under 4': 'u4',
    'Under 5': 'u5',
    'Under 6': 'u6',
    'Under 7': 'u7',
    'Under 8': 'u8',
    'Under 9': 'u9',
    'Under 10': 'u10',
    'Over 1': 'o1',
    'Over 2': 'o2',
    'Over 3': 'o3',
    'Over 4': 'o4',
    'Over 5': 'o5',
    'Over 6': 'o6',
    'Over 7': 'o7',
    'Over 8': 'o8',
    'Over 9': 'o9',
    'Over 10': 'o10'
}

const pbMap = {
    'Low (<1)': 'low',
    'High (>5)': 'high',
    'Under 1': 'u1',
    'Under 2': 'u2',
    'Under 3': 'u3',
    'Under 4': 'u4',
    'Under 5': 'u5',
    'Under 6': 'u6',
    'Under 7': 'u7',
    'Under 8': 'u8',
    'Under 9': 'u9',
    'Under 10': 'u10',
    'Over 1': 'o1',
    'Over 2': 'o2',
    'Over 3': 'o3',
    'Over 4': 'o4',
    'Over 5': 'o5',
    'Over 6': 'o6',
    'Over 7': 'o7',
    'Over 8': 'o8',
    'Over 9': 'o9',
    'Over 10': 'o10'
}

const priceCashMap = {
    'Low (<3)': 'low',
    'High (>50)': 'high',
    'Under 1': 'u1',
    'Under 2': 'u2',
    'Under 3': 'u3',
    'Under 4': 'u4',
    'Under 5': 'u5',
    'Under 6': 'u6',
    'Under 7': 'u7',
    'Under 8': 'u8',
    'Under 9': 'u9',
    'Under 10': 'u10',
    'Over 1': 'o1',
    'Over 2': 'o2',
    'Over 3': 'o3',
    'Over 4': 'o4',
    'Over 5': 'o5',
    'Over 6': 'o6',
    'Over 7': 'o7',
    'Over 8': 'o8',
    'Over 9': 'o9',
    'Over 10': 'o10',
    'Over 20': 'o20',
    'Over 30': 'o30',
    'Over 40': 'o40',
    'Over 50': 'o50'
}

const priceFreeCashFlowMap = {
    'Low (<15)': 'low',
    'High (>50)': 'high',
    'Under 5': 'u5',
    'Under 10': 'u10',
    'Under 15': 'u15',
    'Under 20': 'u20',
    'Under 25': 'u25',
    'Under 30': 'u30',
    'Under 35': 'u35',
    'Under 40': 'u40',
    'Under 45': 'u45',
    'Under 50': 'u50',
    'Under 60': 'u60',
    'Under 70': 'u70',
    'Under 80': 'u80',
    'Under 90': 'u90',
    'Under 100': 'u100',
    'Over 5': 'o5',
    'Over 10': 'o10',
    'Over 15': 'o15',
    'Over 20': 'o20',
    'Over 25': 'o25',
    'Over 30': 'o30',
    'Over 35': 'o35',
    'Over 40': 'o40',
    'Over 45': 'o45',
    'Over 50': 'o50',
    'Over 60': 'o60',
    'Over 70': 'o70',
    'Over 80': 'o80',
    'Over 90': 'o90',
    'Over 100': 'o100'
}

const epsGrowththisYearMap = {
    'Negative (<0%)': 'neg',
    'Positive (>0%)': 'pos',
    'Positive Low (0-10%)': 'poslow',
    'High (>25%)': 'high',
    'Under 5%': 'u5',
    'Under 10%': 'u10',
    'Under 15%': 'u15',
    'Under 20%': 'u20',
    'Under 25%': 'u25',
    'Under 30%': 'u30',
    'Over 5%': 'o5',
    'Over 10%': 'o10',
    'Over 15%': 'o15',
    'Over 20%': 'o20',
    'Over 25%': 'o25',
    'Over 30%': 'o30'
}

const epsGrowthnextYearMap = {
    'Negative (<0%)': 'neg',
    'Positive (>0%)': 'pos',
    'Positive Low (0-10%)': 'poslow',
    'High (>25%)': 'high',
    'Under 5%': 'u5',
    'Under 10%': 'u10',
    'Under 15%': 'u15',
    'Under 20%': 'u20',
    'Under 25%': 'u25',
    'Under 30%': 'u30',
    'Over 5%': 'o5',
    'Over 10%': 'o10',
    'Over 15%': 'o15',
    'Over 20%': 'o20',
    'Over 25%': 'o25',
    'Over 30%': 'o30'
}

const epsGrowthpast5YearsMap = {
    'Negative (<0%)': 'neg',
    'Positive (>0%)': 'pos',
    'Positive Low (0-10%)': 'poslow',
    'High (>25%)': 'high',
    'Under 5%': 'u5',
    'Under 10%': 'u10',
    'Under 15%': 'u15',
    'Under 20%': 'u20',
    'Under 25%': 'u25',
    'Under 30%': 'u30',
    'Over 5%': 'o5',
    'Over 10%': 'o10',
    'Over 15%': 'o15',
    'Over 20%': 'o20',
    'Over 25%': 'o25',
    'Over 30%': 'o30'
}

const epsGrowthnext5YearsMap = {
    'Negative (<0%)': 'neg',
    'Positive (>0%)': 'pos',
    'Positive Low (<10%)': 'poslow',
    'High (>25%)': 'high',
    'Under 5%': 'u5',
    'Under 10%': 'u10',
    'Under 15%': 'u15',
    'Under 20%': 'u20',
    'Under 25%': 'u25',
    'Under 30%': 'u30',
    'Over 5%': 'o5',
    'Over 10%': 'o10',
    'Over 15%': 'o15',
    'Over 20%': 'o20',
    'Over 25%': 'o25',
    'Over 30%': 'o30'
}

const salesGrowthpast5YearsMap = {
    'Negative (<0%)': 'neg',
    'Positive (>0%)': 'pos',
    'Positive Low (0-10%)': 'poslow',
    'High (>25%)': 'high',
    'Under 5%': 'u5',
    'Under 10%': 'u10',
    'Under 15%': 'u15',
    'Under 20%': 'u20',
    'Under 25%': 'u25',
    'Under 30%': 'u30',
    'Over 5%': 'o5',
    'Over 10%': 'o10',
    'Over 15%': 'o15',
    'Over 20%': 'o20',
    'Over 25%': 'o25',
    'Over 30%': 'o30'
}

const epsGrowthqtrOverQtrMap = {
    'Negative (<0%)': 'neg',
    'Positive (>0%)': 'pos',
    'Positive Low (0-10%)': 'poslow',
    'High (>25%)': 'high',
    'Under 5%': 'u5',
    'Under 10%': 'u10',
    'Under 15%': 'u15',
    'Under 20%': 'u20',
    'Under 25%': 'u25',
    'Under 30%': 'u30',
    'Over 5%': 'o5',
    'Over 10%': 'o10',
    'Over 15%': 'o15',
    'Over 20%': 'o20',
    'Over 25%': 'o25',
    'Over 30%': 'o30'
}

const salesGrowthqtrOverQtrMap = {
    'Negative (<0%)': 'neg',
    'Positive (>0%)': 'pos',
    'Positive Low (0-10%)': 'poslow',
    'High (>25%)': 'high',
    'Under 5%': 'u5',
    'Under 10%': 'u10',
    'Under 15%': 'u15',
    'Under 20%': 'u20',
    'Under 25%': 'u25',
    'Under 30%': 'u30',
    'Over 5%': 'o5',
    'Over 10%': 'o10',
    'Over 15%': 'o15',
    'Over 20%': 'o20',
    'Over 25%': 'o25',
    'Over 30%': 'o30'
}

const dividendYieldMap = {
    'None (0%)': 'none',
    'Positive (>0%)': 'pos',
    'High (>5%)': 'high',
    'Very High (>10%)': 'veryhigh',
    'Over 1%': 'o1',
    'Over 2%': 'o2',
    'Over 3%': 'o3',
    'Over 4%': 'o4',
    'Over 5%': 'o5',
    'Over 6%': 'o6',
    'Over 7%': 'o7',
    'Over 8%': 'o8',
    'Over 9%': 'o9',
    'Over 10%': 'o10'
}

const returnOnAssetsMap = {
    'Positive (>0%)': 'pos',
    'Negative (<0%)': 'neg',
    'Very Positive (>15%)': 'verypos',
    'Very Negative (<-15%)': 'veryneg',
    'Under -50%': 'u-50',
    'Under -45%': 'u-45',
    'Under -40%': 'u-40',
    'Under -35%': 'u-35',
    'Under -30%': 'u-30',
    'Under -25%': 'u-25',
    'Under -20%': 'u-20',
    'Under -15%': 'u-15',
    'Under -10%': 'u-10',
    'Under -5%': 'u-5',
    'Over +5%': 'o5',
    'Over +10%': 'o10',
    'Over +15%': 'o15',
    'Over +20%': 'o20',
    'Over +25%': 'o25',
    'Over +30%': 'o30',
    'Over +35%': 'o35',
    'Over +40%': 'o40',
    'Over +45%': 'o45',
    'Over +50%': 'o50'
}

const returnOnEquityMap = {
    'Positive (>0%)': 'pos',
    'Negative (<0%)': 'neg',
    'Very Positive (>30%)': 'verypos',
    'Very Negative (<-15%)': 'veryneg',
    'Under -50%': 'u-50',
    'Under -45%': 'u-45',
    'Under -40%': 'u-40',
    'Under -35%': 'u-35',
    'Under -30%': 'u-30',
    'Under -25%': 'u-25',
    'Under -20%': 'u-20',
    'Under -15%': 'u-15',
    'Under -10%': 'u-10',
    'Under -5%': 'u-5',
    'Over +5%': 'o5',
    'Over +10%': 'o10',
    'Over +15%': 'o15',
    'Over +20%': 'o20',
    'Over +25%': 'o25',
    'Over +30%': 'o30',
    'Over +35%': 'o35',
    'Over +40%': 'o40',
    'Over +45%': 'o45',
    'Over +50%': 'o50'
}

const returnOnInvestmentMap = {
    'Positive (>0%)': 'pos',
    'Negative (<0%)': 'neg',
    'Very Positive (>25%)': 'verypos',
    'Very Negative (<-10%)': 'veryneg',
    'Under -50%': 'u-50',
    'Under -45%': 'u-45',
    'Under -40%': 'u-40',
    'Under -35%': 'u-35',
    'Under -30%': 'u-30',
    'Under -25%': 'u-25',
    'Under -20%': 'u-20',
    'Under -15%': 'u-15',
    'Under -10%': 'u-10',
    'Under -5%': 'u-5',
    'Over +5%': 'o5',
    'Over +10%': 'o10',
    'Over +15%': 'o15',
    'Over +20%': 'o20',
    'Over +25%': 'o25',
    'Over +30%': 'o30',
    'Over +35%': 'o35',
    'Over +40%': 'o40',
    'Over +45%': 'o45',
    'Over +50%': 'o50'
}

const currentRatioMap = {
    'High (>3)': 'high',
    'Low (<1)': 'low',
    'Under 1': 'u1',
    'Under 0.5': 'u0.5',
    'Over 0.5': 'o0.5',
    'Over 1': 'o1',
    'Over 1.5': 'o1.5',
    'Over 2': 'o2',
    'Over 3': 'o3',
    'Over 4': 'o4',
    'Over 5': 'o5',
    'Over 10': 'o10'
}

const quickRatioMap = {
    'High (>3)': 'high',
    'Low (<0.5)': 'low',
    'Under 1': 'u1',
    'Under 0.5': 'u0.5',
    'Over 0.5': 'o0.5',
    'Over 1': 'o1',
    'Over 1.5': 'o1.5',
    'Over 2': 'o2',
    'Over 3': 'o3',
    'Over 4': 'o4',
    'Over 5': 'o5',
    'Over 10': 'o10'
}

const ltDebtEquityMap = {
    'High (>0.5)': 'high',
    'Low (<0.1)': 'low',
    'Under 1': 'u1',
    'Under 0.9': 'u0.9',
    'Under 0.8': 'u0.8',
    'Under 0.7': 'u0.7',
    'Under 0.6': 'u0.6',
    'Under 0.5': 'u0.5',
    'Under 0.4': 'u0.4',
    'Under 0.3': 'u0.3',
    'Under 0.2': 'u0.2',
    'Under 0.1': 'u0.1',
    'Over 0.1': 'o0.1',
    'Over 0.2': 'o0.2',
    'Over 0.3': 'o0.3',
    'Over 0.4': 'o0.4',
    'Over 0.5': 'o0.5',
    'Over 0.6': 'o0.6',
    'Over 0.7': 'o0.7',
    'Over 0.8': 'o0.8',
    'Over 0.9': 'o0.9',
    'Over 1': 'o1'
}

const debtEquityMap = {
    'High (>0.5)': 'high',
    'Low (<0.1)': 'low',
    'Under 1': 'u1',
    'Under 0.9': 'u0.9',
    'Under 0.8': 'u0.8',
    'Under 0.7': 'u0.7',
    'Under 0.6': 'u0.6',
    'Under 0.5': 'u0.5',
    'Under 0.4': 'u0.4',
    'Under 0.3': 'u0.3',
    'Under 0.2': 'u0.2',
    'Under 0.1': 'u0.1',
    'Over 0.1': 'o0.1',
    'Over 0.2': 'o0.2',
    'Over 0.3': 'o0.3',
    'Over 0.4': 'o0.4',
    'Over 0.5': 'o0.5',
    'Over 0.6': 'o0.6',
    'Over 0.7': 'o0.7',
    'Over 0.8': 'o0.8',
    'Over 0.9': 'o0.9',
    'Over 1': 'o1'
}

const grossMarginMap = {
    'Positive (>0%)': 'pos',
    'Negative (<0%)': 'neg',
    'High (>50%)': 'high',
    'Under 90%': 'u90',
    'Under 80%': 'u80',
    'Under 70%': 'u70',
    'Under 60%': 'u60',
    'Under 50%': 'u50',
    'Under 45%': 'u45',
    'Under 40%': 'u40',
    'Under 35%': 'u35',
    'Under 30%': 'u30',
    'Under 25%': 'u25',
    'Under 20%': 'u20',
    'Under 15%': 'u15',
    'Under 10%': 'u10',
    'Under 5%': 'u5',
    'Under 0%': 'u0',
    'Under -10%': 'u-10',
    'Under -20%': 'u-20',
    'Under -30%': 'u-30',
    'Under -50%': 'u-50',
    'Under -70%': 'u-70',
    'Under -100%': 'u-100',
    'Over 0%': 'o0',
    'Over 5%': 'o5',
    'Over 10%': 'o10',
    'Over 15%': 'o15',
    'Over 20%': 'o20',
    'Over 25%': 'o25',
    'Over 30%': 'o30',
    'Over 35%': 'o35',
    'Over 40%': 'o40',
    'Over 45%': 'o45',
    'Over 50%': 'o50',
    'Over 60%': 'o60',
    'Over 70%': 'o70',
    'Over 80%': 'o80',
    'Over 90%': 'o90'
}

const operatingMarginMap = {
    'Positive (>0%)': 'pos',
    'Negative (<0%)': 'neg',
    'Very Negative (<-20%)': 'veryneg',
    'High (>25%)': 'high',
    'Under 90%': 'u90',
    'Under 80%': 'u80',
    'Under 70%': 'u70',
    'Under 60%': 'u60',
    'Under 50%': 'u50',
    'Under 45%': 'u45',
    'Under 40%': 'u40',
    'Under 35%': 'u35',
    'Under 30%': 'u30',
    'Under 25%': 'u25',
    'Under 20%': 'u20',
    'Under 15%': 'u15',
    'Under 10%': 'u10',
    'Under 5%': 'u5',
    'Under 0%': 'u0',
    'Under -10%': 'u-10',
    'Under -20%': 'u-20',
    'Under -30%': 'u-30',
    'Under -50%': 'u-50',
    'Under -70%': 'u-70',
    'Under -100%': 'u-100',
    'Over 0%': 'o0',
    'Over 5%': 'o5',
    'Over 10%': 'o10',
    'Over 15%': 'o15',
    'Over 20%': 'o20',
    'Over 25%': 'o25',
    'Over 30%': 'o30',
    'Over 35%': 'o35',
    'Over 40%': 'o40',
    'Over 45%': 'o45',
    'Over 50%': 'o50',
    'Over 60%': 'o60',
    'Over 70%': 'o70',
    'Over 80%': 'o80',
    'Over 90%': 'o90'
}

const netProfitMarginMap = {
    'Positive (>0%)': 'pos',
    'Negative (<0%)': 'neg',
    'Very Negative (<-20%)': 'veryneg',
    'High (>20%)': 'high',
    'Under 90%': 'u90',
    'Under 80%': 'u80',
    'Under 70%': 'u70',
    'Under 60%': 'u60',
    'Under 50%': 'u50',
    'Under 45%': 'u45',
    'Under 40%': 'u40',
    'Under 35%': 'u35',
    'Under 30%': 'u30',
    'Under 25%': 'u25',
    'Under 20%': 'u20',
    'Under 15%': 'u15',
    'Under 10%': 'u10',
    'Under 5%': 'u5',
    'Under 0%': 'u0',
    'Under -10%': 'u-10',
    'Under -20%': 'u-20',
    'Under -30%': 'u-30',
    'Under -50%': 'u-50',
    'Under -70%': 'u-70',
    'Under -100%': 'u-100',
    'Over 0%': 'o0',
    'Over 5%': 'o5',
    'Over 10%': 'o10',
    'Over 15%': 'o15',
    'Over 20%': 'o20',
    'Over 25%': 'o25',
    'Over 30%': 'o30',
    'Over 35%': 'o35',
    'Over 40%': 'o40',
    'Over 45%': 'o45',
    'Over 50%': 'o50',
    'Over 60%': 'o60',
    'Over 70%': 'o70',
    'Over 80%': 'o80',
    'Over 90%': 'o90'
}

const payoutRatioMap = {
    'None (0%)': 'none',
    'Positive (>0%)': 'pos',
    'Low (<20%)': 'low',
    'High (>50%)': 'high',
    'Over 0%': 'o0',
    'Over 10%': 'o10',
    'Over 20%': 'o20',
    'Over 30%': 'o30',
    'Over 40%': 'o40',
    'Over 50%': 'o50',
    'Over 60%': 'o60',
    'Over 70%': 'o70',
    'Over 80%': 'o80',
    'Over 90%': 'o90',
    'Over 100%': 'o100',
    'Under 10%': 'u10',
    'Under 20%': 'u20',
    'Under 30%': 'u30',
    'Under 40%': 'u40',
    'Under 50%': 'u50',
    'Under 60%': 'u60',
    'Under 70%': 'u70',
    'Under 80%': 'u80',
    'Under 90%': 'u90',
    'Under 100%': 'u100'
}

const insiderOwnershipMap = {
    'Low (<5%)': 'low',
    'High (>30%)': 'high',
    'Very High (>50%)': 'veryhigh',
    'Over 10%': 'o10',
    'Over 20%': 'o20',
    'Over 30%': 'o30',
    'Over 40%': 'o40',
    'Over 50%': 'o50',
    'Over 60%': 'o60',
    'Over 70%': 'o70',
    'Over 80%': 'o80',
    'Over 90%': 'o90'
}

const insiderTransactionsMap = {
    'Very Negative (<20%)': 'veryneg',
    'Negative (<0%)': 'neg',
    'Positive (>0%)': 'pos',
    'Very Positive (>20%)': 'verypos',
    'Under -90%': 'u-90',
    'Under -80%': 'u-80',
    'Under -70%': 'u-70',
    'Under -60%': 'u-60',
    'Under -50%': 'u-50',
    'Under -45%': 'u-45',
    'Under -40%': 'u-40',
    'Under -35%': 'u-35',
    'Under -30%': 'u-30',
    'Under -25%': 'u-25',
    'Under -20%': 'u-20',
    'Under -15%': 'u-15',
    'Under -10%': 'u-10',
    'Under -5%': 'u-5',
    'Over +5%': 'o5',
    'Over +10%': 'o10',
    'Over +15%': 'o15',
    'Over +20%': 'o20',
    'Over +25%': 'o25',
    'Over +30%': 'o30',
    'Over +35%': 'o35',
    'Over +40%': 'o40',
    'Over +45%': 'o45',
    'Over +50%': 'o50',
    'Over +60%': 'o60',
    'Over +70%': 'o70',
    'Over +80%': 'o80',
    'Over +90%': 'o90'
}

const institutionalOwnershipMap = {
    'Low (<5%)': 'low',
    'High (>90%)': 'high',
    'Under 90%': 'u90',
    'Under 80%': 'u80',
    'Under 70%': 'u70',
    'Under 60%': 'u60',
    'Under 50%': 'u50',
    'Under 40%': 'u40',
    'Under 30%': 'u30',
    'Under 20%': 'u20',
    'Under 10%': 'u10',
    'Over 10%': 'o10',
    'Over 20%': 'o20',
    'Over 30%': 'o30',
    'Over 40%': 'o40',
    'Over 50%': 'o50',
    'Over 60%': 'o60',
    'Over 70%': 'o70',
    'Over 80%': 'o80',
    'Over 90%': 'o90'
}

const institutionalTransactionsMap = {
    'Very Negative (<20%)': 'veryneg',
    'Negative (<0%)': 'neg',
    'Positive (>0%)': 'pos',
    'Very Positive (>20%)': 'verypos',
    'Under -50%': 'u-50',
    'Under -45%': 'u-45',
    'Under -40%': 'u-40',
    'Under -35%': 'u-35',
    'Under -30%': 'u-30',
    'Under -25%': 'u-25',
    'Under -20%': 'u-20',
    'Under -15%': 'u-15',
    'Under -10%': 'u-10',
    'Under -5%': 'u-5',
    'Over +5%': 'o5',
    'Over +10%': 'o10',
    'Over +15%': 'o15',
    'Over +20%': 'o20',
    'Over +25%': 'o25',
    'Over +30%': 'o30',
    'Over +35%': 'o35',
    'Over +40%': 'o40',
    'Over +45%': 'o45',
    'Over +50%': 'o50'
}

const floatShortMap = {
    'Low (<5%)': 'low',
    'High (>20%)': 'high',
    'Under 5%': 'u5',
    'Under 10%': 'u10',
    'Under 15%': 'u15',
    'Under 20%': 'u20',
    'Under 25%': 'u25',
    'Under 30%': 'u30',
    'Over 5%': 'o5',
    'Over 10%': 'o10',
    'Over 15%': 'o15',
    'Over 20%': 'o20',
    'Over 25%': 'o25',
    'Over 30%': 'o30'
}

const analystRecomMap = {
    'Strong Buy (1)': 'strongbuy',
    'Buy or better': 'buybetter',
    'Buy': 'buy',
    'Hold or better': 'holdbetter',
    'Hold': 'hold',
    'Hold or worse': 'holdworse',
    'Sell': 'sell',
    'Sell or worse': 'sellworse',
    'Strong Sell (5)': 'strongsell'
}

const optionShortMap = {
    'Optionable': 'option',
    'Shortable': 'short',
    'Optionable and shortable': 'optionshort'
}

const earningsDateMap = {
    'Today': 'today',
    'Today Before Market Open': 'todaybefore',
    'Today After Market Close': 'todayafter',
    'Tomorrow': 'tomorrow',
    'Tomorrow Before Market Open': 'tomorrowbefore',
    'Tomorrow After Market Close': 'tomorrowafter',
    'Yesterday': 'yesterday',
    'Yesterday Before Market Open': 'yesterdaybefore',
    'Yesterday After Market Close': 'yesterdayafter',
    'Next 5 Days': 'nextdays5',
    'Previous 5 Days': 'prevdays5',
    'This Week': 'thisweek',
    'Next Week': 'nextweek',
    'Previous Week': 'prevweek',
    'This Month': 'thismonth'
}

const performanceMap = {
    'Today Up': 'dup',
    'Today Down': 'ddown',
    'Today -15%': 'd15u',
    'Today -10%': 'd10u',
    'Today -5%': 'd5u',
    'Today +5%': 'd5o',
    'Today +10%': 'd10o',
    'Today +15%': 'd15o',
    'Week -30%': '1w30u',
    'Week -20%': '1w20u',
    'Week -10%': '1w10u',
    'Week Down': '1wdown',
    'Week Up': '1wup',
    'Week +10%': '1w10o',
    'Week +20%': '1w20o',
    'Week +30%': '1w30o',
    'Month -50%': '4w50u',
    'Month -30%': '4w30u',
    'Month -20%': '4w20u',
    'Month -10%': '4w10u',
    'Month Down': '4wdown',
    'Month Up': '4wup',
    'Month +10%': '4w10o',
    'Month +20%': '4w20o',
    'Month +30%': '4w30o',
    'Month +50%': '4w50o',
    'Quarter -50%': '13w50u',
    'Quarter -30%': '13w30u',
    'Quarter -20%': '13w20u',
    'Quarter -10%': '13w10u',
    'Quarter Down': '13wdown',
    'Quarter Up': '13wup',
    'Quarter +10%': '13w10o',
    'Quarter +20%': '13w20o',
    'Quarter +30%': '13w30o',
    'Quarter +50%': '13w50o',
    'Half -75%': '26w75u',
    'Half -50%': '26w50u',
    'Half -30%': '26w30u',
    'Half -20%': '26w20u',
    'Half -10%': '26w10u',
    'Half Down': '26wdown',
    'Half Up': '26wup',
    'Half +10%': '26w10o',
    'Half +20%': '26w20o',
    'Half +30%': '26w30o',
    'Half +50%': '26w50o',
    'Half +100%': '26w100o',
    'Year -75%': '52w75u',
    'Year -50%': '52w50u',
    'Year -30%': '52w30u',
    'Year -20%': '52w20u',
    'Year -10%': '52w10u',
    'Year Down': '52wdown',
    'Year Up': '52wup',
    'Year +10%': '52w10o',
    'Year +20%': '52w20o',
    'Year +30%': '52w30o',
    'Year +50%': '52w50o',
    'Year +100%': '52w100o',
    'Year +200%': '52w200o',
    'Year +300%': '52w300o',
    'Year +500%': '52w500o',
    'YTD -75%': 'ytd75u',
    'YTD -50%': 'ytd50u',
    'YTD -30%': 'ytd30u',
    'YTD -20%': 'ytd20u',
    'YTD -10%': 'ytd10u',
    'YTD -5%': 'ytd5u',
    'YTD Down': 'ytddown',
    'YTD Up': 'ytdup',
    'YTD +5%': 'ytd5o',
    'YTD +10%': 'ytd10o',
    'YTD +20%': 'ytd20o',
    'YTD +30%': 'ytd30o',
    'YTD +50%': 'ytd50o',
    'YTD +100%': 'ytd100o'
}

const performance2Map = {
    'Today Up': 'dup',
    'Today Down': 'ddown',
    'Today -15%': 'd15u',
    'Today -10%': 'd10u',
    'Today -5%': 'd5u',
    'Today +5%': 'd5o',
    'Today +10%': 'd10o',
    'Today +15%': 'd15o',
    'Week -30%': '1w30u',
    'Week -20%': '1w20u',
    'Week -10%': '1w10u',
    'Week Down': '1wdown',
    'Week Up': '1wup',
    'Week +10%': '1w10o',
    'Week +20%': '1w20o',
    'Week +30%': '1w30o',
    'Month -50%': '4w50u',
    'Month -30%': '4w30u',
    'Month -20%': '4w20u',
    'Month -10%': '4w10u',
    'Month Down': '4wdown',
    'Month Up': '4wup',
    'Month +10%': '4w10o',
    'Month +20%': '4w20o',
    'Month +30%': '4w30o',
    'Month +50%': '4w50o',
    'Quarter -50%': '13w50u',
    'Quarter -30%': '13w30u',
    'Quarter -20%': '13w20u',
    'Quarter -10%': '13w10u',
    'Quarter Down': '13wdown',
    'Quarter Up': '13wup',
    'Quarter +10%': '13w10o',
    'Quarter +20%': '13w20o',
    'Quarter +30%': '13w30o',
    'Quarter +50%': '13w50o',
    'Half -75%': '26w75u',
    'Half -50%': '26w50u',
    'Half -30%': '26w30u',
    'Half -20%': '26w20u',
    'Half -10%': '26w10u',
    'Half Down': '26wdown',
    'Half Up': '26wup',
    'Half +10%': '26w10o',
    'Half +20%': '26w20o',
    'Half +30%': '26w30o',
    'Half +50%': '26w50o',
    'Half +100%': '26w100o',
    'Year -75%': '52w75u',
    'Year -50%': '52w50u',
    'Year -30%': '52w30u',
    'Year -20%': '52w20u',
    'Year -10%': '52w10u',
    'Year Down': '52wdown',
    'Year Up': '52wup',
    'Year +10%': '52w10o',
    'Year +20%': '52w20o',
    'Year +30%': '52w30o',
    'Year +50%': '52w50o',
    'Year +100%': '52w100o',
    'Year +200%': '52w200o',
    'Year +300%': '52w300o',
    'Year +500%': '52w500o',
    'YTD -75%': 'ytd75u',
    'YTD -50%': 'ytd50u',
    'YTD -30%': 'ytd30u',
    'YTD -20%': 'ytd20u',
    'YTD -10%': 'ytd10u',
    'YTD -5%': 'ytd5u',
    'YTD Down': 'ytddown',
    'YTD Up': 'ytdup',
    'YTD +5%': 'ytd5o',
    'YTD +10%': 'ytd10o',
    'YTD +20%': 'ytd20o',
    'YTD +30%': 'ytd30o',
    'YTD +50%': 'ytd50o',
    'YTD +100%': 'ytd100o'
}

const volatilityMap = {
    'Week - Over 3%': 'wo3',
    'Week - Over 4%': 'wo4',
    'Week - Over 5%': 'wo5',
    'Week - Over 6%': 'wo6',
    'Week - Over 7%': 'wo7',
    'Week - Over 8%': 'wo8',
    'Week - Over 9%': 'wo9',
    'Week - Over 10%': 'wo10',
    'Week - Over 12%': 'wo12',
    'Week - Over 15%': 'wo15',
    'Month - Over 2%': 'mo2',
    'Month - Over 3%': 'mo3',
    'Month - Over 4%': 'mo4',
    'Month - Over 5%': 'mo5',
    'Month - Over 6%': 'mo6',
    'Month - Over 7%': 'mo7',
    'Month - Over 8%': 'mo8',
    'Month - Over 9%': 'mo9',
    'Month - Over 10%': 'mo10',
    'Month - Over 12%': 'mo12',
    'Month - Over 15%': 'mo15'
}

const rsi14Map = {
    'Overbought (90)': 'ob90',
    'Overbought (80)': 'ob80',
    'Overbought (70)': 'ob70',
    'Overbought (60)': 'ob60',
    'Oversold (40)': 'os40',
    'Oversold (30)': 'os30',
    'Oversold (20)': 'os20',
    'Oversold (10)': 'os10',
    'Not Overbought (<60)': 'nob60',
    'Not Overbought (<50)': 'nob50',
    'Not Oversold (>50)': 'nos50',
    'Not Oversold (>40)': 'nos40'
}

const gapMap = {
    'Up': 'u',
    'Up 0%': 'u0',
    'Up 1%': 'u1',
    'Up 2%': 'u2',
    'Up 3%': 'u3',
    'Up 4%': 'u4',
    'Up 5%': 'u5',
    'Up 6%': 'u6',
    'Up 7%': 'u7',
    'Up 8%': 'u8',
    'Up 9%': 'u9',
    'Up 10%': 'u10',
    'Up 15%': 'u15',
    'Up 20%': 'u20',
    'Down': 'd',
    'Down 0%': 'd0',
    'Down 1%': 'd1',
    'Down 2%': 'd2',
    'Down 3%': 'd3',
    'Down 4%': 'd4',
    'Down 5%': 'd5',
    'Down 6%': 'd6',
    'Down 7%': 'd7',
    'Down 8%': 'd8',
    'Down 9%': 'd9',
    'Down 10%': 'd10',
    'Down 15%': 'd15',
    'Down 20%': 'd20'
}

const twentyDaySimpleMovingAverageMap = {
    'Price below SMA20': 'pb',
    'Price 10% below SMA20': 'pb10',
    'Price 20% below SMA20': 'pb20',
    'Price 30% below SMA20': 'pb30',
    'Price 40% below SMA20': 'pb40',
    'Price 50% below SMA20': 'pb50',
    'Price above SMA20': 'pa',
    'Price 10% above SMA20': 'pa10',
    'Price 20% above SMA20': 'pa20',
    'Price 30% above SMA20': 'pa30',
    'Price 40% above SMA20': 'pa40',
    'Price 50% above SMA20': 'pa50',
    'Price crossed SMA20': 'pc',
    'Price crossed SMA20 above': 'pca',
    'Price crossed SMA20 below': 'pcb',
    'SMA20 crossed SMA50': 'cross50',
    'SMA20 crossed SMA50 above': 'cross50a',
    'SMA20 crossed SMA50 below': 'cross50b',
    'SMA20 crossed SMA200': 'cross200',
    'SMA20 crossed SMA200 above': 'cross200a',
    'SMA20 crossed SMA200 below': 'cross200b',
    'SMA20 above SMA50': 'sa50',
    'SMA20 below SMA50': 'sb50',
    'SMA20 above SMA200': 'sa200',
    'SMA20 below SMA200': 'sb200'
}

const fiftyDaySimpleMovingAverageMap = {
    'Price below SMA50': 'pb',
    'Price 10% below SMA50': 'pb10',
    'Price 20% below SMA50': 'pb20',
    'Price 30% below SMA50': 'pb30',
    'Price 40% below SMA50': 'pb40',
    'Price 50% below SMA50': 'pb50',
    'Price above SMA50': 'pa',
    'Price 10% above SMA50': 'pa10',
    'Price 20% above SMA50': 'pa20',
    'Price 30% above SMA50': 'pa30',
    'Price 40% above SMA50': 'pa40',
    'Price 50% above SMA50': 'pa50',
    'Price crossed SMA50': 'pc',
    'Price crossed SMA50 above': 'pca',
    'Price crossed SMA50 below': 'pcb',
    'SMA50 crossed SMA20': 'cross20',
    'SMA50 crossed SMA20 above': 'cross20a',
    'SMA50 crossed SMA20 below': 'cross20b',
    'SMA50 crossed SMA200': 'cross200',
    'SMA50 crossed SMA200 above': 'cross200a',
    'SMA50 crossed SMA200 below': 'cross200b',
    'SMA50 above SMA20': 'sa20',
    'SMA50 below SMA20': 'sb20',
    'SMA50 above SMA200': 'sa200',
    'SMA50 below SMA200': 'sb200'
}

const twoHundredDaySimpleMovingAverageMap = {
    'Price below SMA200': 'pb',
    'Price 10% below SMA200': 'pb10',
    'Price 20% below SMA200': 'pb20',
    'Price 30% below SMA200': 'pb30',
    'Price 40% below SMA200': 'pb40',
    'Price 50% below SMA200': 'pb50',
    'Price 60% below SMA200': 'pb60',
    'Price 70% below SMA200': 'pb70',
    'Price 80% below SMA200': 'pb80',
    'Price 90% below SMA200': 'pb90',
    'Price above SMA200': 'pa',
    'Price 10% above SMA200': 'pa10',
    'Price 20% above SMA200': 'pa20',
    'Price 30% above SMA200': 'pa30',
    'Price 40% above SMA200': 'pa40',
    'Price 50% above SMA200': 'pa50',
    'Price 60% above SMA200': 'pa60',
    'Price 70% above SMA200': 'pa70',
    'Price 80% above SMA200': 'pa80',
    'Price 90% above SMA200': 'pa90',
    'Price 100% above SMA200': 'pa100',
    'Price crossed SMA200': 'pc',
    'Price crossed SMA200 above': 'pca',
    'Price crossed SMA200 below': 'pcb',
    'SMA200 crossed SMA20': 'cross20',
    'SMA200 crossed SMA20 above': 'cross20a',
    'SMA200 crossed SMA20 below': 'cross20b',
    'SMA200 crossed SMA50': 'cross50',
    'SMA200 crossed SMA50 above': 'cross50a',
    'SMA200 crossed SMA50 below': 'cross50b',
    'SMA200 above SMA20': 'sa20',
    'SMA200 below SMA20': 'sb20',
    'SMA200 above SMA50': 'sa50',
    'SMA200 below SMA50': 'sb50'
}

const changeMap = {
    'Up': 'u',
    'Up 1%': 'u1',
    'Up 2%': 'u2',
    'Up 3%': 'u3',
    'Up 4%': 'u4',
    'Up 5%': 'u5',
    'Up 6%': 'u6',
    'Up 7%': 'u7',
    'Up 8%': 'u8',
    'Up 9%': 'u9',
    'Up 10%': 'u10',
    'Up 15%': 'u15',
    'Up 20%': 'u20',
    'Down': 'd',
    'Down 1%': 'd1',
    'Down 2%': 'd2',
    'Down 3%': 'd3',
    'Down 4%': 'd4',
    'Down 5%': 'd5',
    'Down 6%': 'd6',
    'Down 7%': 'd7',
    'Down 8%': 'd8',
    'Down 9%': 'd9',
    'Down 10%': 'd10',
    'Down 15%': 'd15',
    'Down 20%': 'd20'
}

const changeFromOpenMap = {
    'Up': 'u',
    'Up 1%': 'u1',
    'Up 2%': 'u2',
    'Up 3%': 'u3',
    'Up 4%': 'u4',
    'Up 5%': 'u5',
    'Up 6%': 'u6',
    'Up 7%': 'u7',
    'Up 8%': 'u8',
    'Up 9%': 'u9',
    'Up 10%': 'u10',
    'Up 15%': 'u15',
    'Up 20%': 'u20',
    'Down': 'd',
    'Down 1%': 'd1',
    'Down 2%': 'd2',
    'Down 3%': 'd3',
    'Down 4%': 'd4',
    'Down 5%': 'd5',
    'Down 6%': 'd6',
    'Down 7%': 'd7',
    'Down 8%': 'd8',
    'Down 9%': 'd9',
    'Down 10%': 'd10',
    'Down 15%': 'd15',
    'Down 20%': 'd20'
}

const twentyDayHighLowMap = {
    'New High': 'nh',
    'New Low': 'nl',
    '5% or more below High': 'b5h',
    '10% or more below High': 'b10h',
    '15% or more below High': 'b15h',
    '20% or more below High': 'b20h',
    '30% or more below High': 'b30h',
    '40% or more below High': 'b40h',
    '50% or more below High': 'b50h',
    '0-3% below High': 'b0to3h',
    '0-5% below High': 'b0to5h',
    '0-10% below High': 'b0to10h',
    '5% or more above Low': 'a5h',
    '10% or more above Low': 'a10h',
    '15% or more above Low': 'a15h',
    '20% or more above Low': 'a20h',
    '30% or more above Low': 'a30h',
    '40% or more above Low': 'a40h',
    '50% or more above Low': 'a50h',
    '0-3% above Low': 'a0to3h',
    '0-5% above Low': 'a0to5h',
    '0-10% above Low': 'a0to10h'
}

const fiftyDayHighLowMap = {
    'New High': 'nh',
    'New Low': 'nl',
    '5% or more below High': 'b5h',
    '10% or more below High': 'b10h',
    '15% or more below High': 'b15h',
    '20% or more below High': 'b20h',
    '30% or more below High': 'b30h',
    '40% or more below High': 'b40h',
    '50% or more below High': 'b50h',
    '0-3% below High': 'b0to3h',
    '0-5% below High': 'b0to5h',
    '0-10% below High': 'b0to10h',
    '5% or more above Low': 'a5h',
    '10% or more above Low': 'a10h',
    '15% or more above Low': 'a15h',
    '20% or more above Low': 'a20h',
    '30% or more above Low': 'a30h',
    '40% or more above Low': 'a40h',
    '50% or more above Low': 'a50h',
    '0-3% above Low': 'a0to3h',
    '0-5% above Low': 'a0to5h',
    '0-10% above Low': 'a0to10h'
}

const fiftyTwoWeekHighLowMap = {
    'New High': 'nh',
    'New Low': 'nl',
    '5% or more below High': 'b5h',
    '10% or more below High': 'b10h',
    '15% or more below High': 'b15h',
    '20% or more below High': 'b20h',
    '30% or more below High': 'b30h',
    '40% or more below High': 'b40h',
    '50% or more below High': 'b50h',
    '60% or more below High': 'b60h',
    '70% or more below High': 'b70h',
    '80% or more below High': 'b80h',
    '90% or more below High': 'b90h',
    '0-3% below High': 'b0to3h',
    '0-5% below High': 'b0to5h',
    '0-10% below High': 'b0to10h',
    '5% or more above Low': 'a5h',
    '10% or more above Low': 'a10h',
    '15% or more above Low': 'a15h',
    '20% or more above Low': 'a20h',
    '30% or more above Low': 'a30h',
    '40% or more above Low': 'a40h',
    '50% or more above Low': 'a50h',
    '60% or more above Low': 'a60h',
    '70% or more above Low': 'a70h',
    '80% or more above Low': 'a80h',
    '90% or more above Low': 'a90h',
    '100% or more above Low': 'a100h',
    '120% or more above Low': 'a120h',
    '150% or more above Low': 'a150h',
    '200% or more above Low': 'a200h',
    '300% or more above Low': 'a300h',
    '500% or more above Low': 'a500h',
    '0-3% above Low': 'a0to3h',
    '0-5% above Low': 'a0to5h',
    '0-10% above Low': 'a0to10h'
}

const patternMap = {
    'Horizontal S/R': 'horizontal',
    'Horizontal S/R (Strong)': 'horizontal2',
    'TL Resistance': 'tlresistance',
    'TL Resistance (Strong)': 'tlresistance2',
    'TL Support': 'tlsupport',
    'TL Support (Strong)': 'tlsupport2',
    'Wedge Up': 'wedgeup',
    'Wedge Up (Strong)': 'wedgeup2',
    'Wedge Down': 'wedgedown',
    'Wedge Down (Strong)': 'wedgedown2',
    'Triangle Ascending': 'wedgeresistance',
    'Triangle Ascending (Strong)': 'wedgeresistance2',
    'Triangle Descending': 'wedgesupport',
    'Triangle Descending (Strong)': 'wedgesupport2',
    'Wedge': 'wedge',
    'Wedge (Strong)': 'wedge2',
    'Channel Up': 'channelup',
    'Channel Up (Strong)': 'channelup2',
    'Channel Down': 'channeldown',
    'Channel Down (Strong)': 'channeldown2',
    'Channel': 'channel',
    'Channel (Strong)': 'channel2',
    'Double Top': 'doubletop',
    'Double Bottom': 'doublebottom',
    'Multiple Top': 'multipletop',
    'Multiple Bottom': 'multiplebottom',
    'Head & Shoulders': 'headandshoulders',
    'Head & Shoulders Inverse': 'headandshouldersinv'
}

const candlestickMap = {
    'Long Lower Shadow': 'lls',
    'Long Upper Shadow': 'lus',
    'Hammer': 'h',
    'Inverted Hammer': 'ih',
    'Spinning Top White': 'stw',
    'Spinning Top Black': 'stb',
    'Doji': 'd',
    'Dragonfly Doji': 'dd',
    'Gravestone Doji': 'gd',
    'Marubozu White': 'mw',
    'Marubozu Black': 'mb'
}

const betaMap = {
    'Under 0': 'u0',
    'Under 0.5': 'u0.5',
    'Under 1': 'u1',
    'Under 1.5': 'u1.5',
    'Under 2': 'u2',
    'Over 0': 'o0',
    'Over 0.5': 'o0.5',
    'Over 1': 'o1',
    'Over 1.5': 'o1.5',
    'Over 2': 'o2',
    'Over 2.5': 'o2.5',
    'Over 3': 'o3',
    'Over 4': 'o4',
    '0 to 0.5': '0to0.5',
    '0 to 1': '0to1',
    '0.5 to 1': '0.5to1',
    '0.5 to 1.5': '0.5to1.5',
    '1 to 1.5': '1to1.5',
    '1 to 2': '1to2'
}

const averageTrueRangeMap = {
    'Over 0.25': 'o0.25',
    'Over 0.5': 'o0.5',
    'Over 0.75': 'o0.75',
    'Over 1': 'o1',
    'Over 1.5': 'o1.5',
    'Over 2': 'o2',
    'Over 2.5': 'o2.5',
    'Over 3': 'o3',
    'Over 3.5': 'o3.5',
    'Over 4': 'o4',
    'Over 4.5': 'o4.5',
    'Over 5': 'o5',
    'Under 0.25': 'u0.25',
    'Under 0.5': 'u0.5',
    'Under 0.75': 'u0.75',
    'Under 1': 'u1',
    'Under 1.5': 'u1.5',
    'Under 2': 'u2',
    'Under 2.5': 'u2.5',
    'Under 3': 'u3',
    'Under 3.5': 'u3.5',
    'Under 4': 'u4',
    'Under 4.5': 'u4.5',
    'Under 5': 'u5'
}

const averageVolumeMap = {
    'Under 50K': 'u50',
    'Under 100K': 'u100',
    'Under 500K': 'u500',
    'Under 750K': 'u750',
    'Under 1M': 'u1000',
    'Over 50K': 'o50',
    'Over 100K': 'o100',
    'Over 200K': 'o200',
    'Over 300K': 'o300',
    'Over 400K': 'o400',
    'Over 500K': 'o500',
    'Over 750K': 'o750',
    'Over 1M': 'o1000',
    'Over 2M': 'o2000',
    '100K to 500K': '100to500',
    '100K to 1M': '100to1000',
    '500K to 1M': '500to1000',
    '500K to 10M': '500to10000'
}

const relativeVolumeMap = {
    'Over 10': 'o10',
    'Over 5': 'o5',
    'Over 3': 'o3',
    'Over 2': 'o2',
    'Over 1.5': 'o1.5',
    'Over 1': 'o1',
    'Over 0.75': 'o0.75',
    'Over 0.5': 'o0.5',
    'Over 0.25': 'o0.25',
    'Under 2': 'u2',
    'Under 1.5': 'u1.5',
    'Under 1': 'u1',
    'Under 0.75': 'u0.75',
    'Under 0.5': 'u0.5',
    'Under 0.25': 'u0.25',
    'Under 0.1': 'u0.1'
}

const currentVolumeMap = {
    'Under 50K': 'u50',
    'Under 100K': 'u100',
    'Under 500K': 'u500',
    'Under 750K': 'u750',
    'Under 1M': 'u1000',
    'Over 0': 'o0',
    'Over 50K': 'o50',
    'Over 100K': 'o100',
    'Over 200K': 'o200',
    'Over 300K': 'o300',
    'Over 400K': 'o400',
    'Over 500K': 'o500',
    'Over 750K': 'o750',
    'Over 1M': 'o1000',
    'Over 2M': 'o2000',
    'Over 5M': 'o5000',
    'Over 10M': 'o10000',
    'Over 20M': 'o20000'
}

const priceMap = {
    'Under $1': 'u1',
    'Under $2': 'u2',
    'Under $3': 'u3',
    'Under $4': 'u4',
    'Under $5': 'u5',
    'Under $7': 'u7',
    'Under $10': 'u10',
    'Under $15': 'u15',
    'Under $20': 'u20',
    'Under $30': 'u30',
    'Under $40': 'u40',
    'Under $50': 'u50',
    'Over $1': 'o1',
    'Over $2': 'o2',
    'Over $3': 'o3',
    'Over $4': 'o4',
    'Over $5': 'o5',
    'Over $7': 'o7',
    'Over $10': 'o10',
    'Over $15': 'o15',
    'Over $20': 'o20',
    'Over $30': 'o30',
    'Over $40': 'o40',
    'Over $50': 'o50',
    'Over $60': 'o60',
    'Over $70': 'o70',
    'Over $80': 'o80',
    'Over $90': 'o90',
    'Over $100': 'o100',
    '$1 to $5': '1to5',
    '$1 to $10': '1to10',
    '$1 to $20': '1to20',
    '$5 to $10': '5to10',
    '$5 to $20': '5to20',
    '$5 to $50': '5to50',
    '$10 to $20': '10to20',
    '$10 to $50': '10to50',
    '$20 to $50': '20to50',
    '$50 to $100': '50to100'
}

const targetPriceMap = {
    '50% Above Price': 'a50',
    '40% Above Price': 'a40',
    '30% Above Price': 'a30',
    '20% Above Price': 'a20',
    '10% Above Price': 'a10',
    '5% Above Price': 'a5',
    'Above Price': 'above',
    'Below Price': 'below',
    '5% Below Price': 'b5',
    '10% Below Price': 'b10',
    '20% Below Price': 'b20',
    '30% Below Price': 'b30',
    '40% Below Price': 'b40',
    '50% Below Price': 'b50'
}

const ipoDateMap = {
    'Today': 'today',
    'Yesterday': 'yesterday',
    'In the last week': 'prevweek',
    'In the last month': 'prevmonth',
    'In the last quarter': 'prevquarter',
    'In the last year': 'prevyear',
    'In the last 2 years': 'prev2yrs',
    'In the last 3 years': 'prev3yrs',
    'In the last 5 years': 'prev5yrs',
    'More than a year ago': 'more1',
    'More than 5 years ago': 'more5',
    'More than 10 years ago': 'more10',
    'More than 15 years ago': 'more15',
    'More than 20 years ago': 'more20',
    'More than 25 years ago': 'more25'
}

const sharesOutstandingMap = {
    'Under 1M': 'u1',
    'Under 5M': 'u5',
    'Under 10M': 'u10',
    'Under 20M': 'u20',
    'Under 50M': 'u50',
    'Under 100M': 'u100',
    'Over 1M': 'o1',
    'Over 2M': 'o2',
    'Over 5M': 'o5',
    'Over 10M': 'o10',
    'Over 20M': 'o20',
    'Over 50M': 'o50',
    'Over 100M': 'o100',
    'Over 200M': 'o200',
    'Over 500M': 'o500',
    'Over 1000M': 'o1000'
}

const floatMap = {
    'Under 1M': 'u1',
    'Under 5M': 'u5',
    'Under 10M': 'u10',
    'Under 20M': 'u20',
    'Under 50M': 'u50',
    'Under 100M': 'u100',
    'Over 1M': 'o1',
    'Over 2M': 'o2',
    'Over 5M': 'o5',
    'Over 10M': 'o10',
    'Over 20M': 'o20',
    'Over 50M': 'o50',
    'Over 100M': 'o100',
    'Over 200M': 'o200',
    'Over 500M': 'o500',
    'Over 1000M': 'o1000'
}

/**
 * @class
 * @typicalname fv
 * @example
 * const fv = new FinVizScreener()
 * const tickers = await fv
 *   .exchange('AMEX')
 *   .marketCap('Small ($300mln to $2bln)')
 *   .scan()
 * console.log(tickers)
 */
class FinVizScreener {
    constructor() {
        /** @private */
        this._url = 'https://finviz.com/screener.ashx?v=411'
        /** @private */
        this._signal = ''
        /** @private */
        this._filters = []
    }

    /**
     * Stock Exchange at which a stock is listed.
     *
     * @param {'AMEX'|'NASDAQ'|'NYSE'} filter Filter
     * @returns {this} this
     */
    exchange(filter) {
        if (! exchangeMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('exch_' + exchangeMap[filter])
        return this
    }

    /**
     * A major index membership of a stock.
     *
     * @param {'S&P 500'|'DJIA'} filter Filter
     * @returns {this} this
     */
    index(filter) {
        if (! indexMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('idx_' + indexMap[filter])
        return this
    }

    /**
     * The sector which a stock belongs to.
     *
     * @param {'Basic Materials'|'Communication Services'|'Consumer Cyclical'|'Consumer Defensive'|'Energy'|'Financial'|'Healthcare'|'Industrials'|'Real Estate'|'Technology'|'Utilities'} filter Filter
     * @returns {this} this
     */
    sector(filter) {
        if (! sectorMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('sec_' + sectorMap[filter])
        return this
    }

    /**
     * The industry which a stock belongs to.
     *
     * @param {'Stocks only (ex-Funds)'|'Exchange Traded Fund'|'Advertising Agencies'|'Aerospace & Defense'|'Agricultural Inputs'|'Airlines'|'Airports & Air Services'|'Aluminum'|'Apparel Manufacturing'|'Apparel Retail'|'Asset Management'|'Auto Manufacturers'|'Auto Parts'|'Auto & Truck Dealerships'|'Banks - Diversified'|'Banks - Regional'|'Beverages - Brewers'|'Beverages - Non-Alcoholic'|'Beverages - Wineries & Distilleries'|'Biotechnology'|'Broadcasting'|'Building Materials'|'Building Products & Equipment'|'Business Equipment & Supplies'|'Capital Markets'|'Chemicals'|'Closed-End Fund - Debt'|'Closed-End Fund - Equity'|'Closed-End Fund - Foreign'|'Coking Coal'|'Communication Equipment'|'Computer Hardware'|'Confectioners'|'Conglomerates'|'Consulting Services'|'Consumer Electronics'|'Copper'|'Credit Services'|'Department Stores'|'Diagnostics & Research'|'Discount Stores'|'Drug Manufacturers - General'|'Drug Manufacturers - Specialty & Generic'|'Education & Training Services'|'Electrical Equipment & Parts'|'Electronic Components'|'Electronic Gaming & Multimedia'|'Electronics & Computer Distribution'|'Engineering & Construction'|'Entertainment'|'Exchange Traded Fund'|'Farm & Heavy Construction Machinery'|'Farm Products'|'Financial Conglomerates'|'Financial Data & Stock Exchanges'|'Food Distribution'|'Footwear & Accessories'|'Furnishings, Fixtures & Appliances'|'Gambling'|'Gold'|'Grocery Stores'|'Healthcare Plans'|'Health Information Services'|'Home Improvement Retail'|'Household & Personal Products'|'Industrial Distribution'|'Information Technology Services'|'Infrastructure Operations'|'Insurance Brokers'|'Insurance - Diversified'|'Insurance - Life'|'Insurance - Property & Casualty'|'Insurance - Reinsurance'|'Insurance - Specialty'|'Integrated Freight & Logistics'|'Internet Content & Information'|'Internet Retail'|'Leisure'|'Lodging'|'Lumber & Wood Production'|'Luxury Goods'|'Marine Shipping'|'Medical Care Facilities'|'Medical Devices'|'Medical Distribution'|'Medical Instruments & Supplies'|'Metal Fabrication'|'Mortgage Finance'|'Oil & Gas Drilling'|'Oil & Gas E&P'|'Oil & Gas Equipment & Services'|'Oil & Gas Integrated'|'Oil & Gas Midstream'|'Oil & Gas Refining & Marketing'|'Other Industrial Metals & Mining'|'Other Precious Metals & Mining'|'Packaged Foods'|'Packaging & Containers'|'Paper & Paper Products'|'Personal Services'|'Pharmaceutical Retailers'|'Pollution & Treatment Controls'|'Publishing'|'Railroads'|'Real Estate - Development'|'Real Estate - Diversified'|'Real Estate Services'|'Recreational Vehicles'|'REIT - Diversified'|'REIT - Healthcare Facilities'|'REIT - Hotel & Motel'|'REIT - Industrial'|'REIT - Mortgage'|'REIT - Office'|'REIT - Residential'|'REIT - Retail'|'REIT - Specialty'|'Rental & Leasing Services'|'Residential Construction'|'Resorts & Casinos'|'Restaurants'|'Scientific & Technical Instruments'|'Security & Protection Services'|'Semiconductor Equipment & Materials'|'Semiconductors'|'Shell Companies'|'Silver'|'Software - Application'|'Software - Infrastructure'|'Solar'|'Specialty Business Services'|'Specialty Chemicals'|'Specialty Industrial Machinery'|'Specialty Retail'|'Staffing & Employment Services'|'Steel'|'Telecom Services'|'Textile Manufacturing'|'Thermal Coal'|'Tobacco'|'Tools & Accessories'|'Travel Services'|'Trucking'|'Uranium'|'Utilities - Diversified'|'Utilities - Independent Power Producers'|'Utilities - Regulated Electric'|'Utilities - Regulated Gas'|'Utilities - Regulated Water'|'Utilities - Renewable'|'Waste Management'} filter Filter
     * @returns {this} this
     */
    industry(filter) {
        if (! industryMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('ind_' + industryMap[filter])
        return this
    }

    /**
     * The country where company of selected stock is based.
     *
     * @param {'USA'|'Foreign (ex-USA)'|'Asia'|'Europe'|'Latin America'|'BRIC'|'Argentina'|'Australia'|'Bahamas'|'Belgium'|'BeNeLux'|'Bermuda'|'Brazil'|'Canada'|'Cayman Islands'|'Chile'|'China'|'China & Hong Kong'|'Colombia'|'Cyprus'|'Denmark'|'Finland'|'France'|'Germany'|'Greece'|'Hong Kong'|'Hungary'|'Iceland'|'India'|'Indonesia'|'Ireland'|'Israel'|'Italy'|'Japan'|'Kazakhstan'|'Luxembourg'|'Malaysia'|'Malta'|'Mexico'|'Monaco'|'Netherlands'|'New Zealand'|'Norway'|'Panama'|'Peru'|'Philippines'|'Portugal'|'Russia'|'Singapore'|'South Africa'|'South Korea'|'Spain'|'Sweden'|'Switzerland'|'Taiwan'|'Turkey'|'United Arab Emirates'|'United Kingdom'|'Uruguay'} filter Filter
     * @returns {this} this
     */
    country(filter) {
        if (! countryMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('geo_' + countryMap[filter])
        return this
    }

    /**
     * Equals The total dollar market value of all of a company's outstanding shares.
     *
     * @param {'Mega ($200bln and more)'|'Large ($10bln to $200bln)'|'Mid ($2bln to $10bln)'|'Small ($300mln to $2bln)'|'Micro ($50mln to $300mln)'|'Nano (under $50mln)'|'+Large (over $10bln)'|'+Mid (over $2bln)'|'+Small (over $300mln)'|'+Micro (over $50mln)'|'-Large (under $200bln)'|'-Mid (under $10bln)'|'-Small (under $2bln)'|'-Micro (under $300mln)'} filter Filter
     * @returns {this} this
     */
    marketCap(filter) {
        if (! marketCapMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('cap_' + marketCapMap[filter])
        return this
    }

    /**
     * A valuation ratio of a company's current share price compared to its per-share earnings (ttm).
     *
     * @param {'Low (<15)'|'Profitable (>0)'|'High (>50)'|'Under 5'|'Under 10'|'Under 15'|'Under 20'|'Under 25'|'Under 30'|'Under 35'|'Under 40'|'Under 45'|'Under 50'|'Over 5'|'Over 10'|'Over 15'|'Over 20'|'Over 25'|'Over 30'|'Over 35'|'Over 40'|'Over 45'|'Over 50'} filter Filter
     * @returns {this} this
     */
    pe(filter) {
        if (! peMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_pe_' + peMap[filter])
        return this
    }

    /**
     * A measure of the price-to-earnings ratio using forecasted earnings for the P/E calculation. Value for next fiscal year.
     *
     * @param {'Low (<15)'|'Profitable (>0)'|'High (>50)'|'Under 5'|'Under 10'|'Under 15'|'Under 20'|'Under 25'|'Under 30'|'Under 35'|'Under 40'|'Under 45'|'Under 50'|'Over 5'|'Over 10'|'Over 15'|'Over 20'|'Over 25'|'Over 30'|'Over 35'|'Over 40'|'Over 45'|'Over 50'} filter Filter
     * @returns {this} this
     */
    forwardPe(filter) {
        if (! forwardPeMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_fpe_' + forwardPeMap[filter])
        return this
    }

    /**
     * A ratio used to determine a stock's value while taking into account earnings growth.
     *
     * @param {'Low (<1)'|'High (>2)'|'Under 1'|'Under 2'|'Under 3'|'Over 1'|'Over 2'|'Over 3'} filter Filter
     * @returns {this} this
     */
    peg(filter) {
        if (! pegMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_peg_' + pegMap[filter])
        return this
    }

    /**
     * P/S number reflects the value placed on sales by the market. It is calculated by dividing the current closing price of the stock by the dollar-sales value per share.
     *
     * @param {'Low (<1)'|'High (>10)'|'Under 1'|'Under 2'|'Under 3'|'Under 4'|'Under 5'|'Under 6'|'Under 7'|'Under 8'|'Under 9'|'Under 10'|'Over 1'|'Over 2'|'Over 3'|'Over 4'|'Over 5'|'Over 6'|'Over 7'|'Over 8'|'Over 9'|'Over 10'} filter Filter
     * @returns {this} this
     */
    ps(filter) {
        if (! psMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_ps_' + psMap[filter])
        return this
    }

    /**
     * A ratio used to compare a stock's market value to its book value. It is calculated by dividing the current closing price of the stock by the latest quarter's book value per share.
     *
     * @param {'Low (<1)'|'High (>5)'|'Under 1'|'Under 2'|'Under 3'|'Under 4'|'Under 5'|'Under 6'|'Under 7'|'Under 8'|'Under 9'|'Under 10'|'Over 1'|'Over 2'|'Over 3'|'Over 4'|'Over 5'|'Over 6'|'Over 7'|'Over 8'|'Over 9'|'Over 10'} filter Filter
     * @returns {this} this
     */
    pb(filter) {
        if (! pbMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_pb_' + pbMap[filter])
        return this
    }

    /**
     * A ratio used to compare a stock's market value to its cash assets. It is calculated by dividing the current closing price of the stock by the latest quarter's cash per share.
     *
     * @param {'Low (<3)'|'High (>50)'|'Under 1'|'Under 2'|'Under 3'|'Under 4'|'Under 5'|'Under 6'|'Under 7'|'Under 8'|'Under 9'|'Under 10'|'Over 1'|'Over 2'|'Over 3'|'Over 4'|'Over 5'|'Over 6'|'Over 7'|'Over 8'|'Over 9'|'Over 10'|'Over 20'|'Over 30'|'Over 40'|'Over 50'} filter Filter
     * @returns {this} this
     */
    priceCash(filter) {
        if (! priceCashMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_pc_' + priceCashMap[filter])
        return this
    }

    /**
     * A valuation metric that compares a company's market price to its level of annual free cash flow.
     *
     * @param {'Low (<15)'|'High (>50)'|'Under 5'|'Under 10'|'Under 15'|'Under 20'|'Under 25'|'Under 30'|'Under 35'|'Under 40'|'Under 45'|'Under 50'|'Under 60'|'Under 70'|'Under 80'|'Under 90'|'Under 100'|'Over 5'|'Over 10'|'Over 15'|'Over 20'|'Over 25'|'Over 30'|'Over 35'|'Over 40'|'Over 45'|'Over 50'|'Over 60'|'Over 70'|'Over 80'|'Over 90'|'Over 100'} filter Filter
     * @returns {this} this
     */
    priceFreeCashFlow(filter) {
        if (! priceFreeCashFlowMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_pfcf_' + priceFreeCashFlowMap[filter])
        return this
    }

    /**
     * EPS is the portion of a company's profit allocated to each outstanding share of common stock. EPS serves as an indicator of a company's profitability. Value for current fiscal year.
     *
     * @param {'Negative (<0%)'|'Positive (>0%)'|'Positive Low (0-10%)'|'High (>25%)'|'Under 5%'|'Under 10%'|'Under 15%'|'Under 20%'|'Under 25%'|'Under 30%'|'Over 5%'|'Over 10%'|'Over 15%'|'Over 20%'|'Over 25%'|'Over 30%'} filter Filter
     * @returns {this} this
     */
    epsGrowththisYear(filter) {
        if (! epsGrowththisYearMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_epsyoy_' + epsGrowththisYearMap[filter])
        return this
    }

    /**
     * EPS is the portion of a company's profit allocated to each outstanding share of common stock. EPS serves as an indicator of a company's profitability. Estimate for next fiscal year.
     *
     * @param {'Negative (<0%)'|'Positive (>0%)'|'Positive Low (0-10%)'|'High (>25%)'|'Under 5%'|'Under 10%'|'Under 15%'|'Under 20%'|'Under 25%'|'Under 30%'|'Over 5%'|'Over 10%'|'Over 15%'|'Over 20%'|'Over 25%'|'Over 30%'} filter Filter
     * @returns {this} this
     */
    epsGrowthnextYear(filter) {
        if (! epsGrowthnextYearMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_epsyoy1_' + epsGrowthnextYearMap[filter])
        return this
    }

    /**
     * EPS is the portion of a company's profit allocated to each outstanding share of common stock. EPS serves as an indicator of a company's profitability. Annual growth over past 5 years.
     *
     * @param {'Negative (<0%)'|'Positive (>0%)'|'Positive Low (0-10%)'|'High (>25%)'|'Under 5%'|'Under 10%'|'Under 15%'|'Under 20%'|'Under 25%'|'Under 30%'|'Over 5%'|'Over 10%'|'Over 15%'|'Over 20%'|'Over 25%'|'Over 30%'} filter Filter
     * @returns {this} this
     */
    epsGrowthpast5Years(filter) {
        if (! epsGrowthpast5YearsMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_eps5years_' + epsGrowthpast5YearsMap[filter])
        return this
    }

    /**
     * EPS is the portion of a company's profit allocated to each outstanding share of common stock. EPS serves as an indicator of a company's profitability. Long term annual growth estimate.
     *
     * @param {'Negative (<0%)'|'Positive (>0%)'|'Positive Low (<10%)'|'High (>25%)'|'Under 5%'|'Under 10%'|'Under 15%'|'Under 20%'|'Under 25%'|'Under 30%'|'Over 5%'|'Over 10%'|'Over 15%'|'Over 20%'|'Over 25%'|'Over 30%'} filter Filter
     * @returns {this} this
     */
    epsGrowthnext5Years(filter) {
        if (! epsGrowthnext5YearsMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_estltgrowth_' + epsGrowthnext5YearsMap[filter])
        return this
    }

    /**
     * Annual growth over past 5 years.
     *
     * @param {'Negative (<0%)'|'Positive (>0%)'|'Positive Low (0-10%)'|'High (>25%)'|'Under 5%'|'Under 10%'|'Under 15%'|'Under 20%'|'Under 25%'|'Under 30%'|'Over 5%'|'Over 10%'|'Over 15%'|'Over 20%'|'Over 25%'|'Over 30%'} filter Filter
     * @returns {this} this
     */
    salesGrowthpast5Years(filter) {
        if (! salesGrowthpast5YearsMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_sales5years_' + salesGrowthpast5YearsMap[filter])
        return this
    }

    /**
     * EPS is the portion of a company's profit allocated to each outstanding share of common stock. EPS serves as an indicator of a company's profitability. Quarter over quarter growth.
     *
     * @param {'Negative (<0%)'|'Positive (>0%)'|'Positive Low (0-10%)'|'High (>25%)'|'Under 5%'|'Under 10%'|'Under 15%'|'Under 20%'|'Under 25%'|'Under 30%'|'Over 5%'|'Over 10%'|'Over 15%'|'Over 20%'|'Over 25%'|'Over 30%'} filter Filter
     * @returns {this} this
     */
    epsGrowthqtrOverQtr(filter) {
        if (! epsGrowthqtrOverQtrMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_epsqoq_' + epsGrowthqtrOverQtrMap[filter])
        return this
    }

    /**
     * Quarter over quarter growth.
     *
     * @param {'Negative (<0%)'|'Positive (>0%)'|'Positive Low (0-10%)'|'High (>25%)'|'Under 5%'|'Under 10%'|'Under 15%'|'Under 20%'|'Under 25%'|'Under 30%'|'Over 5%'|'Over 10%'|'Over 15%'|'Over 20%'|'Over 25%'|'Over 30%'} filter Filter
     * @returns {this} this
     */
    salesGrowthqtrOverQtr(filter) {
        if (! salesGrowthqtrOverQtrMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_salesqoq_' + salesGrowthqtrOverQtrMap[filter])
        return this
    }

    /**
     * The dividend yield equals the annual dividend per share divided by the stock’s price. This measurement tells what percentage return a company pays out to shareholders in the form of dividends.
     *
     * @param {'None (0%)'|'Positive (>0%)'|'High (>5%)'|'Very High (>10%)'|'Over 1%'|'Over 2%'|'Over 3%'|'Over 4%'|'Over 5%'|'Over 6%'|'Over 7%'|'Over 8%'|'Over 9%'|'Over 10%'} filter Filter
     * @returns {this} this
     */
    dividendYield(filter) {
        if (! dividendYieldMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_div_' + dividendYieldMap[filter])
        return this
    }

    /**
     * An indicator of how profitable a company is relative to its total assets. ROA gives an idea as to how efficient management is at using its assets to generate earnings. Calculated by dividing a company's annual earnings by its total assets, ROA is displayed as a percentage.
     *
     * @param {'Positive (>0%)'|'Negative (<0%)'|'Very Positive (>15%)'|'Very Negative (<-15%)'|'Under -50%'|'Under -45%'|'Under -40%'|'Under -35%'|'Under -30%'|'Under -25%'|'Under -20%'|'Under -15%'|'Under -10%'|'Under -5%'|'Over +5%'|'Over +10%'|'Over +15%'|'Over +20%'|'Over +25%'|'Over +30%'|'Over +35%'|'Over +40%'|'Over +45%'|'Over +50%'} filter Filter
     * @returns {this} this
     */
    returnOnAssets(filter) {
        if (! returnOnAssetsMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_roa_' + returnOnAssetsMap[filter])
        return this
    }

    /**
     * A measure of a corporation's profitability that reveals how much profit a company generates with the money shareholders have invested. Calculated as Net Income / Shareholder's Equity.
     *
     * @param {'Positive (>0%)'|'Negative (<0%)'|'Very Positive (>30%)'|'Very Negative (<-15%)'|'Under -50%'|'Under -45%'|'Under -40%'|'Under -35%'|'Under -30%'|'Under -25%'|'Under -20%'|'Under -15%'|'Under -10%'|'Under -5%'|'Over +5%'|'Over +10%'|'Over +15%'|'Over +20%'|'Over +25%'|'Over +30%'|'Over +35%'|'Over +40%'|'Over +45%'|'Over +50%'} filter Filter
     * @returns {this} this
     */
    returnOnEquity(filter) {
        if (! returnOnEquityMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_roe_' + returnOnEquityMap[filter])
        return this
    }

    /**
     * Performance measure used to evaluate the efficiency of an investment or to compare the efficiency of a number of different investments. To calculate ROI, the benefit (return) of an investment is divided by the cost of the investment: (Gain from Investment - Cost of Investment) / Cost of Investment.
     *
     * @param {'Positive (>0%)'|'Negative (<0%)'|'Very Positive (>25%)'|'Very Negative (<-10%)'|'Under -50%'|'Under -45%'|'Under -40%'|'Under -35%'|'Under -30%'|'Under -25%'|'Under -20%'|'Under -15%'|'Under -10%'|'Under -5%'|'Over +5%'|'Over +10%'|'Over +15%'|'Over +20%'|'Over +25%'|'Over +30%'|'Over +35%'|'Over +40%'|'Over +45%'|'Over +50%'} filter Filter
     * @returns {this} this
     */
    returnOnInvestment(filter) {
        if (! returnOnInvestmentMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_roi_' + returnOnInvestmentMap[filter])
        return this
    }

    /**
     * A liquidity ratio that measures a company's ability to pay short-term obligations. Calculated as Current Assets / Current Liabilities.
     *
     * @param {'High (>3)'|'Low (<1)'|'Under 1'|'Under 0.5'|'Over 0.5'|'Over 1'|'Over 1.5'|'Over 2'|'Over 3'|'Over 4'|'Over 5'|'Over 10'} filter Filter
     * @returns {this} this
     */
    currentRatio(filter) {
        if (! currentRatioMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_curratio_' + currentRatioMap[filter])
        return this
    }

    /**
     * An indicator of a company's short-term liquidity. The quick ratio measures a company's ability to meet its short-term obligations with its most liquid assets. The higher the quick ratio, the better the position of the company. Calculated as (Current Assets - Inventories) / Current Liabilities.
     *
     * @param {'High (>3)'|'Low (<0.5)'|'Under 1'|'Under 0.5'|'Over 0.5'|'Over 1'|'Over 1.5'|'Over 2'|'Over 3'|'Over 4'|'Over 5'|'Over 10'} filter Filter
     * @returns {this} this
     */
    quickRatio(filter) {
        if (! quickRatioMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_quickratio_' + quickRatioMap[filter])
        return this
    }

    /**
     * A measure of a company's financial leverage calculated by dividing its long term debt by stockholders' equity. It indicates what proportion of equity and debt the company is using to finance its assets.
     *
     * @param {'High (>0.5)'|'Low (<0.1)'|'Under 1'|'Under 0.9'|'Under 0.8'|'Under 0.7'|'Under 0.6'|'Under 0.5'|'Under 0.4'|'Under 0.3'|'Under 0.2'|'Under 0.1'|'Over 0.1'|'Over 0.2'|'Over 0.3'|'Over 0.4'|'Over 0.5'|'Over 0.6'|'Over 0.7'|'Over 0.8'|'Over 0.9'|'Over 1'} filter Filter
     * @returns {this} this
     */
    ltDebtEquity(filter) {
        if (! ltDebtEquityMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_ltdebteq_' + ltDebtEquityMap[filter])
        return this
    }

    /**
     * A measure of a company's financial leverage calculated by dividing its liabilities by stockholders' equity. It indicates what proportion of equity and debt the company is using to finance its assets.
     *
     * @param {'High (>0.5)'|'Low (<0.1)'|'Under 1'|'Under 0.9'|'Under 0.8'|'Under 0.7'|'Under 0.6'|'Under 0.5'|'Under 0.4'|'Under 0.3'|'Under 0.2'|'Under 0.1'|'Over 0.1'|'Over 0.2'|'Over 0.3'|'Over 0.4'|'Over 0.5'|'Over 0.6'|'Over 0.7'|'Over 0.8'|'Over 0.9'|'Over 1'} filter Filter
     * @returns {this} this
     */
    debtEquity(filter) {
        if (! debtEquityMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_debteq_' + debtEquityMap[filter])
        return this
    }

    /**
     * A company's total sales revenue minus its cost of goods sold, divided by the total sales revenue, expressed as a percentage. The gross margin represents the percent of total sales revenue that the company retains after incurring the direct costs associated with producing the goods and services sold by a company. The higher the percentage, the more the company retains on each dollar of sales to service its other costs and obligations.
     *
     * @param {'Positive (>0%)'|'Negative (<0%)'|'High (>50%)'|'Under 90%'|'Under 80%'|'Under 70%'|'Under 60%'|'Under 50%'|'Under 45%'|'Under 40%'|'Under 35%'|'Under 30%'|'Under 25%'|'Under 20%'|'Under 15%'|'Under 10%'|'Under 5%'|'Under 0%'|'Under -10%'|'Under -20%'|'Under -30%'|'Under -50%'|'Under -70%'|'Under -100%'|'Over 0%'|'Over 5%'|'Over 10%'|'Over 15%'|'Over 20%'|'Over 25%'|'Over 30%'|'Over 35%'|'Over 40%'|'Over 45%'|'Over 50%'|'Over 60%'|'Over 70%'|'Over 80%'|'Over 90%'} filter Filter
     * @returns {this} this
     */
    grossMargin(filter) {
        if (! grossMarginMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_grossmargin_' + grossMarginMap[filter])
        return this
    }

    /**
     * Operating margin is a measurement of what proportion of a company's revenue is left over after paying for variable costs of production such as wages, raw materials, etc. A healthy operating margin is required for a company to be able to pay for its fixed costs, such as interest on debt. Calculated as Operating Income / Net Sales.
     *
     * @param {'Positive (>0%)'|'Negative (<0%)'|'Very Negative (<-20%)'|'High (>25%)'|'Under 90%'|'Under 80%'|'Under 70%'|'Under 60%'|'Under 50%'|'Under 45%'|'Under 40%'|'Under 35%'|'Under 30%'|'Under 25%'|'Under 20%'|'Under 15%'|'Under 10%'|'Under 5%'|'Under 0%'|'Under -10%'|'Under -20%'|'Under -30%'|'Under -50%'|'Under -70%'|'Under -100%'|'Over 0%'|'Over 5%'|'Over 10%'|'Over 15%'|'Over 20%'|'Over 25%'|'Over 30%'|'Over 35%'|'Over 40%'|'Over 45%'|'Over 50%'|'Over 60%'|'Over 70%'|'Over 80%'|'Over 90%'} filter Filter
     * @returns {this} this
     */
    operatingMargin(filter) {
        if (! operatingMarginMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_opermargin_' + operatingMarginMap[filter])
        return this
    }

    /**
     * A ratio of profitability calculated as net income divided by revenues, or net profits divided by sales. It measures how much out of every dollar of sales a company actually keeps in earnings.
     *
     * @param {'Positive (>0%)'|'Negative (<0%)'|'Very Negative (<-20%)'|'High (>20%)'|'Under 90%'|'Under 80%'|'Under 70%'|'Under 60%'|'Under 50%'|'Under 45%'|'Under 40%'|'Under 35%'|'Under 30%'|'Under 25%'|'Under 20%'|'Under 15%'|'Under 10%'|'Under 5%'|'Under 0%'|'Under -10%'|'Under -20%'|'Under -30%'|'Under -50%'|'Under -70%'|'Under -100%'|'Over 0%'|'Over 5%'|'Over 10%'|'Over 15%'|'Over 20%'|'Over 25%'|'Over 30%'|'Over 35%'|'Over 40%'|'Over 45%'|'Over 50%'|'Over 60%'|'Over 70%'|'Over 80%'|'Over 90%'} filter Filter
     * @returns {this} this
     */
    netProfitMargin(filter) {
        if (! netProfitMarginMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_netmargin_' + netProfitMarginMap[filter])
        return this
    }

    /**
     * The percentage of earnings paid to shareholders in dividends.
     *
     * @param {'None (0%)'|'Positive (>0%)'|'Low (<20%)'|'High (>50%)'|'Over 0%'|'Over 10%'|'Over 20%'|'Over 30%'|'Over 40%'|'Over 50%'|'Over 60%'|'Over 70%'|'Over 80%'|'Over 90%'|'Over 100%'|'Under 10%'|'Under 20%'|'Under 30%'|'Under 40%'|'Under 50%'|'Under 60%'|'Under 70%'|'Under 80%'|'Under 90%'|'Under 100%'} filter Filter
     * @returns {this} this
     */
    payoutRatio(filter) {
        if (! payoutRatioMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('fa_payoutratio_' + payoutRatioMap[filter])
        return this
    }

    /**
     * Level to which a company is owned by its own management.
     *
     * @param {'Low (<5%)'|'High (>30%)'|'Very High (>50%)'|'Over 10%'|'Over 20%'|'Over 30%'|'Over 40%'|'Over 50%'|'Over 60%'|'Over 70%'|'Over 80%'|'Over 90%'} filter Filter
     * @returns {this} this
     */
    insiderOwnership(filter) {
        if (! insiderOwnershipMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('sh_insiderown_' + insiderOwnershipMap[filter])
        return this
    }

    /**
     * A company's shares being purchased or sold by its own management. Value represents 6-month percentual change in total insider ownership.
     *
     * @param {'Very Negative (<20%)'|'Negative (<0%)'|'Positive (>0%)'|'Very Positive (>20%)'|'Under -90%'|'Under -80%'|'Under -70%'|'Under -60%'|'Under -50%'|'Under -45%'|'Under -40%'|'Under -35%'|'Under -30%'|'Under -25%'|'Under -20%'|'Under -15%'|'Under -10%'|'Under -5%'|'Over +5%'|'Over +10%'|'Over +15%'|'Over +20%'|'Over +25%'|'Over +30%'|'Over +35%'|'Over +40%'|'Over +45%'|'Over +50%'|'Over +60%'|'Over +70%'|'Over +80%'|'Over +90%'} filter Filter
     * @returns {this} this
     */
    insiderTransactions(filter) {
        if (! insiderTransactionsMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('sh_insidertrans_' + insiderTransactionsMap[filter])
        return this
    }

    /**
     * Level to which a company is owned by financial institutions.
     *
     * @param {'Low (<5%)'|'High (>90%)'|'Under 90%'|'Under 80%'|'Under 70%'|'Under 60%'|'Under 50%'|'Under 40%'|'Under 30%'|'Under 20%'|'Under 10%'|'Over 10%'|'Over 20%'|'Over 30%'|'Over 40%'|'Over 50%'|'Over 60%'|'Over 70%'|'Over 80%'|'Over 90%'} filter Filter
     * @returns {this} this
     */
    institutionalOwnership(filter) {
        if (! institutionalOwnershipMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('sh_instown_' + institutionalOwnershipMap[filter])
        return this
    }

    /**
     * A company's shares being purchased or sold by financial institutions. Value represents 3-month change in institutional ownership.
     *
     * @param {'Very Negative (<20%)'|'Negative (<0%)'|'Positive (>0%)'|'Very Positive (>20%)'|'Under -50%'|'Under -45%'|'Under -40%'|'Under -35%'|'Under -30%'|'Under -25%'|'Under -20%'|'Under -15%'|'Under -10%'|'Under -5%'|'Over +5%'|'Over +10%'|'Over +15%'|'Over +20%'|'Over +25%'|'Over +30%'|'Over +35%'|'Over +40%'|'Over +45%'|'Over +50%'} filter Filter
     * @returns {this} this
     */
    institutionalTransactions(filter) {
        if (! institutionalTransactionsMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('sh_insttrans_' + institutionalTransactionsMap[filter])
        return this
    }

    /**
     * The amount of short-selling transactions of given stock.
     *
     * @param {'Low (<5%)'|'High (>20%)'|'Under 5%'|'Under 10%'|'Under 15%'|'Under 20%'|'Under 25%'|'Under 30%'|'Over 5%'|'Over 10%'|'Over 15%'|'Over 20%'|'Over 25%'|'Over 30%'} filter Filter
     * @returns {this} this
     */
    floatShort(filter) {
        if (! floatShortMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('sh_short_' + floatShortMap[filter])
        return this
    }

    /**
     * An outlook of a stock-market analyst on a stock.
     *
     * @param {'Strong Buy (1)'|'Buy or better'|'Buy'|'Hold or better'|'Hold'|'Hold or worse'|'Sell'|'Sell or worse'|'Strong Sell (5)'} filter Filter
     * @returns {this} this
     */
    analystRecom(filter) {
        if (! analystRecomMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('an_recom_' + analystRecomMap[filter])
        return this
    }

    /**
     * Stocks with options and/or available to sell short.
     *
     * @param {'Optionable'|'Shortable'|'Optionable and shortable'} filter Filter
     * @returns {this} this
     */
    optionShort(filter) {
        if (! optionShortMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('sh_opt_' + optionShortMap[filter])
        return this
    }

    /**
     * Date when company reports earnings
     *
     * @param {'Today'|'Today Before Market Open'|'Today After Market Close'|'Tomorrow'|'Tomorrow Before Market Open'|'Tomorrow After Market Close'|'Yesterday'|'Yesterday Before Market Open'|'Yesterday After Market Close'|'Next 5 Days'|'Previous 5 Days'|'This Week'|'Next Week'|'Previous Week'|'This Month'} filter Filter
     * @returns {this} this
     */
    earningsDate(filter) {
        if (! earningsDateMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('earningsdate_' + earningsDateMap[filter])
        return this
    }

    /**
     * Rate of return for a given stock.
     *
     * @param {'Today Up'|'Today Down'|'Today -15%'|'Today -10%'|'Today -5%'|'Today +5%'|'Today +10%'|'Today +15%'|'Week -30%'|'Week -20%'|'Week -10%'|'Week Down'|'Week Up'|'Week +10%'|'Week +20%'|'Week +30%'|'Month -50%'|'Month -30%'|'Month -20%'|'Month -10%'|'Month Down'|'Month Up'|'Month +10%'|'Month +20%'|'Month +30%'|'Month +50%'|'Quarter -50%'|'Quarter -30%'|'Quarter -20%'|'Quarter -10%'|'Quarter Down'|'Quarter Up'|'Quarter +10%'|'Quarter +20%'|'Quarter +30%'|'Quarter +50%'|'Half -75%'|'Half -50%'|'Half -30%'|'Half -20%'|'Half -10%'|'Half Down'|'Half Up'|'Half +10%'|'Half +20%'|'Half +30%'|'Half +50%'|'Half +100%'|'Year -75%'|'Year -50%'|'Year -30%'|'Year -20%'|'Year -10%'|'Year Down'|'Year Up'|'Year +10%'|'Year +20%'|'Year +30%'|'Year +50%'|'Year +100%'|'Year +200%'|'Year +300%'|'Year +500%'|'YTD -75%'|'YTD -50%'|'YTD -30%'|'YTD -20%'|'YTD -10%'|'YTD -5%'|'YTD Down'|'YTD Up'|'YTD +5%'|'YTD +10%'|'YTD +20%'|'YTD +30%'|'YTD +50%'|'YTD +100%'} filter Filter
     * @returns {this} this
     */
    performance(filter) {
        if (! performanceMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('ta_perf_' + performanceMap[filter])
        return this
    }

    /**
     * Rate of return for a given stock.
     *
     * @param {'Today Up'|'Today Down'|'Today -15%'|'Today -10%'|'Today -5%'|'Today +5%'|'Today +10%'|'Today +15%'|'Week -30%'|'Week -20%'|'Week -10%'|'Week Down'|'Week Up'|'Week +10%'|'Week +20%'|'Week +30%'|'Month -50%'|'Month -30%'|'Month -20%'|'Month -10%'|'Month Down'|'Month Up'|'Month +10%'|'Month +20%'|'Month +30%'|'Month +50%'|'Quarter -50%'|'Quarter -30%'|'Quarter -20%'|'Quarter -10%'|'Quarter Down'|'Quarter Up'|'Quarter +10%'|'Quarter +20%'|'Quarter +30%'|'Quarter +50%'|'Half -75%'|'Half -50%'|'Half -30%'|'Half -20%'|'Half -10%'|'Half Down'|'Half Up'|'Half +10%'|'Half +20%'|'Half +30%'|'Half +50%'|'Half +100%'|'Year -75%'|'Year -50%'|'Year -30%'|'Year -20%'|'Year -10%'|'Year Down'|'Year Up'|'Year +10%'|'Year +20%'|'Year +30%'|'Year +50%'|'Year +100%'|'Year +200%'|'Year +300%'|'Year +500%'|'YTD -75%'|'YTD -50%'|'YTD -30%'|'YTD -20%'|'YTD -10%'|'YTD -5%'|'YTD Down'|'YTD Up'|'YTD +5%'|'YTD +10%'|'YTD +20%'|'YTD +30%'|'YTD +50%'|'YTD +100%'} filter Filter
     * @returns {this} this
     */
    performance2(filter) {
        if (! performance2Map[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('ta_perf2_' + performance2Map[filter])
        return this
    }

    /**
     * A statistical measure of the dispersion of returns for a given stock. Represents average daily high/low trading range.
     *
     * @param {'Week - Over 3%'|'Week - Over 4%'|'Week - Over 5%'|'Week - Over 6%'|'Week - Over 7%'|'Week - Over 8%'|'Week - Over 9%'|'Week - Over 10%'|'Week - Over 12%'|'Week - Over 15%'|'Month - Over 2%'|'Month - Over 3%'|'Month - Over 4%'|'Month - Over 5%'|'Month - Over 6%'|'Month - Over 7%'|'Month - Over 8%'|'Month - Over 9%'|'Month - Over 10%'|'Month - Over 12%'|'Month - Over 15%'} filter Filter
     * @returns {this} this
     */
    volatility(filter) {
        if (! volatilityMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('ta_volatility_' + volatilityMap[filter])
        return this
    }

    /**
     * The Relative Strength Index (RSI) is a technical analysis oscillator showing price strength by comparing upward and downward close-to-close movements.
     *
     * @param {'Overbought (90)'|'Overbought (80)'|'Overbought (70)'|'Overbought (60)'|'Oversold (40)'|'Oversold (30)'|'Oversold (20)'|'Oversold (10)'|'Not Overbought (<60)'|'Not Overbought (<50)'|'Not Oversold (>50)'|'Not Oversold (>40)'} filter Filter
     * @returns {this} this
     */
    rsi14(filter) {
        if (! rsi14Map[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('ta_rsi_' + rsi14Map[filter])
        return this
    }

    /**
     * The difference between yesterday's closing price and today's opening price.
     *
     * @param {'Up'|'Up 0%'|'Up 1%'|'Up 2%'|'Up 3%'|'Up 4%'|'Up 5%'|'Up 6%'|'Up 7%'|'Up 8%'|'Up 9%'|'Up 10%'|'Up 15%'|'Up 20%'|'Down'|'Down 0%'|'Down 1%'|'Down 2%'|'Down 3%'|'Down 4%'|'Down 5%'|'Down 6%'|'Down 7%'|'Down 8%'|'Down 9%'|'Down 10%'|'Down 15%'|'Down 20%'} filter Filter
     * @returns {this} this
     */
    gap(filter) {
        if (! gapMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('ta_gap_' + gapMap[filter])
        return this
    }

    /**
     * 20-Day simple moving average of closing price is the mean of the previous 20 days' closing prices.
     *
     * @param {'Price below SMA20'|'Price 10% below SMA20'|'Price 20% below SMA20'|'Price 30% below SMA20'|'Price 40% below SMA20'|'Price 50% below SMA20'|'Price above SMA20'|'Price 10% above SMA20'|'Price 20% above SMA20'|'Price 30% above SMA20'|'Price 40% above SMA20'|'Price 50% above SMA20'|'Price crossed SMA20'|'Price crossed SMA20 above'|'Price crossed SMA20 below'|'SMA20 crossed SMA50'|'SMA20 crossed SMA50 above'|'SMA20 crossed SMA50 below'|'SMA20 crossed SMA200'|'SMA20 crossed SMA200 above'|'SMA20 crossed SMA200 below'|'SMA20 above SMA50'|'SMA20 below SMA50'|'SMA20 above SMA200'|'SMA20 below SMA200'} filter Filter
     * @returns {this} this
     */
    twentyDaySimpleMovingAverage(filter) {
        if (! twentyDaySimpleMovingAverageMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('ta_sma20_' + twentyDaySimpleMovingAverageMap[filter])
        return this
    }

    /**
     * 50-Day simple moving average of closing price is the mean of the previous 50 days' closing prices.
     *
     * @param {'Price below SMA50'|'Price 10% below SMA50'|'Price 20% below SMA50'|'Price 30% below SMA50'|'Price 40% below SMA50'|'Price 50% below SMA50'|'Price above SMA50'|'Price 10% above SMA50'|'Price 20% above SMA50'|'Price 30% above SMA50'|'Price 40% above SMA50'|'Price 50% above SMA50'|'Price crossed SMA50'|'Price crossed SMA50 above'|'Price crossed SMA50 below'|'SMA50 crossed SMA20'|'SMA50 crossed SMA20 above'|'SMA50 crossed SMA20 below'|'SMA50 crossed SMA200'|'SMA50 crossed SMA200 above'|'SMA50 crossed SMA200 below'|'SMA50 above SMA20'|'SMA50 below SMA20'|'SMA50 above SMA200'|'SMA50 below SMA200'} filter Filter
     * @returns {this} this
     */
    fiftyDaySimpleMovingAverage(filter) {
        if (! fiftyDaySimpleMovingAverageMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('ta_sma50_' + fiftyDaySimpleMovingAverageMap[filter])
        return this
    }

    /**
     * 200-Day simple moving average of closing price is the mean of the previous 200 days' closing prices.
     *
     * @param {'Price below SMA200'|'Price 10% below SMA200'|'Price 20% below SMA200'|'Price 30% below SMA200'|'Price 40% below SMA200'|'Price 50% below SMA200'|'Price 60% below SMA200'|'Price 70% below SMA200'|'Price 80% below SMA200'|'Price 90% below SMA200'|'Price above SMA200'|'Price 10% above SMA200'|'Price 20% above SMA200'|'Price 30% above SMA200'|'Price 40% above SMA200'|'Price 50% above SMA200'|'Price 60% above SMA200'|'Price 70% above SMA200'|'Price 80% above SMA200'|'Price 90% above SMA200'|'Price 100% above SMA200'|'Price crossed SMA200'|'Price crossed SMA200 above'|'Price crossed SMA200 below'|'SMA200 crossed SMA20'|'SMA200 crossed SMA20 above'|'SMA200 crossed SMA20 below'|'SMA200 crossed SMA50'|'SMA200 crossed SMA50 above'|'SMA200 crossed SMA50 below'|'SMA200 above SMA20'|'SMA200 below SMA20'|'SMA200 above SMA50'|'SMA200 below SMA50'} filter Filter
     * @returns {this} this
     */
    twoHundredDaySimpleMovingAverage(filter) {
        if (! twoHundredDaySimpleMovingAverageMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('ta_sma200_' + twoHundredDaySimpleMovingAverageMap[filter])
        return this
    }

    /**
     * The difference between previous's close price and today's last price.
     *
     * @param {'Up'|'Up 1%'|'Up 2%'|'Up 3%'|'Up 4%'|'Up 5%'|'Up 6%'|'Up 7%'|'Up 8%'|'Up 9%'|'Up 10%'|'Up 15%'|'Up 20%'|'Down'|'Down 1%'|'Down 2%'|'Down 3%'|'Down 4%'|'Down 5%'|'Down 6%'|'Down 7%'|'Down 8%'|'Down 9%'|'Down 10%'|'Down 15%'|'Down 20%'} filter Filter
     * @returns {this} this
     */
    change(filter) {
        if (! changeMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('ta_change_' + changeMap[filter])
        return this
    }

    /**
     * The difference between today's open price and today's last price.
     *
     * @param {'Up'|'Up 1%'|'Up 2%'|'Up 3%'|'Up 4%'|'Up 5%'|'Up 6%'|'Up 7%'|'Up 8%'|'Up 9%'|'Up 10%'|'Up 15%'|'Up 20%'|'Down'|'Down 1%'|'Down 2%'|'Down 3%'|'Down 4%'|'Down 5%'|'Down 6%'|'Down 7%'|'Down 8%'|'Down 9%'|'Down 10%'|'Down 15%'|'Down 20%'} filter Filter
     * @returns {this} this
     */
    changeFromOpen(filter) {
        if (! changeFromOpenMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('ta_changeopen_' + changeFromOpenMap[filter])
        return this
    }

    /**
     * Maximum/minimum of previous 20 days' highs/lows.
     *
     * @param {'New High'|'New Low'|'5% or more below High'|'10% or more below High'|'15% or more below High'|'20% or more below High'|'30% or more below High'|'40% or more below High'|'50% or more below High'|'0-3% below High'|'0-5% below High'|'0-10% below High'|'5% or more above Low'|'10% or more above Low'|'15% or more above Low'|'20% or more above Low'|'30% or more above Low'|'40% or more above Low'|'50% or more above Low'|'0-3% above Low'|'0-5% above Low'|'0-10% above Low'} filter Filter
     * @returns {this} this
     */
    twentyDayHighLow(filter) {
        if (! twentyDayHighLowMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('ta_highlow20d_' + twentyDayHighLowMap[filter])
        return this
    }

    /**
     * Maximum/minimum of previous 50 days' highs/lows.
     *
     * @param {'New High'|'New Low'|'5% or more below High'|'10% or more below High'|'15% or more below High'|'20% or more below High'|'30% or more below High'|'40% or more below High'|'50% or more below High'|'0-3% below High'|'0-5% below High'|'0-10% below High'|'5% or more above Low'|'10% or more above Low'|'15% or more above Low'|'20% or more above Low'|'30% or more above Low'|'40% or more above Low'|'50% or more above Low'|'0-3% above Low'|'0-5% above Low'|'0-10% above Low'} filter Filter
     * @returns {this} this
     */
    fiftyDayHighLow(filter) {
        if (! fiftyDayHighLowMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('ta_highlow50d_' + fiftyDayHighLowMap[filter])
        return this
    }

    /**
     * Maximum/minimum of previous 52 weeks' highs/lows.
     *
     * @param {'New High'|'New Low'|'5% or more below High'|'10% or more below High'|'15% or more below High'|'20% or more below High'|'30% or more below High'|'40% or more below High'|'50% or more below High'|'60% or more below High'|'70% or more below High'|'80% or more below High'|'90% or more below High'|'0-3% below High'|'0-5% below High'|'0-10% below High'|'5% or more above Low'|'10% or more above Low'|'15% or more above Low'|'20% or more above Low'|'30% or more above Low'|'40% or more above Low'|'50% or more above Low'|'60% or more above Low'|'70% or more above Low'|'80% or more above Low'|'90% or more above Low'|'100% or more above Low'|'120% or more above Low'|'150% or more above Low'|'200% or more above Low'|'300% or more above Low'|'500% or more above Low'|'0-3% above Low'|'0-5% above Low'|'0-10% above Low'} filter Filter
     * @returns {this} this
     */
    fiftyTwoWeekHighLow(filter) {
        if (! fiftyTwoWeekHighLowMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('ta_highlow52w_' + fiftyTwoWeekHighLowMap[filter])
        return this
    }

    /**
     * A chart pattern is a distinct formation on a stock chart that creates a trading signal, or a sign of future price movements. Chartists use these patterns to identify current trends and trend reversals and to trigger buy and sell signals.
     *
     * @param {'Horizontal S/R'|'Horizontal S/R (Strong)'|'TL Resistance'|'TL Resistance (Strong)'|'TL Support'|'TL Support (Strong)'|'Wedge Up'|'Wedge Up (Strong)'|'Wedge Down'|'Wedge Down (Strong)'|'Triangle Ascending'|'Triangle Ascending (Strong)'|'Triangle Descending'|'Triangle Descending (Strong)'|'Wedge'|'Wedge (Strong)'|'Channel Up'|'Channel Up (Strong)'|'Channel Down'|'Channel Down (Strong)'|'Channel'|'Channel (Strong)'|'Double Top'|'Double Bottom'|'Multiple Top'|'Multiple Bottom'|'Head & Shoulders'|'Head & Shoulders Inverse'} filter Filter
     * @returns {this} this
     */
    pattern(filter) {
        if (! patternMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('ta_pattern_' + patternMap[filter])
        return this
    }

    /**
     * Candlesticks are usually composed of the body (black or white), an upper and a lower shadow (wick). The wick illustrates the highest and lowest traded prices of a stock during the time interval represented. The body illustrates the opening and closing trades.
     *
     * @param {'Long Lower Shadow'|'Long Upper Shadow'|'Hammer'|'Inverted Hammer'|'Spinning Top White'|'Spinning Top Black'|'Doji'|'Dragonfly Doji'|'Gravestone Doji'|'Marubozu White'|'Marubozu Black'} filter Filter
     * @returns {this} this
     */
    candlestick(filter) {
        if (! candlestickMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('ta_candlestick_' + candlestickMap[filter])
        return this
    }

    /**
     * A measure of a stock’s price volatility relative to the market. An asset with a beta of 0 means that its price is not at all correlated with the market. A positive beta means that the asset generally follows the market. A negative beta shows that the asset inversely follows the market, decreases in value if the market goes up.
     *
     * @param {'Under 0'|'Under 0.5'|'Under 1'|'Under 1.5'|'Under 2'|'Over 0'|'Over 0.5'|'Over 1'|'Over 1.5'|'Over 2'|'Over 2.5'|'Over 3'|'Over 4'|'0 to 0.5'|'0 to 1'|'0.5 to 1'|'0.5 to 1.5'|'1 to 1.5'|'1 to 2'} filter Filter
     * @returns {this} this
     */
    beta(filter) {
        if (! betaMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('ta_beta_' + betaMap[filter])
        return this
    }

    /**
     * A measure of stock volatility. The Average True Range is an exponential moving average (14-days) of the True Ranges. The range of a day's trading is high−low, True Range extends it to yesterday's closing price if it was outside of today's range, True Range = max(high,closeprev) − min(low,closeprev)
     *
     * @param {'Over 0.25'|'Over 0.5'|'Over 0.75'|'Over 1'|'Over 1.5'|'Over 2'|'Over 2.5'|'Over 3'|'Over 3.5'|'Over 4'|'Over 4.5'|'Over 5'|'Under 0.25'|'Under 0.5'|'Under 0.75'|'Under 1'|'Under 1.5'|'Under 2'|'Under 2.5'|'Under 3'|'Under 3.5'|'Under 4'|'Under 4.5'|'Under 5'} filter Filter
     * @returns {this} this
     */
    averageTrueRange(filter) {
        if (! averageTrueRangeMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('ta_averagetruerange_' + averageTrueRangeMap[filter])
        return this
    }

    /**
     * The average number of shares traded in a security per day.
     *
     * @param {'Under 50K'|'Under 100K'|'Under 500K'|'Under 750K'|'Under 1M'|'Over 50K'|'Over 100K'|'Over 200K'|'Over 300K'|'Over 400K'|'Over 500K'|'Over 750K'|'Over 1M'|'Over 2M'|'100K to 500K'|'100K to 1M'|'500K to 1M'|'500K to 10M'} filter Filter
     * @returns {this} this
     */
    averageVolume(filter) {
        if (! averageVolumeMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('sh_avgvol_' + averageVolumeMap[filter])
        return this
    }

    /**
     * Ratio between current volume and 3-month average, intraday adjusted.
     *
     * @param {'Over 10'|'Over 5'|'Over 3'|'Over 2'|'Over 1.5'|'Over 1'|'Over 0.75'|'Over 0.5'|'Over 0.25'|'Under 2'|'Under 1.5'|'Under 1'|'Under 0.75'|'Under 0.5'|'Under 0.25'|'Under 0.1'} filter Filter
     * @returns {this} this
     */
    relativeVolume(filter) {
        if (! relativeVolumeMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('sh_relvol_' + relativeVolumeMap[filter])
        return this
    }

    /**
     * Number of shares traded today.
     *
     * @param {'Under 50K'|'Under 100K'|'Under 500K'|'Under 750K'|'Under 1M'|'Over 0'|'Over 50K'|'Over 100K'|'Over 200K'|'Over 300K'|'Over 400K'|'Over 500K'|'Over 750K'|'Over 1M'|'Over 2M'|'Over 5M'|'Over 10M'|'Over 20M'} filter Filter
     * @returns {this} this
     */
    currentVolume(filter) {
        if (! currentVolumeMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('sh_curvol_' + currentVolumeMap[filter])
        return this
    }

    /**
     * The current stock price.
     *
     * @param {'Under $1'|'Under $2'|'Under $3'|'Under $4'|'Under $5'|'Under $7'|'Under $10'|'Under $15'|'Under $20'|'Under $30'|'Under $40'|'Under $50'|'Over $1'|'Over $2'|'Over $3'|'Over $4'|'Over $5'|'Over $7'|'Over $10'|'Over $15'|'Over $20'|'Over $30'|'Over $40'|'Over $50'|'Over $60'|'Over $70'|'Over $80'|'Over $90'|'Over $100'|'$1 to $5'|'$1 to $10'|'$1 to $20'|'$5 to $10'|'$5 to $20'|'$5 to $50'|'$10 to $20'|'$10 to $50'|'$20 to $50'|'$50 to $100'} filter Filter
     * @returns {this} this
     */
    price(filter) {
        if (! priceMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('sh_price_' + priceMap[filter])
        return this
    }

    /**
     * Analysts' mean target price.
     *
     * @param {'50% Above Price'|'40% Above Price'|'30% Above Price'|'20% Above Price'|'10% Above Price'|'5% Above Price'|'Above Price'|'Below Price'|'5% Below Price'|'10% Below Price'|'20% Below Price'|'30% Below Price'|'40% Below Price'|'50% Below Price'} filter Filter
     * @returns {this} this
     */
    targetPrice(filter) {
        if (! targetPriceMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('targetprice_' + targetPriceMap[filter])
        return this
    }

    /**
     * Date when company had an IPO.
     *
     * @param {'Today'|'Yesterday'|'In the last week'|'In the last month'|'In the last quarter'|'In the last year'|'In the last 2 years'|'In the last 3 years'|'In the last 5 years'|'More than a year ago'|'More than 5 years ago'|'More than 10 years ago'|'More than 15 years ago'|'More than 20 years ago'|'More than 25 years ago'} filter Filter
     * @returns {this} this
     */
    ipoDate(filter) {
        if (! ipoDateMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('ipodate_' + ipoDateMap[filter])
        return this
    }

    /**
     * Shares outstanding represent the total number of shares issued by a corporation and held by its shareholders.
     *
     * @param {'Under 1M'|'Under 5M'|'Under 10M'|'Under 20M'|'Under 50M'|'Under 100M'|'Over 1M'|'Over 2M'|'Over 5M'|'Over 10M'|'Over 20M'|'Over 50M'|'Over 100M'|'Over 200M'|'Over 500M'|'Over 1000M'} filter Filter
     * @returns {this} this
     */
    sharesOutstanding(filter) {
        if (! sharesOutstandingMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('sh_outstanding_' + sharesOutstandingMap[filter])
        return this
    }

    /**
     * Float is the number of stock shares that are available for trading to the public. This doesn't include shares held by insiders.
     *
     * @param {'Under 1M'|'Under 5M'|'Under 10M'|'Under 20M'|'Under 50M'|'Under 100M'|'Over 1M'|'Over 2M'|'Over 5M'|'Over 10M'|'Over 20M'|'Over 50M'|'Over 100M'|'Over 200M'|'Over 500M'|'Over 1000M'} filter Filter
     * @returns {this} this
     */
    float(filter) {
        if (! floatMap[filter]) {
            throw Error('Unknown filter: ' + filter)
        }
        this._filters.push('sh_float_' + floatMap[filter])
        return this
    }

    /**
     * TA Signal
     *
     * @param {'Top Gainers'|'Top Losers'|'New High'|'New Low'|'Most Volatile'|'Most Active'|'Unusual Volume'|'Overbought'|'Oversold'|'Downgrades'|'Upgrades'|'Earnings Before'|'Earnings After'|'Recent Insider Buying'|'Recent Insider Selling'|'Major News'|'Horizontal S/R'|'TL Resistance'|'TL Support'|'Wedge Up'|'Wedge Down'|'Triangle Ascending'|'Triangle Descending'|'Wedge'|'Channel Up'|'Channel Down'|'Channel'|'Double Top'|'Double Bottom'|'Multiple Top'|'Multiple Bottom'|'Head & Shoulders'|'Head & Shoulders Inverse'} signal TA signal
     * @returns {this} this
     */
    signal(signal) {
        if (! signalsMap[signal]) {
            throw Error('Unknown signal: ' + signal)
        }
        this._signal = signalsMap[signal]
        return this
    }

    /**
     * Scan for stocks
     *
     * @returns {Promise<string[]>} List of stock tickers
     */
    async scan() {
        const params = { f: this._filters.join(','), s: this._signal }
        const res = await axios.get(this._url, { params })
        const $ = cheerio.load(res.data)
        return $(selector).map((i, el) => $(el).text().trim()).get()
    }
} // class

module.exports = FinVizScreener
