# Companies

## Overview

### Available Operations

* [getById](#getbyid) - Get company by ID
* [list](#list) - Get companies with pagination

## getById

Retrieves detailed information about a specific company

### Example Usage

<!-- UsageSnippet language="typescript" operationID="company.getById" method="get" path="/company.getById" -->
```typescript
import { Warera } from "@thegamefatherco/warera-sdk";

const warera = new Warera({
  serverURL: "https://api.example.com",
});

async function run() {
  await warera.companies.getById({
    input: {
      companyId: "<id>",
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WareraCore } from "@thegamefatherco/warera-sdk/core.js";
import { companiesGetById } from "@thegamefatherco/warera-sdk/funcs/companiesGetById.js";

// Use `WareraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const warera = new WareraCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await companiesGetById(warera, {
    input: {
      companyId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("companiesGetById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CompanyGetByIdRequest](../../models/operations/companygetbyidrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.WarEraDefaultError | 4XX, 5XX                  | \*/\*                     |

## list

Retrieves a paginated list of companies with optional filtering

### Example Usage

<!-- UsageSnippet language="typescript" operationID="company.getCompanies" method="get" path="/company.getCompanies" -->
```typescript
import { Warera } from "@thegamefatherco/warera-sdk";

const warera = new Warera({
  serverURL: "https://api.example.com",
});

async function run() {
  await warera.companies.list();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WareraCore } from "@thegamefatherco/warera-sdk/core.js";
import { companiesList } from "@thegamefatherco/warera-sdk/funcs/companiesList.js";

// Use `WareraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const warera = new WareraCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await companiesList(warera);
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("companiesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CompanyGetCompaniesRequest](../../models/operations/companygetcompaniesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.WarEraDefaultError | 4XX, 5XX                  | \*/\*                     |