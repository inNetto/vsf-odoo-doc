<template><div><h1 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick Start</h1>
<p><em>In this section you will find everything you need to build our entire environment to do a deeper test on VSF + ODOO and make sure if our integration is what you has been looking for. We hope it is 😇</em></p>
<h1 id="before-you-start" tabindex="-1"><a class="header-anchor" href="#before-you-start" aria-hidden="true">#</a> Before you start</h1>
<p>Pre-requisites: Docker, Node.js (&gt;=14.19.0), npm or similar and Git.</p>
<p>Last odoo <strong>version</strong> released: Clone the repo from (<a href="https://github.com/odoogap/vuestorefront-docker" target="_blank" rel="noopener noreferrer">https://github.com/odoogap/vuestorefront-docker<ExternalLinkIcon/></a>)</p>
<p>Its really convenient to test all the ecosystem Vuestorefront - Odoo Integration working in your local machine. We have prepared a docker-compose file that will help you to get started in a few minutes.</p>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h2>
<h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1>
<p>First of all we should understand what's inside the docker-compose file. We have 4 services:<br>
<em>🎯 You can go deeper <RouterLink to="/enviroment/configuration/docker-compose.html">in this session</RouterLink>.</em></p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🎯 <em>If you use Docker Desktop on Windows, some .sh files are executed during instalation, so we recommend you to read Docker Desktop Documentation (<a href="https://docs.docker.com/docker-for-windows/wsl/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/docker-for-windows/wsl/<ExternalLinkIcon/></a>)</em>.</p>
<h1 id="after-installation" tabindex="-1"><a class="header-anchor" href="#after-installation" aria-hidden="true">#</a> After installation</h1>
<p>Now just open <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000<ExternalLinkIcon/></a> for VSF and <a href="http://localhost:8069" target="_blank" rel="noopener noreferrer">http://localhost:8069<ExternalLinkIcon/></a> for local Odoo (credentials admin/admin)</p>
<div class="hint-container warning">
<p class="hint-container-title">Note</p>
<p>You might not see the top categories (MEN/WOMEN) until the Odoo server is initialized (database init takes time to install all modules)</p>
</div>
<h1 id="tips" tabindex="-1"><a class="header-anchor" href="#tips" aria-hidden="true">#</a> Tips</h1>
<p><strong>How to stop the services?</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker-compose</span> stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>How to clear Odoo database?</strong></p>
<p>Running this command below it will stop all docker services and clears the Odoo local database.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker-compose</span> down <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Handle caching with Redis</strong></p>
<p>The <code v-pre>REDIS_ENABLED=true</code> into .env file ensure that Redis is enabled to be used. It is used to cache all odoo datas that has been accessed by the browser. Running this command below it will clear the Redis database.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> redis redis-cli
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> flushall
OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="video-tutorial" tabindex="-1"><a class="header-anchor" href="#video-tutorial" aria-hidden="true">#</a> Video tutorial</h1>
<p>Now you can watch and follow the steps in this video tutorial. Take your time 👍</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/fN5EoFZnU8Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div></template>


