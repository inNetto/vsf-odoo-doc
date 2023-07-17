<template><div><h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1>
<h1 id="what-is-it-about" tabindex="-1"><a class="header-anchor" href="#what-is-it-about" aria-hidden="true">#</a> What is it about?</h1>
<p>Here you can find extra informations that can be useful to configure your integration.</p>
<h1 id="routes" tabindex="-1"><a class="header-anchor" href="#routes" aria-hidden="true">#</a> Routes</h1>
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


