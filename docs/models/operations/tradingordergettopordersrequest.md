# TradingOrderGetTopOrdersRequest

## Example Usage

```typescript
import { TradingOrderGetTopOrdersRequest } from "@thegamefatherco/warera-sdk/models/operations";

let value: TradingOrderGetTopOrdersRequest = {
  itemCode: "<value>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `itemCode`                      | *string*                        | :heavy_check_mark:              | The item code to get orders for |
| `limit`                         | *number*                        | :heavy_minus_sign:              | The limit of orders to get      |