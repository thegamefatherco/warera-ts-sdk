# BattleRankingGetRankingRequest

## Example Usage

```typescript
import { BattleRankingGetRankingRequest } from "@thegamefatherco/warera-sdk/models/operations";

let value: BattleRankingGetRankingRequest = {
  input: {
    dataType: "money",
    type: "country",
    side: "attacker",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `input`                                                                                            | [operations.BattleRankingGetRankingInput](../../models/operations/battlerankinggetrankinginput.md) | :heavy_check_mark:                                                                                 | JSON-encoded input parameters                                                                      |