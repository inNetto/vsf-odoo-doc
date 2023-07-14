<template><div><h1 id="useuser-composable" tabindex="-1"><a class="header-anchor" href="#useuser-composable" aria-hidden="true">#</a> UseUser Composable</h1>
<p><strong>UseUser</strong> composable can be used to:</p>
<ul>
<li>Load current user</li>
<li>LogOut current user</li>
<li>LogIn current user</li>
<li>Register an user</li>
</ul>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">AgnosticUser</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  email<span class="token operator">:</span> <span class="token builtin">string</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  password<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  is_admin<span class="token operator">:</span> <span class="token builtin">boolean</span>
  uid<span class="token operator">:</span> <span class="token builtin">number</span>
  username<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useUser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/odoo'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onSSR <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> register<span class="token punctuation">,</span> login<span class="token punctuation">,</span> loading<span class="token punctuation">,</span> logout<span class="token punctuation">,</span> error<span class="token operator">:</span> errorUser<span class="token punctuation">,</span> user <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">onSSR</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      error<span class="token punctuation">,</span>
      login<span class="token punctuation">,</span>
      register<span class="token punctuation">,</span>
      user<span class="token punctuation">,</span>
      logout
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


