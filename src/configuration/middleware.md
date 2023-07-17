---
icon: gear
category:
  - Enviroment
tag:
  - Demo
---

# Configuration

# What is it about?

Here you can find extra informations that can be useful to configure your integration.
# Middleware

::: info
Odoo use GraphQL. So, we need to use a middleware to convert the graphql to rest api. For more detailed explanation visit ("https://graphql.org/")
:::

```js
// packages/theme/middleware.config.js
const odooBaseUrl =
  process.env.BACKEND_BASE_URL ||
  process.env.BASE_URL ||
  "https://vsfdemo.labs.odoogap.com/";
const graphqlBaseUrl = `${odooBaseUrl}graphql/vsf`;

module.exports = {
  integrations: {
    odoo: {
      location: "@vue-storefront/odoo-api/server",
      configuration: {
        odooBaseUrl,
        graphqlBaseUrl,
      },
    },
  },
};
```