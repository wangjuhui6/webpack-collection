<template>
  <div style="padding: 30px; background: #f4f4f4">
    <div v-html="b"></div>
  </div>
</template>

<script setup lang="ts">
import { render } from "@wjh/markdown-highlight";

const a = `
  # h1

  ## h2

  ### h3
  \`\`\`js
    console.log(111)
    const a = [1, 2, 'this']
  \`\`\`

  ### 代码
  \`\`\`vue
    <template>
        <div>{{ a }}</div>
    </template>
\`\`\`

### 1

|字段名|类型|默认值|描述|
|---|---|---|---|
|current|\`number\`|-|当前流转节点|
|data|\`array\`|-|数据|
`;

const b = render(a);
</script>

<style lang="less" scoped></style>
