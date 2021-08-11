(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[483],{5943:(n,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>e});const e={key:"v-dcfb2e82",path:"/languages/javascript.html",title:"JavaScript",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Install Syntax Highlighting",slug:"install-syntax-highlighting",children:[]},{level:2,title:"Install Language Server",slug:"install-language-server",children:[]},{level:2,title:"Formatters",slug:"formatters",children:[]},{level:2,title:"Linters",slug:"linters",children:[]},{level:2,title:"LSP Settings",slug:"lsp-settings",children:[]},{level:2,title:"Debugger",slug:"debugger",children:[]}],filePathRelative:"languages/javascript.md",git:{updatedTime:16283468e5,contributors:[]}}},2674:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>k});var e=s(6252);const t=(0,e.uE)('<h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h1><h2 id="install-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#install-syntax-highlighting" aria-hidden="true">#</a> Install Syntax Highlighting</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>TSInstall javascript\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="install-language-server" tabindex="-1"><a class="header-anchor" href="#install-language-server" aria-hidden="true">#</a> Install Language Server</h2>',4),p=(0,e.Uk)("JavaScript uses "),l=(0,e.Uk)("TypeScript"),r=(0,e.Uk)(" language server."),i=(0,e.uE)('<h2 id="formatters" tabindex="-1"><a class="header-anchor" href="#formatters" aria-hidden="true">#</a> Formatters</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>javascript<span class="token punctuation">.</span>formatters <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span>\n    exe <span class="token operator">=</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span> <span class="token comment">-- can be prettierd eslint, or eslint_d as well</span>\n    args <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\nlvim<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>javascriptreact<span class="token punctuation">.</span>formatters <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span>\n    exe <span class="token operator">=</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span> <span class="token comment">-- can be prettierd eslint, or eslint_d as well</span>\n    args <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>The selected formatter(s) must be installed separately.</p><h2 id="linters" tabindex="-1"><a class="header-anchor" href="#linters" aria-hidden="true">#</a> Linters</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>javascript<span class="token punctuation">.</span>linters <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span>\n    exe <span class="token operator">=</span> <span class="token string">&quot;eslint&quot;</span><span class="token punctuation">,</span> <span class="token comment">-- can be eslint_d as well</span>\n    args <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> \n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\nlvim<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>javascriptreact<span class="token punctuation">.</span>linters <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span>\n    exe <span class="token operator">=</span> <span class="token string">&quot;eslint&quot;</span><span class="token punctuation">,</span> <span class="token comment">-- can be eslint_d as well</span>\n    args <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> \n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>The selected linter(s) must be installed separately.</p><h2 id="lsp-settings" tabindex="-1"><a class="header-anchor" href="#lsp-settings" aria-hidden="true">#</a> LSP Settings</h2>',7),c=(0,e.Uk)("More information in "),u=(0,e.Uk)("TypeScript"),o=(0,e.Uk)("."),d=(0,e.Wm)("h2",{id:"debugger",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#debugger","aria-hidden":"true"},"#"),(0,e.Uk)(" Debugger")],-1),g=(0,e.Wm)("p",null,"(TODO)",-1),k={render:function(n,a){const s=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,(0,e.Wm)("p",null,[p,(0,e.Wm)(s,{to:"/languages/typescript.html#install-language-server"},{default:(0,e.w5)((()=>[l])),_:1}),r]),i,(0,e.Wm)("p",null,[c,(0,e.Wm)(s,{to:"/languages/typescript.html#lsp-settings"},{default:(0,e.w5)((()=>[u])),_:1}),o]),d,g],64)}}}}]);