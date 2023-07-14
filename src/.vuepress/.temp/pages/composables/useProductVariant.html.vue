<template><div><h1 id="useproductvariant-composable" tabindex="-1"><a class="header-anchor" href="#useproductvariant-composable" aria-hidden="true">#</a> UseProductVariant Composable</h1>
<p><strong>UseProductVariant</strong> composable can be used to:</p>
<ul>
<li>Search Variants of a product</li>
<li>Search the real product variant</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ProductVariant</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  product<span class="token operator">:</span> Product<span class="token punctuation">;</span>
  productTemplateId<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  displayName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  displayImage<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  listPrice<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  hasDiscountedPrice<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  isCombinationPossible<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// searchRealProduct input</span>
<span class="token keyword">type</span> <span class="token class-name">GraphQlGetProductVariantParams</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  productTemplateId<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  combinationId<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useProductVariant <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/odoo'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onSSR <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> searchRealProduct<span class="token punctuation">,</span> realProduct <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useProductVariant</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token function">onSSR</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token function">searchRealProduct</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        productId<span class="token operator">:</span> id<span class="token punctuation">,</span>
        combinationIds<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// list of variant combination ids,</span>
        customQuery<span class="token operator">:</span> <span class="token punctuation">{</span> getRealProduct<span class="token operator">:</span> <span class="token string">'customRealProductQuery'</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">await</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      realProduct
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


