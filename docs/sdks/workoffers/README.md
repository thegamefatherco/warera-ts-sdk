# WorkOffers

## Overview

### Available Operations

* [getById](#getbyid) - Get work offer by ID
* [getByCompanyId](#getbycompanyid) - Get work offer by company ID
* [getPaginated](#getpaginated) - Get paginated work offers

## getById

Retrieves detailed information about a specific work offer

### Example Usage

<!-- UsageSnippet language="typescript" operationID="workOffer.getById" method="get" path="/workOffer.getById" -->
```typescript
import { Warera } from "@thegamefatherco/warera-sdk";

const warera = new Warera({
  serverURL: "https://api.example.com",
});

async function run() {
  await warera.workOffers.getById({
    input: {
      workOfferId: "<id>",
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WareraCore } from "@thegamefatherco/warera-sdk/core.js";
import { workOffersGetById } from "@thegamefatherco/warera-sdk/funcs/workOffersGetById.js";

// Use `WareraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const warera = new WareraCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await workOffersGetById(warera, {
    input: {
      workOfferId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("workOffersGetById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.WorkOfferGetByIdRequest](../../models/operations/workoffergetbyidrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.WarEraDefaultError | 4XX, 5XX                  | \*/\*                     |

## getByCompanyId

Retrieves work offer for a specific company

### Example Usage

<!-- UsageSnippet language="typescript" operationID="workOffer.getWorkOfferByCompanyId" method="get" path="/workOffer.getWorkOfferByCompanyId" -->
```typescript
import { Warera } from "@thegamefatherco/warera-sdk";

const warera = new Warera({
  serverURL: "https://api.example.com",
});

async function run() {
  await warera.workOffers.getByCompanyId({
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
import { workOffersGetByCompanyId } from "@thegamefatherco/warera-sdk/funcs/workOffersGetByCompanyId.js";

// Use `WareraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const warera = new WareraCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await workOffersGetByCompanyId(warera, {
    input: {
      companyId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("workOffersGetByCompanyId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.WorkOfferGetWorkOfferByCompanyIdRequest](../../models/operations/workoffergetworkofferbycompanyidrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.WarEraDefaultError | 4XX, 5XX                  | \*/\*                     |

## getPaginated

Retrieves a paginated list of work offers with optional user and region filtering

### Example Usage

<!-- UsageSnippet language="typescript" operationID="workOffer.getWorkOffersPaginated" method="get" path="/workOffer.getWorkOffersPaginated" -->
```typescript
import { Warera } from "@thegamefatherco/warera-sdk";

const warera = new Warera({
  serverURL: "https://api.example.com",
});

async function run() {
  await warera.workOffers.getPaginated();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WareraCore } from "@thegamefatherco/warera-sdk/core.js";
import { workOffersGetPaginated } from "@thegamefatherco/warera-sdk/funcs/workOffersGetPaginated.js";

// Use `WareraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const warera = new WareraCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await workOffersGetPaginated(warera);
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("workOffersGetPaginated failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.WorkOfferGetWorkOffersPaginatedRequest](../../models/operations/workoffergetworkofferspaginatedrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.WarEraDefaultError | 4XX, 5XX                  | \*/\*                     |