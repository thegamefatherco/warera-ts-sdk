# UpgradeGetUpgradeByTypeAndEntityInput

## Example Usage

```typescript
import { UpgradeGetUpgradeByTypeAndEntityInput } from "@thegamefatherco/warera-sdk/models/operations";

let value: UpgradeGetUpgradeByTypeAndEntityInput = {
  upgradeType: "dormitories",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `upgradeType`                                                    | [operations.UpgradeType](../../models/operations/upgradetype.md) | :heavy_check_mark:                                               | The upgrade type to get                                          |
| `regionId`                                                       | *string*                                                         | :heavy_minus_sign:                                               | The region ID to get upgrade for                                 |
| `companyId`                                                      | *string*                                                         | :heavy_minus_sign:                                               | The company ID to get upgrade for                                |
| `muId`                                                           | *string*                                                         | :heavy_minus_sign:                                               | The military unit ID to get upgrade for                          |