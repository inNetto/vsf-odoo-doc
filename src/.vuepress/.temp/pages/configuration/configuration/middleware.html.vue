<template><div><h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1>
<h1 id="what-is-it-about" tabindex="-1"><a class="header-anchor" href="#what-is-it-about" aria-hidden="true">#</a> What is it about?</h1>
<p>Here you can find extra informations that can be useful to configure your integration.</p>
<h1 id="middleware" tabindex="-1"><a class="header-anchor" href="#middleware" aria-hidden="true">#</a> Middleware</h1>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>Odoo use GraphQL. So, we need to use a middleware to convert the graphql to rest api. For more detailed explanation visit (&quot;<a href="https://graphql.org/" target="_blank" rel="noopener noreferrer">https://graphql.org/<ExternalLinkIcon/></a>&quot;)</p>
</div>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// packages/theme/middleware.config.js</span>
<span class="token keyword">const</span> odooBaseUrl <span class="token operator">=</span>
  process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BACKEND_BASE_URL</span> <span class="token operator">||</span>
  process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span> <span class="token operator">||</span>
  <span class="token string">"https://vsfdemo.labs.odoogap.com/"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> graphqlBaseUrl <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>odooBaseUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">graphql/vsf</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">integrations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">odoo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">location</span><span class="token operator">:</span> <span class="token string">"@vue-storefront/odoo-api/server"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">configuration</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        odooBaseUrl<span class="token punctuation">,</span>
        graphqlBaseUrl<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


