# TransactionGetPaginatedTransactionsRequest

## Example Usage

```typescript
import { TransactionGetPaginatedTransactionsRequest } from "@thegamefatherco/warera-sdk/models/operations";

let value: TransactionGetPaginatedTransactionsRequest = {};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `limit`                                 | *number*                                | :heavy_minus_sign:                      | The limit of transactions to get        |
| `cursor`                                | *string*                                | :heavy_minus_sign:                      | The cursor to get the next transactions |
| `userId`                                | *string*                                | :heavy_minus_sign:                      | The user ID to get transactions for     |
| `muId`                                  | *string*                                | :heavy_minus_sign:                      | The MU ID to get transactions for       |
| `countryId`                             | *string*                                | :heavy_minus_sign:                      | The country ID to get transactions for  |
| `itemCode`                              | *string*                                | :heavy_minus_sign:                      | The item code to get transactions for   |
| `transactionType`                       | *operations.TransactionType*            | :heavy_minus_sign:                      | The type of transactions to get         |