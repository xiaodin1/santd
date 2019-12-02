(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{605:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/san/dist/san.spa.min.js\nvar san_spa_min = __webpack_require__(0);\nvar san_spa_min_default = /*#__PURE__*/__webpack_require__.n(san_spa_min);\n\n// CONCATENATED MODULE: ./src/anchor/README.md\n/* harmony default export */ var README = ({\n  template: `<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><h3 id="anchor-props"><span>Anchor props</span><a href="#anchor-props" class="anchor">#</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>affix</td><td>固定模式</td><td>boolean</td><td>true</td></tr><tr><td>bounds</td><td>锚点区域边界</td><td>number</td><td>5(px)</td></tr><tr><td>getContainer</td><td>指定滚动的容器</td><td>() =&gt; HTMLElement</td><td>() =&gt; window</td></tr><tr><td>offsetBottom</td><td>距离窗口底部达到指定偏移量后触发</td><td>number</td><td></td></tr><tr><td>offsetTop</td><td>距离窗口顶部达到指定偏移量后触发</td><td>number</td><td></td></tr><tr><td>showInkInFixed</td><td>固定模式是否显示小圆点</td><td>boolean</td><td>false</td></tr><tr><td>on-click</td><td><code>click</code> 事件的 handler</td><td>Function(e: Event, link: Object)</td><td></td></tr></tbody></table><h3 id="link-props"><span>Link props</span><a href="#link-props" class="anchor">#</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>href</td><td>锚点链接</td><td>string</td><td></td></tr><tr><td>title</td><td>文字内容</td><td>string</td><td></td></tr></tbody></table></section>`\n});\n    if(false){ var moduleDefault, id, hotApi; }\n    \n// CONCATENATED MODULE: ./src/anchor/docs/head.md\n/* harmony default export */ var head = ({\n  template: `<section class="markdown"><h1 id="anchor-锚点"><span>Anchor 锚点</span><a href="#anchor-锚点" class="anchor">#</a></h1><p>用于跳转到页面指定位置。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>`\n});\n    if(false){ var head_moduleDefault, head_id, head_hotApi; }\n    \n// EXTERNAL MODULE: ./src/anchor/index.js + 3 modules\nvar src_anchor = __webpack_require__(130);\n\n// CONCATENATED MODULE: ./node_modules/hulk-san-loader!./node_modules/hulk-markdown-loader/utils/pickFence.js?url=/Users/mayihui/code/santd/src/anchor/docs/basic.md!./node_modules/hulk-markdown-loader/utils/_fakemd?mdurl=/Users/mayihui/code/santd/src/anchor/docs/basic.md&_t=1575257673653\n\n/* harmony default export */ var basic_md_t_1575257673653 = ({\n  components: {\n    \'s-anchor\': src_anchor["a" /* default */],\n    \'s-link\': src_anchor["a" /* default */].Link\n  },\n  template: `<div id="components-anchor-demo-basic"><s-anchor><s-link href="#components-anchor-demo-basic" title="Basic Demo"></s-link><s-link href="#components-anchor-demo-static" title="Static Demo"></s-link><s-link href="#api" title="API"><s-link href="#anchor-props" title="Anchor Props"></s-link><s-link href="#link-props" title="Link Props"></s-link></s-link></s-anchor></div>`\n});\n// CONCATENATED MODULE: ./src/anchor/docs/basic.md\n\n/* harmony default export */ var basic = ({\n  initData() {\n    return {\n      isExpand: false,\n      code: `\n<pre><code class="language-html">&lt;template>\n    &lt;div id="components-anchor-demo-basic">\n        &lt;s-anchor>\n            &lt;s-link href="#components-anchor-demo-basic" title="Basic Demo" />\n            &lt;s-link href="#components-anchor-demo-static" title="Static Demo" />\n            &lt;s-link href="#api" title="API">\n                &lt;s-link href="#anchor-props" title="Anchor Props" />\n                &lt;s-link href="#link-props" title="Link Props" />\n            &lt;/s-link>\n        &lt;/s-anchor>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Anchor from \'santd/anchor\';\n\nexport default {\n    components: {\n        \'s-anchor\': Anchor,\n        \'s-link\': Anchor.Link\n    }\n}\n&lt;/script></code></pre>`,\n      text: `\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>最简单的用法</p>`\n    };\n  },\n\n  toggleExpand() {\n    this.data.set(\'isExpand\', !this.data.get(\'isExpand\'));\n  },\n\n  components: {\n    \'code-preview\': basic_md_t_1575257673653\n  },\n  template: `<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1575257673653"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>`\n});\n    if(false){ var basic_moduleDefault, basic_id, basic_hotApi; }\n    \n// CONCATENATED MODULE: ./node_modules/hulk-san-loader!./node_modules/hulk-markdown-loader/utils/pickFence.js?url=/Users/mayihui/code/santd/src/anchor/docs/static.md!./node_modules/hulk-markdown-loader/utils/_fakemd?mdurl=/Users/mayihui/code/santd/src/anchor/docs/static.md&_t=1575257673647\n\n/* harmony default export */ var static_md_t_1575257673647 = ({\n  components: {\n    \'s-anchor\': src_anchor["a" /* default */],\n    \'s-link\': src_anchor["a" /* default */].Link\n  },\n  template: `<div id="components-anchor-demo-static"><s-anchor affix="{{false}}"><s-link href="#components-anchor-demo-basic" title="Basic Demo"></s-link><s-link href="#components-anchor-demo-static" title="Static Demo"></s-link><s-link href="#api" title="API"><s-link href="#anchor-props" title="Anchor Props"></s-link><s-link href="#link-props" title="Link Props"></s-link></s-link></s-anchor></div>`\n});\n// CONCATENATED MODULE: ./src/anchor/docs/static.md\n\n/* harmony default export */ var docs_static = ({\n  initData() {\n    return {\n      isExpand: false,\n      code: `\n<pre><code class="language-html">&lt;template>\n    &lt;div id="components-anchor-demo-static">\n        &lt;s-anchor affix="{{false}}">\n            &lt;s-link href="#components-anchor-demo-basic" title="Basic Demo" />\n            &lt;s-link href="#components-anchor-demo-static" title="Static Demo" />\n            &lt;s-link href="#api" title="API">\n                &lt;s-link href="#anchor-props" title="Anchor Props" />\n                &lt;s-link href="#link-props" title="Link Props" />\n            &lt;/s-link>\n        &lt;/s-anchor>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Anchor from \'santd/anchor\';\n\nexport default {\n    components: {\n        \'s-anchor\': Anchor,\n        \'s-link\': Anchor.Link\n    }\n}\n&lt;/script></code></pre>`,\n      text: `\n<h4 id="静态位置"><span>静态位置</span><a href="#静态位置" class="anchor">#</a></h4><p>不浮动，状态不随页面滚动变化</p>`\n    };\n  },\n\n  toggleExpand() {\n    this.data.set(\'isExpand\', !this.data.get(\'isExpand\'));\n  },\n\n  components: {\n    \'code-preview\': static_md_t_1575257673647\n  },\n  template: `<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1575257673647"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>`\n});\n    if(false){ var static_moduleDefault, static_id, static_hotApi; }\n    \n// CONCATENATED MODULE: ./node_modules/hulk-san-loader!./node_modules/hulk-markdown-loader/utils/pickFence.js?url=/Users/mayihui/code/santd/src/anchor/docs/click.md!./node_modules/hulk-markdown-loader/utils/_fakemd?mdurl=/Users/mayihui/code/santd/src/anchor/docs/click.md&_t=1575257673637\n\n/* harmony default export */ var click_md_t_1575257673637 = ({\n  components: {\n    \'s-anchor\': src_anchor["a" /* default */],\n    \'s-link\': src_anchor["a" /* default */].Link\n  },\n\n  handleClick({\n    e,\n    link\n  }) {\n    e.preventDefault();\n    console.log(link);\n  },\n\n  template: `<div><s-anchor affix="{{false}}" on-click="handleClick"><s-link href="#components-anchor-demo-basic" title="Basic Demo"></s-link><s-link href="#components-anchor-demo-static" title="Static Demo"></s-link><s-link href="#api" title="API"><s-link href="#anchor-props" title="Anchor Props"></s-link><s-link href="#link-props" title="Link Props"></s-link></s-link></s-anchor></div>`\n});\n// CONCATENATED MODULE: ./src/anchor/docs/click.md\n\n/* harmony default export */ var click = ({\n  initData() {\n    return {\n      isExpand: false,\n      code: `\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-anchor affix="{{false}}" on-click="handleClick">\n            &lt;s-link href="#components-anchor-demo-basic" title="Basic Demo" />\n            &lt;s-link href="#components-anchor-demo-static" title="Static Demo" />\n            &lt;s-link href="#api" title="API">\n                &lt;s-link href="#anchor-props" title="Anchor Props" />\n                &lt;s-link href="#link-props" title="Link Props" />\n            &lt;/s-link>\n        &lt;/s-anchor>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Anchor from \'santd/anchor\';\n\nexport default {\n    components: {\n        \'s-anchor\': Anchor,\n        \'s-link\': Anchor.Link\n    },\n    handleClick({e, link}) {\n        e.preventDefault();\n        console.log(link);\n    }\n}\n&lt;/script></code></pre>`,\n      text: `\n<h4 id="自定义on-click事件"><span>自定义on-Click事件</span><a href="#自定义on-click事件" class="anchor">#</a></h4><p>点击锚点不记录历史。</p>`\n    };\n  },\n\n  toggleExpand() {\n    this.data.set(\'isExpand\', !this.data.get(\'isExpand\'));\n  },\n\n  components: {\n    \'code-preview\': click_md_t_1575257673637\n  },\n  template: `<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1575257673637"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>`\n});\n    if(false){ var click_moduleDefault, click_id, click_hotApi; }\n    \n// CONCATENATED MODULE: ./src/anchor/docs/index.js\n/**\n * @file Santd anchor docs file\n **/\n\n\n\n\n\n\n/* harmony default export */ var docs = __webpack_exports__["default"] = (san_spa_min_default.a.defineComponent({\n  components: {\n    readme: README,\n    head: head,\n    basic: basic,\n    "static": docs_static,\n    click: click\n  },\n  template: "\\n        <div>\\n            <head/>\\n            <basic/>\\n            <static/>\\n            <click/>\\n            <readme/>\\n        </div>\\n    "\n}));\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjA1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FuY2hvci9SRUFETUUubWQ/MDUwMSIsIndlYnBhY2s6Ly8vLi9zcmMvYW5jaG9yL2RvY3MvaGVhZC5tZD8zMDVjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odWxrLW1hcmtkb3duLWxvYWRlci91dGlscy9fZmFrZW1kP2YzZjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuY2hvci9kb2NzL2Jhc2ljLm1kPzk4MGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h1bGstbWFya2Rvd24tbG9hZGVyL3V0aWxzL19mYWtlbWQ/MGZkOCIsIndlYnBhY2s6Ly8vLi9zcmMvYW5jaG9yL2RvY3Mvc3RhdGljLm1kP2U3YjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h1bGstbWFya2Rvd24tbG9hZGVyL3V0aWxzL19mYWtlbWQ/MWFjYyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5jaG9yL2RvY3MvY2xpY2subWQ/NDdlMiIsIndlYnBhY2s6Ly8vLi9zcmMvYW5jaG9yL2RvY3MvaW5kZXguanM/MjMyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIHRlbXBsYXRlOiBgPHNlY3Rpb24gY2xhc3M9XCJtYXJrZG93blwiPjxoMiBpZD1cImFwaVwiPjxzcGFuPkFQSTwvc3Bhbj48YSBocmVmPVwiI2FwaVwiIGNsYXNzPVwiYW5jaG9yXCI+IzwvYT48L2gyPjxoMyBpZD1cImFuY2hvci1wcm9wc1wiPjxzcGFuPkFuY2hvciBwcm9wczwvc3Bhbj48YSBocmVmPVwiI2FuY2hvci1wcm9wc1wiIGNsYXNzPVwiYW5jaG9yXCI+IzwvYT48L2gzPjx0YWJsZT48dGhlYWQ+PHRyPjx0aD7lj4LmlbA8L3RoPjx0aD7or7TmmI48L3RoPjx0aD7nsbvlnos8L3RoPjx0aD7pu5jorqTlgLw8L3RoPjwvdHI+PC90aGVhZD48dGJvZHk+PHRyPjx0ZD5hZmZpeDwvdGQ+PHRkPuWbuuWumuaooeW8jzwvdGQ+PHRkPmJvb2xlYW48L3RkPjx0ZD50cnVlPC90ZD48L3RyPjx0cj48dGQ+Ym91bmRzPC90ZD48dGQ+6ZSa54K55Yy65Z+f6L6555WMPC90ZD48dGQ+bnVtYmVyPC90ZD48dGQ+NShweCk8L3RkPjwvdHI+PHRyPjx0ZD5nZXRDb250YWluZXI8L3RkPjx0ZD7mjIflrprmu5rliqjnmoTlrrnlmag8L3RkPjx0ZD4oKSA9Jmd0OyBIVE1MRWxlbWVudDwvdGQ+PHRkPigpID0mZ3Q7IHdpbmRvdzwvdGQ+PC90cj48dHI+PHRkPm9mZnNldEJvdHRvbTwvdGQ+PHRkPui3neemu+eql+WPo+W6lemDqOi+vuWIsOaMh+WumuWBj+enu+mHj+WQjuinpuWPkTwvdGQ+PHRkPm51bWJlcjwvdGQ+PHRkPjwvdGQ+PC90cj48dHI+PHRkPm9mZnNldFRvcDwvdGQ+PHRkPui3neemu+eql+WPo+mhtumDqOi+vuWIsOaMh+WumuWBj+enu+mHj+WQjuinpuWPkTwvdGQ+PHRkPm51bWJlcjwvdGQ+PHRkPjwvdGQ+PC90cj48dHI+PHRkPnNob3dJbmtJbkZpeGVkPC90ZD48dGQ+5Zu65a6a5qih5byP5piv5ZCm5pi+56S65bCP5ZyG54K5PC90ZD48dGQ+Ym9vbGVhbjwvdGQ+PHRkPmZhbHNlPC90ZD48L3RyPjx0cj48dGQ+b24tY2xpY2s8L3RkPjx0ZD48Y29kZT5jbGljazwvY29kZT4g5LqL5Lu255qEIGhhbmRsZXI8L3RkPjx0ZD5GdW5jdGlvbihlOiBFdmVudCwgbGluazogT2JqZWN0KTwvdGQ+PHRkPjwvdGQ+PC90cj48L3Rib2R5PjwvdGFibGU+PGgzIGlkPVwibGluay1wcm9wc1wiPjxzcGFuPkxpbmsgcHJvcHM8L3NwYW4+PGEgaHJlZj1cIiNsaW5rLXByb3BzXCIgY2xhc3M9XCJhbmNob3JcIj4jPC9hPjwvaDM+PHRhYmxlPjx0aGVhZD48dHI+PHRoPuWPguaVsDwvdGg+PHRoPuivtOaYjjwvdGg+PHRoPuexu+WeizwvdGg+PHRoPum7mOiupOWAvDwvdGg+PC90cj48L3RoZWFkPjx0Ym9keT48dHI+PHRkPmhyZWY8L3RkPjx0ZD7plJrngrnpk77mjqU8L3RkPjx0ZD5zdHJpbmc8L3RkPjx0ZD48L3RkPjwvdHI+PHRyPjx0ZD50aXRsZTwvdGQ+PHRkPuaWh+Wtl+WGheWuuTwvdGQ+PHRkPnN0cmluZzwvdGQ+PHRkPjwvdGQ+PC90cj48L3Rib2R5PjwvdGFibGU+PC9zZWN0aW9uPmBcbn07XG4gICAgaWYobW9kdWxlLmhvdCl7XG4gICAgICAgIHZhciBob3RBcGkgPSByZXF1aXJlKCdzYW4taG90LXJlbG9hZC1hcGknKVxuXG4gICAgICAgIGhvdEFwaS5pbnN0YWxsKHJlcXVpcmUoJ3NhbicpLCBmYWxzZSlcbiAgICAgICAgaWYoIWhvdEFwaS5jb21wYXRpYmxlKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc2FuLWhvdC1yZWxvYWQtYXBpIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIHZlcnNpb24gb2YgVnVlIHlvdSBhcmUgdXNpbmcuJylcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgICAgIHZhciBpZCA9ICdzcmMvYW5jaG9yL1JFQURNRS5tZCdcbiAgICAgICAgdmFyIG1vZHVsZURlZmF1bHQgPSBtb2R1bGUuZXhwb3J0cyA/IG1vZHVsZS5leHBvcnRzLmRlZmF1bHQgOiBtb2R1bGUuX19wcm90b19fLmV4cG9ydHMuZGVmYXVsdFxuICAgICAgICBpZighbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICAgICAgICBob3RBcGkuY3JlYXRlUmVjb3JkKGlkLCBtb2R1bGVEZWZhdWx0KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGhvdEFwaS5yZWxvYWQoaWQsIG1vZHVsZURlZmF1bHQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgIiwiZXhwb3J0IGRlZmF1bHQge1xuICB0ZW1wbGF0ZTogYDxzZWN0aW9uIGNsYXNzPVwibWFya2Rvd25cIj48aDEgaWQ9XCJhbmNob3It6ZSa54K5XCI+PHNwYW4+QW5jaG9yIOmUmueCuTwvc3Bhbj48YSBocmVmPVwiI2FuY2hvci3plJrngrlcIiBjbGFzcz1cImFuY2hvclwiPiM8L2E+PC9oMT48cD7nlKjkuo7ot7PovazliLDpobXpnaLmjIflrprkvY3nva7jgII8L3A+PGgyIGlkPVwi5L2V5pe25L2/55SoXCI+PHNwYW4+5L2V5pe25L2/55SoPC9zcGFuPjxhIGhyZWY9XCIj5L2V5pe25L2/55SoXCIgY2xhc3M9XCJhbmNob3JcIj4jPC9hPjwvaDI+PHA+6ZyA6KaB5bGV546w5b2T5YmN6aG16Z2i5LiK5Y+v5L6b6Lez6L2s55qE6ZSa54K56ZO+5o6l77yM5Lul5Y+K5b+r6YCf5Zyo6ZSa54K55LmL6Ze06Lez6L2s44CCPC9wPjxoMiBpZD1cIuS7o+eggea8lOekulwiPjxzcGFuPuS7o+eggea8lOekujwvc3Bhbj48YSBocmVmPVwiI+S7o+eggea8lOekulwiIGNsYXNzPVwiYW5jaG9yXCI+IzwvYT48L2gyPjwvc2VjdGlvbj5gXG59O1xuICAgIGlmKG1vZHVsZS5ob3Qpe1xuICAgICAgICB2YXIgaG90QXBpID0gcmVxdWlyZSgnc2FuLWhvdC1yZWxvYWQtYXBpJylcblxuICAgICAgICBob3RBcGkuaW5zdGFsbChyZXF1aXJlKCdzYW4nKSwgZmFsc2UpXG4gICAgICAgIGlmKCFob3RBcGkuY29tcGF0aWJsZSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Nhbi1ob3QtcmVsb2FkLWFwaSBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoZSB2ZXJzaW9uIG9mIFZ1ZSB5b3UgYXJlIHVzaW5nLicpXG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgICAgICB2YXIgaWQgPSAnc3JjL2FuY2hvci9kb2NzL2hlYWQubWQnXG4gICAgICAgIHZhciBtb2R1bGVEZWZhdWx0ID0gbW9kdWxlLmV4cG9ydHMgPyBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0IDogbW9kdWxlLl9fcHJvdG9fXy5leHBvcnRzLmRlZmF1bHRcbiAgICAgICAgaWYoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgICAgICAgaG90QXBpLmNyZWF0ZVJlY29yZChpZCwgbW9kdWxlRGVmYXVsdClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBob3RBcGkucmVsb2FkKGlkLCBtb2R1bGVEZWZhdWx0KVxuICAgICAgICB9XG4gICAgfVxuICAgICIsImltcG9ydCBBbmNob3IgZnJvbSAnc2FudGQvYW5jaG9yJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgICdzLWFuY2hvcic6IEFuY2hvcixcbiAgICAncy1saW5rJzogQW5jaG9yLkxpbmtcbiAgfSxcbiAgdGVtcGxhdGU6IGA8ZGl2IGlkPVwiY29tcG9uZW50cy1hbmNob3ItZGVtby1iYXNpY1wiPjxzLWFuY2hvcj48cy1saW5rIGhyZWY9XCIjY29tcG9uZW50cy1hbmNob3ItZGVtby1iYXNpY1wiIHRpdGxlPVwiQmFzaWMgRGVtb1wiPjwvcy1saW5rPjxzLWxpbmsgaHJlZj1cIiNjb21wb25lbnRzLWFuY2hvci1kZW1vLXN0YXRpY1wiIHRpdGxlPVwiU3RhdGljIERlbW9cIj48L3MtbGluaz48cy1saW5rIGhyZWY9XCIjYXBpXCIgdGl0bGU9XCJBUElcIj48cy1saW5rIGhyZWY9XCIjYW5jaG9yLXByb3BzXCIgdGl0bGU9XCJBbmNob3IgUHJvcHNcIj48L3MtbGluaz48cy1saW5rIGhyZWY9XCIjbGluay1wcm9wc1wiIHRpdGxlPVwiTGluayBQcm9wc1wiPjwvcy1saW5rPjwvcy1saW5rPjwvcy1hbmNob3I+PC9kaXY+YFxufTsiLCJpbXBvcnQgY29kZVByZXZpZXcgZnJvbSAnL1VzZXJzL21heWlodWkvY29kZS9zYW50ZC9ub2RlX21vZHVsZXMvaHVsay1zYW4tbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9tYXlpaHVpL2NvZGUvc2FudGQvbm9kZV9tb2R1bGVzL2h1bGstbWFya2Rvd24tbG9hZGVyL3V0aWxzL3BpY2tGZW5jZS5qcz91cmw9L1VzZXJzL21heWlodWkvY29kZS9zYW50ZC9zcmMvYW5jaG9yL2RvY3MvYmFzaWMubWQhL1VzZXJzL21heWlodWkvY29kZS9zYW50ZC9ub2RlX21vZHVsZXMvaHVsay1tYXJrZG93bi1sb2FkZXIvdXRpbHMvX2Zha2VtZD9tZHVybD0vVXNlcnMvbWF5aWh1aS9jb2RlL3NhbnRkL3NyYy9hbmNob3IvZG9jcy9iYXNpYy5tZCZfdD0xNTc1MjU3NjczNjUzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdERhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzRXhwYW5kOiBmYWxzZSxcbiAgICAgIGNvZGU6IGBcbjxwcmU+PGNvZGUgY2xhc3M9XCJsYW5ndWFnZS1odG1sXCI+Jmx0O3RlbXBsYXRlPlxuICAgICZsdDtkaXYgaWQ9XCJjb21wb25lbnRzLWFuY2hvci1kZW1vLWJhc2ljXCI+XG4gICAgICAgICZsdDtzLWFuY2hvcj5cbiAgICAgICAgICAgICZsdDtzLWxpbmsgaHJlZj1cIiNjb21wb25lbnRzLWFuY2hvci1kZW1vLWJhc2ljXCIgdGl0bGU9XCJCYXNpYyBEZW1vXCIgLz5cbiAgICAgICAgICAgICZsdDtzLWxpbmsgaHJlZj1cIiNjb21wb25lbnRzLWFuY2hvci1kZW1vLXN0YXRpY1wiIHRpdGxlPVwiU3RhdGljIERlbW9cIiAvPlxuICAgICAgICAgICAgJmx0O3MtbGluayBocmVmPVwiI2FwaVwiIHRpdGxlPVwiQVBJXCI+XG4gICAgICAgICAgICAgICAgJmx0O3MtbGluayBocmVmPVwiI2FuY2hvci1wcm9wc1wiIHRpdGxlPVwiQW5jaG9yIFByb3BzXCIgLz5cbiAgICAgICAgICAgICAgICAmbHQ7cy1saW5rIGhyZWY9XCIjbGluay1wcm9wc1wiIHRpdGxlPVwiTGluayBQcm9wc1wiIC8+XG4gICAgICAgICAgICAmbHQ7L3MtbGluaz5cbiAgICAgICAgJmx0Oy9zLWFuY2hvcj5cbiAgICAmbHQ7L2Rpdj5cbiZsdDsvdGVtcGxhdGU+XG4mbHQ7c2NyaXB0PlxuaW1wb3J0IEFuY2hvciBmcm9tICdzYW50ZC9hbmNob3InO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czoge1xuICAgICAgICAncy1hbmNob3InOiBBbmNob3IsXG4gICAgICAgICdzLWxpbmsnOiBBbmNob3IuTGlua1xuICAgIH1cbn1cbiZsdDsvc2NyaXB0PjwvY29kZT48L3ByZT5gLFxuICAgICAgdGV4dDogYFxuPGg0IGlkPVwi5Z+65pysXCI+PHNwYW4+5Z+65pysPC9zcGFuPjxhIGhyZWY9XCIj5Z+65pysXCIgY2xhc3M9XCJhbmNob3JcIj4jPC9hPjwvaDQ+PHA+5pyA566A5Y2V55qE55So5rOVPC9wPmBcbiAgICB9O1xuICB9LFxuXG4gIHRvZ2dsZUV4cGFuZCgpIHtcbiAgICB0aGlzLmRhdGEuc2V0KCdpc0V4cGFuZCcsICF0aGlzLmRhdGEuZ2V0KCdpc0V4cGFuZCcpKTtcbiAgfSxcblxuICBjb21wb25lbnRzOiB7XG4gICAgJ2NvZGUtcHJldmlldyc6IGNvZGVQcmV2aWV3XG4gIH0sXG4gIHRlbXBsYXRlOiBgPHNlY3Rpb24gY2xhc3M9XCJjb2RlLWJveCB7e2lzRXhwYW5kPydleHBhbmQnOicnfX1cIiBpZD1cImNvbXBvbmVudHMtZGVtby0xNTc1MjU3NjczNjUzXCI+PHNlY3Rpb24gY2xhc3M9XCJjb2RlLWJveC1kZW1vXCI+PGNvZGUtcHJldmlldz48L2NvZGUtcHJldmlldz48L3NlY3Rpb24+PHNlY3Rpb24gY2xhc3M9XCJjb2RlLWJveC1tZXRhIG1hcmtkb3duXCI+e3sgdGV4dCB8IHJhd319PHNwYW4gY2xhc3M9XCJjb2RlLWV4cGFuZC1pY29uXCIgb24tY2xpY2s9XCJ0b2dnbGVFeHBhbmRcIj48aW1nIGFsdD1cImV4cGFuZCBjb2RlXCIgc3JjPVwiaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL3dTQWtCdUpGYmR4c29zS0twcXlxLnN2Z1wiIGNsYXNzPVwie3tpc0V4cGFuZD8nY29kZS1leHBhbmQtaWNvbi1oaWRlJzonY29kZS1leHBhbmQtaWNvbi1zaG93J319XCI+PGltZyBhbHQ9XCJleHBhbmQgY29kZVwiIHNyYz1cImh0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9PcFJPUEhZcVdtck1EQkZNWnRLRi5zdmdcIiBjbGFzcz1cInt7aXNFeHBhbmQ/J2NvZGUtZXhwYW5kLWljb24tc2hvdyc6J2NvZGUtZXhwYW5kLWljb24taGlkZSd9fVwiPjwvc3Bhbj48L3NlY3Rpb24+PHNlY3Rpb24gY2xhc3M9XCJoaWdobGlnaHQtd3JhcHBlciB7e2lzRXhwYW5kPydoaWdobGlnaHQtd3JhcHBlci1leHBhbmQnOicnfX1cIj57eyBjb2RlIHwgcmF3fX08L3NlY3Rpb24+PC9zZWN0aW9uPmBcbn07XG4gICAgaWYobW9kdWxlLmhvdCl7XG4gICAgICAgIHZhciBob3RBcGkgPSByZXF1aXJlKCdzYW4taG90LXJlbG9hZC1hcGknKVxuXG4gICAgICAgIGhvdEFwaS5pbnN0YWxsKHJlcXVpcmUoJ3NhbicpLCBmYWxzZSlcbiAgICAgICAgaWYoIWhvdEFwaS5jb21wYXRpYmxlKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc2FuLWhvdC1yZWxvYWQtYXBpIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIHZlcnNpb24gb2YgVnVlIHlvdSBhcmUgdXNpbmcuJylcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgICAgIHZhciBpZCA9ICdzcmMvYW5jaG9yL2RvY3MvYmFzaWMubWQnXG4gICAgICAgIHZhciBtb2R1bGVEZWZhdWx0ID0gbW9kdWxlLmV4cG9ydHMgPyBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0IDogbW9kdWxlLl9fcHJvdG9fXy5leHBvcnRzLmRlZmF1bHRcbiAgICAgICAgaWYoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgICAgICAgaG90QXBpLmNyZWF0ZVJlY29yZChpZCwgbW9kdWxlRGVmYXVsdClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBob3RBcGkucmVsb2FkKGlkLCBtb2R1bGVEZWZhdWx0KVxuICAgICAgICB9XG4gICAgfVxuICAgICIsImltcG9ydCBBbmNob3IgZnJvbSAnc2FudGQvYW5jaG9yJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgICdzLWFuY2hvcic6IEFuY2hvcixcbiAgICAncy1saW5rJzogQW5jaG9yLkxpbmtcbiAgfSxcbiAgdGVtcGxhdGU6IGA8ZGl2IGlkPVwiY29tcG9uZW50cy1hbmNob3ItZGVtby1zdGF0aWNcIj48cy1hbmNob3IgYWZmaXg9XCJ7e2ZhbHNlfX1cIj48cy1saW5rIGhyZWY9XCIjY29tcG9uZW50cy1hbmNob3ItZGVtby1iYXNpY1wiIHRpdGxlPVwiQmFzaWMgRGVtb1wiPjwvcy1saW5rPjxzLWxpbmsgaHJlZj1cIiNjb21wb25lbnRzLWFuY2hvci1kZW1vLXN0YXRpY1wiIHRpdGxlPVwiU3RhdGljIERlbW9cIj48L3MtbGluaz48cy1saW5rIGhyZWY9XCIjYXBpXCIgdGl0bGU9XCJBUElcIj48cy1saW5rIGhyZWY9XCIjYW5jaG9yLXByb3BzXCIgdGl0bGU9XCJBbmNob3IgUHJvcHNcIj48L3MtbGluaz48cy1saW5rIGhyZWY9XCIjbGluay1wcm9wc1wiIHRpdGxlPVwiTGluayBQcm9wc1wiPjwvcy1saW5rPjwvcy1saW5rPjwvcy1hbmNob3I+PC9kaXY+YFxufTsiLCJpbXBvcnQgY29kZVByZXZpZXcgZnJvbSAnL1VzZXJzL21heWlodWkvY29kZS9zYW50ZC9ub2RlX21vZHVsZXMvaHVsay1zYW4tbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9tYXlpaHVpL2NvZGUvc2FudGQvbm9kZV9tb2R1bGVzL2h1bGstbWFya2Rvd24tbG9hZGVyL3V0aWxzL3BpY2tGZW5jZS5qcz91cmw9L1VzZXJzL21heWlodWkvY29kZS9zYW50ZC9zcmMvYW5jaG9yL2RvY3Mvc3RhdGljLm1kIS9Vc2Vycy9tYXlpaHVpL2NvZGUvc2FudGQvbm9kZV9tb2R1bGVzL2h1bGstbWFya2Rvd24tbG9hZGVyL3V0aWxzL19mYWtlbWQ/bWR1cmw9L1VzZXJzL21heWlodWkvY29kZS9zYW50ZC9zcmMvYW5jaG9yL2RvY3Mvc3RhdGljLm1kJl90PTE1NzUyNTc2NzM2NDcnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0RGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNFeHBhbmQ6IGZhbHNlLFxuICAgICAgY29kZTogYFxuPHByZT48Y29kZSBjbGFzcz1cImxhbmd1YWdlLWh0bWxcIj4mbHQ7dGVtcGxhdGU+XG4gICAgJmx0O2RpdiBpZD1cImNvbXBvbmVudHMtYW5jaG9yLWRlbW8tc3RhdGljXCI+XG4gICAgICAgICZsdDtzLWFuY2hvciBhZmZpeD1cInt7ZmFsc2V9fVwiPlxuICAgICAgICAgICAgJmx0O3MtbGluayBocmVmPVwiI2NvbXBvbmVudHMtYW5jaG9yLWRlbW8tYmFzaWNcIiB0aXRsZT1cIkJhc2ljIERlbW9cIiAvPlxuICAgICAgICAgICAgJmx0O3MtbGluayBocmVmPVwiI2NvbXBvbmVudHMtYW5jaG9yLWRlbW8tc3RhdGljXCIgdGl0bGU9XCJTdGF0aWMgRGVtb1wiIC8+XG4gICAgICAgICAgICAmbHQ7cy1saW5rIGhyZWY9XCIjYXBpXCIgdGl0bGU9XCJBUElcIj5cbiAgICAgICAgICAgICAgICAmbHQ7cy1saW5rIGhyZWY9XCIjYW5jaG9yLXByb3BzXCIgdGl0bGU9XCJBbmNob3IgUHJvcHNcIiAvPlxuICAgICAgICAgICAgICAgICZsdDtzLWxpbmsgaHJlZj1cIiNsaW5rLXByb3BzXCIgdGl0bGU9XCJMaW5rIFByb3BzXCIgLz5cbiAgICAgICAgICAgICZsdDsvcy1saW5rPlxuICAgICAgICAmbHQ7L3MtYW5jaG9yPlxuICAgICZsdDsvZGl2PlxuJmx0Oy90ZW1wbGF0ZT5cbiZsdDtzY3JpcHQ+XG5pbXBvcnQgQW5jaG9yIGZyb20gJ3NhbnRkL2FuY2hvcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICdzLWFuY2hvcic6IEFuY2hvcixcbiAgICAgICAgJ3MtbGluayc6IEFuY2hvci5MaW5rXG4gICAgfVxufVxuJmx0Oy9zY3JpcHQ+PC9jb2RlPjwvcHJlPmAsXG4gICAgICB0ZXh0OiBgXG48aDQgaWQ9XCLpnZnmgIHkvY3nva5cIj48c3Bhbj7pnZnmgIHkvY3nva48L3NwYW4+PGEgaHJlZj1cIiPpnZnmgIHkvY3nva5cIiBjbGFzcz1cImFuY2hvclwiPiM8L2E+PC9oND48cD7kuI3mta7liqjvvIznirbmgIHkuI3pmo/pobXpnaLmu5rliqjlj5jljJY8L3A+YFxuICAgIH07XG4gIH0sXG5cbiAgdG9nZ2xlRXhwYW5kKCkge1xuICAgIHRoaXMuZGF0YS5zZXQoJ2lzRXhwYW5kJywgIXRoaXMuZGF0YS5nZXQoJ2lzRXhwYW5kJykpO1xuICB9LFxuXG4gIGNvbXBvbmVudHM6IHtcbiAgICAnY29kZS1wcmV2aWV3JzogY29kZVByZXZpZXdcbiAgfSxcbiAgdGVtcGxhdGU6IGA8c2VjdGlvbiBjbGFzcz1cImNvZGUtYm94IHt7aXNFeHBhbmQ/J2V4cGFuZCc6Jyd9fVwiIGlkPVwiY29tcG9uZW50cy1kZW1vLTE1NzUyNTc2NzM2NDdcIj48c2VjdGlvbiBjbGFzcz1cImNvZGUtYm94LWRlbW9cIj48Y29kZS1wcmV2aWV3PjwvY29kZS1wcmV2aWV3Pjwvc2VjdGlvbj48c2VjdGlvbiBjbGFzcz1cImNvZGUtYm94LW1ldGEgbWFya2Rvd25cIj57eyB0ZXh0IHwgcmF3fX08c3BhbiBjbGFzcz1cImNvZGUtZXhwYW5kLWljb25cIiBvbi1jbGljaz1cInRvZ2dsZUV4cGFuZFwiPjxpbWcgYWx0PVwiZXhwYW5kIGNvZGVcIiBzcmM9XCJodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvd1NBa0J1SkZiZHhzb3NLS3BxeXEuc3ZnXCIgY2xhc3M9XCJ7e2lzRXhwYW5kPydjb2RlLWV4cGFuZC1pY29uLWhpZGUnOidjb2RlLWV4cGFuZC1pY29uLXNob3cnfX1cIj48aW1nIGFsdD1cImV4cGFuZCBjb2RlXCIgc3JjPVwiaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL09wUk9QSFlxV21yTURCRk1adEtGLnN2Z1wiIGNsYXNzPVwie3tpc0V4cGFuZD8nY29kZS1leHBhbmQtaWNvbi1zaG93JzonY29kZS1leHBhbmQtaWNvbi1oaWRlJ319XCI+PC9zcGFuPjwvc2VjdGlvbj48c2VjdGlvbiBjbGFzcz1cImhpZ2hsaWdodC13cmFwcGVyIHt7aXNFeHBhbmQ/J2hpZ2hsaWdodC13cmFwcGVyLWV4cGFuZCc6Jyd9fVwiPnt7IGNvZGUgfCByYXd9fTwvc2VjdGlvbj48L3NlY3Rpb24+YFxufTtcbiAgICBpZihtb2R1bGUuaG90KXtcbiAgICAgICAgdmFyIGhvdEFwaSA9IHJlcXVpcmUoJ3Nhbi1ob3QtcmVsb2FkLWFwaScpXG5cbiAgICAgICAgaG90QXBpLmluc3RhbGwocmVxdWlyZSgnc2FuJyksIGZhbHNlKVxuICAgICAgICBpZighaG90QXBpLmNvbXBhdGlibGUpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzYW4taG90LXJlbG9hZC1hcGkgaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGUgdmVyc2lvbiBvZiBWdWUgeW91IGFyZSB1c2luZy4nKVxuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICAgICAgdmFyIGlkID0gJ3NyYy9hbmNob3IvZG9jcy9zdGF0aWMubWQnXG4gICAgICAgIHZhciBtb2R1bGVEZWZhdWx0ID0gbW9kdWxlLmV4cG9ydHMgPyBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0IDogbW9kdWxlLl9fcHJvdG9fXy5leHBvcnRzLmRlZmF1bHRcbiAgICAgICAgaWYoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgICAgICAgaG90QXBpLmNyZWF0ZVJlY29yZChpZCwgbW9kdWxlRGVmYXVsdClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBob3RBcGkucmVsb2FkKGlkLCBtb2R1bGVEZWZhdWx0KVxuICAgICAgICB9XG4gICAgfVxuICAgICIsImltcG9ydCBBbmNob3IgZnJvbSAnc2FudGQvYW5jaG9yJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgICdzLWFuY2hvcic6IEFuY2hvcixcbiAgICAncy1saW5rJzogQW5jaG9yLkxpbmtcbiAgfSxcblxuICBoYW5kbGVDbGljayh7XG4gICAgZSxcbiAgICBsaW5rXG4gIH0pIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2cobGluayk7XG4gIH0sXG5cbiAgdGVtcGxhdGU6IGA8ZGl2PjxzLWFuY2hvciBhZmZpeD1cInt7ZmFsc2V9fVwiIG9uLWNsaWNrPVwiaGFuZGxlQ2xpY2tcIj48cy1saW5rIGhyZWY9XCIjY29tcG9uZW50cy1hbmNob3ItZGVtby1iYXNpY1wiIHRpdGxlPVwiQmFzaWMgRGVtb1wiPjwvcy1saW5rPjxzLWxpbmsgaHJlZj1cIiNjb21wb25lbnRzLWFuY2hvci1kZW1vLXN0YXRpY1wiIHRpdGxlPVwiU3RhdGljIERlbW9cIj48L3MtbGluaz48cy1saW5rIGhyZWY9XCIjYXBpXCIgdGl0bGU9XCJBUElcIj48cy1saW5rIGhyZWY9XCIjYW5jaG9yLXByb3BzXCIgdGl0bGU9XCJBbmNob3IgUHJvcHNcIj48L3MtbGluaz48cy1saW5rIGhyZWY9XCIjbGluay1wcm9wc1wiIHRpdGxlPVwiTGluayBQcm9wc1wiPjwvcy1saW5rPjwvcy1saW5rPjwvcy1hbmNob3I+PC9kaXY+YFxufTsiLCJpbXBvcnQgY29kZVByZXZpZXcgZnJvbSAnL1VzZXJzL21heWlodWkvY29kZS9zYW50ZC9ub2RlX21vZHVsZXMvaHVsay1zYW4tbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9tYXlpaHVpL2NvZGUvc2FudGQvbm9kZV9tb2R1bGVzL2h1bGstbWFya2Rvd24tbG9hZGVyL3V0aWxzL3BpY2tGZW5jZS5qcz91cmw9L1VzZXJzL21heWlodWkvY29kZS9zYW50ZC9zcmMvYW5jaG9yL2RvY3MvY2xpY2subWQhL1VzZXJzL21heWlodWkvY29kZS9zYW50ZC9ub2RlX21vZHVsZXMvaHVsay1tYXJrZG93bi1sb2FkZXIvdXRpbHMvX2Zha2VtZD9tZHVybD0vVXNlcnMvbWF5aWh1aS9jb2RlL3NhbnRkL3NyYy9hbmNob3IvZG9jcy9jbGljay5tZCZfdD0xNTc1MjU3NjczNjM3JztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdERhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzRXhwYW5kOiBmYWxzZSxcbiAgICAgIGNvZGU6IGBcbjxwcmU+PGNvZGUgY2xhc3M9XCJsYW5ndWFnZS1odG1sXCI+Jmx0O3RlbXBsYXRlPlxuICAgICZsdDtkaXY+XG4gICAgICAgICZsdDtzLWFuY2hvciBhZmZpeD1cInt7ZmFsc2V9fVwiIG9uLWNsaWNrPVwiaGFuZGxlQ2xpY2tcIj5cbiAgICAgICAgICAgICZsdDtzLWxpbmsgaHJlZj1cIiNjb21wb25lbnRzLWFuY2hvci1kZW1vLWJhc2ljXCIgdGl0bGU9XCJCYXNpYyBEZW1vXCIgLz5cbiAgICAgICAgICAgICZsdDtzLWxpbmsgaHJlZj1cIiNjb21wb25lbnRzLWFuY2hvci1kZW1vLXN0YXRpY1wiIHRpdGxlPVwiU3RhdGljIERlbW9cIiAvPlxuICAgICAgICAgICAgJmx0O3MtbGluayBocmVmPVwiI2FwaVwiIHRpdGxlPVwiQVBJXCI+XG4gICAgICAgICAgICAgICAgJmx0O3MtbGluayBocmVmPVwiI2FuY2hvci1wcm9wc1wiIHRpdGxlPVwiQW5jaG9yIFByb3BzXCIgLz5cbiAgICAgICAgICAgICAgICAmbHQ7cy1saW5rIGhyZWY9XCIjbGluay1wcm9wc1wiIHRpdGxlPVwiTGluayBQcm9wc1wiIC8+XG4gICAgICAgICAgICAmbHQ7L3MtbGluaz5cbiAgICAgICAgJmx0Oy9zLWFuY2hvcj5cbiAgICAmbHQ7L2Rpdj5cbiZsdDsvdGVtcGxhdGU+XG4mbHQ7c2NyaXB0PlxuaW1wb3J0IEFuY2hvciBmcm9tICdzYW50ZC9hbmNob3InO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czoge1xuICAgICAgICAncy1hbmNob3InOiBBbmNob3IsXG4gICAgICAgICdzLWxpbmsnOiBBbmNob3IuTGlua1xuICAgIH0sXG4gICAgaGFuZGxlQ2xpY2soe2UsIGxpbmt9KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2cobGluayk7XG4gICAgfVxufVxuJmx0Oy9zY3JpcHQ+PC9jb2RlPjwvcHJlPmAsXG4gICAgICB0ZXh0OiBgXG48aDQgaWQ9XCLoh6rlrprkuYlvbi1jbGlja+S6i+S7tlwiPjxzcGFuPuiHquWumuS5iW9uLUNsaWNr5LqL5Lu2PC9zcGFuPjxhIGhyZWY9XCIj6Ieq5a6a5LmJb24tY2xpY2vkuovku7ZcIiBjbGFzcz1cImFuY2hvclwiPiM8L2E+PC9oND48cD7ngrnlh7vplJrngrnkuI3orrDlvZXljoblj7LjgII8L3A+YFxuICAgIH07XG4gIH0sXG5cbiAgdG9nZ2xlRXhwYW5kKCkge1xuICAgIHRoaXMuZGF0YS5zZXQoJ2lzRXhwYW5kJywgIXRoaXMuZGF0YS5nZXQoJ2lzRXhwYW5kJykpO1xuICB9LFxuXG4gIGNvbXBvbmVudHM6IHtcbiAgICAnY29kZS1wcmV2aWV3JzogY29kZVByZXZpZXdcbiAgfSxcbiAgdGVtcGxhdGU6IGA8c2VjdGlvbiBjbGFzcz1cImNvZGUtYm94IHt7aXNFeHBhbmQ/J2V4cGFuZCc6Jyd9fVwiIGlkPVwiY29tcG9uZW50cy1kZW1vLTE1NzUyNTc2NzM2MzdcIj48c2VjdGlvbiBjbGFzcz1cImNvZGUtYm94LWRlbW9cIj48Y29kZS1wcmV2aWV3PjwvY29kZS1wcmV2aWV3Pjwvc2VjdGlvbj48c2VjdGlvbiBjbGFzcz1cImNvZGUtYm94LW1ldGEgbWFya2Rvd25cIj57eyB0ZXh0IHwgcmF3fX08c3BhbiBjbGFzcz1cImNvZGUtZXhwYW5kLWljb25cIiBvbi1jbGljaz1cInRvZ2dsZUV4cGFuZFwiPjxpbWcgYWx0PVwiZXhwYW5kIGNvZGVcIiBzcmM9XCJodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvd1NBa0J1SkZiZHhzb3NLS3BxeXEuc3ZnXCIgY2xhc3M9XCJ7e2lzRXhwYW5kPydjb2RlLWV4cGFuZC1pY29uLWhpZGUnOidjb2RlLWV4cGFuZC1pY29uLXNob3cnfX1cIj48aW1nIGFsdD1cImV4cGFuZCBjb2RlXCIgc3JjPVwiaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL09wUk9QSFlxV21yTURCRk1adEtGLnN2Z1wiIGNsYXNzPVwie3tpc0V4cGFuZD8nY29kZS1leHBhbmQtaWNvbi1zaG93JzonY29kZS1leHBhbmQtaWNvbi1oaWRlJ319XCI+PC9zcGFuPjwvc2VjdGlvbj48c2VjdGlvbiBjbGFzcz1cImhpZ2hsaWdodC13cmFwcGVyIHt7aXNFeHBhbmQ/J2hpZ2hsaWdodC13cmFwcGVyLWV4cGFuZCc6Jyd9fVwiPnt7IGNvZGUgfCByYXd9fTwvc2VjdGlvbj48L3NlY3Rpb24+YFxufTtcbiAgICBpZihtb2R1bGUuaG90KXtcbiAgICAgICAgdmFyIGhvdEFwaSA9IHJlcXVpcmUoJ3Nhbi1ob3QtcmVsb2FkLWFwaScpXG5cbiAgICAgICAgaG90QXBpLmluc3RhbGwocmVxdWlyZSgnc2FuJyksIGZhbHNlKVxuICAgICAgICBpZighaG90QXBpLmNvbXBhdGlibGUpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzYW4taG90LXJlbG9hZC1hcGkgaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGUgdmVyc2lvbiBvZiBWdWUgeW91IGFyZSB1c2luZy4nKVxuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICAgICAgdmFyIGlkID0gJ3NyYy9hbmNob3IvZG9jcy9jbGljay5tZCdcbiAgICAgICAgdmFyIG1vZHVsZURlZmF1bHQgPSBtb2R1bGUuZXhwb3J0cyA/IG1vZHVsZS5leHBvcnRzLmRlZmF1bHQgOiBtb2R1bGUuX19wcm90b19fLmV4cG9ydHMuZGVmYXVsdFxuICAgICAgICBpZighbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICAgICAgICBob3RBcGkuY3JlYXRlUmVjb3JkKGlkLCBtb2R1bGVEZWZhdWx0KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGhvdEFwaS5yZWxvYWQoaWQsIG1vZHVsZURlZmF1bHQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgIiwiLyoqXG4gKiBAZmlsZSBTYW50ZCBhbmNob3IgZG9jcyBmaWxlXG4gKiovXG5pbXBvcnQgc2FuIGZyb20gJ3Nhbic7XG5pbXBvcnQgUmVhZG1lIGZyb20gJy4uL1JFQURNRS5tZCc7XG5pbXBvcnQgSGVhZCBmcm9tICcuL2hlYWQubWQnO1xuaW1wb3J0IEJhc2ljIGZyb20gJy4vYmFzaWMubWQnO1xuaW1wb3J0IFN0YXRpYyBmcm9tICcuL3N0YXRpYy5tZCc7XG5pbXBvcnQgQ2xpY2sgZnJvbSAnLi9jbGljay5tZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHNhbi5kZWZpbmVDb21wb25lbnQoe1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgcmVhZG1lOiBSZWFkbWUsXG4gICAgICAgIGhlYWQ6IEhlYWQsXG4gICAgICAgIGJhc2ljOiBCYXNpYyxcbiAgICAgICAgc3RhdGljOiBTdGF0aWMsXG4gICAgICAgIGNsaWNrOiBDbGlja1xuICAgIH0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoZWFkLz5cbiAgICAgICAgICAgIDxiYXNpYy8+XG4gICAgICAgICAgICA8c3RhdGljLz5cbiAgICAgICAgICAgIDxjbGljay8+XG4gICAgICAgICAgICA8cmVhZG1lLz5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSwrQ0FlQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQSw4REFlQTtBQUNBOzs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQWVBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBZUE7QUFDQTs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFlQTtBQUNBOztBQzlEQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBUkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///605\n')}}]);