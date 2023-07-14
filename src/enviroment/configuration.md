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

# Enviroment

## Template Odoo
|       Env        |                                  Default                                   |                                                                     Description                                                                      |
| :--------------: | :----------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: |
|     BASE_URL     | http://vsfdemo15.labs.odoogap.com/ # or https://localhost:8069 for local |                                                        Base url should target the Odoo server                                                        |
|     SITE_URL     |                          http://localhost:3000/                          |                                                Front end base url should point to the frontend server                                                |
| BACKEND_BASE_URL |                         https://vsf.odoogap.com/                         | Backend base url will point for a private address if required internal access don't need to pass it unless you need a private access to the endpints |
|   PUBLIC_PATH    |                      https://xyz.cloudfront.cdn.com                      |                                              Public path should be defined on production for CDN access                                              |
|     NODE_ENV     |                                   dev                                    |                                      Node enviroment. Should be set to production on production. Default is dev                                      |
|   NODE_LOCALE    |                                  en-EN                                   |                                                            Node locale. Default is en-EN                                                             |
|       PORT       |                                   3000                                   |                                                              Node port. Default is 3000                                                              |
|       HOST       |                                 0.0.0.0                                  |                                                            Node host. Default is 0.0.0.0                                                             |
|  REDIS_ENABLED   |                                  false                                   |                                                   Enable or disable redis cache. Default is false                                                    |
|    REDIS_HOST    |                                127.0.0.1                                 |                                                       Redis host. Default is localhost for dev                                                       |
|    REDIS_PORT    |                                   6379                                   |                                                   Redis port. Default is 6379 in dev configuration                                                   |
|  REDIS_PASSWORD  |                                   pass                                   |                                                          Redis password. Empty is default.                                                           |
| INVALIDATION_KEY |                                   123                                    |                                                             Used for invalidating cache                                                              |
| GOOGLE_TAG_MANAGER_ID |                                   google_container_id               |                                                             This allows you to easily add tracking tags such as Google Analytics                    |


## Vuestoryfront Docker (under construction)

|       Env        |                                  Value                                   |                                                                     Description                                                                      |
| :--------------: | :----------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: |
|     NODE_ENV     | production |                                                         Node enviroment.  Docker builds the project in production env                                                         |
|   NODE_LOCALE    |                                  en-EN                                   |                                                            Node locale. Default is en-EN                                                             |
| BASE_URL |                         http://localhost:8069/                         | Odoo local server |
|   PUBLIC_PATH    |                      https://xyz.cloudfront.cdn.com                      |                                              Public path should be defined on production for CDN access                                              |
|     NODE_ENV     |                                   dev                                    |                                      Node enviroment. Should be set to production on production. Default is dev                                      |





::: info
You can choose to use the .env file or the enviroment variables directly useing **export** command.
:::

# Image Handle

Always use the **getImage** method!

**Why ?**

This fetches from the correct baseURL (CDN for production / odoo others) and its already injected in vue.

**How?**

```js
 // from template
   $image(productGetters.getCoverImage(product))
   $image( image url )

   // from setup
   { url: root.$image(img.small) }
```

# Assets

The assets folder on build stagging / prod will be sent to CDN with some hash.

To nuxt compile the assets links with the rigth use require.

```js
 :placeholder="require('~/assets/images/product/product_placeholder.png')"
```

# Routes

Automaticaly the connector will create the routes for the products and categories.
All the routes will be created on the **customRoutes** folder. Odoo back end provides a slug for the products and categories, so the front end can use that to create the routes.

The commands **update:routes** and **update:redirects** will be used to create three files inside customRoutes folder. The first one creates **products.json** and **categories.json**. The second one creates **redirects.json**.
These are optional scripts to be loaded manually, because the connector will create the routes automatically while build. For example **yarn dev** automatically creates the routes, so you don't need to run the commands.

The connector will take the **website_slug** calculated field for the product data and will add that to a customRoutes/products.json file that should be included on the build. This mechanism is also used for categories slug and redirects. For this purpose you will find the commands: "update:routes" and "update:redirects".

::: warning
You must use **--dontGenerateRoutes** flag on build if you want to skip the customRoutes generation.
:::
