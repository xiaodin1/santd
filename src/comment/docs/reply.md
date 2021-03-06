<text lang="cn">
#### 回复框
评论编辑器组件提供了相同样式的封装以支持自定义评论编辑器。
</text>

```html
<template>
    <div>
        <s-pcomment s-for="item in list">
            <p slot="content">{{item.value}}</p>
        </s-pcomment>
        <s-comment>
            <s-avatar slot="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544096149211&di=2a2a049606dae06d29593fbfb48e5301&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F8c1001e93901213fce85790251e736d12e2e95bd.jpg"  alt="Han Solo"/>
            <s-form slot="content">
                <s-form-item prop="name">
                    <s-textarea rows="{{4}}" on-textareaBlur="onBlur"></s-textarea>
                </s-form-item>
                <s-form-item>
                    <s-button type="primary" on-click="handleClick">Add Comment</s-button>
                </s-form-item>
            </s-form>
        </s-comment>
    </div>
</template>
<script>
import san from 'san';
import moment from 'moment';
import {Comment, Icon, Avatar, Form, Button, Input} from 'santd';

const pComment = san.defineComponent({
    template: `
        <template>
            <s-comment>
                <s-avatar slot="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544096149211&di=2a2a049606dae06d29593fbfb48e5301&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F8c1001e93901213fce85790251e736d12e2e95bd.jpg"  alt="Han Solo"/>
                <a slot="author">Han Solo</a>
                <slot slot="content" name="content"/>
                <span slot="datetime">{{datetime}}</span>
                <slot/>
            </s-comment>
        </template>
    `,
    components: {
        's-comment': Comment,
        's-icon': Icon,
        's-avatar': Avatar
    },
    initData() {
        return {
            datetime: moment().fromNow()
        };
    }
});

export default {
    components: {
        's-comment': Comment,
        's-avatar': Avatar,
        's-form': Form,
        's-form-item': Form.FormItem,
        's-button': Button,
        's-textarea': Input.TextArea,
        's-pcomment': pComment
    },
    initData() {
        return {
            list: []
        };
    },
    handleClick() {
        this.data.push('list', {value: this.data.get('value')});
    },
    onBlur(value) {
        this.data.set('value', value);
    }
}
</script>
```
