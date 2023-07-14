---
icon: file-lines
category:
  - Introduction
tag:
  - Demo
---

# Demonstration

# What is it about?

This documentation is about Odoo integration with Vue Storefront 2. This integration is being developed and maintained by ODOOGAP / PROMPTEQUATION ❤️

Before anything, you should take a look in our live demo: https://vsf.labs.odoogap.com/ _it's a dev server so could be down sometimes_

# Installation

First of all we should understand what's inside the docker-compose file. We have 4 services:

- **Redis**: Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker. It's used by VSF to store the cache.

- **db**: PostgreSQL database used by Odoo.

- **odoo**: Odoo service. This is our backend service that you could use to manage your products, orders, etc.

- **vsf**: Here is our front end integrated to Vue Storefront.

```bash
docker-compose up --build -d
# You might want to check what happens under the hood
docker-compose logs -f
```

If you use Docker Desktop and some .sh files are executed during instalation, we recommend you to read Docker Desktop Documentation to configure wsl  (https://docs.docker.com/docker-for-windows/wsl/).

# After installation

Now just open http://localhost:3000 for VSF and http://localhost:8069 for Odoo (credentials admin/admin)

::: warning
You might not see the top categories (MEN/WOMEN) until the Odoo server is initialized (database init takes time to install all modules)
:::


