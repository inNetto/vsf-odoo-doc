<template><div><h1 id="custom-api-client" tabindex="-1"><a class="header-anchor" href="#custom-api-client" aria-hidden="true">#</a> Custom API client</h1>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>Following the <a href="https://docs.vuestorefront.io/v2/integrate/extending-integrations.html#registering-an-extension" target="_blank" rel="noopener noreferrer">Registering an extension<ExternalLinkIcon/></a><br>
, to create new apis client (doesn't exist in odoo )we must register a new extension.</p>
<h4 id="import-the-customapi-file-to-middleware" tabindex="-1"><a class="header-anchor" href="#import-the-customapi-file-to-middleware" aria-hidden="true">#</a> <span style="color:#E38748; font-weight: 400;">Import the customApi file to middleware</span></h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// middleware.config.js</span>
<span class="token keyword">const</span> apis <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./custom-api/api'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">integrations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">odoo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">location</span><span class="token operator">:</span> <span class="token string">'@vue-storefront/odoo-api/server'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">configuration</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        odooBaseUrl<span class="token punctuation">,</span>
        graphqlBaseUrl<span class="token punctuation">,</span>
        <span class="token operator">...</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">extensions</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">extensions</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token operator">...</span>extensions<span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'custom-apis-extension'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">extendApiMethods</span><span class="token operator">:</span> apis
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="create-your-index-file-to-organize-your-api-modules" tabindex="-1"><a class="header-anchor" href="#create-your-index-file-to-organize-your-api-modules" aria-hidden="true">#</a> <span style="color:#E38748; font-weight: 400;">Create your index file to organize your api modules</span></h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// custom-api/api/index.js</span>

<span class="token keyword">const</span> createTelegramNotification <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./createTelegramNotification'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> importCartFromOther <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./importCartFromOther'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  createTelegramNotification<span class="token punctuation">,</span>
  importCartFromOther
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="create-each-of-your-api-module" tabindex="-1"><a class="header-anchor" href="#create-each-of-your-api-module" aria-hidden="true">#</a> <span style="color:#E38748; font-weight: 400;">Create each of your api module</span></h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// custom-api/api/createTelegramNotification.js</span>
<span class="token keyword">const</span> gql <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'graphql-tag'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">createTelegramNotification</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> apolloClient <span class="token operator">=</span> context<span class="token punctuation">.</span>client<span class="token punctuation">.</span>apollo<span class="token punctuation">;</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> apolloClient<span class="token punctuation">.</span><span class="token function">mutate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">variables</span><span class="token operator">:</span> params<span class="token punctuation">,</span>
    <span class="token literal-property property">mutation</span><span class="token operator">:</span> gql<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
      mutation ($email: String!) {
        createTelegramNotification(email: $email) {
            status
            ...
        }
      }</span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> createTelegramNotification<span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


