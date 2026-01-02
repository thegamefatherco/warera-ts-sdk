# EventGetEventsPaginatedInput

## Example Usage

```typescript
import { EventGetEventsPaginatedInput } from "@thegamefatherco/warera-sdk/models/operations";

let value: EventGetEventsPaginatedInput = {};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `limit`                           | *number*                          | :heavy_minus_sign:                | The limit of events to get        |
| `cursor`                          | *string*                          | :heavy_minus_sign:                | The cursor to get the next events |
| `countryId`                       | *string*                          | :heavy_minus_sign:                | Filter events by country ID       |