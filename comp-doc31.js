(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{576:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),s={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><p>提及组件，用于在输入中提及某事或某人</p><p>详细属性：</p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>autoFocus</td><td>自动获取焦点</td><td>boolean</td><td>false</td></tr><tr><td>disabled</td><td>是否禁用状态.</td><td>boolean</td><td>false</td></tr><tr><td>loading</td><td>加载中</td><td>boolean</td><td>false</td></tr><tr><td>baseStyle</td><td>输入位置的样式</td><td>object</td><td>-</td></tr><tr><td>multiLines</td><td>多行模式</td><td>boolean</td><td>false</td></tr><tr><td>notFoundContent</td><td>未找到时的内容</td><td>string</td><td>&#39;无匹配结果，轻敲空格完成输入&#39;</td></tr><tr><td>placeholder</td><td>输入框默认文字</td><td>string</td><td>null</td></tr><tr><td>placement</td><td>建议框位置，可选 <code>top</code> <code>bottom</code></td><td>string</td><td>&#39;bottom&#39;</td></tr><tr><td>prefix</td><td>触发弹出下拉框的字符</td><td>string or Array<string></string></td><td>&#39;@&#39;</td></tr><tr><td>readOnly</td><td>是否只读.</td><td>boolean</td><td>false</td></tr><tr><td>defaultValue</td><td>默认值</td><td>string</td><td>&#39;&#39;</td></tr><tr><td>value</td><td>值</td><td>string</td><td>&#39;&#39;</td></tr><tr><td>defaultSuggestions</td><td>默认建议内容</td><td>Array&lt;string&gt;</td><td>[]</td></tr><tr><td>suggestions</td><td>建议内容</td><td>Array&lt;string&gt;</td><td>[]</td></tr><tr><td>suggestionStyle</td><td>弹出下拉框样式</td><td>string</td><td>&#39;&#39;</td></tr><tr><td>split</td><td>设置选中项前后分隔符</td><td>string</td><td>&#39; &#39;</td></tr><tr><td>filterOption</td><td>自定义过滤逻辑</td><td>false | (input, option): boolean</td><td>-</td></tr><tr><td>validateSearch</td><td>自定义触发验证逻辑</td><td>function(input): boolean</td><td>-</td></tr><tr><td>on-blur</td><td>失去焦点时回调</td><td>function(e)</td><td>null</td></tr><tr><td>on-focus</td><td>获得焦点时回调</td><td>function(e)</td><td>null</td></tr><tr><td>on-change</td><td>输入框内容变化时回调</td><td>function(e)</td><td>null</td></tr><tr><td>on-searchChange</td><td>输入框中 @ 变化时回调</td><td>function(value:string, trigger: string)</td><td>[]</td></tr><tr><td>on-select</td><td>下拉框选择建议时回调</td><td>function(suggestion: string)</td><td>null</td></tr></tbody></table><h2 id="mention-methods"><span>mention Methods</span><a href="#mention-methods" class="anchor">#</a></h2><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>blur()</td><td>取消焦点</td></tr><tr><td>focus()</td><td>获取焦点</td></tr></tbody></table></section>'},i={template:'<section class="markdown"><h1 id="mention-提及"><span>Mention 提及</span><a href="#mention-提及" class="anchor">#</a></h1><p>提及组件。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>用于在输入中提及某人或某事，常用于发布、聊天或评论功能。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},d=t(112),l={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n  &lt;div>\n    &lt;s-mention\n        defaultValue=\"@afc163\"\n        defaultSuggestions=\"{{suggestions}}\"\n        placeholder=\"this is default Mention\"\n        on-select=\"onSelect\"\n        on-change=\"onChange\"\n    />\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport Mention from 'santd/mention';\nexport default {\n    components: {\n        's-mention': Mention\n    },\n    initData() {\n        return {\n            suggestions: ['wangyongqing', 'mayihui', 'fuqiangqiang', 'zhangtingting', 'raowenjuan']\n        };\n    },\n    onSelect(suggestion) {\n        console.log('onSelect', suggestion);\n    },\n    onChange(suggestionsList) {\n        console.log('onChange', suggestionsList)\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本使用"><span>基本使用</span><a href="#基本使用" class="anchor">#</a></h4><p>基本使用</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-mention":d.a},initData:()=>({suggestions:["wangyongqing","mayihui","fuqiangqiang","zhangtingting","raowenjuan"]}),onSelect(n){console.log("onSelect",n)},onChange(n){console.log("onChange",n)},template:'<div><s-mention defaultValue="@afc163" defaultSuggestions="{{suggestions}}" placeholder="this is default Mention" on-select="onSelect" on-change="onChange"></s-mention></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789400855"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},c={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n  &lt;div>\n    &lt;s-mention\n        defaultVaule=\"@afc163\"\n        defaultSuggestions=\"{{suggestions}}\"\n        placeholder=\"this is default Mention\"\n        placement=\"top\"\n        on-select=\"onSelect\"\n        on-change=\"onChange\"\n        on-focus=\"onFocus\"\n        on-blur=\"onBlur\"\n    />\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport Mention from 'santd/mention';\nexport default {\n    components: {\n        's-mention': Mention\n    },\n    initData() {\n        return {\n            suggestions: ['wangyongqing', 'mayihui', 'fuqiangqiang', 'zhangtingting', 'raowenjuan']\n        };\n    },\n    onSelect(suggestion) {\n        console.log('onSelect', suggestion);\n    },\n    onFocus(e) {\n        console.log('onFocus', e);\n    },\n    onBlur(e) {\n        console.log('onBlur', e);\n    },\n    onChange(suggestionsList) {\n        console.log('onChange', suggestionsList)\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="向上展开"><span>向上展开</span><a href="#向上展开" class="anchor">#</a></h4><p>向上展开建议</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-mention":d.a},initData:()=>({suggestions:["wangyongqing","mayihui","fuqiangqiang","zhangtingting","raowenjuan"]}),onSelect(n){console.log("onSelect",n)},onFocus(n){console.log("onFocus",n)},onBlur(n){console.log("onBlur",n)},onChange(n){console.log("onChange",n)},template:'<div><s-mention defaultVaule="@afc163" defaultSuggestions="{{suggestions}}" placeholder="this is default Mention" placement="top" on-select="onSelect" on-change="onChange" on-focus="onFocus" on-blur="onBlur"></s-mention></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789400840"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},p={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;div style=\"margin-bottom: 10px\">\n            &lt;s-mention\n                style=\"width: '100%'\"\n                placeholder=\"this is disabled Mention\"\n                disabled=\"{{true}}\"\n                suggestions=\"{{ ['liyanhong666', 'mayun', 'mahuateng', 'zhouhongyi', 'leijun666', 'ww233'] }}\"\n            />\n        &lt;/div>\n        &lt;s-mention\n            style=\"width:100%\"\n            placeholder=\"this is readOnly Mention\"\n            readOnly=\"{{true}}\"\n            suggestions=\"{{ ['liyanhong666', 'mayun', 'mahuateng', 'zhouhongyi', 'leijun666', 'ww233'] }}\"\n          />\n    &lt;/div>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport mention from 'santd/mention';\nexport default {\n    components: {\n        's-mention': mention\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="无效或只读"><span>无效或只读</span><a href="#无效或只读" class="anchor">#</a></h4><p>通过 disabled 属性设置是否生效。通过 readOnly 属性设置是否只读。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-mention":d.a},template:"<div><div style=\"margin-bottom: 10px\"><s-mention style=\"width: '100%'\" placeholder=\"this is disabled Mention\" disabled=\"{{true}}\" suggestions=\"{{ ['liyanhong666', 'mayun', 'mahuateng', 'zhouhongyi', 'leijun666', 'ww233'] }}\"></s-mention></div><s-mention style=\"width:100%\" placeholder=\"this is readOnly Mention\" readOnly=\"{{true}}\" suggestions=\"{{ ['liyanhong666', 'mayun', 'mahuateng', 'zhouhongyi', 'leijun666', 'ww233'] }}\"></s-mention></div>"}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789400851"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};const r=["wangyongqing","mayihui","fuqiangqiang","zhangtingting","raowenjuan"];var g={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n  &lt;div>\n    &lt;s-mention\n    loading=\"{{loading}}\"\n    suggestions=\"{{suggestions}}\"\n    on-searchChange=\"onSearchChange\"\n    />\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport Mention from 'santd/mention';\n\nconst users= ['wangyongqing', 'mayihui', 'fuqiangqiang', 'zhangtingting', 'raowenjuan'];\n\nexport default {\n    components: {\n        's-mention': Mention\n    },\n    initData() {\n        return {\n            loading: false,\n            suggestions: []\n        }\n    },\n    fetchSuggestions(value, callback) {\n        setTimeout(() => {\n            callback(users.filter(item => item.indexOf(value) !== -1));\n        },500);\n    },\n    onSearchChange(val) {\n        this.fetchSuggestions(val.value, suggestions => {\n            this.data.set('suggestions', suggestions);\n            this.data.set('loading', false);\n        });\n        this.data.set('loading', true);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="loading态"><span>loading态</span><a href="#loading态" class="anchor">#</a></h4><p>匹配内容列表为异步返回时。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-mention":d.a},initData:()=>({loading:!1,suggestions:[]}),fetchSuggestions(n,e){setTimeout(()=>{e(r.filter(e=>-1!==e.indexOf(n)))},500)},onSearchChange(n){this.fetchSuggestions(n.value,n=>{this.data.set("suggestions",n),this.data.set("loading",!1)}),this.data.set("loading",!0)},template:'<div><s-mention loading="{{loading}}" suggestions="{{suggestions}}" on-searchChange="onSearchChange"></s-mention></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789400830"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},m={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n  &lt;div>\n    &lt;s-mention\n        style=\"width: 100%; height: 100px;\"\n        baseStyle=\"{{{width: '100%', height: '100px'}}}\"\n        multiLines=\"{{true}}\"\n        defaultSuggestions=\"{{suggestions}}\"\n    />\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport mention from 'santd/mention';\nexport default {\n    components: {\n        's-mention': mention\n    },\n    initData() {\n        return {\n            suggestions: ['wangyongqing', 'mayihui', 'fuqiangqiang', 'zhangtingting', 'raowenjuan']\n        };\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="多行"><span>多行</span><a href="#多行" class="anchor">#</a></h4><p>多行模式，多行模式必须指定高度。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-mention":d.a},initData:()=>({suggestions:["wangyongqing","mayihui","fuqiangqiang","zhangtingting","raowenjuan"]}),template:'<div><s-mention style="width: 100%; height: 100px;" baseStyle="{{{width: \'100%\', height: \'100px\'}}}" multiLines="{{true}}" defaultSuggestions="{{suggestions}}"></s-mention></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789400800"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};const h=["liudehua","zhoujielun","zhouxingchi","zhaowei","linxinru","fanbingbing","liuxiang"],u=["1.0","2.0","3.0"];var x={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n  &lt;div>\n    &lt;s-mention\n        placeholder=\"input @ to mention people, # to mention tag\"\n        prefix=\"{{ ['@', '#'] }}\"\n        on-searchChange=\"onSearchChange\"\n        suggestions=\"{{suggestions}}\"\n    />\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport mention from 'santd/mention';\nconst users = ['liudehua', 'zhoujielun', 'zhouxingchi', 'zhaowei', 'linxinru', 'fanbingbing', 'liuxiang'];\nconst tags = ['1.0', '2.0', '3.0'];\nexport default {\n    components: {\n        's-mention': mention\n    },\n    onSearchChange(e) {\n        let value = e.value;\n        let trigger = e.trigger;\n        const dataSource = trigger === '@' ? users : tags;\n        let filtered = dataSource.filter(item => (\n            item.indexOf(value) !== -1\n        ));\n        console.log('filtered:', filtered);\n        this.data.set('suggestions', filtered);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="自定义触发字符"><span>自定义触发字符</span><a href="#自定义触发字符" class="anchor">#</a></h4><p>通过 <code>prefix</code> 属性自定义触发字符。默认为 <code>@</code>, 可以定义为数组。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-mention":d.a},onSearchChange(n){let e=n.value;let t=("@"===n.trigger?h:u).filter(n=>-1!==n.indexOf(e));console.log("filtered:",t),this.data.set("suggestions",t)},template:'<div><s-mention placeholder="input @ to mention people, # to mention tag" prefix="{{ [\'@\', \'#\'] }}" on-searchChange="onSearchChange" suggestions="{{suggestions}}"></s-mention></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789400746"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};const f=[{name:"React",type:"JavaScript"},{name:"Angular",type:"JavaScript"},{name:"Laravel",type:"PHP"},{name:"Flask",type:"Python"},{name:"Django",type:"Python"}],w=function(n=""){return a.a.defineComponent({components:{"s-mention":d.a,"s-nav":d.a.Nav},computed:{filtered(){const e=n.toLowerCase();return f.filter(n=>-1!==n.name.toLowerCase().indexOf(e))}},template:'\n            <div>\n                <s-nav s-for="suggestion in filtered" value="{{suggestion.name}}">\n                    <span>{{suggestion.name}} - {{suggestion.type}}</span>\n                </s-nav>\n            </div>\n        '})};var v={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n  &lt;div>\n    &lt;s-mention\n        suggestions=\"{{suggestions}}\"\n        placeholder=\"@someone\"\n        on-searchChange=\"onSearchChange\"\n        on-select=\"onSelect\"\n    />\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport san from 'san';\nimport Mention from 'santd/mention';\n\nconst webFrameworks = [\n  { name: 'React', type: 'JavaScript' },\n  { name: 'Angular', type: 'JavaScript' },\n  { name: 'Laravel', type: 'PHP'},\n  { name: 'Flask', type: 'Python' },\n  { name: 'Django', type: 'Python' },\n];\n\nconst navComponent = function(value = '') {\n    return san.defineComponent({\n        components:{\n            's-mention': Mention,\n            's-nav': Mention.Nav\n        },\n        computed: {\n            filtered() {\n                const searchValue = value.toLowerCase();\n                const filtered = webFrameworks.filter(item => item.name.toLowerCase().indexOf(searchValue) !== -1);\n                return filtered\n            }\n        },\n        template: &#96;\n            &lt;div>\n                &lt;s-nav s-for=\"suggestion in filtered\" value=\"{{suggestion.name}}\">\n                    &lt;span>{{suggestion.name}} - {{suggestion.type}}&lt;/span>\n                &lt;/s-nav>\n            &lt;/div>\n        &#96;\n    });\n};\n\nexport default {\n    components: {\n        's-mention': Mention\n    },\n    initData() {\n        return {\n            searchValue: '',\n            suggestions: navComponent()\n        };\n    },\n    onSearchChange(val) {\n        this.data.set('suggestions', navComponent(val.value));\n    },\n    onSelect(val) {\n        console.log('select: ', val);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="自定义建议"><span>自定义建议</span><a href="#自定义建议" class="anchor">#</a></h4><p>自定义建议 <br>\n注意，自定义建议时，onSearchChange 必须不能为空。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-mention":d.a},initData:()=>({searchValue:"",suggestions:w()}),onSearchChange(n){this.data.set("suggestions",w(n.value))},onSelect(n){console.log("select: ",n)},template:'<div><s-mention suggestions="{{suggestions}}" placeholder="@someone" on-searchChange="onSearchChange" on-select="onSelect"></s-mention></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789400740"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},y=t(54);const b=[{name:"React",type:"JavaScript",icon:"https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg"},{name:"Angular",type:"JavaScript",icon:"https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png"},{name:"Dva",type:"Javascript",icon:"https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png"},{name:"Flask",type:"Python",icon:"https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png"}],C=function(n=""){return a.a.defineComponent({components:{"s-mention":d.a,"s-nav":d.a.Nav,"s-avatar":y.a},computed:{filtered(){const e=n.toLowerCase();return b.filter(n=>-1!==n.name.toLowerCase().indexOf(e))}},template:'\n            <div>\n                <s-nav s-for="suggestion in filtered" value="{{suggestion.name}}">\n                    <s-avatar\n                         src="{{suggestion.icon}}"\n                         size="small"\n                         style="width:14px;height:14px;margin-right:8px;top:-1;position:relative"\n                    ></s-avatar>\n                    <span>{{suggestion.name}} - {{suggestion.type}}</span>\n                </s-nav>\n            </div>\n        '})};var E={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n  &lt;div>\n    &lt;s-mention\n        suggestions=\"{{suggestions}}\"\n        placeholder=\"@someone\"\n        on-searchChange=\"onSearchChange\"\n        on-select=\"onSelect\"\n    />\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport san from 'san';\nimport Mention from 'santd/mention';\nimport Avatar from 'santd/avatar';\n\nconst webFrameworks = [\n    {\n      name: 'React',\n      type: 'JavaScript',\n      icon: 'https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg',\n    },\n    {\n      name: 'Angular',\n      type: 'JavaScript',\n      icon: 'https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png',\n    },\n    {\n      name: 'Dva',\n      type: 'Javascript',\n      icon: 'https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png',\n    },\n    {\n      name: 'Flask',\n      type: 'Python',\n      icon: 'https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png',\n    }\n];\n\nconst navComponent = function(value = '') {\n    return san.defineComponent({\n        components:{\n            's-mention': Mention,\n            's-nav': Mention.Nav,\n            's-avatar': Avatar\n        },\n        computed: {\n            filtered() {\n                const searchValue = value.toLowerCase();\n                const filtered = webFrameworks.filter(item => item.name.toLowerCase().indexOf(searchValue) !== -1);\n                return filtered\n            }\n        },\n        template: &#96;\n            &lt;div>\n                &lt;s-nav s-for=\"suggestion in filtered\" value=\"{{suggestion.name}}\">\n                    &lt;s-avatar\n                         src=\"{{suggestion.icon}}\"\n                         size=\"small\"\n                         style=\"width:14px;height:14px;margin-right:8px;top:-1;position:relative\"\n                    >&lt;/s-avatar>\n                    &lt;span>{{suggestion.name}} - {{suggestion.type}}&lt;/span>\n                &lt;/s-nav>\n            &lt;/div>\n        &#96;\n    });\n};\n\nexport default {\n    components: {\n        's-mention': Mention\n    },\n    initData() {\n        return {\n            searchValue: '',\n            suggestions: navComponent()\n        };\n    },\n    onSearchChange(val) {\n        this.data.set('suggestions', navComponent(val.value));\n    },\n    onSelect(val) {\n        console.log('select: ', val);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="头像"><span>头像</span><a href="#头像" class="anchor">#</a></h4><p>自定义建议（含头像） <br>\n注意，自定义建议时，onSearchChange 必须不能为空。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-mention":d.a},initData:()=>({searchValue:"",suggestions:C()}),onSearchChange(n){this.data.set("suggestions",C(n.value))},onSelect(n){console.log("select: ",n)},template:'<div><s-mention suggestions="{{suggestions}}" placeholder="@someone" on-searchChange="onSearchChange" on-select="onSelect"></s-mention></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789400728"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},S=t(96),q=t(11),F=t(27),z={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n  &lt;div>\n    &lt;s-form>\n        &lt;s-form-item label=\"Name\" labelCol=\"{{formItemLayout.labelCol}}\" wrapperCol=\"{{formItemLayout.wrapperCol}}\">\n            &lt;s-mention\n                defaultSuggestions=\"{{suggestions}}\"\n                decorator=\"{{usernameDecorator}}\"\n            />\n        &lt;/s-form-item>\n        &lt;s-form-item labelCol=\"{{formTailLayout.labelCol}}\" wrapperCol=\"{{formTailLayout.wrapperCol}}\">\n            &lt;s-button type=\"primary\" on-click=\"onCheck\">Check&lt;/s-button>\n            &lt;s-button type=\"primary\" on-click=\"onReset($event)\">Reset&lt;/s-button>\n        &lt;/s-form-item>\n    &lt;/s-form>\n\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport Mention from 'santd/mention';\nimport Form from 'santd/form';\nimport Button from 'santd/button';\nimport Input from 'santd/input';\nexport default Form.create({name: 'dynamic_rule'})({\n    components: {\n        's-mention': Mention,\n        's-form': Form,\n        's-form-item': Form.FormItem,\n        's-button': Button,\n        's-input': Input\n    },\n    initData() {\n        return {\n            suggestions: ['wangyongqing', 'mayihui', 'fuqiangqiang', 'zhangtingting', 'raowenjuan'],\n            formItemLayout: {\n                labelCol: {span: 4},\n                wrapperCol: {span: 8}\n            },\n            formTailLayout: {\n                labelCol: {span: 4},\n                wrapperCol: {span: 8, offset: 4}\n            },\n            usernameDecorator: {\n                name: 'username',\n                rules: [{required: true, message: 'Please input your name'}]\n            }\n        };\n    },\n    onCheck() {\n        const form = this.data.get('form');\n        form.validateFields((err) => {\n            if (!err) {\n                console.info('success');\n            }\n        });\n    },\n    onReset(e) {\n        e.preventDefault();\n        const form = this.data.get('form');\n        form.resetFields();\n    }\n})\n&lt;/script></code></pre>",text:'\n<h4 id="配合form使用"><span>配合form使用</span><a href="#配合form使用" class="anchor">#</a></h4><p>配合 Form 使用</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":S.a.create({name:"dynamic_rule"})({components:{"s-mention":d.a,"s-form":S.a,"s-form-item":S.a.FormItem,"s-button":q.a,"s-input":F.a},initData:()=>({suggestions:["wangyongqing","mayihui","fuqiangqiang","zhangtingting","raowenjuan"],formItemLayout:{labelCol:{span:4},wrapperCol:{span:8}},formTailLayout:{labelCol:{span:4},wrapperCol:{span:8,offset:4}},usernameDecorator:{name:"username",rules:[{required:!0,message:"Please input your name"}]}}),onCheck(){this.data.get("form").validateFields(n=>{n||console.info("success")})},onReset(n){n.preventDefault();this.data.get("form").resetFields()},template:'<div><s-form><s-form-item label="Name" labelCol="{{formItemLayout.labelCol}}" wrapperCol="{{formItemLayout.wrapperCol}}"><s-mention defaultSuggestions="{{suggestions}}" decorator="{{usernameDecorator}}"></s-mention></s-form-item><s-form-item labelCol="{{formTailLayout.labelCol}}" wrapperCol="{{formTailLayout.wrapperCol}}"><s-button type="primary" on-click="onCheck">Check</s-button><s-button type="primary" on-click="onReset($event)">Reset</s-button></s-form-item></s-form></div>'})},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789400734"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};e.default=a.a.defineComponent({components:{head:i,basic:l,placement:c,loading:g,readonly:p,readme:s,multilines:m,multipletrigger:x,custom:v,avatar:E,form:z},template:"\n        <div>\n            <head/>\n            <basic/>\n            <placement/>\n            <loading/>\n            <avatar/>\n            <custom/>\n            <form/>\n            <multilines/>\n            <readonly/>\n            <multipletrigger/>\n            <readme/>\n        </div>\n    "})}}]);