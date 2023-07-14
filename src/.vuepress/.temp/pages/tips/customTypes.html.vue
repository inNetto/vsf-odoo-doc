<template><div><h1 id="custom-types" tabindex="-1"><a class="header-anchor" href="#custom-types" aria-hidden="true">#</a> Custom types</h1>
<p>If the project need a custom type, try to extend the base type.</p>
<div class="hint-container tip">
<p class="hint-container-title">Odoo Convetion</p>
<p>projectName + type - camelCase</p>
</div>
<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Product<span class="token punctuation">,</span> Category <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/odoo-api'</span><span class="token punctuation">;</span>

<span class="token comment">// Project name = BlueBrothers</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">BlueBrothersProduct</span> <span class="token keyword">extends</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
    strangeLabel<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    acessories<span class="token operator">?</span><span class="token operator">:</span> Accessory<span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">BlueBrothersCategory</span> <span class="token keyword">extends</span> <span class="token class-name">Category</span> <span class="token punctuation">{</span>
    subCategory<span class="token operator">?</span><span class="token operator">:</span> BlueBrothersCategory
    <span class="token operator">...</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


