# GameConfig

## Overview

### Available Operations

* [getDates](#getdates) - Get game dates
* [get](#get) - Get game configuration

## getDates

Retrieves game-related dates and timings

### Example Usage

<!-- UsageSnippet language="typescript" operationID="gameConfig.getDates" method="get" path="/gameConfig.getDates" -->
```typescript
import { Warera } from "@thegamefatherco/warera-sdk";

const warera = new Warera({
  serverURL: "https://api.example.com",
});

async function run() {
  await warera.gameConfig.getDates();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WareraCore } from "@thegamefatherco/warera-sdk/core.js";
import { gameConfigGetDates } from "@thegamefatherco/warera-sdk/funcs/gameConfigGetDates.js";

// Use `WareraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const warera = new WareraCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await gameConfigGetDates(warera);
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("gameConfigGetDates failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GameConfigGetDatesRequest](../../models/operations/gameconfiggetdatesrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.WarEraDefaultError | 4XX, 5XX                  | \*/\*                     |

## get

Retrieves static game configuration

### Example Usage

<!-- UsageSnippet language="typescript" operationID="gameConfig.getGameConfig" method="get" path="/gameConfig.getGameConfig" -->
```typescript
import { Warera } from "@thegamefatherco/warera-sdk";

const warera = new Warera({
  serverURL: "https://api.example.com",
});

async function run() {
  await warera.gameConfig.get();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WareraCore } from "@thegamefatherco/warera-sdk/core.js";
import { gameConfigGet } from "@thegamefatherco/warera-sdk/funcs/gameConfigGet.js";

// Use `WareraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const warera = new WareraCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await gameConfigGet(warera);
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("gameConfigGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GameConfigGetGameConfigRequest](../../models/operations/gameconfiggetgameconfigrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.WarEraDefaultError | 4XX, 5XX                  | \*/\*                     |