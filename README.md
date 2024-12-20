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

## Using Manual Commit Messages to Tell Semantic Release to Create a New Version
### How Semantic Release Works

**Semantic Release** automates versioning and package publishing by analyzing commit messages in the Git repository. 

---

### 1. When Does Semantic Release Trigger a New Version?

Semantic Release determines if a new version should be released by analyzing **conventional commit messages**. A new release is triggered if there are commits with keywords indicating a version change.

#### Commit Message Keywords

Semantic Release relies on [Conventional Commits](https://www.conventionalcommits.org/) to decide if a release is required:

Assuming current easey-common version is 18.5.1
- **`fix:`** (or `patch:`): Indicates a bug fix. Triggers a **patch release** (e.g., `18.5.2`).
- **`feat:`**: Indicates a new feature. Triggers a **minor release** (e.g., `18.6.0`).
- **Breaking Changes**: Any commit that contains `BREAKING CHANGE:` in the footer or commit description triggers a **major release** (e.g., `19.0.0`).

#### Example:
If these commits exist since the last release:
1. `fix: resolve issue with guards` → Patch Release
2. `feat: add additional user guards` → Minor Release
3. `fix: Client guards now require a new http header` and `BREAKING CHANGE: deprecated old API` → Major Release

Semantic Release will aggregate these and release the highest applicable version increment.

---

### 2. How Does Semantic Release Determine the New Version Number?

Semantic Release follows the **Semantic Versioning (SemVer)** standard to determine the new version number. Based on the commit types, it increments the version number appropriately:

- **Patch Release**:
  Increment the last digit (e.g., `18.5.1` → `18.5.2`) for bug fixes (`fix:`).
- **Minor Release**:
  Increment the middle digit (e.g., `18.5.1` → `18.6.0`) for new features (`feat:`).
- **Major Release**:
  Increment the first digit (e.g., `18.5.1` → `19.0.0`) for breaking changes (`BREAKING CHANGE:`).

#### Rules for Determination:
1. **Aggregate Commit Types**:
   If multiple commit types exist, the highest priority determines the version:
    - Major > Minor > Patch
2. **No Relevant Commits**:
   If there are no `fix:`, `feat:`, or `BREAKING CHANGE` commits, no new version is released.

#### Example:
If the current version is `18.5.1`:
- Commit `fix: correct typo in method call` → New version is `18.5.2`
- Commit `feat: add new API endpoint` → New version is `18.6.0`
- Commit with `BREAKING CHANGE: update authentication flow` → New version is `19.0.0`

---

# Testing `easey-common` changes locally 
Making changes to `easey-common` usually involves first testing those changes locally before pushing to remote and merging to `master`. To test these changes against a backend-api (e.g. `easey-camd-services`), you can use local path dependencies to link the local version of `easey-common` to the backend API. This allows you to test changes without pushing `easey-common` to the remote repository.

In the following instructions, we will use `easey-camd-services` as an example backend API to test local changes made to `easey-common`.

By using **local path dependencies**, you can directly link the local version of `easey-common` to `easey-camd-services`.

---

## Steps to Use Local Path Dependencies

### 1. Update Dependency in `easey-camd-services`
- Navigate to the `easey-camd-services` project directory.
- Update the `package.json` file and replace the `easey-common` dependency with a local file path reference:

```json
{
  "dependencies": {
    "easey-common": "file:../easey-common/lib"
  }
}
```
- Run the following command in the `easey-camd-services` directory to install dependencies and link the local version of `easey-common`:

```bash
yarn add file:./../easey-common/lib
yarn build 
```

### 3. Build `easey-common` Locally

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
{
    "dependencies": {
      "easey-common": "x.x.x"
    }
}
```

2. Run the following command to reinstall dependencies:

```bash
yarn install
```

---

## Notes
- Always ensure `easey-common` is rebuilt using `yarn build` after making changes for the updates to reflect in `easey-camd-services`.
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
