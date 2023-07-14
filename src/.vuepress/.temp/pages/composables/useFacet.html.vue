<template><div><h1 id="usefacet-composable" tabindex="-1"><a class="header-anchor" href="#usefacet-composable" aria-hidden="true">#</a> UseFacet Composable</h1>
<div class="hint-container tip">
<p class="hint-container-title">Base  (Methods, Interfaces, Properties)</p>
<p><a href="https://docs.vuestorefront.io/v2/reference/api/core.usefacet.html" target="_blank" rel="noopener noreferrer">VSF useFacet<ExternalLinkIcon/></a></p>
</div>
<h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2>
<ul>
<li>search product list with <strong>pagination</strong> and <strong>attributes</strong></li>
<li>search categories</li>
<li>both will be filtered by the uiHelper</li>
</ul>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// Input params</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Params</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  filter<span class="token operator">:</span> ParamsFromUrlFilterInput<span class="token punctuation">;</span>
  currentPage<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  pageSize<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  search<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  categorySlug<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  sort<span class="token operator">:</span> ProductSortInput<span class="token punctuation">;</span>
  customQueryProducts<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  customQueryCategories<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  fetchCategory<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// false = fetch only products</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">ParamsFromUrlFilterInput</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  categoryId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  attributeValueId<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  minPrice<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  maxPrice<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">ProductSortInput</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">?</span><span class="token operator">:</span> SortEnum<span class="token punctuation">;</span>
  price<span class="token operator">?</span><span class="token operator">:</span> SortEnum<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">enum</span> SortEnum <span class="token punctuation">{</span>
  <span class="token constant">ASC</span><span class="token punctuation">,</span>
  <span class="token constant">DESC</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// Response</span>
<span class="token keyword">type</span> <span class="token class-name">FacetSearchResult</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  minPrice<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  maxPrice<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  products<span class="token operator">:</span> Product<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  categories<span class="token operator">:</span> Category<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  facets<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">></span><span class="token punctuation">;</span>
  totalProducts<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  perPageOptions<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  itemsPerPage<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  attributes<span class="token operator">:</span> AttributeValue<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useFacet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/odoo'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onSSR <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useUiHelpers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'~/composables'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> th <span class="token operator">=</span> <span class="token function">useUiHelpers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> result<span class="token punctuation">,</span> search<span class="token punctuation">,</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFacet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">onSSR</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">await</span> <span class="token function">search</span><span class="token punctuation">(</span>th<span class="token punctuation">.</span><span class="token function">getFacets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// VSF default example, helpers will organize the url params and pass to search</span>

        <span class="token keyword">await</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          search<span class="token operator">:</span> <span class="token string">'shirt'</span><span class="token punctuation">,</span>
          pageSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
          currentPage<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          fetchCategory<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          customQueryProducts<span class="token operator">:</span> <span class="token punctuation">{</span> getProductTemplatesList<span class="token operator">:</span> <span class="token string">'customProductListQuery'</span> <span class="token punctuation">}</span> <span class="token comment">// Optional custom query</span>
          customQueryProducts<span class="token operator">:</span> <span class="token punctuation">{</span> getProductTemplatesList<span class="token operator">:</span> <span class="token string">'customProductListQuery'</span> <span class="token punctuation">}</span> <span class="token comment">// Optional custom query</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      products<span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> result<span class="token punctuation">.</span>value<span class="token operator">?.</span>data<span class="token operator">?.</span>products<span class="token punctuation">)</span><span class="token punctuation">,</span>
      categories<span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> result<span class="token punctuation">.</span>value<span class="token operator">?.</span>data<span class="token operator">?.</span>categories<span class="token punctuation">)</span><span class="token punctuation">,</span>
      total<span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> result<span class="token operator">?.</span>value<span class="token operator">?.</span>data<span class="token operator">?.</span>totalProducts<span class="token punctuation">)</span><span class="token punctuation">,</span>
      result
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


