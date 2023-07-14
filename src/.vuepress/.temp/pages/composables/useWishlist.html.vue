<template><div><h1 id="usewishlist-composable" tabindex="-1"><a class="header-anchor" href="#usewishlist-composable" aria-hidden="true">#</a> UseWishlist Composable</h1>
<p><strong>UseWishlist</strong> composable can be used to:</p>
<ul>
<li>Add item to wishlist</li>
<li>Remove item from wishlist</li>
<li>Check if item is on wishlist</li>
<li>Load wishlist of the user</li>
</ul>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<p>A <strong>WishlistItem</strong> in odoo</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">WishlistItem</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  product<span class="token operator">:</span> Product<span class="token punctuation">;</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">Wishlist</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  wishlistItems<span class="token operator">?</span><span class="token operator">:</span> WishlistItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useWishlist <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/odoo'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onSSR <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> addItemToWishlist<span class="token punctuation">,</span> removeItem<span class="token punctuation">,</span> isInWishlist<span class="token punctuation">,</span> load<span class="token operator">:</span> loadWishlist <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useWishlist</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">onSSR</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token function">loadWishlist</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        removeItem<span class="token punctuation">,</span>
        addItemToWishlist<span class="token punctuation">,</span>
        isInWishlist
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


