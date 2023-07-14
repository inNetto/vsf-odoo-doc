<template><div><h1 id="useshipping-composable" tabindex="-1"><a class="header-anchor" href="#useshipping-composable" aria-hidden="true">#</a> UseShipping Composable</h1>
<div class="hint-container tip">
<p class="hint-container-title">Base  (Methods, Interfaces, Properties)</p>
<p><a href="https://docs.vuestorefront.io/v2/reference/api/core.useshipping.html" target="_blank" rel="noopener noreferrer">VSF useShipping<ExternalLinkIcon/></a></p>
</div>
<h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2>
<ul>
<li>Search available shipping methods</li>
<li>Load the shipping method and shipping address choosed for <strong>current cart</strong></li>
<li>Save the shippingAddress ( update if has an id in params / add if doesn't have id)</li>
</ul>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<p>The <strong>UseShipping</strong> VSF Core Interface</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>  error<span class="token operator">:</span> ComputedProperty<span class="token operator">&lt;</span>UseShippingErrors<span class="token operator">></span><span class="token punctuation">;</span>
  loading<span class="token operator">:</span> ComputedProperty<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">></span><span class="token punctuation">;</span>
  shipping<span class="token operator">:</span> ComputedProperty<span class="token operator">&lt;</span>Address<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token function">load</span><span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token punctuation">{</span>
        customQuery<span class="token operator">?</span><span class="token operator">:</span> CustomQuery<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token function-variable function">save</span><span class="token operator">:</span> <span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token punctuation">{</span>
        params<span class="token operator">:</span> GraphQlUpdateAddressParams<span class="token punctuation">;</span>
        shippingDetails<span class="token operator">:</span> Address<span class="token punctuation">;</span>
        customQuery<span class="token operator">?</span><span class="token operator">:</span> CustomQuery<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="types" tabindex="-1"><a class="header-anchor" href="#types" aria-hidden="true">#</a> Types</h3>
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

<span class="token keyword">type</span> <span class="token class-name">GraphQlUpdateAddressParams</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  street<span class="token operator">:</span> <span class="token builtin">string</span>
  street2<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  zip<span class="token operator">:</span> <span class="token builtin">string</span>
  city<span class="token operator">:</span> <span class="token builtin">string</span>
  stateId<span class="token operator">:</span> <span class="token builtin">number</span>
  countryId<span class="token operator">:</span> <span class="token builtin">number</span>
  phone<span class="token operator">:</span> <span class="token builtin">string</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">UseShippingErrors</span> <span class="token punctuation">{</span>
    load<span class="token operator">:</span> Error<span class="token punctuation">;</span>
    save<span class="token operator">:</span> Error<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useShipping <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/odoo'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onSSR <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> shippingAddress<span class="token punctuation">,</span> load<span class="token operator">:</span> loadShipping <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useShipping</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token function">loadShipping</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>shippingAddress<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        form<span class="token punctuation">.</span>value <span class="token operator">=</span> shippingAddress<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      formRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">{</span> silent<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      shippingAddress<span class="token punctuation">,</span> 
      productVariants 
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


