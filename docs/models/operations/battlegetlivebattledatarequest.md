# BattleGetLiveBattleDataRequest

## Example Usage

```typescript
import { BattleGetLiveBattleDataRequest } from "@thegamefatherco/warera-sdk/models/operations";

let value: BattleGetLiveBattleDataRequest = {
  battleId: "<id>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `battleId`                                 | *string*                                   | :heavy_check_mark:                         | The unique identifier of the battle        |
| `roundNumber`                              | *number*                                   | :heavy_minus_sign:                         | Optional specific round number to retrieve |