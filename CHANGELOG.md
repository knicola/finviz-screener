# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.3] - 2021-10-16
### Changed
* Bump `@types/jest` from 27.0.1 to 27.0.2
* Bump `eslint` from 7.32.0 to 8.0.1
* Bump `eslint-plugin-jsdoc` from 36.0.8 to 36.1.1
* Bump `htmlparser2` from 6.1.0 to 7.1.2
* Bump `jest` from 27.0.6 to 27.2.5
* Bump `jsdoc-to-markdown` from 7.0.1 to 7.1.0
* Bump `jsdoc-ts-utils` from 2.0.0 to 2.0.1
* Bump `axios` from 0.21.1 to 0.23.0

## [1.1.2] - 2021-08-27
### Added
* Support for named exports.
* Support for strict ESM.
### Fixed
* Typescript definitions to improve intellisense.

## [1.1.1] - 2021-08-20
### Fixed
* Fixed API.md link in README file.

## [1.1.0] - 2021-08-20
### Added
* Ability to fetch more than the first page of available tickers.
* Option `pageLimit` to limit the number of pages to fetch. Default is 1.
* Option `requestTimeout` to wait a number of milliseconds before fetching the next page. Default is 1000 ms.
* Dependency on `axios-rate-limit@^1.3.0` to help rate limit requests.
* Dev dependency on `jsdoc-ts-utils@^2.0.0` to add typescript-like features to jsdoc.

### Changed
* Moved static code out of the code generator template and into a base class to ease development.

## [1.0.0] - 2021-08-18
### Added
* Initial `finviz-screener` release.
