import Vue from 'vue'
Vue.component("OtherComponent", () => import("C:\\Users\\jlebr\\Desktop\\laravel-memos\\docs\\.vuepress\\components\\OtherComponent"))
Vue.component("demo-component", () => import("C:\\Users\\jlebr\\Desktop\\laravel-memos\\docs\\.vuepress\\components\\demo-component"))
Vue.component("Foo-Bar", () => import("C:\\Users\\jlebr\\Desktop\\laravel-memos\\docs\\.vuepress\\components\\Foo\\Bar"))
Vue.component("Badge", () => import("C:\\Users\\jlebr\\Desktop\\laravel-memos\\node_modules\\@vuepress\\theme-default\\global-components\\Badge"))
Vue.component("CodeBlock", () => import("C:\\Users\\jlebr\\Desktop\\laravel-memos\\node_modules\\@vuepress\\theme-default\\global-components\\CodeBlock"))
Vue.component("CodeGroup", () => import("C:\\Users\\jlebr\\Desktop\\laravel-memos\\node_modules\\@vuepress\\theme-default\\global-components\\CodeGroup"))


export default {}