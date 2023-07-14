<template><div><h1 id="usecategory-composable" tabindex="-1"><a class="header-anchor" href="#usecategory-composable" aria-hidden="true">#</a> UseCategory Composable</h1>
<div class="hint-container tip">
<p class="hint-container-title">Base  (Methods, Interfaces, Properties)</p>
<p><a href="https://docs.vuestorefront.io/v2/reference/api/core.usecategory.html" target="_blank" rel="noopener noreferrer">VSF useCategory<ExternalLinkIcon/></a></p>
</div>
<h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2>
<ul>
<li>search a list of categories.</li>
</ul>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<p>A <strong>Category</strong> in odoo can have a parent.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Category</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  slug<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  parent<span class="token operator">?</span><span class="token operator">:</span> Category<span class="token punctuation">;</span>
  childs<span class="token operator">?</span><span class="token operator">:</span> Category<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  products<span class="token operator">?</span><span class="token operator">:</span> Product<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="params" tabindex="-1"><a class="header-anchor" href="#params" aria-hidden="true">#</a> Params</h2>
<p>The base Graphql params is</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">GraphQlGetCategoryParams</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  filter<span class="token operator">:</span> CategoryFilterInput<span class="token punctuation">;</span>
  currentPage<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  pageSize<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  search<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  sort<span class="token operator">?</span><span class="token operator">:</span> CategorySortInput<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">CategoryFilterInput</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  parent<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">CategorySortInput</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> SortEnum<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">enum</span> SortEnum <span class="token punctuation">{</span>
  <span class="token constant">ASC</span><span class="token punctuation">,</span>
  <span class="token constant">DESC</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useCategory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/odoo'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onSSR <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> search<span class="token punctuation">,</span> categories <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCategory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">onSSR</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        filter<span class="token operator">:</span> <span class="token punctuation">{</span> parent<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// Optional filter</span>
        pageSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token comment">// Optional filter</span>
        customQuery<span class="token operator">:</span> <span class="token punctuation">{</span> getCategory<span class="token operator">:</span> <span class="token string">'customGetCategoryQuery'</span> <span class="token punctuation">}</span> <span class="token comment">// Optional custom query</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      categories<span class="token punctuation">,</span>
      loading
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


