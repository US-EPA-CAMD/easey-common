"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyMetadata = void 0;
exports.propertyMetadata = {
    accountName: {
        fieldLabels: {
            label: "Account Name",
            value: "accountName",
        },
        description: "The name of the account in which allowances are held.",
        example: "Barry",
    },
    accountNumber: {
        fieldLabels: {
            label: "Account Number",
            value: "accountNumber",
        },
        description: "The unique identification number of an account.",
        example: "000003FACLTY",
    },
    accountType: {
        fieldLabels: {
            label: "Account Type",
            value: "accountType",
        },
        description: "Type of allowance account (Facility, General, etc.).",
        example: "Facility Account",
    },
    accountTypeCode: {
        fieldLabels: {
            label: "",
            value: "accountTypeCode",
        },
        description: "Code for the type of allowance account.",
        example: "RESERVE",
    },
    accountTypeDescription: {
        fieldLabels: {
            label: "",
            value: "accountTypeDescription",
        },
        description: "Full description for the type of allowance account.",
        example: "EPA Reserve Account",
    },
    accountTypeGroupCode: {
        fieldLabels: {
            label: "",
            value: "accountTypeGroupCode",
        },
        description: "Code for the group to which the allowance account belongs.",
        example: "RESERVE",
    },
    accountTypeGroupDescription: {
        fieldLabels: {
            label: "",
            value: "accountTypeGroupDescription",
        },
        description: "Full description for the group to which the allowance account belongs.",
        example: "Reserve",
    },
    actualEmissionsRate: {
        fieldLabels: {
            label: "Actual Emissions Rate (lb/mmBtu)",
            value: "actualEmissionsRate",
        },
        description: "For ARP NOx, the actual rate at which a pollutant was emitted during a given time period for a single unit. (lb/mmBtu)",
        example: 0.5,
    },
    allocated: {
        fieldLabels: {
            label: "Compliance Year Allowances Allocated",
            value: "allocated",
        },
        description: "The amount of allowances allocated for the calendar year.",
        example: 136,
    },
    allowanceUIFilter: {
        fieldLabels: {
            label: "",
            value: "allowanceUIFilter",
        },
        description: "Indicator of whether or not the program should show up in the CAMPD Custom Data Download Tool UI Program filter for allowance data types.",
        example: true,
    },
    annualIndicator: {
        fieldLabels: {
            label: "",
            value: "annualIndicator",
        },
        description: "Indicator of whether or not the program is an annual program.",
        example: true,
    },
    associatedStacks: {
        fieldLabels: {
            label: "Associated Stacks",
            value: "associatedStacks",
        },
        description: "Stacks associated with the unit.",
        example: "CS001",
    },
    avgPlanActual: {
        fieldLabels: {
            label: "Averaging Plan Actual Rate (lb/mmBtu)",
            value: "avgPlanActual",
        },
        description: "For ARP NOx, the average actual rate at which a pollutant was emitted during a given time period for the group of units in the averaging plan. (lb/mmBtu)",
        example: 0.55,
    },
    avgPlanId: {
        fieldLabels: {
            label: "Averaging Plan ID",
            value: "avgPlanId",
        },
        description: "For ARP NOx, the unique identification number that associates a group of units with a single averaging plan.",
        example: 492,
    },
    bankedHeld: {
        fieldLabels: {
            label: "Banked Allowances",
            value: "bankedHeld",
        },
        description: "The amount of allowances of vintage years up to but not including the current compliance year held in a compliance account. (This is for NBP, OTC)",
        example: 0,
    },
    beginDate: {
        fieldLabels: {
            label: "",
            value: "beginDate",
        },
        description: "Begin date for a given period of a unit's emissions.",
        example: "2019-01-01",
    },
    buyAccountName: {
        fieldLabels: {
            label: "Account Name (Transferee)",
            value: "buyAccountName",
        },
        description: "The name of the account receiving allowances in an allowance transaction.",
        example: "Darby Electric Generating Station",
    },
    buyAccountNumber: {
        fieldLabels: {
            label: "Account Number (Transferee)",
            value: "buyAccountNumber",
        },
        description: "The number of the account receiving allowances in an allowance transaction.",
        example: "055247FACLTY",
    },
    buyAccountType: {
        fieldLabels: {
            label: "Account Type (Transferee)",
            value: "buyAccountType",
        },
        description: `Type of buyer's allowance account (Facility, General, etc.).`,
        example: "Facility Account",
    },
    buyEpaRegion: {
        fieldLabels: {
            label: "EPA Region (Transferee)",
            value: "buyEpaRegion",
        },
        description: "For facility and unit accounts, the EPA Region of the account receiving allowances in an allowance transaction.",
        example: 5,
    },
    buyFacilityId: {
        fieldLabels: {
            label: "Facility ID (Transferee)",
            value: "buyFacilityId",
        },
        description: "For facility and unit accounts, the Facility ID of the account receiving allowances in an allowance transaction.",
        example: 55247,
    },
    buyFacilityName: {
        fieldLabels: {
            label: "Facility Name (Transferee)",
            value: "buyFacilityName",
        },
        description: "For facility and unit accounts, the facility name of the account receiving allowances in an allowance transaction.",
        example: "Darby Electric Generating Station",
    },
    buyOwner: {
        fieldLabels: {
            label: "Owner (Transferee)",
            value: "buyOwner",
        },
        description: "The owner of the account receiving allowances in an allowance transaction.",
        example: "AEP Generation Resources, Inc.",
    },
    buySourceCategory: {
        fieldLabels: {
            label: "Source Category (Transferee)",
            value: "buySourceCategory",
        },
        description: "For unit accounts, the source category of the account receiving allowances in an allowance transaction.",
        example: "Electric Utility",
    },
    buyState: {
        fieldLabels: {
            label: "State (Transferee)",
            value: "buyState",
        },
        description: "For facility and unit accounts, the state of the account receiving allowances in an allowance transaction.",
        example: "OH",
    },
    carriedOver: {
        fieldLabels: {
            label: "Allowances Carried Over",
            value: "carriedOver",
        },
        description: "The amount of allowances remaining in the account following compliance.",
        example: 0,
    },
    co2Mass: {
        fieldLabels: {
            label: "CO2 Mass (short tons)",
            value: "co2Mass",
        },
        description: "CO2 mass emissions (short tons)",
        example: 150.8,
    },
    co2MassMeasureFlg: {
        fieldLabels: {
            label: "CO2 Mass Measure Indicator",
            value: "co2MassMeasureFlg",
        },
        description: "Describes how the CO2 Mass values were determined. ",
        example: "Measured",
    },
    co2Rate: {
        fieldLabels: {
            label: "CO2 Rate (short tons/mmBtu)",
            value: "co2Rate",
        },
        description: "Average CO2 hourly emissions rate (short tons/mmBtu)",
        example: 0.103,
    },
    co2RateMeasureFlg: {
        fieldLabels: {
            label: "CO2 Rate Measure Indicator ",
            value: "co2RateMeasureFlg",
        },
        description: "Describes how the CO2 Rate values were determined. ",
        example: "Calculated",
    },
    commercialOperationDate: {
        fieldLabels: {
            label: "Commercial Operation Date",
            value: "commercialOperationDate",
        },
        description: "The date a unit began, or will begin to generate electricity for sale, including the sale of test generation. It is the first date that a unit serves a generator and produces electricity when connected to the grid, even if the owners are not compensated for that electricity.",
        example: "1977-04-01",
    },
    complianceApproach: {
        fieldLabels: {
            label: "Compliance Approach",
            value: "complianceApproach",
        },
        description: "For ARP NOx, approach used to meet compliance requirements (averaging plan, standard limit, or alternative limit).",
        example: "Averaging Plan",
    },
    complianceUIFilter: {
        fieldLabels: {
            label: "",
            value: "complianceUIFilter",
        },
        description: "Indicator of whether or not the program should show up in the CAMPD Custom Data Download Tool UI Program filter for compliance data types.",
        example: false,
    },
    complianceYearEmissions: {
        fieldLabels: {
            label: "Emissions (short tons)",
            value: "complianceYearEmissions",
        },
        description: "The total amount of pollutant in short tons emitted by the source in a control period.",
        example: 132,
    },
    compParameterCode: {
        fieldLabels: {
            label: "",
            value: "compParameterCode",
        },
        description: "Code for pollutant regulated by program.",
        example: "NOX",
    },
    controlCode: {
        fieldLabels: {
            label: "",
            value: "controlCode",
        },
        description: "Code for the method or equipment used by the combustion unit to minimize emissions for the particular pollutant.",
        example: "B",
    },
    controlDescription: {
        fieldLabels: {
            label: "",
            value: "controlDescription",
        },
        description: "Full description of method or equipment used by the combustion unit to minimize emissions for the particular pollutant.",
        example: "Baghouse",
    },
    controlEquipParamCode: {
        fieldLabels: {
            label: "",
            value: "controlEquipParamCode",
        },
        description: "Code for the pollutant minimized by the respective control equipment or method.",
        example: "PART",
    },
    controlEquipParamDescription: {
        fieldLabels: {
            label: "",
            value: "controlEquipParamDescription",
        },
        description: "Full description for the pollutant minimized by the respective control equipment or method.",
        example: "Particulates (Opacity)",
    },
    controlTechnologies: {
        fieldLabels: {
            label: "",
            value: "controlTechnologies",
        },
        description: "Method or equipment used by the combusion unit to minimize Hg, NOx, PM, or SO2 emissions.",
        example: "Baghouse",
    },
    countOpTime: {
        fieldLabels: {
            label: "Operating Time Count",
            value: "countOpTime",
        },
        description: "Number of hours during which the unit operated for this time interval",
        example: 1797,
    },
    county: {
        fieldLabels: {
            label: "County",
            value: "county",
        },
        description: "The county within a state in which a unit is operating.",
        example: "Sherburne County",
    },
    countyCode: {
        fieldLabels: {
            label: "County Code",
            value: "countyCode",
        },
        description: "The numerical code identifying a specific county in a single state.",
        example: "MN141",
    },
    currentDeductions: {
        fieldLabels: {
            label: "Current Deductions",
            value: "currentDeductions",
        },
        description: "The amount of allowances with the current vintage year deducted at compliance. (This is for NBP, OTC)",
        example: 132,
    },
    currentHeld: {
        fieldLabels: {
            label: "Current Held",
            value: "currentHeld",
        },
        description: "The amount of current vintage year allowances held in a compliance account at compliance. (This is for NBP, OTC)",
        example: 132,
    },
    date: {
        fieldLabels: {
            label: "Date",
            value: "date",
        },
        description: "Date on which activity occurred.",
        example: "2019-01-01",
    },
    deductOneToOne: {
        fieldLabels: {
            label: "Deduction 1 to 1",
            value: "deductOneToOne",
        },
        description: "Banked allowances with a 1 to 1 ratio. (This is for OTC, NBP)",
        example: 0,
    },
    deductTwoToOne: {
        fieldLabels: {
            label: "Deduction 2 to 1",
            value: "deductTwoToOne",
        },
        description: "Banked allowances with a 2 to 1 ratio. (This is for OTC, NBP)",
        example: 0,
    },
    emissionsLimitDisplay: {
        fieldLabels: {
            label: "Emissions Limit (lb/mmBtu)",
            value: "emissionsLimitDisplay",
        },
        description: "For ARP NOx, the applicable emissions limit based on compliance plan. May either be unit-specific or part of an averaging plan. (lb/mmBtu)",
        example: 0.55,
    },
    emissionsUIFilter: {
        fieldLabels: {
            label: "",
            value: "emissionsUIFilter",
        },
        description: "Indicator of whether or not the program should show up in the CAMPD Custom Data Download Tool UI Program filter for emissions data types.",
        example: true,
    },
    endBlock: {
        fieldLabels: {
            label: "Serial Number End",
            value: "endBlock",
        },
        description: "The ending serial number of an allowance block.",
        example: 276987,
    },
    endDate: {
        fieldLabels: {
            label: "",
            value: "endDate",
        },
        description: "End date for a given period of a unit's emissions.",
        example: "2019-01-31",
    },
    epaRegion: {
        fieldLabels: {
            label: "EPA Region",
            value: "epaRegion",
        },
        description: "An EPA Region is a group of U.S. states. EPA Regions are numbered from 1 to 10 and each state belongs to one and only one EPA Region.",
        example: 5,
    },
    excessEmissions: {
        fieldLabels: {
            label: "Excess Emissions (short tons)",
            value: "excessEmissions",
        },
        description: "The amount of pollutant in short tons emitted in excess of the number of allowances held.",
        example: 0,
    },
    facilityId: {
        fieldLabels: {
            label: "Facility ID",
            value: "facilityId",
        },
        description: `The Facility ID code assigned by the Department of Energy's Energy Information Administration. The Energy Information Administration Plant ID code is also referred to as the "ORIS code", "ORISPL code", "Facility ID", or "Facility code", among other names. If a Plant ID code has not been assigned by the Department of Energy's Energy Information Administration, then plant code means a code beginning with "88" assigned by the EPA's Clean Air Markets Division for electronic reporting.`,
        example: 3,
    },
    facilityName: {
        fieldLabels: {
            label: "Facility Name",
            value: "facilityName",
        },
        description: "The name given by the owners and operators to a facility",
        example: "Barry",
    },
    fipsCode: {
        fieldLabels: {
            label: "FIPS Code",
            value: "fipsCode",
        },
        description: "The Federal Information Processing Standards (FIPS) Code of the facility, issued by the National Institute of Standards and Technology, which ensures uniform identification of geographic entities throughout all federal agencies.",
        example: 141,
    },
    fuelGroupCode: {
        fieldLabels: {
            label: "",
            value: "fuelGroupCode",
        },
        description: "Code for the fuel group for the type of fuel combusted by the unit.",
        example: "COAL",
    },
    fuelGroupDescription: {
        fieldLabels: {
            label: "",
            value: "fuelGroupDescription",
        },
        description: "Full description for the fuel group for the type of fuel combusted by the unit.",
        example: "All Coal",
    },
    fuelTypeCode: {
        fieldLabels: {
            label: "",
            value: "fuelTypeCode",
        },
        description: "Code for the type of fuel combusted by the unit.",
        example: "C",
    },
    fuelTypeDescription: {
        fieldLabels: {
            label: "",
            value: "fuelTypeDescription",
        },
        description: "Full description for the type of fuel combusted by the unit.",
        example: "Coal",
    },
    generatorId: {
        fieldLabels: {
            label: "Generator ID",
            value: "generatorId",
        },
        description: "One or more unique identifiers for generators at a facility associated with the unit.",
        example: 1,
    },
    grossLoad: {
        fieldLabels: {
            label: "Gross Load (MWh)",
            value: "grossLoad",
        },
        description: "Electrical generation in MW produced by combusting a given heat input of fuel.",
        example: 900773,
    },
    grossLoadHourly: {
        fieldLabels: {
            label: "Gross Load (MW)",
            value: "grossLoad",
        },
        description: "Electrical generation in MW produced by combusting a given heat input of fuel.",
        example: 146,
    },
    heatInput: {
        fieldLabels: {
            label: "Heat Input (mmBtu)",
            value: "heatInput",
        },
        description: "Quantity of heat in mmBtu calculated by multiplying the quantity of fuel by the fuels heat content.",
        example: 1470.2,
    },
    hgControlInfo: {
        fieldLabels: {
            label: "Hg Controls",
            value: "hgControlInfo",
        },
        description: "Method or equipment used by the combustion unit to minimize Hg emissions.",
        example: "Catalyst (gold, palladium, or other) used to oxidize mercury",
    },
    hour: {
        fieldLabels: {
            label: "Hour",
            value: "hour",
        },
        description: "Hour in which activity occurred, recorded using local, standard time.",
        example: 23,
    },
    inCompliance: {
        fieldLabels: {
            label: "In Compliance?",
            value: "inCompliance",
        },
        description: "A facility is in compliance if, at the end of the compliance period, the facility owns enough allowances to cover the amount of pollutant emitted (or for ARP NOx, the actual emissions rate of the pollutant was below the emissions limit).",
        example: "YES",
    },
    latitude: {
        fieldLabels: {
            label: "Latitude",
            value: "latitude",
        },
        description: "Represents the physical latitude of the facility.",
        example: 45.3792,
    },
    longitude: {
        fieldLabels: {
            label: "Longitude",
            value: "longitude",
        },
        description: "Represents the physical longitude of the facility.",
        example: -93.8958,
    },
    maxHourlyHIRate: {
        fieldLabels: {
            label: "Max Hourly HI Rate (mmBtu/hr)",
            value: "maxHourlyHIRate",
        },
        description: "The design heat input capacity (mmBtu/hr) for the unit or the highest hourly heat input rate observed in the past five years, whichever is greater.",
        example: 7969.2,
    },
    month: {
        fieldLabels: {
            label: "Month",
            value: "month",
        },
        description: "Month on which activity occurred.",
        example: 12,
    },
    nameplateCapacity: {
        fieldLabels: {
            label: "Nameplate Capacity (MWe)",
            value: "nameplateCapacity",
        },
        description: "The maximum electrical generating output (in MWe, rounded to the nearest tenth) that the generator is capable of producing on a steady state basis and during continuous operation (when not restricted by seasonal or other deratings).  This value is usually indicated on a nameplate physically attached to the generator.",
        example: 660,
    },
    nercRegion: {
        fieldLabels: {
            label: "NERC Region",
            value: "nercRegion",
        },
        description: "The North American Electric Reliability Corporation region in which the facility is located.",
        example: "Mid-Continent Area Power Pool",
    },
    noxControlInfo: {
        fieldLabels: {
            label: "NOx Controls",
            value: "noxControlInfo",
        },
        description: "Method or equipment used by the combustion unit to minimize NOx emissions.",
        example: "Selective Catalytic Reduction, Low NOx Burner Technology w/ Separated OFA",
    },
    noxMass: {
        fieldLabels: {
            label: "NOx Mass (short tons)",
            value: "noxMass",
        },
        description: "NOx mass emissions (short tons)",
        example: 367.9,
    },
    noxMassHourly: {
        fieldLabels: {
            label: "NOx Mass (lbs)",
            value: "noxMass",
        },
        description: "NOx mass emissions (lbs)",
        example: 552.8,
    },
    noxMassMeasureFlg: {
        fieldLabels: {
            label: "NOx Mass Measure Indicator",
            value: "noxMassMeasureFlg",
        },
        description: "Describes how the NOx Mass values were determined. ",
        example: "Measured and Substitute",
    },
    noxPhase: {
        fieldLabels: {
            label: "NOx Phase",
            value: "noxPhase",
        },
        description: "The classification of an ARP unit that is subject to an ARP NOx emission rate limit (40 CFR Part 76). The unit is first classified by ARP Phase (Phase 1 or Phase 2) and then the unit (boiler) type is used to determine whether the unit is a Group 1 or Group 2 boiler.  This ARP Phase/Group classification then determines the standard NOx emission rate applicable to the unit.  This information is then used in determining ARP NOx compliance, depending on the compliance approach (standard NOx limit or averaging plan) selected for the unit.",
        example: "Phase 1 Group 1",
    },
    noxRate: {
        fieldLabels: {
            label: "NOx Rate (lbs/mmBtu)",
            value: "noxRate",
        },
        description: "The average rate of NOx emissions (lbs/mmBtu)",
        example: 0.376,
    },
    noxRateMeasureFlg: {
        fieldLabels: {
            label: "NOx Rate Measure Indicator",
            value: "noxRateMeasureFlg",
        },
        description: "Describes how the NOx Rate values were determined. ",
        example: "Measured and Substitute",
    },
    operatingStatus: {
        fieldLabels: {
            label: "Operating Status",
            value: "operatingStatus",
        },
        description: "An indication of the condition of a unit relevant to the year (planned, operating, shutdown, etc.).",
        example: "Operating",
    },
    operatingHoursOnly: {
        fieldLabels: {
            label: "",
            value: "operatingHoursOnly",
        },
        description: "Indicator of whether or not a request should return only data for hours where a unit operated.",
        example: true,
    },
    opTime: {
        fieldLabels: {
            label: "Operating Time",
            value: "opTime",
        },
        description: "Any part of an hour in which a unit combusts any fuel.",
        example: 0.95,
    },
    otherDeductions: {
        fieldLabels: {
            label: "Other Deductions",
            value: "otherDeductions",
        },
        description: "The sum of other deductions that may have occurred for the account, including Underutilization, Phase I Extension, Projected Emissions Deduction (for Phase I reports), State Cap Deductions, Deduction of Loaned Allowances, July Confirmation Deduction, and Substitution Control by Contract Deduction.",
        example: 0,
    },
    ownerOperator: {
        fieldLabels: {
            label: "",
            value: "ownerOperator",
        },
        description: "The name of any company that owns an allowance account or an affected unit.The name of any company that operates an affected unit.",
        example: "Alabama Power Company",
    },
    ownerOperatorInfo: {
        fieldLabels: {
            label: "Owner/Operator",
            value: "ownerOperator",
        },
        description: "The name of any company that owns an allowance account or an affected unit.The name of any company that operates an affected unit.",
        example: "Alabama Power Company (Operator), Alabama Power Company (Owner)",
    },
    ownId: {
        fieldLabels: {
            label: "",
            value: "ownId",
        },
        description: "Unique ID for owner/operator.",
        example: 52226,
    },
    ownType: {
        fieldLabels: {
            label: "",
            value: "ownType",
        },
        description: "Owner/Operator type. Either Owner, Operator, or Both.",
        example: "OPR",
    },
    ozoneIndicator: {
        fieldLabels: {
            label: "",
            value: "ozoneIndicator",
        },
        description: "Indicator of whether or not the program is an ozone program.",
        example: false,
    },
    page: {
        fieldLabels: {
            label: "",
            value: "page",
        },
        description: "Page number of data being requested.",
        example: 1,
    },
    perPage: {
        fieldLabels: {
            label: "",
            value: "perPage",
        },
        description: "Number of results per page.",
        example: 100,
    },
    pmControlInfo: {
        fieldLabels: {
            label: "PM Controls",
            value: "pmControlInfo",
        },
        description: "Method or equipment used by the combustion unit to minimize PM emissions.",
        example: "Electrostatic Precipitator",
    },
    primaryFuelInfo: {
        fieldLabels: {
            label: "Primary Fuel Type",
            value: "primaryFuelInfo",
        },
        description: "The primary type of fuel combusted by the unit.",
        example: "Coal",
    },
    programCode: {
        fieldLabels: {
            label: "",
            value: "programCode",
        },
        description: "Code for statutory or regulatory based options for tracking and reducing air pollution emissions.",
        example: "CAIRNOX",
    },
    programCodeInfo: {
        fieldLabels: {
            label: "Program Code",
            value: "programCodeInfo",
        },
        description: "Statutory or regulatory based options for tracking and reducing air pollution emissions.",
        example: "ARP,CSNOX,CSSO2G2,MATS",
    },
    programDescription: {
        fieldLabels: {
            label: "",
            value: "programDescription",
        },
        description: "Full description for statutory or regulatory based options for tracking and reducing air pollution emissions.",
        example: "CAIR NOx Annual Program",
    },
    programGroupCode: {
        fieldLabels: {
            label: "",
            value: "programGroupCode",
        },
        description: "Code for the group to which the program belongs.",
        example: "CAIR",
    },
    programGroupDescription: {
        fieldLabels: {
            label: "",
            value: "programGroupDescription",
        },
        description: "Full description for the group to which the program belongs.",
        example: "Clean Air Interstate Rule",
    },
    quarter: {
        fieldLabels: {
            label: "Quarter",
            value: "quarter",
        },
        description: "Calendar quarter in which activity occurred.",
        example: 4,
    },
    reportingFrequency: {
        fieldLabels: {
            label: "Reporting Frequency",
            value: "reportingFrequency",
        },
        description: "Indicates whether a unit reports annual or only ozone season data on a quarterly basis.",
        example: "Q",
    },
    retiredIndicator: {
        fieldLabels: {
            label: "",
            value: "retiredIndicator",
        },
        description: "Indicator of whether or not the program is retired.",
        example: true,
    },
    secondaryFuelInfo: {
        fieldLabels: {
            label: "Secondary Fuel Type",
            value: "secondaryFuelInfo",
        },
        description: "The secondary type of fuel(s) combusted by the unit.",
        example: "Diesel Oil",
    },
    sellAccountName: {
        fieldLabels: {
            label: "Account Name (Transferor)",
            value: "sellAccountName",
        },
        description: "The name of the account transferring allowances in an allowance transaction.",
        example: "Cardinal",
    },
    sellAccountNumber: {
        fieldLabels: {
            label: "Account Number (Transferor)",
            value: "sellAccountNumber",
        },
        description: "The number of the account transfering allowances in an allowance transaction.",
        example: "002828FACLTY",
    },
    sellAccountType: {
        fieldLabels: {
            label: "Account Type (Transferor)",
            value: "sellAccountType",
        },
        description: `Type of seller's allowance account (Facility, General, etc.).`,
        example: "Facility Account",
    },
    sellEpaRegion: {
        fieldLabels: {
            label: "EPA Region (Transferor)",
            value: "sellEpaRegion",
        },
        description: "For facility and unit accounts, the EPA Region of the account transferring allowances in an allowance transaction.",
        example: 5,
    },
    sellFacilityId: {
        fieldLabels: {
            label: "Facility ID (Transferor)",
            value: "sellFacilityId",
        },
        description: "For facility and unit accounts, the Facility ID of the account transferring allowances in an allowance transaction.",
        example: 2828,
    },
    sellFacilityName: {
        fieldLabels: {
            label: "Facility Name (Transferor)",
            value: "sellFacilityName",
        },
        description: "For facility and unit accounts, the facility name of the account transferring allowances in an allowance transaction.",
        example: "Cardinal",
    },
    sellOwner: {
        fieldLabels: {
            label: "Owner (Transferor)",
            value: "sellOwner",
        },
        description: "The owner of the account transferring allowances in an allowance transaction.",
        example: "AEP Generation Resources, Inc., Buckeye Power, Inc.",
    },
    sellSourceCategory: {
        fieldLabels: {
            label: "Source Category (Transferor)",
            value: "sellSourceCategory",
        },
        description: "For unit accounts, the source category of the account transferring allowances in an allowance transaction. ",
        example: "Electric Utility",
    },
    sellState: {
        fieldLabels: {
            label: "State (Transferor)",
            value: "sellState",
        },
        description: "For facility and unit accounts, the state of the account transferring allowances in an allowance transaction.",
        example: "OH",
    },
    so2ControlInfo: {
        fieldLabels: {
            label: "SO2 Controls",
            value: "so2ControlInfo",
        },
        description: "Method or equipment used by the combustion unit to minimize SO2 emissions.",
        example: "Wet Limestone",
    },
    so2Mass: {
        fieldLabels: {
            label: "SO2 Mass (short tons)",
            value: "so2Mass",
        },
        description: "SO2 Mass Emissions (short tons)",
        example: 91.2,
    },
    so2MassHourly: {
        fieldLabels: {
            label: "SO2 Mass (lbs)",
            value: "so2Mass",
        },
        description: "SO2 Mass Emissions (lbs)",
        example: 15.7,
    },
    so2MassMeasureFlg: {
        fieldLabels: {
            label: "SO2 Mass Measure Indicator",
            value: "so2MassMeasureFlg",
        },
        description: "Describes how the SO2 Mass values were determined. ",
        example: "Substitute",
    },
    so2Phase: {
        fieldLabels: {
            label: "SO2 Phase",
            value: "so2Phase",
        },
        description: "Title IV of the Clean Air Act SO2 Phase. Phase I started in 1995; Phase II started in 2000.",
        example: "Phase 2",
    },
    so2Rate: {
        fieldLabels: {
            label: "SO2 Rate (lbs/mmBtu)",
            value: "so2Rate",
        },
        description: "Average SO2 hourly emissions rate (lbs/mmBtu)",
        example: 0.011,
    },
    so2RateMeasureFlg: {
        fieldLabels: {
            label: "SO2 Rate Measure Indicator",
            value: "so2RateMeasureFlg",
        },
        description: "Describes how the SO2 Rate values were determined. ",
        example: "Calculated",
    },
    sortOrder: {
        fieldLabels: {
            label: "",
            value: "sortOrder",
        },
        description: "",
        example: "",
    },
    sourceCategory: {
        fieldLabels: {
            label: "Source Category",
            value: "sourceCategory",
        },
        description: "Description of a unit that classifies it in terms of the primary function of the unit.",
        example: "Electric Utility",
    },
    sourceCategoryCode: {
        fieldLabels: {
            label: "",
            value: "sourceCategoryCode",
        },
        description: "Code for the source category type.",
        example: "COGEN",
    },
    sourceCategoryDescription: {
        fieldLabels: {
            label: "",
            value: "sourceCategoryDescription",
        },
        description: "Full description for the source category type.",
        example: "Cogeneration",
    },
    startBlock: {
        fieldLabels: {
            label: "Serial Number Start",
            value: "startBlock",
        },
        description: "The starting serial number of an allowance block.",
        example: 266955,
    },
    state: {
        fieldLabels: {
            label: "State",
            value: "state",
        },
        description: "State in which the facility is located.",
        example: "AL",
    },
    stateCode: {
        fieldLabels: {
            label: "",
            value: "stateCode",
        },
        description: "Two letter abreviation for the State.",
        example: "AK",
    },
    stateName: {
        fieldLabels: {
            label: "",
            value: "stateName",
        },
        description: "Full description of State.",
        example: "Alaska",
    },
    steamLoad: {
        fieldLabels: {
            label: "Steam Load (1000 lb)",
            value: "steamLoad",
        },
        description: "Rate of steam pressure generated by a unit or source produced by combusting a given heat input of fuel. (1000 lb/hr)",
        example: 153647,
    },
    steamLoadHourly: {
        fieldLabels: {
            label: "Steam Load (1000 lb/hr)",
            value: "steamLoad",
        },
        description: "Rate of steam pressure generated by a unit or source produced by combusting a given heat input of fuel. (1000 lb/hr)",
        example: 387,
    },
    sumOpTime: {
        fieldLabels: {
            label: "Sum of the Operating Time",
            value: "sumOpTime",
        },
        description: "Sum of operating time for the time interval",
        example: 1795.25,
    },
    totalAllowancesDeducted: {
        fieldLabels: {
            label: "Total Allowances Deducted",
            value: "totalAllowancesDeducted",
        },
        description: "The total amount of allowances deducted at compliance.",
        example: 132,
    },
    totalAllowancesHeld: {
        fieldLabels: {
            label: "Total Allowances Held in Account at Trading Deadline",
            value: "totalAllowancesHeld",
        },
        description: "The total amount of allowances held in the account at compliance.",
        example: 132,
    },
    totalBlock: {
        fieldLabels: {
            label: "Allowance Block Total",
            value: "totalBlock",
        },
        description: "The quantity of allowances as identified by the Start Serial Number through End Serial Number.",
        example: 10033,
    },
    totalRequiredDeductions: {
        fieldLabels: {
            label: "Total Required Deductions",
            value: "totalRequiredDeductions",
        },
        description: "Sum of Compliance year emissions + Other deductions.",
        example: 132,
    },
    tradingEndDate: {
        fieldLabels: {
            label: "",
            value: "tradingEndDate",
        },
        description: "Last date of allowance trading activity for the program.",
        example: "2016-08-10",
    },
    transactionBeginDate: {
        fieldLabels: {
            label: "",
            value: "transactionBeginDate",
        },
        description: "Begin date for a given period of an account's allowance transaction history.",
        example: "2014-11-24",
    },
    transactionDate: {
        fieldLabels: {
            label: "Transaction Date",
            value: "transactionDate",
        },
        description: "The date the allowance transaction was confirmed.",
        example: "2014-11-24",
    },
    transactionEndDate: {
        fieldLabels: {
            label: "",
            value: "transactionEndDate",
        },
        description: "End date for a given period of an account's allowance transaction history.",
        example: "2014-11-25",
    },
    transactionId: {
        fieldLabels: {
            label: "Transaction ID",
            value: "transactionId",
        },
        description: "The number used to identify a specific allowance transaction.",
        example: 9883,
    },
    transactionTotal: {
        fieldLabels: {
            label: "Transaction Total",
            value: "transactionTotal",
        },
        description: "The total number of allowances involved in a transaction.",
        example: 6,
    },
    transactionType: {
        fieldLabels: {
            label: "Transaction Type",
            value: "transactionType",
        },
        description: "The type of allowance transaction (e.g. initial allocation, private transaction, etc.).",
        example: "Private Transfer",
    },
    transactionTypeCode: {
        fieldLabels: {
            label: "",
            value: "transactionTypeCode",
        },
        description: "Code for the transaction type.",
        example: "INITALL",
    },
    transactionTypeDescription: {
        fieldLabels: {
            label: "",
            value: "transactionTypeDescription",
        },
        description: "Full description for the transaction type.",
        example: "Initial Allocation",
    },
    unitFuelType: {
        fieldLabels: {
            label: "",
            value: "unitFuelType",
        },
        description: "Primary or Secondary fuel types combusted by the unit.",
        example: "Coal",
    },
    unitId: {
        fieldLabels: {
            label: "Unit ID",
            value: "unitId",
        },
        description: "Unique identifier for each unit at a facility.",
        example: 5,
    },
    unitsAffected: {
        fieldLabels: {
            label: "Units Affected",
            value: "unitsAffected",
        },
        description: "Unit ID(s) for units at a facility that are affected by a given compliance program.",
        example: 31,
    },
    unitType: {
        fieldLabels: {
            label: "Unit Type",
            value: "unitType",
        },
        description: "Type of unit or boiler.",
        example: "Tangentially-fired",
    },
    unitTypeCode: {
        fieldLabels: {
            label: "",
            value: "unitTypeCode",
        },
        description: "Code for the unit or boiler type.",
        example: "AF",
    },
    unitTypeDescription: {
        fieldLabels: {
            label: "",
            value: "unitTypeDescription",
        },
        description: "Full description for the unit or boiler type.",
        example: "Arch-fired boiler",
    },
    unitTypeGroupCode: {
        fieldLabels: {
            label: "",
            value: "unitTypeGroupCode",
        },
        description: "Code for the unit or boiler type group.",
        example: "B",
    },
    unitTypeGroupDescription: {
        fieldLabels: {
            label: "",
            value: "unitTypeGroupDescription",
        },
        description: "Full description for the unit or boiler group.",
        example: "Boilers",
    },
    vintageYear: {
        fieldLabels: {
            label: "Allowance Vintage Year",
            value: "vintageYear",
        },
        description: "Year allowance becomes eligible for use in compliance.",
        example: 2016,
    },
    year: {
        fieldLabels: {
            label: "Year",
            value: "year",
        },
        description: "The calendar year during which activity occurred.",
        example: 2020,
    },
};
//# sourceMappingURL=property-metadata.constants.js.map