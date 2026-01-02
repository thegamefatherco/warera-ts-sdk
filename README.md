# @thegamefatherco/warera-sdk

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *@thegamefatherco/warera-sdk* API.

[![Built by Speakeasy](https://img.shields.io/badge/Built_by-SPEAKEASY-374151?style=for-the-badge&labelColor=f3f4f6)](https://www.speakeasy.com/?utm_source=@thegamefatherco/warera-sdk&utm_campaign=typescript)
[![License: MIT](https://img.shields.io/badge/LICENSE_//_MIT-3b5bdb?style=for-the-badge&labelColor=eff6ff)](https://opensource.org/licenses/MIT)


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/thecodefatherco/thecodefatherco). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

WarEra API: WarEra tRPC API endpoints. ⚠️ Please notice that every call is in GET and not POST.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@thegamefatherco/warera-sdk](#thegamefathercowarera-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Warera } from "@thegamefatherco/warera-sdk";

const warera = new Warera({
  serverURL: "https://api.example.com",
});

async function run() {
  await warera.companies.getById();
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Articles](docs/sdks/articles/README.md)

* [get](docs/sdks/articles/README.md#get) - Get article by ID
* [getPaginated](docs/sdks/articles/README.md#getpaginated) - Get paginated articles

### [BattleRankings](docs/sdks/battlerankings/README.md)

* [get](docs/sdks/battlerankings/README.md#get) - Get battle rankings

### [Battles](docs/sdks/battles/README.md)

* [getById](docs/sdks/battles/README.md#getbyid) - Get battle by ID
* [getLiveData](docs/sdks/battles/README.md#getlivedata) - Get live battle data
* [getAll](docs/sdks/battles/README.md#getall) - Get battles

### [Companies](docs/sdks/companies/README.md)

* [getById](docs/sdks/companies/README.md#getbyid) - Get company by ID
* [getAll](docs/sdks/companies/README.md#getall) - Get companies with pagination

### [Countries](docs/sdks/countries/README.md)

* [getById](docs/sdks/countries/README.md#getbyid) - Get country by ID
* [getAll](docs/sdks/countries/README.md#getall) - Get all countries

### [Events](docs/sdks/events/README.md)

* [getPaginated](docs/sdks/events/README.md#getpaginated) - Get paginated events

### [GameConfigs](docs/sdks/gameconfigs/README.md)

* [getDates](docs/sdks/gameconfigs/README.md#getdates) - Get game dates
* [get](docs/sdks/gameconfigs/README.md#get) - Get game configuration

### [Governments](docs/sdks/governments/README.md)

* [getByCountryId](docs/sdks/governments/README.md#getbycountryid) - Get government by country ID

### [ItemOffers](docs/sdks/itemoffers/README.md)

* [get](docs/sdks/itemoffers/README.md#get) - Get item offer by ID

### [ItemTradings](docs/sdks/itemtradings/README.md)

* [getPrices](docs/sdks/itemtradings/README.md#getprices) - Get item prices

### [Mus](docs/sdks/mus/README.md)

* [get](docs/sdks/mus/README.md#get) - Get military unit by ID
* [getPaginated](docs/sdks/mus/README.md#getpaginated) - Get military units (paginated)

### [Rankings](docs/sdks/rankings/README.md)

* [get](docs/sdks/rankings/README.md#get) - Get ranking data

### [Region](docs/sdks/region/README.md)

* [getById](docs/sdks/region/README.md#getbyid) - Get region by ID

### [Regions](docs/sdks/regions/README.md)

* [getAll](docs/sdks/regions/README.md#getall) - Get all regions

### [Rounds](docs/sdks/rounds/README.md)

* [get](docs/sdks/rounds/README.md#get) - Get round by ID
* [getLastHits](docs/sdks/rounds/README.md#getlasthits) - Get last hits in round

### [Search](docs/sdks/search/README.md)

* [perform](docs/sdks/search/README.md#perform) - Global search

### [TradingOrders](docs/sdks/tradingorders/README.md)

* [getTop](docs/sdks/tradingorders/README.md#gettop) - Get best orders for an item

### [Transactions](docs/sdks/transactions/README.md)

* [getAll](docs/sdks/transactions/README.md#getall) - Get paginated transactions

### [Upgrades](docs/sdks/upgrades/README.md)

* [getByTypeAndEntity](docs/sdks/upgrades/README.md#getbytypeandentity) - Get upgrade by type and entity

### [Users](docs/sdks/users/README.md)

* [getLite](docs/sdks/users/README.md#getlite) - Get user profile (lite)
* [getByCountry](docs/sdks/users/README.md#getbycountry) - Get users by country

### [WorkOffers](docs/sdks/workoffers/README.md)

* [get](docs/sdks/workoffers/README.md#get) - Get work offer by ID
* [getByCompany](docs/sdks/workoffers/README.md#getbycompany) - Get work offer by company ID
* [getPaginated](docs/sdks/workoffers/README.md#getpaginated) - Get paginated work offers

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`articlesGet`](docs/sdks/articles/README.md#get) - Get article by ID
- [`articlesGetPaginated`](docs/sdks/articles/README.md#getpaginated) - Get paginated articles
- [`battleRankingsGet`](docs/sdks/battlerankings/README.md#get) - Get battle rankings
- [`battlesGetAll`](docs/sdks/battles/README.md#getall) - Get battles
- [`battlesGetById`](docs/sdks/battles/README.md#getbyid) - Get battle by ID
- [`battlesGetLiveData`](docs/sdks/battles/README.md#getlivedata) - Get live battle data
- [`companiesGetAll`](docs/sdks/companies/README.md#getall) - Get companies with pagination
- [`companiesGetById`](docs/sdks/companies/README.md#getbyid) - Get company by ID
- [`countriesGetAll`](docs/sdks/countries/README.md#getall) - Get all countries
- [`countriesGetById`](docs/sdks/countries/README.md#getbyid) - Get country by ID
- [`eventsGetPaginated`](docs/sdks/events/README.md#getpaginated) - Get paginated events
- [`gameConfigsGet`](docs/sdks/gameconfigs/README.md#get) - Get game configuration
- [`gameConfigsGetDates`](docs/sdks/gameconfigs/README.md#getdates) - Get game dates
- [`governmentsGetByCountryId`](docs/sdks/governments/README.md#getbycountryid) - Get government by country ID
- [`itemOffersGet`](docs/sdks/itemoffers/README.md#get) - Get item offer by ID
- [`itemTradingsGetPrices`](docs/sdks/itemtradings/README.md#getprices) - Get item prices
- [`musGet`](docs/sdks/mus/README.md#get) - Get military unit by ID
- [`musGetPaginated`](docs/sdks/mus/README.md#getpaginated) - Get military units (paginated)
- [`rankingsGet`](docs/sdks/rankings/README.md#get) - Get ranking data
- [`regionGetById`](docs/sdks/region/README.md#getbyid) - Get region by ID
- [`regionsGetAll`](docs/sdks/regions/README.md#getall) - Get all regions
- [`roundsGet`](docs/sdks/rounds/README.md#get) - Get round by ID
- [`roundsGetLastHits`](docs/sdks/rounds/README.md#getlasthits) - Get last hits in round
- [`searchPerform`](docs/sdks/search/README.md#perform) - Global search
- [`tradingOrdersGetTop`](docs/sdks/tradingorders/README.md#gettop) - Get best orders for an item
- [`transactionsGetAll`](docs/sdks/transactions/README.md#getall) - Get paginated transactions
- [`upgradesGetByTypeAndEntity`](docs/sdks/upgrades/README.md#getbytypeandentity) - Get upgrade by type and entity
- [`usersGetByCountry`](docs/sdks/users/README.md#getbycountry) - Get users by country
- [`usersGetLite`](docs/sdks/users/README.md#getlite) - Get user profile (lite)
- [`workOffersGet`](docs/sdks/workoffers/README.md#get) - Get work offer by ID
- [`workOffersGetByCompany`](docs/sdks/workoffers/README.md#getbycompany) - Get work offer by company ID
- [`workOffersGetPaginated`](docs/sdks/workoffers/README.md#getpaginated) - Get paginated work offers

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Warera } from "@thegamefatherco/warera-sdk";

const warera = new Warera({
  serverURL: "https://api.example.com",
});

async function run() {
  await warera.companies.getById({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Warera } from "@thegamefatherco/warera-sdk";

const warera = new Warera({
  serverURL: "https://api.example.com",
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
});

async function run() {
  await warera.companies.getById();
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`WareraError`](./src/models/errors/wareraerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                            |
| ------------------- | ---------- | ------------------------------------------------------ |
| `error.message`     | `string`   | Error message                                          |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                     |
| `error.headers`     | `Headers`  | HTTP response headers                                  |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned. |
| `error.rawResponse` | `Response` | Raw HTTP response                                      |

### Example
```typescript
import { Warera } from "@thegamefatherco/warera-sdk";
import * as errors from "@thegamefatherco/warera-sdk/models/errors";

const warera = new Warera({
  serverURL: "https://api.example.com",
});

async function run() {
  try {
    await warera.companies.getById();
  } catch (error) {
    if (error instanceof errors.WareraError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`WareraError`](./src/models/errors/wareraerror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`WareraError`](./src/models/errors/wareraerror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Warera } from "@thegamefatherco/warera-sdk";
import { HTTPClient } from "@thegamefatherco/warera-sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Warera({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Warera } from "@thegamefatherco/warera-sdk";

const sdk = new Warera({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `WARERA_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=@thegamefatherco/warera-sdk&utm_campaign=typescript)
