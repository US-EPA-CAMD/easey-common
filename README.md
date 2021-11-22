# easey-common package
[![GitHub](https://img.shields.io/github/license/US-EPA-CAMD/easey-auth-api)](https://github.com/US-EPA-CAMD/easey-auth-api/blob/develop/LICENSE.md)
[![GitHub version](https://badge.fury.io/gh/US-EPA-CAMD%2Feasey-common.svg)](https://badge.fury.io/gh/US-EPA-CAMD%2Feasey-common)
[![Release Workflow](https://github.com/US-EPA-CAMD/easey-common/workflows/Release%20Workflow/badge.svg)](https://github.com/US-EPA-CAMD/easey-common/actions)<br>

- The easey-common package contains shared code from across the US-EPA-CAMD project. 

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


# Adding and publishing to easey-common


## Getting Started 

These instructions will show you how to edit the existing package, and publish a new version.

### Prerequisites

- Cloned easey-common github master branch on your local machine

### Adding directories

- Create a new folder in the ``` src ``` directory of the project
- Create the export files that you wish to add inside of this folder
- Create an ```index.ts``` file inside of the new folder
- Inside of the ```index.ts``` file, export all added files from the folder 
- For example, the ```index.ts``` of the logger modules is:
```
export { LoggerModule } from "./Logger.module";
export { Logger } from "./Logger.service";
```
### Adding files

- Create your file inside of the desired easey-common directory
- Within the ```index.ts``` file of that directory, export the exported members of the new file

## Publishing new package version

- On the current branch in terminal, add all file changes with ```git add .```
- Commit the files using [commitizen](https://commitizen-tools.github.io/commitizen/), a commit formatter that is digestible by [semantic-release](https://semantic-release.gitbook.io/semantic-release/)
``` npm run commit ```
- Follow the prompts and create your commit
- Push the commit to your current branch
``` git push origin CURRENT_BRANCH```
- Github workflows for this package are set up to create new package versions whenever a push or merge to the ```master, next, next-major, beta, or alpha``` branches is executed
- Semantic-Release will version all code automatically, based on the input received from the commitizen commit

## Disclaimer
The United States Environmental Protection Agency (EPA) GitHub project code is provided on an "as is" basis and the user assumes responsibility for its use. EPA has relinquished control of the information and no longer has responsibility to protect the integrity, confidentiality, or availability of the information. Any reference to specific commercial products, processes, or services by service mark, trademark, manufacturer, or otherwise, does not constitute or imply their endorsement, recommendation or favoring by EPA. The EPA seal and logo shall not be used in any manner to imply endorsement of any commercial product or activity by EPA or the United States Government.

## License & Contributing
​
This project is licensed under the MIT License. We encourage you to read this project’s [License](https://github.com/US-EPA-CAMD/easey-common/blob/master/LICENSE), [Contributing Guidelines](https://github.com/US-EPA-CAMD/easey-common/blob/master/CONTRIBUTING.md), and [Code of Conduct](https://github.com/US-EPA-CAMD/easey-common/blob/master/CODE_OF_CONDUCT.md).