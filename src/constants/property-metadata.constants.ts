export const propertyMetadata = {
  accountName: {
    fieldLabels: {
      label: 'Account Name',
      value: 'accountName',
    },
    description: 'The name of the account in which allowances are held.',
    example: 'Barry',
  },
  accountNumber: {
    fieldLabels: {
      label: 'Account Number',
      value: 'accountNumber',
    },
    description: 'The unique identification number of an account.',
    example: '000003FACLTY',
  },
  accountType: {
    fieldLabels: {
      label: 'Account Type',
      value: 'accountType',
    },
    description: 'Type of allowance account (Facility, General, etc.).',
    example: 'Facility Account',
  },
  accountTypeCode: {
    fieldLabels: {
      label: '',
      value: 'accountTypeCode',
    },
    description: 'Code for the type of allowance account.',
    example: 'RESERVE',
  },
  accountTypeDescription: {
    fieldLabels: {
      label: '',
      value: 'accountTypeDescription',
    },
    description: 'Full description for the type of allowance account.',
    example: 'EPA Reserve Account',
  },
  accountTypeGroupCode: {
    fieldLabels: {
      label: '',
      value: 'accountTypeGroupCode',
    },
    description: 'Code for the group to which the allowance account belongs.',
    example: 'RESERVE',
  },
  accountTypeGroupDescription: {
    fieldLabels: {
      label: '',
      value: 'accountTypeGroupDescription',
    },
    description:
      'Full description for the group to which the allowance account belongs.',
    example: 'Reserve',
  },
  actualEmissionsRate: {
    fieldLabels: {
      label: 'Actual Emissions Rate (lb/mmBtu)',
      value: 'actualEmissionsRate',
    },
    description:
      'For ARP NOx, the actual rate at which a pollutant was emitted during a given time period for a single unit. (lb/mmBtu)',
    example: 0.5,
  },
  allocated: {
    fieldLabels: {
      label: 'Compliance Year Allowances Allocated',
      value: 'allocated',
    },
    description: 'The amount of allowances allocated for the calendar year.',
    example: 136,
  },
  allowanceUIFilter: {
    fieldLabels: {
      label: '',
      value: 'allowanceUIFilter',
    },
    description:
      'Indicator of whether or not the program should show up in the CAMPD Custom Data Download Tool UI Program filter for allowance data types.',
    example: true,
  },
  annualIndicator: {
    fieldLabels: {
      label: '',
      value: 'annualIndicator',
    },
    description:
      'Indicator of whether or not the program is an annual program.',
    example: true,
  },
  associatedGeneratorsAndNameplateCapacity: {
    fieldLabels: {
      label: 'Associated Generators & Nameplate Capacity (MWe)',
      value: 'associatedGeneratorsAndNameplateCapacity',
    },
    description:
      'One or more unique identifiers for generators at a facility associated with the unit, and the maximum electrical generating output (in MWe, rounded to the nearest tenth) that the generator is capable of producing on a steady state basis and during continuous operation (when not restricted by seasonal or other deratings). This value is usually indicated on a nameplate physically attached to the generator.',
    example: 'A1ST (191.8)',
  },
  associatedStacks: {
    fieldLabels: {
      label: 'Associated Stacks',
      value: 'associatedStacks',
    },
    description: 'Stacks associated with the unit.',
    example: 'CS001',
  },
  avgPlanActual: {
    fieldLabels: {
      label: 'Averaging Plan Actual Rate (lb/mmBtu)',
      value: 'avgPlanActual',
    },
    description:
      'For ARP NOx, the average actual rate at which a pollutant was emitted during a given time period for the group of units in the averaging plan. (lb/mmBtu)',
    example: 0.55,
  },
  avgPlanId: {
    fieldLabels: {
      label: 'Averaging Plan ID',
      value: 'avgPlanId',
    },
    description:
      'For ARP NOx, the unique identification number that associates a group of units with a single averaging plan.',
    example: 492,
  },
  bankedHeld: {
    fieldLabels: {
      label: 'Banked Allowances',
      value: 'bankedHeld',
    },
    description:
      'The amount of allowances of vintage years up to but not including the current compliance year held in a compliance account. (This is for NBP, OTC)',
    example: 0,
  },
  beginDate: {
    fieldLabels: {
      label: '',
      value: 'beginDate',
    },
    description: "Begin date for a given period of a unit's emissions.",
    example: '2019-01-01',
  },
  buyAccountName: {
    fieldLabels: {
      label: 'Account Name (Transferee)',
      value: 'buyAccountName',
    },
    description:
      'The name of the account receiving allowances in an allowance transaction.',
    example: 'Darby Electric Generating Station',
  },
  buyAccountNumber: {
    fieldLabels: {
      label: 'Account Number (Transferee)',
      value: 'buyAccountNumber',
    },
    description:
      'The number of the account receiving allowances in an allowance transaction.',
    example: '055247FACLTY',
  },
  buyAccountType: {
    fieldLabels: {
      label: 'Account Type (Transferee)',
      value: 'buyAccountType',
    },
    description: `Type of buyer's allowance account (Facility, General, etc.).`,
    example: 'Facility Account',
  },
  buyAccountTypeCode: {
    fieldLabels: {
      label: '',
      value: 'buyAccountTypeCode',
    },
    description: 'Code for the type of account purchasing allowances.',
    example: 'GENERAL',
  },
  buyEpaRegion: {
    fieldLabels: {
      label: 'EPA Region (Transferee)',
      value: 'buyEpaRegion',
    },
    description:
      'For facility and unit accounts, the EPA Region of the account receiving allowances in an allowance transaction.',
    example: 5,
  },
  buyFacilityId: {
    fieldLabels: {
      label: 'Facility ID (Transferee)',
      value: 'buyFacilityId',
    },
    description:
      'For facility and unit accounts, the Facility ID of the account receiving allowances in an allowance transaction.',
    example: 55247,
  },
  buyFacilityName: {
    fieldLabels: {
      label: 'Facility Name (Transferee)',
      value: 'buyFacilityName',
    },
    description:
      'For facility and unit accounts, the facility name of the account receiving allowances in an allowance transaction.',
    example: 'Darby Electric Generating Station',
  },
  buyOwner: {
    fieldLabels: {
      label: 'Owner (Transferee)',
      value: 'buyOwner',
    },
    description:
      'The owner of the account receiving allowances in an allowance transaction.',
    example: 'AEP Generation Resources, Inc.',
  },
  buySourceCategory: {
    fieldLabels: {
      label: 'Source Category (Transferee)',
      value: 'buySourceCategory',
    },
    description:
      'For unit accounts, the source category of the account receiving allowances in an allowance transaction.',
    example: 'Electric Utility',
  },
  buyState: {
    fieldLabels: {
      label: 'State (Transferee)',
      value: 'buyState',
    },
    description:
      'For facility and unit accounts, the state of the account receiving allowances in an allowance transaction.',
    example: 'OH',
  },
  carriedOver: {
    fieldLabels: {
      label: 'Allowances Carried Over',
      value: 'carriedOver',
    },
    description:
      'The amount of allowances remaining in the account following compliance.',
    example: 0,
  },
  co2Mass: {
    fieldLabels: {
      label: 'CO2 Mass (short tons)',
      value: 'co2Mass',
    },
    description: 'CO2 mass emissions (short tons)',
    example: 150.8,
  },
  co2MassMeasureFlg: {
    fieldLabels: {
      label: 'CO2 Mass Measure Indicator',
      value: 'co2MassMeasureFlg',
    },
    description: 'Describes how the CO2 Mass values were determined.',
    example: 'Measured',
  },
  co2Rate: {
    fieldLabels: {
      label: 'CO2 Rate (short tons/mmBtu)',
      value: 'co2Rate',
    },
    description: 'Average CO2 hourly emissions rate (short tons/mmBtu)',
    example: 0.103,
  },
  co2RateMeasureFlg: {
    fieldLabels: {
      label: 'CO2 Rate Measure Indicator',
      value: 'co2RateMeasureFlg',
    },
    description: 'Describes how the CO2 Rate values were determined.',
    example: 'Calculated',
  },
  commercialOperationDate: {
    fieldLabels: {
      label: 'Commercial Operation Date',
      value: 'commercialOperationDate',
    },
    description:
      'The date a unit began, or will begin to generate electricity for sale, including the sale of test generation. It is the first date that a unit serves a generator and produces electricity when connected to the grid, even if the owners are not compensated for that electricity.',
    example: '1977-04-01',
  },
  complianceApproach: {
    fieldLabels: {
      label: 'Compliance Approach',
      value: 'complianceApproach',
    },
    description:
      'For ARP NOx, approach used to meet compliance requirements (averaging plan, standard limit, or alternative limit).',
    example: 'Averaging Plan',
  },
  complianceUIFilter: {
    fieldLabels: {
      label: '',
      value: 'complianceUIFilter',
    },
    description:
      'Indicator of whether or not the program should show up in the CAMPD Custom Data Download Tool UI Program filter for compliance data types.',
    example: false,
  },
  complianceYearEmissions: {
    fieldLabels: {
      label: 'Emissions (short tons)',
      value: 'complianceYearEmissions',
    },
    description:
      'The total amount of pollutant in short tons emitted by the source in a control period.',
    example: 132,
  },
  compParameterCode: {
    fieldLabels: {
      label: '',
      value: 'compParameterCode',
    },
    description: 'Code for pollutant regulated by program.',
    example: 'NOX',
  },
  controlCode: {
    fieldLabels: {
      label: '',
      value: 'controlCode',
    },
    description:
      'Code for the method or equipment used by the combustion unit to minimize emissions for the particular pollutant.',
    example: 'B',
  },
  controlDescription: {
    fieldLabels: {
      label: '',
      value: 'controlDescription',
    },
    description:
      'Full description of method or equipment used by the combustion unit to minimize emissions for the particular pollutant.',
    example: 'Baghouse',
  },
  controlEquipParamCode: {
    fieldLabels: {
      label: '',
      value: 'controlEquipParamCode',
    },
    description:
      'Code for the pollutant minimized by the respective control equipment or method.',
    example: 'PART',
  },
  controlEquipParamDescription: {
    fieldLabels: {
      label: '',
      value: 'controlEquipParamDescription',
    },
    description:
      'Full description for the pollutant minimized by the respective control equipment or method.',
    example: 'Particulates (Opacity)',
  },
  controlTechnologies: {
    fieldLabels: {
      label: '',
      value: 'controlTechnologies',
    },
    description:
      'Method or equipment used by the combustion unit to minimize Hg, NOx, PM, or SO2 emissions.',
    example: 'Baghouse',
  },
  countOpTime: {
    fieldLabels: {
      label: 'Operating Time Count',
      value: 'countOpTime',
    },
    description:
      'Number of hours during which the unit operated for this time interval',
    example: 1797,
  },
  county: {
    fieldLabels: {
      label: 'County',
      value: 'county',
    },
    description: 'The county within a state in which a unit is operating.',
    example: 'Sherburne County',
  },
  countyCode: {
    fieldLabels: {
      label: 'County Code',
      value: 'countyCode',
    },
    description:
      'The numerical code identifying a specific county in a single state.',
    example: 'MN141',
  },
  currentDeductions: {
    fieldLabels: {
      label: 'Current Deductions',
      value: 'currentDeductions',
    },
    description:
      'The amount of allowances with the current vintage year deducted at compliance. (This is for NBP, OTC)',
    example: 132,
  },
  currentHeld: {
    fieldLabels: {
      label: 'Current Held',
      value: 'currentHeld',
    },
    description:
      'The amount of current vintage year allowances held in a compliance account at compliance. (This is for NBP, OTC)',
    example: 132,
  },
  date: {
    fieldLabels: {
      label: 'Date',
      value: 'date',
    },
    description: 'Date on which activity occurred.',
    example: '2019-01-01',
  },
  deductOneToOne: {
    fieldLabels: {
      label: 'Deduction 1 to 1',
      value: 'deductOneToOne',
    },
    description:
      'Banked allowances with a 1 to 1 ratio. (This is for OTC, NBP)',
    example: 0,
  },
  deductTwoToOne: {
    fieldLabels: {
      label: 'Deduction 2 to 1',
      value: 'deductTwoToOne',
    },
    description:
      'Banked allowances with a 2 to 1 ratio. (This is for OTC, NBP)',
    example: 0,
  },
  primaryRepInfo: {
    fieldLabels: {
      label: 'Primary Rep Info',
      value: 'primaryRepInfo',
    },
    description:
      'Unique identifier(s) for the primary representative(s) at a facility',
    example: 17364,
  },
  emissions: {
    onLineOffLineIndicator: {
      fieldLabels: {
        label: 'Online Offline Indicator',
        value: 'onLineOffLineIndicator',
      },
      description:
        'Indicator code used to report if the daily calibration was performed online or offline, reported as OnLineOffLineIndicator in the DailyCalibrationData record.',
      example: 'Yes',
    },
    upscaleGasCode: {
      fieldLabels: {
        label: 'Upscale Gas Level Code',
        value: 'upscaleGasCode',
      },
      description:
        'The gas level code of the upscale gas injection, reported as UpscaleGasCode in the DailyCalibrationData record.',
      example: 'HIGH',
    },
    zeroInjectionDate: {
      fieldLabels: {
        label: 'Zero Injection Date',
        value: 'zeroInjectionDate',
      },
      description: 'The completion date of the zero gas injection',
      example: '2019-03-01',
    },
    zeroInjectionHour: {
      fieldLabels: {
        label: 'Zero Injection Hour',
        value: 'zeroInjectionHour',
      },
      description: 'The completion time of the zero gas injection',
      example: '4',
    },
    zeroInjectionMinute: {
      fieldLabels: {
        label: 'Zero Injection Minute',
        value: 'zeroInjectionMinute',
      },
      description: 'The completion time of the zero gas injection',
      example: '1',
    },
    upscaleInjectionDate: {
      fieldLabels: {
        label: 'Upscale Injection Date',
        value: 'upscaleInjectionDate',
      },
      description: 'The completion date of the upscale gas injection',
      example: '2019-03-01',
    },
    upscaleInjectionHour: {
      fieldLabels: {
        label: 'Upscale Injection Hour',
        value: 'upscaleInjectionHour',
      },
      description: 'The completion time of the upscale gas injection',
      example: '5',
    },
    upscaleInjectionMinute: {
      fieldLabels: {
        label: 'Upscale Injection Minute',
        value: 'upscaleInjectionMinute',
      },
      description: 'The completion time of the upscale gas injection',
      example: '1',
    },
    zeroMeasuredValue: {
      fieldLabels: {
        label: 'Zero Measured Value',
        value: 'zeroMeasuredValue',
      },
      description:
        'The value measured by the instrument in response to the zero gas injection, reported as ZeroMeasuredValue in the DailyCalibrationData record.',
      example: '2.6',
    },
    upscaleMeasuredValue: {
      fieldLabels: {
        label: 'Upscale Measured Value',
        value: 'upscaleMeasuredValue ',
      },
      description:
        'The value measured by the instrument in response to the upscale gas injection, reported as UpscaleMeasuredValue in the DailyCalibrationData record.',
      example: '523.9',
    },
    zeroApsIndicator: {
      fieldLabels: {
        label: 'Zero APS Indicator',
        value: 'zeroApsIndicator',
      },
      description:
        'Indicator code used to report if zero injection result was determined using the alternative performance specification, reported as ZeroAPSIndicator in the DailyCalibrationData record.',
      example: 'No',
    },
    upscaleApsIndicator: {
      fieldLabels: {
        label: 'Upscale APS Indicator',
        value: 'upscaleApsIndicator',
      },
      description:
        'Indicator code used to report if upscale injection result was determined using the alternative performance specification, reported as UpscaleAPSIndicator in the DailyCalibrationData record.',
      example: 'No ',
    },
    zeroCalibrationError: {
      fieldLabels: {
        label: 'Zero Calibration Error',
        value: 'zeroCalibrationError',
      },
      description:
        'The calibration error results or mean difference from the zero gas injection, reported as ZeroCalibrationError in the DailyCalibrationData record.',
      example: '0.6',
    },
    upscaleCalibrationError: {
      fieldLabels: {
        label: 'Upscale Calibration Error',
        value: 'upscaleCalibrationError',
      },
      description:
        'The calibration error or mean difference results from the upscale gas injection, reported as UpscaleCalibrationError in the DailyCalibrationData record.',
      example: '0.6',
    },
    zeroReferenceValue: {
      fieldLabels: {
        label: 'Zero Reference Value',
        value: 'zeroReferenceValue',
      },
      description:
        'The zero calibration gas or reference signal value, reported as ZeroReferenceValue in the DailyCalibrationData record.',
      example: '0',
    },
    upscaleReferenceValue: {
      fieldLabels: {
        label: 'Upscale Reference Value',
        value: 'upscaleReferenceValue',
      },
      description:
        'The upscale calibration gas or reference signal value, reported as UpscaleReferenceValue in the DailyCalibrationData record.',
      example: '525.1',
    },
    cylinderIdentifier: {
      fieldLabels: {
        label: 'Cylinder ID',
        value: 'cylinderIdentifier',
      },
      description:
        'The vendor-assigned identification or serial number located on the cylinder.',
      example: 'CC277493',
    },
    summaryValueDtoId: {
      fieldLabels: {
        label: 'Summary Value ID',
        value: 'id',
      },
      description: 'Unique identifier of a summary value record.',
      example: 'FOS-D6QLND-709320C8C5ED4E378942701BD683D8F2',
    },
    parameterCode: {
      fieldLabels: {
        label: 'Parameter Code',
        value: 'parameterCode',
      },
      description: 'Code used to identify the parameter.',
      example: 'NOXM',
    },
    currentReportingPeriodTotal: {
      fieldLabels: {
        label: 'Current Reporting Period Total',
        value: 'currentReportingPeriodTotal',
      },
      description: 'Total value for current reporting period.',
      example: '1091.6',
    },
    ozoneSeasonToDateTotal: {
      fieldLabels: {
        label: 'Ozone Season to Date Total',
        value: 'ozoneSeasonToDateTotal',
      },
      description: 'Ozone season year to date total.',
      example: '596.7',
    },
    yearToDateTotal: {
      fieldLabels: {
        label: 'Year to Date Total',
        value: 'yearToDateTotal',
      },
      description: 'Year to date total.',
      example: '2250.5',
    },
    dailyTestSummaryId: {
      fieldLabels: {
        label: 'Daily Test Summary ID',
        value: 'id',
      },
      description: 'Unique identifier of a daily test summary record',
      example: 'FOS-D6QLND-62BAF816050B46BAA78CD6009278156E',
    },
    monitoringLocationId: {
      fieldLabels: {
        label: 'Monitor Location Id',
        value: 'monitoringLocationId',
      },
      description: 'Unique identifier of a monitoring location record.',
      example: '785',
    },
    userId: {
      fieldLabels: {
        label: 'User ID',
        value: 'userId',
      },
      description:
        'User account or source of data that added or updated record.',
      example: 'abcdef',
    },
    addDate: {
      fieldLabels: {
        label: 'Add Date',
        value: 'addDate',
      },
      description: 'Date and time in which record was added.',
      example: '2019-04-23',
    },
    updateDate: {
      fieldLabels: {
        label: 'Update Date',
        value: 'updateDate',
      },
      description: 'Date and time in which record was last updated.',
      example: '2019-04-23',
    },
    reportingPeriodId: {
      fieldLabels: {
        label: 'Reporting Period ID',
        value: 'reportingPeriodId',
      },
      description: 'Unique identifier of a reporting period record.',
      example: '105',
    },
    monitoringSystemId: {
      fieldLabels: {
        label: 'System Identifier',
        value: 'monitoringSystemId',
      },
      description: 'Unique identifier of a monitoring system record.',
      example: '111',
    },
    componentId: {
      fieldLabels: {
        label: 'Component Identifier',
        value: 'componentId',
      },
      description:
        'Component ID of the analyzer, reported as ComponentID in the ComponentData record',
      example: '6',
    },
    spanScaleCode: {
      fieldLabels: {
        label: 'Span Scale Code',
        value: 'spanScaleCode',
      },
      description: 'Code used to identify the span scale.',
      example: 'H',
    },
    testTypeCode: {
      fieldLabels: {
        label: 'Test Type Code',
        value: 'testTypeCode',
      },
      description: 'Code used to identify test type.',
      example: 'DAYCAL',
    },
    testResultCode: {
      fieldLabels: {
        label: 'Test Result Code',
        value: 'testResultCode',
      },
      description: 'Code used to identify reported test result.',
      example: 'PASSED',
    },
    dailyTestDate: {
      fieldLabels: {
        label: 'Daily Test Date',
        value: 'date',
      },
      description: 'Date of the daily test.',
      example: '2019-03-01',
    },
    dailyTestHour: {
      fieldLabels: {
        label: 'Daily Test Hour',
        value: 'hour',
      },
      description: 'Hour of the daily test.',
      example: '5',
    },
    dailyTestMinute: {
      fieldLabels: {
        label: 'Daily Test Minute',
        value: 'minute',
      },
      description: 'Minute of the daily test.',
      example: '1',
    },
    dailyCalibrationId: {
      fieldLabels: {
        label: 'Daily Calibration ID',
        value: 'id',
      },
      description:
        'Unique identifier for a daily calibration injection record.',
      example: 'dhintzma-85A88C7C0887AC2DE053D7DD4386D597',
    },
    dailyTestSummaryIdDailyCalibrationDto: {
      fieldLabels: {
        label: 'Daily Test Summary ID',
        value: 'dailyTestSummaryId',
      },
      description: 'Unique identifier of a daily test summary record.',
      example: 'FOS-D6QLND-62BAF816050B46BAA78CD6009278156E',
    },
    injectionProtocolCode: {
      fieldLabels: {
        label: 'Injection Protocol Code',
        value: 'injectionProtocolCode',
      },
      description: 'Injection Protocol code.',
      example: 'HGE',
    },
    expirationDate: {
      fieldLabels: {
        label: 'Expiration Date',
        value: 'expirationDate',
      },
      description: 'Date of Expiration of the upscale gas cylinder.',
      example: '2026-08-04',
    },
    vendorIdentifier: {
      fieldLabels: {
        label: 'Vendor ID',
        value: 'vendorIdentifier',
      },
      description:
        'The EPA-assigned PGVP Vendor ID at the time of cylinder production.',
      example: 'A32018',
    },
    upscaleGasTypeCode: {
      fieldLabels: {
        label: 'Upscale Gas Type Code',
        value: 'upscaleGasTypeCode',
      },
      description:
        'Code indicating the type of gas in the cylinder used for the upscale injection.',
      example: 'BALN,CO2,NO,NOX',
    },
    dailyEmissionsId: {
      fieldLabels: {
        label: 'Daily Emissions ID',
        value: 'id',
      },
      description: 'Unique identifier of a daily emission record.',
      example: '2GH3WF2-CB0DF7BD5388427C8B32E3F5F6C80371',
    },
    beginDateDailyEmissionsDto: {
      fieldLabels: {
        label: 'Begin Date',
        value: 'beginDate',
      },
      description: 'Date corresponding to the daily emissions.',
      example: '2019-02-20',
    },
    unadjustedDailyEmission: {
      fieldLabels: {
        label: 'Unadjusted Daily Emission',
        value: 'unadjustedDailyEmission',
      },
      description:
        'Reported unadjusted daily CO2 mass value determined using the G-1 equation; reported as UnadjustedDailyEmissions in the DailyEmissionData record.',
      example: '2928.4',
    },
    adjustedDailyEmission: {
      fieldLabels: {
        label: 'Adjusted Daily Emission',
        value: 'adjustedDailyEmission',
      },
      description:
        'Reported daily combustion-related CO2 Mass (tons) adjusted for carbon retained in the ash; reported as AdjustedDailyEmissions in the DailyEmissionData record.',
      example: '2928.4',
    },
    sorbentMassEmission: {
      fieldLabels: {
        label: 'Sorbent Mass Emission',
        value: 'sorbentMassEmission',
      },
      description: 'Total daily sorbent-related CO2 mass emissions.',
      example: '0',
    },
    totalCarbonBurned: {
      fieldLabels: {
        label: 'Total Carbon Burned',
        value: 'totalCarbonBurned',
      },
      description: 'Total amount of carbon burned.',
      example: '1205152.7',
    },
    totalDailyEmissions: {
      fieldLabels: {
        label: 'Total Daily Emission',
        value: 'totalDailyEmission',
      },
      description:
        'Reported daily total combustion-related CO2 mass emissions in tons as TotalDailyEmissions in the DailyEmissionData record.',
      example: '2928.4',
    },
    dailyFuelId: {
      fieldLabels: {
        label: 'Daily Fuel ID',
        value: 'id',
      },
      description: 'Unique identifier of a daily fuel record.',
      example: 'GEOFFI7-999C4B810FA8416C89265F87493A11E6',
    },
    dailyEmissionsIdDailyFuelDto: {
      fieldLabels: {
        label: 'Daily Emission ID',
        value: 'dailyEmissionId',
      },
      description: 'Unique identifier of a daily emission record.',
      example: 'GEOFFI7-9AFBAFA8BA3A4CE28B24DDE281A5F46D',
    },
    fuelCode: {
      fieldLabels: {
        label: 'Fuel Code',
        value: 'fuelCode',
      },
      description: 'Code used to identify the type of fuel.',
      example: 'DSL',
    },
    fuelDescription: {
      fieldLabels: {
        label: 'Fuel Description',
        value: 'fuelDescription',
      },
      description: 'Type of Fuel',
      example: 'Diesel Oil',
    },
    dailyFuelFeed: {
      fieldLabels: {
        label: 'Daily Fuel Feed',
        value: 'dailyFuelFeed',
      },
      description: 'Feed rate of fuel.',
      example: '139526.3',
    },
    carbonContentUsed: {
      fieldLabels: {
        label: 'Carbon Content Used',
        value: 'carbonContentUsed',
      },
      description:
        'Amount of carbon burned as a percentage of the daily feed rate',
      example: '73.6',
    },
    fuelCarbonBurned: {
      fieldLabels: {
        label: 'Fuel Carbon Burned',
        value: 'fuelCarbonBurned',
      },
      description: 'Amount of carbon burned.',
      example: '102691.4',
    },
    derivedHourlyValueId: {
      fieldLabels: {
        label: 'Derived Hourly Value ID',
        value: 'id',
      },
      description: 'Unique identifier of a derived hourly value record.',
      example: 'jwalke12-877751BA987DE71FE053D7DD438665B9',
    },
    hourId: {
      fieldLabels: {
        label: 'Hour ID',
        value: 'hourId',
      },
      description: 'Unique identifier of an hourly operating data record.',
      example: 'DPGLISSO11-0C90B40DF78D457F9E49AD75A3C28F21',
    },
    formulaIdentifier: {
      fieldLabels: {
        label: 'Formula Code',
        value: 'formulaIdentifier',
      },
      description: 'Unique identifier of a monitoring formula record.',
      example: 'F-6',
    },
    modcCode: {
      fieldLabels: {
        label: 'MODC Code',
        value: 'modcCode',
      },
      description: 'Code used to identify the method of determination.',
      example: '1',
    },
    operatingConditionCode: {
      fieldLabels: {
        label: 'Operating Condition ',
        value: 'operatingConditionCode',
      },
      description: 'Code used to identify the operating condition.',
      example: 'B',
    },
    percentAvailable: {
      fieldLabels: {
        label: 'Percent Monitor Availability',
        value: 'percentAvailable',
      },
      description: 'Percent monitor data availability.',
      example: '98.7',
    },
    adjustedHourlyValueDerivedHourlyValueDto: {
      fieldLabels: {
        label: 'Adjusted Hourly Value',
        value: 'adjustedHourlyValue',
      },
      description:
        'Adjusted parameter value for the hour, as calculated from measured values and then adjusted for bias, or the substitute value for missing data hours.',
      example: '0.327',
    },
    unadjustedHourlyValue: {
      fieldLabels: {
        label: 'Unadjusted Hourly Value',
        value: 'unadjustedHourlyValue',
      },
      description:
        'Unadjusted value calculated from measured values for the hour.',
      example: '0.327',
    },
    biasAdjustmentFactorDerivedHourlyValueDto: {
      fieldLabels: {
        label: 'Applicable Bias Adjusted Factor',
        value: 'biasAdjustmentFactor',
      },
      description:
        'BAF determined from most recent prior RATA (as calculated by ECMPS Client Tool).',
      example: '1',
    },
    segmentNumber: {
      fieldLabels: {
        label: 'Segment Number',
        value: 'segmentNumber',
      },
      description:
        'Segment number of correlation curve.  Rather than a user-assigned identifier, this is just an integer that indicates the segment number (assuming the first segment is number 1).',
      example: '1',
    },
    unadjustedHourlyValueDerivedHourlyValueDto: {
      fieldLabels: {
        label: 'Unadjusted Hourly Value',
        value: 'unadjustedHourlyValue',
      },
      description:
        'Unadjusted value calculated from measured values for the hour.',
      example: '0.327',
    },
    hourlyFuelFlowId: {
      fieldLabels: {
        label: 'Hourly Fuel Flow ID',
        value: 'id',
      },
      description: 'Unique identifier of a derived hourly value record.',
      example: 'jwalke12-877751BA987DE71FE053D7DD438665B9',
    },
    fuelUsageTime: {
      fieldLabels: {
        label: 'Fuel Usage Time',
        value: 'fuelUsageTime',
      },
      description:
        'The fraction of the clock hour during which the unit or pipe combusted the fuel, reported as FuelUsageTime in the HFF record.',
      example: '1',
    },
    massFlowRate: {
      fieldLabels: {
        label: 'Mass Flow Rate',
        value: 'massFlowRate',
      },
      description: 'Mass flow rate during combustion.',
      example: '358',
    },
    sourceOfDataMassCode: {
      fieldLabels: {
        label: 'Source Of Data Mass ',
        value: 'sourceOfDataMassCode',
      },
      description:
        'Source of Data Code for fuel flow reported as SourceOfDataMassCode in the HFF record.',
      example: '5',
    },
    sourceOfDataVolumetricCode: {
      fieldLabels: {
        label: 'Source Of Data Volumetric',
        value: 'sourceOfDataVolumetricCode',
      },
      description:
        'Source of Data Code for fuel flow reported as SourceOfDataVolumetricCode in the HFF record.',
      example: '0',
    },
    volumetricUnitsOfMeasureCode: {
      fieldLabels: {
        label: 'Volumetric Units of Measure',
        value: 'volumetricUnitsOfMeasureCode',
      },
      description:
        'Code used to identify the units of measure for volumetric fuel flow.',
      example: 'HSCF',
    },
    hourlyGasFlowMeterId: {
      fieldLabels: {
        label: 'Hourly Gas Flow Meter ID',
        value: 'id',
      },
      description: 'Unique identifier of an hourly fuel flow record.',
      example: 'LSYSFHBZLH-1BB107E892004188BBC94D1170EC6756',
    },
    samplingRateUom: {
      fieldLabels: {
        label: 'Sampling Rate UOM',
        value: 'samplingRateUom',
      },
      description: 'Unit of Measure for average sample flow rate.',
      example: 'CCMIN',
    },
    avgHourlySamplingRate: {
      fieldLabels: {
        label: 'Average Hourly Sampling Rate',
        value: 'avgHourlySamplingRate',
      },
      description: 'Average sample flow rate.',
      example: '302.71',
    },
    beginEndHourFlag: {
      fieldLabels: {
        label: 'Begin End Hour Flag',
        value: 'beginEndHourFlag',
      },
      description: 'Marks transition hour.',
      example: 'F',
    },
    hourlyGfmReading: {
      fieldLabels: {
        label: 'Hourly GFM Reading',
        value: 'hourlyGfmReading',
      },
      description: 'Monitored value of Gas Flow Meter.',
      example: '0.02',
    },
    hourlySfsrRatio: {
      fieldLabels: {
        label: 'Hourly SFSR Ratio',
        value: 'hourlySfsrRatio ',
      },
      description: 'Reported hourly SFSR Ratio.',
      example: '38.3',
    },
    hourlyOpDataId: {
      fieldLabels: {
        label: 'Hourly Operating Data ID',
        value: 'id',
      },
      description: 'Unique identifier of an hourly operating data record.',
      example: 'DT3YSLPW1-360FCE62B3A147918C1B2E260D78D929',
    },
    beginDateHourlyOpDataDto: {
      fieldLabels: {
        label: 'Begin Date',
        value: 'beginDate',
      },
      description: 'Date of the hourly operating data.',
      example: '2019-01-01',
    },
    beginHourHourlyOpDataDto: {
      fieldLabels: {
        label: 'Begin Hour',
        value: 'hour',
      },
      description: 'Hour of the hourly operating data.',
      example: '21',
    },
    operatingTime: {
      fieldLabels: {
        label: 'Operating Time',
        value: 'operatingTime',
      },
      description:
        'The fraction of the clock hour during which the unit (or any unit venting through the stack) combusted any fuel.',
      example: '1',
    },
    loadRange: {
      fieldLabels: {
        label: 'Load Range',
        value: 'loadRange',
      },
      description:
        'Operating load range or load bin number (1 to 10); reported as LoadRange in the HourlyOperatingData record.',
      example: '6',
    },
    commonStackLoadRange: {
      fieldLabels: {
        label: 'Common Stack Load Range',
        value: 'commonStackLoadRange',
      },
      description:
        'Load range for stack flow at a common stack (between 1 and 20).  Optional alternative to standard load range.',
      example: '10',
    },
    hourLoad: {
      fieldLabels: {
        label: 'Hour Load',
        value: 'hourLoad',
      },
      description: 'Gross unit load or steam load value during unit operation.',
      example: '120',
    },
    loadUnitsOfMeasureCode: {
      fieldLabels: {
        label: 'Load Units of Measure ',
        value: 'loadUnitsOfMeasureCode',
      },
      description:
        'Load units of measure; reported as LoadUnitsOfMeasureCode in the HourlyOperatingData record.',
      example: 'MW',
    },
    matsHourLoad: {
      fieldLabels: {
        label: 'MATS Hour Load',
        value: 'matsHourLoad',
      },
      description: 'The MATS specific megawatt load.',
      example: '68',
    },
    matsStartupShutdownFlag: {
      fieldLabels: {
        label: 'MATS Startup Shutdown Flag',
        value: 'matsStartupShutdownFlag',
      },
      description:
        'Flag indicating whether the current hour is either a MATS startup or shutdown hour.',
      example: 'D',
    },
    fcFactor: {
      fieldLabels: {
        label: 'Fc Factor',
        value: 'fcFactor',
      },
      description:
        'Carbon based F-factor corresponding to fuel(s) burned during the hour.',
      example: '1040',
    },
    fdFactor: {
      fieldLabels: {
        label: 'Fd Factor',
        value: 'fdFactor',
      },
      description:
        'Dry basis F-factor corresponding to fuel(s) burned during the hour.',
      example: '8710',
    },
    fwFactor: {
      fieldLabels: {
        label: 'Fw Factor',
        value: 'fwFactor',
      },
      description:
        'Wet basis F-factor corresponding to fuel(s) burned during the hour.',
      example: '9120',
    },
    hourlyParamFuelFlowId: {
      fieldLabels: {
        label: 'Hourly Param Fuel Flow ID',
        value: 'id',
      },
      description: 'Unique identifier of an hourly parameter fuel flow record.',
      example: 'jwalke12-877751BA9CD4E71FE053D7DD438665B9',
    },
    hourlyFuelFlowIdHourlyParamFuelFlowDto: {
      fieldLabels: {
        label: 'Hourly Fuel Flow ID',
        value: 'hourlyFuelFlowId',
      },
      description: 'Unique identifier of an hourly fuel flow record.',
      example: 'DPGLISSO11-CACDF19D9A8441ECBBB01B51560188C3',
    },
    parameterValueForFuel: {
      fieldLabels: {
        label: 'Parameter Value',
        value: 'parameterValueForFuel',
      },
      description:
        'Hourly parameter value for fuel. (Currently SO2 mass rate, CO2 mass rate or heat input rate.)',
      example: '0.44718',
    },
    parameterUomCode: {
      fieldLabels: {
        label: 'Parameter UOM',
        value: 'parameterUomCode',
      },
      description: 'Code used to identify the parameter units of measure.',
      example: 'LBHR',
    },
    sampleTypeCode: {
      fieldLabels: {
        label: 'Sample Type',
        value: 'sampleTypeCode',
      },
      description:
        'Code indicating the source of value reported as SampleTypeCode in the HPFF record.',
      example: '2',
    },
    longTermFuelFlowId: {
      fieldLabels: {
        label: 'Long Term Fuel Flow ID',
        value: 'id',
      },
      description: 'Unique identifier of a long term fuel flow record.',
      example: 'NAES003449-194B5AA148DE4833B675A69A29B9BA51',
    },
    fuelFlowPeriodCode: {
      fieldLabels: {
        label: 'Fuel Flow Period Code',
        value: 'fuelFlowPeriodCode',
      },
      description: 'Code used to identify the long term fuel flow period.',
      example: 'MJ',
    },
    gcvUnitsOfMeasureCode: {
      fieldLabels: {
        label: 'GCV Units of Measure',
        value: 'gcvUnitsOfMeasureCode',
      },
      description: 'Code used to identify the units of measure for the GCV.',
      example: 'BTUSCF',
    },
    grossCalorificValue: {
      fieldLabels: {
        label: 'Gross Calorific Value',
        value: 'grossCalorificValue',
      },
      description: 'Gross Calorific Value.',
      example: '1050',
    },
    longTermFuelFlowValue: {
      fieldLabels: {
        label: 'Long Term Fuel Flow Value',
        value: 'longTermFuelFlowValue',
      },
      description: 'Long term fuel flow value ',
      example: '655000',
    },
    longTermFuelFlowUomCode: {
      fieldLabels: {
        label: 'Long Term Fuel Flow UOM',
        value: 'longTermFuelFlowUomCode',
      },
      description:
        'Code used to identify the units of measure for the long term fuel flow value.',
      example: 'SCF',
    },
    totalHeatInput: {
      fieldLabels: {
        label: 'Total Heat Input',
        value: 'totalHeatInput',
      },
      description: 'Total heat input from this long term fuel flow value.',
      example: '688',
    },
    matsDerivedHourlyValueId: {
      fieldLabels: {
        label: 'MATS Derived Hourly Value ID',
        value: 'id',
      },
      description: 'Unique identifier of a MATS derived hourly value record.',
      example: 'EDE-55998-61C01575C5DB49BF8FDB46F91385E716',
    },
    unadjustedHourlyValueMatsDerivedHourlyValueDto: {
      fieldLabels: {
        label: 'Unadjusted Hourly Value',
        value: 'unadjustedHourlyValue',
      },
      description:
        'Unadjusted value calculated from measured values for the hour in scientific notation.',
      example: '6.27E-02',
    },
    matsMonitorHourlyValueId: {
      fieldLabels: {
        label: 'MATS Monitor Hourly Value ID',
        value: 'id',
      },
      description: 'Unique identifier of MATS monitor hourly value record.',
      example: 'EDE-55998-88F5731B058F45D980A4D29467609B3D',
    },
    unadjustedHourlyValueMatsMonitorHourlyValueDto: {
      fieldLabels: {
        label: 'Unadjusted Hourly Value',
        value: 'unadjustedHourlyValue',
      },
      description: 'Unadjusted measured value in scientific notation.',
      example: '0.122E-01',
    },
    monitorHourlyValueId: {
      fieldLabels: {
        label: 'Monitor Hourly Value ID',
        value: 'id',
      },
      description: 'Unique identifier of monitor hourly value record.',
      example: 'MMillick-8763429842D7F2CDE053D7DD4386A62F',
    },
    adjustedHourlyValueMonitorHourlyValueDto: {
      fieldLabels: {
        label: 'Adjusted Hourly Value',
        value: 'adjustedHourlyValue',
      },
      description: 'Adjusted average concentration or flow for the hour.',
      example: '99330000',
    },
    biasAdjustmentFactorMonitorHourlyValueDto: {
      fieldLabels: {
        label: 'Applicable Bias Adjusted Factor',
        value: 'biasAdjustmentFactor',
      },
      description:
        'Bias Adjustment Factor from most recent applicable RATA, as determined by ECMPS Client Tool.',
      example: '1.036',
    },
    moistureBasis: {
      fieldLabels: {
        label: 'Moisture Basis ',
        value: 'moistureBasis',
      },
      description: 'Moisture basis for measured value.',
      example: 'D',
    },
    unadjustedHourlyValueMonitorHourlyValueDto: {
      fieldLabels: {
        label: 'Unadjusted Hourly Value',
        value: 'unadjustedHourlyValue',
      },
      description: 'Unadjusted measured value.',
      example: '95878000',
    },
    nsps4tSummaryId: {
      fieldLabels: {
        label: 'NSPS4T Summary ID',
        value: 'id',
      },
      description: 'Unique identifier of a NSPS4T Summary record.',
      example: 'OCELGNWDP7-80B955DABF384007B62DEE4A5DAFEAD9',
    },
    electricalLoadCode: {
      fieldLabels: {
        label: 'Electrical Load Code',
        value: 'electricalLoadCode',
      },
      description: 'Code used to identify the NSPS4T Electrical Load.',
      example: 'GROSS',
    },
    co2EmissionStandardCode: {
      fieldLabels: {
        label: 'CO2 Emission Standard Code',
        value: 'co2EmissionStandardCode',
      },
      description: 'Code used to identify the NSPS4T Emission Standard.',
      example: 'CTOUT',
    },
    modusValue: {
      fieldLabels: {
        label: 'MODUS Value',
        value: 'modusValue',
      },
      description:
        'Standard value for a modified steam generating or IGCC unit with a unit-specific stanrdard.',
      example: '450',
    },
    modusUomCode: {
      fieldLabels: {
        label: 'MODUS Units of Measure Code',
        value: 'modusUomCode',
      },
      description:
        'Code used to identify the NSPS4T Mass Rate for a modified steam generating or IGCC unit with a unit-specific stanrdard.',
      example: 'KGMWH',
    },
    noCompliancePeriodEndedComment: {
      fieldLabels: {
        label: 'No Compliance Period Ended Comment',
        value: 'noCompliancePeriodEndedComment',
      },
      description:
        'Comment about whether a compliance period ended during the reporting period.',
      example:
        'No compliance period has ended since the source became subject to Subpart TTTT on 2019/01/25.',
    },
    noCompliancePeriodEndedIndicator: {
      fieldLabels: {
        label: 'No Compliance Period Ended Indicator',
        value: 'noCompliancePeriodEndedIndicator',
      },
      description:
        'Indicates whether a compliance period ended during the reporting period.',
      example: '1',
    },
    nsps4tCompliancePeriodDataId: {
      fieldLabels: {
        label: 'NSPS4T Compliance Period Data ID',
        value: 'id',
      },
      description: 'Unique identifier of a NSPS4T Compliance Period record.',
      example: 'OCELGNWDP7-49B1D74DCEF147BDAAB44A32A783D314',
    },
    nsps4tSummaryIdNsps4tCompliancePeriodDataDto: {
      fieldLabels: {
        label: 'NSPS4T Summary ID',
        value: 'nsps4tSumId',
      },
      description: 'Unique identifier of a NSPS4T Summary record.',
      example: 'OCELGNWDP7-80B955DABF384007B62DEE4A5DAFEAD9',
    },
    averageCo2EmissionRate: {
      fieldLabels: {
        label: 'Average CO2 Emission Rate',
        value: 'averageCo2EmissionRate',
      },
      description:
        '12 month rolling average for compliance month (the end month).',
      example: '350',
    },
    co2EmissionRateUomCode: {
      fieldLabels: {
        label: 'CO2 Emission Rate Units of Measure ',
        value: 'co2EmissionRateUomCode',
      },
      description: 'Unit of measure for the 12 month rolling average.',
      example: 'KGMWH',
    },
    percentValidOpHours: {
      fieldLabels: {
        label: 'Percent Valid Operating Hours',
        value: 'percentValidOpHours',
      },
      description: 'Percent of valid hours withing the compliance months.',
      example: '99.9',
    },
    violationOfCo2StandardComment: {
      fieldLabels: {
        label: 'Violation of CO2 Standard Comment',
        value: 'violationOfCo2StandardComment',
      },
      description:
        'Comment on the violation of the emission standard for the location.',
      example: 'No Violation',
    },
    violationOfCo2StandardIndicator: {
      fieldLabels: {
        label: 'Violation of CO2 Standard',
        value: 'violationOfCo2StandardIndicator',
      },
      description:
        'Indicates whether the 12 month rolling average violated the emission standard fpr the location.',
      example: '0',
    },
    beginMonth: {
      fieldLabels: {
        label: 'Begin Month',
        value: 'beginMonth',
      },
      description:
        'The month the first calendar month included in the rolling average for the compliance period.',
      example: '2',
    },
    beginYear: {
      fieldLabels: {
        label: 'Begin Year',
        value: 'beginYear',
      },
      description:
        'The year of the first calendar month included in the rolling average for the compliance period.',
      example: '2018',
    },
    endMonth: {
      fieldLabels: {
        label: 'End Month',
        value: 'endMonth',
      },
      description:
        'The month of the last calendar month included in the rolling average for the compliance period.',
      example: '1',
    },
    endYear: {
      fieldLabels: {
        label: 'End Year',
        value: 'endYear',
      },
      description:
        'The year of the last calendar month included in the rolling average for the compliance period.',
      example: '2019',
    },
    nsps4tFourthQuarterId: {
      fieldLabels: {
        label: 'NSPS4T Fourth Quarter ID',
        value: 'id',
      },
      description: 'Unique identifier of a NSPS4T Compliance Period record.',
      example: 'OCELGNWDP7-49B1D74DCEF147BDAAB44A32A783D314',
    },
    nsps4tSummaryIdNsps4tFourthQuarterDto: {
      fieldLabels: {
        label: 'NSPS4T Fourth Quarter ID',
        value: 'nsps4tSumId',
      },
      description: 'Unique identifier of a NSPS4T Compliance Period record.',
      example: 'OCELGNWDP7-49B1D74DCEF147BDAAB44A32A783D314',
    },
    annualEnergySold: {
      fieldLabels: {
        label: 'Annual Energy Sold',
        value: 'annualEnergySold',
      },
      description: 'The annual energy sold for the calendar year.',
      example: '2842824',
    },
    annualEnergySoldTypeCode: {
      fieldLabels: {
        label: 'Annual Energy Sold Type',
        value: 'annualEnergySoldTypeCode',
      },
      description: 'Indicates the type of energy sold (i.e. NET or GROSS)',
      example: 'GROSS',
    },
    annualPotentialElectricOutput: {
      fieldLabels: {
        label: 'Annual Potential Electric Output',
        value: 'annualPotentialElectricOutput',
      },
      description:
        'The annual potential (energy) output for the calendar year.',
      example: '1440011',
    },
    sorbentTrapId: {
      fieldLabels: {
        label: 'Sorbent Trap ID',
        value: 'id',
      },
      description: 'Unique identifier of a sorbent trap record.',
      example: 'SDM4661-4A7D784055084412953E84209293CDFE',
    },
    beginDateSorbentTrapDto: {
      fieldLabels: {
        label: 'Begin Date',
        value: 'beginDate',
      },
      description:
        'Begin date of the sampling period, reported as BeginDate and BeginHour in the Sorbent Trap Data records.',
      example: '2019-07-31',
    },
    beginHourSorbentTrapDto: {
      fieldLabels: {
        label: 'Begin Hour',
        value: 'beginHour',
      },
      description:
        'Begin time of the sampling period, reported as BeginDate and BeginHour in the Sorbent Trap Data records.',
      example: '6',
    },
    endDate: {
      fieldLabels: {
        label: 'End Date',
        value: 'endDate',
      },
      description:
        'End date of the sampling period, reported as EndDate and EndHour in the Sorbent Trap Data records.',
      example: '2019-07-31',
    },
    endHour: {
      fieldLabels: {
        label: 'End Hour',
        value: 'endHour',
      },
      description:
        'End time of the sampling period, reported as EndDate and EndHour in the Sorbent Trap Data records.',
      example: '7',
    },
    absoluteDifferenceIndicator: {
      fieldLabels: {
        label: 'Absolute Difference Indicator',
        value: 'absoluteDifferenceIndicator',
      },
      description:
        'Indicates the basis for the Paired Trap Agreement test: relative deviation (0) or absolute difference (1).',
      example: '0',
    },
    hgSystemConcentration: {
      fieldLabels: {
        label: 'Hg System Concentration',
        value: 'hgSystemConcentration',
      },
      description:
        'The Hg concentration in ug/scm reported as UnadjustedHourlyValue in the MATS MHV record.',
      example: '0.107',
    },
    modcCodeSorbentTrapDto: {
      fieldLabels: {
        label: 'MODC Code',
        value: 'modcCode',
      },
      description:
        'Method of Determination Code for the hourly Hg concentration, reported as MODCCode in Sorbent Trap Data record.',
      example: '1',
    },
    pairedTrapAgreement: {
      fieldLabels: {
        label: 'Paired Trap Agreement',
        value: 'pairedTrapAgreement',
      },
      description:
        'Relative deviation (RD) between Traps "a" and "b", rounded to two decimal places.  Reported as PairedTrapAgreement in the Sorbent Trap Data record.',
      example: '8.21',
    },
    rataIndicator: {
      fieldLabels: {
        label: 'RATA Indicator',
        value: 'rataIndicator',
      },
      description: 'Indicates whether the sorbent trap was used for a RATA.',
      example: '1',
    },
    apsCode: {
      fieldLabels: {
        label: 'APS Code',
        value: 'apsCode',
      },
      description: 'Code used to identify the sorbent trap APS.',
      example: 'RATA',
    },
    samplingTrainId: {
      fieldLabels: {
        label: 'Sampling Train ID',
        value: 'id',
      },
      description: 'Unique identifier of a sampling train record.',
      example: 'VM300-9004-CD4DD09DE7634B5E8A7D5F3A89F6F5DF',
    },
    sorbentTrapIdSamplingTrainDto: {
      fieldLabels: {
        label: 'Sorbent Trap ID',
        value: 'sorbentTrapId',
      },
      description: 'Unique identifier of a sorbent trap record.',
      example: 'VM300-9004-1420D935886D4B27B49E78C20FA57B93',
    },
    sorbentTrapSn: {
      fieldLabels: {
        label: 'Sorbent Trap Serial Number',
        value: 'sorbentTrapSN',
      },
      description:
        'Serial number (ID) for the sorbent trap on the component sampling train.  Reported as SerialNumber in Sampling Train Data record.',
      example: 'OL564824',
    },
    btTrapHg: {
      fieldLabels: {
        label: 'Breakthrough Trap Hg',
        value: 'btTrapHg',
      },
      description:
        'Percent breakthrough for the component sampling train sorbent trap.  Reported as PercentBreakthrough in Sampling Train Data record.',
      example: '4.00E-04',
    },
    hgConcentration: {
      fieldLabels: {
        label: 'Hg Concentration',
        value: 'hgConcentration',
      },
      description:
        'Hg concentration determined from the total Hg catch and the total volume of dry gas metered for component sampling train.  Reported as HgConcentration in Sampling Train Data record.',
      example: '2.16E-03',
    },
    mainTrapHg: {
      fieldLabels: {
        label: 'Main Trap Hg',
        value: 'mainTrapHg',
      },
      description:
        'Hg recovered from the main collection section (Section 1) of the sorbent trap for the component sampling train in micrograms.  Reported as MainTrapHg in SamplingTrainData record.',
      example: '2.00E-03',
    },
    percentBreakthrough: {
      fieldLabels: {
        label: 'Percent Breakthrough',
        value: 'percentBreakthrough',
      },
      description:
        'Percent breakthrough for the component sampling train sorbent trap.  Reported as PercentBreakthrough in Sampling Train Data record.',
      example: '20',
    },
    percentSpikeRecovery: {
      fieldLabels: {
        label: 'Percent Spike Recovery',
        value: 'percentSpikeRecovery',
      },
      description:
        'Percent spike recovery result (%) for the component sampling train sorbent trap.  Reported as PercentSpikeRecovery in Sampling Train Data record.',
      example: '97',
    },
    postLeakCheckResultCode: {
      fieldLabels: {
        label: 'Post Leak Check Result',
        value: 'postLeakCheckResultCode',
      },
      description:
        'Reports whether component sampling train passed post test leak check: PASSED or FAILED.  Reported as PostLeakCheckResultCode in Sampling Train Data record.',
      example: 'PASSED',
    },
    referenceSfsrRatio: {
      fieldLabels: {
        label: 'Reference SFSR Ratio',
        value: 'referenceSfsrRatio',
      },
      description:
        'Reference ratio of the unadjusted hourly stack gas volumetric flow rate to the average sample flow rate for the component sampling train.  Reported as ReferenceSFSRRatio in Sampling Train Data record.',
      example: '14.3',
    },
    sampleDamageExplanation: {
      fieldLabels: {
        label: 'Sample Damage Explanation',
        value: 'sampleDamageExplanation',
      },
      description:
        'Whenever the sample is accidentally lost, damaged, or broken and cannot be analyzed (i.e., the Train QA Status Code is "LOST"), provide a brief explanation of the reason why the sample could not be analyzed.',
      example: 'RUN #1',
    },
    samplingRatioCheckResultCode: {
      fieldLabels: {
        label: 'Sampling Ratio Check Result',
        value: 'samplingRatioCheckResultCode',
      },
      description:
        'Reports whether flow proportional sampling maintained for the component sampling train:  PASSED or FAILED.  Reported as SamplingRatioCheckResultCode in Sampling Train Data record.',
      example: 'PASSED',
    },
    spikeReferenceValue: {
      fieldLabels: {
        label: 'Spike Reference Value',
        value: 'spikeReferenceValue',
      },
      description:
        'Mass of the pre-sampling Hg spike in micrograms for the sorbent trap on the component sampling train. Reported as SpikeReferenceValue in Sampling Traiin Data record.',
      example: '2.00E-02',
    },
    totalSampleVolumeDscm: {
      fieldLabels: {
        label: 'Total Sample Volume DSCM',
        value: 'totalSampleVolumeDscm',
      },
      description:
        'The total sample volume (dscm) collected by the component sampling train gas flow meter during the sampling period.  Reported as TotalSampleVolumeDSCM in Sampling Train Data record.',
      example: '1.11',
    },
    trainQaStatusCode: {
      fieldLabels: {
        label: 'Train QA Status Code',
        value: 'trainQaStatusCode',
      },
      description:
        'Reports component sampling train status with PS-12B requirements.  Reported as TrainQAStatusCode in Sampling Train Data record.',
      example: 'PASSED',
    },
    weeklyTestSummaryId: {
      fieldLabels: {
        label: 'Weekly Test Summary ID',
        value: 'id',
      },
      description: 'Unique identifier of a weekly test summary record.',
      example: 'PAULDESKTO-98968A0A86D449F7A53F3176BA9B8B99',
    },
    dateWeeklyTestSummaryDto: {
      fieldLabels: {
        label: 'Test Date',
        value: 'testDate',
      },
      description: 'The date corresponding to the completion of the test.',
      example: '2019-05-07',
    },
    hourWeeklyTestSummaryDto: {
      fieldLabels: {
        label: 'Test Hour',
        value: 'testHour',
      },
      description: 'The hour corresponding to the completion of the test.',
      example: '15',
    },
    minuteWeeklyTestSummaryDto: {
      fieldLabels: {
        label: 'Test Minute',
        value: 'testMinute',
      },
      description: 'The minute corresponding to the completion of the test.',
      example: '0',
    },
    weeklySystemIntegrityId: {
      fieldLabels: {
        label: 'Weekly System Integrity ID',
        value: 'id',
      },
      description: 'Unique identifier of a weekly system integrity record.',
      example: 'PAULDESKTO-43BFEC874EE54620875D85BAE00FA83D',
    },
    weeklyTestSummaryIdWeeklySystemIntegrityDto: {
      fieldLabels: {
        label: 'Weekly Test Summary ID',
        value: 'weeklyTestSumId',
      },
      description: 'Unique identifier of a weekly test summary record.',
      example: 'PAULDESKTO-98968A0A86D449F7A53F3176BA9B8B99',
    },
    apsIndicator: {
      fieldLabels: {
        label: 'APS Indicator',
        value: 'apsIndicator',
      },
      description:
        'If the system integrity error (SIE) is determined using the standard performance specification, "0" is reported. If the alternative performance specification (APS) is used to pass the test, "1" is reported.',
      example: '0',
    },
    systemIntegrityError: {
      fieldLabels: {
        label: 'System Integrity Error',
        value: 'systemIntegrityError',
      },
      description:
        'The results of the single-point system integrity check as a percentage of the reference gas value or, if necessary, as the absolute value of the difference between the reference and measured values.  Reported as SystemIntegrityError in Weekly System Integrity Data record.',
      example: '7.4',
    },
    gasLevelCode: {
      fieldLabels: {
        label: 'Gas Level Code',
        value: 'gasLevelCode',
      },
      description:
        'Identifies whether the standard used is a high- or mid-level NIST-traceable source of oxidized Hg. Reported as GasLevelCode in the Weekly System Integrity Data record.',
      example: 'HIGH',
    },
    referenceValue: {
      fieldLabels: {
        label: 'Reference Value',
        value: 'referenceValue',
      },
      description:
        'Value of the calibration standard used for the injection (ug/scm).  Reported as ReferenceValue in Weekly System Integrity Data record.',
      example: '2.7',
    },
    measuredValue: {
      fieldLabels: {
        label: 'Measured Value',
        value: 'measuredValue',
      },
      description:
        'Value measured by instrument for the calibration standard injection (ug/scm).  Reported as MeasuredValue in Weekly System Integrity Data record.',
      example: '2.5',
    },
    calcOnlineOfflineIndicator: {
      fieldLabels: {
        label: 'Calc. Online Offline Indicator',
        value: 'calcOnlineOfflineIndicator',
      },
      description:
        'Indicator code used to report if the daily calibration was performed online or offline, reported as OnLineOffLineIndicator in the DailyCalibrationData record.  EPA recalculates these values and compares them to reported values',
      example: 'No',
    },
    calcTestResultCode: {
      fieldLabels: {
        label: 'Calc. Test Result Code',
        value: 'calcTestResultCode',
      },
      description:
        'Code used to identify reported test result. EPA recalculates these values and compares them to reported values',
      example: 'IGNORED',
    },
    calcUpscaleAPSInd: {
      fieldLabels: {
        label: 'Calc. Upscale APS Indicator',
        value: 'calcUpscaleApsIndicator',
      },
      description:
        'indicator code used to report if upscale injection result was determined using the alternative performance specification, reported as UpscaleAPSIndicator in the DailyCalibrationData record. EPA recalculates these values and compares them to reported values',
      example: 'Yes',
    },
    calcUpscaleCalibrationError: {
      fieldLabels: {
        label: 'Calc. Upscale Calibration Error',
        value: 'calcUpscaleCalibrationError',
      },
      description:
        'The calibration error or mean difference results from the upscale gas injection, reported as UpscaleCalibrationError in the DailyCalibrationData record.  EPA recalculates these values and compares them to reported values',
      example: '0.5',
    },
    calcZeroAPSIndicator: {
      fieldLabels: {
        label: 'Calc. Zero APS Indicator',
        value: 'calcZeroAPSIndicator',
      },
      description:
        'Indicator code used to report if zero injection result was determined using the alternative performance specification, reported as ZeroAPSIndicator in the DailyCalibrationData record. EPA recalculates these values and compares them to reported values',
      example: 'Yes',
    },
    calcZeroCalibrationError: {
      fieldLabels: {
        label: 'Calc. Zero Calibration Error',
        value: 'calcZeroCalibrationError',
      },
      description:
        'The calibration error results or mean difference from the zero gas injection, reported as ZeroCalibrationError in the DailyCalibrationData record. EPA recalculates these values and compares them to reported values',
      example: '0.5',
    },
    spikeTrapHg: {
      fieldLabels: {
        label: 'Spike Trap Hg',
        value: 'spikeTrapHg',
      },
      description:
        'Hg recovered from the spiked section (Section 3) of the sorbent trap for the component sampling train in micrograms.  Reported as SpikeTrapHg in SamplingTrainData record.',
      example: '1.94E-02',
    },
    volumetricFlowRate: {
      fieldLabels: {
        label: 'Volumetric Flow Rate',
        value: 'volumetricFlowRate',
      },
      description: 'Volumetric flow rate during combustion.',
      example: '784',
    },
  },
  emissionsLimitDisplay: {
    fieldLabels: {
      label: 'Emissions Limit (lb/mmBtu)',
      value: 'emissionsLimitDisplay',
    },
    description:
      'For ARP NOx, the applicable emissions limit based on compliance plan. May either be unit-specific or part of an averaging plan. (lb/mmBtu)',
    example: 0.55,
  },
  emissionsUIFilter: {
    fieldLabels: {
      label: '',
      value: 'emissionsUIFilter',
    },
    description:
      'Indicator of whether or not the program should show up in the CAMPD Custom Data Download Tool UI Program filter for emissions data types.',
    example: true,
  },
  endBlock: {
    fieldLabels: {
      label: 'Serial Number End',
      value: 'endBlock',
    },
    description: 'The ending serial number of an allowance block.',
    example: 276987,
  },
  endDate: {
    fieldLabels: {
      label: '',
      value: 'endDate',
    },
    description: "End date for a given period of a unit's emissions.",
    example: '2019-01-31',
  },
  epaRegion: {
    fieldLabels: {
      label: 'EPA Region',
      value: 'epaRegion',
    },
    description:
      'An EPA Region is a group of U.S. states. EPA Regions are numbered from 1 to 10 and each state belongs to one and only one EPA Region.',
    example: 5,
  },
  excessEmissions: {
    fieldLabels: {
      label: 'Excess Emissions (short tons)',
      value: 'excessEmissions',
    },
    description:
      'The amount of pollutant in short tons emitted in excess of the number of allowances held.',
    example: 0,
  },
  exclude: {
    fieldLabels: {
      label: 'exclude',
      value: '',
    },
    description: 'Selected items will be excluded from the response',
    example: '',
  },
  facilityId: {
    fieldLabels: {
      label: 'Facility ID',
      value: 'facilityId',
    },
    description: `The Facility ID code assigned by the Department of Energy's Energy Information Administration. The Energy Information Administration Plant ID code is also referred to as the "ORIS code", "ORISPL code", "Facility ID", or "Facility code", among other names. If a Plant ID code has not been assigned by the Department of Energy's Energy Information Administration, then plant code means a code beginning with "88" assigned by the EPA's Clean Air Markets Division for electronic reporting.`,
    example: 3,
  },
  facilityName: {
    fieldLabels: {
      label: 'Facility Name',
      value: 'facilityName',
    },
    description: 'The name given by the owners and operators to a facility',
    example: 'Barry',
  },
  fipsCode: {
    fieldLabels: {
      label: 'FIPS Code',
      value: 'fipsCode',
    },
    description:
      'The Federal Information Processing Standards (FIPS) Code of the facility, issued by the National Institute of Standards and Technology, which ensures uniform identification of geographic entities throughout all federal agencies.',
    example: 141,
  },
  fuelGroupCode: {
    fieldLabels: {
      label: '',
      value: 'fuelGroupCode',
    },
    description:
      'Code for the fuel group for the type of fuel combusted by the unit.',
    example: 'COAL',
  },
  fuelGroupDescription: {
    fieldLabels: {
      label: '',
      value: 'fuelGroupDescription',
    },
    description:
      'Full description for the fuel group for the type of fuel combusted by the unit.',
    example: 'All Coal',
  },
  fuelTypeCode: {
    fieldLabels: {
      label: '',
      value: 'fuelTypeCode',
    },
    description: 'Code for the type of fuel combusted by the unit.',
    example: 'C',
  },
  fuelTypeDescription: {
    fieldLabels: {
      label: '',
      value: 'fuelTypeDescription',
    },
    description: 'Full description for the type of fuel combusted by the unit.',
    example: 'Coal',
  },
  grossLoad: {
    fieldLabels: {
      label: 'Gross Load (MWh)',
      value: 'grossLoad',
    },
    description:
      'Electrical generation in MW produced by combusting a given heat input of fuel.',
    example: 900773,
  },
  grossLoadHourly: {
    fieldLabels: {
      label: 'Gross Load (MW)',
      value: 'grossLoad',
    },
    description:
      'Electrical generation in MW produced by combusting a given heat input of fuel.',
    example: 146,
  },
  hclInputRate: {
    fieldLabels: {
      label: 'HCL Input Rate (lb/mmBtu)',
      value: 'hclInputRate',
    },
    description: 'Average HCl hourly emissions rate (lbs/mmBtu)',
    example: 407.5244879786,
  },
  hclMass: {
    fieldLabels: {
      label: 'HCl Mass (lbs)',
      value: 'hclMass',
    },
    description: 'HCl mass emissions (lbs)',
    example: 0.36612,
  },
  hclMassMeasureFlg: {
    fieldLabels: {
      label: 'HCl Mass Measure Indicator',
      value: 'hclMassMeasureFlg',
    },
    description: 'Describes how the HCl Mass values were determined.',
    example: 'Measured',
  },
  hclOutputRate: {
    fieldLabels: {
      label: 'HCl Output Rate (lb/MWh)',
      value: 'hclOutputRate',
    },
    description:
      'Average HCl hourly emissions rate per megawatt hour of output (lbs/MWh)',
    example: 0.00452,
  },
  heatInput: {
    fieldLabels: {
      label: 'Heat Input (mmBtu)',
      value: 'heatInput',
    },
    description:
      'Quantity of heat in mmBtu calculated by multiplying the quantity of fuel by the fuels heat content.',
    example: 1470.2,
  },
  heatInputMeasureFlg: {
    fieldLabels: {
      label: 'Heat Input Measure Indicator',
      value: 'heatInputMeasureFlg',
    },
    description: 'Describes how the Heat Input values were determined.',
  },
  hfInputRate: {
    fieldLabels: {
      label: 'HF Input Rate (lb/mmBtu)',
      value: 'hfInputRate',
    },
    description: 'Average HF hourly emissions rate (lbs/mmBtu)',
  },
  hfMass: {
    fieldLabels: {
      label: 'HF Mass (lbs)',
      value: 'hfMass',
    },
    description: 'HF mass emissions (lbs)',
  },
  hfMassMeasureFlg: {
    fieldLabels: {
      label: 'HF Mass Measure Indicator',
      value: 'hfMassMeasureFlg',
    },
    description: 'Describes how the HF Mass values were determined.',
  },
  hfOutputRate: {
    fieldLabels: {
      label: 'HF Output Rate (lb/MWh)',
      value: 'hfOutputRate',
    },
    description:
      'Average HF hourly emissions rate per megawatt hour of output (lbs/MWh)',
  },
  hgControlInfo: {
    fieldLabels: {
      label: 'Hg Controls',
      value: 'hgControlInfo',
    },
    description:
      'Method or equipment used by the combustion unit to minimize Hg emissions.',
    example: 'Catalyst (gold, palladium, or other) used to oxidize mercury',
  },
  hgInputRate: {
    fieldLabels: {
      label: 'Hg Input Rate (lb/TBtu)',
      value: 'hgInputRate',
    },
    description: 'Average Hg hourly emissions rate (lbs/TBtu)',
    example: 0.9236604702,
  },
  hgMass: {
    fieldLabels: {
      label: 'Hg Mass (lbs)',
      value: 'hgMass',
    },
    description: 'Hg mass emissions (lbs)',
    example: 0.002703,
  },
  hgMassMeasureFlg: {
    fieldLabels: {
      label: 'Hg Mass Measure Indicator',
      value: 'hgMassMeasureFlg',
    },
    description: 'Describes how the Hg Mass values were determined.',
    example: 'Measured',
  },
  hgOutputRate: {
    fieldLabels: {
      label: 'Hg Output Rate (lb/GWh)',
      value: 'hgOutputRate',
    },
    description:
      'Average Hg hourly emissions rate per gigawatt hour of output (lbs/GWh)',
    example: 0.0102,
  },
  hour: {
    fieldLabels: {
      label: 'Hour',
      value: 'hour',
    },
    description:
      'Hour in which activity occurred, recorded using local, standard time.',
    example: 23,
  },
  isActive: {
    fieldLabels: {
      label: 'isActive',
      value: '',
    },
    description:
      'Indicator of whether or not the program is Active (True) or Retired (False)',
    example: '',
  },
  inCompliance: {
    fieldLabels: {
      label: 'In Compliance?',
      value: 'inCompliance',
    },
    description:
      'A facility is in compliance if, at the end of the compliance period, the facility owns enough allowances to cover the amount of pollutant emitted (or for ARP NOx, the actual emissions rate of the pollutant was below the emissions limit).',
    example: 'YES',
  },
  latitude: {
    fieldLabels: {
      label: 'Latitude',
      value: 'latitude',
    },
    description: 'Represents the physical latitude of the facility.',
    example: 45.3792,
  },
  longitude: {
    fieldLabels: {
      label: 'Longitude',
      value: 'longitude',
    },
    description: 'Represents the physical longitude of the facility.',
    example: -93.8958,
  },
  matsGrossLoad: {
    fieldLabels: {
      label: 'MATS Gross Load (MW)',
      value: 'matsGrossLoad',
    },
    description:
      'Electrical generation in MW produced by combusting a given heat input of fuel.',
    example: 146,
  },
  matsHeatInput: {
    fieldLabels: {
      label: 'MATS Heat Input (mmBtu)',
      value: 'matsHeatInput',
    },
    description:
      'Quantity of heat in mmBtu calculated by multiplying the quantity of fuel by the fuels heat content.',
    example: 1470.2,
  },
  maxHourlyHIRate: {
    fieldLabels: {
      label: 'Max Hourly HI Rate (mmBtu/hr)',
      value: 'maxHourlyHIRate',
    },
    description:
      'The design heat input capacity (mmBtu/hr) for the unit or the highest hourly heat input rate observed in the past five years, whichever is greater.',
    example: 7969.2,
  },
  month: {
    fieldLabels: {
      label: 'Month',
      value: 'month',
    },
    description: 'Month on which activity occurred.',
    example: 12,
  },
  nercRegion: {
    fieldLabels: {
      label: 'NERC Region',
      value: 'nercRegion',
    },
    description:
      'The North American Electric Reliability Corporation region in which the facility is located.',
    example: 'Mid-Continent Area Power Pool',
  },
  noxControlInfo: {
    fieldLabels: {
      label: 'NOx Controls',
      value: 'noxControlInfo',
    },
    description:
      'Method or equipment used by the combustion unit to minimize NOx emissions.',
    example:
      'Selective Catalytic Reduction, Low NOx Burner Technology w/ Separated OFA',
  },
  noxMass: {
    fieldLabels: {
      label: 'NOx Mass (short tons)',
      value: 'noxMass',
    },
    description: 'NOx mass emissions (short tons)',
    example: 367.9,
  },
  noxMassHourly: {
    fieldLabels: {
      label: 'NOx Mass (lbs)',
      value: 'noxMass',
    },
    description: 'NOx mass emissions (lbs)',
    example: 552.8,
  },
  noxMassMeasureFlg: {
    fieldLabels: {
      label: 'NOx Mass Measure Indicator',
      value: 'noxMassMeasureFlg',
    },
    description: 'Describes how the NOx Mass values were determined.',
    example: 'Measured and Substitute',
  },
  noxPhase: {
    fieldLabels: {
      label: 'NOx Phase',
      value: 'noxPhase',
    },
    description:
      'The classification of an ARP unit that is subject to an ARP NOx emission rate limit (40 CFR Part 76). The unit is first classified by ARP Phase (Phase 1 or Phase 2) and then the unit (boiler) type is used to determine whether the unit is a Group 1 or Group 2 boiler.  This ARP Phase/Group classification then determines the standard NOx emission rate applicable to the unit.  This information is then used in determining ARP NOx compliance, depending on the compliance approach (standard NOx limit or averaging plan) selected for the unit.',
    example: 'Phase 1 Group 1',
  },
  noxRate: {
    fieldLabels: {
      label: 'NOx Rate (lbs/mmBtu)',
      value: 'noxRate',
    },
    description: 'The average rate of NOx emissions (lbs/mmBtu)',
    example: 0.376,
  },
  noxRateMeasureFlg: {
    fieldLabels: {
      label: 'NOx Rate Measure Indicator',
      value: 'noxRateMeasureFlg',
    },
    description: 'Describes how the NOx Rate values were determined.',
    example: 'Measured and Substitute',
  },
  operatingStatus: {
    fieldLabels: {
      label: 'Operating Status',
      value: 'operatingStatus',
    },
    description:
      'An indication of the condition of a unit relevant to the year (planned, operating, shutdown, etc.).',
    example: 'Operating',
  },
  operatingHoursOnly: {
    fieldLabels: {
      label: '',
      value: 'operatingHoursOnly',
    },
    description:
      'Indicator of whether or not a request should return only data for hours where a unit operated.',
    example: true,
  },
  opTime: {
    fieldLabels: {
      label: 'Operating Time',
      value: 'opTime',
    },
    description: 'Any part of an hour in which a unit combusts any fuel.',
    example: 0.95,
  },
  otherDeductions: {
    fieldLabels: {
      label: 'Other Deductions',
      value: 'otherDeductions',
    },
    description:
      'The sum of other deductions that may have occurred for the account, including Underutilization, Phase I Extension, Projected Emissions Deduction (for Phase I reports), State Cap Deductions, Deduction of Loaned Allowances, July Confirmation Deduction, and Substitution Control by Contract Deduction.',
    example: 0,
  },
  ownerOperator: {
    fieldLabels: {
      label: '',
      value: 'ownerOperator',
    },
    description:
      'The name of any company that owns an allowance account or an affected unit.The name of any company that operates an affected unit.',
    example: 'Alabama Power Company',
  },
  ownerOperatorInfo: {
    fieldLabels: {
      label: 'Owner/Operator',
      value: 'ownerOperator',
    },
    description:
      'The name of any company that owns an allowance account or an affected unit.The name of any company that operates an affected unit.',
    example: 'Alabama Power Company (Operator), Alabama Power Company (Owner)',
  },
  ownId: {
    fieldLabels: {
      label: '',
      value: 'ownId',
    },
    description: 'Unique ID for owner/operator.',
    example: 52226,
  },
  ownType: {
    fieldLabels: {
      label: '',
      value: 'ownType',
    },
    description: 'Owner/Operator type. Either Owner, Operator, or Both.',
    example: 'OPR',
  },
  ozoneIndicator: {
    fieldLabels: {
      label: '',
      value: 'ozoneIndicator',
    },
    description: 'Indicator of whether or not the program is an ozone program.',
    example: false,
  },
  page: {
    fieldLabels: {
      label: '',
      value: 'page',
    },
    description: 'Page number of data being requested.',
    example: 1,
  },
  perPage: {
    fieldLabels: {
      label: '',
      value: 'perPage',
    },
    description: 'Number of results per page.',
    example: 100,
  },
  pmControlInfo: {
    fieldLabels: {
      label: 'PM Controls',
      value: 'pmControlInfo',
    },
    description:
      'Method or equipment used by the combustion unit to minimize PM emissions.',
    example: 'Electrostatic Precipitator',
  },
  primaryFuelInfo: {
    fieldLabels: {
      label: 'Primary Fuel Type',
      value: 'primaryFuelInfo',
    },
    description: 'The primary type of fuel combusted by the unit.',
    example: 'Coal',
  },
  programCode: {
    fieldLabels: {
      label: '',
      value: 'programCode',
    },
    description:
      'Code for statutory or regulatory based options for tracking and reducing air pollution emissions.',
    example: 'CAIRNOX',
  },
  programCodeInfo: {
    fieldLabels: {
      label: 'Program Code',
      value: 'programCodeInfo',
    },
    description:
      'Statutory or regulatory based options for tracking and reducing air pollution emissions.',
    example: 'ARP,CSNOX,CSSO2G2,MATS',
  },
  programDescription: {
    fieldLabels: {
      label: '',
      value: 'programDescription',
    },
    description:
      'Full description for statutory or regulatory based options for tracking and reducing air pollution emissions.',
    example: 'CAIR NOx Annual Program',
  },
  programGroupCode: {
    fieldLabels: {
      label: '',
      value: 'programGroupCode',
    },
    description: 'Code for the group to which the program belongs.',
    example: 'CAIR',
  },
  programGroupDescription: {
    fieldLabels: {
      label: '',
      value: 'programGroupDescription',
    },
    description: 'Full description for the group to which the program belongs.',
    example: 'Clean Air Interstate Rule',
  },
  quarter: {
    fieldLabels: {
      label: 'Quarter',
      value: 'quarter',
    },
    description: 'Calendar quarter in which activity occurred.',
    example: 4,
  },
  retiredIndicator: {
    fieldLabels: {
      label: '',
      value: 'retiredIndicator',
    },
    description: 'Indicator of whether or not the program is retired.',
    example: true,
  },
  secondaryFuelInfo: {
    fieldLabels: {
      label: 'Secondary Fuel Type',
      value: 'secondaryFuelInfo',
    },
    description: 'The secondary type of fuel(s) combusted by the unit.',
    example: 'Diesel Oil',
  },
  sellAccountName: {
    fieldLabels: {
      label: 'Account Name (Transferor)',
      value: 'sellAccountName',
    },
    description:
      'The name of the account transferring allowances in an allowance transaction.',
    example: 'Cardinal',
  },
  sellAccountNumber: {
    fieldLabels: {
      label: 'Account Number (Transferor)',
      value: 'sellAccountNumber',
    },
    description:
      'The number of the account transferring allowances in an allowance transaction.',
    example: '002828FACLTY',
  },
  sellAccountType: {
    fieldLabels: {
      label: 'Account Type (Transferor)',
      value: 'sellAccountType',
    },
    description: `Type of seller's allowance account (Facility, General, etc.).`,
    example: 'Facility Account',
  },
  sellAccountTypeCode: {
    fieldLabels: {
      label: '',
      value: 'sellAccountTypeCode',
    },
    description: 'Code for the type of account selling allowances.',
    example: 'GENERAL',
  },
  sellEpaRegion: {
    fieldLabels: {
      label: 'EPA Region (Transferor)',
      value: 'sellEpaRegion',
    },
    description:
      'For facility and unit accounts, the EPA Region of the account transferring allowances in an allowance transaction.',
    example: 5,
  },
  sellFacilityId: {
    fieldLabels: {
      label: 'Facility ID (Transferor)',
      value: 'sellFacilityId',
    },
    description:
      'For facility and unit accounts, the Facility ID of the account transferring allowances in an allowance transaction.',
    example: 2828,
  },
  sellFacilityName: {
    fieldLabels: {
      label: 'Facility Name (Transferor)',
      value: 'sellFacilityName',
    },
    description:
      'For facility and unit accounts, the facility name of the account transferring allowances in an allowance transaction.',
    example: 'Cardinal',
  },
  sellOwner: {
    fieldLabels: {
      label: 'Owner (Transferor)',
      value: 'sellOwner',
    },
    description:
      'The owner of the account transferring allowances in an allowance transaction.',
    example: 'AEP Generation Resources, Inc., Buckeye Power, Inc.',
  },
  sellSourceCategory: {
    fieldLabels: {
      label: 'Source Category (Transferor)',
      value: 'sellSourceCategory',
    },
    description:
      'For unit accounts, the source category of the account transferring allowances in an allowance transaction.',
    example: 'Electric Utility',
  },
  sellState: {
    fieldLabels: {
      label: 'State (Transferor)',
      value: 'sellState',
    },
    description:
      'For facility and unit accounts, the state of the account transferring allowances in an allowance transaction.',
    example: 'OH',
  },
  so2ControlInfo: {
    fieldLabels: {
      label: 'SO2 Controls',
      value: 'so2ControlInfo',
    },
    description:
      'Method or equipment used by the combustion unit to minimize SO2 emissions.',
    example: 'Wet Limestone',
  },
  so2Mass: {
    fieldLabels: {
      label: 'SO2 Mass (short tons)',
      value: 'so2Mass',
    },
    description: 'SO2 Mass Emissions (short tons)',
    example: 91.2,
  },
  so2MassHourly: {
    fieldLabels: {
      label: 'SO2 Mass (lbs)',
      value: 'so2Mass',
    },
    description: 'SO2 Mass Emissions (lbs)',
    example: 15.7,
  },
  so2MassMeasureFlg: {
    fieldLabels: {
      label: 'SO2 Mass Measure Indicator',
      value: 'so2MassMeasureFlg',
    },
    description: 'Describes how the SO2 Mass values were determined.',
    example: 'Substitute',
  },
  so2Phase: {
    fieldLabels: {
      label: 'SO2 Phase',
      value: 'so2Phase',
    },
    description:
      'Title IV of the Clean Air Act SO2 Phase. Phase I started in 1995; Phase II started in 2000.',
    example: 'Phase 2',
  },
  so2Rate: {
    fieldLabels: {
      label: 'SO2 Rate (lbs/mmBtu)',
      value: 'so2Rate',
    },
    description: 'Average SO2 hourly emissions rate (lbs/mmBtu)',
    example: 0.011,
  },
  so2RateMeasureFlg: {
    fieldLabels: {
      label: 'SO2 Rate Measure Indicator',
      value: 'so2RateMeasureFlg',
    },
    description: 'Describes how the SO2 Rate values were determined.',
    example: 'Calculated',
  },
  sortOrder: {
    fieldLabels: {
      label: '',
      value: 'sortOrder',
    },
    description: '',
    example: null,
  },
  sourceCategory: {
    fieldLabels: {
      label: 'Source Category',
      value: 'sourceCategory',
    },
    description:
      'Description of a unit that classifies it in terms of the primary function of the unit.',
    example: 'Electric Utility',
  },
  sourceCategoryCode: {
    fieldLabels: {
      label: '',
      value: 'sourceCategoryCode',
    },
    description: 'Code for the source category type.',
    example: 'COGEN',
  },
  sourceCategoryDescription: {
    fieldLabels: {
      label: '',
      value: 'sourceCategoryDescription',
    },
    description: 'Full description for the source category type.',
    example: 'Cogeneration',
  },
  stackPipe: {
    activeDate: {
      fieldLabels: {
        label: 'Active Date',
        value: 'activeDate',
      },
      description:
        'The date that emissions first went through the stack or the effective date for data reporting.',
      example: '1995-01-01',
    },
    retireDate: {
      fieldLabels: {
        label: 'Retire Date',
        value: 'retireDate',
      },
      description:
        'Date control equipment was retired. This value will be null for active records.',
      example: null,
    },
    id: {
      fieldLabels: {
        label: '',
        value: 'id',
      },
      description: 'Database id for each stack/pipe at a facility.',
      example: 'MDC-9175C9B44B5D4FB3B446CAF99F5CF6C7',
    },
  },
  stackPipeId: {
    fieldLabels: {
      label: '',
      value: 'stackPipeId',
    },
    description:
      'This is the alphanumeric code assigned by a source to identify a multiple or common stack or pipe at which emissions are determined.',
    example: 'CS0AAN',
  },
  startBlock: {
    fieldLabels: {
      label: 'Serial Number Start',
      value: 'startBlock',
    },
    description: 'The starting serial number of an allowance block.',
    example: 266955,
  },
  state: {
    fieldLabels: {
      label: 'State',
      value: 'state',
    },
    description: 'State in which the facility is located.',
    example: 'AL',
  },
  stateCode: {
    fieldLabels: {
      label: 'State',
      value: 'stateCode',
    },
    description: 'Two letter abbreviation for the State.',
    example: 'AK',
  },
  stateName: {
    fieldLabels: {
      label: '',
      value: 'stateName',
    },
    description: 'Full description of State.',
    example: 'Alaska',
  },
  steamLoad: {
    fieldLabels: {
      label: 'Steam Load (1000 lb)',
      value: 'steamLoad',
    },
    description:
      'Rate of steam pressure generated by a unit or source produced by combusting a given heat input of fuel. (1000 lb/hr)',
    example: 153647,
  },
  steamLoadHourly: {
    fieldLabels: {
      label: 'Steam Load (1000 lb/hr)',
      value: 'steamLoad',
    },
    description:
      'Rate of steam pressure generated by a unit or source produced by combusting a given heat input of fuel. (1000 lb/hr)',
    example: 387,
  },
  sumOpTime: {
    fieldLabels: {
      label: 'Sum of the Operating Time',
      value: 'sumOpTime',
    },
    description: 'Sum of operating time for the time interval',
    example: 1795.25,
  },
  testSummaryId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Unique identifier of a test summary record.',
    example: 'TESTSUM7DAY123',
  },
  testExtensionExemptionId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Unique identifier of a test extension exemption record.',
    example: 'EPA-TESTEXTEXEM-123-a3b0c1d4e6',
  },
  qaCertificationEventId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Unique identifier of a QA certification event record.',
    example: 'EPA-QACERTEVENT-123-a3b0c1d4e6',
  },
  testTypeCode: {
    fieldLabels: {
      label: '',
      value: 'testTypeCode',
    },
    description:
      'Code used to identify test type or the type of test performed.',
    example: '7DAY',
  },
  totalAllowancesDeducted: {
    fieldLabels: {
      label: 'Total Allowances Deducted',
      value: 'totalAllowancesDeducted',
    },
    description: 'The total amount of allowances deducted at compliance.',
    example: 132,
  },
  totalAllowancesHeld: {
    fieldLabels: {
      label: 'Total Allowances Held in Account at Trading Deadline',
      value: 'totalAllowancesHeld',
    },
    description:
      'The total amount of allowances held in the account at compliance.',
    example: 132,
  },
  totalBlock: {
    fieldLabels: {
      label: 'Allowance Block Total',
      value: 'totalBlock',
    },
    description:
      'The quantity of allowances as identified by the Start Serial Number through End Serial Number.',
    example: 10033,
  },
  totalRequiredDeductions: {
    fieldLabels: {
      label: 'Total Required Deductions',
      value: 'totalRequiredDeductions',
    },
    description: 'Sum of Compliance year emissions + Other deductions.',
    example: 132,
  },
  tradingEndDate: {
    fieldLabels: {
      label: '',
      value: 'tradingEndDate',
    },
    description: 'Last date of allowance trading activity for the program.',
    example: '2016-08-10',
  },
  transactionBeginDate: {
    fieldLabels: {
      label: '',
      value: 'transactionBeginDate',
    },
    description:
      "Begin date for a given period of an account's allowance transaction history.",
    example: '2014-11-24',
  },
  transactionDate: {
    fieldLabels: {
      label: 'Transaction Date',
      value: 'transactionDate',
    },
    description: 'The date the allowance transaction was confirmed.',
    example: '2014-11-24',
  },
  transactionEndDate: {
    fieldLabels: {
      label: '',
      value: 'transactionEndDate',
    },
    description:
      "End date for a given period of an account's allowance transaction history.",
    example: '2014-11-25',
  },
  transactionId: {
    fieldLabels: {
      label: 'Transaction ID',
      value: 'transactionId',
    },
    description:
      'The number used to identify a specific allowance transaction.',
    example: 9883,
  },
  transactionTotal: {
    fieldLabels: {
      label: 'Transaction Total',
      value: 'transactionTotal',
    },
    description: 'The total number of allowances involved in a transaction.',
    example: 6,
  },
  transactionType: {
    fieldLabels: {
      label: 'Transaction Type',
      value: 'transactionType',
    },
    description:
      'The type of allowance transaction (e.g. initial allocation, private transaction, etc.).',
    example: 'Private Transfer',
  },
  transactionTypeCode: {
    fieldLabels: {
      label: '',
      value: 'transactionTypeCode',
    },
    description: 'Code for the transaction type.',
    example: 'INITIAL',
  },
  transactionTypeDescription: {
    fieldLabels: {
      label: '',
      value: 'transactionTypeDescription',
    },
    description: 'Full description for the transaction type.',
    example: 'Initial Allocation',
  },
  unit: {
    id: {
      fieldLabels: {
        label: '',
        value: 'id',
      },
      description: 'Database id for each unit at a facility.',
      example: 5,
    },
  },
  unitDTO: {
    associatedMonitorPlanIds: {
      fieldLabels: {
        label: '',
        value: 'associatedMonitorPlanIds',
      },
      description: 'Unique identifier of monitor plans that contain this unit',
      example: 'MDC-9175C9B44B5D4FB3B446CAF99F5CF6C7',
    },
  },
  unitFuelType: {
    fieldLabels: {
      label: '',
      value: 'unitFuelType',
    },
    description: 'Primary or Secondary fuel types combusted by the unit.',
    example: 'Coal',
  },
  unit_id: {
    fieldLabels: {
      label: 'unit_id',
      value: 'unit_id',
    },
    description: 'Database id for each unit at a facility.',
    example: 5,
  },
  unitId: {
    fieldLabels: {
      label: 'Unit ID',
      value: 'unitId',
    },
    description: 'Unique identifier for each unit at a facility.',
    example: 5,
  },
  unitsAffected: {
    fieldLabels: {
      label: 'Units Affected',
      value: 'unitsAffected',
    },
    description:
      'unit ID(s) for units at a facility that are affected by a given compliance program.',
    example: 31,
  },
  unitType: {
    fieldLabels: {
      label: 'Unit Type',
      value: 'unitType',
    },
    description: 'Type of unit or boiler.',
    example: 'Tangentially-fired',
  },
  unitTypeCode: {
    fieldLabels: {
      label: '',
      value: 'unitTypeCode',
    },
    description: 'Code for the unit or boiler type.',
    example: 'AF',
  },
  unitTypeDescription: {
    fieldLabels: {
      label: '',
      value: 'unitTypeDescription',
    },
    description: 'Full description for the unit or boiler type.',
    example: 'Arch-fired boiler',
  },
  unitTypeGroupCode: {
    fieldLabels: {
      label: '',
      value: 'unitTypeGroupCode',
    },
    description: 'Code for the unit or boiler type group.',
    example: 'B',
  },
  unitTypeGroupDescription: {
    fieldLabels: {
      label: '',
      value: 'unitTypeGroupDescription',
    },
    description: 'Full description for the unit or boiler group.',
    example: 'Boilers',
  },
  vintageYear: {
    fieldLabels: {
      label: 'Allowance Vintage Year',
      value: 'vintageYear',
    },
    description: 'Year allowance becomes eligible for use in compliance.',
    example: 2016,
  },
  year: {
    fieldLabels: {
      label: 'Year',
      value: 'year',
    },
    description: 'The calendar year during which activity occurred.',
    example: 2020,
  },
  analyzerRangeDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Unique identifier of an analyzer range history record.',
    example: 'MRHODES16-10C1A63683D34BA7A0833475C802CF91',
  },

  analyzerRangeDTOComponentRecordId: {
    fieldLabels: {
      label: '',
      value: 'componentRecordId',
    },
    description: 'Unique identifier of a monitoring component record.',
    example: 'CAMD-646D15E327E1480D814D48286DA7F073',
  },

  analyzerRangeDTOUserId: {
    fieldLabels: {
      label: '',
      value: 'userId',
    },
    description: 'User account or source of data that added or updated record.',
    example: 'abcde',
  },

  analyzerRangeDTOAddDate: {
    fieldLabels: {
      label: '',
      value: 'addDate',
    },
    description: 'Date and time in which record was added.',
    example: '2009-02-20',
  },

  analyzerRangeDTOUpdateDate: {
    fieldLabels: {
      label: '',
      value: 'updateDate',
    },
    description: 'Date and time in which record was last updated.',
    example: '2009-02-20',
  },

  analyzerRangeDTOAnalyzerRangeCode: {
    fieldLabels: {
      label: 'Analyzer Range',
      value: 'analyzerRangeCode',
    },
    description: 'Code used to identify the analyzer range.',
    example: 'A',
  },

  analyzerRangeDTODualRangeIndicator: {
    fieldLabels: {
      label: 'Dual Range Indicator',
      value: 'dualRangeIndicator',
    },
    description:
      'Used to indicate whether the component is a dual-range analyzer.',
    example: '1',
  },

  analyzerRangeDTOBeginDate: {
    fieldLabels: {
      label: 'Begin Date',
      value: 'beginDate',
    },
    description:
      'Date in which information became effective or activity started.',
    example: '2008-05-17',
  },

  analyzerRangeDTOBeginHour: {
    fieldLabels: {
      label: 'Begin Hour',
      value: 'beginHour',
    },
    description:
      'Hour in which information became effective or activity started.',
    example: '14',
  },

  analyzerRangeDTOEndDate: {
    fieldLabels: {
      label: 'End Date',
      value: 'endDate',
    },
    description:
      'Last date in which information was effective or date in which activity ended. This value will be null if active record.',
    example: null,
  },

  analyzerRangeDTOEndHour: {
    fieldLabels: {
      label: 'End Hour',
      value: 'endHour',
    },
    description:
      'Last hour in which information was effective or hour in which activity ended. This value will be null if active record.',
    example: null,
  },

  analyzerRangeDTOActive: {
    fieldLabels: {
      label: '',
      value: 'active',
    },
    description: 'Flag for active monitor location record',
    example: true,
  },

  componentDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Unique identifier of a monitoring component record.',
    example: 'CAMD-646D15E327E1480D814D48286DA7F073',
  },

  componentDTOLocationId: {
    fieldLabels: {
      label: '',
      value: 'locationId',
    },
    description: 'Unique identifier of a monitoring location record.',
    example: '5770',
  },

  componentDTOUserId: {
    fieldLabels: {
      label: '',
      value: 'userId',
    },
    description: 'User account or source of data that added or updated record.',
    example: 'abcde',
  },

  componentDTOAddDate: {
    fieldLabels: {
      label: '',
      value: 'addDate',
    },
    description: 'Date and time in which record was added.',
    example: '2009-02-20',
  },

  componentDTOUpdateDate: {
    fieldLabels: {
      label: '',
      value: 'updateDate',
    },
    description: 'Date and time in which record was last updated.',
    example: '2009-02-20',
  },

  componentDTOComponentId: {
    fieldLabels: {
      label: 'Component ID',
      value: 'componentId',
    },
    description:
      'The three digit code assigned by the source to identify the component.',
    example: '027',
  },

  componentDTOComponentTypeCode: {
    fieldLabels: {
      label: 'Component Type',
      value: 'componentTypeCode',
    },
    description: 'Code used to identify the component type.',
    example: 'SO2',
  },

  componentDTOAnalyticalPrincipleCode: {
    fieldLabels: {
      label: 'Analytical Principle Code',
      value: 'analyticalPrincipleCode',
    },
    description: 'Code used to identify the Analytical Principle.',
    example: 'BA',
  },

  componentDTOSampleAcquisitionMethodCode: {
    fieldLabels: {
      label: 'Sample Acquisition Method',
      value: 'sampleAcquisitionMethodCode',
    },
    description: 'Code used to identify the sample acquisition method.',
    example: 'DOU',
  },

  componentDTOBasisCode: {
    fieldLabels: {
      label: 'Basis Code',
      value: 'basisCode',
    },
    description: 'Code used to identify the moisture basis.',
    example: 'W',
  },

  componentDTOManufacturer: {
    fieldLabels: {
      label: 'Manufacturer',
      value: 'manufacturer',
    },
    description: 'Name of the manufacturer or developer of the component.',
    example: 'TECO',
  },

  componentDTOModelVersion: {
    fieldLabels: {
      label: 'Model Version',
      value: 'modelVersion',
    },
    description:
      'The model of any hardware component or the version number of the software component.',
    example: '43I',
  },

  componentDTOSerialNumber: {
    fieldLabels: {
      label: 'Serial Number',
      value: 'serialNumber',
    },
    description: 'Serial number of the component.',
    example: '631819420',
  },

  componentDTOHgConverterIndicator: {
    fieldLabels: {
      label: 'Hg Converter Indicator',
      value: 'hgConverterIndicator',
    },
    description:
      'For an Hg component, indicates whether the analyzer has a converter.',
    example: '1',
  },

  ductWafDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Unique identifier of a rectangular duct WAF data record.',
    example: 'CAMD-6847FB7858174AD0ADF87FFBAF85EF9C',
  },

  ductWafDTOLocationId: {
    fieldLabels: {
      label: '',
      value: 'locationId',
    },
    description: 'Unique identifier of a monitoring location record.',
    example: '5',
  },

  ductWafDTOUserId: {
    fieldLabels: {
      label: '',
      value: 'userId',
    },
    description: 'User account or source of data that added or updated record.',
    example: 'abcde',
  },

  ductWafDTOAddDate: {
    fieldLabels: {
      label: '',
      value: 'addDate',
    },
    description: 'Date and time in which record was added.',
    example: '2009-02-20',
  },

  ductWafDTOUpdateDate: {
    fieldLabels: {
      label: '',
      value: 'updateDate',
    },
    description: 'Date and time in which record was last updated.',
    example: '2009-02-20',
  },

  ductWafDTOWafDeterminationDate: {
    fieldLabels: {
      label: 'WAF Determination Date',
      value: 'wafDeterminationDate',
    },
    description: 'The date the WAF applied in column 20 was determined.',
    example: '2020-11-18',
  },

  ductWafDTOWafBeginDate: {
    fieldLabels: {
      label: 'WAF Begin Date',
      value: 'wafBeginDate',
    },
    description:
      'The date on which the WAF was first applied to the flow rate data.',
    example: '2020-11-28',
  },

  ductWafDTOWafBeginHour: {
    fieldLabels: {
      label: 'WAF Begin Hour',
      value: 'wafBeginHour',
    },
    description:
      'The hour in which the WAF was first applied to the flow rate data.',
    example: 12,
  },

  ductWafDTOWafMethodCode: {
    fieldLabels: {
      label: 'WAF Method',
      value: 'wafMethodCode',
    },
    description: 'Code used to identify the WAF determination method.',
    example: 'FT',
  },

  ductWafDTOWafValue: {
    fieldLabels: {
      label: 'WAF Value',
      value: 'wafValue',
    },
    description:
      'The WAF applied to the flow rate data, to four decimal places.',
    example: 1.0454,
  },

  ductWafDTONumberOfTestRuns: {
    fieldLabels: {
      label: 'Number of Test Runs',
      value: 'numberOfTestRuns',
    },
    description:
      'The number of runs in the WAF test (must be one for default WAF and at least three for a measured WAF)',
    example: 3,
  },

  ductWafDTONumberOfTraversePointsWAF: {
    fieldLabels: {
      label: 'Number of Traverse Points WAF',
      value: 'numberOfTraversePointsWAF',
    },
    description: 'The number of Method 1 traverse points in the WAF test runs.',
    example: 48,
  },

  ductWafDTONumberOfTestPorts: {
    fieldLabels: {
      label: 'Number of Test Ports',
      value: 'numberOfTestPorts',
    },
    description:
      'The number of test ports at which measurements were made during the WAF test runs.',
    example: 4,
  },

  ductWafDTONumberOfTraversePointsRef: {
    fieldLabels: {
      label: 'Number of Traverse Points Reference',
      value: 'numberOfTraversePointsRef',
    },
    description:
      'The number of Method 1 traverse points in the reference flow RATA test runs.',
    example: 48,
  },

  ductWafDTODuctWidth: {
    fieldLabels: {
      label: 'Duct Width',
      value: 'ductWidth',
    },
    description: 'The width of the rectangular duct at the test location.',
    example: 12,
  },

  ductWafDTODuctDepth: {
    fieldLabels: {
      label: 'Duct Depth',
      value: 'ductDepth',
    },
    description: 'The depth of the rectangular duct at the test location.',
    example: 18.5,
  },

  ductWafDTOWafEndDate: {
    fieldLabels: {
      label: 'WAF End Date',
      value: 'wafEndDate',
    },
    description:
      'The date on which the WAF was last applied to the flow rate data.',
    example: '2021-09-18',
  },

  ductWafDTOWafEndHour: {
    fieldLabels: {
      label: 'WAF End Hour',
      value: 'wafEndHour',
    },
    description:
      'The hour in which the WAF was last applied to the flow rate data.',
    example: 9,
  },

  matsMethodDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Unique identifier of a MATS compliance method record.',
    example: 'MELISSARHO-FD768B60E4D343158F7AD52EFD704D0E',
  },

  matsMethodDTOLocationId: {
    fieldLabels: {
      label: '',
      value: 'locationId',
    },
    description: 'Unique identifier of a monitoring location record.',
    example: '5770',
  },

  matsMethodDTOUserId: {
    fieldLabels: {
      label: '',
      value: 'userId',
    },
    description: 'User account or source of data that added or updated record.',
    example: 'abcde',
  },

  matsMethodDTOAddDate: {
    fieldLabels: {
      label: '',
      value: 'addDate',
    },
    description: 'Date and time in which record was added.',
    example: '2016-02-23',
  },

  matsMethodDTOUpdateDate: {
    fieldLabels: {
      label: '',
      value: 'updateDate',
    },
    description: 'Date and time in which record was last updated.',
    example: '2016-02-23',
  },

  matsMethodDTOSupplementalMATSParameterCode: {
    fieldLabels: {
      label: 'Supplemental MATS Parameter',
      value: 'supplementalMATSParameterCode',
    },
    description: 'Code used to identify the MATS parameter.',
    example: 'QST',
  },

  matsMethodDTOSupplementalMATSMonitoringMethodCode: {
    fieldLabels: {
      label: 'Supplemental MATS Method',
      value: 'supplementalMATSMonitoringMethodCode',
    },
    description: 'Code used to identify the MATS compliance methodology.',
    example: 'TNHGM',
  },

  matsMethodDTOBeginDate: {
    fieldLabels: {
      label: 'Begin Date',
      value: 'beginDate',
    },
    description:
      'Date on which information became effective or activity started.',
    example: '2016-04-28',
  },

  matsMethodDTOBeginHour: {
    fieldLabels: {
      label: 'Begin Hour',
      value: 'beginHour',
    },
    description: 'Hour in which information became effective.',
    example: 1,
  },

  matsMethodDTOEndDate: {
    fieldLabels: {
      label: 'End Date',
      value: 'endDate',
    },
    description:
      'Last date in which information was effective. This date will be null for active records.',
    example: '2020-04-28',
  },

  matsMethodDTOEndHour: {
    fieldLabels: {
      label: 'End Hour',
      value: 'endHour',
    },
    description:
      'Last hour in which information was effective. This value will be null for active records.',
    example: 23,
  },

  matsMethodDTOActive: {
    fieldLabels: {
      label: '',
      value: 'active',
    },
    description: 'Flag for active monitor location record',
    example: true,
  },

  monitorAttributeDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description:
      'Unique combination of DB_Token and identity key generated by sequence generator.',
    example: 'MELISSAMAT-E496678DE19E4827ADE4D541B18B5756',
  },

  monitorAttributeDTOLocationId: {
    fieldLabels: {
      label: '',
      value: 'locationId',
    },
    description: 'Unique identifier of a monitoring location record.',
    example: '5770',
  },

  monitorAttributeDTOUserId: {
    fieldLabels: {
      label: '',
      value: 'userId',
    },
    description: 'User account or source of data that added or updated record.',
    example: 'abcde',
  },

  monitorAttributeDTOAddDate: {
    fieldLabels: {
      label: '',
      value: 'addDate',
    },
    description: 'Date and time in which record was added.',
    example: '2009-02-20',
  },

  monitorAttributeDTOUpdateDate: {
    fieldLabels: {
      label: '',
      value: 'updateDate',
    },
    description: 'Date and time in which record was last updated.',
    example: '2009-02-20',
  },

  monitorAttributeDTOBeginDate: {
    fieldLabels: {
      label: 'Begin Date',
      value: 'beginDate',
    },
    description:
      'Date on which information became effective or activity started.',
    example: '2008-01-01',
  },

  monitorAttributeDTOEndDate: {
    fieldLabels: {
      label: 'End Date',
      value: 'endDate',
    },
    description:
      'Last date in which information was effective.  This date will be null for active records.',
    example: null,
  },

  monitorAttributeDTOBypassIndicator: {
    fieldLabels: {
      label: 'Bypass Indicator',
      value: 'bypassIndicator',
    },
    description: 'Used to indicate that the stack is used for bypass.',
    example: '1',
  },

  monitorAttributeDTOCrossAreaFlow: {
    fieldLabels: {
      label: 'Cross Area Flow',
      value: 'crossAreaFlow',
    },
    description:
      'The reported inside cross-sectional area in square feet of the stack or duct at the flow monitoring location.',
    example: 306,
  },

  monitorAttributeDTOCrossAreaStackExit: {
    fieldLabels: {
      label: 'Cross Area Stack Exit',
      value: 'crossAreaStackExit',
    },
    description:
      'The inside cross-sectional area in square feet of the stack at the exit.',
    example: 306,
  },

  monitorAttributeDTODuctIndicator: {
    fieldLabels: {
      label: 'Duct Indicator',
      value: 'ductIndicator',
    },
    description: 'Used to indicate that this location is a duct.',
    example: '1',
  },

  monitorAttributeDTOGroundElevation: {
    fieldLabels: {
      label: 'Ground Elevation',
      value: 'groundElevation',
    },
    description:
      'The number of feet above sea level at ground level of the stack or unit.',
    example: 40,
  },

  monitorAttributeDTOMaterialCode: {
    fieldLabels: {
      label: 'Material Code',
      value: 'materialCode',
    },
    description:
      'Code used to identify the material that is used in the monitoring location.',
    example: 'OTHER',
  },

  monitorAttributeDTOShapeCode: {
    fieldLabels: {
      label: 'Shape Code',
      value: 'shapeCode',
    },
    description: 'Code identifying the shape of a monitor location.',
    example: 'ROUND',
  },

  monitorAttributeDTOStackHeight: {
    fieldLabels: {
      label: 'Stack Height',
      value: 'stackHeight',
    },
    description: 'The height in feet of a stack exit above ground level.',
    example: 400,
  },

  monitorAttributeDTOActive: {
    fieldLabels: {
      label: '',
      value: 'active',
    },
    description: 'Flag for active monitor location record',
    example: true,
  },

  monitorDefaultDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Unique identifier of a monitoring default record.',
    example: 'MELISSAMAT-65FB5323A47A459B8FF3E2996EA4EB78',
  },

  monitorDefaultDTOLocationId: {
    fieldLabels: {
      label: '',
      value: 'locationId',
    },
    description: 'Unique identifier of a monitoring location record.',
    example: '5770',
  },

  monitorDefaultDTOUserId: {
    fieldLabels: {
      label: '',
      value: 'userId',
    },
    description: 'User account or source of data that added or updated record.',
    example: 'abcde',
  },

  monitorDefaultDTOAddDate: {
    fieldLabels: {
      label: '',
      value: 'addDate',
    },
    description: 'Date and time in which record was added.',
    example: '2009-02-20',
  },

  monitorDefaultDTOUpdateDate: {
    fieldLabels: {
      label: '',
      value: 'updateDate',
    },
    description: 'Date and time in which record was last updated.',
    example: '2009-02-20',
  },

  monitorDefaultDTOParameterCode: {
    fieldLabels: {
      label: 'Parameter',
      value: 'parameterCode',
    },
    description: 'Code used to identify the parameter.',
    example: 'CO2N',
  },

  monitorDefaultDTODefaultValue: {
    fieldLabels: {
      label: 'Default Value',
      value: 'defaultValue',
    },
    description: 'Value of default, maximum, minimum or constant.',
    example: 5.0,
  },

  monitorDefaultDTODefaultUnitsOfMeasureCode: {
    fieldLabels: {
      label: 'Default Units of Measure',
      value: 'defaultUnitsOfMeasureCode',
    },
    description: 'Code used to identify the hourly parameter units of measure.',
    example: 'PCT',
  },

  monitorDefaultDTODefaultPurposeCode: {
    fieldLabels: {
      label: 'Default Purpose',
      value: 'defaultPurposeCode',
    },
    description:
      'Code used to identify the purpose or intended use of defaults, maximums and constants.',
    example: 'DC',
  },

  monitorDefaultDTOFuelCode: {
    fieldLabels: {
      label: 'Fuel Code',
      value: 'fuelCode',
    },
    description: 'Code used to identify the type of fuel.',
    example: 'NFS',
  },

  monitorDefaultDTOOperatingConditionCode: {
    fieldLabels: {
      label: 'Operating Condition',
      value: 'operatingConditionCode',
    },
    description: 'Code used to identify the operating condition.',
    example: 'A',
  },

  monitorDefaultDTODefaultSourceCode: {
    fieldLabels: {
      label: 'Default Source',
      value: 'defaultSourceCode',
    },
    description: 'Code used to identify the source of the default value.',
    example: 'DEF',
  },

  monitorDefaultDTOGroupId: {
    fieldLabels: {
      label: 'Group ID',
      value: 'groupId',
    },
    description:
      'For a group of identical LME units using testing to determine default NOx rate, this ID identifies the group.',
    example: 'GP2249',
  },

  monitorDefaultDTOBeginDate: {
    fieldLabels: {
      label: 'Begin Date',
      value: 'beginDate',
    },
    description:
      'Date on which information became effective or activity started.',
    example: '2008-01-01',
  },

  monitorDefaultDTOBeginHour: {
    fieldLabels: {
      label: 'Begin Hour',
      value: 'beginHour',
    },
    description: 'Hour in which information became effective.',
    example: 1,
  },

  monitorDefaultDTOEndDate: {
    fieldLabels: {
      label: 'End Date',
      value: 'endDate',
    },
    description:
      'Last date in which information was effective.  This date will be null for active records.',
    example: null,
  },

  monitorDefaultDTOEndHour: {
    fieldLabels: {
      label: 'End Hour',
      value: 'endHour',
    },
    description:
      'Last hour in which information was effective.  This value will be null for active records.',
    example: null,
  },

  monitorDefaultDTOActive: {
    fieldLabels: {
      label: '',
      value: 'active',
    },
    description: 'Flag for active monitor location record',
    example: 'true',
  },

  monitorFormulaDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Unique identifier of a monitoring formula record.',
    example: 'CAMD-1CDAA10B7D6A41BBA6BCFF5534F5C5CA',
  },

  monitorFormulaDTOLocationId: {
    fieldLabels: {
      label: '',
      value: 'locationId',
    },
    description: 'Unique identifier of a monitoring location record.',
    example: '5770',
  },

  monitorFormulaDTOUserId: {
    fieldLabels: {
      label: '',
      value: 'userId',
    },
    description: 'User account or source of data that added or updated record.',
    example: 'abcde',
  },

  monitorFormulaDTOAddDate: {
    fieldLabels: {
      label: '',
      value: 'addDate',
    },
    description: 'Date and time in which record was added.',
    example: '2009-02-20',
  },

  monitorFormulaDTOUpdateDate: {
    fieldLabels: {
      label: '',
      value: 'updateDate',
    },
    description: 'Date and time in which record was last updated.',
    example: '2009-02-20',
  },

  monitorFormulaDTOFormulaId: {
    fieldLabels: {
      label: 'Formula ID',
      value: 'formulaId',
    },
    description: 'The three character formula ID assigned by the source.',
    example: '140',
  },

  monitorFormulaDTOParameterCode: {
    fieldLabels: {
      label: 'Parameter ',
      value: 'parameterCode',
    },
    description: 'Code used to identify the parameter.',
    example: 'SO2',
  },

  monitorFormulaDTOFormulaCode: {
    fieldLabels: {
      label: 'Formula Code',
      value: 'formulaCode',
    },
    description: 'Code used to identify the equation as defined in Part 75.',
    example: 'F-1',
  },

  monitorFormulaDTOFormulaText: {
    fieldLabels: {
      label: 'Formula Text',
      value: 'formulaText',
    },
    description: 'The equation used to calculate the parameter.',
    example: '1.667 * 10**-7 * S#(027-C40) * S#(029-C42)',
  },

  monitorFormulaDTOBeginDate: {
    fieldLabels: {
      label: 'Begin Date',
      value: 'beginDate',
    },
    description:
      'Date on which information became effective or activity started.',
    example: '2007-11-08',
  },

  monitorFormulaDTOBeginHour: {
    fieldLabels: {
      label: 'Begin Hour',
      value: 'beginHour',
    },
    description: 'Hour in which information became effective.',
    example: 17,
  },

  monitorFormulaDTOEndDate: {
    fieldLabels: {
      label: 'End Date',
      value: 'endDate',
    },
    description:
      'Last date in which information was effective.  This date will be null for active records.',
    example: null,
  },

  monitorFormulaDTOEndHour: {
    fieldLabels: {
      label: 'End Hour',
      value: 'endHour',
    },
    description:
      'Last hour in which information was effective.  This value will be null for active records.',
    example: null,
  },

  monitorFormulaDTOActive: {
    fieldLabels: {
      label: '',
      value: 'active',
    },
    description: 'Flag for active monitor location record',
    example: true,
  },

  monitorLoadDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Unique identifier of a monitoring load record.',
    example: 'MRHODES16-A1EAFB506CA8442D843275B667DD3C53',
  },

  monitorLoadDTOLocationId: {
    fieldLabels: {
      label: '',
      value: 'locationId',
    },
    description: 'Unique identifier of a monitoring location record.',
    example: '5770',
  },

  monitorLoadDTOUserId: {
    fieldLabels: {
      label: '',
      value: 'userId',
    },
    description: 'User account or source of data that added or updated record.',
    example: 'abcde',
  },

  monitorLoadDTOAddDate: {
    fieldLabels: {
      label: '',
      value: 'addDate',
    },
    description: 'Date and time in which record was added.',
    example: '2018-10-12',
  },

  monitorLoadDTOUpdateDate: {
    fieldLabels: {
      label: '',
      value: 'updateDate',
    },
    description: 'Date and time in which record was last updated.',
    example: '2018-10-12',
  },

  monitorLoadDTOMaximumLoadValue: {
    fieldLabels: {
      label: 'Max Load Value',
      value: 'maximumLoadValue',
    },
    description:
      'Maximum hourly gross load associated with the unit, stack, or pipe at full capacity.',
    example: 353,
  },

  monitorLoadDTOMaximumLoadUnitsOfMeasureCode: {
    fieldLabels: {
      label: 'Max Load Units of Measure',
      value: 'maximumLoadUnitsOfMeasureCode',
    },
    description:
      'Code used to identify the units of measure for maximum load value',
    example: 'MW',
  },

  monitorLoadDTOLowerOperationBoundary: {
    fieldLabels: {
      label: 'Lower Operation Boundary',
      value: 'lowerOperationBoundary',
    },
    description: 'Lower boundary of range of operation.',
    example: 145,
  },

  monitorLoadDTOUpperOperationBoundary: {
    fieldLabels: {
      label: 'Upper Operation Boundary',
      value: 'upperOperationBoundary',
    },
    description: 'Upper boundary of range of operation.',
    example: 301,
  },

  monitorLoadDTONormalLevelCode: {
    fieldLabels: {
      label: 'Normal Level ',
      value: 'normalLevelCode',
    },
    description: 'Code used to identify the normal load or operating level.',
    example: 'L',
  },

  monitorLoadDTOSecondLevelCode: {
    fieldLabels: {
      label: 'Second Level',
      value: 'secondLevelCode',
    },
    description:
      'Code used to identify the second most frequently used load or operating level.',
    example: 'M',
  },

  monitorLoadDTOSecondNormalIndicator: {
    fieldLabels: {
      label: 'Second Normal Indicator',
      value: 'secondNormalIndicator',
    },
    description:
      'Used to indicate the reporting of an additional normal load or a second operating level.',
    example: '1',
  },

  monitorLoadDTOLoadAnalysisDate: {
    fieldLabels: {
      label: 'Load Analysis Date',
      value: 'loadAnalysisDate',
    },
    description:
      'The date in which load analysis was performed.  This date only applies to CEM and Appendix D locations.',
    example: '2018-09-31',
  },

  monitorLoadDTOBeginDate: {
    fieldLabels: {
      label: 'Begin Date',
      value: 'beginDate',
    },
    description:
      'Date on which information became effective or activity started.',
    example: '2018-09-31',
  },

  monitorLoadDTOBeginHour: {
    fieldLabels: {
      label: 'Begin Hour',
      value: 'beginHour',
    },
    description: 'Hour in which information became effective.',
    example: 23,
  },

  monitorLoadDTOEndDate: {
    fieldLabels: {
      label: 'End Date',
      value: 'endDate',
    },
    description:
      'Last date in which information was effective.  This date will be null for active records.',
    example: null,
  },

  monitorLoadDTOEndHour: {
    fieldLabels: {
      label: 'End Hour',
      value: 'endHour',
    },
    description:
      'Last hour in which information was effective.  This value will be null for active records.',
    example: null,
  },

  monitorLoadDTOActive: {
    fieldLabels: {
      label: '',
      value: 'active',
    },
    description: 'Flag for active monitor location record',
    example: true,
  },

  monitorMethodDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Unique identifier of a monitoring method record.',
    example: 'MELISSAMAT-7BA7D94FDB4F4D4A8E1161E4B46150F6',
  },

  monitorMethodDTOLocationId: {
    fieldLabels: {
      label: '',
      value: 'locationId',
    },
    description: 'Unique identifier of a monitoring location record.',
    example: '5770',
  },

  monitorMethodDTOUserId: {
    fieldLabels: {
      label: '',
      value: 'userId',
    },
    description: 'User account or source of data that added or updated record.',
    example: 'abcde',
  },

  monitorMethodDTOAddDate: {
    fieldLabels: {
      label: '',
      value: 'addDate',
    },
    description: 'Date and time in which record was added.',
    example: '2009-02-20',
  },

  monitorMethodDTOUpdateDate: {
    fieldLabels: {
      label: '',
      value: 'updateDate',
    },
    description: 'Date and time in which record was last updated.',
    example: '2009-02-20',
  },

  monitorMethodDTOParameterCode: {
    fieldLabels: {
      label: 'Parameter',
      value: 'parameterCode',
    },
    description: 'Code used to identify the parameter.',
    example: 'SO2',
  },

  monitorMethodDTOMonitoringMethodCode: {
    fieldLabels: {
      label: 'Methodology',
      value: 'monitoringMethodCode',
    },
    description: 'Code used to identify the monitoring methodology.',
    example: 'CEM',
  },

  monitorMethodDTOSubstituteDataCode: {
    fieldLabels: {
      label: 'Substitute Data',
      value: 'substituteDataCode',
    },
    description: 'Code used to identify the substitute data approach type.',
    example: 'SPTS',
  },

  monitorMethodDTOBypassApproachCode: {
    fieldLabels: {
      label: 'Bypass Approach',
      value: 'bypassApproachCode',
    },
    description:
      'Code used to identify the value to be used for an unmonitored bypass stack.',
    example: 'BYMAX',
  },

  monitorMethodDTOBeginDate: {
    fieldLabels: {
      label: 'Begin Date',
      value: 'beginDate',
    },
    description:
      'Date on which information became effective or activity started.',
    example: '2007-11-27',
  },

  monitorMethodDTOBeginHour: {
    fieldLabels: {
      label: 'Begin Hour',
      value: 'beginHour',
    },
    description: 'Hour in which information became effective.',
    example: 17,
  },

  monitorMethodDTOEndDate: {
    fieldLabels: {
      label: 'End Date',
      value: 'endDate',
    },
    description:
      'Last date in which information was effective.  This date will be null for active records.',
    example: null,
  },

  monitorMethodDTOEndHour: {
    fieldLabels: {
      label: 'End Hour',
      value: 'endHour',
    },
    description:
      'Last hour in which information was effective.  This value will be null for active records.',
    example: null,
  },

  monitorMethodDTOActive: {
    fieldLabels: {
      label: '',
      value: 'active',
    },
    description: 'Flag for active monitor location record',
    example: true,
  },

  monitorPlanCommentDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Unique identifier of a monitoring plan comment record.',
    example: 'V-APPWORK--66020554D3C844E78730052AC3808151',
  },

  monitorPlanCommentDTOPlanId: {
    fieldLabels: {
      label: '',
      value: 'planId',
    },
    description: 'Unique identifier of a monitoring plan record.',
    example: 'MDC-2483BA898490441B97B7D7CFB1BE6D9A',
  },

  monitorPlanCommentDTOUserId: {
    fieldLabels: {
      label: '',
      value: 'userId',
    },
    description: 'User account or source of data that added or updated record.',
    example: 'abcde',
  },

  monitorPlanCommentDTOAddDate: {
    fieldLabels: {
      label: '',
      value: 'addDate',
    },
    description: 'Date and time in which record was added.',
    example: '2020-10-28',
  },

  monitorPlanCommentDTOUpdateDate: {
    fieldLabels: {
      label: '',
      value: 'updateDate',
    },
    description: 'Date and time in which record was last updated.',
    example: '2020-10-28',
  },

  monitorPlanCommentDTOMonitoringPlanComment: {
    fieldLabels: {
      label: 'Comment',
      value: 'monitoringPlanComment',
    },
    description: 'Comment on a monitoring plan',
    example:
      'DAHS was updated for GT-1 on 11/10/2016 by a previous owner, but the component ID was not updated on the gas system. This was corrected on 9/8/2020.',
  },

  monitorPlanReportingFreqDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description:
      'Unique identifier of a monitoring plan Reporting Frequency record.',
    example: 'MDC-7A8D8E101C484732954BE84D49D9249A',
  },

  monitorPlanReportingFreqDTOPlanId: {
    fieldLabels: {
      label: '',
      value: 'planId',
    },
    description: 'Unique identifier of a monitoring plan record.',
    example: 'MDC-2483BA898490441B97B7D7CFB1BE6D9A',
  },

  monitorPlanReportingFreqDTOUserId: {
    fieldLabels: {
      label: '',
      value: 'userId',
    },
    description: 'User account or source of data that added or updated record.',
    example: 'abcde',
  },

  monitorPlanReportingFreqDTOAddDate: {
    fieldLabels: {
      label: '',
      value: 'addDate',
    },
    description: 'Date and time in which record was added.',
    example: '2020-10-28',
  },

  monitorPlanReportingFreqDTOUpdateDate: {
    fieldLabels: {
      label: '',
      value: 'updateDate',
    },
    description: 'Date and time in which record was last updated.',
    example: '2020-10-28',
  },

  monitorPlanReportingFreqDTOMonitoringPlanReportingFreqCode: {
    fieldLabels: {
      label: '',
      value: 'reportFrequencyCode',
    },
    description: 'Report Frequency Code on a monitoring plan',
    example: 'OS',
  },

  monitorPlanCommentDTOBeginDate: {
    fieldLabels: {
      label: 'Begin Date',
      value: 'beginDate',
    },
    description: 'Date and time in which an activity started or ended.',
    example: '2020-09-28',
  },

  monitorPlanCommentDTOEndDate: {
    fieldLabels: {
      label: 'End Date',
      value: 'endDate',
    },
    description:
      'Last date in which information was effective.  This date will be null for active records.',
    example: null,
  },

  monitorPlanCommentDTOActive: {
    fieldLabels: {
      label: '',
      value: 'active',
    },
    description: 'Flag for active monitor location record',
    example: true,
  },

  monitorQualificationDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Unique identifier of a monitoring qualification record.',
    example: 'NJCHQLAPA3-82CD1A0A9D2A48BFB5203F82D390183E',
  },

  monitorQualificationDTOLocationId: {
    fieldLabels: {
      label: '',
      value: 'locationId',
    },
    description: 'Unique identifier of a monitoring location record.',
    example: '4168',
  },

  monitorQualificationDTOUserId: {
    fieldLabels: {
      label: '',
      value: 'userId',
    },
    description: 'User account or source of data that added or updated record.',
    example: 'abcde',
  },

  monitorQualificationDTOAddDate: {
    fieldLabels: {
      label: '',
      value: 'addDate',
    },
    description: 'Date and time in which record was added.',
    example: '2018-07-20',
  },

  monitorQualificationDTOUpdateDate: {
    fieldLabels: {
      label: '',
      value: 'updateDate',
    },
    description: 'Date and time in which record was last updated.',
    example: '2018-07-20',
  },

  monitorQualificationDTOQualificationTypeCode: {
    fieldLabels: {
      label: 'Qualification Type',
      value: 'qualificationTypeCode',
    },
    description: 'Code used to identify the qualification type.',
    example: 'LMES',
  },

  monitorQualificationDTOBeginDate: {
    fieldLabels: {
      label: 'Begin Date',
      value: 'beginDate',
    },
    description:
      'Date on which information became effective or activity started.',
    example: '2018-05-01',
  },

  monitorQualificationDTOEndDate: {
    fieldLabels: {
      label: 'End Date',
      value: 'endDate',
    },
    description:
      'Last date in which information was effective.  This date will be null for active records.',
    example: null,
  },

  monitorQualificationDTOActive: {
    fieldLabels: {
      label: '',
      value: 'active',
    },
    description: 'Flag for active monitor location record',
    example: true,
  },

  lEEQualificationDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Unique identifier of a monitoring qualification LEE record.',
    example: 'MIKE-DELL-CFEDE4EB21124391BE13E7FB5A56081C',
  },

  lEEQualificationDTOQualificationId: {
    fieldLabels: {
      label: '',
      value: 'qualificationId',
    },
    description: 'Unique identifier of a monitoring qualification record.',
    example: 'MIKE-DELL-E4CE3931A24E4C1395B3C81457B300CC',
  },

  lEEQualificationDTOUserId: {
    fieldLabels: {
      label: '',
      value: 'userId',
    },
    description: 'User account or source of data that added or updated record.',
    example: 'abcde',
  },

  lEEQualificationDTOAddDate: {
    fieldLabels: {
      label: '',
      value: 'addDate',
    },
    description: 'Date and time in which record was added.',
    example: '2018-10-25',
  },

  lEEQualificationDTOUpdateDate: {
    fieldLabels: {
      label: '',
      value: 'updateDate',
    },
    description: 'Date and time in which record was last updated.',
    example: '2018-10-25',
  },

  lEEQualificationDTOQualificationTestDate: {
    fieldLabels: {
      label: 'Qualification Test Date',
      value: 'qualificationTestDate',
    },
    description: 'End date of the initial LEE qualifying test or a retest.',
    example: '2018-07-15',
  },

  lEEQualificationDTOParameterCode: {
    fieldLabels: {
      label: 'Parameter Code',
      value: 'parameterCode',
    },
    description: 'Parameter code associated with the LEE qualification.',
    example: 'HG',
  },

  lEEQualificationDTOQualificationTestType: {
    fieldLabels: {
      label: 'Qualification Test Type',
      value: 'qualificationTestType',
    },
    description:
      'Indication of whether the qualifying test was an initial test or retest.',
    example: 'INITIAL',
  },

  lEEQualificationDTOPotentialAnnualMassEmissions: {
    fieldLabels: {
      label: 'Potential Annual Hg Mass Emissions',
      value: 'potentialAnnualHgMassEmissions',
    },
    description: 'Potential annual Hg mass emissions used for LEE qualification.',
    example: 10.2,
  },

  lEEQualificationDTOApplicableEmissionStandard: {
    fieldLabels: {
      label: 'Applicable Emission Standard',
      value: 'applicableEmissionStandard',
    },
    description: 'Applicable Emission Standard used for LEE qualification.',
    example: 29,
  },

  lEEQualificationDTOUnitsOfStandard: {
    fieldLabels: {
      label: 'Unit of Standard',
      value: 'unitsOfStandard',
    },
    description: 'units of the Applicable Emission Standard.',
    example: 'LBGWH',
  },

  lEEQualificationDTOPercentageOfEmissionStandard: {
    fieldLabels: {
      label: 'Percentage of Emission Standard',
      value: 'percentageOfEmissionStandard',
    },
    description:
      'Result of initial test or retest as a percentage of the Applicable Emission Standard.',
    example: 72.8,
  },

  cpmsQualificationDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Unique identifier of a monitoring qualification CPMS record.',
    example: 'MIKE-DELL-CFEDE4EB21124391BE13E7FB5A56081C',
  },

  cpmsQualificationDTOQualificationId: {
    fieldLabels: {
      label: '',
      value: 'qualificationId',
    },
    description: 'Unique identifier of a monitoring qualification record.',
    example: 'MIKE-DELL-E4CE3931A24E4C1395B3C81457B300CC',
  },

  cpmsQualificationDTOUserId: {
    fieldLabels: {
      label: '',
      value: 'userId',
    },
    description: 'User account or source of data that added or updated record.',
    example: 'abcde',
  },

  cpmsQualificationDTOAddDate: {
    fieldLabels: {
      label: '',
      value: 'addDate',
    },
    description: 'Date and time in which record was added.',
    example: '2018-10-25',
  },

  cpmsQualificationDTOUpdateDate: {
    fieldLabels: {
      label: '',
      value: 'updateDate',
    },
    description: 'Date and time in which record was last updated.',
    example: '2018-10-25',
  },

  cpmsQualificationDTOQualificationDataYear: {
    fieldLabels: {
      label: 'Qualification Data Year',
      value: 'qualificationDataYear',
    },
    description: 'Data year of the initial CPMS qualifying test or a retest.',
    example: '2023',
  },

  cpmsQualificationDTOStackTestNumber: {
    fieldLabels: {
      label: 'Stack Test Number',
      value: 'stackTestNumber',
    },
    description: 'Test Number of the initial CPMS qualifying test or a retest.',
    example: 'Test1234',
  },

  cpmsQualificationDTOOperatingLimit: {
    fieldLabels: {
      label: 'Operating Limit',
      value: 'operatingLimit',
    },
    description:
      'Operating Limit of the initial CPMS qualifying test or a retest.',
    example: '9999.9',
  },

  lMEQualificationDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Unique identifier of a monitoring qualification LME record.',
    example: 'NJCHQLAPA3-C89F6E1CE9D447A298B7D5E428ADD1AC',
  },

  lMEQualificationDTOQualificationId: {
    fieldLabels: {
      label: '',
      value: 'qualificationId',
    },
    description: 'Unique identifier of a monitoring qualification record.',
    example: 'NJCHQLAPA3-82CD1A0A9D2A48BFB5203F82D390183E',
  },

  lMEQualificationDTOUserId: {
    fieldLabels: {
      label: '',
      value: 'userId',
    },
    description: 'User account or source of data that added or updated record.',
    example: 'abcde',
  },

  lMEQualificationDTOAddDate: {
    fieldLabels: {
      label: '',
      value: 'addDate',
    },
    description: 'Date and time in which record was added.',
    example: '2015-07-20',
  },

  lMEQualificationDTOUpdateDate: {
    fieldLabels: {
      label: '',
      value: 'updateDate',
    },
    description: 'Date and time in which record was last updated.',
    example: '2015-07-20',
  },

  lMEQualificationDTOQualificationDataYear: {
    fieldLabels: {
      label: 'Qualification Data Year',
      value: 'qualificationDataYear',
    },
    description: 'Year corresponding to the qualification data.',
    example: '2015',
  },

  lMEQualificationDTOOperatingHours: {
    fieldLabels: {
      label: 'Operating Hours',
      value: 'operatingHours',
    },
    description:
      'Annual number of operating hours used to determine qualification.',
    example: 105,
  },

  lMEQualificationDTOSo2Tons: {
    fieldLabels: {
      label: 'SO2 Tons',
      value: 'so2Tons',
    },
    description: 'Annual SO2 value used to determine qualification.',
    example: 0.9,
  },

  lMEQualificationDTONoxTons: {
    fieldLabels: {
      label: 'NOx Tons',
      value: 'noxTons',
    },
    description: 'Annual NOX emissions to determine qualification.',
    example: 6.4,
  },

  pCTQualificationDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description:
      'Unique identifier of a monitoring qualification percentage record.',
    example: '02227-BSGR-56EB0D4D400642A4860D6402698BBE16',
  },

  pCTQualificationDTOQualificationId: {
    fieldLabels: {
      label: '',
      value: 'qualificationId',
    },
    description: 'Unique identifier of a monitoring qualification record.',
    example: '02022-614W-608B84AEDB8148C7B3935EE935AB835F',
  },

  pCTQualificationDTOUserId: {
    fieldLabels: {
      label: '',
      value: 'userId',
    },
    description: 'User account or source of data that added or updated record.',
    example: 'abcde',
  },

  pCTQualificationDTOAddDate: {
    fieldLabels: {
      label: '',
      value: 'addDate',
    },
    description: 'Date and time in which record was added.',
    example: '2021-04-01',
  },

  pCTQualificationDTOUpdateDate: {
    fieldLabels: {
      label: '',
      value: 'updateDate',
    },
    description: 'Date and time in which record was last updated.',
    example: '2021-04-01',
  },

  pCTQualificationDTOQualificationYear: {
    fieldLabels: {
      label: 'Qualification Year',
      value: 'qualificationYear',
    },
    description: 'Year corresponding to the qualification data.',
    example: 2021,
  },

  pCTQualificationDTOAveragePercentValue: {
    fieldLabels: {
      label: 'Average Percentage Value',
      value: 'averagePercentValue',
    },
    description: 'The average percent capacity or heat input usage.',
    example: 100,
  },

  pCTQualificationDTOYr1QualificationDataYear: {
    fieldLabels: {
      label: 'Year 1 Qualification Data Year',
      value: 'yr1QualificationDataYear',
    },
    description: 'The first year corresponding to the qualification data.',
    example: 2018,
  },

  pCTQualificationDTOYr1QualificationDataTypeCode: {
    fieldLabels: {
      label: 'Year 1 Qualification Data Type',
      value: 'yr1QualificationDataTypeCode',
    },
    description:
      'Code used to identify the type qualification in the first year.',
    example: 'A',
  },

  pCTQualificationDTOYr1PercentageValue: {
    fieldLabels: {
      label: 'Year 1 Percentage Value',
      value: 'yr1PercentageValue',
    },
    description: 'The percent capacity or heat input usage in the first year.',
    example: 100,
  },

  pCTQualificationDTOYr2QualificationDataYear: {
    fieldLabels: {
      label: 'Year 2 Qualification Data Year',
      value: 'yr2QualificationDataYear',
    },
    description: 'The second year corresponding to the qualification data.',
    example: 2019,
  },

  pCTQualificationDTOYr2QualificationDataTypeCode: {
    fieldLabels: {
      label: 'Year 2 Qualification Data Type',
      value: 'yr2QualificationDataTypeCode',
    },
    description:
      'Code used to identify the type qualification in the second year.',
    example: 'A',
  },

  pCTQualificationDTOYr2PercentageValue: {
    fieldLabels: {
      label: 'Year 2 Percentage Value',
      value: 'yr2PercentageValue',
    },
    description: 'The percent capacity or heat input usage in the second year.',
    example: 100,
  },

  pCTQualificationDTOYr3QualificationDataYear: {
    fieldLabels: {
      label: 'Year 3 Qualification Data Year',
      value: 'yr3QualificationDataYear',
    },
    description: 'The third year corresponding to the qualification data.',
    example: 2020,
  },

  pCTQualificationDTOYr3QualificationDataTypeCode: {
    fieldLabels: {
      label: 'Year 3 Qualification Data Type',
      value: 'yr3QualificationDataTypeCode',
    },
    description:
      'Code used to indicate type of data for year (actual or projected) used to determine peaking or gas-fired qualification.',
    example: 'A',
  },

  pCTQualificationDTOYr3PercentageValue: {
    fieldLabels: {
      label: 'Year 3 Percentage Value',
      value: 'yr3PercentageValue',
    },
    description: 'The percent capacity or heat input usage in the third year.',
    example: 100,
  },

  monitorSpanDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Unique identifier of a monitoring span record.',
    example: 'MRHODES16-A5DBB8DF4F1D4D3A95AD2553008EB554',
  },

  monitorSpanDTOLocationId: {
    fieldLabels: {
      label: '',
      value: 'locationId',
    },
    description: 'Unique identifier of a monitoring location record.',
    example: '5770',
  },

  monitorSpanDTOUserid: {
    fieldLabels: {
      label: '',
      value: 'userid',
    },
    description: 'User account or source of data that added or updated record.',
    example: 'abcde',
  },

  monitorSpanDTOAddDate: {
    fieldLabels: {
      label: '',
      value: 'addDate',
    },
    description: 'Date and time in which record was added.',
    example: '2009-02-20',
  },

  monitorSpanDTOUpdateDate: {
    fieldLabels: {
      label: '',
      value: 'updateDate',
    },
    description: 'Date and time in which record was last updated.',
    example: '2009-02-20',
  },

  monitorSpanDTOComponentTypeCode: {
    fieldLabels: {
      label: 'Component Type',
      value: 'componentTypeCode',
    },
    description: 'Code used to indicate the component type.',
    example: 'SO2',
  },

  monitorSpanDTOSpanScaleCode: {
    fieldLabels: {
      label: 'Span Scale',
      value: 'spanScaleCode',
    },
    description: 'Code used to identify the span scale.',
    example: 'H',
  },

  monitorSpanDTOSpanMethodCode: {
    fieldLabels: {
      label: 'Span Method',
      value: 'spanMethodCode',
    },
    description:
      'Code used to identify the method used to calculate MPC/MEC/MPF.',
    example: 'HD',
  },

  monitorSpanDTOMecValue: {
    fieldLabels: {
      label: 'MEC Value',
      value: 'mecValue',
    },
    description:
      'The Maximum Expected Concentration (MEC) value reported in the SO2 and NOx span records.',
    example: 156.9,
  },

  monitorSpanDTOMpcValue: {
    fieldLabels: {
      label: 'MPC Value',
      value: 'mpcValue',
    },
    description:
      'The Maximum Potential Concentration (MPC) value reported in the high scale record for NOx, SO2, or CO2.',
    example: 177.2,
  },

  monitorSpanDTOMpfValue: {
    fieldLabels: {
      label: 'MPF Value',
      value: 'mpfValue',
    },
    description:
      'For parameter FLOW, report the Maximum Potential Flow (MPF) value for the monitoring location in (scfh) on a wet basis.',
    example: 8563000,
  },

  monitorSpanDTOSpanValue: {
    fieldLabels: {
      label: 'Span Value Value',
      value: 'spanValue',
    },
    description:
      'The Span Value determined according to the requirements of Part 75 or (if applicable) 40 CFR Part 63, Subpart UUUUU.',
    example: 200,
  },

  monitorSpanDTOFullScaleRange: {
    fieldLabels: {
      label: 'Full Scale Range',
      value: 'fullScaleRange',
    },
    description:
      'Full scale range in units of daily calibration for SO2, NOx, CO2, O2, HCl, and flow rate, must be greater than or equal to the span value.',
    example: 200,
  },

  monitorSpanDTOScaleTransitionPoint: {
    fieldLabels: {
      label: 'Scale Transition Point',
      value: 'scaleTransitionPoint',
    },
    description:
      'If a dual range analyzer is installed for NOx, SO2 or CO2 (see ANALYZER RANGE DATA), report the concentration value at which the DAHS switches from recording on the normal range to recording on the secondary range (usually low to high). Report this value in both the low and high scale records. Scale transition point is not reported for FLOW, HCl, and Hg span.',
    example: 200,
  },

  monitorSpanDTOSpanUnitsOfMeasureCode: {
    fieldLabels: {
      label: 'Span Unit of Measure',
      value: 'spanUnitsOfMeasureCode',
    },
    description: 'Code used to identify the calibration units of measure.',
    example: 'PPM',
  },

  monitorSpanDTODefaultHighRange: {
    fieldLabels: {
      label: 'Default High Range',
      value: 'defaultHighRange',
    },
    description:
      'The default high range value must be 200 percent of the maximum potential concentration, only reported if the high scale record for the parameter.',
    example: null,
  },

  monitorSpanDTOFlowSpanValue: {
    fieldLabels: {
      label: 'Flow Span Value',
      value: 'flowSpanValue',
    },
    description:
      'The product of the MPF and a factor no less than 1.00 and no greater than 1.25. Flow rate span value in scfh.',
    example: null,
  },

  monitorSpanDTOFlowFullScaleRange: {
    fieldLabels: {
      label: 'Flow Full Range',
      value: 'flowFullScaleRange',
    },
    description:
      'The actual full-scale range value expressed in units of scfh for the parameter FLOW, must be greater than or equal to the flow rate span value',
    example: null,
  },

  monitorSpanDTOBeginDate: {
    fieldLabels: {
      label: 'Begin Date',
      value: 'beginDate',
    },
    description:
      'Date on which information became effective or activity started.',
    example: '2018-05-17',
  },

  monitorSpanDTOBeginHour: {
    fieldLabels: {
      label: 'Begin Hour',
      value: 'beginHour',
    },
    description: 'Hour in which information became effective.',
    example: 14,
  },

  monitorSpanDTOEndDate: {
    fieldLabels: {
      label: 'End Date',
      value: 'endDate',
    },
    description:
      'Last date in which information was effective.  This date will be null for active records.',
    example: null,
  },

  monitorSpanDTOEndHour: {
    fieldLabels: {
      label: 'End Hour',
      value: 'endHour',
    },
    description:
      'Last hour in which information was effective.  This value will be null for active records.',
    example: null,
  },

  monitorSpanDTOActive: {
    fieldLabels: {
      label: '',
      value: 'active',
    },
    description: 'Flag for active monitor location record',
    example: true,
  },

  monitorSystemDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Unique identifier of a monitoring system record.',
    example: 'CAMD-4B0DC37051224A7AA9D8CA1E5BE6B4D4',
  },

  monitorSystemDTOLocationId: {
    fieldLabels: {
      label: '',
      value: 'locationId',
    },
    description: 'Unique identifier of a monitoring location record.',
    example: '5770',
  },

  monitorSystemDTOUserId: {
    fieldLabels: {
      label: '',
      value: 'userId',
    },
    description: 'User account or source of data that added or updated record.',
    example: 'abcde',
  },

  monitorSystemDTOAddDate: {
    fieldLabels: {
      label: '',
      value: 'addDate',
    },
    description: 'Date and time in which record was added.',
    example: '2009-02-20',
  },

  monitorSystemDTOUpdateDate: {
    fieldLabels: {
      label: '',
      value: 'updateDate',
    },
    description: 'Date and time in which record was last updated.',
    example: '2009-02-20',
  },

  monitorSystemDTOMonitoringSystemId: {
    fieldLabels: {
      label: 'system ID',
      value: 'monitoringSystemId',
    },
    description:
      'The three digit code used by the source to identify the monitoring system.',
    example: 'C42',
  },

  monitorSystemDTOSystemTypeCode: {
    fieldLabels: {
      label: 'system Type',
      value: 'systemTypeCode',
    },
    description: 'Code used to identify the type (parameter) of the system.',
    example: 'FLOW',
  },

  monitorSystemDTOSystemDesignationCode: {
    fieldLabels: {
      label: 'system Designation',
      value: 'systemDesignationCode',
    },
    description:
      'Code used to indicate designation of monitoring system as primary, backup etc.',
    example: 'P',
  },

  monitorSystemDTOFuelCode: {
    fieldLabels: {
      label: 'Fuel Code',
      value: 'fuelCode',
    },
    description: 'Code used to identify the type of fuel.',
    example: 'NFS',
  },

  monitorSystemDTOBeginDate: {
    fieldLabels: {
      label: 'Begin Date',
      value: 'beginDate',
    },
    description:
      'Date on which information became effective or activity started.',
    example: '2007-11-28',
  },

  monitorSystemDTOBeginHour: {
    fieldLabels: {
      label: 'Begin Hour',
      value: 'beginHour',
    },
    description:
      'Hour in which information became effective or activity started.',
    example: 17,
  },

  monitorSystemDTOEndDate: {
    fieldLabels: {
      label: 'End Date',
      value: 'endDate',
    },
    description:
      'Last date in which information was effective.  This date will be null for active records.',
    example: null,
  },

  monitorSystemDTOEndHour: {
    fieldLabels: {
      label: 'End Hour',
      value: 'endHour',
    },
    description:
      'Last hour in which information was effective.  This value will be null for active records.',
    example: null,
  },

  monitorSystemDTOActive: {
    fieldLabels: {
      label: '',
      value: 'active',
    },
    description: 'Flag for active monitor location record',
    example: true,
  },

  systemComponentDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Unique identifier of a Monitoring System Component record.',
    example: 'MELISSARHO-3F31E53DE9B14764936BFB0AC7225847',
  },

  systemComponentDTOLocationId: {
    fieldLabels: {
      label: '',
      value: 'locationId',
    },
    description: 'Unique identifier of a monitoring location record.',
    example: '5770',
  },

  systemComponentDTOMonitoringSystemRecordId: {
    fieldLabels: {
      label: '',
      value: 'monitoringSystemRecordId',
    },
    description: 'Unique identifier of a monitoring system record.',
    example: 'CAMD-4B0DC37051224A7AA9D8CA1E5BE6B4D4',
  },

  systemComponentDTOComponentRecordId: {
    fieldLabels: {
      label: '',
      value: 'componentRecordId',
    },
    description: 'Unique identifier of a monitoring component record.',
    example: 'MELISSARHO-58F5F687BFDB4BD7AD49046386B13ABE',
  },

  systemComponentDTOUserId: {
    fieldLabels: {
      label: '',
      value: 'userId',
    },
    description: 'User account or source of data that added or updated record.',
    example: 'abcde',
  },

  systemComponentDTOAddDate: {
    fieldLabels: {
      label: '',
      value: 'addDate',
    },
    description: 'Date and time in which record was added.',
    example: '2009-02-20',
  },

  systemComponentDTOUpdateDate: {
    fieldLabels: {
      label: '',
      value: 'updateDate',
    },
    description: 'Date and time in which record was last updated.',
    example: '2009-02-20',
  },

  systemComponentDTOBeginDate: {
    fieldLabels: {
      label: 'Begin Date',
      value: 'beginDate',
    },
    description:
      'Date on which information became effective or activity started.',
    example: '2008-12-31',
  },

  systemComponentDTOBeginHour: {
    fieldLabels: {
      label: 'Begin Hour',
      value: 'beginHour',
    },
    description: 'Hour in which information became effective.',
    example: 23,
  },

  systemComponentDTOEndDate: {
    fieldLabels: {
      label: 'End Date',
      value: 'endDate',
    },
    description:
      'Last date in which information was effective.  This date will be null for active records.',
    example: null,
  },

  systemComponentDTOEndHour: {
    fieldLabels: {
      label: 'End Hour',
      value: 'endHour',
    },
    description:
      'Last hour in which information was effective.  This value will be null for active records.',
    example: null,
  },

  systemComponentDTOComponentId: {
    fieldLabels: {
      label: 'Component ID',
      value: 'componentId',
    },
    description:
      'The three digit code assigned by the source to identify the component.',
    example: '044',
  },

  systemComponentDTOComponentTypeCode: {
    fieldLabels: {
      label: 'Component Type',
      value: 'componentTypeCode',
    },
    description: 'Code used to identify the component type.',
    example: 'DL',
  },

  systemComponentDTOSampleAcquisitionMethodCode: {
    fieldLabels: {
      label: 'Sample Acquisition Method',
      value: 'sampleAcquisitionMethodCode',
    },
    description: 'Code used to identify the sample acquisition method.',
    example: 'DIL',
  },

  systemComponentDTOBasisCode: {
    fieldLabels: {
      label: 'Basis Code',
      value: 'basisCode',
    },
    description: 'Code used to identify the moisture basis (W,D).',
    example: 'W',
  },

  systemComponentDTOManufacturer: {
    fieldLabels: {
      label: 'Manufacturer',
      value: 'manufacturer',
    },
    description: 'Name of the manufacturer or developer of the component.',
    example: 'ESC',
  },

  systemComponentDTOModelVersion: {
    fieldLabels: {
      label: 'Model Version',
      value: 'modelVersion',
    },
    description:
      'The model of any hardware component or the version number of the software component.',
    example: 'SM8175',
  },

  systemComponentDTOSerialNumber: {
    fieldLabels: {
      label: 'Serial Number',
      value: 'serialNumber',
    },
    description: 'Serial number of the component.',
    example: 'X11011',
  },

  systemComponentDTOHgConverterIndicator: {
    fieldLabels: {
      label: 'Hg Converter Indicator',
      value: 'hgConverterIndicator',
    },
    description:
      'For an Hg component, indicates whether the analyzer has a converter.',
    example: '1',
  },

  systemComponentDTOActive: {
    fieldLabels: {
      label: '',
      value: 'active',
    },
    description: 'Flag for active monitor location record',
    example: true,
  },

  systemFuelFlowDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Unique identifier of a system fuel flow record.',
    example: 'WS150071-0C5A8F50F7F24DB8B73E65C18C2063E3',
  },

  systemFuelFlowDTOMonitoringSystemRecordId: {
    fieldLabels: {
      label: '',
      value: 'monitoringSystemRecordId',
    },
    description: 'Unique identifier of a monitoring system record.',
    example: 'WS150071-1BCDEDC4D2944376ACA55FCABE9D60A1',
  },

  systemFuelFlowDTOUserId: {
    fieldLabels: {
      label: '',
      value: 'userId',
    },
    description: 'User account or source of data that added or updated record.',
    example: 'abcde',
  },

  systemFuelFlowDTOAddDate: {
    fieldLabels: {
      label: '',
      value: 'addDate',
    },
    description: 'Date and time in which record was added.',
    example: '2009-02-20',
  },

  systemFuelFlowDTOUpdateDate: {
    fieldLabels: {
      label: '',
      value: 'updateDate',
    },
    description: 'Date and time in which record was last updated.',
    example: '2010-09-01',
  },

  systemFuelFlowDTOMaximumFuelFlowRate: {
    fieldLabels: {
      label: 'Max  Fuel Rate',
      value: 'maximumFuelFlowRate',
    },
    description: 'Maximum fuel flow rate.',
    example: 30667,
  },

  systemFuelFlowDTOSystemFuelFlowUOMCode: {
    fieldLabels: {
      label: 'system Fuel Flow Units of Measure',
      value: 'systemFuelFlowUOMCode',
    },
    description: 'Code used to identify the fuel flow units of measure.',
    example: 'HSCF',
  },

  systemFuelFlowDTOMaximumFuelFlowRateSourceCode: {
    fieldLabels: {
      label: 'Max Fuel Flow Rate Source',
      value: 'maximumFuelFlowRateSourceCode',
    },
    description: 'Code used to identify the source of maximum fuel flow.',
    example: 'URV',
  },

  systemFuelFlowDTOBeginDate: {
    fieldLabels: {
      label: 'Begin Date',
      value: 'beginDate',
    },
    description:
      'Date on which information became effective or activity started.',
    example: '2010-08-01',
  },

  systemFuelFlowDTOBeginHour: {
    fieldLabels: {
      label: 'Begin Hour',
      value: 'beginHour',
    },
    description: 'Hour in which information became effective.',
    example: 12,
  },

  systemFuelFlowDTOEndDate: {
    fieldLabels: {
      label: 'End Date',
      value: 'endDate',
    },
    description:
      'Last date in which information was effective.  This date will be null for active records.',
    example: null,
  },

  systemFuelFlowDTOEndHour: {
    fieldLabels: {
      label: 'End Hour',
      value: 'endHour',
    },
    description:
      'Last hour in which information was effective or hour in which activity ended. This value will be null for active records.',
    example: null,
  },

  systemFuelFlowDTOFuelCode: {
    fieldLabels: {
      label: 'Fuel Code',
      value: 'fuelCode',
    },
    description: 'The type of fuel measured by the system.',
    example: 'PNG',
  },

  systemFuelFlowDTOSystemTypeCode: {
    fieldLabels: {
      label: 'system Type',
      value: 'systemTypeCode',
    },
    description: 'Code used to identify the type (parameter) of the system.',
    example: 'GAS',
  },

  systemFuelFlowDTOActive: {
    fieldLabels: {
      label: '',
      value: 'active',
    },
    description: 'Flag for active monitor location record',
    example: true,
  },

  unitCapacityDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Identity key for UNIT_CAPACITY table.',
    example: '50233',
  },

  unitCapacityDTOUnitId: {
    fieldLabels: {
      label: '',
      value: 'unitId',
    },
    description: 'Identity key for UNIT table.',
    example: '4705',
  },

  unitCapacityDTOUserId: {
    fieldLabels: {
      label: '',
      value: 'userId',
    },
    description:
      'The user name of the person or process that created the record if the Update Date is empty.  Otherwise this is the user name of the person or process that made the last update.',
    example: 'abcde',
  },

  unitCapacityDTOAddDate: {
    fieldLabels: {
      label: '',
      value: 'addDate',
    },
    description: 'Date the record was created.',
    example: '2009-02-20',
  },

  unitCapacityDTOUpdateDate: {
    fieldLabels: {
      label: '',
      value: 'updateDate',
    },
    description: 'Date of the last record update.',
    example: '2009-02-20',
  },

  unitCapacityDTOMaximumHourlyHeatInputCapacity: {
    fieldLabels: {
      label: 'Maximum Hourly Heat Input Capacity',
      value: 'maximumHourlyHeatInputCapacity',
    },
    description:
      'The design heat input capacity (in mmBtu/hr) for the unit or the highest hourly heat input rate observed in the past five years, whichever is greater.',
    example: 2322.1,
  },

  unitCapacityDTOBeginDate: {
    fieldLabels: {
      label: 'Begin Date',
      value: 'beginDate',
    },
    description: 'Date on which a relationship or an activity began.',
    example: '2009-01-01',
  },

  unitCapacityDTOEndDate: {
    fieldLabels: {
      label: 'End Date',
      value: 'endDate',
    },
    description:
      'Date on which a relationship or an activity ended. This value will be null for active records.',
    example: null,
  },

  unitCapacityDTOActive: {
    fieldLabels: {
      label: '',
      value: 'active',
    },
    description: 'Flag for active monitor location record',
    example: true,
  },

  unitControlDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Unique identifier of a unit control record.',
    example: '618',
  },

  unitControlDTOUnitId: {
    fieldLabels: {
      label: '',
      value: 'unitId',
    },
    description: 'Unique identifier of a unit record.',
    example: '734',
  },

  unitControlDTOUserId: {
    fieldLabels: {
      label: '',
      value: 'userId',
    },
    description: 'User account or source of data that added or updated record.',
    example: 'abcde',
  },

  unitControlDTOAddDate: {
    fieldLabels: {
      label: '',
      value: 'addDate',
    },
    description: 'Date and time in which record was added.',
    example: '2009-02-20',
  },

  unitControlDTOUpdateDate: {
    fieldLabels: {
      label: '',
      value: 'updateDate',
    },
    description: 'Date and time in which record was last updated.',
    example: '2009-02-20',
  },

  unitControlDTOParameterCode: {
    fieldLabels: {
      label: 'Parameter Code',
      value: 'parameterCode',
    },
    description:
      'Code used to identify the parameter which is controlled by the control equipment.',
    example: 'NOX',
  },

  unitControlDTOControlCode: {
    fieldLabels: {
      label: 'Control Code',
      value: 'controlCode',
    },
    description: 'Codes used to identify the type of control equipment.',
    example: 'SNCR',
  },

  unitControlDTOOriginalCode: {
    fieldLabels: {
      label: 'Original Code',
      value: 'originalCode',
    },
    description:
      'Code used to identify that the control equipment was installed and operational as part of the original unit design.',
    example: '0',
  },

  unitControlDTOInstallDate: {
    fieldLabels: {
      label: 'Install Date',
      value: 'installDate',
    },
    description:
      'Approximate date the original control equipment was or will be installed.',
    example: '2005-01-01',
  },

  unitControlDTOOptimizationDate: {
    fieldLabels: {
      label: 'Optimization Date',
      value: 'optimizationDate',
    },
    description:
      'The approximate date on which optimization of control equipment was completed and the equipment made fully operational if the control equipment was not part of the original installation.',
    example: '2006-06-01',
  },

  unitControlDTOSeasonalControlsIndicator: {
    fieldLabels: {
      label: 'Seasonal Controls Indicator',
      value: 'seasonalControlsIndicator',
    },
    description:
      'Code used to identify if the NOx control equipment was used during the ozone season.',
    example: '0',
  },

  unitControlDTORetireDate: {
    fieldLabels: {
      label: 'Retire Date',
      value: 'retireDate',
    },
    description:
      'Date control equipment was retired. This value will be null for active records.',
    example: null,
  },

  unitControlDTOActive: {
    fieldLabels: {
      label: '',
      value: 'active',
    },
    description: 'Flag for active monitor location record',
    example: true,
  },

  unitFuelDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Identity key for UNIT_FUEL table.',
    example: 'EXPCH0876-C97319A3E96540BF92077C58DB9E2A17',
  },

  unitFuelDTOUnitId: {
    fieldLabels: {
      label: '',
      value: 'unitId',
    },
    description: 'Identity key for UNIT table.',
    example: '91233',
  },

  unitFuelDTOUserId: {
    fieldLabels: {
      label: '',
      value: 'userId',
    },
    description:
      'The user name of the person or process that created the record if the Update Date is empty.  Otherwise this is the user name of the person or process that made the last update.',
    example: 'abcde',
  },

  unitFuelDTOAddDate: {
    fieldLabels: {
      label: '',
      value: 'addDate',
    },
    description: 'Date the record was created.',
    example: '2009-02-20',
  },

  unitFuelDTOUpdateDate: {
    fieldLabels: {
      label: '',
      value: 'updateDate',
    },
    description: 'Date of the last record update.',
    example: '2015-04-16',
  },

  unitFuelDTOFuelCode: {
    fieldLabels: {
      label: 'Fuel Code',
      value: 'fuelCode',
    },
    description:
      'The type of fuel which a UNIT is capable or will be capable of combusting.',
    example: 'C',
  },

  unitFuelDTOIndicatorCode: {
    fieldLabels: {
      label: 'Indicator Code',
      value: 'indicatorCode',
    },
    description: 'Code that indicates fuel or control type.',
    example: 'P',
  },

  unitFuelDTOOzoneSeasonIndicator: {
    fieldLabels: {
      label: 'Ozone Season Indicator',
      value: 'ozoneSeasonIndicator',
    },
    description: 'Indicator that FUEL is used during ozone season.',
    example: '0',
  },

  unitFuelDTODemGCV: {
    fieldLabels: {
      label: 'Demonstration Method for Gross Calorific Value',
      value: 'demGCV',
    },
    description:
      'Demonstration method to qualify for monthly GCV fuel sampling.',
    example: 'GGC',
  },

  unitFuelDTODemSO2: {
    fieldLabels: {
      label: 'Demonstration Method for Percent Sulfur',
      value: 'demSO2',
    },
    description:
      'Demonstration method to qualify for daily fuel sampling for percent sulfur.',
    example: 'SGC',
  },

  unitFuelDTOActualOrProjectCode: {
    fieldLabels: {
      label: '',
      value: 'actualOrProjectCode',
    },
    description:
      'Indicator of whether the begin date for the fuel type is an actual date or a projected date.',
    example: '',
  },

  unitFuelDTOSulfurContent: {
    fieldLabels: {
      label: '',
      value: 'sulfurContent',
    },
    description: 'The percent sulfur content of the fuel, by weight.',
    example: '',
  },

  unitFuelDTOBeginDate: {
    fieldLabels: {
      label: 'Begin Date',
      value: 'beginDate',
    },
    description: 'Date on which a relationship or an activity began.',
    example: '1995-01-01',
  },

  unitFuelDTOEndDate: {
    fieldLabels: {
      label: 'End Date',
      value: 'endDate',
    },
    description: 'Date on which a relationship or an activity ended.',
    example: '2015-03-30',
  },

  unitFuelDTOActive: {
    fieldLabels: {
      label: '',
      value: 'active',
    },
    description: 'Flag for active monitor location record',
    example: true,
  },

  unitStackConfigurationDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Unique identifier of a monitoring configuration record.',
    example: 'CAMD-18DD175CE7EF4256B78469865D84F576',
  },

  unitStackConfigurationDTOUserId: {
    fieldLabels: {
      label: '',
      value: 'userId',
    },
    description: 'User account or source of data that added or updated record.',
    example: 'abcde',
  },

  unitStackConfigurationDTOAddDate: {
    fieldLabels: {
      label: '',
      value: 'addDate',
    },
    description: 'Date and time in which record was added.',
    example: '2009-02-20',
  },

  unitStackConfigurationDTOUpdateDate: {
    fieldLabels: {
      label: '',
      value: 'updateDate',
    },
    description: 'Date and time in which record was last updated.',
    example: '2009-02-20',
  },

  unitStackConfigurationDTOUnitId: {
    fieldLabels: {
      label: '',
      value: 'unitId',
    },
    description:
      'Unique identifier of a unit record which is generated by the EPA Host System.',
    example: '2',
  },

  unitStackConfigurationDTOStackPipeId: {
    fieldLabels: {
      label: 'Stack Pipe ID',
      value: 'stackPipeId',
    },
    description: 'Unique identifier of a stack or pipe record.',
    example: 'MDC-CCB8D6D0D4E34D24A99C01DCD14078DF',
  },

  unitStackConfigurationDTOBeginDate: {
    fieldLabels: {
      label: 'Begin Date',
      value: 'beginDate',
    },
    description:
      'Date in which information became effective or activity started.',
    example: '1995-01-01',
  },

  unitStackConfigurationDTOEndDate: {
    fieldLabels: {
      label: 'End Date',
      value: 'endDate',
    },
    description:
      'Last date in which information was effective or date in which activity ended. This value will be null for active records.',
    example: '2020-12-31',
  },

  unitStackConfigurationDTOActive: {
    fieldLabels: {
      label: '',
      value: 'active',
    },
    description: 'Flag for active monitor location record',
    example: true,
  },

  monitorLocationDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Unique identifier of a monitoring location record.',
    example: '5',
  },

  monitorLocationDTOUnitId: {
    fieldLabels: {
      label: 'Unit ID',
      value: 'unitId',
    },
    description:
      'Unique identifier of a unit record which is generated by the EPA Host System. This value will be null if the record contains stack configuration.',
    example: null,
  },

  monitorLocationDTOStackPipeId: {
    fieldLabels: {
      label: 'Stack Pipe ID',
      value: 'stackPipeId',
    },
    description: 'Unique identifier of a stack or pipe record.',
    example: 'CS0AAN',
  },

  monitorLocationDTOActiveDate: {
    fieldLabels: {
      label: 'Active Date',
      value: 'activeDate',
    },
    description:
      'The date that emissions first went through the stack or the effective date for data reporting.',
    example: '1995-01-01',
  },

  monitorLocationDTORetireDate: {
    fieldLabels: {
      label: 'Retire Date',
      value: 'retireDate',
    },
    description:
      'The actual date that the stack or pipe was last used for emissions measurement or estimation purposes.',
    example: '2015-08-24',
  },

  monitorLocationDTONonLoadBasedIndicator: {
    fieldLabels: {
      label: 'Non Load Based Indicator',
      value: 'nonLoadBasedIndicator',
    },
    description:
      'Used to indicate whether the unit is classified as a non-load based unit.',
    example: '1',
  },

  monitorLocationDTOUnitRecordId: {
    fieldLabels: {
      label: '',
      value: 'unitRecordId',
    },
    description:
      'Unique identifier of a unit record which is generated by the EPA Host System.',
    example: '3',
  },

  monitorLocationDTOName: {
    fieldLabels: {
      label: '',
      value: 'name',
    },
    description:
      'Character codes source assigned to identify a stack, pipe and/or unit.',
    example: 'CS0AAN',
  },

  monitorLocationDTOType: {
    fieldLabels: {
      label: '',
      value: 'type',
    },
    description: 'Configuration type, unit or stack',
    example: 'stack',
  },

  monitorLocationDTOActive: {
    fieldLabels: {
      label: '',
      value: 'active',
    },
    description: 'Flag for active monitor location record',
    example: true,
  },

  monitorPlanDTOId: {
    fieldLabels: {
      label: '',
      value: 'id',
    },
    description: 'Unique identifier of a monitoring plan record.',
    example: 'TWCORNEL5-C0E3879920A14159BAA98E03F1980A7A',
  },

  monitorPlanDTOOrisCode: {
    fieldLabels: {
      label: 'Oris Code',
      value: 'orisCode',
    },
    description:
      'EIA-assigned identifier or facility ID assigned by CAMD (if EIA number is not applicable).',
    example: 3,
  },

  monitorPlanDTOFacId: {
    fieldLabels: {
      label: '',
      value: 'facId',
    },
    description:
      'Unique identifier of a facility record which is generated by the EPA Host System.',
    example: '1',
  },

  monitorPlanDTOName: {
    fieldLabels: {
      label: '',
      value: 'name',
    },
    description:
      'Character codes source assigned to identify a stack, pipe and/or unit.',
    example: '1,2,CSA00N',
  },

  monitorPlanDTOBeginReportPeriodId: {
    fieldLabels: {
      label: '',
      value: 'beginReportPeriodId',
    },
    description: 'Unique identifier of a reporting period record.',
    example: null,
  },

  monitorPlanDTOEndReportPeriodId: {
    fieldLabels: {
      label: '',
      value: 'endReportPeriodId',
    },
    description:
      'Unique identifier of a reporting period record. This value will be null for active records.',
    example: null,
  },

  // Emisson Submission Access
  emSubmissionId: {
    fieldLabels: {
      label: 'Emission Submission ID',
      value: 'id',
    },
    description: 'Unique identifier of a emission submission record.',
    example: '3220',
  },
  emSubmissionLocations: {
    fieldLabels: {
      label: 'Location',
      value: 'locations',
    },
    description: 'Unique identifier of a monitoring location record.',
    example: 'CT-2',
  },
  reportingFrequencyCode: {
    fieldLabels: {
      label: 'Reporting Frequency Code',
      value: 'reportingFrequencyCode',
    },
    description: 'Reporting Frequency Code.',
    example: 'Q',
  },
  reportingPeriodAbbreviation: {
    fieldLabels: {
      label: 'Reporting Period Abbreviation',
      value: 'reportingPeriodAbbreviation',
    },
    description: 'Reporting Period Abbreviation.',
    example: '2023 Q3',
  },
  submissionTypeDescription: {
    fieldLabels: {
      label: 'Submission Type Description',
      value: 'submissionTypeDescription',
    },
    description: 'Submission Type Description.',
    example: 'Initial Submission for the Reporting Period',
  },
  emissionStatusCode: {
    fieldLabels: {
      label: 'Emission Status Code',
      value: 'status',
    },
    description: 'Emission Status Code.',
    example: 'RECVD',
  },
  submissionAvailabilityCode: {
    fieldLabels: {
      label: 'Submission Availability Code',
      value: 'submissionAvailabilityCode',
    },
    description: 'Submission Availability Code.',
    example: 'UPDATED',
  },
  submissionAvailabilityDescription: {
    fieldLabels: {
      label: 'Submission Availability Description',
      value: 'submissionAvailabilityDescription',
    },
    description: 'Submission Availability Description.',
    example: 'Updated on Host',
  },
  lastSubmissionId: {
    fieldLabels: {
      label: 'last Submission Id',
      value: 'lastSubmissionId',
    },
    description: 'last Submission Id',
    example: '1483739',
  },
  severityLevel: {
    fieldLabels: {
      label: 'Severity Level',
      value: 'severityLevel',
    },
    description: 'Severity Level',
    example: 'No Errors',
  },
  resubExplanation: {
    fieldLabels: {
      label: 'Require Submission Explanation',
      value: 'resubExplanation',
    },
    description: 'Require Submission Explanation',
    example: 'Some Explanation',
  },
  openDate: {
    fieldLabels: {
      label: 'Open Date',
      value: 'openDate',
    },
    description: 'Date and time in which issue was open.',
    example: '2019-04-23',
  },
  closeDate: {
    fieldLabels: {
      label: 'Close Date',
      value: 'closeDate',
    },
    description: 'Date and time in which issue was close.',
    example: '2019-04-23',
  },

  //Qa Cert Event/TEE/TEST Maintainance
  testNumber: {
    fieldLabels: {
      label: 'Test Number',
      value: 'testNumber',
    },
    description: 'Unique Number of a Test Summary record.',
    example: 'EPA-007-14007',
  },
  testDescription: {
    fieldLabels: {
      label: 'Test Description',
      value: 'testDescription',
    },
    description: 'Test Description',
    example: 'HNOX',
  },
  testComment: {
    fieldLabels: {
      label: 'Test Comment',
      value: 'testComment',
    },
    description: 'Test Comment',
    example: 'Passed',
  },
  certEventCode: {
    fieldLabels: {
      label: 'QA Cert Event Code',
      value: 'certEventCode',
    },
    description: 'Unique Code for QA Cert Event.',
    example: '102',
  },
  certEventDescription: {
    fieldLabels: {
      label: 'QA Cert Event Description',
      value: 'certEventDescription',
    },
    description: 'QA Cert Event Description',
    example:
      'Replace or Repair any of These Components of an Extractive or Dilution-type System---Photomultiplier, Lamp, Internal Analyzer Filter or Vacuum Pump, Capillary Tube, O3 Generator, Reaction Chamber, NO2 Converter, Ozonator Dryer, Sample Cell, Optical Filters',
  },
  beginDateTime: {
    fieldLabels: {
      label: 'Test Summary Begin Date and Time',
      value: 'beginDateTime',
    },
    description: 'Test Summary Begin Date and Time',
    example: '07/20/2010 09:00',
  },
  endDateTime: {
    fieldLabels: {
      label: 'Test Summary End Date and Time',
      value: 'endDateTime',
    },
    description: 'Test Summary End Date and Time',
    example: '07/20/2010 09:00',
  },
  eventDateTime: {
    fieldLabels: {
      label: 'QA Cert Event Date and Time',
      value: 'eventDateTime',
    },
    description: 'QA Cert Event Date and Time',
    example: '07/20/2010 09:00',
  },
  conditionalDateTime: {
    fieldLabels: {
      label: 'Conditional Date and Time',
      value: 'conditionalDateTime',
    },
    description: 'Conditional Date and Time',
    example: '07/20/2010 09:00',
  },
  lastCompletedDateTime: {
    fieldLabels: {
      label: 'Last Completed Date and Time',
      value: 'lastCompletedDateTime',
    },
    description: 'Last Completed Date and Time',
    example: '07/20/2010 09:00',
  },
  requiredTestCode: {
    fieldLabels: {
      label: 'Required Test Code',
      value: 'requiredTestCode',
    },
    description: 'Required Test Code',
    example: '2',
  },
  requiredTestDescription: {
    fieldLabels: {
      label: 'Required Test Description',
      value: 'requiredTestDescription',
    },
    description: 'Required Test Description',
    example:
      'Normal Load RATA, 7-day Calibration Error Test, Linearity Check, Cycle Time Test',
  },
  severityCode: {
    fieldLabels: {
      label: 'Severity Code',
      value: 'severityCode',
    },
    description: 'Severity Code',
    example: 'NONCRIT',
  },
  severityDescription: {
    fieldLabels: {
      label: 'Severity Description',
      value: 'severityDescription',
    },
    description: 'Severity Description',
    example: 'Non-Critical Error',
  },
  extensionExemptionCode: {
    fieldLabels: {
      label: 'Extension Exemption Code',
      value: 'extensionExemptionCode',
    },
    description: 'extension Exemption Code',
    example: 'NONQAOS',
  },
  extensionExemptionDescription: {
    fieldLabels: {
      label: 'Extension Exemption Description',
      value: 'extensionExemptionDescription',
    },
    description: 'Extension Exemption Description',
    example: 'Non-QA Operating Quarters for Ozone-Season Reporter',
  },
  hoursUsed: {
    fieldLabels: {
      label: 'Hours Used',
      value: 'hoursUsed',
    },
    description: 'Hours Used',
    example: '1',
  },
  gracePeriodIndicator: {
    fieldLabels: {
      label: 'Grace Period Indicator',
      value: 'gracePeriodIndicator',
    },
    description: 'Grace Period Indicator',
    example: '1',
  },
  testReasonCode: {
    fieldLabels: {
      label: 'Test Reason Code',
      value: 'testReasonCode',
    },
    description: 'Test Reason Code',
    example: 'QA',
  },
  testResultCode: {
    fieldLabels: {
      label: 'Test Result Code',
      value: 'testResultCode',
    },
    description: 'Test Result Code',
    example: 'PASSED',
  },

  //Unit (load based indicator, CO, CCO, etc.), unit program and reporting frequency. #6233
  unitDTOId: {
    fieldLabels: {
      label: "Unit ID",
      value: "id",
    },
    description: "Unique identifier for the unit.",
    example: "1001",
  },

  unitDTONonLoadBasedIndicator: {
    fieldLabels: {
      label: "Non-Load Based Indicator",
      value: "nonLoadBasedIndicator",
    },
    description: "Indicator that represents whether the unit is non-load based.",
    example: "1",
  },

  unitDTOUserId: {
    fieldLabels: {
      label: "User ID",
      value: "userId",
    },
    description: "The ID of the user who created or updated the record.",
    example: "jdoe",
  },

  unitDTOAddDate: {
    fieldLabels: {
      label: "Add Date",
      value: "addDate",
    },
    description: "The date when the unit record was added.",
    example: "2024-08-29",
  },

  unitDTOUpdateDate: {
    fieldLabels: {
      label: "Update Date",
      value: "updateDate",
    },
    description: "The date when the unit record was last updated.",
    example: "2024-08-30",
  },

  unitDTOUnitid: {
    fieldLabels: {
      label: "Unit ID",
      value: "unitid",
    },
    description: "ID of the unit.",
    example: "UNIT_123",
  },

  unitDTOSourceCategoryCd: {
    fieldLabels: {
      label: "Source Category Code",
      value: "sourceCategoryCd",
    },
    description: "Category code for the source of the unit.",
    example: "SRC123",
  },

  unitDTOCommOpDate: {
    fieldLabels: {
      label: "Commercial Operation Date",
      value: "commOpDate",
    },
    description: "The date when the unit began commercial operation.",
    example: "01/01/2020",
  },

  unitDTOComrOpDate: {
    fieldLabels: {
      label: "Compliance Operation Date",
      value: "comrOpDate",
    },
    description: "The date when the unit began compliance operation.",
    example: "01/01/2020",
  },

  unitDTOOpStatusCd: {
    fieldLabels: {
      label: "Operational Status Code",
      value: "opStatusCd",
    },
    description: "The operational status code of the unit.",
    example: "OP",
  },

  unitDTOStatusBeginDate: {
    fieldLabels: {
      label: "Status Begin Date",
      value: "statusBeginDate",
    },
    description: "The date when the current operational status of the unit began.",
    example: "01/01/2020",
  },

  unitDTOUnitTypeCd: {
    fieldLabels: {
      label: "Unit Type Code",
      value: "unitTypeCd",
    },
    description: "The type code of the unit.",
    example: "UBT",
  },

  unitDTOAuditUser: {
    fieldLabels: {
      label: "Audit User",
      value: "auditUser",
    },
    description: "The user ID of the person who performed the last audit on the unit record.",
    example: "user@example.com",
  },

  unitDTOAuditDate: {
    fieldLabels: {
      label: "Audit Date",
      value: "auditDate",
    },
    description: "The date and time when the last audit was performed on the unit record.",
    example: "2023-01-01T00:00:00Z",
  },

  unitDTOActive: {
    fieldLabels: {
      label: "Active",
      value: "active",
    },
    description: "Indicates whether the unit is currently active.",
    example: true,
  },

  //program unit
  unitProgramDTOUnitId: {
    fieldLabels: {
      label: "Unit ID",
      value: "unitId",
    },
    description: "The identifier for the unit associated with the program.",
    example: 12345,
  },

  unitProgramDTOProgramId: {
    fieldLabels: {
      label: "Program ID",
      value: "programId",
    },
    description: "The identifier for the program associated with the unit.",
    example: 67890,
  },

  unitProgramDTOProgramCode: {
    fieldLabels: {
      label: "Program Code",
      value: "programCode",
    },
    description: "The code representing the specific program.",
    example: "ARP",
  },

  unitProgramDTOClassCode: {
    fieldLabels: {
      label: "Class Code",
      value: "classCode",
    },
    description: "The code representing the class associated with the program.",
    example: "A",
  },

  unitProgramDTOUnitMonitorCertBeginDate: {
    fieldLabels: {
      label: "Unit Monitor Certification Begin Date",
      value: "unitMonitorCertBeginDate",
    },
    description:
        "The date when unit monitoring certification began for the program.",
    example: "2024-01-01",
  },

  unitProgramDTOUnitMonitorCertDeadline: {
    fieldLabels: {
      label: "Unit Monitor Certification Deadline",
      value: "unitMonitorCertDeadline",
    },
    description:
        "The deadline date for completing unit monitoring certification.",
    example: "2024-12-31",
  },

  unitProgramDTOEmissionsRecordingBeginDate: {
    fieldLabels: {
      label: "Emissions Recording Begin Date",
      value: "emissionsRecordingBeginDate",
    },
    description:
        "The date when emissions recording began under the program.",
    example: "2024-01-01",
  },

  unitProgramDTOEndDate: {
    fieldLabels: {
      label: "End Date",
      value: "endDate",
    },
    description:
        "The end date for the program's association with the unit.",
    example: "2025-12-31",
  },

  unitProgramDTOId: {
    fieldLabels: {
      label: "Unit Program ID",
      value: "id",
    },
    description: "The unique identifier for the unit program record.",
    example: "1234567890",
  },

  unitProgramDTOUserId: {
    fieldLabels: {
      label: "User ID",
      value: "userId",
    },
    description: "The identifier for the user who last modified the record.",
    example: "jdoe",
  },

  unitProgramDTOAddDate: {
    fieldLabels: {
      label: "Add Date",
      value: "addDate",
    },
    description:
        "The timestamp when the unit program record was created.",
    example: "2024-08-01T00:00:00.000Z",
  },

  unitProgramDTOUpdateDate: {
    fieldLabels: {
      label: "Update Date",
      value: "updateDate",
    },
    description:
        "The timestamp when the unit program record was last updated.",
    example: "2024-08-15T00:00:00.000Z",
  },

  unitProgramDTOActive: {
    fieldLabels: {
      label: "Active",
      value: "active",
    },
    description: "Indicates whether the unit program is currently active.",
    example: true,
  },

  //Reporting frequency
  reportingFreqDTOReportFrequencyCode: {
    fieldLabels: {
      label: 'Report Frequency Code',
      value: 'reportFrequencyCode',
    },
    description: 'The code representing the frequency at which the report is generated.',
    example: 'QTR',  // Example could be quarterly (QTR)
  },

  reportingFreqDTOMonitoringPlanLocations: {
    fieldLabels: {
      label: 'Monitoring Plan Locations',
      value: 'monitoringPlanLocations',
    },
    description: 'The locations covered under the monitoring plan.',
    example: 'Site001, Site002',  // Example of monitoring plan location IDs or names
  },

  reportingFreqDTOBeginQuarter: {
    fieldLabels: {
      label: 'Begin Quarter',
      value: 'beginQuarter',
    },
    description: 'The quarter in which reporting starts.',
    example: '2024Q1',  // Example of quarter (e.g., first quarter of 2024)
  },

  reportingFreqDTOEndQuarter: {
    fieldLabels: {
      label: 'End Quarter',
      value: 'endQuarter',
    },
    description: 'The quarter in which reporting ends, if applicable.',
    example: '2024Q4',  // Example of quarter (e.g., fourth quarter of 2024)
  },

  reportingFreqDTOId: {
    fieldLabels: {
      label: 'ID',
      value: 'id',
    },
    description: 'The unique identifier for the reporting frequency record.',
    example: '12345',  // Example of an ID value
  },

  reportingFreqDTOActive: {
    fieldLabels: {
      label: 'Active',
      value: 'active',
    },
    description: 'Indicates whether the reporting frequency record is active or not.',
    example: true,  // Boolean example
  },

};
