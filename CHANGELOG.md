## [5.3.5](https://github.com/US-EPA-CAMD/easey-common/compare/v5.3.4...v5.3.5) (2022-07-11)


### Bug Fixes

* added a cache control header ([1310c08](https://github.com/US-EPA-CAMD/easey-common/commit/1310c08a0f72f9d30ccd39fa3db7ff3a2616a778))

## [5.3.4](https://github.com/US-EPA-CAMD/easey-common/compare/v5.3.3...v5.3.4) (2022-07-11)


### Bug Fixes

* added additional cors logging ([4341343](https://github.com/US-EPA-CAMD/easey-common/commit/4341343aa42cd64af2533e34d47d7ba294f4ff8d))

## [5.3.3](https://github.com/US-EPA-CAMD/easey-common/compare/v5.3.2...v5.3.3) (2022-07-06)


### Bug Fixes

* added origin: true response ([df00859](https://github.com/US-EPA-CAMD/easey-common/commit/df00859d3f8de01043f6b075e0826dd4a7bfcf57))

## [5.3.2](https://github.com/US-EPA-CAMD/easey-common/compare/v5.3.1...v5.3.2) (2022-07-06)


### Bug Fixes

* added a vary * header to all cors preflight responses ([12c1f91](https://github.com/US-EPA-CAMD/easey-common/commit/12c1f914aa3ee5ebdd4fbb0bb1a1b89d3ba89c92))

## [5.3.1](https://github.com/US-EPA-CAMD/easey-common/compare/v5.3.0...v5.3.1) (2022-07-06)


### Bug Fixes

* logging for CORs ([0b6132d](https://github.com/US-EPA-CAMD/easey-common/commit/0b6132d9231ae58233eddfbea6daaf808bf0d502))

# [5.3.0](https://github.com/US-EPA-CAMD/easey-common/compare/v5.2.0...v5.3.0) (2022-06-20)


### Features

* switched to new cors_config table ([e7d89c8](https://github.com/US-EPA-CAMD/easey-common/commit/e7d89c8572ae1202631bbe0b20a52336fff314df))

# [5.2.0](https://github.com/US-EPA-CAMD/easey-common/compare/v5.1.2...v5.2.0) (2022-06-09)


### Features

* added ClientToken guard ([b92290d](https://github.com/US-EPA-CAMD/easey-common/commit/b92290d4c9df5c7a661b42d0ddbf0bbea42cd964))

## [5.1.2](https://github.com/US-EPA-CAMD/easey-common/compare/v5.1.1...v5.1.2) (2022-05-17)


### Bug Fixes

* refactored package transforms ([68466e5](https://github.com/US-EPA-CAMD/easey-common/commit/68466e5f57f89ed654878d2bd3c75fb994cf9699))

## [5.1.1](https://github.com/US-EPA-CAMD/easey-common/compare/v5.1.0...v5.1.1) (2022-05-17)


### Bug Fixes

* modified transforms to download faster ([5a7a9a0](https://github.com/US-EPA-CAMD/easey-common/commit/5a7a9a0f04e4fb0037a85c1f813bb44d00ddcf1c))

# [5.1.0](https://github.com/US-EPA-CAMD/easey-common/compare/v5.0.1...v5.1.0) (2022-05-16)


### Features

* **error-messages.constants.ts:** added error message for date range limit ([224d205](https://github.com/US-EPA-CAMD/easey-common/commit/224d205b678bf87565c0143959d96604ada76353))
* **is-date-in-range-limit.pipe.ts:** added date range validation pipe ([fb1fdce](https://github.com/US-EPA-CAMD/easey-common/commit/fb1fdceefade4e914a1026e4cbd7e6206ec7529b))

## [5.0.1](https://github.com/US-EPA-CAMD/easey-common/compare/v5.0.0...v5.0.1) (2022-05-07)


### Bug Fixes

* configuring body-parser to allow configurable request payload size ([2f9c750](https://github.com/US-EPA-CAMD/easey-common/commit/2f9c750b4e19f2f8f2d3d2ab101227c5568a1b09))
* using body-parser to configure request payload size ([2a5eae8](https://github.com/US-EPA-CAMD/easey-common/commit/2a5eae8a77956a8de6b9c5157c56688469c96ee8))

# [5.0.0](https://github.com/US-EPA-CAMD/easey-common/compare/v4.8.2...v5.0.0) (2022-05-07)


### Features

* added request size limit configuration ([a016d7a](https://github.com/US-EPA-CAMD/easey-common/commit/a016d7a129b43fc6528c2110fcf2bb17fd36c45a))


### BREAKING CHANGES

* added request size limit configuration to provide ability to increase payload size
to prevent payload too large error

## [4.8.2](https://github.com/US-EPA-CAMD/easey-common/compare/v4.8.1...v4.8.2) (2022-04-08)


### Bug Fixes

* added client release to streaming on end ([b731fb1](https://github.com/US-EPA-CAMD/easey-common/commit/b731fb10225c0ad2ad48c673259d31c5d3e0672f))

## [4.8.1](https://github.com/US-EPA-CAMD/easey-common/compare/v4.8.0...v4.8.1) (2022-04-07)


### Bug Fixes

* added index.ts ([d6bb2aa](https://github.com/US-EPA-CAMD/easey-common/commit/d6bb2aa4d88ffc4ae557c20a738085dfe4083351))

# [4.8.0](https://github.com/US-EPA-CAMD/easey-common/compare/v4.7.0...v4.8.0) (2022-04-07)


### Features

* added streaming service and module ([8b28581](https://github.com/US-EPA-CAMD/easey-common/commit/8b28581c9289889a180c820336710cf5ac0d21e6))

# [4.7.0](https://github.com/US-EPA-CAMD/easey-common/compare/v4.6.2...v4.7.0) (2022-03-23)


### Bug Fixes

* **index.ts:** add IsNotEmptyString validaiton pipe to index.ts file ([742e215](https://github.com/US-EPA-CAMD/easey-common/commit/742e2155e94fc981b13e0e09f0a2e53f5d1b54c1))
* **is-not-empty-string.pipe.ts:** modify validation to use isNotEmpty ([4175f62](https://github.com/US-EPA-CAMD/easey-common/commit/4175f62915e8a1f492698bbd67ab2861c72cff9a))


### Features

* **is-not-empty-string.pipe.ts:** add validation to check if value is empty ([64e1578](https://github.com/US-EPA-CAMD/easey-common/commit/64e1578e6bd43445a0afd5b1a2be4b7c0c08ecde))

## [4.6.2](https://github.com/US-EPA-CAMD/easey-common/compare/v4.6.1...v4.6.2) (2022-03-16)


### Bug Fixes

* **error-messages.constants.ts:** modify required parameter error message ([f2d2e9f](https://github.com/US-EPA-CAMD/easey-common/commit/f2d2e9f6e1b7ed329aaece3ccb6ce33814d8197c))

## [4.6.1](https://github.com/US-EPA-CAMD/easey-common/compare/v4.6.0...v4.6.1) (2022-03-15)


### Bug Fixes

* fix to transformers ([28441ee](https://github.com/US-EPA-CAMD/easey-common/commit/28441ee008c5b07091c9c47c1e2e1b3c324194dd))

# [4.6.0](https://github.com/US-EPA-CAMD/easey-common/compare/v4.5.3...v4.6.0) (2022-03-15)


### Features

* improved transformer efficiency ([d157f10](https://github.com/US-EPA-CAMD/easey-common/commit/d157f101fdbcefd944e7afd66bd76affddce6b55))
* reconfigured the transformers to be more efficient ([9a88345](https://github.com/US-EPA-CAMD/easey-common/commit/9a8834524bbb888ccc721a271dcde45c479649c2))

## [4.5.3](https://github.com/US-EPA-CAMD/easey-common/compare/v4.5.2...v4.5.3) (2022-03-15)


### Bug Fixes

* **exclude-allowance-compliance.enum.ts:** added additional excludable values ([f2e51f4](https://github.com/US-EPA-CAMD/easey-common/commit/f2e51f49cd79d4e60d4b8678ca78fd6cbd248f7e))

## [4.5.2](https://github.com/US-EPA-CAMD/easey-common/compare/v4.5.1...v4.5.2) (2022-03-14)


### Bug Fixes

* **exclude-allowance-transactions.enum.ts:** modify ExcludeAllowanceTransactions ([16d5065](https://github.com/US-EPA-CAMD/easey-common/commit/16d50651b17c3af744792e24e74995a32422eb53))

## [4.5.1](https://github.com/US-EPA-CAMD/easey-common/compare/v4.5.0...v4.5.1) (2022-03-14)


### Bug Fixes

* **enum/index.ts:** add enums to index.ts file ([d77f547](https://github.com/US-EPA-CAMD/easey-common/commit/d77f547faf97d7a2a7e1edc816100feaae49232c))

# [4.5.0](https://github.com/US-EPA-CAMD/easey-common/compare/v4.4.3...v4.5.0) (2022-03-14)


### Features

* **enums:** adding exclude enums for account API ([a3b9725](https://github.com/US-EPA-CAMD/easey-common/commit/a3b9725c41696b98fdb65d6ee6ffa3aac409315b))
* **exclude-facility-attributes.enum.ts:** added exclude facility attributes enum ([e7ee7b9](https://github.com/US-EPA-CAMD/easey-common/commit/e7ee7b96c48de4d36d6b7274dfa094b4aaa2bc3c))

## [4.4.3](https://github.com/US-EPA-CAMD/easey-common/compare/v4.4.2...v4.4.3) (2022-03-09)


### Bug Fixes

* **exclude.helper.ts:** fix to check if exclude exists ([964dc0e](https://github.com/US-EPA-CAMD/easey-common/commit/964dc0e9e182fd1e45777f07216f49222eb7075b))

## [4.4.2](https://github.com/US-EPA-CAMD/easey-common/compare/v4.4.1...v4.4.2) (2022-03-09)


### Bug Fixes

* **excludehourlymatsapportionedemissions:** fix hfInputRate typo ([9057b5e](https://github.com/US-EPA-CAMD/easey-common/commit/9057b5ef73ca9809b855cf90ac35060220520f03))

## [4.4.1](https://github.com/US-EPA-CAMD/easey-common/compare/v4.4.0...v4.4.1) (2022-03-08)


### Bug Fixes

* **index.ts:** add exports to index.ts in enums, pipes, and utilities folders ([b093913](https://github.com/US-EPA-CAMD/easey-common/commit/b09391369ed2633bca9c2c6353ff51dfecc66841))

# [4.4.0](https://github.com/US-EPA-CAMD/easey-common/compare/v4.3.1...v4.4.0) (2022-03-08)


### Features

* add validation, helper function, and enum to support exclude parameter ([609a82c](https://github.com/US-EPA-CAMD/easey-common/commit/609a82c611aa6d467246b77ac5ff5c0abfc9ecef))

## [4.3.1](https://github.com/US-EPA-CAMD/easey-common/compare/v4.3.0...v4.3.1) (2022-02-25)


### Bug Fixes

* **property-metadata.constants.ts:** fix hgMass label ([c572a14](https://github.com/US-EPA-CAMD/easey-common/commit/c572a143b3d3f764dfdc929a5b096c5357821f61))

# [4.3.0](https://github.com/US-EPA-CAMD/easey-common/compare/v4.2.1...v4.3.0) (2022-02-24)


### Features

* added app container ([3200524](https://github.com/US-EPA-CAMD/easey-common/commit/3200524abf5a5fa16ea63fdc2e963e11ff867084))

## [4.2.1](https://github.com/US-EPA-CAMD/easey-common/compare/v4.2.0...v4.2.1) (2022-02-24)


### Bug Fixes

* fix IsInRange ([6023b3d](https://github.com/US-EPA-CAMD/easey-common/commit/6023b3dc584e43c9b58f5ed15593ef783858c176))

# [4.2.0](https://github.com/US-EPA-CAMD/easey-common/compare/v4.1.2...v4.2.0) (2022-02-22)


### Features

* **property-metadata.constants.ts:** adding MATS properties ([ed06ee5](https://github.com/US-EPA-CAMD/easey-common/commit/ed06ee580d8b32f0f6f618155e11a5e6c66460dc))

## [4.1.2](https://github.com/US-EPA-CAMD/easey-common/compare/v4.1.1...v4.1.2) (2022-02-17)


### Bug Fixes

* **api-config.service.ts:** env variable checks ([e4b3a29](https://github.com/US-EPA-CAMD/easey-common/commit/e4b3a29b5154a5f30f55883772498bdfb3ab6619)), closes [#2651](https://github.com/US-EPA-CAMD/easey-common/issues/2651)

## [4.1.1](https://github.com/US-EPA-CAMD/easey-common/compare/v4.1.0...v4.1.1) (2022-02-17)


### Bug Fixes

* **error message constants:** updated the program error message to link out to the MDM ([82e55b4](https://github.com/US-EPA-CAMD/easey-common/commit/82e55b4b700d33012158fd66a3434d77a358cc74)), closes [#2651](https://github.com/US-EPA-CAMD/easey-common/issues/2651)

# [4.1.0](https://github.com/US-EPA-CAMD/easey-common/compare/v4.0.4...v4.1.0) (2022-02-15)


### Features

* **error messages:** update state code error message ([7350a67](https://github.com/US-EPA-CAMD/easey-common/commit/7350a677e8e8aa964242427a5f7af4e74597c0ec)), closes [#2447](https://github.com/US-EPA-CAMD/easey-common/issues/2447)

## [4.0.4](https://github.com/US-EPA-CAMD/easey-common/compare/v4.0.3...v4.0.4) (2022-02-15)


### Bug Fixes

* fixing api config to use http for localhost ([a36dd63](https://github.com/US-EPA-CAMD/easey-common/commit/a36dd6307fe2fd271c95dd7e113f1f0922612706))

## [4.0.3](https://github.com/US-EPA-CAMD/easey-common/compare/v4.0.2...v4.0.3) (2022-02-15)


### Bug Fixes

* fixing pagination headers and cors caching ([adcff89](https://github.com/US-EPA-CAMD/easey-common/commit/adcff893286664be753c5acb2f6d9731fb476e94))

## [4.0.2](https://github.com/US-EPA-CAMD/easey-common/compare/v4.0.1...v4.0.2) (2022-02-15)


### Bug Fixes

* fixing pagination response headers ([fe87ca2](https://github.com/US-EPA-CAMD/easey-common/commit/fe87ca2525ff988f80b470786192b623b13a42ea))

## [4.0.1](https://github.com/US-EPA-CAMD/easey-common/compare/v4.0.0...v4.0.1) (2022-02-15)


### Bug Fixes

* fixing pagination response headers ([3011a85](https://github.com/US-EPA-CAMD/easey-common/commit/3011a8511d792aa1b1e55dc994ce00e78bb42504))

# [4.0.0](https://github.com/US-EPA-CAMD/easey-common/compare/v3.0.0...v4.0.0) (2022-02-15)


### Code Refactoring

* refactor ResponseHeaders and ApiConfigService ([f2799f1](https://github.com/US-EPA-CAMD/easey-common/commit/f2799f1f4edf40f6dba4b9c77c871e767cf9d630))


### BREAKING CHANGES

* function names & parameter changes

# [3.0.0](https://github.com/US-EPA-CAMD/easey-common/compare/v2.13.0...v3.0.0) (2022-02-14)


### Code Refactoring

* refactoring response headers to be consistent across all api's ([87efd81](https://github.com/US-EPA-CAMD/easey-common/commit/87efd81e1178aab4fff920f38c1e0a2128f2549c))


### BREAKING CHANGES

* function paramters changed

# [2.13.0](https://github.com/US-EPA-CAMD/easey-common/compare/v2.12.0...v2.13.0) (2022-02-14)


### Features

* **error messages update:** update error messages ([1a7adcb](https://github.com/US-EPA-CAMD/easey-common/commit/1a7adcb9401f54920671b3b0db0da0a175fdda0b)), closes [#2447](https://github.com/US-EPA-CAMD/easey-common/issues/2447)

# [2.12.0](https://github.com/US-EPA-CAMD/easey-common/compare/v2.11.0...v2.12.0) (2022-02-12)


### Features

* added common dbConfig function ([d856747](https://github.com/US-EPA-CAMD/easey-common/commit/d85674702d1966ebac0238da9c7a2f29baaf489c))

# [2.11.0](https://github.com/US-EPA-CAMD/easey-common/compare/v2.10.0...v2.11.0) (2022-02-12)


### Features

* added common dbConfig for api's ([3bdc65c](https://github.com/US-EPA-CAMD/easey-common/commit/3bdc65c88797b75769a8c44b3f9065017aca3c41))

# [2.10.0](https://github.com/US-EPA-CAMD/easey-common/compare/v2.9.0...v2.10.0) (2022-02-12)


### Features

* added parseBool function & cors cache control headers ([051f4a6](https://github.com/US-EPA-CAMD/easey-common/commit/051f4a681f83537e99ad492af2fefedb061c58f7))

# [2.9.0](https://github.com/US-EPA-CAMD/easey-common/compare/v2.8.0...v2.9.0) (2022-02-11)


### Features

* **error messages update:** update error messages to reflect changes to APIs ([eec22f6](https://github.com/US-EPA-CAMD/easey-common/commit/eec22f6fcb56d770f2d41db518cfaf4d2280d904)), closes [#2447](https://github.com/US-EPA-CAMD/easey-common/issues/2447)
* **error messages:** update error messages ([fec904f](https://github.com/US-EPA-CAMD/easey-common/commit/fec904fd7e201683c56d5f6e5863e7a76096b27f)), closes [#2447](https://github.com/US-EPA-CAMD/easey-common/issues/2447)
* **error messages:** update the error messages to reflect changes to APIs ([011fe52](https://github.com/US-EPA-CAMD/easey-common/commit/011fe52b9c013613af00e8d5e43c2c39cce61e9b)), closes [#2447](https://github.com/US-EPA-CAMD/easey-common/issues/2447)

# [2.8.0](https://github.com/US-EPA-CAMD/easey-common/compare/v2.7.0...v2.8.0) (2022-02-04)


### Features

* added additional number validation pipes for pagination ([0474f98](https://github.com/US-EPA-CAMD/easey-common/commit/0474f9846563e8f8de951808908fa0527233f8cd))

# [2.7.0](https://github.com/US-EPA-CAMD/easey-common/compare/v2.6.2...v2.7.0) (2022-01-31)


### Features

* **transaction type enum:** update the transaction-type enum ([6548df7](https://github.com/US-EPA-CAMD/easey-common/commit/6548df7ff25e270f84d6a022e60dbaf578fb183c))

## [2.6.2](https://github.com/US-EPA-CAMD/easey-common/compare/v2.6.1...v2.6.2) (2022-01-31)


### Bug Fixes

* fixing bug regarding field mapping for csv conversion ([f662e0d](https://github.com/US-EPA-CAMD/easey-common/commit/f662e0d3ba63a68a03e9a8c6440d102a2c747c28))

## [2.6.1](https://github.com/US-EPA-CAMD/easey-common/compare/v2.6.0...v2.6.1) (2022-01-31)


### Bug Fixes

* changed default buffer size in transforms to 1MB & fixed a bug with streaming small payloads ([3a7fba7](https://github.com/US-EPA-CAMD/easey-common/commit/3a7fba77ae0d8f8c1a8f5d34d52518657935bc13))

# [2.6.0](https://github.com/US-EPA-CAMD/easey-common/compare/v2.5.0...v2.6.0) (2022-01-30)


### Features

* added NumericColumnTransformer & default value to bootstrao allowCredentials param ([d96e791](https://github.com/US-EPA-CAMD/easey-common/commit/d96e791a6614833cda0c6ccdf8bd449f863eb4a3))

# [2.5.0](https://github.com/US-EPA-CAMD/easey-common/compare/v2.4.1...v2.5.0) (2022-01-29)


### Features

* added PlainToCSV and PlainToJSON transforms to suport streaming ([d7dfa79](https://github.com/US-EPA-CAMD/easey-common/commit/d7dfa793962f07faddcf088dc82e1bc9ed98b680))

## [2.4.1](https://github.com/US-EPA-CAMD/easey-common/compare/v2.4.0...v2.4.1) (2022-01-24)


### Bug Fixes

* added config boolean ([548eaa8](https://github.com/US-EPA-CAMD/easey-common/commit/548eaa88e4f0aa61658dbac6a11054310b19184b))

# [2.4.0](https://github.com/US-EPA-CAMD/easey-common/compare/v2.3.2...v2.4.0) (2022-01-24)


### Features

* included access-allow-credential to preflight requests ([cff7952](https://github.com/US-EPA-CAMD/easey-common/commit/cff7952892b51e198988a1dc4c732185076be8d8))

## [2.3.2](https://github.com/US-EPA-CAMD/easey-common/compare/v2.3.1...v2.3.2) (2022-01-21)


### Bug Fixes

* **error messages:** fixed typo in reporting quarter error message ([2e476df](https://github.com/US-EPA-CAMD/easey-common/commit/2e476dfba9874ca438500eefc96d0d5f59e9b502))

## [2.3.1](https://github.com/US-EPA-CAMD/easey-common/compare/v2.3.0...v2.3.1) (2022-01-03)


### Bug Fixes

* **account-type-code.enum.ts:** add AccountTypeCode to index.ts ([2e5974d](https://github.com/US-EPA-CAMD/easey-common/commit/2e5974d48e6aa6e692436705633f4bcdaf7c701f))
* **enums/index.ts:** fix formatting ([bb0c0ef](https://github.com/US-EPA-CAMD/easey-common/commit/bb0c0ef38ac656a79f6f73a778b58ee55761e932))

# [2.3.0](https://github.com/US-EPA-CAMD/easey-common/compare/v2.2.0...v2.3.0) (2022-01-03)


### Features

* **account-type-code.enum.ts:** added account type code enum for MDM endpoint ([9a7bb96](https://github.com/US-EPA-CAMD/easey-common/commit/9a7bb96906142b50846d9534cbbc26adca4831cb))

# [2.2.0](https://github.com/US-EPA-CAMD/easey-common/compare/v2.1.2...v2.2.0) (2021-12-30)


### Features

* **property-metadata.constants.ts:** added MDM parameter descriptions ([24e1fe4](https://github.com/US-EPA-CAMD/easey-common/commit/24e1fe48510fc41ab5a3672e4b684b703861d04d))
* **property-metadata.constants.ts:** fixed null example value ([255b330](https://github.com/US-EPA-CAMD/easey-common/commit/255b33038b4c166efdd5ad206508c85191ad746f))

## [2.1.2](https://github.com/US-EPA-CAMD/easey-common/compare/v2.1.1...v2.1.2) (2021-12-27)


### Bug Fixes

* **property-metadata.constants.ts:** updated fieldLabels ([bcfdb90](https://github.com/US-EPA-CAMD/easey-common/commit/bcfdb9015167cfba16760a636673c894992ce416)), closes [#2409](https://github.com/US-EPA-CAMD/easey-common/issues/2409)

## [2.1.1](https://github.com/US-EPA-CAMD/easey-common/compare/v2.1.0...v2.1.1) (2021-12-15)


### Bug Fixes

* helmet Content Security Policy support for Swagger UI ([3118a35](https://github.com/US-EPA-CAMD/easey-common/commit/3118a3541161c3a72f9d51740bc5adc9242d1192))

# [2.1.0](https://github.com/US-EPA-CAMD/easey-common/compare/v2.0.5...v2.1.0) (2021-12-14)


### Features

* added more metadata properties ([bdb0c60](https://github.com/US-EPA-CAMD/easey-common/commit/bdb0c6042d37a81d24f4c1e3b80f3102c31c2310))

## [2.0.5](https://github.com/US-EPA-CAMD/easey-common/compare/v2.0.4...v2.0.5) (2021-12-12)


### Bug Fixes

* switched AuthGuard to get api key from app config ([60eef5d](https://github.com/US-EPA-CAMD/easey-common/commit/60eef5d39221ed4047286d7ad6be024ad445464f))

## [2.0.4](https://github.com/US-EPA-CAMD/easey-common/compare/v2.0.3...v2.0.4) (2021-12-12)


### Bug Fixes

* fixing exception thrown in auth guard when checking out monitor plan ([21449fb](https://github.com/US-EPA-CAMD/easey-common/commit/21449fbeb526669b0402ce6bf9d91700a6fd2b8b))

## [2.0.3](https://github.com/US-EPA-CAMD/easey-common/compare/v2.0.2...v2.0.3) (2021-12-12)


### Bug Fixes

* removing a console.log ([eef5d33](https://github.com/US-EPA-CAMD/easey-common/commit/eef5d33523048dd245ff6c00949588bf1ed2605a))

## [2.0.2](https://github.com/US-EPA-CAMD/easey-common/compare/v2.0.1...v2.0.2) (2021-12-12)


### Bug Fixes

* looking for api key in either the x-api-key or x-api-user-id request headers ([7346dcd](https://github.com/US-EPA-CAMD/easey-common/commit/7346dcd50bd1fd65d5d06173f9c5d168bc6c5750))

## [2.0.1](https://github.com/US-EPA-CAMD/easey-common/compare/v2.0.0...v2.0.1) (2021-12-11)


### Bug Fixes

* fixing auth guard to use X-Api-User-Id vs x-api-key header ([94708ca](https://github.com/US-EPA-CAMD/easey-common/commit/94708ca94a8cca8b94ef92090046b9653a547bc4))

# [2.0.0](https://github.com/US-EPA-CAMD/easey-common/compare/v1.16.0...v2.0.0) (2021-12-11)


### Code Refactoring

* removed nestjs bootstrap boolean params in favor of env vars ([89372c4](https://github.com/US-EPA-CAMD/easey-common/commit/89372c49d931b5314ef1f4424510c2bc87a5ce77))


### BREAKING CHANGES

* removed enableCors, enableApiKey, enableAuthToken, & enableGlobalValidationPipes
params and switched them to env vars

# [1.16.0](https://github.com/US-EPA-CAMD/easey-common/compare/v1.15.0...v1.16.0) (2021-12-11)


### Features

* changed nestjs bootstrap function param useGlobalPipes to enableGlobalValidationPipe ([5ba03aa](https://github.com/US-EPA-CAMD/easey-common/commit/5ba03aaf90ba082bfa2d3fa7001a97d940d5eb8e))

# [1.15.0](https://github.com/US-EPA-CAMD/easey-common/compare/v1.14.1...v1.15.0) (2021-12-11)


### Features

* added params to nestjs bootstrap function for cors, auth, & validation ([0ad92a0](https://github.com/US-EPA-CAMD/easey-common/commit/0ad92a05cc5aea5e40c996a73899894c53fdbeab))

## [1.14.1](https://github.com/US-EPA-CAMD/easey-common/compare/v1.14.0...v1.14.1) (2021-12-11)


### Bug Fixes

* added class transform due to global validation pipe ([1dd65e0](https://github.com/US-EPA-CAMD/easey-common/commit/1dd65e05b261dcff7c0af580474218b43b246f39))
* fixing conflicts ([f0ebd1c](https://github.com/US-EPA-CAMD/easey-common/commit/f0ebd1c0b17ce6c7e34cfbf1757e0d73cafafb7a))

# [1.14.0](https://github.com/US-EPA-CAMD/easey-common/compare/v1.13.1...v1.14.0) (2021-12-11)


### Bug Fixes

* forgot dependencies ([0ec6ee4](https://github.com/US-EPA-CAMD/easey-common/commit/0ec6ee4eb2da6f2751030f261535c030fab164ee))


### Features

* added nestjs bootstrap function ([363ea06](https://github.com/US-EPA-CAMD/easey-common/commit/363ea06bbd3e4ed114faa65d9c887f3b1a3638ee))

## [1.13.1](https://github.com/US-EPA-CAMD/easey-common/compare/v1.13.0...v1.13.1) (2021-12-10)


### Bug Fixes

* fixed bug ([b10de5f](https://github.com/US-EPA-CAMD/easey-common/commit/b10de5fc2b37dc36d4e1f3bcc4b9121e2d92302c))
* pass API key to auth api ([0316287](https://github.com/US-EPA-CAMD/easey-common/commit/031628730b4249cbd05cf1683eeb4e86f51d7e82))

# [1.13.0](https://github.com/US-EPA-CAMD/easey-common/compare/v1.12.1...v1.13.0) (2021-12-09)


### Features

* current date query ([8b38718](https://github.com/US-EPA-CAMD/easey-common/commit/8b38718b350bba394f2cc47d1bd7edeb10da1800))

## [1.12.1](https://github.com/US-EPA-CAMD/easey-common/compare/v1.12.0...v1.12.1) (2021-12-02)


### Bug Fixes

* **property-metadata.constants.ts:** modify typo in buyAccountTypeCode ([5eb92fb](https://github.com/US-EPA-CAMD/easey-common/commit/5eb92fb3d148e6d419eb0ba01320b7dedbef43de))

# [1.12.0](https://github.com/US-EPA-CAMD/easey-common/compare/v1.11.9...v1.12.0) (2021-12-02)


### Features

* **property-metadata.constants.ts:** add buy and sell account type code labels ([2488d55](https://github.com/US-EPA-CAMD/easey-common/commit/2488d556e6bc16dbb2d204c3b28e1073c69579f4))

## [1.11.9](https://github.com/US-EPA-CAMD/easey-common/compare/v1.11.8...v1.11.9) (2021-12-01)


### Bug Fixes

* pulled master ([c1f9602](https://github.com/US-EPA-CAMD/easey-common/commit/c1f9602ad2cffd7948d8cb09a8e03cd874884fe9))
* removed uuidv4 ([31d8e8a](https://github.com/US-EPA-CAMD/easey-common/commit/31d8e8a74ac5f470379e109f3f83704faa5e7b68))

## [1.11.8](https://github.com/US-EPA-CAMD/easey-common/compare/v1.11.7...v1.11.8) (2021-12-01)


### Bug Fixes

* removed uuid ([4b4ce6f](https://github.com/US-EPA-CAMD/easey-common/commit/4b4ce6f63fc43772fbca894761952aff76b1e301))

## [1.11.7](https://github.com/US-EPA-CAMD/easey-common/compare/v1.11.6...v1.11.7) (2021-11-30)


### Bug Fixes

* still working on resolutions and dependencies ([7dee61e](https://github.com/US-EPA-CAMD/easey-common/commit/7dee61e3e2fb94cf5719423f32b95386e4bf0158))

## [1.11.6](https://github.com/US-EPA-CAMD/easey-common/compare/v1.11.5...v1.11.6) (2021-11-30)


### Bug Fixes

* changing uuid to uuidv4 ([5023130](https://github.com/US-EPA-CAMD/easey-common/commit/502313070ce6b27c4fc1421f3dbc648b5209dfa9))

## [1.11.5](https://github.com/US-EPA-CAMD/easey-common/compare/v1.11.4...v1.11.5) (2021-11-30)


### Bug Fixes

* adding back resolutions but without nestjs dependencies that conflict ([595a44e](https://github.com/US-EPA-CAMD/easey-common/commit/595a44ee17fc79b168fca2423610b012320c28ff))

## [1.11.4](https://github.com/US-EPA-CAMD/easey-common/compare/v1.11.3...v1.11.4) (2021-11-30)


### Bug Fixes

* removing resolutions and down grading uuid and others that conflict with nestjs ([44046d9](https://github.com/US-EPA-CAMD/easey-common/commit/44046d9569d54a66b76c4d13ec2cea9a8b46f9b2))

## [1.11.3](https://github.com/US-EPA-CAMD/easey-common/compare/v1.11.2...v1.11.3) (2021-11-30)


### Bug Fixes

* adding resolutions to resolve vulnerabilities ([cca6972](https://github.com/US-EPA-CAMD/easey-common/commit/cca697283dcbfdd8769bfcf8645415e2cf83ed20))

## [1.11.2](https://github.com/US-EPA-CAMD/easey-common/compare/v1.11.1...v1.11.2) (2021-11-30)


### Bug Fixes

* fixing dependency issues causing build breaks ([cada167](https://github.com/US-EPA-CAMD/easey-common/commit/cada167c0c8b256fe0e148b15c1cd028d2605fa4))

## [1.11.1](https://github.com/US-EPA-CAMD/easey-common/compare/v1.11.0...v1.11.1) (2021-11-30)


### Bug Fixes

* edit to logger error handler ([e19331b](https://github.com/US-EPA-CAMD/easey-common/commit/e19331bcbef8d4785c2e845d8f44743f1184ef1b))

# [1.11.0](https://github.com/US-EPA-CAMD/easey-common/compare/v1.10.1...v1.11.0) (2021-11-30)


### Features

* changed logger to no longer throw ([736997f](https://github.com/US-EPA-CAMD/easey-common/commit/736997f21890f7f726506c697281b738fcf55fd6))

## [1.10.1](https://github.com/US-EPA-CAMD/easey-common/compare/v1.10.0...v1.10.1) (2021-11-23)


### Bug Fixes

* added README.md disclaimer, license & contribution ([7ae379e](https://github.com/US-EPA-CAMD/easey-common/commit/7ae379e23cc61a6e5fa1b82e73a9925354af0ebf))
* reordered license, contributing, and disclaimer text ([22aac4b](https://github.com/US-EPA-CAMD/easey-common/commit/22aac4baa130aee48c1037e0a7cba8d31985a065))

# [1.10.0](https://github.com/US-EPA-CAMD/easey-common/compare/v1.9.0...v1.10.0) (2021-11-19)


### Features

* **property-metadata.constants.ts:** modify propertyMetadata labels ([bdcd26c](https://github.com/US-EPA-CAMD/easey-common/commit/bdcd26c65a2ba6da47fb3398f8e035c4812cc5b0))

# [1.9.0](https://github.com/US-EPA-CAMD/easey-common/compare/v1.8.5...v1.9.0) (2021-11-05)


### Features

* **program enums:** modify the program enums to include caspar ozone group 3 program (CSOSG3) ([d233e15](https://github.com/US-EPA-CAMD/easey-common/commit/d233e15d120ab53bfb57020352e811428e6bbe06))

## [1.8.5](https://github.com/US-EPA-CAMD/easey-common/compare/v1.8.4...v1.8.5) (2021-11-03)


### Bug Fixes

* added license, readme, & other files to package ([1dd9d85](https://github.com/US-EPA-CAMD/easey-common/commit/1dd9d85e6382ef9fc78f9afc979f45ca433f59d3))

## [1.8.4](https://github.com/US-EPA-CAMD/easey-common/compare/v1.8.3...v1.8.4) (2021-11-03)


### Bug Fixes

* added test2 constant ([c82e525](https://github.com/US-EPA-CAMD/easey-common/commit/c82e5252be48cb6e0089fcc7c86777970950a601))

## [1.8.3](https://github.com/US-EPA-CAMD/easey-common/compare/v1.8.2...v1.8.3) (2021-11-03)


### Bug Fixes

* added a test constant ([7dd3c4c](https://github.com/US-EPA-CAMD/easey-common/commit/7dd3c4cb5d7dd4ed3392d320de4239185c204a4c))

## [1.8.2](https://github.com/US-EPA-CAMD/easey-common/compare/v1.8.1...v1.8.2) (2021-10-28)


### Bug Fixes

* added missing content ([deaf981](https://github.com/US-EPA-CAMD/easey-common/commit/deaf981fd828b2b04f819328b049f2c7d712f2f5))

## [1.8.1](https://github.com/US-EPA-CAMD/easey-common/compare/v1.8.0...v1.8.1) (2021-10-27)


### Bug Fixes

* removed entities ([8290ce8](https://github.com/US-EPA-CAMD/easey-common/commit/8290ce80962760ab3c03308d3376cb8487f5035e))

# [1.8.0](https://github.com/US-EPA-CAMD/easey-common/compare/v1.7.0...v1.8.0) (2021-10-27)


### Features

* updated package to include more shared code ([85cbbd7](https://github.com/US-EPA-CAMD/easey-common/commit/85cbbd7a2b2138f3d6ad3f628c49a699b8c14c51))

# [1.7.0](https://github.com/US-EPA-CAMD/easey-common/compare/v1.6.1...v1.7.0) (2021-10-27)


### Features

* updated Is-In-Date-Range ([4ab2fd0](https://github.com/US-EPA-CAMD/easey-common/commit/4ab2fd00d919507a52ac113722f440276f476ef8))

## [1.6.1](https://github.com/US-EPA-CAMD/easey-common/compare/v1.6.0...v1.6.1) (2021-10-26)


### Bug Fixes

* added comment ([93e118d](https://github.com/US-EPA-CAMD/easey-common/commit/93e118de44a621b0ebee8fa652766996c630250b))

# [1.6.0](https://github.com/US-EPA-CAMD/easey-common/compare/v1.5.1...v1.6.0) (2021-10-25)


### Features

* added Cors options and new pipe ([e8a52f0](https://github.com/US-EPA-CAMD/easey-common/commit/e8a52f06e2acc6685f8692727cdf4be230a0c250))

## [1.5.1](https://github.com/US-EPA-CAMD/easey-common/compare/v1.5.0...v1.5.1) (2021-10-21)


### Bug Fixes

* upgrading packages ([76b78c9](https://github.com/US-EPA-CAMD/easey-common/commit/76b78c90af7df67bc80a7837d4f216364c370ccb))

# [1.5.0](https://github.com/US-EPA-CAMD/easey-common/compare/v1.4.0...v1.5.0) (2021-10-20)


### Bug Fixes

* added index file for cors ([b32aafc](https://github.com/US-EPA-CAMD/easey-common/commit/b32aafcf6f4bec5434e2f21de764e977decaff4e))
* debuggin configureCorsOptions ([288160a](https://github.com/US-EPA-CAMD/easey-common/commit/288160ab8df16292655493882529b8806518d687))
* fixed imports ([56e2f4c](https://github.com/US-EPA-CAMD/easey-common/commit/56e2f4c84aef6ab32c22e6eaa39de3927f95f3a2))
* merge conflicts ([126eeee](https://github.com/US-EPA-CAMD/easey-common/commit/126eeee6d57d2e82d1edad9f55f5ff4cc408dc69))
* pulled from beta ([497bf23](https://github.com/US-EPA-CAMD/easey-common/commit/497bf23be4ee49e7a829315a0618fb6309af93c7))


### Features

* added corsConfigModule ([7915ebb](https://github.com/US-EPA-CAMD/easey-common/commit/7915ebbe654c3682582d712db324a08f8029c517))
* fixed peer dependencies ([6adcca3](https://github.com/US-EPA-CAMD/easey-common/commit/6adcca3c9821f1196036f07119ca5230c01b4c2c))
* removed old cors ([4c77b8f](https://github.com/US-EPA-CAMD/easey-common/commit/4c77b8f2bafe9331ec41efacc072ebb6a0bfdebd))

# [1.5.0-beta.3](https://github.com/US-EPA-CAMD/easey-common/compare/v1.5.0-beta.2...v1.5.0-beta.3) (2021-10-20)


### Bug Fixes

* fixed imports ([56e2f4c](https://github.com/US-EPA-CAMD/easey-common/commit/56e2f4c84aef6ab32c22e6eaa39de3927f95f3a2))


### Features

* removed old cors ([4c77b8f](https://github.com/US-EPA-CAMD/easey-common/commit/4c77b8f2bafe9331ec41efacc072ebb6a0bfdebd))

# [1.5.0-beta.2](https://github.com/US-EPA-CAMD/easey-common/compare/v1.5.0-beta.1...v1.5.0-beta.2) (2021-10-20)


### Bug Fixes

* added index file for cors ([b32aafc](https://github.com/US-EPA-CAMD/easey-common/commit/b32aafcf6f4bec5434e2f21de764e977decaff4e))
* pulled from beta ([497bf23](https://github.com/US-EPA-CAMD/easey-common/commit/497bf23be4ee49e7a829315a0618fb6309af93c7))

# [1.5.0-beta.1](https://github.com/US-EPA-CAMD/easey-common/compare/v1.4.1-beta.1...v1.5.0-beta.1) (2021-10-20)


### Bug Fixes

* merge conflicts ([126eeee](https://github.com/US-EPA-CAMD/easey-common/commit/126eeee6d57d2e82d1edad9f55f5ff4cc408dc69))


### Features

* added corsConfigModule ([7915ebb](https://github.com/US-EPA-CAMD/easey-common/commit/7915ebbe654c3682582d712db324a08f8029c517))
* fixed peer dependencies ([6adcca3](https://github.com/US-EPA-CAMD/easey-common/commit/6adcca3c9821f1196036f07119ca5230c01b4c2c))

## [1.4.1-beta.1](https://github.com/US-EPA-CAMD/easey-common/compare/v1.4.0...v1.4.1-beta.1) (2021-10-19)


### Bug Fixes

* debuggin configureCorsOptions ([288160a](https://github.com/US-EPA-CAMD/easey-common/commit/288160ab8df16292655493882529b8806518d687))

# [1.4.0](https://github.com/US-EPA-CAMD/easey-common/compare/v1.3.0...v1.4.0) (2021-10-19)


### Bug Fixes

* fixed errors ([7166c4e](https://github.com/US-EPA-CAMD/easey-common/commit/7166c4eae376b54282fa7b9dd3bc5055d51bf0dd))


### Features

* added cors configuration method ([121c95b](https://github.com/US-EPA-CAMD/easey-common/commit/121c95b25fa8a777e152b6fc07647a68d1b2093a))

# [1.3.0](https://github.com/US-EPA-CAMD/easey-common/compare/v1.2.7...v1.3.0) (2021-10-18)


### Features

* build fix ([153d71d](https://github.com/US-EPA-CAMD/easey-common/commit/153d71d24245b85309da69aece7159b605ddd8da))
* pull master ([7bf8217](https://github.com/US-EPA-CAMD/easey-common/commit/7bf82172a42f62539968e3ef4feec31ffbbfbead))

## [1.2.7](https://github.com/US-EPA-CAMD/easey-common/compare/v1.2.6...v1.2.7) (2021-10-15)


### Bug Fixes

* fixes ([4fc23b9](https://github.com/US-EPA-CAMD/easey-common/commit/4fc23b9df3b079a2aa443388d108a0e4ccaa1ddc))

## [1.2.6](https://github.com/US-EPA-CAMD/easey-common/compare/v1.2.5...v1.2.6) (2021-10-15)


### Bug Fixes

* potential bug fixes ([f576b40](https://github.com/US-EPA-CAMD/easey-common/commit/f576b4079055f1879c31c9f2db06158c7d499c94))

## [1.2.5](https://github.com/US-EPA-CAMD/easey-common/compare/v1.2.4...v1.2.5) (2021-10-15)


### Bug Fixes

* investigating fix ([f1f3083](https://github.com/US-EPA-CAMD/easey-common/commit/f1f308376df0e0b4ef6010f13a2bb0df824c8ebe))

## [1.2.4](https://github.com/US-EPA-CAMD/easey-common/compare/v1.2.3...v1.2.4) (2021-10-15)


### Bug Fixes

* attempt bug fix ([53f91bd](https://github.com/US-EPA-CAMD/easey-common/commit/53f91bd22bb51d96c278c67a697fa7f06bd42729))

## [1.2.3](https://github.com/US-EPA-CAMD/easey-common/compare/v1.2.2...v1.2.3) (2021-10-15)


### Bug Fixes

* potential bug fix ([d8c2d7c](https://github.com/US-EPA-CAMD/easey-common/commit/d8c2d7cce1fd2ebb19664f73bef7e5d44b762a8f))

## [1.2.2](https://github.com/US-EPA-CAMD/easey-common/compare/v1.2.1...v1.2.2) (2021-10-15)


### Bug Fixes

* potential bug fix ([e5d22d3](https://github.com/US-EPA-CAMD/easey-common/commit/e5d22d39a553f5152917dffcf9a02d18f07f0175))

# [1.2.0](https://github.com/US-EPA-CAMD/easey-common/compare/v1.1.6...v1.2.0) (2021-10-15)


### Features

* changed build order ([0584c38](https://github.com/US-EPA-CAMD/easey-common/commit/0584c38e2d407ed53315ba47eb7050a198f8d4d0))

## [1.1.6](https://github.com/US-EPA-CAMD/easey-common/compare/v1.1.5...v1.1.6) (2021-10-15)


### Bug Fixes

* bug fix to rerelease ([d27c0cd](https://github.com/US-EPA-CAMD/easey-common/commit/d27c0cd8fc98a17b0a3c8ab95617ceb950ab679b))
* changed build again ([18b0bc4](https://github.com/US-EPA-CAMD/easey-common/commit/18b0bc4a4f19d45bfd2e981a90d40383343690d5))

## [1.1.5](https://github.com/US-EPA-CAMD/easey-common/compare/v1.1.4...v1.1.5) (2021-10-15)


### Bug Fixes

* bug fix to rebuild ([caf0703](https://github.com/US-EPA-CAMD/easey-common/commit/caf070356ddb18cc31872c8917f90fc47635f8fb))

## [1.1.4](https://github.com/US-EPA-CAMD/easey-common/compare/v1.1.3...v1.1.4) (2021-10-15)


### Bug Fixes

* pulled in origin ([6c4defc](https://github.com/US-EPA-CAMD/easey-common/commit/6c4defc1d8e5ce656cfaa216c5396164b87b83a1))

## [1.1.3](https://github.com/US-EPA-CAMD/easey-common/compare/v1.1.2...v1.1.3) (2021-10-13)


### Bug Fixes

* included new library folder ([0f5f765](https://github.com/US-EPA-CAMD/easey-common/commit/0f5f765b7d27bf619dab9de533936623088cabc3))

## [1.1.2](https://github.com/US-EPA-CAMD/easey-common/compare/v1.1.1...v1.1.2) (2021-10-13)


### Bug Fixes

* installed dependencies and built ([004a90e](https://github.com/US-EPA-CAMD/easey-common/commit/004a90ea29f5ae73eb593593cec1992f54031768))
* pulled in previous changes ([ba80010](https://github.com/US-EPA-CAMD/easey-common/commit/ba800108384374ff75c8cf6bd25e8838fab0cb09))

## [1.1.1](https://github.com/US-EPA-CAMD/easey-common/compare/v1.1.0...v1.1.1) (2021-10-13)


### Bug Fixes

* changed logger export ([c0348f5](https://github.com/US-EPA-CAMD/easey-common/commit/c0348f5a925e83cd6c469bb4e1d522f0d0201e01))

# [1.1.0](https://github.com/US-EPA-CAMD/easey-common/compare/v1.0.2...v1.1.0) (2021-10-13)


### Bug Fixes

* changed proect dependencies ([000ad7b](https://github.com/US-EPA-CAMD/easey-common/commit/000ad7b9a3c5ec2c0816b4e95348394243484a04))


### Features

* made compatible with semantic release ([9fbc55a](https://github.com/US-EPA-CAMD/easey-common/commit/9fbc55ad9e086a35447fda284ee5f51992646442))
