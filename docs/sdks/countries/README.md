# Countries

## Overview

### Available Operations

* [getById](#getbyid) - Get country by ID
* [getAll](#getall) - Get all countries

## getById

Retrieves detailed information about a specific country

### Example Usage

<!-- UsageSnippet language="typescript" operationID="country.getCountryById" method="post" path="/country.getCountryById" -->
```typescript
import { Warera } from "@thegamefatherco/warera-sdk";

const warera = new Warera({
  serverURL: "https://api.example.com",
});

async function run() {
  await warera.countries.getById();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WareraCore } from "@thegamefatherco/warera-sdk/core.js";
import { countriesGetById } from "@thegamefatherco/warera-sdk/funcs/countriesGetById.js";

// Use `WareraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const warera = new WareraCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await countriesGetById(warera);
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("countriesGetById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CountryGetCountryByIdRequest](../../models/operations/countrygetcountrybyidrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.WarEraDefaultError | 4XX, 5XX                  | \*/\*                     |

## getAll

Retrieves a list of all available countries

### Example Usage

<!-- UsageSnippet language="typescript" operationID="country.getAllCountries" method="post" path="/country.getAllCountries" -->
```typescript
import { Warera } from "@thegamefatherco/warera-sdk";

const warera = new Warera({
  serverURL: "https://api.example.com",
});

async function run() {
  await warera.countries.getAll();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WareraCore } from "@thegamefatherco/warera-sdk/core.js";
import { countriesGetAll } from "@thegamefatherco/warera-sdk/funcs/countriesGetAll.js";

// Use `WareraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const warera = new WareraCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await countriesGetAll(warera);
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("countriesGetAll failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CountryGetAllCountriesRequest](../../models/operations/countrygetallcountriesrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.WarEraDefaultError | 4XX, 5XX                  | \*/\*                     |