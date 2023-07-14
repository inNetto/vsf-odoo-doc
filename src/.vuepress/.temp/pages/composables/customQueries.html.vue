<template><div><h1 id="custom-queries" tabindex="-1"><a class="header-anchor" href="#custom-queries" aria-hidden="true">#</a> Custom Queries</h1>
<h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2>
<p>From <a href="https://docs.vuestorefront.io/v2/advanced/extending-graphql-queries.html" target="_blank" rel="noopener noreferrer">VSF2 docs<ExternalLinkIcon/></a>,<br>
we can use custom query on existing APIS.<br>
Most of the apis use 'customQuery' index.</p>
<h3 id="use-cart" tabindex="-1"><a class="header-anchor" href="#use-cart" aria-hidden="true">#</a> Use Cart</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>  <span class="token keyword">const</span> <span class="token punctuation">{</span> load<span class="token operator">:</span> loadCart<span class="token punctuation">,</span> cart <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">await</span> <span class="token function">loadCart</span><span class="token punctuation">(</span><span class="token punctuation">{</span> customQuery<span class="token operator">:</span> <span class="token punctuation">{</span> cartLoad<span class="token operator">:</span> <span class="token string">'customCartLoad'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-category" tabindex="-1"><a class="header-anchor" href="#use-category" aria-hidden="true">#</a> Use Category</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>  <span class="token keyword">const</span> <span class="token punctuation">{</span> categories<span class="token punctuation">,</span> search<span class="token operator">:</span> searchCategories <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCategory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">await</span> <span class="token function">loadCart</span><span class="token punctuation">(</span><span class="token punctuation">{</span> pageSize<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> customQuery<span class="token operator">:</span> <span class="token punctuation">{</span> getCategory<span class="token operator">:</span> <span class="token string">'customGetCategory'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-countrysearch" tabindex="-1"><a class="header-anchor" href="#use-countrysearch" aria-hidden="true">#</a> Use CountrySearch</h3>
<h3 id="use-facet" tabindex="-1"><a class="header-anchor" href="#use-facet" aria-hidden="true">#</a> Use Facet</h3>
<ul>
<li>getProductTemplatesList</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code> <span class="token keyword">await</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
   <span class="token operator">...</span>uiHelper<span class="token punctuation">.</span><span class="token function">getFacetsFromURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   customQueryProducts<span class="token operator">:</span> <span class="token punctuation">{</span>
      getProductTemplatesList<span class="token operator">:</span> <span class="token string">'customProductTempalteListCategory'</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   customQueryCategories<span class="token operator">:</span> <span class="token punctuation">{</span>
      getCategory<span class="token operator">:</span> <span class="token string">'customCategoryQuery'</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-password" tabindex="-1"><a class="header-anchor" href="#use-password" aria-hidden="true">#</a> Use Password</h3>
<h3 id="use-product" tabindex="-1"><a class="header-anchor" href="#use-product" aria-hidden="true">#</a> Use Product</h3>
<ul>
<li>getProductTemplate</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code> <span class="token keyword">await</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   id<span class="token punctuation">,</span>
   customQuery<span class="token operator">:</span> <span class="token punctuation">{</span> getProductTemplate<span class="token operator">:</span> <span class="token string">'customProductTemplateQuery'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-productvariant" tabindex="-1"><a class="header-anchor" href="#use-productvariant" aria-hidden="true">#</a> Use ProductVariant</h3>
<h3 id="use-shipping" tabindex="-1"><a class="header-anchor" href="#use-shipping" aria-hidden="true">#</a> Use Shipping</h3>
<h3 id="use-user" tabindex="-1"><a class="header-anchor" href="#use-user" aria-hidden="true">#</a> Use User</h3>
<ul>
<li>signUpUser</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>  <span class="token keyword">await</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    user<span class="token operator">:</span> form<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
    customQuery<span class="token operator">:</span> <span class="token punctuation">{</span> signUpUser<span class="token operator">:</span> <span class="token string">'customSignUpUserMutation'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-user-billing" tabindex="-1"><a class="header-anchor" href="#use-user-billing" aria-hidden="true">#</a> Use User Billing</h3>
<h3 id="use-wishlist" tabindex="-1"><a class="header-anchor" href="#use-wishlist" aria-hidden="true">#</a> Use Wishlist</h3>
<h3 id="use-order" tabindex="-1"><a class="header-anchor" href="#use-order" aria-hidden="true">#</a> Use Order</h3>
<ul>
<li>ordersGet</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>  <span class="token keyword">await</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token punctuation">{</span> customQuery<span class="token operator">:</span> <span class="token punctuation">{</span> ordersGet<span class="token operator">:</span> <span class="token string">'customOrdersGetQuery'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


