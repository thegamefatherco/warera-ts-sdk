# CompanyGetCompaniesInput

## Example Usage

```typescript
import { CompanyGetCompaniesInput } from "@thegamefatherco/warera-sdk/models/operations";

let value: CompanyGetCompaniesInput = {};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `userId`                             | *string*                             | :heavy_minus_sign:                   | Filter companies by user ID          |
| `orgId`                              | *string*                             | :heavy_minus_sign:                   | Filter companies by organization ID  |
| `perPage`                            | *number*                             | :heavy_minus_sign:                   | Number of companies per page (1-100) |
| `cursor`                             | *string*                             | :heavy_minus_sign:                   | Pagination cursor for next page      |