const render = require("json-templater/string");

const mdTemplate = `<template>
<div class="md-box">
  {{content}}
</div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({

  components: {
    'demo-cs': {
      template:
        '<div class="demo-code">' +
          '<div v-html="content"></div>' +
          '<div v-if="show" class="demo-code__content">' +
            '<slot></slot>' +
          '</div>' +
          '<div @click="handleShow" class="demo-code__button">{{ show ? "收起" : "展开" }}</div>' +
        '</div>',
      props: {
        content: {
          type: String,
          default: "",
        }
      },
      setup () {
        const show = ref(false);
        function handleShow() {
          show.value = !show.value;
        }
        return {
          show,
          handleShow
        }
      }
    }
  },

  setup() {
    return {}
  },
})
</script>
`;

function mdToVue(content) {
  // 代码
  content = content.replace(
    /^<h3(.*)>(.*)<\/h3>\n<pre><code(.*)>(.*)\n?(.*)<\/code><\/pre>$/gm,
    "<div class='code-box'><h3>$2</h3><demo-cs content='$4'>$4</demo-cs></div>"
  );
  // table
  content = content.replace(
    /^<h3(.*)>(.*)<\/h3>\n<table>(((.*)\n?(.*))*)<\/table>$/gm,
    "<div class='code-box'><h3>$2</h3><table>$3</table></div>"
  );
  return content;
}
function run (content) {
  /**
   * 处理格式
   */
  const contentVue = mdToVue(content);
  // 插入vue文件
  const html = render(mdTemplate, {
    content: contentVue
  });
  return html;
};

module.exports = run
