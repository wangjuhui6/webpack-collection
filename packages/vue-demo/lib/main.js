import VChart from './VChart/index.vue'

const components = { VChart }

const install = function (Vue) {
  let VueS = Vue
  if (Vue.createApp) {
    VueS = Vue.createApp()
  }
  Object.keys(components).forEach((item) => {
    VueS.component(item, components[item])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { VChart, install }

export default {
  install,
}
