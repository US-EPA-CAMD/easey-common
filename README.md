# easey-common package
[![GitHub](https://img.shields.io/github/license/US-EPA-CAMD/easey-auth-api)](https://github.com/US-EPA-CAMD/easey-auth-api/blob/develop/LICENSE.md)
[![GitHub version](https://badge.fury.io/gh/US-EPA-CAMD%2Feasey-common.svg)](https://badge.fury.io/gh/US-EPA-CAMD%2Feasey-common)
[![Release Workflow](https://github.com/US-EPA-CAMD/easey-common/workflows/Release%20Workflow/badge.svg)](https://github.com/US-EPA-CAMD/easey-common/actions)<br>

# Downloading and using easey-common

## Getting Started
​
These instructions will get you a copy of the project package up and running and downloaded.

### Prerequisites

- Project running node
- A ```.npmrc``` file existing in the root directory, with the contents of: ``` @us-epa-camd:registry=https://npm.pkg.github.com ```
- [Authenticated to npm package registry on local machine](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)

### Installing

- Select desired version of package. The most up to date package version is [![GitHub version](https://badge.fury.io/gh/US-EPA-CAMD%2Feasey-common.svg)](https://badge.fury.io/gh/US-EPA-CAMD%2Feasey-common) . <br>
- In terminal execute ```npm install @us-epa-camd/easey-common@CURRENT_VERSION```

### Using

- Import desired files from folder within package.
- For example, to insert the logger: ``` import { Logger } from '@us-epa-camd/easey-common/logger'; ```




