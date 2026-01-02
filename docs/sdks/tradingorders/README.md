# TradingOrders

## Overview

### Available Operations

* [getTop](#gettop) - Get best orders for an item

## getTop

Retrieves the best orders for an item

### Example Usage

<!-- UsageSnippet language="typescript" operationID="tradingOrder.getTopOrders" method="get" path="/tradingOrder.getTopOrders" -->
```typescript
import { Warera } from "@thegamefatherco/warera-sdk";

const warera = new Warera({
  serverURL: "https://api.example.com",
});

async function run() {
  await warera.tradingOrders.getTop({
    input: {
      itemCode: "<value>",
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WareraCore } from "@thegamefatherco/warera-sdk/core.js";
import { tradingOrdersGetTop } from "@thegamefatherco/warera-sdk/funcs/tradingOrdersGetTop.js";

// Use `WareraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const warera = new WareraCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await tradingOrdersGetTop(warera, {
    input: {
      itemCode: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("tradingOrdersGetTop failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.TradingOrderGetTopOrdersRequest](../../models/operations/tradingordergettopordersrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.WarEraDefaultError | 4XX, 5XX                  | \*/\*                     |