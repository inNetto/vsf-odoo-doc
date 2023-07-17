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

# Image handle
Always use the **getImage** method!

### Why ? 
- He is build to fetch from correct baseURL (CDN for production / odoo others)
- He is already injected in vue

### How ?
```ts
   // from template
   $image(productGetters.getCoverImage(product))
   $image( <image url> )

   // from setup
   { url: root.$image(img.small) }

```

### Example 1
```html
  <SfCollectedProduct
    v-for="product in products"
    :key="wishlistGetters.getItemSku(product)"
    :image="$image(wishlistGetters.getItemImage(product))"
    :title="wishlistGetters.getItemName(product)"
  />

```

### Example 2
```html
  <SfImage
    :src="$image(icon.image)"
    :alt="icon.name || 'icon-image'"
    :width="57"
    :height="25"
  />

```
