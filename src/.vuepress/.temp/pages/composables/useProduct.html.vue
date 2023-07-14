<template><div><h1 id="useproduct-composable" tabindex="-1"><a class="header-anchor" href="#useproduct-composable" aria-hidden="true">#</a> UseProduct Composable</h1>
<div class="hint-container tip">
<p class="hint-container-title">Base  (Methods, Interfaces, Properties)</p>
<p><a href="https://docs.vuestorefront.io/v2/reference/api/core.useproduct.html" target="_blank" rel="noopener noreferrer">VSF useProduct<ExternalLinkIcon/></a></p>
</div>
<h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2>
<ul>
<li>Search products by id</li>
</ul>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Product</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  description<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  displayName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  slug<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  isInStock<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  qty<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  sku<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  image<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  variantImage<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  smallImage<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  mediaGallery<span class="token operator">?</span><span class="token operator">:</span> ProductImage<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  price<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  weight<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  priceAfterDiscount<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  hasDiscountedPrice<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  listPrice<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  realProduct<span class="token operator">?</span><span class="token operator">:</span> ProductVariant<span class="token punctuation">;</span>
  firstVariant<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  currency<span class="token operator">?</span><span class="token operator">:</span> Currency<span class="token punctuation">;</span>
  isInWishlist<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  alternativeProducts<span class="token operator">?</span><span class="token operator">:</span> Product<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  productVariants<span class="token operator">?</span><span class="token operator">:</span> Product<span class="token punctuation">[</span><span class="token punctuation">]</span>
  accessoryProducts<span class="token operator">?</span><span class="token operator">:</span> Product<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  attributeValues<span class="token operator">?</span><span class="token operator">:</span> AttributeValue<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  productTemplate<span class="token operator">?</span><span class="token operator">:</span> Product<span class="token punctuation">;</span>
  categories<span class="token operator">?</span><span class="token operator">:</span> Category<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  seoTitle<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  seoDescription<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  imageWebp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useProduct <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/odoo'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onSSR <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> products<span class="token punctuation">,</span> search <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useProduct</span><span class="token punctuation">(</span><span class="token string">'products'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// or pass an id to be unique</span>

    <span class="token function">onSSR</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
        id<span class="token punctuation">,</span>
        customQuery<span class="token operator">:</span> <span class="token punctuation">{</span> getProductTemplate<span class="token operator">:</span> <span class="token string">'customGetProductQuery'</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      products<span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> products<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


