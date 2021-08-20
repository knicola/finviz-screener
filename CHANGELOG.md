# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

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
