# BattleGetLiveBattleDataInput

## Example Usage

```typescript
import { BattleGetLiveBattleDataInput } from "@thegamefatherco/warera-sdk/models/operations";

let value: BattleGetLiveBattleDataInput = {
  battleId: "<id>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `battleId`                                 | *string*                                   | :heavy_check_mark:                         | The unique identifier of the battle        |
| `roundNumber`                              | *number*                                   | :heavy_minus_sign:                         | Optional specific round number to retrieve |