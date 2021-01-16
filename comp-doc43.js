(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{583:function(t,e,s){"use strict";s.r(e);var n=s(0),o=s.n(n),a={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>title 文字</td><td>string</td><td>-</td></tr><tr><td>subTitle</td><td>subTitle 文字</td><td>string</td><td>-</td></tr><tr><td>status</td><td>结果的状态,决定图标和颜色</td><td>&#39;success&#39; | &#39;error&#39; | &#39;info&#39; | &#39;warning&#39;| &#39;404&#39; | &#39;403&#39; | &#39;500&#39;</td><td>&#39;info&#39;</td></tr><tr><td>icon</td><td>自定义icon</td><td>slot</td><td>-</td></tr><tr><td>extra</td><td>操作区</td><td>slot</td><td>-</td></tr></tbody></table></section>'},c={template:'<section class="markdown"><h1 id="result-结果"><span>Result 结果</span><a href="#result-结果" class="anchor">#</a></h1><p>用于反馈一系列操作任务的处理结果。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},i=s(116),p=s(11),l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-result\n            status="success"\n            title="Successfully Purchased Cloud Server ECS!"\n            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."\n        >\n            &lt;template slot="extra">\n                &lt;s-button type="primary" key="console">Go Console&lt;/s-button>\n                &lt;s-button key="buy">Buy Again&lt;/s-button>\n            &lt;/template>\n        &lt;/s-result>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Result from \'santd/result\';\nimport Button from \'santd/button\';\n\nexport default {\n    components: {\n        \'s-result\': Result,\n        \'s-button\': Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="success"><span>Success</span><a href="#success" class="anchor">#</a></h4><p>成功的结果。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-result":i.a,"s-button":p.a},template:'<div><s-result status="success" title="Successfully Purchased Cloud Server ECS!" subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."><template slot="extra"><s-button type="primary" key="console">Go Console</s-button><s-button key="buy">Buy Again</s-button></template></s-result></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789399717"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},r={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-result\n            status="warning"\n            title="There are some problems with your operation."\n        >\n            &lt;s-button type="primary" key="console" slot="extra">Go Console&lt;/s-button>\n        &lt;/s-result>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Result from \'santd/result\';\nimport Button from \'santd/button\';\n\nexport default {\n    components: {\n        \'s-result\': Result,\n        \'s-button\': Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="warning"><span>Warning</span><a href="#warning" class="anchor">#</a></h4><p>警告类型的结果。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-result":i.a,"s-button":p.a},template:'<div><s-result status="warning" title="There are some problems with your operation."><s-button type="primary" key="console" slot="extra">Go Console</s-button></s-result></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789399701"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},d={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-result\n            status="403"\n            title="403"\n            subTitle="Sorry, you are not authorized to access this page."\n        >\n            &lt;s-button type="primary" slot="extra">Back Home&lt;/s-button>\n        &lt;/s-result>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Result from \'santd/result\';\nimport Button from \'santd/button\';\n\nexport default {\n    components: {\n        \'s-result\': Result,\n        \'s-button\': Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="_403"><span>403</span><a href="#_403" class="anchor">#</a></h4><p>你没有此页面的访问权限。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-result":i.a,"s-button":p.a},template:'<div><s-result status="403" title="403" subTitle="Sorry, you are not authorized to access this page."><s-button type="primary" slot="extra">Back Home</s-button></s-result></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789399706"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},u={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-result\n            status="404"\n            title="404"\n            subTitle="\'Sorry, the page you visited does not exist."\n        >\n            &lt;s-button type="primary" slot="extra">Back Home&lt;/s-button>\n        &lt;/s-result>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Result from \'santd/result\';\nimport Button from \'santd/button\';\n\nexport default {\n    components: {\n        \'s-result\': Result,\n        \'s-button\': Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="_404"><span>404</span><a href="#_404" class="anchor">#</a></h4><p>此页面未找到。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-result":i.a,"s-button":p.a},template:'<div><s-result status="404" title="404" subTitle="\'Sorry, the page you visited does not exist."><s-button type="primary" slot="extra">Back Home</s-button></s-result></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789399693"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},m={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-result title="Your operation has been executed">\n            &lt;s-button type="primary" key="console" slot="extra">Go Console&lt;/s-button>\n        &lt;/s-result>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Result from \'santd/result\';\nimport Button from \'santd/button\';\n\nexport default {\n    components: {\n        \'s-result\': Result,\n        \'s-button\': Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="info"><span>Info</span><a href="#info" class="anchor">#</a></h4><p>展示处理结果。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-result":i.a,"s-button":p.a},template:'<div><s-result title="Your operation has been executed"><s-button type="primary" key="console" slot="extra">Go Console</s-button></s-result></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789399687"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},h={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-result\n            status="500"\n            title="500"\n            subTitle="Sorry, the server is wrong."\n        >\n            &lt;s-button type="primary" slot="extra">Back Home&lt;/s-button>\n        &lt;/s-result>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Result from \'santd/result\';\nimport Button from \'santd/button\';\n\nexport default {\n    components: {\n        \'s-result\': Result,\n        \'s-button\': Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="_500"><span>500</span><a href="#_500" class="anchor">#</a></h4><p>服务器发生了错误。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-result":i.a,"s-button":p.a},template:'<div><s-result status="500" title="500" subTitle="Sorry, the server is wrong."><s-button type="primary" slot="extra">Back Home</s-button></s-result></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789399697"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},x=s(3),g=s(117),b={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-result\n            status="error"\n            title="Submission Failed"\n            subTitle="Please check and modify the following information before resubmitting."\n        >\n            &lt;template slot="extra">\n                &lt;s-button type="primary" key="console">Go Console&lt;/s-button>\n                &lt;s-button key="buy">Buy Again&lt;/s-button>\n            &lt;/template>\n            &lt;div class="desc">\n                &lt;s-paragraph>\n                    &lt;s-text strong style="font-size: 16px;">The content you submitted has the following error:&lt;/s-text>\n                &lt;/s-paragraph>\n                &lt;s-paragraph>\n                    &lt;s-icon style="color: red;" type="close-circle" />\n                    Your account has been frozen &lt;a>Thaw immediately &gt;&lt;/a>\n                &lt;/s-paragraph>\n                &lt;s-paragraph>\n                    &lt;s-icon style="color: red;" type="close-circle" />\n                    Your account is not yet eligible to apply &lt;a>Apply Unlock &gt;&lt;/a>\n                &lt;/s-paragraph>\n            &lt;/div>\n        &lt;/s-result>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Result from \'santd/result\';\nimport Button from \'santd/button\';\nimport Icon from \'santd/icon\';\nimport Typography from \'santd/typography\';\n\nexport default {\n    components: {\n        \'s-result\': Result,\n        \'s-paragraph\': Typography.Paragraph,\n        \'s-text\': Typography.Text,\n        \'s-icon\': Icon,\n        \'s-button\': Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="error"><span>Error</span><a href="#error" class="anchor">#</a></h4><p>复杂的错误反馈。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-result":i.a,"s-paragraph":g.a.Paragraph,"s-text":g.a.Text,"s-icon":x.a,"s-button":p.a},template:'<div><s-result status="error" title="Submission Failed" subTitle="Please check and modify the following information before resubmitting."><template slot="extra"><s-button type="primary" key="console">Go Console</s-button><s-button key="buy">Buy Again</s-button></template><div class="desc"><s-paragraph><s-text strong="" style="font-size: 16px;">The content you submitted has the following error:</s-text></s-paragraph><s-paragraph><s-icon style="color: red;" type="close-circle"></s-icon>Your account has been frozen <a>Thaw immediately &gt;</a></s-paragraph><s-paragraph><s-icon style="color: red;" type="close-circle"></s-icon>Your account is not yet eligible to apply <a>Apply Unlock &gt;</a></s-paragraph></div></s-result></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789399677"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},w={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-result title=\"Great, we have done all the operations!\">\n            &lt;s-icon type=\"smile\" theme=\"twoTone\" slot=\"icon\" />\n            &lt;s-button type=\"primary\" slot=\"extra\">Next&lt;/s-button>\n        &lt;/s-result>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Result from 'santd/result';\nimport Button from 'santd/button';\nimport Icon from 'santd/icon';\nimport san from 'san';\n\nexport default {\n    components: {\n        's-result': Result,\n        's-icon': Icon,\n        's-button': Button\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="自定义-icon"><span>自定义 icon</span><a href="#自定义-icon" class="anchor">#</a></h4><p>自定义 icon。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-result":i.a,"s-icon":x.a,"s-button":p.a},template:'<div><s-result title="Great, we have done all the operations!"><s-icon type="smile" theme="twoTone" slot="icon"></s-icon><s-button type="primary" slot="extra">Next</s-button></s-result></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1610789399681"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};e.default=o.a.defineComponent({components:{desc:c,success:l,warning:r,readme:a,info:m,access:d,notfound:u,wrong:h,icon:w,custom:b},template:"\n        <div>\n            <desc/>\n            <success/>\n            <info/>\n            <warning/>\n            <access/>\n            <notfound/>\n            <wrong/>\n            <custom/>\n            <icon/>\n            <readme/>\n        </div>\n    "})}}]);