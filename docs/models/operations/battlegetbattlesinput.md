# BattleGetBattlesInput

## Example Usage

```typescript
import { BattleGetBattlesInput } from "@thegamefatherco/warera-sdk/models/operations";

let value: BattleGetBattlesInput = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `isActive`                                                   | *boolean*                                                    | :heavy_minus_sign:                                           | Whether to get active battles                                |
| `limit`                                                      | *number*                                                     | :heavy_minus_sign:                                           | The limit of battles to get                                  |
| `cursor`                                                     | *string*                                                     | :heavy_minus_sign:                                           | The cursor to get the next battles                           |
| `direction`                                                  | [operations.Direction](../../models/operations/direction.md) | :heavy_minus_sign:                                           | The direction to get the battles                             |
| `filter`                                                     | [operations.Filter](../../models/operations/filter.md)       | :heavy_minus_sign:                                           | Filter type for battles                                      |
| `defenderRegionId`                                           | *string*                                                     | :heavy_minus_sign:                                           | Filter battles by defender region ID                         |
| `warId`                                                      | *string*                                                     | :heavy_minus_sign:                                           | Filter battles by war ID                                     |
| `countryId`                                                  | *string*                                                     | :heavy_minus_sign:                                           | Filter battles by country ID                                 |