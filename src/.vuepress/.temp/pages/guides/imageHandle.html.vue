<template><div><h1 id="image-handle" tabindex="-1"><a class="header-anchor" href="#image-handle" aria-hidden="true">#</a> Image handle</h1>
<p>Always use the <strong>getImage</strong> method!</p>
<h3 id="why" tabindex="-1"><a class="header-anchor" href="#why" aria-hidden="true">#</a> Why ?</h3>
<ul>
<li>He is build to fetch from correct baseURL (CDN for production / odoo others)</li>
<li>He is already injected in vue</li>
</ul>
<h3 id="how" tabindex="-1"><a class="header-anchor" href="#how" aria-hidden="true">#</a> How ?</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>   <span class="token comment">// from template</span>
   <span class="token function">$image</span><span class="token punctuation">(</span>productGetters<span class="token punctuation">.</span><span class="token function">getCoverImage</span><span class="token punctuation">(</span>product<span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token function">$image</span><span class="token punctuation">(</span> <span class="token operator">&lt;</span>image url<span class="token operator">></span> <span class="token punctuation">)</span>

   <span class="token comment">// from setup</span>
   <span class="token punctuation">{</span> url<span class="token operator">:</span> root<span class="token punctuation">.</span><span class="token function">$image</span><span class="token punctuation">(</span>img<span class="token punctuation">.</span>small<span class="token punctuation">)</span> <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example 1</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SfCollectedProduct</span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>product in products<span class="token punctuation">"</span></span>
    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wishlistGetters.getItemSku(product)<span class="token punctuation">"</span></span>
    <span class="token attr-name">:image</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$image(wishlistGetters.getItemImage(product))<span class="token punctuation">"</span></span>
    <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wishlistGetters.getItemName(product)<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> Example 2</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SfImage</span>
    <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$image(icon.image)<span class="token punctuation">"</span></span>
    <span class="token attr-name">:alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon.name || 'icon-image'<span class="token punctuation">"</span></span>
    <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>57<span class="token punctuation">"</span></span>
    <span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>25<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


