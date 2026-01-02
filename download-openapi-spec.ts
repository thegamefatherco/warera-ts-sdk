#!/usr/bin/env node

import fs from "fs";

const spec = await fetch("https://api2.warera.io/openapi.json").then((res) =>
  res.json()
);

for (const [path, methods] of Object.entries(spec.paths)) {
  if (methods.post) {
    const postOperation = methods.post;

    const getOperation = {
      ...postOperation,
      parameters: [],
    };

    if (postOperation.requestBody?.content?.["application/json"]?.schema) {
      const schema =
        postOperation.requestBody.content["application/json"].schema;
      const hasRequiredProps = (schema.required || []).length > 0;

      // Use 'content' to define a JSON-encoded query parameter with full schema
      getOperation.parameters.push({
        name: "input",
        in: "query",
        required: hasRequiredProps,
        description: "JSON-encoded input parameters",
        content: {
          "application/json": {
            schema: schema,
          },
        },
      });
    }

    delete getOperation.requestBody;
    delete methods.post;
    methods.get = getOperation;
  }
}

fs.writeFileSync("openapi.json", JSON.stringify(spec, null, 2));
console.log(`Transformed spec written to openapi.json`);
