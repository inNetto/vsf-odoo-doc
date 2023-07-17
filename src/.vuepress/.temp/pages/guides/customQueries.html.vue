<template><div><h1 id="custom-queries" tabindex="-1"><a class="header-anchor" href="#custom-queries" aria-hidden="true">#</a> Custom queries</h1>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>Following the <a href="https://docs.vuestorefront.io/v2/composition/extending-graphql-queries.html" target="_blank" rel="noopener noreferrer">Extending GraphQL Queries<ExternalLinkIcon/></a>, we can override the base queries from odoo to our custom queries.</p>
<h4 id="import-the-customqueries-file-to-middleware" tabindex="-1"><a class="header-anchor" href="#import-the-customqueries-file-to-middleware" aria-hidden="true">#</a> <span style="color:#E38748; font-weight: 400;">Import the customQueries file to middleware</span></h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// middleware.config.js</span>
<span class="token keyword">const</span> customQueries <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./custom-project-api/customQueries'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">integrations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">odoo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">location</span><span class="token operator">:</span> <span class="token string">'@vue-storefront/odoo-api/server'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">configuration</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        odooBaseUrl<span class="token punctuation">,</span>
        graphqlBaseUrl
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      customQueries
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="custom-queries-file-must-follow" tabindex="-1"><a class="header-anchor" href="#custom-queries-file-must-follow" aria-hidden="true">#</a> <span style="color:#E38748; font-weight: 400;">Custom queries file must follow</span></h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// custom-project-api/customQueries.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">customGetProduct</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>variables<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    varialbes<span class="token punctuation">,</span>
    <span class="token literal-property property">query</span><span class="token operator">:</span> gql<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
      query { 
        product {
          id
          name
        } 
      }
    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
    variables
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container danger">
<p class="hint-container-title">Don't forget to reload the application</p>
<p>The application does not reload automatically after saving the changes in Server Middleware. Due to this, you have to restart the application manually. We are working on enabling Hot Reloading in future updates.</p>
</div>
</div></template>


