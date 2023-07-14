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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="enviroment" tabindex="-1"><a class="header-anchor" href="#enviroment" aria-hidden="true">#</a> Enviroment</h1>
<h2 id="template-odoo" tabindex="-1"><a class="header-anchor" href="#template-odoo" aria-hidden="true">#</a> Template Odoo</h2>
<table>
<thead>
<tr>
<th style="text-align:center">Env</th>
<th style="text-align:center">Default</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">ODOO_BASE_URL</td>
<td style="text-align:center"><a href="http://vsfdemo15.labs.odoogap.com/" target="_blank" rel="noopener noreferrer">http://vsfdemo15.labs.odoogap.com/<ExternalLinkIcon/></a> # or <a href="https://localhost:8069" target="_blank" rel="noopener noreferrer">https://localhost:8069<ExternalLinkIcon/></a> for local</td>
<td style="text-align:center">Base url should target the Odoo server</td>
</tr>
<tr>
<td style="text-align:center">VSF_SITE_URL</td>
<td style="text-align:center"><a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">http://localhost:3000/<ExternalLinkIcon/></a></td>
<td style="text-align:center">Front end base url should point to the frontend server</td>
</tr>
<tr>
<td style="text-align:center">ODOO_BACKEND_BASE_URL</td>
<td style="text-align:center"><a href="https://vsf.odoogap.com/" target="_blank" rel="noopener noreferrer">https://vsf.odoogap.com/<ExternalLinkIcon/></a></td>
<td style="text-align:center">Backend base url will point for a private address if required internal access don't need to pass it unless you need a private access to the endpints</td>
</tr>
<tr>
<td style="text-align:center">PUBLIC_PATH</td>
<td style="text-align:center"><a href="https://xyz.cloudfront.cdn.com" target="_blank" rel="noopener noreferrer">https://xyz.cloudfront.cdn.com<ExternalLinkIcon/></a></td>
<td style="text-align:center">Public path should be defined on production for CDN access</td>
</tr>
<tr>
<td style="text-align:center">VSF_NODE_ENV</td>
<td style="text-align:center">dev</td>
<td style="text-align:center">Node enviroment. Should be set to production on production. Default is dev</td>
</tr>
<tr>
<td style="text-align:center">VSF_NODE_LOCALE</td>
<td style="text-align:center">en-EN</td>
<td style="text-align:center">Node locale. Default is en-EN</td>
</tr>
<tr>
<td style="text-align:center">VSF_PORT</td>
<td style="text-align:center">3000</td>
<td style="text-align:center">Node port. Default is 3000</td>
</tr>
<tr>
<td style="text-align:center">VSF_HOST</td>
<td style="text-align:center">0.0.0.0</td>
<td style="text-align:center">Node host. Default is 0.0.0.0</td>
</tr>
<tr>
<td style="text-align:center">REDIS_ENABLED</td>
<td style="text-align:center">false</td>
<td style="text-align:center">Enable or disable redis cache. Default is false</td>
</tr>
<tr>
<td style="text-align:center">REDIS_HOST</td>
<td style="text-align:center">127.0.0.1</td>
<td style="text-align:center">Redis host. Default is localhost for dev</td>
</tr>
<tr>
<td style="text-align:center">REDIS_PORT</td>
<td style="text-align:center">6379</td>
<td style="text-align:center">Redis port. Default is 6379 in dev configuration</td>
</tr>
<tr>
<td style="text-align:center">REDIS_PASSWORD</td>
<td style="text-align:center">pass</td>
<td style="text-align:center">Redis password. Empty is default.</td>
</tr>
<tr>
<td style="text-align:center">REDIS_INVALIDATION_KEY</td>
<td style="text-align:center">123</td>
<td style="text-align:center">Used for invalidating cache</td>
</tr>
<tr>
<td style="text-align:center">GOOGLE_TAG_MANAGER_ID</td>
<td style="text-align:center">google_container_id</td>
<td style="text-align:center">This allows you to easily add tracking tags such as Google Analytics</td>
</tr>
</tbody>
</table>
<h2 id="vuestoryfront-docker-under-construction" tabindex="-1"><a class="header-anchor" href="#vuestoryfront-docker-under-construction" aria-hidden="true">#</a> Vuestoryfront Docker (under construction)</h2>
<table>
<thead>
<tr>
<th style="text-align:center">Env</th>
<th style="text-align:center">Value</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">VSF_NODE_ENV</td>
<td style="text-align:center">production</td>
<td style="text-align:center">Node enviroment.  Docker builds the project in production env</td>
</tr>
<tr>
<td style="text-align:center">NODE_LOCALE</td>
<td style="text-align:center">en-EN</td>
<td style="text-align:center">Node locale. Default is en-EN</td>
</tr>
<tr>
<td style="text-align:center">ODOO_BACKEND_BASE_URL</td>
<td style="text-align:center"><a href="http://odoo:8069/" target="_blank" rel="noopener noreferrer">http://odoo:8069/<ExternalLinkIcon/></a></td>
<td style="text-align:center">Odoo local server</td>
</tr>
<tr>
<td style="text-align:center">VSF_SITE_URL</td>
<td style="text-align:center"><a href="http://localhost:3000/com" target="_blank" rel="noopener noreferrer">http://localhost:3000/com<ExternalLinkIcon/></a></td>
<td style="text-align:center">Public path should be defined on production for CDN access</td>
</tr>
<tr>
<td style="text-align:center">REDIS_INVALIDATION_KEY</td>
<td style="text-align:center">123</td>
<td style="text-align:center">Used for invalidating cache</td>
</tr>
<tr>
<td style="text-align:center">REDIS_ENABLED</td>
<td style="text-align:center">true</td>
<td style="text-align:center">Enable or disable redis cache. Default is true</td>
</tr>
<tr>
<td style="text-align:center">REDIS_HOST</td>
<td style="text-align:center">redis</td>
<td style="text-align:center">Redis host. Default is redis for dev</td>
</tr>
<tr>
<td style="text-align:center">REDIS_PORT</td>
<td style="text-align:center">6379</td>
<td style="text-align:center">Redis port. Default is 6379 in dev configuration</td>
</tr>
<tr>
<td style="text-align:center">ODOO_VERSION</td>
<td style="text-align:center">&quot;16.0&quot;</td>
<td style="text-align:center">Redis password. Empty is default.</td>
</tr>
<tr>
<td style="text-align:center">ODOO_POSTGRES_HOST</td>
<td style="text-align:center">db</td>
<td style="text-align:center">The database host</td>
</tr>
<tr>
<td style="text-align:center">ODOO_POSTGRES_DB</td>
<td style="text-align:center">v16_odoo</td>
<td style="text-align:center">Database name</td>
</tr>
<tr>
<td style="text-align:center">ODOO_POSTGRES_USER</td>
<td style="text-align:center">odoo</td>
<td style="text-align:center">Db user</td>
</tr>
<tr>
<td style="text-align:center">ODOO_POSTGRES_PORT</td>
<td style="text-align:center">5432</td>
<td style="text-align:center">DB port</td>
</tr>
<tr>
<td style="text-align:center">ODOO_POSTGRES_PASSWORD</td>
<td style="text-align:center">odoo</td>
<td style="text-align:center">Db password</td>
</tr>
</tbody>
</table>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>You can choose to use the .env file or the enviroment variables directly useing <strong>export</strong> command.</p>
</div>
<h1 id="image-handle" tabindex="-1"><a class="header-anchor" href="#image-handle" aria-hidden="true">#</a> Image Handle</h1>
<p>Always use the <strong>getImage</strong> method!</p>
<p><strong>Why ?</strong></p>
<p>This fetches from the correct baseURL (CDN for production / odoo others) and its already injected in vue.</p>
<p><strong>How?</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token comment">// from template</span>
   <span class="token function">$image</span><span class="token punctuation">(</span>productGetters<span class="token punctuation">.</span><span class="token function">getCoverImage</span><span class="token punctuation">(</span>product<span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token function">$image</span><span class="token punctuation">(</span> image url <span class="token punctuation">)</span>

   <span class="token comment">// from setup</span>
   <span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> root<span class="token punctuation">.</span><span class="token function">$image</span><span class="token punctuation">(</span>img<span class="token punctuation">.</span>small<span class="token punctuation">)</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="assets" tabindex="-1"><a class="header-anchor" href="#assets" aria-hidden="true">#</a> Assets</h1>
<p>The assets folder on build stagging / prod will be sent to CDN with some hash.</p>
<p>To nuxt compile the assets links with the rigth use require.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token operator">:</span>placeholder<span class="token operator">=</span><span class="token string">"require('~/assets/images/product/product_placeholder.png')"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="routes" tabindex="-1"><a class="header-anchor" href="#routes" aria-hidden="true">#</a> Routes</h1>
<p>Automaticaly the connector will create the routes for the products and categories.<br>
All the routes will be created on the <strong>customRoutes</strong> folder. Odoo back end provides a slug for the products and categories, so the front end can use that to create the routes.</p>
<p>The commands <strong>update:routes</strong> and <strong>update:redirects</strong> will be used to create three files inside customRoutes folder. The first one creates <strong>products.json</strong> and <strong>categories.json</strong>. The second one creates <strong>redirects.json</strong>.<br>
These are optional scripts to be loaded manually, because the connector will create the routes automatically while build. For example <strong>yarn dev</strong> automatically creates the routes, so you don't need to run the commands.</p>
<p>The connector will take the <strong>website_slug</strong> calculated field for the product data and will add that to a customRoutes/products.json file that should be included on the build. This mechanism is also used for categories slug and redirects. For this purpose you will find the commands: &quot;update:routes&quot; and &quot;update:redirects&quot;.</p>
<div class="hint-container warning">
<p class="hint-container-title">Note</p>
<p>You must use <strong>--dontGenerateRoutes</strong> flag on build if you want to skip the customRoutes generation.</p>
</div>
</div></template>


