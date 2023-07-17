<template><div><h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1>
<h1 id="what-is-it-about" tabindex="-1"><a class="header-anchor" href="#what-is-it-about" aria-hidden="true">#</a> What is it about?</h1>
<p>We need to make clear that this hole documentation is about front end, not about back end. It's about VSF + ODOO integration. So, take a look in following explanations.</p>
<h2 id="projects" tabindex="-1"><a class="header-anchor" href="#projects" aria-hidden="true">#</a> Projects</h2>
<p>We have 3 main projects to keep everyting working.</p>
<ul>
<li>
<p><strong>VSF-ODOO</strong> is the project that keeps composable logic, the API connections to ODOO world and a git submodule pointer to template-odoo repository.</p>
</li>
<li>
<p><strong>VSF-TEMPLATE-ODOO</strong> is the project to start a new vsf-odoo project. It's our main theme.</p>
</li>
<li>
<p><strong>VSF-ODOO-DEMOS</strong> is the project that keeps some demonstrations and different themes.</p>
</li>
</ul>
<div align="center">
  <img :src="$withBase('/assets/submodule.png')" alt="create_new_project" />
</div>
<p>When we start a new project from <strong>template odoo</strong>, the npm package with odoo composables and apis will be injected.</p>
<div align="center">
  <img :src="$withBase('/assets/create_new_project.png')" alt="create_new_project" />
</div>
</div></template>


