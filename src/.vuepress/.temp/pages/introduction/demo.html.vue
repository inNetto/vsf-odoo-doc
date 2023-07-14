<template><div><h1 id="demonstration" tabindex="-1"><a class="header-anchor" href="#demonstration" aria-hidden="true">#</a> Demonstration</h1>
<h1 id="what-is-it-about" tabindex="-1"><a class="header-anchor" href="#what-is-it-about" aria-hidden="true">#</a> What is it about?</h1>
<p>This documentation is about Odoo integration with Vue Storefront 2. This integration is being developed and maintained by ODOOGAP / PROMPTEQUATION ❤️</p>
<p>Before anything, you should take a look in our live demo: <a href="https://vsf.labs.odoogap.com/" target="_blank" rel="noopener noreferrer">https://vsf.labs.odoogap.com/<ExternalLinkIcon/></a> <em>it's a dev server so could be down sometimes</em></p>
<h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1>
<p>First of all we should understand what's inside the docker-compose file. We have 4 services:</p>
<ul>
<li>
<p><strong>Redis</strong>: Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker. It's used by VSF to store the cache.</p>
</li>
<li>
<p><strong>db</strong>: PostgreSQL database used by Odoo.</p>
</li>
<li>
<p><strong>odoo</strong>: Odoo service. This is our backend service that you could use to manage your products, orders, etc.</p>
</li>
<li>
<p><strong>vsf</strong>: Here is our front end integrated to Vue Storefront.</p>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">--build</span> <span class="token parameter variable">-d</span>
<span class="token comment"># You might want to check what happens under the hood</span>
<span class="token function">docker-compose</span> logs <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you use Docker Desktop and some .sh files are executed during instalation, we recommend you to read Docker Desktop Documentation to configure wsl  (<a href="https://docs.docker.com/docker-for-windows/wsl/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/docker-for-windows/wsl/<ExternalLinkIcon/></a>).</p>
<h1 id="after-installation" tabindex="-1"><a class="header-anchor" href="#after-installation" aria-hidden="true">#</a> After installation</h1>
<p>Now just open <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000<ExternalLinkIcon/></a> for VSF and <a href="http://localhost:8069" target="_blank" rel="noopener noreferrer">http://localhost:8069<ExternalLinkIcon/></a> for Odoo (credentials admin/admin)</p>
<div class="hint-container warning">
<p class="hint-container-title">Note</p>
<p>You might not see the top categories (MEN/WOMEN) until the Odoo server is initialized (database init takes time to install all modules)</p>
</div>
</div></template>


