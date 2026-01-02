# ArticleGetArticlesPaginatedInput

## Example Usage

```typescript
import { ArticleGetArticlesPaginatedInput } from "@thegamefatherco/warera-sdk/models/operations";

let value: ArticleGetArticlesPaginatedInput = {
  type: "top",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [operations.ArticleGetArticlesPaginatedType](../../models/operations/articlegetarticlespaginatedtype.md) | :heavy_check_mark:                                                                                       | The type of articles to get                                                                              |
| `limit`                                                                                                  | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | The limit of articles to get                                                                             |
| `cursor`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `userId`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The user ID to get articles for                                                                          |
| `categories`                                                                                             | *string*[]                                                                                               | :heavy_minus_sign:                                                                                       | The categories to get articles for                                                                       |
| `languages`                                                                                              | *string*[]                                                                                               | :heavy_minus_sign:                                                                                       | The languages to get articles for                                                                        |