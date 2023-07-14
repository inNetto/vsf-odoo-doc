<template><div><h1 id="useuserbilling-composable" tabindex="-1"><a class="header-anchor" href="#useuserbilling-composable" aria-hidden="true">#</a> UseUserBilling Composable</h1>
<p><strong>UseUserBilling</strong> composable can be used to:</p>
<ul>
<li>Add billing address to current cart</li>
</ul>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<p>An <strong>Address</strong> (Partner) in odoo</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Address</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  street<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  street2<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  city<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  state<span class="token operator">:</span> State<span class="token punctuation">;</span>
  zip<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  country<span class="token operator">:</span> Country<span class="token punctuation">;</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  phone<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  isCompany<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  isDefault<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  contacts<span class="token operator">?</span><span class="token operator">:</span> Partner<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  password<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useBilling <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/odoo'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onSSR <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> addAddress <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useUserBilling</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        addAddress
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


