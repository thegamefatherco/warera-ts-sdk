<!-- Start SDK Example Usage [usage] -->
```typescript
import { Warera } from "@thegamefatherco/warera-sdk";

const warera = new Warera({
  serverURL: "https://api.example.com",
});

async function run() {
  await warera.companies.getById({
    input: {
      companyId: "<id>",
    },
  });
}

run();

```
<!-- End SDK Example Usage [usage] -->