(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{580:function(e,t,n){"use strict";n.r(t);var d=n(0),s=n.n(d),o={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><h3 id="tree组件"><span>tree组件</span><a href="#tree组件" class="anchor">#</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>autoExpandParent</td><td>是否自动展开父节点</td><td>boolean</td><td>true</td></tr><tr><td>blockNode</td><td>是否节点占据一行</td><td>boolean</td><td>false</td></tr><tr><td>checkable</td><td>节点前添加 Checkbox 复选框</td><td>boolean</td><td>false</td></tr><tr><td>checkedKeys</td><td>(受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点key，则子节点自动选中；相应当子节点key都传入，父节点也自动选中。</td><td>string[] | {checked: string[], halfChecked: string[]}</td><td>[]</td></tr><tr><td>checkStrictly</td><td>checkable 状态下节点选择完全受控（父子节点选中状态不再关联）</td><td>boolean</td><td>false</td></tr><tr><td>defaultCheckedKeys</td><td>默认选中复选框的树节点</td><td>string[]</td><td>[]</td></tr><tr><td>defaultExpandAll</td><td>默认展开所有树节点</td><td>boolean</td><td>false</td></tr><tr><td>defaultExpandedKeys</td><td>默认展开指定的树节点</td><td>string[]</td><td>[]</td></tr><tr><td>defaultSelectedKeys</td><td>默认选中的树节点</td><td>string[]</td><td>[]</td></tr><tr><td>disabled</td><td>将树禁用</td><td>boolean</td><td>false</td></tr><tr><td>expandedKeys</td><td>（受控）展开指定的树节点</td><td>string[]</td><td>[]</td></tr><tr><td>loadData</td><td>异步加载数据</td><td>function(node)</td><td>-</td></tr><tr><td>multiple</td><td>支持点选多个节点（节点本身）</td><td>boolean</td><td>false</td></tr><tr><td>selectable</td><td>是否可选中</td><td>boolean</td><td>true</td></tr><tr><td>selectedKeys</td><td>（受控）设置选中的树节点</td><td>string[]</td><td>-</td></tr><tr><td>showIcon</td><td>是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式</td><td>boolean</td><td>false</td></tr><tr><td>switcherIcon</td><td>自定义树节点的展开/折叠图标</td><td>slot</td><td>-</td></tr><tr><td>showLine</td><td>是否展示连接线</td><td>boolean</td><td>false</td></tr><tr><td>on-load</td><td>节点加载完毕时触发</td><td>function({loadedKeys, info: {event, node}})</td><td>-</td></tr><tr><td>on-check</td><td>点击复选框触发</td><td>function({checkedKeys, info: {checked, checkedKeys, node, event, nativeEvent, halfCheckedKeys}})</td><td>-</td></tr><tr><td>on-expand</td><td>展开/收起节点时触发</td><td>function({expandedKeys, info: {expanded, node}})</td><td>-</td></tr><tr><td>on-select</td><td>点击树节点触发</td><td>function({selectedKeys, info: {selected, selectedKeys, node, event}})</td><td>-</td></tr><tr><td>treeData</td><td>节点的配置描述, 具体项与TreeNode props一致，可见下表</td><td>array</td><td>--</td></tr></tbody></table><h3 id="treenode-props"><span>TreeNode props</span><a href="#treenode-props" class="anchor">#</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>checkable</td><td>当树为 checkable 时，设置独立节点是否展示 Checkbox</td><td>boolean</td><td>-</td></tr><tr><td>disableCheckbox</td><td>禁掉 checkbox</td><td>boolean</td><td>false</td></tr><tr><td>disabled</td><td>禁掉响应</td><td>boolean</td><td>false</td></tr><tr><td>icon</td><td>自定义图标,可接收组件</td><td>slot</td><td>-</td></tr><tr><td>isLeaf</td><td>设置为叶子节点(设置了loadData时有效)</td><td>boolean</td><td>false</td></tr><tr><td>key</td><td><code>必填</code><br>被树的 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys 属性所用。注意：整个树范围内的所有节点的 key 值不能重复！</td><td>string</td><td>内部计算出的节点位置</td></tr><tr><td>selectable</td><td>设置节点是否可被选中</td><td>boolean</td><td>true</td></tr><tr><td>title</td><td><code>必填</code><br>标题</td><td>string | slot</td><td></td></tr></tbody></table><h3 id="directorytree-props"><span>DirectoryTree props</span><a href="#directorytree-props" class="anchor">#</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>expandAction</td><td>目录展开逻辑，可选 <code>false</code> &#39;click&#39;</td><td>string</td><td>&#39;click&#39;</td></tr></tbody></table></section>'},a={template:'<section class="markdown"><h1 id="tree-树形控件"><span>Tree 树形控件</span><a href="#tree-树形控件" class="anchor">#</a></h1><p>多层次的结构列表。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用 树控件 可以完整展现其中的层级关系，并具有展开收起选择等交互功能。</p></section>'},l=n(44),r={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-tree\n        checkable="{{true}}"\n        defaultExpandedKeys="{{[\'0-0-0\', \'0-0-1\']}}"\n        defaultSelectedKeys="{{[\'0-0-0\', \'0-0-1\']}}"\n        defaultCheckedKeys="{{[\'0-0-0\', \'0-0-1\']}}"\n        on-select="onSelect"\n        on-check="onCheck"\n    >\n        &lt;s-tree-node title="parent 1" key="0-0">\n            &lt;s-tree-node title="parent 1-0" key="0-0-0" disabled="{{true}}">\n                &lt;s-tree-node title="leaf" key="0-0-0-0" disableCheckbox="{{true}}"/>\n                &lt;s-tree-node title="leaf" key="0-0-0-1"/>\n            &lt;/s-tree-node>\n            &lt;s-tree-node title="parent 1-1" key="0-0-1">\n                &lt;s-tree-node key="0-0-1-0">\n                    &lt;span slot="title" style="color:#1890ff">sss&lt;/span>\n                &lt;/s-tree-node>\n            &lt;/s-tree-node>\n        &lt;/s-tree-node>\n    &lt;/s-tree>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport Tree from \'santd/tree\';\nexport default {\n    components: {\n        \'s-tree\': Tree,\n        \'s-tree-node\': Tree.TreeNode\n    },\n    onSelect({selectedKeys, info}) {\n        console.log(\'selected\', selectedKeys, info);\n    },\n    onCheck({checkedKeys, info}) {\n        console.log(\'onCheck\', checkedKeys, info);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>最简单的用法，展示可勾选，可选中，禁用，默认展开等功能。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-tree":l.a,"s-tree-node":l.a.TreeNode},onSelect({selectedKeys:e,info:t}){console.log("selected",e,t)},onCheck({checkedKeys:e,info:t}){console.log("onCheck",e,t)},template:'<div><s-tree checkable="{{true}}" defaultExpandedKeys="{{[\'0-0-0\', \'0-0-1\']}}" defaultSelectedKeys="{{[\'0-0-0\', \'0-0-1\']}}" defaultCheckedKeys="{{[\'0-0-0\', \'0-0-1\']}}" on-select="onSelect" on-check="onCheck"><s-tree-node title="parent 1" key="0-0"><s-tree-node title="parent 1-0" key="0-0-0" disabled="{{true}}"><s-tree-node title="leaf" key="0-0-0-0" disableCheckbox="{{true}}"></s-tree-node><s-tree-node title="leaf" key="0-0-0-1"></s-tree-node></s-tree-node><s-tree-node title="parent 1-1" key="0-0-1"><s-tree-node key="0-0-1-0"><span slot="title" style="color:#1890ff">sss</span></s-tree-node></s-tree-node></s-tree-node></s-tree></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789389381"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},c={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n  &lt;div>\n    &lt;s-tree\n        data=\"{{data}}\"\n        checkable=\"{{true}}\"\n        defaultExpandedKeys=\"{{defexpandedKeys}}\"\n        defaultCheckedKeys=\"{{checkedKeys}}\"\n        on-select=\"onSelect\"\n        on-check=\"onCheck\"\n        on-expand=\"onExpand\"\n        expandedKeys=\"{{expandedKeys}}\"\n        multiple\n    >&lt;/s-tree>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport Tree from 'santd/tree';\nexport default {\n    components: {\n        's-tree': Tree,\n        's-tree-item': Tree.TreeItem\n    },\n    initData() {\n        return {\n            data: '',\n            expandedKeys: []\n        }\n    },\n    created() {\n        let newData = [\n                {\n                    title: 'parent 1',\n                    key: 'lavel01',\n                    children: [\n                        {\n                            title: 'parent 1-1',\n                            key: 'lavel01-1',\n                            children: [\n                                {\n                                    title: 'leaf 1-1-1',\n                                    key: 'lavel01-1-1'\n                                },\n                                {\n                                    title: 'parent 1-1-2',\n                                    key: 'lavel01-1-2',\n                                    children: [\n                                        {\n                                            title: 'leaf 1-1-2-0',\n                                            key: 'lavel01-1-2-0-1',\n                                            disabled: true\n                                        }\n                                    ]\n                                }\n                            ]\n                        },\n                        {\n                            title: 'parent 1-2',\n                            key: 'lavel01-2',\n                            children: [\n                                {\n                                    title: 'leaf 1-2-1',\n                                    key: 'lavel01-2-1'\n                                },\n                                {\n                                    title: 'leaf 1-2-2',\n                                    key: 'lavel01-2-2'\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ];\n        let defaultExpandedKeys = ['lavel01-1-2', 'lavel01-2'];\n        setTimeout(() => {\n            this.data.set('defexpandedKeys', defaultExpandedKeys);\n            this.data.set('expandedKeys', ['lavel01-1', 'lavel01-2']);\n            this.data.set('checkedKeys',['lavel01-1']);\n            this.data.set('data', newData);\n        }, 300);\n    },\n    onSelect(key) {\n        console.log('selectKey: ', key);\n    },\n    onCheck(key) {\n        console.log('checked: ', key);\n    },\n    onExpand(key) {\n        console.log('expandKey: ', key);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="受控操作示例"><span>受控操作示例</span><a href="#受控操作示例" class="anchor">#</a></h4><p>tree受控操作示例</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-tree":l.a,"s-tree-item":l.a.TreeItem},initData:()=>({data:"",expandedKeys:[]}),created(){let e=[{title:"parent 1",key:"lavel01",children:[{title:"parent 1-1",key:"lavel01-1",children:[{title:"leaf 1-1-1",key:"lavel01-1-1"},{title:"parent 1-1-2",key:"lavel01-1-2",children:[{title:"leaf 1-1-2-0",key:"lavel01-1-2-0-1",disabled:!0}]}]},{title:"parent 1-2",key:"lavel01-2",children:[{title:"leaf 1-2-1",key:"lavel01-2-1"},{title:"leaf 1-2-2",key:"lavel01-2-2"}]}]}],t=["lavel01-1-2","lavel01-2"];setTimeout(()=>{this.data.set("defexpandedKeys",t),this.data.set("expandedKeys",["lavel01-1","lavel01-2"]),this.data.set("checkedKeys",["lavel01-1"]),this.data.set("data",e)},300)},onSelect(e){console.log("selectKey: ",e)},onCheck(e){console.log("checked: ",e)},onExpand(e){console.log("expandKey: ",e)},template:'<div><s-tree data="{{data}}" checkable="{{true}}" defaultExpandedKeys="{{defexpandedKeys}}" defaultCheckedKeys="{{checkedKeys}}" on-select="onSelect" on-check="onCheck" on-expand="onExpand" expandedKeys="{{expandedKeys}}" multiple=""></s-tree></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789389372"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},i=n(3),p={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-tree\n        showIcon="{{true}}"\n        defaultExpandAll="{{true}}"\n        defaultSelectedKeys="{{[\'0-0-0\']}}"\n    >\n        &lt;s-icon type="down" slot="switcherIcon" />\n        &lt;s-tree-node title="parent 1" key="0-0">\n            &lt;s-icon slot="icon" type="smile-o" />\n            &lt;s-tree-node title="leaf" key="0-0-0">\n                &lt;s-icon slot="icon" type="meh-o" />\n            &lt;/s-tree-node>\n            &lt;s-tree-node title="leaf" key="0-0-1">\n                &lt;s-icon slot="icon" type="{{selected ? \'frown\' : \'frown-o\'}}" />\n            &lt;/s-tree-node>\n        &lt;/s-tree-node>\n    &lt;/s-tree>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport Tree from \'santd/tree\';\nimport Icon from \'santd/icon\';\n\nexport default {\n    components: {\n        \'s-tree\': Tree,\n        \'s-tree-node\': Tree.TreeNode,\n        \'s-icon\': Icon\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="自定义图标"><span>自定义图标</span><a href="#自定义图标" class="anchor">#</a></h4><p>可以针对不同的节点定制图标。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-tree":l.a,"s-tree-node":l.a.TreeNode,"s-icon":i.a},template:'<div><s-tree showIcon="{{true}}" defaultExpandAll="{{true}}" defaultSelectedKeys="{{[\'0-0-0\']}}"><s-icon type="down" slot="switcherIcon"></s-icon><s-tree-node title="parent 1" key="0-0"><s-icon slot="icon" type="smile-o"></s-icon><s-tree-node title="leaf" key="0-0-0"><s-icon slot="icon" type="meh-o"></s-icon></s-tree-node><s-tree-node title="leaf" key="0-0-1"><s-icon slot="icon" type="{{selected ? \'frown\' : \'frown-o\'}}"></s-icon></s-tree-node></s-tree-node></s-tree></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789389367"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},h={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-tree\n        showLine="{{true}}"\n        defaultExpandedKeys="{{[\'0-0-0\']}}"\n        on-select="onSelect"\n    >\n        &lt;s-tree-node title="parent 1" key="0-0">\n            &lt;s-tree-node title="parent 1-0" key="0-0-0">\n                &lt;s-tree-node title="leaf" key="0-0-0-0" />\n                &lt;s-tree-node title="leaf" key="0-0-0-1" />\n                &lt;s-tree-node title="leaf" key="0-0-0-2" />\n            &lt;/s-tree-node>\n            &lt;s-tree-node title="parent 1-1" key="0-0-1">\n                &lt;s-tree-node title="leaf" key="0-0-1-0" />\n            &lt;/s-tree-node>\n            &lt;s-tree-node title="parent 1-2" key="0-0-2">\n                &lt;s-tree-node title="leaf" key="0-0-2-0" />\n                &lt;s-tree-node title="leaf" key="0-0-2-1" />\n            &lt;/s-tree-node>\n        &lt;/s-tree-node>\n    &lt;/s-tree>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport Tree from \'santd/tree\';\nimport Icon from \'santd/icon\';\n\nexport default {\n    components: {\n        \'s-tree\': Tree,\n        \'s-tree-node\': Tree.TreeNode,\n        \'s-icon\': Icon\n    },\n    onSelect({selectedKeys, info}) {\n        console.log(\'selected\', selectedKeys, info);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="链接线"><span>链接线</span><a href="#链接线" class="anchor">#</a></h4><p>带连接线的树。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-tree":l.a,"s-tree-node":l.a.TreeNode,"s-icon":i.a},onSelect({selectedKeys:e,info:t}){console.log("selected",e,t)},template:'<div><s-tree showLine="{{true}}" defaultExpandedKeys="{{[\'0-0-0\']}}" on-select="onSelect"><s-tree-node title="parent 1" key="0-0"><s-tree-node title="parent 1-0" key="0-0-0"><s-tree-node title="leaf" key="0-0-0-0"></s-tree-node><s-tree-node title="leaf" key="0-0-0-1"></s-tree-node><s-tree-node title="leaf" key="0-0-0-2"></s-tree-node></s-tree-node><s-tree-node title="parent 1-1" key="0-0-1"><s-tree-node title="leaf" key="0-0-1-0"></s-tree-node></s-tree-node><s-tree-node title="parent 1-2" key="0-0-2"><s-tree-node title="leaf" key="0-0-2-0"></s-tree-node><s-tree-node title="leaf" key="0-0-2-1"></s-tree-node></s-tree-node></s-tree-node></s-tree></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789389377"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},y={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-tree\n        showLine="{{true}}"\n        defaultExpandedKeys="{{[\'0-0-0\']}}"\n        on-select="onSelect"\n    >\n        &lt;s-icon type="{{expanded ? \'minus\' : \'plus\'}}-square" slot="switcherIcon" />\n        &lt;s-tree-node title="parent 1" key="0-0">\n          &lt;s-tree-node title="parent 1-0" key="0-0-0">\n            &lt;s-tree-node title="leaf" key="0-0-0-0" />\n            &lt;s-tree-node title="leaf" key="0-0-0-1" />\n            &lt;s-tree-node title="leaf" key="0-0-0-2" />\n          &lt;/s-tree-node>\n          &lt;s-tree-node title="parent 1-1" key="0-0-1">\n            &lt;s-tree-node title="leaf" key="0-0-1-0" />\n          &lt;/s-tree-node>\n          &lt;s-tree-node title="parent 1-2" key="0-0-2">\n            &lt;s-tree-node title="leaf" key="0-0-2-0" />\n            &lt;s-tree-node title="leaf" key="0-0-2-1" />\n          &lt;/s-tree-node>\n    &lt;/s-tree>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport Tree from \'santd/tree\';\nimport Icon from \'santd/icon\';\n\nexport default {\n    components: {\n        \'s-tree\': Tree,\n        \'s-tree-node\': Tree.TreeNode,\n        \'s-icon\': Icon\n    },\n    onSelect({selectedKeys, info}) {\n        console.log(\'selected\', selectedKeys, info);\n    },\n    onCheck({checkedKeys, info}) {\n        console.log(\'onCheck\', checkedKeys, info);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="自定义展开折叠图标"><span>自定义展开/折叠图标</span><a href="#自定义展开折叠图标" class="anchor">#</a></h4><p>自定义展开/折叠图标</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-tree":l.a,"s-tree-node":l.a.TreeNode,"s-icon":i.a},onSelect({selectedKeys:e,info:t}){console.log("selected",e,t)},onCheck({checkedKeys:e,info:t}){console.log("onCheck",e,t)},template:'<div><s-tree showLine="{{true}}" defaultExpandedKeys="{{[\'0-0-0\']}}" on-select="onSelect"><s-icon type="{{expanded ? \'minus\' : \'plus\'}}-square" slot="switcherIcon"></s-icon><s-tree-node title="parent 1" key="0-0"><s-tree-node title="parent 1-0" key="0-0-0"><s-tree-node title="leaf" key="0-0-0-0"></s-tree-node><s-tree-node title="leaf" key="0-0-0-1"></s-tree-node><s-tree-node title="leaf" key="0-0-0-2"></s-tree-node></s-tree-node><s-tree-node title="parent 1-1" key="0-0-1"><s-tree-node title="leaf" key="0-0-1-0"></s-tree-node></s-tree-node><s-tree-node title="parent 1-2" key="0-0-2"><s-tree-node title="leaf" key="0-0-2-0"></s-tree-node><s-tree-node title="leaf" key="0-0-2-1"></s-tree-node></s-tree-node></s-tree-node></s-tree></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789389363"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},x={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n  &lt;div>\n    &lt;s-tree\n        treeData=\"{{data}}\"\n        loadData=\"{{onLoadData}}\"\n    >&lt;/s-tree>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport Tree from 'santd/tree';\n\nexport default {\n    components: {\n        's-tree': Tree,\n        's-tree-item': Tree.TreeItem\n    },\n    initData() {\n        return {\n            data: [\n                {\n                    title: 'Expand to load',\n                    key: '0'\n                },\n                {\n                    title: 'Expand to load',\n                    key: '1'\n                },\n                {\n                    title: 'Tree Node',\n                    key: '3',\n                    isLeaf: true\n                }\n            ],\n            onLoadData(treenode) {\n                new Promise(resolve => {\n                    if (treenode.data.get('treeData')) {\n                        resolve();\n                        return;\n                    }\n                    setTimeout(() => {\n                        treenode.data.set('treeData', [{title: 'Child Node', key: Math.random() + '-0'}]);\n                        resolve();\n                    }, 1000)\n                });\n            }\n        }\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="异步数据加载"><span>异步数据加载</span><a href="#异步数据加载" class="anchor">#</a></h4><p>点击展开节点，动态加载数据。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-tree":l.a,"s-tree-item":l.a.TreeItem},initData:()=>({data:[{title:"Expand to load",key:"0"},{title:"Expand to load",key:"1"},{title:"Tree Node",key:"3",isLeaf:!0}],onLoadData(e){new Promise(t=>{e.data.get("treeData")?t():setTimeout(()=>{e.data.set("treeData",[{title:"Child Node",key:Math.random()+"-0"}]),t()},1e3)})}}),template:'<div><s-tree treeData="{{data}}" loadData="{{onLoadData}}"></s-tree></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789389359"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},f={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-tree\n        checkable="{{true}}"\n        expandedKeys="{{expandedKeys}}"\n        autoExpandParent="{{autoExpandParent}}"\n        checkedKeys="{{checkedKeys}}"\n        selectedKeys="{{selectedKeys}}"\n        on-select="onSelect"\n        on-expand="onExpand"\n        on-check="onCheck"\n    >\n        &lt;s-tree-node title="0-0" key="0-0">\n            &lt;s-tree-node title="0-0-0" key="0-0-0">\n                &lt;s-tree-node title="0-0-0-0" key="0-0-0-0" />\n                &lt;s-tree-node title="0-0-0-1" key="0-0-0-1" />\n                &lt;s-tree-node title="0-0-0-2" key="0-0-0-2" />\n            &lt;/s-tree-node>\n            &lt;s-tree-node title="0-0-1" key="0-0-1">\n                &lt;s-tree-node title="0-0-1-0" key="0-0-1-0" />\n                &lt;s-tree-node title="0-0-1-1" key="0-0-1-1" />\n                &lt;s-tree-node title="0-0-1-2" key="0-0-1-2" />\n            &lt;/s-tree-node>\n            &lt;s-tree-node title="0-0-2" key="0-0-2" />\n        &lt;/s-tree-node>\n        &lt;s-tree-node title="0-1" key="0-1">\n            &lt;s-tree-node title="0-1-0-0" key="0-1-0-0" />\n            &lt;s-tree-node title="0-1-0-1" key="0-1-0-1" />\n            &lt;s-tree-node title="0-1-0-2" key="0-1-0-2" />\n        &lt;/s-tree-node>\n        &lt;s-tree-node title="0-2" key="0-2">\n        &lt;/s-tree-node>\n    &lt;/s-tree>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport san from \'san\';\nimport Tree from \'santd/tree\';\n\n\nexport default {\n    initData() {\n        return {\n            expandedKeys: [\'0-0-0\', \'0-0-1\'],\n            autoExpandParent: true,\n            checkedKeys: [\'0-0-0\'],\n            selectedKeys: []\n        }\n    },\n    components: {\n        \'s-tree\': Tree,\n        \'s-tree-node\': Tree.TreeNode\n    },\n    onSelect({selectedKeys, info}) {\n        console.log(\'onSelect\', info);\n        this.data.set(\'selectedKeys\', selectedKeys);\n    },\n    onExpand({expandedKeys, info}) {\n        console.log(\'onExpand\', expandedKeys);\n        this.data.set(\'expandedKeys\', expandedKeys);\n        this.data.set(\'autoExpandParent\', false);\n    },\n    onCheck({checkedKeys, info}) {\n        console.log(\'onCheck\', checkedKeys, info);\n        this.data.set(\'checkedKeys\', checkedKeys);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="受控操作示例"><span>受控操作示例</span><a href="#受控操作示例" class="anchor">#</a></h4><p>受控操作示例</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{initData:()=>({expandedKeys:["0-0-0","0-0-1"],autoExpandParent:!0,checkedKeys:["0-0-0"],selectedKeys:[]}),components:{"s-tree":l.a,"s-tree-node":l.a.TreeNode},onSelect({selectedKeys:e,info:t}){console.log("onSelect",t),this.data.set("selectedKeys",e)},onExpand({expandedKeys:e,info:t}){console.log("onExpand",e),this.data.set("expandedKeys",e),this.data.set("autoExpandParent",!1)},onCheck({checkedKeys:e,info:t}){console.log("onCheck",e,t),this.data.set("checkedKeys",e)},template:'<div><s-tree checkable="{{true}}" expandedKeys="{{expandedKeys}}" autoExpandParent="{{autoExpandParent}}" checkedKeys="{{checkedKeys}}" selectedKeys="{{selectedKeys}}" on-select="onSelect" on-expand="onExpand" on-check="onCheck"><s-tree-node title="0-0" key="0-0"><s-tree-node title="0-0-0" key="0-0-0"><s-tree-node title="0-0-0-0" key="0-0-0-0"></s-tree-node><s-tree-node title="0-0-0-1" key="0-0-0-1"></s-tree-node><s-tree-node title="0-0-0-2" key="0-0-0-2"></s-tree-node></s-tree-node><s-tree-node title="0-0-1" key="0-0-1"><s-tree-node title="0-0-1-0" key="0-0-1-0"></s-tree-node><s-tree-node title="0-0-1-1" key="0-0-1-1"></s-tree-node><s-tree-node title="0-0-1-2" key="0-0-1-2"></s-tree-node></s-tree-node><s-tree-node title="0-0-2" key="0-0-2"></s-tree-node></s-tree-node><s-tree-node title="0-1" key="0-1"><s-tree-node title="0-1-0-0" key="0-1-0-0"></s-tree-node><s-tree-node title="0-1-0-1" key="0-1-0-1"></s-tree-node><s-tree-node title="0-1-0-2" key="0-1-0-2"></s-tree-node></s-tree-node><s-tree-node title="0-2" key="0-2"></s-tree-node></s-tree></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789389354"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},k=n(27);const m=[],g=(e,t,n)=>{const d=t||"0",s=n||m,o=[];for(let e=0;e<3;e++){const t=`${d}-${e}`;s.push({title:t,key:t}),e<2&&o.push(t)}if(e<0)return s;const a=e-1;o.forEach((e,t)=>(s[t].children=[],g(a,e,s[t].children)))};g(1);const u=[],K=e=>{for(let t=0;t<e.length;t++){const n=e[t],d=n.key;u.push({key:d,title:d}),n.children&&K(n.children)}};K(m);const w=(e,t)=>{let n;for(let d=0;d<t.length;d++){const s=t[d];s.children&&(s.children.some(t=>t.key===e)?n=s.key:w(e,s.children)&&(n=w(e,s.children)))}return n};var E={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n  &lt;div>\n    &lt;s-input-search\n        on-change=\"onInputChange\"\n        placeholder=\"input search\"\n        style=\"margin-bottom: 8px;\"\n    >&lt;/s-input-search>\n    &lt;s-tree\n        autoExpandParent=\"{{autoExpand}}\"\n        treeData=\"{{treeData}}\"\n        expandedKeys=\"{{expandedKeys}}\"\n        searchValue=\"{{searchValue}}\"\n    >\n        &lt;template slot=\"title\">\n            &lt;span s-if=\"isTitles(title, searchValue)\">\n                {{beforeStr(title, searchValue)}}\n                &lt;span style=\"color: #f50\">{{searchValue}}&lt;/span>\n                {{afterStr(title, searchValue)}}\n            &lt;/span>\n            &lt;span s-else>{{title}}&lt;/span>\n        &lt;/template>\n    &lt;/s-tree>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport san from 'san';\nimport Tree from 'santd/tree';\nimport Input from 'santd/input';\n\nconst x = 3;\nconst y = 2;\nconst z = 1;\nconst gData = [];\n\nconst generateData = (_level, _preKey, _tns) => {\n  const preKey = _preKey || '0';\n  const tns = _tns || gData;\n\n  const children = [];\n  for (let i = 0; i &lt; x; i++) {\n    const key = &#96;&#36;&#123;preKey}-&#36;&#123;i}&#96;;\n    tns.push({ title: key, key });\n    if (i &lt; y) {\n      children.push(key);\n    }\n  }\n  if (_level &lt; 0) {\n    return tns;\n  }\n  const level = _level - 1;\n  children.forEach((key, index) => {\n    tns[index].children = [];\n    return generateData(level, key, tns[index].children);\n  });\n};\ngenerateData(z);\n\nconst dataList = [];\nconst generateList = (data) => {\n  for (let i = 0; i &lt; data.length; i++) {\n    const node = data[i];\n    const key = node.key;\n    dataList.push({ key, title: key });\n    if (node.children) {\n      generateList(node.children);\n    }\n  }\n};\ngenerateList(gData);\n\nconst getParentKey = (key, tree) => {\n  let parentKey\n  for (let i = 0; i &lt; tree.length; i++) {\n    const node = tree[i]\n    if (node.children) {\n      if (node.children.some(item => item.key === key)) {\n        parentKey = node.key\n      } else if (getParentKey(key, node.children)) {\n        parentKey = getParentKey(key, node.children)\n      }\n    }\n  }\n  return parentKey;\n}\n\nexport default {\n    components: {\n        's-tree': Tree,\n        's-tree-node': Tree.TreeNode,\n        's-input-search': Input.Search\n    },\n    initData() {\n        return {\n            autoExpand: true,\n            expandedKeys: [],\n            searchValue: '',\n            treeData: gData\n        }\n    },\n    isTitles(title, searchValue) {\n        return searchValue ? title.indexOf(searchValue) > -1 : false;\n    },\n    beforeStr(title, searchValue) {\n        return searchValue ? title.substr(0, title.indexOf(searchValue)) : '';\n    },\n    afterStr(title, searchValue) {\n        return searchValue ? title.substr(title.indexOf(searchValue) + searchValue.length) : '';\n    },\n    onInputChange (value) {\n        const expandedKeys = dataList.map((item) => {\n            if (item.key.indexOf(value) > -1) {\n                return getParentKey(item.key, gData)\n            }\n            return null;\n        }).filter((item, i, self) => item && self.indexOf(item) === i);\n        this.data.set('expandedKeys', expandedKeys);\n        this.data.set('searchValue', value);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="可搜索"><span>可搜索</span><a href="#可搜索" class="anchor">#</a></h4><p>可搜索的树。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-tree":l.a,"s-tree-node":l.a.TreeNode,"s-input-search":k.a.Search},initData:()=>({autoExpand:!0,expandedKeys:[],searchValue:"",treeData:m}),isTitles:(e,t)=>!!t&&e.indexOf(t)>-1,beforeStr:(e,t)=>t?e.substr(0,e.indexOf(t)):"",afterStr:(e,t)=>t?e.substr(e.indexOf(t)+t.length):"",onInputChange(e){const t=u.map(t=>t.key.indexOf(e)>-1?w(t.key,m):null).filter((e,t,n)=>e&&n.indexOf(e)===t);this.data.set("expandedKeys",t),this.data.set("searchValue",e)},template:'<div><s-input-search on-change="onInputChange" placeholder="input search" style="margin-bottom: 8px;"></s-input-search><s-tree autoExpandParent="{{autoExpand}}" treeData="{{treeData}}" expandedKeys="{{expandedKeys}}" searchValue="{{searchValue}}"><template slot="title"><span s-if="isTitles(title, searchValue)">{{beforeStr(title, searchValue)}}<span style="color: #f50">{{searchValue}}</span>{{afterStr(title, searchValue)}}</span><span s-else="">{{title}}</span></template></s-tree></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789389350"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},v={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-tree-directory\n        multiple="{{true}}"\n        defaultExpandAll="{{true}}"\n        on-select="onSelect"\n        on-expand="onExpand"\n    >\n        &lt;s-tree-node title="parent 0" key="0-0">\n            &lt;s-icon type="{{isLeaf ? \'file\' : expanded ? \'folder-open\' : \'folder\'}}" slot="icon" />\n            &lt;s-tree-node title="leaf 0-0" key="0-0-0">\n                &lt;s-icon type="{{isLeaf ? \'file\' : expanded ? \'folder-open\' : \'folder\'}}" slot="icon" />\n            &lt;/s-tree-node>\n            &lt;s-tree-node title="leaf 0-1" key="0-0-1">\n                &lt;s-icon type="{{isLeaf ? \'file\' : expanded ? \'folder-open\' : \'folder\'}}" slot="icon" />\n            &lt;/s-tree-node>\n        &lt;/s-tree-node>\n        &lt;s-tree-node title="parent 1" key="0-1">\n            &lt;s-icon type="{{isLeaf ? \'file\' : expanded ? \'folder-open\' : \'folder\'}}" slot="icon" />\n            &lt;s-tree-node title="leaf 1-0" key="0-1-0">\n                &lt;s-icon type="{{isLeaf ? \'file\' : expanded ? \'folder-open\' : \'folder\'}}" slot="icon" />\n            &lt;/s-tree-node>\n            &lt;s-tree-node title="leaf 1-1" key="0-1-1">\n                &lt;s-icon type="{{isLeaf ? \'file\' : expanded ? \'folder-open\' : \'folder\'}}" slot="icon" />\n            &lt;/s-tree-node>\n        &lt;/s-tree-node>\n    &lt;/s-tree-directory>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport Tree from \'santd/tree\';\nimport Icon from \'santd/icon\';\n\nexport default {\n    components: {\n        \'s-tree-directory\': Tree.Directory,\n        \'s-tree-node\': Tree.TreeNode,\n        \'s-icon\': Icon\n    },\n    onSelect({selectedKeys, info}) {\n        console.log(\'Trigger slected\', selectedKeys, info);\n    },\n    onExpand() {\n        console.log(\'Trigger Expand\');\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="目录树"><span>目录树</span><a href="#目录树" class="anchor">#</a></h4><p>内置的目录树，<code>multiple</code> 模式支持 <code>ctrl(Windows)</code> / <code>command(Mac)</code> 复选。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-tree-directory":l.a.Directory,"s-tree-node":l.a.TreeNode,"s-icon":i.a},onSelect({selectedKeys:e,info:t}){console.log("Trigger slected",e,t)},onExpand(){console.log("Trigger Expand")},template:'<div><s-tree-directory multiple="{{true}}" defaultExpandAll="{{true}}" on-select="onSelect" on-expand="onExpand"><s-tree-node title="parent 0" key="0-0"><s-icon type="{{isLeaf ? \'file\' : expanded ? \'folder-open\' : \'folder\'}}" slot="icon"></s-icon><s-tree-node title="leaf 0-0" key="0-0-0"><s-icon type="{{isLeaf ? \'file\' : expanded ? \'folder-open\' : \'folder\'}}" slot="icon"></s-icon></s-tree-node><s-tree-node title="leaf 0-1" key="0-0-1"><s-icon type="{{isLeaf ? \'file\' : expanded ? \'folder-open\' : \'folder\'}}" slot="icon"></s-icon></s-tree-node></s-tree-node><s-tree-node title="parent 1" key="0-1"><s-icon type="{{isLeaf ? \'file\' : expanded ? \'folder-open\' : \'folder\'}}" slot="icon"></s-icon><s-tree-node title="leaf 1-0" key="0-1-0"><s-icon type="{{isLeaf ? \'file\' : expanded ? \'folder-open\' : \'folder\'}}" slot="icon"></s-icon></s-tree-node><s-tree-node title="leaf 1-1" key="0-1-1"><s-icon type="{{isLeaf ? \'file\' : expanded ? \'folder-open\' : \'folder\'}}" slot="icon"></s-icon></s-tree-node></s-tree-node></s-tree-directory></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789389347"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};t.default=s.a.defineComponent({components:{readme:o,desc:a,basic:r,checkbox:c,icon:p,line:h,switcher:y,async:x,control:f,search:E,directory:v},template:"\n        <div>\n            <desc/>\n            <basic/>\n            <control/>\n            <search/>\n            <icon/>\n            <async/>\n            <line/>\n            <switcher/>\n            <directory/>\n            <readme/>\n        </div>\n    "})}}]);