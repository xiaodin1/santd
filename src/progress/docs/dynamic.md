<text lang="cn">
#### 动态展示
会动的进度条才是好进度条。
</text>

```html
<template>
    <div class="demo-dynamic">
        <s-progress percent="{{percent}}"/>
        <s-button-group>
            <s-button on-click="decline" icon="minus"></s-button>
            <s-button on-click="increase" icon="plus"></s-button>
        </s-button-group>
    </div>
</template>
<script>
import {Progress, Button} from 'santd';

export default {
    components: {
        's-button': Button,
        's-button-group': Button.Group,
        's-progress': Progress
    },
    initData() {
        return {
            percent: 0
        };
    },
    increase() {
        let percent = this.data.get('percent') + 10;
        if (percent > 100) {
            percent = 100;
        }
        this.data.set('percent', percent);
    },
    decline() {
        let percent = this.data.get('percent') - 10;
        if (percent < 0) {
            percent = 0;
        }
        this.data.set('percent', percent);
    }
}
</script>

<style>
.demo-dynamic .san-btn > span {
    margin-left: 0!important;
}
</style>
```
