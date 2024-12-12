# easey-common package
[![GitHub](https://img.shields.io/github/license/US-EPA-CAMD/easey-common)](https://github.com/US-EPA-CAMD/easey-common/blob/develop/LICENSE.md)
[![GitHub version](https://badge.fury.io/gh/US-EPA-CAMD%2Feasey-common.svg)](https://badge.fury.io/gh/US-EPA-CAMD%2Feasey-common)
[![Release Workflow](https://github.com/US-EPA-CAMD/easey-common/workflows/Release%20Workflow/badge.svg)](https://github.com/US-EPA-CAMD/easey-common/actions)<br>

The easey-common package contains shared code from across the US-EPA-CAMD project. 
 
# Downloading and using easey-common

## Getting Started
These instructions will get you a copy of the project package up and running and downloaded.

### Prerequisites
- Project running node
- A ```.yarnrc``` file existing in the root directory, with the contents of: ``` @us-epa-camd:registry=https://npm.pkg.github.com ```
- [Authenticate to github package registry on local machine](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)

### Installing
- Select desired version of package. The most up to date package version is [![GitHub version](https://badge.fury.io/gh/US-EPA-CAMD%2Feasey-common.svg)](https://badge.fury.io/gh/US-EPA-CAMD%2Feasey-common) . <br>
- In terminal execute ```yarn add @us-epa-camd/easey-common``` for latest current version or ```yarn add @us-epa-camd/easey-common@VERSION``` to install a specific version

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
- Commit files using ``` yarn commit ``` which executes the [commitizen](https://commitizen-tools.github.io/commitizen/) plugin, a commit formatter that is digestible by [semantic-release](https://semantic-release.gitbook.io/semantic-release/)
- Follow the prompts and create your commit
- Push the commit to your current branch
``` git push origin CURRENT_BRANCH```
- Github workflows for this package are set up to create new package versions whenever a push or merge to the ```N.B.x, N.x (N is a number), master, next, next-major, beta, or alpha``` branches is executed
- Semantic-Release will version all code automatically, based on the input received from the commitizen commit

## Maintenance Releases
[semantic-release](https://semantic-release.gitbook.io/semantic-release/) supports releasing patches for previously released versions where it is not possible to fully upgrade to the more recent versions. This is accomplished using the `N.N.x and N.x` branch names where N is the version you want to release a patch. If it is required to release a patch to a previously released version then the following steps must be followed to properly release a new patch version.

1. Determine the version to be patched
2. Clone or pull latest from easey-common
3. Create `N.N.x` or `N.x` branch
   - If the version has subsequent versions after it
     - Create `N.N.x` branch with N being the major and minor version of the version being patched
     - Example using v1.0.0 to be patched and the v1.0.0 release tag
       - `git checkout -b 1.0.x v1.0.0`
   - If the version does NOT have subsequent versions after it
     - Create `N.x` branch with N being the major version of the version being patched
     - Example using v1.1.0 to be patched and the v1.1.0 release tag
       - `git checkout -b 1.x v1.1.0`
4. Implement changes in `N.N.x` or `N.x` branch and then follow the same steps above to commit changes using `yarn commit`
5. Release workflow will release a new patch version for the version you choose to be patched

# Testing `easey-common` changes locally 
Making changes to `easey-common` usually involves first testing those changes locally before pushing to remote and merging to `master`. To test these changes against a backend-api (e.g. `easey-camd-services`), you can use local path dependencies to link the local version of `easey-common` to the backend API. This allows you to test changes without pushing `easey-common` to the remote repository.

In the following instructions, we will use `easey-camd-services` as an example backend API to test local changes made to `easey-common`.

By using **local path dependencies**, you can directly link the local version of `easey-common` to `easey-camd-services`.

---

## Steps to Use Local Path Dependencies

### 1. Update Dependency in `easey-camd-services`
- Navigate to the `easey-camd-services` project directory.
- Open the `package.json` file.
- Replace the `easey-common` dependency with a local file path reference:

```json
"dependencies": {
  "easey-common": "file:../easey-common/lib"
}
```

### 2. Install Dependencies
- Run the following command in the `easey-camd-services` directory to install dependencies and link the local version of `easey-common`:

```bash
cd project/easey-camd-services
yarn install
```

### 3. Build `easey-common` Locally
- Navigate to the `easey-common` directory and rebuild the project whenever changes are made:

```bash
cd project/easey-common
yarn build
```

- The rebuilt changes in `easey-common` will immediately reflect in `easey-camd-services`.

### 4. Test Your Changes
- Do `yarn build` in `easey-camd-services` to build the project.
- Run and test `easey-camd-services` to verify the changes made in `easey-common`.

---

## Reverting to Remote Dependency
Once testing is complete and the changes in `easey-common` are finalized, revert the dependency in `easey-camd-services` to the version published in the remote repository:

1. Open `package.json` in `easey-camd-services` and replace the local file reference with the appropriate version number:

```json
"dependencies": {
  "easey-common": "x.x.x"
}
```

2. Run the following command to reinstall dependencies:

```bash
yarn install
```

---

## Notes
- Always ensure `easey-common` is rebuilt after making changes for the updates to reflect in `easey-camd-services`.
- If you encounter any issues with local path dependencies, try clearing the `node_modules` directory and reinstalling dependencies:

```bash
rm -rf node_modules
yarn install
```

This workflow allows faster development and testing of changes in `easey-common` while integrating with backend APIs.

## License & Contributing
This project is licensed under the MIT License. We encourage you to read this project’s [License](https://github.com/US-EPA-CAMD/devops/blob/master/LICENSE), [Contributing Guidelines](https://github.com/US-EPA-CAMD/devops/blob/master/CONTRIBUTING.md), and [Code of Conduct](https://github.com/US-EPA-CAMD/devops/blob/master/CODE_OF_CONDUCT.md).

## Disclaimer
The United States Environmental Protection Agency (EPA) GitHub project code is provided on an "as is" basis and the user assumes responsibility for its use. EPA has relinquished control of the information and no longer has responsibility to protect the integrity , confidentiality, or availability of the information. Any reference to specific commercial products, processes, or services by service mark, trademark, manufacturer, or otherwise, does not constitute or imply their endorsement, recommendation or favoring by EPA. The EPA seal and logo shall not be used in any manner to imply endorsement of any commercial product or activity by EPA or the United States Government.
