export const propertyMetadata = {
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
      label:"",
      value: "accountTypeCode",
    },
    description: "Code for the type of allowance account.",
    example: "RESERVE",
  },
  accountTypeDescription: {
    fieldLabels: {
      label:"",
      value: "accountTypeDescription",
    },
    description: "Full description for the type of allowance account.",
    example: "EPA Reserve Account",
  },
  accountTypeGroupCode: {
    fieldLabels: {
      label:"",
      value: "accountTypeGroupCode",
    },
    description: "Code for the group to which the allowance account belongs.",
    example: "RESERVE",
  },
  accountTypeGroupDescription: {
    fieldLabels: {
      label:"",
      value: "accountTypeGroupDescription",
    },
    description:
      "Full description for the group to which the allowance account belongs.",
    example: "Reserve",
  },
  actualEmissionsRate: {
    fieldLabels: {
      label: "Actual Emissions Rate (lb/mmBtu)",
      value: "actualEmissionsRate",
    },
    description:
      "For ARP NOx, the actual rate at which a pollutant was emitted during a given time period for a single unit. (lb/mmBtu)",
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
      label:"",
      value: "allowanceUIFilter",
    },
    description:
      "Indicator of whether or not the program should show up in the CAMPD Custom Data Download Tool UI Program filter for allowance data types.",
    example: true,
  },
  annualIndicator: {
    fieldLabels: {
      label:"",
      value: "annualIndicator",
    },
    description:
      "Indicator of whether or not the program is an annual program.",
    example: true,
  },
  associatedGeneratorsAndNameplateCapacity: {
    fieldLabels: {
      label: "Associated Generators & Nameplate Capacity (MWe)",
      value: "associatedGeneratorsAndNameplateCapacity",
    },
    description:
      "One or more unique identifiers for generators at a facility associated with the unit, and the maximum electrical generating output (in MWe, rounded to the nearest tenth) that the generator is capable of producing on a steady state basis and during continuous operation (when not restricted by seasonal or other deratings). This value is usually indicated on a nameplate physically attached to the generator.",
    example: "A1ST (191.8)",
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
    description:
      "For ARP NOx, the average actual rate at which a pollutant was emitted during a given time period for the group of units in the averaging plan. (lb/mmBtu)",
    example: 0.55,
  },
  avgPlanId: {
    fieldLabels: {
      label: "Averaging Plan ID",
      value: "avgPlanId",
    },
    description:
      "For ARP NOx, the unique identification number that associates a group of units with a single averaging plan.",
    example: 492,
  },
  bankedHeld: {
    fieldLabels: {
      label: "Banked Allowances",
      value: "bankedHeld",
    },
    description:
      "The amount of allowances of vintage years up to but not including the current compliance year held in a compliance account. (This is for NBP, OTC)",
    example: 0,
  },
  beginDate: {
    fieldLabels: {
      label:"",
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
    description:
      "The name of the account receiving allowances in an allowance transaction.",
    example: "Darby Electric Generating Station",
  },
  buyAccountNumber: {
    fieldLabels: {
      label: "Account Number (Transferee)",
      value: "buyAccountNumber",
    },
    description:
      "The number of the account receiving allowances in an allowance transaction.",
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
  buyAccountTypeCode: {
    fieldLabels: {
      label:"",
      value: "buyAccountTypeCode",
    },
    description: "Code for the type of account purchasing allowances.",
    example: "GENERAL",
  },
  buyEpaRegion: {
    fieldLabels: {
      label: "EPA Region (Transferee)",
      value: "buyEpaRegion",
    },
    description:
      "For facility and unit accounts, the EPA Region of the account receiving allowances in an allowance transaction.",
    example: 5,
  },
  buyFacilityId: {
    fieldLabels: {
      label: "Facility ID (Transferee)",
      value: "buyFacilityId",
    },
    description:
      "For facility and unit accounts, the Facility ID of the account receiving allowances in an allowance transaction.",
    example: 55247,
  },
  buyFacilityName: {
    fieldLabels: {
      label: "Facility Name (Transferee)",
      value: "buyFacilityName",
    },
    description:
      "For facility and unit accounts, the facility name of the account receiving allowances in an allowance transaction.",
    example: "Darby Electric Generating Station",
  },
  buyOwner: {
    fieldLabels: {
      label: "Owner (Transferee)",
      value: "buyOwner",
    },
    description:
      "The owner of the account receiving allowances in an allowance transaction.",
    example: "AEP Generation Resources, Inc.",
  },
  buySourceCategory: {
    fieldLabels: {
      label: "Source Category (Transferee)",
      value: "buySourceCategory",
    },
    description:
      "For unit accounts, the source category of the account receiving allowances in an allowance transaction.",
    example: "Electric Utility",
  },
  buyState: {
    fieldLabels: {
      label: "State (Transferee)",
      value: "buyState",
    },
    description:
      "For facility and unit accounts, the state of the account receiving allowances in an allowance transaction.",
    example: "OH",
  },
  carriedOver: {
    fieldLabels: {
      label: "Allowances Carried Over",
      value: "carriedOver",
    },
    description:
      "The amount of allowances remaining in the account following compliance.",
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
    description: "Describes how the CO2 Mass values were determined.",
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
      label: "CO2 Rate Measure Indicator",
      value: "co2RateMeasureFlg",
    },
    description: "Describes how the CO2 Rate values were determined.",
    example: "Calculated",
  },
  commercialOperationDate: {
    fieldLabels: {
      label: "Commercial Operation Date",
      value: "commercialOperationDate",
    },
    description:
      "The date a unit began, or will begin to generate electricity for sale, including the sale of test generation. It is the first date that a unit serves a generator and produces electricity when connected to the grid, even if the owners are not compensated for that electricity.",
    example: "1977-04-01",
  },
  complianceApproach: {
    fieldLabels: {
      label: "Compliance Approach",
      value: "complianceApproach",
    },
    description:
      "For ARP NOx, approach used to meet compliance requirements (averaging plan, standard limit, or alternative limit).",
    example: "Averaging Plan",
  },
  complianceUIFilter: {
    fieldLabels: {
      label:"",
      value: "complianceUIFilter",
    },
    description:
      "Indicator of whether or not the program should show up in the CAMPD Custom Data Download Tool UI Program filter for compliance data types.",
    example: false,
  },
  complianceYearEmissions: {
    fieldLabels: {
      label: "Emissions (short tons)",
      value: "complianceYearEmissions",
    },
    description:
      "The total amount of pollutant in short tons emitted by the source in a control period.",
    example: 132,
  },
  compParameterCode: {
    fieldLabels: {
      label:"",
      value: "compParameterCode",
    },
    description: "Code for pollutant regulated by program.",
    example: "NOX",
  },
  controlCode: {
    fieldLabels: {
      label:"",
      value: "controlCode",
    },
    description:
      "Code for the method or equipment used by the combustion unit to minimize emissions for the particular pollutant.",
    example: "B",
  },
  controlDescription: {
    fieldLabels: {
      label:"",
      value: "controlDescription",
    },
    description:
      "Full description of method or equipment used by the combustion unit to minimize emissions for the particular pollutant.",
    example: "Baghouse",
  },
  controlEquipParamCode: {
    fieldLabels: {
      label:"",
      value: "controlEquipParamCode",
    },
    description:
      "Code for the pollutant minimized by the respective control equipment or method.",
    example: "PART",
  },
  controlEquipParamDescription: {
    fieldLabels: {
      label:"",
      value: "controlEquipParamDescription",
    },
    description:
      "Full description for the pollutant minimized by the respective control equipment or method.",
    example: "Particulates (Opacity)",
  },
  controlTechnologies: {
    fieldLabels: {
      label:"",
      value: "controlTechnologies",
    },
    description:
      "Method or equipment used by the combusion unit to minimize Hg, NOx, PM, or SO2 emissions.",
    example: "Baghouse",
  },
  countOpTime: {
    fieldLabels: {
      label: "Operating Time Count",
      value: "countOpTime",
    },
    description:
      "Number of hours during which the unit operated for this time interval",
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
    description:
      "The numerical code identifying a specific county in a single state.",
    example: "MN141",
  },
  currentDeductions: {
    fieldLabels: {
      label: "Current Deductions",
      value: "currentDeductions",
    },
    description:
      "The amount of allowances with the current vintage year deducted at compliance. (This is for NBP, OTC)",
    example: 132,
  },
  currentHeld: {
    fieldLabels: {
      label: "Current Held",
      value: "currentHeld",
    },
    description:
      "The amount of current vintage year allowances held in a compliance account at compliance. (This is for NBP, OTC)",
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
    description:
      "Banked allowances with a 1 to 1 ratio. (This is for OTC, NBP)",
    example: 0,
  },
  deductTwoToOne: {
    fieldLabels: {
      label: "Deduction 2 to 1",
      value: "deductTwoToOne",
    },
    description:
      "Banked allowances with a 2 to 1 ratio. (This is for OTC, NBP)",
    example: 0,
  },
  emissionsLimitDisplay: {
    fieldLabels: {
      label: "Emissions Limit (lb/mmBtu)",
      value: "emissionsLimitDisplay",
    },
    description:
      "For ARP NOx, the applicable emissions limit based on compliance plan. May either be unit-specific or part of an averaging plan. (lb/mmBtu)",
    example: 0.55,
  },
  emissionsUIFilter: {
    fieldLabels: {
      label:"",
      value: "emissionsUIFilter",
    },
    description:
      "Indicator of whether or not the program should show up in the CAMPD Custom Data Download Tool UI Program filter for emissions data types.",
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
      label:"",
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
    description:
      "An EPA Region is a group of U.S. states. EPA Regions are numbered from 1 to 10 and each state belongs to one and only one EPA Region.",
    example: 5,
  },
  excessEmissions: {
    fieldLabels: {
      label: "Excess Emissions (short tons)",
      value: "excessEmissions",
    },
    description:
      "The amount of pollutant in short tons emitted in excess of the number of allowances held.",
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
    description:
      "The Federal Information Processing Standards (FIPS) Code of the facility, issued by the National Institute of Standards and Technology, which ensures uniform identification of geographic entities throughout all federal agencies.",
    example: 141,
  },
  fuelGroupCode: {
    fieldLabels: {
      label:"",
      value: "fuelGroupCode",
    },
    description:
      "Code for the fuel group for the type of fuel combusted by the unit.",
    example: "COAL",
  },
  fuelGroupDescription: {
    fieldLabels: {
      label:"",
      value: "fuelGroupDescription",
    },
    description:
      "Full description for the fuel group for the type of fuel combusted by the unit.",
    example: "All Coal",
  },
  fuelTypeCode: {
    fieldLabels: {
      label:"",
      value: "fuelTypeCode",
    },
    description: "Code for the type of fuel combusted by the unit.",
    example: "C",
  },
  fuelTypeDescription: {
    fieldLabels: {
      label:"",
      value: "fuelTypeDescription",
    },
    description: "Full description for the type of fuel combusted by the unit.",
    example: "Coal",
  },
  grossLoad: {
    fieldLabels: {
      label: "Gross Load (MWh)",
      value: "grossLoad",
    },
    description:
      "Electrical generation in MW produced by combusting a given heat input of fuel.",
    example: 900773,
  },
  grossLoadHourly: {
    fieldLabels: {
      label: "Gross Load (MW)",
      value: "grossLoad",
    },
    description:
      "Electrical generation in MW produced by combusting a given heat input of fuel.",
    example: 146,
  },
  heatInput: {
    fieldLabels: {
      label: "Heat Input (mmBtu)",
      value: "heatInput",
    },
    description:
      "Quantity of heat in mmBtu calculated by multiplying the quantity of fuel by the fuels heat content.",
    example: 1470.2,
  },
  hgControlInfo: {
    fieldLabels: {
      label: "Hg Controls",
      value: "hgControlInfo",
    },
    description:
      "Method or equipment used by the combustion unit to minimize Hg emissions.",
    example: "Catalyst (gold, palladium, or other) used to oxidize mercury",
  },
  hour: {
    fieldLabels: {
      label: "Hour",
      value: "hour",
    },
    description:
      "Hour in which activity occurred, recorded using local, standard time.",
    example: 23,
  },
  inCompliance: {
    fieldLabels: {
      label: "In Compliance?",
      value: "inCompliance",
    },
    description:
      "A facility is in compliance if, at the end of the compliance period, the facility owns enough allowances to cover the amount of pollutant emitted (or for ARP NOx, the actual emissions rate of the pollutant was below the emissions limit).",
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
    description:
      "The design heat input capacity (mmBtu/hr) for the unit or the highest hourly heat input rate observed in the past five years, whichever is greater.",
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
  nercRegion: {
    fieldLabels: {
      label: "NERC Region",
      value: "nercRegion",
    },
    description:
      "The North American Electric Reliability Corporation region in which the facility is located.",
    example: "Mid-Continent Area Power Pool",
  },
  noxControlInfo: {
    fieldLabels: {
      label: "NOx Controls",
      value: "noxControlInfo",
    },
    description:
      "Method or equipment used by the combustion unit to minimize NOx emissions.",
    example:
      "Selective Catalytic Reduction, Low NOx Burner Technology w/ Separated OFA",
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
    description: "Describes how the NOx Mass values were determined.",
    example: "Measured and Substitute",
  },
  noxPhase: {
    fieldLabels: {
      label: "NOx Phase",
      value: "noxPhase",
    },
    description:
      "The classification of an ARP unit that is subject to an ARP NOx emission rate limit (40 CFR Part 76). The unit is first classified by ARP Phase (Phase 1 or Phase 2) and then the unit (boiler) type is used to determine whether the unit is a Group 1 or Group 2 boiler.  This ARP Phase/Group classification then determines the standard NOx emission rate applicable to the unit.  This information is then used in determining ARP NOx compliance, depending on the compliance approach (standard NOx limit or averaging plan) selected for the unit.",
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
    description: "Describes how the NOx Rate values were determined.",
    example: "Measured and Substitute",
  },
  operatingStatus: {
    fieldLabels: {
      label: "Operating Status",
      value: "operatingStatus",
    },
    description:
      "An indication of the condition of a unit relevant to the year (planned, operating, shutdown, etc.).",
    example: "Operating",
  },
  operatingHoursOnly: {
    fieldLabels: {
      label:"",
      value: "operatingHoursOnly",
    },
    description:
      "Indicator of whether or not a request should return only data for hours where a unit operated.",
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
    description:
      "The sum of other deductions that may have occurred for the account, including Underutilization, Phase I Extension, Projected Emissions Deduction (for Phase I reports), State Cap Deductions, Deduction of Loaned Allowances, July Confirmation Deduction, and Substitution Control by Contract Deduction.",
    example: 0,
  },
  ownerOperator: {
    fieldLabels: {
      label:"",
      value: "ownerOperator",
    },
    description:
      "The name of any company that owns an allowance account or an affected unit.The name of any company that operates an affected unit.",
    example: "Alabama Power Company",
  },
  ownerOperatorInfo: {
    fieldLabels: {
      label: "Owner/Operator",
      value: "ownerOperator",
    },
    description:
      "The name of any company that owns an allowance account or an affected unit.The name of any company that operates an affected unit.",
    example: "Alabama Power Company (Operator), Alabama Power Company (Owner)",
  },
  ownId: {
    fieldLabels: {
      label:"",
      value: "ownId",
    },
    description: "Unique ID for owner/operator.",
    example: 52226,
  },
  ownType: {
    fieldLabels: {
      label:"",
      value: "ownType",
    },
    description: "Owner/Operator type. Either Owner, Operator, or Both.",
    example: "OPR",
  },
  ozoneIndicator: {
    fieldLabels: {
      label:"",
      value: "ozoneIndicator",
    },
    description: "Indicator of whether or not the program is an ozone program.",
    example: false,
  },
  page: {
    fieldLabels: {
      label:"",
      value: "page",
    },
    description: "Page number of data being requested.",
    example: 1,
  },
  perPage: {
    fieldLabels: {
      label:"",
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
    description:
      "Method or equipment used by the combustion unit to minimize PM emissions.",
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
      label:"",
      value: "programCode",
    },
    description:
      "Code for statutory or regulatory based options for tracking and reducing air pollution emissions.",
    example: "CAIRNOX",
  },
  programCodeInfo: {
    fieldLabels: {
      label: "Program Code",
      value: "programCodeInfo",
    },
    description:
      "Statutory or regulatory based options for tracking and reducing air pollution emissions.",
    example: "ARP,CSNOX,CSSO2G2,MATS",
  },
  programDescription: {
    fieldLabels: {
      label:"",
      value: "programDescription",
    },
    description:
      "Full description for statutory or regulatory based options for tracking and reducing air pollution emissions.",
    example: "CAIR NOx Annual Program",
  },
  programGroupCode: {
    fieldLabels: {
      label:"",
      value: "programGroupCode",
    },
    description: "Code for the group to which the program belongs.",
    example: "CAIR",
  },
  programGroupDescription: {
    fieldLabels: {
      label:"",
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
  retiredIndicator: {
    fieldLabels: {
      label:"",
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
    description:
      "The name of the account transferring allowances in an allowance transaction.",
    example: "Cardinal",
  },
  sellAccountNumber: {
    fieldLabels: {
      label: "Account Number (Transferor)",
      value: "sellAccountNumber",
    },
    description:
      "The number of the account transfering allowances in an allowance transaction.",
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
  sellAccountTypeCode: {
    fieldLabels: {
      label:"",
      value: "sellAccountTypeCode",
    },
    description: "Code for the type of account selling allowances.",
    example: "GENERAL",
  },
  sellEpaRegion: {
    fieldLabels: {
      label: "EPA Region (Transferor)",
      value: "sellEpaRegion",
    },
    description:
      "For facility and unit accounts, the EPA Region of the account transferring allowances in an allowance transaction.",
    example: 5,
  },
  sellFacilityId: {
    fieldLabels: {
      label: "Facility ID (Transferor)",
      value: "sellFacilityId",
    },
    description:
      "For facility and unit accounts, the Facility ID of the account transferring allowances in an allowance transaction.",
    example: 2828,
  },
  sellFacilityName: {
    fieldLabels: {
      label: "Facility Name (Transferor)",
      value: "sellFacilityName",
    },
    description:
      "For facility and unit accounts, the facility name of the account transferring allowances in an allowance transaction.",
    example: "Cardinal",
  },
  sellOwner: {
    fieldLabels: {
      label: "Owner (Transferor)",
      value: "sellOwner",
    },
    description:
      "The owner of the account transferring allowances in an allowance transaction.",
    example: "AEP Generation Resources, Inc., Buckeye Power, Inc.",
  },
  sellSourceCategory: {
    fieldLabels: {
      label: "Source Category (Transferor)",
      value: "sellSourceCategory",
    },
    description:
      "For unit accounts, the source category of the account transferring allowances in an allowance transaction.",
    example: "Electric Utility",
  },
  sellState: {
    fieldLabels: {
      label: "State (Transferor)",
      value: "sellState",
    },
    description:
      "For facility and unit accounts, the state of the account transferring allowances in an allowance transaction.",
    example: "OH",
  },
  so2ControlInfo: {
    fieldLabels: {
      label: "SO2 Controls",
      value: "so2ControlInfo",
    },
    description:
      "Method or equipment used by the combustion unit to minimize SO2 emissions.",
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
    description: "Describes how the SO2 Mass values were determined.",
    example: "Substitute",
  },
  so2Phase: {
    fieldLabels: {
      label: "SO2 Phase",
      value: "so2Phase",
    },
    description:
      "Title IV of the Clean Air Act SO2 Phase. Phase I started in 1995; Phase II started in 2000.",
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
    description: "Describes how the SO2 Rate values were determined.",
    example: "Calculated",
  },
  sortOrder: {
    fieldLabels: {
      label:"",
      value: "sortOrder",
    },
    description:"",
    example:"",
  },
  sourceCategory: {
    fieldLabels: {
      label: "Source Category",
      value: "sourceCategory",
    },
    description:
      "Description of a unit that classifies it in terms of the primary function of the unit.",
    example: "Electric Utility",
  },
  sourceCategoryCode: {
    fieldLabels: {
      label:"",
      value: "sourceCategoryCode",
    },
    description: "Code for the source category type.",
    example: "COGEN",
  },
  sourceCategoryDescription: {
    fieldLabels: {
      label:"",
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
      label:"State",
      value: "stateCode",
    },
    description: "Two letter abreviation for the State.",
    example: "AK",
  },
  stateName: {
    fieldLabels: {
      label:"",
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
    description:
      "Rate of steam pressure generated by a unit or source produced by combusting a given heat input of fuel. (1000 lb/hr)",
    example: 153647,
  },
  steamLoadHourly: {
    fieldLabels: {
      label: "Steam Load (1000 lb/hr)",
      value: "steamLoad",
    },
    description:
      "Rate of steam pressure generated by a unit or source produced by combusting a given heat input of fuel. (1000 lb/hr)",
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
    description:
      "The total amount of allowances held in the account at compliance.",
    example: 132,
  },
  totalBlock: {
    fieldLabels: {
      label: "Allowance Block Total",
      value: "totalBlock",
    },
    description:
      "The quantity of allowances as identified by the Start Serial Number through End Serial Number.",
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
      label:"",
      value: "tradingEndDate",
    },
    description: "Last date of allowance trading activity for the program.",
    example: "2016-08-10",
  },
  transactionBeginDate: {
    fieldLabels: {
      label:"",
      value: "transactionBeginDate",
    },
    description:
      "Begin date for a given period of an account's allowance transaction history.",
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
      label:"",
      value: "transactionEndDate",
    },
    description:
      "End date for a given period of an account's allowance transaction history.",
    example: "2014-11-25",
  },
  transactionId: {
    fieldLabels: {
      label: "Transaction ID",
      value: "transactionId",
    },
    description:
      "The number used to identify a specific allowance transaction.",
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
    description:
      "The type of allowance transaction (e.g. initial allocation, private transaction, etc.).",
    example: "Private Transfer",
  },
  transactionTypeCode: {
    fieldLabels: {
      label:"",
      value: "transactionTypeCode",
    },
    description: "Code for the transaction type.",
    example: "INITALL",
  },
  transactionTypeDescription: {
    fieldLabels: {
      label:"",
      value: "transactionTypeDescription",
    },
    description: "Full description for the transaction type.",
    example: "Initial Allocation",
  },
  unitFuelType: {
    fieldLabels: {
      label:"",
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
    description:
      "unit ID(s) for units at a facility that are affected by a given compliance program.",
    example: 31,
  },
  unitType: {
    fieldLabels: {
      label:"Unit Type",
      value: "unitType",
    },
    description: "Type of unit or boiler.",
    example: "Tangentially-fired",
  },
  unitTypeCode: {
    fieldLabels: {
      label:"",
      value: "unitTypeCode",
    },
    description: "Code for the unit or boiler type.",
    example: "AF",
  },
  unitTypeDescription: {
    fieldLabels: {
      label:"",
      value: "unitTypeDescription",
    },
    description: "Full description for the unit or boiler type.",
    example: "Arch-fired boiler",
  },
  unitTypeGroupCode: {
    fieldLabels: {
      label:"",
      value: "unitTypeGroupCode",
    },
    description: "Code for the unit or boiler type group.",
    example: "B",
  },
  unitTypeGroupDescription: {
    fieldLabels: {
      label:"",
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
  analyzerRangeDTOId:{
    fieldLabels: {
      label: "",
      value: "id",
    },
    description: "Unique identifier of an analyzer range history record.",
    example: "MRHODES16-10C1A63683D34BA7A0833475C802CF91",
  },
  
  analyzerRangeDTOComponentRecordId:{
    fieldLabels: {
      label: "",
      value: "componentRecordId",
    },
    description: "Unique identifier of a monitoring component record.",
    example: "CAMD-646D15E327E1480D814D48286DA7F073",
  },
  
  analyzerRangeDTOUserId:{
    fieldLabels: {
      label: "",
      value: "userId",
    },
    description: "User account or source of data that added or updated record.",
    example: "abcde",
  },
  
  analyzerRangeDTOAddDate:{
    fieldLabels: {
      label: "",
      value: "addDate",
    },
    description: "Date and time in which record was added.",
    example: "5/21/2018",
  },
  
  analyzerRangeDTOUpdateDate:{
    fieldLabels: {
      label: "",
      value: "updateDate",
    },
    description: "Date and time in which record was last updated.",
    example: "NULL",
  },
  
  analyzerRangeDTOAnalyzerRangeCode:{
    fieldLabels: {
      label: "Analyzer Range",
      value: "analyzerRangeCode",
    },
    description: "Code used to identify the analyzer range.",
    example: "A",
  },
  
  analyzerRangeDTODualRangeIndicator:{
    fieldLabels: {
      label: "Dual Range Indicator",
      value: "dualRangeIndicator",
    },
    description: "Used to indicate whether the component is a dual-range analyzer.",
    example: "1",
  },
  
  analyzerRangeDTOBeginDate:{
    fieldLabels: {
      label: "Begin Date",
      value: "beginDate",
    },
    description: "Date in which information became effective or activity started.",
    example: "5/17/2018",
  },
  
  analyzerRangeDTOBeginHour:{
    fieldLabels: {
      label: "Begin Hour",
      value: "beginHour",
    },
    description: "Hour in which information became effective or activity started.",
    example: "14",
  },
  
  analyzerRangeDTOEndDate:{
    fieldLabels: {
      label: "End Date",
      value: "endDate",
    },
    description: "Last date in which information was effective or date in which activity ended.",
    example: "NULL",
  },
  
  analyzerRangeDTOEndHour:{
    fieldLabels: {
      label: "End Hour",
      value: "endHour",
    },
    description: "Last hour in which information was effective or hour in which activity ended.",
    example: "NULL",
  },
  
  analyzerRangeDTOActive:{
    fieldLabels: {
      label: "",
      value: "active",
    },
    description: "Flag for active monitor location record",
    example: "",
  },
  
  componentDTOId:{
    fieldLabels: {
      label: "",
      value: "id",
    },
    description: "Unique identifier of a monitoring component record.",
    example: "CAMD-646D15E327E1480D814D48286DA7F073",
  },
  
  componentDTOLocationId:{
    fieldLabels: {
      label: "",
      value: "locationId",
    },
    description: "Unique identifier of a monitoring location record.",
    example: "5770",
  },
  
  componentDTOUserId:{
    fieldLabels: {
      label: "",
      value: "userId",
    },
    description: "User account or source of data that added or updated record.",
    example: "abcde",
  },
  
  componentDTOAddDate:{
    fieldLabels: {
      label: "",
      value: "addDate",
    },
    description: "Date and time in which record was added.",
    example: "2/20/2009",
  },
  
  componentDTOUpdateDate:{
    fieldLabels: {
      label: "",
      value: "updateDate",
    },
    description: "Date and time in which record was last updated.",
    example: "NULL",
  },
  
  componentDTOComponentId:{
    fieldLabels: {
      label: "Component ID",
      value: "componentId",
    },
    description: "The three digit code assigned by the source to identify the component.",
    example: "027",
  },
  
  componentDTOComponentTypeCode:{
    fieldLabels: {
      label: "Component Type",
      value: "componentTypeCode",
    },
    description: "Code used to identify the component type.",
    example: "SO2",
  },
  
  componentDTOSampleAcquisitionMethodCode:{
    fieldLabels: {
      label: "Sample Acquisition Method",
      value: "sampleAcquisitionMethodCode",
    },
    description: "Code used to identify the sample acquisition method.",
    example: "DOU",
  },
  
  componentDTOBasisCode:{
    fieldLabels: {
      label: "Basis Code",
      value: "basisCode",
    },
    description: "Code used to identify the moisture basis.",
    example: "W",
  },
  
  componentDTOManufacturer:{
    fieldLabels: {
      label: "Manufacturer",
      value: "manufacturer",
    },
    description: "Name of the manufacturer or developer of the component.",
    example: "TECO",
  },
  
  componentDTOModelVersion:{
    fieldLabels: {
      label: "Model Version",
      value: "modelVersion",
    },
    description: "The model of any hardware component or the version number of the software component.",
    example: "43I",
  },
  
  componentDTOSerialNumber:{
    fieldLabels: {
      label: "Serial Number",
      value: "serialNumber",
    },
    description: "Serial number of the component.",
    example: "631819420",
  },
  
  componentDTOHgConverterIndicator:{
    fieldLabels: {
      label: "Hg Converter Indicator",
      value: "hgConverterIndicator",
    },
    description: "For an Hg component, indicates whether the analyzer has a converter.",
    example: "NULL",
  },
  
  ductWafDTOId:{
    fieldLabels: {
      label: "",
      value: "id",
    },
    description: "Unique identifier of a rectangular duct WAF data record.",
    example: "CAMD-6847FB7858174AD0ADF87FFBAF85EF9C",
  },
  
  ductWafDTOLocationId:{
    fieldLabels: {
      label: "",
      value: "locationId",
    },
    description: "Unique identifier of a monitoring location record.",
    example: "5",
  },
  
  ductWafDTOUserId:{
    fieldLabels: {
      label: "",
      value: "userId",
    },
    description: "User account or source of data that added or updated record.",
    example: "abcde",
  },
  
  ductWafDTOAddDate:{
    fieldLabels: {
      label: "",
      value: "addDate",
    },
    description: "Date and time in which record was added.",
    example: "2/20/2009",
  },
  
  ductWafDTOUpdateDate:{
    fieldLabels: {
      label: "",
      value: "updateDate",
    },
    description: "Date and time in which record was last updated.",
    example: "10/20/2021",
  },
  
  ductWafDTOWafDeterminationDate:{
    fieldLabels: {
      label: "WAF Determination Date",
      value: "wafDeterminationDate",
    },
    description: "The date the WAF applied in column 20 was determined.",
    example: "11/18/2020",
  },
  
  ductWafDTOWafBeginDate:{
    fieldLabels: {
      label: "WAF Begin Date",
      value: "wafBeginDate",
    },
    description: "The date on which the WAF was first applied to the flow rate data.",
    example: "11/18/2020",
  },
  
  ductWafDTOWafBeginHour:{
    fieldLabels: {
      label: "WAF Begin Hour",
      value: "wafBeginHour",
    },
    description: "The hour in which the WAF was first applied to the flow rate data.",
    example: "1",
  },
  
  ductWafDTOWafMethodCode:{
    fieldLabels: {
      label: "WAF Method",
      value: "wafMethodCode",
    },
    description: "Code used to identify the WAF determination method.",
    example: "FT",
  },
  
  ductWafDTOWafValue:{
    fieldLabels: {
      label: "WAF Value",
      value: "wafValue",
    },
    description: "The WAF applied to the flow rate data, to four decimal places.",
    example: "1",
  },
  
  ductWafDTONumberOfTestRuns:{
    fieldLabels: {
      label: "Number of Test Runs",
      value: "numberOfTestRuns",
    },
    description: "The number of runs in the WAF test (must be one for default WAF and at least three for a measured WAF)",
    example: "1",
  },
  
  ductWafDTONumberOfTraversePointsWaf:{
    fieldLabels: {
      label: "Number of Traverse Points WAF",
      value: "numberOfTraversePointsWaf",
    },
    description: "The number of Method 1 traverse points in the WAF test runs.",
    example: "1",
  },
  
  ductWafDTONumberOfTestPorts:{
    fieldLabels: {
      label: "Number of Test Ports",
      value: "numberOfTestPorts",
    },
    description: "The number of test ports at which measurements were made during the WAF test runs.",
    example: "4",
  },
  
  ductWafDTONumberOfTraversePointsRef:{
    fieldLabels: {
      label: "Number of Traverse Points Reference",
      value: "numberOfTraversePointsRef",
    },
    description: "The number of Method 1 traverse points in the reference flow RATA test runs.",
    example: "1",
  },
  
  ductWafDTODuctWidth:{
    fieldLabels: {
      label: "Duct Width",
      value: "ductWidth",
    },
    description: "The width of the rectangular duct at the test location.",
    example: "1",
  },
  
  ductWafDTODuctDepth:{
    fieldLabels: {
      label: "Duct Depth",
      value: "ductDepth",
    },
    description: "The depth of the rectangular duct at the test location. ",
    example: "1",
  },
  
  ductWafDTOWafEndDate:{
    fieldLabels: {
      label: "WAF End Date",
      value: "wafEndDate",
    },
    description: "The date on which the WAF was last applied to the flow rate data.",
    example: "9/20/2021",
  },
  
  ductWafDTOWafEndHour:{
    fieldLabels: {
      label: "WAF End Hour",
      value: "wafEndHour",
    },
    description: "The hour in which the WAF was last applied to the flow rate data.",
    example: "1",
  },
  
  matsMethodDTOId:{
    fieldLabels: {
      label: "",
      value: "id",
    },
    description: "Unique identifier of a MATS compliance method record.",
    example: "MELISSARHO-FD768B60E4D343158F7AD52EFD704D0E",
  },
  
  matsMethodDTOLocationId:{
    fieldLabels: {
      label: "",
      value: "locationId",
    },
    description: "Unique identifier of a monitoring location record.",
    example: "5770",
  },
  
  matsMethodDTOUserId:{
    fieldLabels: {
      label: "",
      value: "userId",
    },
    description: "User account or source of data that added or updated record.",
    example: "abcde",
  },
  
  matsMethodDTOAddDate:{
    fieldLabels: {
      label: "",
      value: "addDate",
    },
    description: "Date and time in which record was added.",
    example: "2/23/2016",
  },
  
  matsMethodDTOUpdateDate:{
    fieldLabels: {
      label: "",
      value: "updateDate",
    },
    description: "Date and time in which record was last updated.",
    example: "NULL",
  },
  
  matsMethodDTOSupplementalMATSParameterCode:{
    fieldLabels: {
      label: "Supplemental MATS Parameter",
      value: "supplementalMATSParameterCode",
    },
    description: "Code used to identify the MATS parameter.",
    example: "QST",
  },
  
  matsMethodDTOSupplementalMATSMonitoringMethodCode:{
    fieldLabels: {
      label: "Supplemental MATS Method",
      value: "supplementalMATSMonitoringMethodCode",
    },
    description: "Code used to identify the MATS compliance methodology.",
    example: "TNHGM",
  },
  
  matsMethodDTOBeginDate:{
    fieldLabels: {
      label: "Begin Date",
      value: "beginDate",
    },
    description: "Date on which information became effective or activity started.",
    example: "4/16/2016",
  },
  
  matsMethodDTOBeginHour:{
    fieldLabels: {
      label: "Begin Hour",
      value: "beginHour",
    },
    description: "Hour in which information became effective.",
    example: "0",
  },
  
  matsMethodDTOEndDate:{
    fieldLabels: {
      label: "End Date",
      value: "endDate",
    },
    description: "Last date in which information was effective. This date will be null for active records.",
    example: "NULLL",
  },
  
  matsMethodDTOEndHour:{
    fieldLabels: {
      label: "End Hour",
      value: "endHour",
    },
    description: "Last hour in which information was effective. This value will be null for active records.",
    example: "NULL",
  },
  
  matsMethodDTOActive:{
    fieldLabels: {
      label: "",
      value: "active",
    },
    description: "Flag for active monitor location record",
    example: "",
  },
  
  monitorAttributeDTOId:{
    fieldLabels: {
      label: "",
      value: "id",
    },
    description: "Unique combination of DB_Token and identity key generated by sequence generator.",
    example: "MELISSAMAT-E496678DE19E4827ADE4D541B18B5756",
  },
  
  monitorAttributeDTOLocationId:{
    fieldLabels: {
      label: "",
      value: "locationId",
    },
    description: "Unique identifier of a monitoring location record.",
    example: "5770",
  },
  
  monitorAttributeDTOUserId:{
    fieldLabels: {
      label: "",
      value: "userId",
    },
    description: "User account or source of data that added or updated record.",
    example: "abcde",
  },
  
  monitorAttributeDTOAddDate:{
    fieldLabels: {
      label: "",
      value: "addDate",
    },
    description: "Date and time in which record was added.",
    example: "4/21/2009",
  },
  
  monitorAttributeDTOUpdateDate:{
    fieldLabels: {
      label: "",
      value: "updateDate",
    },
    description: "Date and time in which record was last updated.",
    example: "11/3/2015",
  },
  
  monitorAttributeDTOBeginDate:{
    fieldLabels: {
      label: "Begin Date",
      value: "beginDate",
    },
    description: "Date on which information became effective or activity started.",
    example: "1/1/2008",
  },
  
  monitorAttributeDTOEndDate:{
    fieldLabels: {
      label: "End Date",
      value: "endDate",
    },
    description: "Last date in which information was effective.  This date will be null for active records.",
    example: "NULL",
  },
  
  monitorAttributeDTOBypassIndicator:{
    fieldLabels: {
      label: "Bypass Indicator",
      value: "bypassIndicator",
    },
    description: "Used to indicate that the stack is used for bypass.",
    example: "NULL",
  },
  
  monitorAttributeDTOCrossAreaFlow:{
    fieldLabels: {
      label: "Cross Area Flow",
      value: "crossAreaFlow",
    },
    description: "The reported inside cross-sectional area in square feet of the stack or duct at the flow monitoring location.",
    example: "306",
  },
  
  monitorAttributeDTOCrossAreaStackExit:{
    fieldLabels: {
      label: "Cross Area Stack Exit",
      value: "crossAreaStackExit",
    },
    description: "The inside cross-sectional area in square feet of the stack at the exit.",
    example: "306",
  },
  
  monitorAttributeDTODuctIndicator:{
    fieldLabels: {
      label: "Duct Indicator",
      value: "ductIndicator",
    },
    description: "Used to indicate that this location is a duct.",
    example: "NULL",
  },
  
  monitorAttributeDTOGroundElevation:{
    fieldLabels: {
      label: "Ground Elevation",
      value: "groundElevation",
    },
    description: "The number of feet above sea level at ground level of the stack or unit.",
    example: "40",
  },
  
  monitorAttributeDTOMaterialCode:{
    fieldLabels: {
      label: "Material Code",
      value: "materialCode",
    },
    description: "Code used to identify the material that is used in the monitoring location.",
    example: "OTHER",
  },
  
  monitorAttributeDTOShapeCode:{
    fieldLabels: {
      label: "Shape Code",
      value: "shapeCode",
    },
    description: "Code identifying the shape of a monitor location.",
    example: "ROUND",
  },
  
  monitorAttributeDTOStackHeight:{
    fieldLabels: {
      label: "Stack Height",
      value: "stackHeight",
    },
    description: "The height in feet of a stack exit above ground level.",
    example: "400",
  },
  
  monitorAttributeDTOActive:{
    fieldLabels: {
      label: "",
      value: "active",
    },
    description: "Flag for active monitor location record",
    example: "",
  },
  
  monitorDefaultDTOId:{
    fieldLabels: {
      label: "",
      value: "id",
    },
    description: "Unique identifier of a monitoring default record.",
    example: "MELISSAMAT-65FB5323A47A459B8FF3E2996EA4EB78",
  },
  
  monitorDefaultDTOLocationId:{
    fieldLabels: {
      label: "",
      value: "locationId",
    },
    description: "Unique identifier of a monitoring location record.",
    example: "5770",
  },
  
  monitorDefaultDTOUserId:{
    fieldLabels: {
      label: "",
      value: "userId",
    },
    description: "User account or source of data that added or updated record.",
    example: "abcde",
  },
  
  monitorDefaultDTOAddDate:{
    fieldLabels: {
      label: "",
      value: "addDate",
    },
    description: "Date and time in which record was added.",
    example: "4/21/2009",
  },
  
  monitorDefaultDTOUpdateDate:{
    fieldLabels: {
      label: "",
      value: "updateDate",
    },
    description: "Date and time in which record was last updated.",
    example: "4/21/2009",
  },
  
  monitorDefaultDTOParameterCode:{
    fieldLabels: {
      label: "Parameter",
      value: "parameterCode",
    },
    description: "Code used to identify the parameter.",
    example: "CO2N",
  },
  
  monitorDefaultDTODefaultValue:{
    fieldLabels: {
      label: "Default Value",
      value: "defaultValue",
    },
    description: "Value of default, maximum, minimum or constant.",
    example: "5",
  },
  
  monitorDefaultDTODefaultUnitsOfMeasureCode:{
    fieldLabels: {
      label: "Default Units of Measure",
      value: "defaultUnitsOfMeasureCode",
    },
    description: "Code used to identify the hourly parameter units of measure.",
    example: "PCT",
  },
  
  monitorDefaultDTODefaultPurposeCode:{
    fieldLabels: {
      label: "Default Purpose",
      value: "defaultPurposeCode",
    },
    description: "Code used to identify the purpose or intended use of defaults, maximums and constants.",
    example: "DC",
  },
  
  monitorDefaultDTOFuelCode:{
    fieldLabels: {
      label: "Fuel Code",
      value: "fuelCode",
    },
    description: "Code used to identify the type of fuel.",
    example: "NFS",
  },
  
  monitorDefaultDTOOperatingConditionCode:{
    fieldLabels: {
      label: "Operating Condition",
      value: "operatingConditionCode",
    },
    description: "Code used to identify the operating condition.",
    example: "A",
  },
  
  monitorDefaultDTODefaultSourceCode:{
    fieldLabels: {
      label: "Default Source",
      value: "defaultSourceCode",
    },
    description: "Code used to identify the source of the default value.",
    example: "DEF",
  },
  
  monitorDefaultDTOGroupId:{
    fieldLabels: {
      label: "Group ID",
      value: "groupId",
    },
    description: "For a group of identical units using testing to determine default NOx rate, this ID identifies the group.",
    example: "NULL",
  },
  
  monitorDefaultDTOBeginDate:{
    fieldLabels: {
      label: "Begin Date",
      value: "beginDate",
    },
    description: "Date on which information became effective or activity started.",
    example: "1/1/2008",
  },
  
  monitorDefaultDTOBeginHour:{
    fieldLabels: {
      label: "Begin Hour",
      value: "beginHour",
    },
    description: "Hour in which information became effective.",
    example: "0",
  },
  
  monitorDefaultDTOEndDate:{
    fieldLabels: {
      label: "End Date",
      value: "endDate",
    },
    description: "Last date in which information was effective.  This date will be null for active records.",
    example: "NULL",
  },
  
  monitorDefaultDTOEndHour:{
    fieldLabels: {
      label: "End Hour",
      value: "endHour",
    },
    description: "Last hour in which information was effective.  This value will be null for active records.",
    example: "NULL",
  },
  
  monitorDefaultDTOActive:{
    fieldLabels: {
      label: "",
      value: "active",
    },
    description: "Flag for active monitor location record",
    example: "",
  },
  
  monitorFormulaDTOId:{
    fieldLabels: {
      label: "",
      value: "id",
    },
    description: "Unique identifier of a monitoring formula record.",
    example: "CAMD-1CDAA10B7D6A41BBA6BCFF5534F5C5CA",
  },
  
  monitorFormulaDTOLocationId:{
    fieldLabels: {
      label: "",
      value: "locationId",
    },
    description: "Unique identifier of a monitoring location record.",
    example: "5770",
  },
  
  monitorFormulaDTOUserId:{
    fieldLabels: {
      label: "",
      value: "userId",
    },
    description: "User account or source of data that added or updated record.",
    example: "abcde",
  },
  
  monitorFormulaDTOAddDate:{
    fieldLabels: {
      label: "",
      value: "addDate",
    },
    description: "Date and time in which record was added.",
    example: "2/20/2009",
  },
  
  monitorFormulaDTOUpdateDate:{
    fieldLabels: {
      label: "",
      value: "updateDate",
    },
    description: "Date and time in which record was last updated.",
    example: "NULL",
  },
  
  monitorFormulaDTOFormulaId:{
    fieldLabels: {
      label: "Formula ID",
      value: "formulaId",
    },
    description: "The three character formula ID assigned by the source.",
    example: "16",
  },
  
  monitorFormulaDTOParameterCode:{
    fieldLabels: {
      label: "Parameter ",
      value: "parameterCode",
    },
    description: "Code used to identify the parameter.",
    example: "SO2",
  },
  
  monitorFormulaDTOFormulaCode:{
    fieldLabels: {
      label: "Formula Code",
      value: "formulaCode",
    },
    description: "Code used to identify the equation as defined in Part 75.",
    example: "F-1",
  },
  
  monitorFormulaDTOFormulaText:{
    fieldLabels: {
      label: "Formula Text",
      value: "formulaText",
    },
    description: "The equation used to calculate the parameter.",
    example: "1.667 * 10**-7 * S#(027-C40) * S#(029-C42)",
  },
  
  monitorFormulaDTOBeginDate:{
    fieldLabels: {
      label: "Begin Date",
      value: "beginDate",
    },
    description: "Date on which information became effective or activity started.",
    example: "11/8/2007",
  },
  
  monitorFormulaDTOBeginHour:{
    fieldLabels: {
      label: "Begin Hour",
      value: "beginHour",
    },
    description: "Hour in which information became effective.",
    example: "17",
  },
  
  monitorFormulaDTOEndDate:{
    fieldLabels: {
      label: "End Date",
      value: "endDate",
    },
    description: "Last date in which information was effective.  This date will be null for active records.",
    example: "NULL",
  },
  
  monitorFormulaDTOEndHour:{
    fieldLabels: {
      label: "End Hour",
      value: "endHour",
    },
    description: "Last hour in which information was effective.  This value will be null for active records.",
    example: "NULL",
  },
  
  monitorFormulaDTOActive:{
    fieldLabels: {
      label: "",
      value: "active",
    },
    description: "Flag for active monitor location record",
    example: "",
  },
  
  monitorLoadDTOId:{
    fieldLabels: {
      label: "",
      value: "id",
    },
    description: "Unique identifier of a monitoring load record.",
    example: "MRHODES16-A1EAFB506CA8442D843275B667DD3C53",
  },
  
  monitorLoadDTOLocationId:{
    fieldLabels: {
      label: "",
      value: "locationId",
    },
    description: "Unique identifier of a monitoring location record.",
    example: "5770",
  },
  
  monitorLoadDTOUserId:{
    fieldLabels: {
      label: "",
      value: "userId",
    },
    description: "User account or source of data that added or updated record.",
    example: "abcde",
  },
  
  monitorLoadDTOAddDate:{
    fieldLabels: {
      label: "",
      value: "addDate",
    },
    description: "Date and time in which record was added.",
    example: "11/12/2019",
  },
  
  monitorLoadDTOUpdateDate:{
    fieldLabels: {
      label: "",
      value: "updateDate",
    },
    description: "Date and time in which record was last updated.",
    example: "null",
  },
  
  monitorLoadDTOMaximumLoadValue:{
    fieldLabels: {
      label: "Max Load Value",
      value: "maximumLoadValue",
    },
    description: "Maximum hourly gross load.",
    example: "353",
  },
  
  monitorLoadDTOMaximumLoadUnitsOfMeasureCode:{
    fieldLabels: {
      label: "Max Load Units of Measure",
      value: "maximumLoadUnitsOfMeasureCode",
    },
    description: "Code used to identify the units of measure for maximum load value",
    example: "MW",
  },
  
  monitorLoadDTOLowerOperationBoundary:{
    fieldLabels: {
      label: "Lower Operation Boundary",
      value: "lowerOperationBoundary",
    },
    description: "Lower boundary of range of operation.",
    example: "145",
  },
  
  monitorLoadDTOUpperOperationBoundary:{
    fieldLabels: {
      label: "Upper Operation Boundary",
      value: "upperOperationBoundary",
    },
    description: "Upper boundary of range of operation.",
    example: "301",
  },
  
  monitorLoadDTONormalLevelCode:{
    fieldLabels: {
      label: "Normal Level ",
      value: "normalLevelCode",
    },
    description: "Code used to identify the normal load or operating level.",
    example: "L",
  },
  
  monitorLoadDTOSecondLevelCode:{
    fieldLabels: {
      label: "Second Level",
      value: "secondLevelCode",
    },
    description: "Code used to identify the second most frequently used load or operating level.",
    example: "M",
  },
  
  monitorLoadDTOSecondNormalIndicator:{
    fieldLabels: {
      label: "Second Normal Indicator",
      value: "secondNormalIndicator",
    },
    description: "Used to indicate the reporting of an additional normal load or a second operating level.",
    example: "1",
  },
  
  monitorLoadDTOLoadAnalysisDate:{
    fieldLabels: {
      label: "Load Analysis Date",
      value: "loadAnalysisDate",
    },
    description: "The date in which load analysis was performed.  This date only applies to CEM and Appendix D locations.",
    example: "10/31/2018",
  },
  
  monitorLoadDTOBeginDate:{
    fieldLabels: {
      label: "Begin Date",
      value: "beginDate",
    },
    description: "Date on which information became effective or activity started.",
    example: "10/31/2018",
  },
  
  monitorLoadDTOBeginHour:{
    fieldLabels: {
      label: "Begin Hour",
      value: "beginHour",
    },
    description: "Hour in which information became effective.",
    example: "23",
  },
  
  monitorLoadDTOEndDate:{
    fieldLabels: {
      label: "End Date",
      value: "endDate",
    },
    description: "Last date in which information was effective.  This date will be null for active records.",
    example: "10/30/2019",
  },
  
  monitorLoadDTOEndHour:{
    fieldLabels: {
      label: "End Hour",
      value: "endHour",
    },
    description: "Last hour in which information was effective.  This value will be null for active records.",
    example: "23",
  },
  
  monitorLoadDTOActive:{
    fieldLabels: {
      label: "",
      value: "active",
    },
    description: "Flag for active monitor location record",
    example: "",
  },
  
  monitorMethodDTOId:{
    fieldLabels: {
      label: "",
      value: "id",
    },
    description: "Unique identifier of a monitoring method record.",
    example: "MELISSAMAT-7BA7D94FDB4F4D4A8E1161E4B46150F6",
  },
  
  monitorMethodDTOLocationId:{
    fieldLabels: {
      label: "",
      value: "locationId",
    },
    description: "Unique identifier of a monitoring location record.",
    example: "5770",
  },
  
  monitorMethodDTOUserId:{
    fieldLabels: {
      label: "",
      value: "userId",
    },
    description: "User account or source of data that added or updated record.",
    example: "abcde",
  },
  
  monitorMethodDTOAddDate:{
    fieldLabels: {
      label: "",
      value: "addDate",
    },
    description: "Date and time in which record was added.",
    example: "4/21/2009",
  },
  
  monitorMethodDTOUpdateDate:{
    fieldLabels: {
      label: "",
      value: "updateDate",
    },
    description: "Date and time in which record was last updated.",
    example: "null",
  },
  
  monitorMethodDTOParameterCode:{
    fieldLabels: {
      label: "Parameter",
      value: "parameterCode",
    },
    description: "Code used to identify the parameter.",
    example: "SO2",
  },
  
  monitorMethodDTOMonitoringMethodCode:{
    fieldLabels: {
      label: "Methodology",
      value: "monitoringMethodCode",
    },
    description: "Code used to identify the monitoring methodology.",
    example: "CEM",
  },
  
  monitorMethodDTOSubstituteDataCode:{
    fieldLabels: {
      label: "Substitute Data",
      value: "substituteDataCode",
    },
    description: "Code used to identify the substitute data approach type.",
    example: "SPTS",
  },
  
  monitorMethodDTOBypassApproachCode:{
    fieldLabels: {
      label: "Bypass Approach",
      value: "bypassApproachCode",
    },
    description: "Code used to identify the value to be used for an unmonitored bypass stack.",
    example: "null",
  },
  
  monitorMethodDTOBeginDate:{
    fieldLabels: {
      label: "Begin Date",
      value: "beginDate",
    },
    description: "Date on which information became effective or activity started.",
    example: "11/28/2007",
  },
  
  monitorMethodDTOBeginHour:{
    fieldLabels: {
      label: "Begin Hour",
      value: "beginHour",
    },
    description: "Hour in which information became effective.",
    example: "17",
  },
  
  monitorMethodDTOEndDate:{
    fieldLabels: {
      label: "End Date",
      value: "endDate",
    },
    description: "Last date in which information was effective.  This date will be null for active records.",
    example: "null",
  },
  
  monitorMethodDTOEndHour:{
    fieldLabels: {
      label: "End Hour",
      value: "endHour",
    },
    description: "Last hour in which information was effective.  This value will be null for active records.",
    example: "null",
  },
  
  monitorMethodDTOActive:{
    fieldLabels: {
      label: "",
      value: "active",
    },
    description: "Flag for active monitor location record",
    example: "",
  },
  
  monitorPlanCommentDTOId:{
    fieldLabels: {
      label: "",
      value: "id",
    },
    description: "Unique identifier of a monitoring plan comment record.",
    example: "V-APPWORK--66020554D3C844E78730052AC3808151",
  },
  
  monitorPlanCommentDTOPlanId:{
    fieldLabels: {
      label: "",
      value: "planId",
    },
    description: "Unique identifier of a monitoring plan record.",
    example: "MDC-2483BA898490441B97B7D7CFB1BE6D9A",
  },
  
  monitorPlanCommentDTOUserId:{
    fieldLabels: {
      label: "",
      value: "userId",
    },
    description: "User account or source of data that added or updated record.",
    example: "abcde",
  },
  
  monitorPlanCommentDTOAddDate:{
    fieldLabels: {
      label: "",
      value: "addDate",
    },
    description: "Date and time in which record was added.",
    example: "9/8/2021",
  },
  
  monitorPlanCommentDTOUpdateDate:{
    fieldLabels: {
      label: "",
      value: "updateDate",
    },
    description: "Date and time in which record was last updated.",
    example: "null",
  },
  
  monitorPlanCommentDTOMonitoringPlanComment:{
    fieldLabels: {
      label: "Comment",
      value: "monitoringPlanComment",
    },
    description: "Comment on a monitoring plan",
    example: "DAHS was updated for GT-1 on 11/10/2016 by a previous owner, but the component ID was not updated on the gas system. This was corrected on 9/8/2021.",
  },
  
  monitorPlanCommentDTOBeginDate:{
    fieldLabels: {
      label: "Begin Date",
      value: "beginDate",
    },
    description: "Date and time in which an activity started or ended.",
    example: "9/8/2021",
  },
  
  monitorPlanCommentDTOEndDate:{
    fieldLabels: {
      label: "End Date",
      value: "endDate",
    },
    description: "Last date in which information was effective.  This date will be null for active records.",
    example: "9/8/2021",
  },
  
  monitorPlanCommentDTOActive:{
    fieldLabels: {
      label: "",
      value: "active",
    },
    description: "Flag for active monitor location record",
    example: "",
  },
  
  monitorQualificationDTOId:{
    fieldLabels: {
      label: "",
      value: "id",
    },
    description: "Unique identifier of a monitoring qualification record.",
    example: "NJCHQLAPA3-82CD1A0A9D2A48BFB5203F82D390183E",
  },
  
  monitorQualificationDTOLocationId:{
    fieldLabels: {
      label: "",
      value: "locationId",
    },
    description: "Unique identifier of a monitoring location record.",
    example: "4168",
  },
  
  monitorQualificationDTOUserId:{
    fieldLabels: {
      label: "",
      value: "userId",
    },
    description: "User account or source of data that added or updated record.",
    example: "abcde",
  },
  
  monitorQualificationDTOAddDate:{
    fieldLabels: {
      label: "",
      value: "addDate",
    },
    description: "Date and time in which record was added.",
    example: "7/20/2018",
  },
  
  monitorQualificationDTOUpdateDate:{
    fieldLabels: {
      label: "",
      value: "updateDate",
    },
    description: "Date and time in which record was last updated.",
    example: "4/14/2020",
  },
  
  monitorQualificationDTOQualificationTypeCode:{
    fieldLabels: {
      label: "Qualification Type",
      value: "qualificationTypeCode",
    },
    description: "Code used to identify the qualification type.",
    example: "lMES",
  },
  
  monitorQualificationDTOBeginDate:{
    fieldLabels: {
      label: "Begin Date",
      value: "beginDate",
    },
    description: "Date on which information became effective or activity started.",
    example: "5/1/2018",
  },
  
  monitorQualificationDTOEndDate:{
    fieldLabels: {
      label: "End Date",
      value: "endDate",
    },
    description: "Last date in which information was effective.  This date will be null for active records.",
    example: "2019-04-31",
  },
  
  monitorQualificationDTOActive:{
    fieldLabels: {
      label: "",
      value: "active",
    },
    description: "Flag for active monitor location record",
    example: "",
  },
  
  lEEQualificationDTOId:{
    fieldLabels: {
      label: "",
      value: "id",
    },
    description: "Unique identifier of a monitoring qualification LEE record.",
    example: "MIKE-DELL-CFEDE4EB21124391BE13E7FB5A56081C",
  },
  
  lEEQualificationDTOQualificationId:{
    fieldLabels: {
      label: "",
      value: "qualificationId",
    },
    description: "Unique identifier of a monitoring qualification record.",
    example: "MIKE-DELL-E4CE3931A24E4C1395B3C81457B300CC",
  },
  
  lEEQualificationDTOUserId:{
    fieldLabels: {
      label: "",
      value: "userId",
    },
    description: "User account or source of data that added or updated record.",
    example: "abcde",
  },
  
  lEEQualificationDTOAddDate:{
    fieldLabels: {
      label: "",
      value: "addDate",
    },
    description: "Date and time in which record was added.",
    example: "10/25/2018",
  },
  
  lEEQualificationDTOUpdateDate:{
    fieldLabels: {
      label: "",
      value: "updateDate",
    },
    description: "Date and time in which record was last updated.",
    example: "null",
  },
  
  lEEQualificationDTOQualificationTestDate:{
    fieldLabels: {
      label: "Qualification Test Date",
      value: "qualificationTestDate",
    },
    description: "End date of the initial LEE qualifying test or a retest.",
    example: "7/15/2018",
  },
  
  lEEQualificationDTOParameterCode:{
    fieldLabels: {
      label: "Parameter Code",
      value: "parameterCode",
    },
    description: "Parameter code associated with the LEE qualification.",
    example: "HG",
  },
  
  lEEQualificationDTOQualificationTestType:{
    fieldLabels: {
      label: "Qualification Test Type",
      value: "qualificationTestType",
    },
    description: "Indication of whether the qualifying test was an initial test or retest.",
    example: "INITIAL",
  },
  
  lEEQualificationDTOPotentialAnnualMassEmissions:{
    fieldLabels: {
      label: "Potential Annual Hg Mass Emissions",
      value: "potentialAnnualMassEmissions",
    },
    description: "Potential annual mass emissions used for LEE qualification.",
    example: "null",
  },
  
  lEEQualificationDTOApplicableEmissionStandard:{
    fieldLabels: {
      label: "Applicable Emission Standard",
      value: "applicableEmissionStandard",
    },
    description: "Applicable Emission Standard used for LEE qualification.",
    example: "29",
  },
  
  lEEQualificationDTOUnitsOfStandard:{
    fieldLabels: {
      label: "Unit of Standard",
      value: "unitsOfStandard",
    },
    description: "units of the Applicable Emission Standard.",
    example: "LBGWH",
  },
  
  lEEQualificationDTOPercentageOfEmissionStandard:{
    fieldLabels: {
      label: "Percentage of Emission Standard",
      value: "percentageOfEmissionStandard",
    },
    description: "Result of initial test or retest as a percentage of the Applicable Emission Standard.",
    example: "72.8",
  },
  
  lMEQualificationDTOId:{
    fieldLabels: {
      label: "",
      value: "id",
    },
    description: "Unique identifier of a monitoring qualification LME record.",
    example: "NJCHQLAPA3-C89F6E1CE9D447A298B7D5E428ADD1AC",
  },
  
  lMEQualificationDTOQualificationId:{
    fieldLabels: {
      label: "",
      value: "qualificationId",
    },
    description: "Unique identifier of a monitoring qualification record.",
    example: "NJCHQLAPA3-82CD1A0A9D2A48BFB5203F82D390183E",
  },
  
  lMEQualificationDTOUserId:{
    fieldLabels: {
      label: "",
      value: "userId",
    },
    description: "User account or source of data that added or updated record.",
    example: "abcde",
  },
  
  lMEQualificationDTOAddDate:{
    fieldLabels: {
      label: "",
      value: "addDate",
    },
    description: "Date and time in which record was added.",
    example: "7/20/2018",
  },
  
  lMEQualificationDTOUpdateDate:{
    fieldLabels: {
      label: "",
      value: "updateDate",
    },
    description: "Date and time in which record was last updated.",
    example: "null",
  },
  
  lMEQualificationDTOQualificationDataYear:{
    fieldLabels: {
      label: "Qualification Data Year",
      value: "qualificationDataYear",
    },
    description: "Year corresponding to the qualification data.",
    example: "2015",
  },
  
  lMEQualificationDTOOperatingHours:{
    fieldLabels: {
      label: "Operating Hours",
      value: "operatingHours",
    },
    description: "Annual number of operating hours used to determine qualification.",
    example: "105",
  },
  
  lMEQualificationDTOSo2Tons:{
    fieldLabels: {
      label: "SO2 Tons",
      value: "so2Tons",
    },
    description: "Annual SO2 value used to determine qualification.",
    example: "",
  },
  
  lMEQualificationDTONoxTons:{
    fieldLabels: {
      label: "NOx Tons",
      value: "noxTons",
    },
    description: "Annual NOX emissions to determine qualification.",
    example: "6.4",
  },
  
  pCTQualificationDTOId:{
    fieldLabels: {
      label: "",
      value: "id",
    },
    description: "Unique identifier of a monitoring qualification percentage record.",
    example: "02227-BSGR-56EB0D4D400642A4860D6402698BBE16",
  },
  
  pCTQualificationDTOQualificationId:{
    fieldLabels: {
      label: "",
      value: "qualificationId",
    },
    description: "Unique identifier of a monitoring qualification record.",
    example: "02022-614W-608B84AEDB8148C7B3935EE935AB835F",
  },
  
  pCTQualificationDTOUserId:{
    fieldLabels: {
      label: "",
      value: "userId",
    },
    description: "User account or source of data that added or updated record.",
    example: "abcde",
  },
  
  pCTQualificationDTOAddDate:{
    fieldLabels: {
      label: "",
      value: "addDate",
    },
    description: "Date and time in which record was added.",
    example: "4/29/2021",
  },
  
  pCTQualificationDTOUpdateDate:{
    fieldLabels: {
      label: "",
      value: "updateDate",
    },
    description: "Date and time in which record was last updated.",
    example: "null",
  },
  
  pCTQualificationDTOQualificationYear:{
    fieldLabels: {
      label: "Qualification Year",
      value: "qualificationYear",
    },
    description: "The average percent capacity or heat input usage.",
    example: "2021",
  },
  
  pCTQualificationDTOAveragePercentValue:{
    fieldLabels: {
      label: "Average Percentage Value",
      value: "averagePercentValue",
    },
    description: "Year corresponding to the qualification data.",
    example: "100",
  },
  
  pCTQualificationDTOYr1QualificationDataYear:{
    fieldLabels: {
      label: "Year 1 Qualification Data Year",
      value: "yr1QualificationDataYear",
    },
    description: "The first year corresponding to the qualification data.",
    example: "2018",
  },
  
  pCTQualificationDTOYr1QualificationDataTypeCode:{
    fieldLabels: {
      label: "Year 1 Qualification Data Type",
      value: "yr1QualificationDataTypeCode",
    },
    description: "Code used to identify the type qualification in the first year.",
    example: "A",
  },
  
  pCTQualificationDTOYr1PercentageValue:{
    fieldLabels: {
      label: "Year 1 Percentage Value",
      value: "yr1PercentageValue",
    },
    description: "The percent capacity or heat input usage in the first year.",
    example: "100",
  },
  
  pCTQualificationDTOYr2QualificationDataYear:{
    fieldLabels: {
      label: "Year 2 Qualification Data Year",
      value: "yr2QualificationDataYear",
    },
    description: "The second year corresponding to the qualification data.",
    example: "2019",
  },
  
  pCTQualificationDTOYr2QualificationDataTypeCode:{
    fieldLabels: {
      label: "Year 2 Qualification Data Type",
      value: "yr2QualificationDataTypeCode",
    },
    description: "Code used to identify the type qualification in the second year.",
    example: "A",
  },
  
  pCTQualificationDTOYr2PercentageValue:{
    fieldLabels: {
      label: "Year 2 Percentage Value",
      value: "yr2PercentageValue",
    },
    description: "The percent capacity or heat input usage in the second year.",
    example: "100",
  },
  
  pCTQualificationDTOYr3QualificationDataYear:{
    fieldLabels: {
      label: "Year 3 Qualification Data Year",
      value: "yr3QualificationDataYear",
    },
    description: "The third year corresponding to the qualification data.",
    example: "2020",
  },
  
  pCTQualificationDTOYr3QualificationDataTypeCode:{
    fieldLabels: {
      label: "Year 3 Qualification Data Type",
      value: "yr3QualificationDataTypeCode",
    },
    description: "Code used to indicate type of data for year (actual or projected) used to determine peaking or gas-fired qualification.",
    example: "A",
  },
  
  pCTQualificationDTOYr3PercentageValue:{
    fieldLabels: {
      label: "Year 3 Percentage Value",
      value: "yr3PercentageValue",
    },
    description: "The percent capacity or heat input usage in the third year.",
    example: "100",
  },
  
  monitorSpanDTOId:{
    fieldLabels: {
      label: "",
      value: "id",
    },
    description: "Unique identifier of a monitoring span record.",
    example: "MRHODES16-A5DBB8DF4F1D4D3A95AD2553008EB554",
  },
  
  monitorSpanDTOLocationId:{
    fieldLabels: {
      label: "",
      value: "locationId",
    },
    description: "Unique identifier of a monitoring location record.",
    example: "5770",
  },
  
  monitorSpanDTOUserid:{
    fieldLabels: {
      label: "",
      value: "userid",
    },
    description: "User account or source of data that added or updated record.",
    example: "abcde",
  },
  
  monitorSpanDTOAddDate:{
    fieldLabels: {
      label: "",
      value: "addDate",
    },
    description: "Date and time in which record was added.",
    example: "5/21/2018",
  },
  
  monitorSpanDTOUpdateDate:{
    fieldLabels: {
      label: "",
      value: "updateDate",
    },
    description: "Date and time in which record was last updated.",
    example: "null",
  },
  
  monitorSpanDTOComponentTypeCode:{
    fieldLabels: {
      label: "Component Type",
      value: "componentTypeCode",
    },
    description: "Code used to indicate the component type.",
    example: "SO2",
  },
  
  monitorSpanDTOSpanScaleCode:{
    fieldLabels: {
      label: "Span Scale",
      value: "spanScaleCode",
    },
    description: "Code used to identify the span scale.",
    example: "H",
  },
  
  monitorSpanDTOSpanMethodCode:{
    fieldLabels: {
      label: "Span Method",
      value: "spanMethodCode",
    },
    description: "Code used to identify the method used to calculate MPC/MEC/MPF.",
    example: "HD",
  },
  
  monitorSpanDTOMecValue:{
    fieldLabels: {
      label: "MEC Value",
      value: "mecValue",
    },
    description: "Maximum expected concentration (MEC).",
    example: "100",
  },
  
  monitorSpanDTOMpcValue:{
    fieldLabels: {
      label: "MPC Value",
      value: "mpcValue",
    },
    description: "Maximum potential concentration (MPC).",
    example: "1200",
  },
  
  monitorSpanDTOMpfValue:{
    fieldLabels: {
      label: "MPF Value",
      value: "mpfValue",
    },
    description: "Maximum Potential Flow (MPF).",
    example: "null",
  },
  
  monitorSpanDTOSpanValue:{
    fieldLabels: {
      label: "Span Value Value",
      value: "spanValue",
    },
    description: "Span value in units of daily calibration.",
    example: "1200",
  },
  
  monitorSpanDTOFullScaleRange:{
    fieldLabels: {
      label: "Full Scale Range",
      value: "fullScaleRange",
    },
    description: "Full scale range in units of daily calibration.",
    example: "1200",
  },
  
  monitorSpanDTOSpanUnitsOfMeasureCode:{
    fieldLabels: {
      label: "Span Unit of Measure",
      value: "spanUnitsOfMeasureCode",
    },
    description: "Code used to identify the calibration units of measure.",
    example: "PPM",
  },
  
  monitorSpanDTODefaultHighRange:{
    fieldLabels: {
      label: "Default High Range",
      value: "defaultHighRange",
    },
    description: "Default High Range value.",
    example: "null",
  },
  
  monitorSpanDTOFlowSpanValue:{
    fieldLabels: {
      label: "Flow Span Value",
      value: "flowSpanValue",
    },
    description: "Flow rate span value in scfh.",
    example: "null",
  },
  
  monitorSpanDTOFlowFullScaleRange:{
    fieldLabels: {
      label: "Flow Full Range",
      value: "flowFullScaleRange",
    },
    description: "Flow rate full scale value in scfh.",
    example: "null",
  },
  
  monitorSpanDTOBeginDate:{
    fieldLabels: {
      label: "Begin Date",
      value: "beginDate",
    },
    description: "Date on which information became effective or activity started.",
    example: "5/17/2018",
  },
  
  monitorSpanDTOBeginHour:{
    fieldLabels: {
      label: "Begin Hour",
      value: "beginHour",
    },
    description: "Hour in which information became effective.",
    example: "14",
  },
  
  monitorSpanDTOEndDate:{
    fieldLabels: {
      label: "End Date",
      value: "endDate",
    },
    description: "Last date in which information was effective.  This date will be null for active records.",
    example: "null",
  },
  
  monitorSpanDTOEndHour:{
    fieldLabels: {
      label: "End Hour",
      value: "endHour",
    },
    description: "Last hour in which information was effective.  This value will be null for active records.",
    example: "null",
  },
  
  monitorSpanDTOActive:{
    fieldLabels: {
      label: "",
      value: "active",
    },
    description: "Flag for active monitor location record",
    example: "",
  },
  
  monitorSystemDTOId:{
    fieldLabels: {
      label: "",
      value: "id",
    },
    description: "Unique identifier of a monitoring system record.",
    example: "CAMD-4B0DC37051224A7AA9D8CA1E5BE6B4D4",
  },
  
  monitorSystemDTOLocationId:{
    fieldLabels: {
      label: "",
      value: "locationId",
    },
    description: "Unique identifier of a monitoring location record.",
    example: "5770",
  },
  
  monitorSystemDTOUserId:{
    fieldLabels: {
      label: "",
      value: "userId",
    },
    description: "User account or source of data that added or updated record.",
    example: "abcde",
  },
  
  monitorSystemDTOAddDate:{
    fieldLabels: {
      label: "",
      value: "addDate",
    },
    description: "Date and time in which record was added.",
    example: "2/20/2009",
  },
  
  monitorSystemDTOUpdateDate:{
    fieldLabels: {
      label: "",
      value: "updateDate",
    },
    description: "Date and time in which record was last updated.",
    example: "null",
  },
  
  monitorSystemDTOMonitoringSystemId:{
    fieldLabels: {
      label: "system ID",
      value: "monitoringSystemId",
    },
    description: "The three digit code used by the source to identify the monitoring system.",
    example: "C42",
  },
  
  monitorSystemDTOSystemTypeCode:{
    fieldLabels: {
      label: "system Type",
      value: "systemTypeCode",
    },
    description: "Code used to identify the type (parameter) of the system.",
    example: "FLOW",
  },
  
  monitorSystemDTOSystemDesignationCode:{
    fieldLabels: {
      label: "system Designation",
      value: "systemDesignationCode",
    },
    description: "Code used to indicate designation of monitoring system as primary, backup etc.",
    example: "P",
  },
  
  monitorSystemDTOFuelCode:{
    fieldLabels: {
      label: "Fuel Code",
      value: "fuelCode",
    },
    description: "Code used to identify the type of fuel.",
    example: "NFS",
  },
  
  monitorSystemDTOBeginDate:{
    fieldLabels: {
      label: "Begin Date",
      value: "beginDate",
    },
    description: "Date on which information became effective or activity started.",
    example: "11/28/2007",
  },
  
  monitorSystemDTOBeginHour:{
    fieldLabels: {
      label: "Begin Hour",
      value: "beginHour",
    },
    description: "Hour in which information became effective or activity started.",
    example: "17",
  },
  
  monitorSystemDTOEndDate:{
    fieldLabels: {
      label: "End Date",
      value: "endDate",
    },
    description: "Last date in which information was effective.  This date will be null for active records.",
    example: "null",
  },
  
  monitorSystemDTOEndHour:{
    fieldLabels: {
      label: "End Hour",
      value: "endHour",
    },
    description: "Last hour in which information was effective.  This value will be null for active records.",
    example: "null",
  },
  
  monitorSystemDTOActive:{
    fieldLabels: {
      label: "",
      value: "active",
    },
    description: "Flag for active monitor location record",
    example: "",
  },
  
  systemComponentDTOId:{
    fieldLabels: {
      label: "",
      value: "id",
    },
    description: "Unique identifier of a Monitoring System Component record.",
    example: "MELISSARHO-3F31E53DE9B14764936BFB0AC7225847",
  },
  
  systemComponentDTOLocationId:{
    fieldLabels: {
      label: "",
      value: "locationId",
    },
    description: "Unique identifier of a monitoring location record.",
    example: "5770",
  },
  
  systemComponentDTOMonitoringSystemRecordId:{
    fieldLabels: {
      label: "",
      value: "monitoringSystemRecordId",
    },
    description: "Unique identifier of a monitoring system record.",
    example: "CAMD-4B0DC37051224A7AA9D8CA1E5BE6B4D4",
  },
  
  systemComponentDTOComponentRecordId:{
    fieldLabels: {
      label: "",
      value: "componentRecordId",
    },
    description: "Unique identifier of a monitoring component record.",
    example: "MELISSARHO-58F5F687BFDB4BD7AD49046386B13ABE",
  },
  
  systemComponentDTOUserId:{
    fieldLabels: {
      label: "",
      value: "userId",
    },
    description: "User account or source of data that added or updated record.",
    example: "abcde",
  },
  
  systemComponentDTOAddDate:{
    fieldLabels: {
      label: "",
      value: "addDate",
    },
    description: "Date and time in which record was added.",
    example: "5/27/2015",
  },
  
  systemComponentDTOUpdateDate:{
    fieldLabels: {
      label: "",
      value: "updateDate",
    },
    description: "Date and time in which record was last updated.",
    example: "null",
  },
  
  systemComponentDTOBeginDate:{
    fieldLabels: {
      label: "Begin Date",
      value: "beginDate",
    },
    description: "Date on which information became effective or activity started.",
    example: "5/21/2015",
  },
  
  systemComponentDTOBeginHour:{
    fieldLabels: {
      label: "Begin Hour",
      value: "beginHour",
    },
    description: "Hour in which information became effective.",
    example: "9",
  },
  
  systemComponentDTOEndDate:{
    fieldLabels: {
      label: "End Date",
      value: "endDate",
    },
    description: "Last date in which information was effective.  This date will be null for active records.",
    example: "null",
  },
  
  systemComponentDTOEndHour:{
    fieldLabels: {
      label: "End Hour",
      value: "endHour",
    },
    description: "Last hour in which information was effective.  This value will be null for active records.",
    example: "null",
  },
  
  systemComponentDTOComponentId:{
    fieldLabels: {
      label: "Component ID",
      value: "componentId",
    },
    description: "The three digit code assigned by the source to identify the component.",
    example: "044",
  },
  
  systemComponentDTOComponentTypeCode:{
    fieldLabels: {
      label: "Component Type",
      value: "componentTypeCode",
    },
    description: "Code used to identify the component type.",
    example: "DL",
  },
  
  systemComponentDTOSampleAcquisitionMethodCode:{
    fieldLabels: {
      label: "Sample Acquisition Method",
      value: "sampleAcquisitionMethodCode",
    },
    description: "Code used to identify the sample acquisition method.",
    example: "null",
  },
  
  systemComponentDTOBasisCode:{
    fieldLabels: {
      label: "Basis Code",
      value: "basisCode",
    },
    description: "Code used to identify the moisture basis.",
    example: "null",
  },
  
  systemComponentDTOManufacturer:{
    fieldLabels: {
      label: "Manufacturer",
      value: "manufacturer",
    },
    description: "Name of the manufacturer or developer of the component.",
    example: "ESC",
  },
  
  systemComponentDTOModelVersion:{
    fieldLabels: {
      label: "Model Version",
      value: "modelVersion",
    },
    description: "The model of any hardware component or the version number of the software component.",
    example: "8864",
  },
  
  systemComponentDTOSerialNumber:{
    fieldLabels: {
      label: "Serial Number",
      value: "serialNumber",
    },
    description: "Serial number of the component.",
    example: "321",
  },
  
  systemComponentDTOHgConverterIndicator:{
    fieldLabels: {
      label: "Hg Converter Indicator",
      value: "hgConverterIndicator",
    },
    description: "For an Hg component, indicates whether the analyzer has a converter.",
    example: "null",
  },
  
  systemComponentDTOActive:{
    fieldLabels: {
      label: "",
      value: "active",
    },
    description: "Flag for active monitor location record",
    example: "",
  },
  
  systemFuelFlowDTOId:{
    fieldLabels: {
      label: "",
      value: "id",
    },
    description: "Unique identifier of a system fuel flow record.",
    example: "WS150071-0C5A8F50F7F24DB8B73E65C18C2063E3",
  },
  
  systemFuelFlowDTOMonitoringSystemRecordId:{
    fieldLabels: {
      label: "",
      value: "monitoringSystemRecordId",
    },
    description: "Unique identifier of a monitoring system record.",
    example: "WS150071-1BCDEDC4D2944376ACA55FCABE9D60A1",
  },
  
  systemFuelFlowDTOUserId:{
    fieldLabels: {
      label: "",
      value: "userId",
    },
    description: "User account or source of data that added or updated record.",
    example: "abcde",
  },
  
  systemFuelFlowDTOAddDate:{
    fieldLabels: {
      label: "",
      value: "addDate",
    },
    description: "Date and time in which record was added.",
    example: "6/26/2009",
  },
  
  systemFuelFlowDTOUpdateDate:{
    fieldLabels: {
      label: "",
      value: "updateDate",
    },
    description: "Date and time in which record was last updated.",
    example: "2/9/2010",
  },
  
  systemFuelFlowDTOMaximumFuelFlowRate:{
    fieldLabels: {
      label: "Max  Fuel Rate",
      value: "maximumFuelFlowRate",
    },
    description: "Maximum fuel flow rate.",
    example: "30667",
  },
  
  systemFuelFlowDTOSystemFuelFlowUOMCode:{
    fieldLabels: {
      label: "system Fuel Flow Units of Measure",
      value: "systemFuelFlowUOMCode",
    },
    description: "Code used to identify the fuel flow units of measure.",
    example: "HSCF",
  },
  
  systemFuelFlowDTOMaximumFuelFlowRateSourceCode:{
    fieldLabels: {
      label: "Max  Fuel Flow Rate Source",
      value: "maximumFuelFlowRateSourceCode",
    },
    description: "Code used to identify the source of maximum fuel flow.",
    example: "URV",
  },
  
  systemFuelFlowDTOBeginDate:{
    fieldLabels: {
      label: "Begin Date",
      value: "beginDate",
    },
    description: "Date on which information became effective or activity started.",
    example: "9/10/2009",
  },
  
  systemFuelFlowDTOBeginHour:{
    fieldLabels: {
      label: "Begin Hour",
      value: "beginHour",
    },
    description: "Hour in which information became effective.",
    example: "0",
  },
  
  systemFuelFlowDTOEndDate:{
    fieldLabels: {
      label: "End Date",
      value: "endDate",
    },
    description: "Last date in which information was effective.  This date will be null for active records.",
    example: "null",
  },
  
  systemFuelFlowDTOEndHour:{
    fieldLabels: {
      label: "End Hour",
      value: "endHour",
    },
    description: "Last hour in which information was effective or hour in which activity ended. This value will be null for active records.",
    example: "null",
  },
  
  systemFuelFlowDTOFuelCode:{
    fieldLabels: {
      label: "Fuel Code",
      value: "fuelCode",
    },
    description: "The type of fuel measured by the system.",
    example: "PNG",
  },
  
  systemFuelFlowDTOSystemTypeCode:{
    fieldLabels: {
      label: "system Type",
      value: "systemTypeCode",
    },
    description: "Code used to identify the type (parameter) of the system.",
    example: "GAS",
  },
  
  systemFuelFlowDTOActive:{
    fieldLabels: {
      label: "",
      value: "active",
    },
    description: "Flag for active monitor location record",
    example: "",
  },
  
  unitCapacityDTOId:{
    fieldLabels: {
      label: "",
      value: "id",
    },
    description: "Identity key for UNIT_CAPACITY table.",
    example: "1",
  },
  
  unitCapacityDTOUnitId:{
    fieldLabels: {
      label: "",
      value: "unitId",
    },
    description: "Identity key for UNIT table.",
    example: "1",
  },
  
  unitCapacityDTOUserId:{
    fieldLabels: {
      label: "",
      value: "userId",
    },
    description: "The user name of the person or process that created the record if the Update Date is empty.  Otherwise this is the user name of the person or process that made the last update.",
    example: "abcde",
  },
  
unitCapacityDTOAddDate:{
    fieldLabels: {
      label: "",
      value: "addDate",
    },
    description: "Date the record was created.",
    example: "2/20/2009",
  },

  unitCapacityDTOUpdateDate:{
    fieldLabels: {
      label: "",
      value: "updateDate",
    },
    description: "Date of the last record update.",
    example: "3/23/2009",
  },
  
  unitCapacityDTOMaximumHourlyHeatInputCapacity:{
    fieldLabels: {
      label: "Maximum Hourly Heat Input Capacity",
      value: "maximumHourlyHeatInputCapacity",
    },
    description: "The maximum hourly heat input (mmBtu/hr) associated with a UNIT.",
    example: "2322",
  },
  
  unitCapacityDTOBeginDate:{
    fieldLabels: {
      label: "Begin Date",
      value: "beginDate",
    },
    description: "Date on which a relationship or an activity began.",
    example: "10/31/2002",
  },
  
  unitCapacityDTOEndDate:{
    fieldLabels: {
      label: "End Date",
      value: "endDate",
    },
    description: "Date on which a relationship or an activity ended.",
    example: "null",
  },
  
  unitCapacityDTOActive:{
    fieldLabels: {
      label: "",
      value: "active",
    },
    description: "Flag for active monitor location record",
    example: "",
  },
  
  unitControlDTOId:{
    fieldLabels: {
      label: "",
      value: "id",
    },
    description: "Unique identifier of a unit control record.",
    example: "1",
  },
  
  unitControlDTOUnitId:{
    fieldLabels: {
      label: "",
      value: "unitId",
    },
    description: "Unique identifier of a unit record.",
    example: "1",
  },
  
  unitControlDTOUserId:{
    fieldLabels: {
      label: "",
      value: "userId",
    },
    description: "User account or source of data that added or updated record.",
    example: "abcde",
  },
  
  unitControlDTOAddDate:{
    fieldLabels: {
      label: "",
      value: "addDate",
    },
    description: "Date and time in which record was added.",
    example: "2/20/2009",
  },
  
  unitControlDTOUpdateDate:{
    fieldLabels: {
      label: "",
      value: "updateDate",
    },
    description: "Date and time in which record was last updated.",
    example: "null",
  },
  
  unitControlDTOParameterCode:{
    fieldLabels: {
      label: "Parameter Code",
      value: "parameterCode",
    },
    description: "Code used to identify the parameter which is controlled by the control equipment.",
    example: "NOX",
  },
  
  unitControlDTOControlCode:{
    fieldLabels: {
      label: "Control Code",
      value: "controlCode",
    },
    description: "Codes used to identify the type of control equipment.",
    example: "SNCR",
  },
  
  unitControlDTOOriginalCode:{
    fieldLabels: {
      label: "Original Code",
      value: "originalCode",
    },
    description: "Code used to identify that the control equipment was installed and operational as part of the original unit design.",
    example: "0",
  },
  
  unitControlDTOInstallDate:{
    fieldLabels: {
      label: "Install Date",
      value: "installDate",
    },
    description: "Approximate date the original control equipment was or will be installed.",
    example: "5/1/2006",
  },
  
  unitControlDTOOptimizationDate:{
    fieldLabels: {
      label: "Optimization Date",
      value: "optimizationDate",
    },
    description: "The approximate date on which optimization of control equipment was completed and the equipment made fully operational if the control equipment was not part of the original installation.",
    example: "null",
  },
  
  unitControlDTOSeasonalControlsIndicator:{
    fieldLabels: {
      label: "Seasonal Controls Indicator",
      value: "seasonalControlsIndicator",
    },
    description: "Code used to identify if the NOx control equipment was used during the ozone season.",
    example: "0",
  },
  
  unitControlDTORetireDate:{
    fieldLabels: {
      label: "Retire Date",
      value: "retireDate",
    },
    description: "Date control equipment was retired.",
    example: "null",
  },
  
  unitControlDTOActive:{
    fieldLabels: {
      label: "",
      value: "active",
    },
    description: "Flag for active monitor location record",
    example: "",
  },
  
  unitFuelDTOId:{
    fieldLabels: {
      label: "",
      value: "id",
    },
    description: "Identity key for UNIT_FUEL table.",
    example: "1",
  },
  
  unitFuelDTOUnitId:{
    fieldLabels: {
      label: "",
      value: "unitId",
    },
    description: "Identity key for UNIT table.",
    example: "1",
  },
  
  unitFuelDTOUserId:{
    fieldLabels: {
      label: "",
      value: "userId",
    },
    description: "The user name of the person or process that created the record if the Update Date is empty.  Otherwise this is the user name of the person or process that made the last update.",
    example: "abcde",
  },
  
  unitFuelDTOAddDate:{
    fieldLabels: {
      label: "",
      value: "addDate",
    },
    description: "Date the record was created.",
    example: "2/20/2009",
  },
  
  unitFuelDTOUpdateDate:{
    fieldLabels: {
      label: "",
      value: "updateDate",
    },
    description: "Date of the last record update.",
    example: "4/21/2015",
  },
  
  unitFuelDTOFuelCode:{
    fieldLabels: {
      label: "Fuel Code",
      value: "fuelCode",
    },
    description: "The type of fuel which a UNIT is capable or will be capable of combusting.",
    example: "C",
  },
  
  unitFuelDTOIndicatorCode:{
    fieldLabels: {
      label: "Indicator Code",
      value: "indicatorCode",
    },
    description: "Code that indicates fuel or control type.",
    example: "P",
  },
  
  unitFuelDTOOzoneSeasonIndicator:{
    fieldLabels: {
      label: "Ozone Season Indicator",
      value: "ozoneSeasonIndicator",
    },
    description: "Indicator that FUEL is used during ozone season.",
    example: "0",
  },
  
  unitFuelDTODemGCV:{
    fieldLabels: {
      label: "Demonstration Method for Gross Calorific Value",
      value: "demGCV",
    },
    description: "Demonstration method to qualify for monthly GCV fuel sampling.",
    example: "null",
  },
  
  unitFuelDTODemSO2:{
    fieldLabels: {
      label: "Demonstration Method for Percent Sulfur",
      value: "demSO2",
    },
    description: "Demonstration method to qualify for daily fuel sampling for percent sulfur.",
    example: "null",
  },
  
  unitFuelDTOActualOrProjectCode:{
    fieldLabels: {
      label: "",
      value: "actualOrProjectCode",
    },
    description: "Indicator of whether the begin date for the fuel type is an actual date or a projected date.",
    example: "",
  },
  
  unitFuelDTOSulfurContent:{
    fieldLabels: {
      label: "",
      value: "sulfurContent",
    },
    description: "The percent sulfur content of the fuel, by weight.",
    example: "",
  },
  
  unitFuelDTOBeginDate:{
    fieldLabels: {
      label: "Begin Date",
      value: "beginDate",
    },
    description: "Date on which a relationship or an activity began.",
    example: "1/1/1995",
  },
  
  unitFuelDTOEndDate:{
    fieldLabels: {
      label: "End Date",
      value: "endDate",
    },
    description: "Date on which a relationship or an activity ended.",
    example: "3/31/2015",
  },
  
  unitFuelDTOActive:{
    fieldLabels: {
      label: "",
      value: "active",
    },
    description: "Flag for active monitor location record",
    example: "",
  },
  
  unitStackConfigurationDTOId:{
    fieldLabels: {
      label: "",
      value: "id",
    },
    description: "Unique identifier of a monitoring configuration record.",
    example: "CAMD-18DD175CE7EF4256B78469865D84F576",
  },
  
  unitStackConfigurationDTOUserId:{
    fieldLabels: {
      label: "",
      value: "userId",
    },
    description: "User account or source of data that added or updated record.",
    example: "abcde",
  },
  
  unitStackConfigurationDTOAddDate:{
    fieldLabels: {
      label: "",
      value: "addDate",
    },
    description: "Date and time in which record was added.",
    example: "2/20/2009",
  },
  
  unitStackConfigurationDTOUpdateDate:{
    fieldLabels: {
      label: "",
      value: "updateDate",
    },
    description: "Date and time in which record was last updated.",
    example: "null",
  },
  
  unitStackConfigurationDTOUnitId:{
    fieldLabels: {
      label: "",
      value: "unitId",
    },
    description: "Unique identifier of a unit record which is generated by the EPA Host System.",
    example: "1",
  },
  
  unitStackConfigurationDTOStackPipeId:{
    fieldLabels: {
      label: "Stack Pipe ID",
      value: "stackPipeId",
    },
    description: "Unique identifier of a stack or pipe record.",
    example: "MDC-CCB8D6D0D4E34D24A99C01DCD14078DF",
  },
  
  unitStackConfigurationDTOBeginDate:{
    fieldLabels: {
      label: "Begin Date",
      value: "beginDate",
    },
    description: "Date in which information became effective or activity started.",
    example: "1/1/1995",
  },
  
  unitStackConfigurationDTOEndDate:{
    fieldLabels: {
      label: "End Date",
      value: "endDate",
    },
    description: "Last date in which information was effective or date in which activity ended.",
    example: "null",
  },
  
  unitStackConfigurationDTOActive:{
    fieldLabels: {
      label: "",
      value: "active",
    },
    description: "Flag for active monitor location record",
    example: "",
  },
  
  monitorLocationDTOId:{
    fieldLabels: {
      label: "",
      value: "id",
    },
    description: "Unique identifier of a monitoring location record.",
    example: "5",
  },
  
  monitorLocationDTOUnitId:{
    fieldLabels: {
      label: "Unit ID",
      value: "unitId",
    },
    description: "Unique identifier of a unit record which is generated by the EPA Host System.",
    example: "null",
  },
  
  monitorLocationDTOStackPipeId:{
    fieldLabels: {
      label: "Stack Pipe ID",
      value: "stackPipeId",
    },
    description: "Unique identifier of a stack or pipe record.",
    example: "CS0AAN",
  },
  
  monitorLocationDTOActiveDate:{
    fieldLabels: {
      label: "Active Date",
      value: "activeDate",
    },
    description: "The date that emissions first went through the stack or the effective date for data reporting.",
    example: "1/1/1995",
  },
  
  monitorLocationDTORetireDate:{
    fieldLabels: {
      label: "Retire Date",
      value: "retireDate",
    },
    description: "The actual date that the stack or pipe was last used for emissions measurement or estimation purposes.",
    example: "null",
  },
  
  monitorLocationDTONonLoadBasedIndicator:{
    fieldLabels: {
      label: "Non Load Based Indicator",
      value: "nonLoadBasedIndicator",
    },
    description: "Used to indicate whether the unit is classified as a non-load based unit.",
    example: "null",
  },
  
  monitorLocationDTOUnitRecordId:{
    fieldLabels: {
      label: "",
      value: "unitRecordId",
    },
    description: "Unique identifier of a unit record which is generated by the EPA Host System.",
    example: "null",
  },
  
  monitorLocationDTOName:{
    fieldLabels: {
      label: "",
      value: "name",
    },
    description: "Character codes source assigned to identify a stack, pipe and/or unit.",
    example: "CS0AAN",
  },
  
  monitorLocationDTOType:{
    fieldLabels: {
      label: "",
      value: "type",
    },
    description: "Configuration type, uni or stack",
    example: "stack",
  },
  
  monitorLocationDTOActive:{
    fieldLabels: {
      label: "",
      value: "active",
    },
    description: "Flag for active monitor location record",
    example: "",
  },
  
  monitorPlanDTOId:{
    fieldLabels: {
      label: "",
      value: "id",
    },
    description: "Unique identifier of a monitoring plan record.",
    example: "TWCORNEL5-C0E3879920A14159BAA98E03F1980A7A",
  },
  
  monitorPlanDTOOrisCode:{
    fieldLabels: {
      label: "Oris Code",
      value: "orisCode",
    },
    description: "EIA-assigned identifier or facility ID assigned by CAMD (if EIA number is not applicable).",
    example: "3",
  },
  
  monitorPlanDTOFacId:{
    fieldLabels: {
      label: "",
      value: "facId",
    },
    description: "Unique identifier of a facility record which is generated by the EPA Host System.",
    example: "1",
  },
  
  monitorPlanDTOName:{
    fieldLabels: {
      label: "",
      value: "name",
    },
    description: "Character codes source assigned to identify a stack, pipe and/or unit.",
    example: "1,2,CSA00N",
  },
  
  monitorPlanDTOEndReportPeriodId:{
    fieldLabels: {
      label: "",
      value: "endReportPeriodId",
    },
    description: "Unique identifier of a reporting period record.",
    example: "null",
  },
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
};
