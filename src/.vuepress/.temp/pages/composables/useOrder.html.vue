<template><div><h1 id="useorder-composable" tabindex="-1"><a class="header-anchor" href="#useorder-composable" aria-hidden="true">#</a> UseOrder Composable</h1>
<h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2>
<p><strong>UseOrder</strong> composable can be used to:</p>
<ul>
<li>Search orders.</li>
</ul>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useUserOrder<span class="token punctuation">,</span> orderGetters <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/odoo'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onSSR <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> orders<span class="token punctuation">,</span> search <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useUserOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">onSSR</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">await</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      orders<span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>orders <span class="token operator">?</span> orders<span class="token punctuation">.</span>value <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      totalOrders<span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> orderGetters<span class="token punctuation">.</span><span class="token function">getOrdersTotal</span><span class="token punctuation">(</span>orders<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


