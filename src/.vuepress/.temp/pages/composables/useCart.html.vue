<template><div><h1 id="usecart-composable" tabindex="-1"><a class="header-anchor" href="#usecart-composable" aria-hidden="true">#</a> UseCart Composable</h1>
<div class="hint-container tip">
<p class="hint-container-title">Base  (Methods, Interfaces, Properties)</p>
<p><a href="https://docs.vuestorefront.io/v2/reference/api/core.usecart.html" target="_blank" rel="noopener noreferrer">VSF usecart<ExternalLinkIcon/></a></p>
</div>
<h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2>
<ul>
<li>load cart information.</li>
<li>add, update and remove items in the cart.</li>
<li>checking if product is already added to the cart.</li>
</ul>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<p>A <strong>Cart</strong> in odoo is a <strong>Order</strong> type.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Order</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  partner<span class="token operator">?</span><span class="token operator">:</span> Partner<span class="token punctuation">;</span>
  partnerShipping<span class="token operator">?</span><span class="token operator">:</span> Partner<span class="token punctuation">;</span>
  partnerInvoice<span class="token operator">?</span><span class="token operator">:</span> Partner<span class="token punctuation">;</span>
  dateOrder<span class="token operator">?</span><span class="token operator">:</span> Date<span class="token punctuation">;</span>
  amountUntaxed<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  amountTax<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  amountTotal<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  amountDelivery<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  currency<span class="token operator">:</span> Currency<span class="token punctuation">;</span>
  orderLines<span class="token operator">?</span><span class="token operator">:</span> OrderLine<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  websiteOrderLine<span class="token operator">?</span><span class="token operator">:</span> OrderLine<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  stage<span class="token operator">:</span> OrderStage<span class="token punctuation">;</span>
  orderUrl<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  transactions<span class="token operator">:</span> PaymentTransaction<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Each <strong>orderLine</strong> represents a list of <strong>N</strong> product variant.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">OrderLine</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  product<span class="token operator">?</span><span class="token operator">:</span> Product<span class="token punctuation">;</span>
  quantity<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  priceTotal<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  priceUnit<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  priceSubtotal<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  priceTax<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example 1</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useCart<span class="token punctuation">,</span> cartGetters <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/odoo'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onSSR <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> cart<span class="token punctuation">,</span> removeItem<span class="token punctuation">,</span> updateItemQty<span class="token punctuation">,</span> load <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">onSSR</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token function">loadCart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">await</span> <span class="token function">loadCart</span><span class="token punctuation">(</span><span class="token punctuation">{</span> customQuery<span class="token operator">:</span> <span class="token punctuation">{</span> cartLoad<span class="token operator">:</span> <span class="token string">'myAwesomeCustomQuery'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// With optional custom query</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      removeItem<span class="token punctuation">,</span>
      updateItemQty<span class="token punctuation">,</span>
      products<span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> cartGetters<span class="token punctuation">.</span><span class="token function">getItems</span><span class="token punctuation">(</span>cart<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      totals<span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> cartGetters<span class="token punctuation">.</span><span class="token function">getTotals</span><span class="token punctuation">(</span>cart<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      totalItems<span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> cartGetters<span class="token punctuation">.</span><span class="token function">getTotalItems</span><span class="token punctuation">(</span>cart<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example-2-update-item-qty" tabindex="-1"><a class="header-anchor" href="#example-2-update-item-qty" aria-hidden="true">#</a> Example 2 - update item qty</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useCart<span class="token punctuation">,</span> cartGetters <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/odoo'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> OrderLine <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/odoo-api'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onSSR <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span>
    orderLine<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> Object <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>OrderLine<span class="token operator">></span><span class="token punctuation">,</span>
      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> updateItemQty <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleUpdateItem</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>orderLine<span class="token punctuation">,</span> quantity<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>

      <span class="token keyword">await</span> <span class="token function">updateItemQty</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
         product<span class="token operator">:</span> props<span class="token punctuation">.</span>orderLine<span class="token punctuation">,</span> 
         quantity<span class="token operator">:</span> <span class="token function">Number</span><span class="token punctuation">(</span>quantity<span class="token punctuation">)</span><span class="token punctuation">,</span> 
         customQuery<span class="token operator">:</span> <span class="token punctuation">{</span> cartUpdateItemQty<span class="token operator">:</span> <span class="token string">'customUpdateQtyQuery'</span><span class="token punctuation">}</span> <span class="token comment">// With optional custom query</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example-3-remove-item" tabindex="-1"><a class="header-anchor" href="#example-3-remove-item" aria-hidden="true">#</a> Example 3 - remove item</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useCart<span class="token punctuation">,</span> cartGetters <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/odoo'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> OrderLine <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/odoo-api'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onSSR <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span>
    orderLine<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> Object <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>OrderLine<span class="token operator">></span><span class="token punctuation">,</span>
      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> removeItem<span class="token punctuation">,</span> isInCart<span class="token punctuation">,</span> cart <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleRemoveItem</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>orderLine<span class="token operator">:</span> OrderLine<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
        product<span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> orderLine<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">,</span> 
        customQuery<span class="token operator">:</span> <span class="token punctuation">{</span> cartRemoveItem<span class="token operator">:</span> <span class="token string">'customRemoveItemQuery'</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// With optional custom query</span>
      <span class="token punctuation">}</span>
      <span class="token operator">...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example-4-add-item-to-cart" tabindex="-1"><a class="header-anchor" href="#example-4-add-item-to-cart" aria-hidden="true">#</a> Example 4 - add item to cart</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useCart<span class="token punctuation">,</span> cartGetters <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/odoo'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> OrderLine <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/odoo-api'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onSSR <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span>
    orderLine<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> Object <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>OrderLine<span class="token operator">></span><span class="token punctuation">,</span>
      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> addItem <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleAddItem</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>product<span class="token punctuation">,</span> quantity<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>productInStock<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// custom rule, depends on the client needs</span>

      <span class="token keyword">await</span> <span class="token function">addItem</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
        product<span class="token punctuation">,</span> 
        quantity<span class="token punctuation">,</span>
        customQuery<span class="token operator">:</span> <span class="token punctuation">{</span> cartAddItem<span class="token operator">:</span> <span class="token string">'customAddItemQuery'</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// With optional custom query </span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


