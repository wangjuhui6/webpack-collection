import markdownIt from 'markdown-it';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import './index.less'

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    const { value } = hljs.highlightAuto(str)
    return `<pre v-pre><code>${value}</code></pre>`
  }
});

md.use(function (e) {
  const fence = e.renderer.rules.fence
  e.renderer.rules.fence = (...args) => {
    const rawCode = fence(...args)
    return `<div class="language-code">${rawCode}</div>`
  }
})

function format (content) {
  let group = content
    .replace(/<h3/g, ':::<h3')
    .replace(/<h2/g, ':::<h2')
    .split(':::')

  return group.map(fragment => {
    if (fragment.indexOf('<h3') !== -1) {
      return `<div class="card">${fragment}</div>`
    }
    return fragment
  }).join('')
}

export function render (content) {
  return format(md.render(content))
}
