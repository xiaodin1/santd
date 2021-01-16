(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{579:function(t,a,e){"use strict";e.r(a);var n=e(0),o=e.n(n),s={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><h3 id="radio"><span>Radio</span><a href="#radio" class="anchor">#</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>autoFocus</td><td>自动获取焦点</td><td>boolean</td><td><code>false</code></td></tr><tr><td>checked</td><td>指定当前是否选中</td><td>boolean</td><td><code>1false</code></td></tr><tr><td>defaultChecked</td><td>初始是否选中</td><td>boolean</td><td><code>false</code></td></tr><tr><td>value</td><td>根据 value 进行比较，判断是否选中</td><td>any</td><td>-</td></tr></tbody></table><h3 id="radiogroup"><span>RadioGroup</span><a href="#radiogroup" class="anchor">#</a></h3><p>单选框组合，用于包裹一组 <code>Radio</code>。</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>defaultValue</td><td>默认选中的值</td><td>any</td><td>-</td></tr><tr><td>disabled</td><td>禁选所有子单选器</td><td>boolean</td><td><code>false</code></td></tr><tr><td>name</td><td>RadioGroup 下所有 <code>input[type=&quot;radio&quot;]</code> 的 <code>name</code> 属性</td><td>string</td><td>-</td></tr><tr><td>options</td><td>以配置形式设置子元素</td><td>string[] | Array&lt;{ label: string value: string disabled?: boolean }&gt;</td><td>-</td></tr><tr><td>size</td><td>大小，只对按钮样式生效</td><td><code>large</code> | <code>default</code> | <code>small</code></td><td><code>default</code></td></tr><tr><td>value</td><td>用于设置当前选中的值</td><td>any</td><td>-</td></tr><tr><td>on-change</td><td>选项变化时的回调函数</td><td>Function(e:Event)</td><td>-</td></tr><tr><td>buttonStyle</td><td>RadioButton 的风格样式，目前有描边和填色两种风格</td><td><code>outline</code> | <code>solid</code></td><td><code>outline</code></td></tr></tbody></table><h2 id="方法"><span>方法</span><a href="#方法" class="anchor">#</a></h2><h3 id="radio-1"><span>Radio</span><a href="#radio-1" class="anchor">#</a></h3><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>blur()</td><td>移除焦点</td></tr><tr><td>focus()</td><td>获取焦点</td></tr></tbody></table></section>'},d={template:'<section class="markdown"><h1 id="radio-单选框"><span>Radio 单选框</span><a href="#radio-单选框" class="anchor">#</a></h1><p>单选框。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><ul><li>用于在多个备选项中选中单个状态。</li><li>和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。</li></ul><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},l=e(28),i={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-radio>Radio&lt;/s-radio>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport radio from 'santd/radio';\n\nexport default {\n    components: {\n        's-radio': radio\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>最简单的用法。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-radio":l.a},template:"<div><s-radio>Radio</s-radio></div>"}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789399873"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},p=e(11),r={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-radio value="{{3}}" disabled="{{disabled}}">Disabled&lt;/s-radio>\n        &lt;br/>\n        &lt;s-radio value="{{3}}" disabled="{{disabled}}" defaultChecked="{{true}}">Disabled&lt;/s-radio>\n        &lt;div style="margin-top: 20px;">\n            &lt;s-button on-click="toggleDisabled">Toggle Disabled&lt;/s-button>\n        &lt;/div>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport radio from \'santd/radio\';\nimport button from \'santd/button\';\n\nexport default {\n    components: {\n        \'s-radio\': radio,\n        \'s-button\': button\n    },\n    initData() {\n        return {\n            disabled: true\n        };\n    },\n    toggleDisabled() {\n        this.data.set(\'disabled\', !this.data.get(\'disabled\'));\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="不可用"><span>不可用</span><a href="#不可用" class="anchor">#</a></h4><p>Radio不可用。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-radio":l.a,"s-button":p.a},initData:()=>({disabled:!0}),toggleDisabled(){this.data.set("disabled",!this.data.get("disabled"))},template:'<div><s-radio value="{{3}}" disabled="{{disabled}}">Disabled</s-radio><br><s-radio value="{{3}}" disabled="{{disabled}}" defaultChecked="{{true}}">Disabled</s-radio><div style="margin-top: 20px;"><s-button on-click="toggleDisabled">Toggle Disabled</s-button></div></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789399868"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},c={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-group name="radiogroup" value="{{value}}" on-change="handleChange">\n            &lt;s-radio value="{{1}}">A&lt;/s-radio>\n            &lt;s-radio value="{{2}}">B&lt;/s-radio>\n            &lt;s-radio value="{{3}}">C&lt;/s-radio>\n            &lt;s-radio value="{{4}}">D&lt;/s-radio>\n        &lt;/s-group>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport radio from \'santd/radio\';\n\nexport default {\n    components: {\n        \'s-radio\': radio,\n        \'s-group\': radio.Group\n    },\n    initData() {\n        return {\n            value: 1\n        }\n    },\n    handleChange(e) {\n        console.log(\'radio checked\', e.target.value);\n        this.data.set(\'value\', Number(e.target.value));\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="单选组合"><span>单选组合</span><a href="#单选组合" class="anchor">#</a></h4><p>一组互斥的 Radio 配合使用。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-radio":l.a,"s-group":l.a.Group},initData:()=>({value:1}),handleChange(t){console.log("radio checked",t.target.value),this.data.set("value",Number(t.target.value))},template:'<div><s-group name="radiogroup" value="{{value}}" on-change="handleChange"><s-radio value="{{1}}">A</s-radio><s-radio value="{{2}}">B</s-radio><s-radio value="{{3}}">C</s-radio><s-radio value="{{4}}">D</s-radio></s-group></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789399860"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},u=e(27),g={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-group name="radiogroup" value="{{value}}" on-change="handleChange">\n            &lt;s-radio value="{{1}}" style="{{radioStyle}}">Option A&lt;/s-radio>\n            &lt;s-radio value="{{2}}" style="{{radioStyle}}">Option B&lt;/s-radio>\n            &lt;s-radio value="{{3}}" style="{{radioStyle}}">Option C&lt;/s-radio>\n            &lt;s-radio value="{{4}}" style="{{radioStyle}}">\n                More...\n                &lt;s-input s-if="value === 4" style="width: 100px; margin-left: 10px;"/>\n            &lt;/s-radio>\n        &lt;/s-group>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Radio from \'santd/radio\';\nimport Input from \'santd/input\';\n\nexport default {\n    components: {\n        \'s-radio\': Radio,\n        \'s-group\': Radio.Group,\n        \'s-input\': Input\n    },\n    initData() {\n        return {\n            radioStyle: {\n                \'display\': \'block\',\n                \'height\': \'30px\',\n                \'line-height\': \'30px\'\n            },\n            value: 1\n        }\n    },\n    handleChange(e) {\n        console.log(\'radio checked\', e.target.value);\n        this.data.set(\'value\', Number(e.target.value));\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="radiogroup-垂直"><span>RadioGroup 垂直</span><a href="#radiogroup-垂直" class="anchor">#</a></h4><p>垂直的 RadioGroup，配合更多输入框选项。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-radio":l.a,"s-group":l.a.Group,"s-input":u.a},initData:()=>({radioStyle:{display:"block",height:"30px","line-height":"30px"},value:1}),handleChange(t){console.log("radio checked",t.target.value),this.data.set("value",Number(t.target.value))},template:'<div><s-group name="radiogroup" value="{{value}}" on-change="handleChange"><s-radio value="{{1}}" style="{{radioStyle}}">Option A</s-radio><s-radio value="{{2}}" style="{{radioStyle}}">Option B</s-radio><s-radio value="{{3}}" style="{{radioStyle}}">Option C</s-radio><s-radio value="{{4}}" style="{{radioStyle}}">More...<s-input s-if="value === 4" style="width: 100px; margin-left: 10px;"></s-input></s-radio></s-group></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789399826"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},h={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-group name="radiogroup" defaultValue="{{1}}">\n            &lt;s-radio value="{{1}}">A&lt;/s-radio>\n            &lt;s-radio value="{{2}}">B&lt;/s-radio>\n            &lt;s-radio value="{{3}}">C&lt;/s-radio>\n            &lt;s-radio value="{{4}}">D&lt;/s-radio>\n        &lt;/s-group>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport radio from \'santd/radio\';\n\nexport default {\n    components: {\n        \'s-radio\': radio,\n        \'s-group\': radio.Group\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="单选组合-配合-name-使用"><span>单选组合 - 配合 name 使用</span><a href="#单选组合-配合-name-使用" class="anchor">#</a></h4><p>可以为 RadioGroup 配置 <code>name</code> 参数，为组合内的 input 元素赋予相同的 <code>name</code> 属性，使浏览器把 RadioGroup 下的 Radio 真正看作是一组（例如可以通过方向键始终在同一组内更改选项）。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-radio":l.a,"s-group":l.a.Group},template:'<div><s-group name="radiogroup" defaultValue="{{1}}"><s-radio value="{{1}}">A</s-radio><s-radio value="{{2}}">B</s-radio><s-radio value="{{3}}">C</s-radio><s-radio value="{{4}}">D</s-radio></s-group></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789399817"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};const b=l.a.Group;var v={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-group value=\"{{value1}}\" options=\"{{plainOptions}}\" on-change=\"onChange1($event)\" name=\"group1\"/>\n        &lt;s-group value=\"{{value2}}\" options=\"{{options}}\" on-change=\"onChange2($event)\" name=\"group2\"/>\n        &lt;s-group value=\"{{value3}}\" options=\"{{optionsWithDisabled}}\" on-change=\"onChange3($event)\" name=\"group3\"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport radio from 'santd/radio';\n\nconst group = radio.Group;\nexport default {\n    components: {\n        's-radio': radio,\n        's-group': group\n    },\n    initData() {\n        return {\n            value1: 'Apple',\n            value2: 'Apple',\n            value3: 'Apple',\n            plainOptions: ['Apple', 'Pear', 'Orange'],\n            options: [\n                { label: 'Apple', value: 'Apple' },\n                { label: 'Pear', value: 'Pear' },\n                { label: 'Orange', value: 'Orange' },\n            ],\n            optionsWithDisabled: [\n                { label: 'Apple', value: 'Apple' },\n                { label: 'Pear', value: 'Pear' },\n                { label: 'Orange', value: 'Orange', disabled: true }\n            ]\n        };\n    },\n    onChange1(e) {\n        this.data.set('value1', e.target.value);\n    },\n    onChange2(e) {\n        this.data.set('value2', e.target.value);\n    },\n    onChange3(e) {\n        this.data.set('value3', e.target.value);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="radiogroup-组合-配置方式"><span>RadioGroup 组合 - 配置方式</span><a href="#radiogroup-组合-配置方式" class="anchor">#</a></h4><p>通过配置 <code>options</code> 参数来渲染单选框。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-radio":l.a,"s-group":b},initData:()=>({value1:"Apple",value2:"Apple",value3:"Apple",plainOptions:["Apple","Pear","Orange"],options:[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}],optionsWithDisabled:[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!0}]}),onChange1(t){this.data.set("value1",t.target.value)},onChange2(t){this.data.set("value2",t.target.value)},onChange3(t){this.data.set("value3",t.target.value)},template:'<div><s-group value="{{value1}}" options="{{plainOptions}}" on-change="onChange1($event)" name="group1"></s-group><s-group value="{{value2}}" options="{{options}}" on-change="onChange2($event)" name="group2"></s-group><s-group value="{{value3}}" options="{{optionsWithDisabled}}" on-change="onChange3($event)" name="group3"></s-group></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789399807"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},m={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;div>\n            &lt;s-group defaultValue="a" on-change="handleChange" name="button1">\n                &lt;s-button value="a">Hangzhou&lt;/s-button>\n                &lt;s-button value="b">Shanghai&lt;/s-button>\n                &lt;s-button value="c">Beijing&lt;/s-button>\n                &lt;s-button value="d">Chengdu&lt;/s-button>\n            &lt;/s-group>\n        &lt;/div>\n        &lt;div style="margin-top: 16px;">\n            &lt;s-group defaultValue="a" on-change="handleChange" name="button2">\n                &lt;s-button value="a">Hangzhou&lt;/s-button>\n                &lt;s-button value="b" disabled="{{true}}">Shanghai&lt;/s-button>\n                &lt;s-button value="c">Beijing&lt;/s-button>\n                &lt;s-button value="d">Chengdu&lt;/s-button>\n            &lt;/s-group>\n        &lt;/div>\n        &lt;div style="margin-top: 16px;">\n            &lt;s-group defaultValue="a" on-change="handleChange" disabled="{{true}}" name="button3">\n                &lt;s-button value="a">Hangzhou&lt;/s-button>\n                &lt;s-button value="b">Shanghai&lt;/s-button>\n                &lt;s-button value="c">Beijing&lt;/s-button>\n                &lt;s-button value="d">Chengdu&lt;/s-button>\n            &lt;/s-group>\n        &lt;/div>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Radio from \'santd/radio\';\n\nexport default {\n    components: {\n        \'s-radio\': Radio,\n        \'s-group\': Radio.Group,\n        \'s-button\': Radio.Button\n    },\n    handleChange(e) {\n        console.log(&#96;radio checked:&#36;&#123;e.target.value}&#96;);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="按钮样式"><span>按钮样式</span><a href="#按钮样式" class="anchor">#</a></h4><p>按钮样式的单选组合。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-radio":l.a,"s-group":l.a.Group,"s-button":l.a.Button},handleChange(t){console.log("radio checked:"+t.target.value)},template:'<div><div><s-group defaultValue="a" on-change="handleChange" name="button1"><s-button value="a">Hangzhou</s-button><s-button value="b">Shanghai</s-button><s-button value="c">Beijing</s-button><s-button value="d">Chengdu</s-button></s-group></div><div style="margin-top: 16px;"><s-group defaultValue="a" on-change="handleChange" name="button2"><s-button value="a">Hangzhou</s-button><s-button value="b" disabled="{{true}}">Shanghai</s-button><s-button value="c">Beijing</s-button><s-button value="d">Chengdu</s-button></s-group></div><div style="margin-top: 16px;"><s-group defaultValue="a" on-change="handleChange" disabled="{{true}}" name="button3"><s-button value="a">Hangzhou</s-button><s-button value="b">Shanghai</s-button><s-button value="c">Beijing</s-button><s-button value="d">Chengdu</s-button></s-group></div></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789399797"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},x={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;div>\n            &lt;s-group defaultValue="a" buttonStyle="solid" name="button1">\n                &lt;s-button value="a">Hangzhou&lt;/s-button>\n                &lt;s-button value="b">Shanghai&lt;/s-button>\n                &lt;s-button value="c">Beijing&lt;/s-button>\n                &lt;s-button value="d">Chengdu&lt;/s-button>\n            &lt;/s-group>\n        &lt;/div>\n        &lt;div style="margin-top: 16px;">\n            &lt;s-group defaultValue="a" buttonStyle="solid" name="button2">\n                &lt;s-button value="a">Hangzhou&lt;/s-button>\n                &lt;s-button value="b" disabled="{{true}}">Shanghai&lt;/s-button>\n                &lt;s-button value="c">Beijing&lt;/s-button>\n                &lt;s-button value="d">Chengdu&lt;/s-button>\n            &lt;/s-group>\n        &lt;/div>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Radio from \'santd/radio\';\n\nexport default {\n    components: {\n        \'s-radio\': Radio,\n        \'s-group\': Radio.Group,\n        \'s-button\': Radio.Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="填底的按钮样式"><span>填底的按钮样式</span><a href="#填底的按钮样式" class="anchor">#</a></h4><p>实色填底的单选按钮样式。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-radio":l.a,"s-group":l.a.Group,"s-button":l.a.Button},template:'<div><div><s-group defaultValue="a" buttonStyle="solid" name="button1"><s-button value="a">Hangzhou</s-button><s-button value="b">Shanghai</s-button><s-button value="c">Beijing</s-button><s-button value="d">Chengdu</s-button></s-group></div><div style="margin-top: 16px;"><s-group defaultValue="a" buttonStyle="solid" name="button2"><s-button value="a">Hangzhou</s-button><s-button value="b" disabled="{{true}}">Shanghai</s-button><s-button value="c">Beijing</s-button><s-button value="d">Chengdu</s-button></s-group></div></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789399789"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},w={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;div>\n            &lt;s-group defaultValue="a" size="large" name="group1">\n                &lt;s-button value="a">Hangzhou&lt;/s-button>\n                &lt;s-button value="b">Shanghai&lt;/s-button>\n                &lt;s-button value="c">Beijing&lt;/s-button>\n                &lt;s-button value="d">Chengdu&lt;/s-button>\n            &lt;/s-group>\n        &lt;/div>\n        &lt;div style="margin-top: 16px;">\n            &lt;s-group defaultValue="a" name="group2">\n                &lt;s-button value="a">Hangzhou&lt;/s-button>\n                &lt;s-button value="b">Shanghai&lt;/s-button>\n                &lt;s-button value="c">Beijing&lt;/s-button>\n                &lt;s-button value="d">Chengdu&lt;/s-button>\n            &lt;/s-group>\n        &lt;/div>\n        &lt;div style="margin-top: 16px;">\n            &lt;s-group defaultValue="a" size="small" name="group3">\n                &lt;s-button value="a">Hangzhou&lt;/s-button>\n                &lt;s-button value="b">Shanghai&lt;/s-button>\n                &lt;s-button value="c">Beijing&lt;/s-button>\n                &lt;s-button value="d">Chengdu&lt;/s-button>\n            &lt;/s-group>\n        &lt;/div>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Radio from \'santd/radio\';\n\nexport default {\n    components: {\n        \'s-radio\': Radio,\n        \'s-group\': Radio.Group,\n        \'s-button\': Radio.Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="大小"><span>大小</span><a href="#大小" class="anchor">#</a></h4><p>大中小三种组合，可以和表单输入框进行对应配合。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-radio":l.a,"s-group":l.a.Group,"s-button":l.a.Button},template:'<div><div><s-group defaultValue="a" size="large" name="group1"><s-button value="a">Hangzhou</s-button><s-button value="b">Shanghai</s-button><s-button value="c">Beijing</s-button><s-button value="d">Chengdu</s-button></s-group></div><div style="margin-top: 16px;"><s-group defaultValue="a" name="group2"><s-button value="a">Hangzhou</s-button><s-button value="b">Shanghai</s-button><s-button value="c">Beijing</s-button><s-button value="d">Chengdu</s-button></s-group></div><div style="margin-top: 16px;"><s-group defaultValue="a" size="small" name="group3"><s-button value="a">Hangzhou</s-button><s-button value="b">Shanghai</s-button><s-button value="c">Beijing</s-button><s-button value="d">Chengdu</s-button></s-group></div></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789399779"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};a.default=o.a.defineComponent({components:{desc:d,basic:i,disabled:r,group:c,vertical:g,groupwithname:h,groupoptions:v,button:m,buttonsolid:x,buttonsize:w,readme:s},template:"\n        <div>\n            <desc/>\n            <basic/>\n            <disabled/>\n            <vertical/>\n            <group/>\n            <groupoptions/>\n            <groupwithname/>\n            <button/>\n            <buttonsolid/>\n            <buttonsize/>\n            <readme/>\n        </div>\n    "})}}]);