# BattleRankingGetRankingRequest

## Example Usage

```typescript
import { BattleRankingGetRankingRequest } from "@thegamefatherco/warera-sdk/models/operations";

let value: BattleRankingGetRankingRequest = {
  dataType: "money",
  type: "country",
  side: "attacker",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `battleId`                                                                                       | *string*                                                                                         | :heavy_minus_sign:                                                                               | Optional battle ID to filter rankings                                                            |
| `roundId`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | Optional round ID to filter rankings                                                             |
| `warId`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | Optional war ID to filter rankings                                                               |
| `dataType`                                                                                       | [operations.DataType](../../models/operations/datatype.md)                                       | :heavy_check_mark:                                                                               | Type of ranking data to retrieve (damage, ground points, or money)                               |
| `type`                                                                                           | [operations.BattleRankingGetRankingType](../../models/operations/battlerankinggetrankingtype.md) | :heavy_check_mark:                                                                               | Whether to rank by user or country                                                               |
| `side`                                                                                           | [operations.Side](../../models/operations/side.md)                                               | :heavy_check_mark:                                                                               | Which side of the battle to rank                                                                 |