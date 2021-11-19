import { defineComponent, defineCustomElement, h } from 'vue'

// const MyVueElement = defineCustomElement({
//   // 在此提供正常的 Vue 组件选项
//   props: {},
//   emits: {},
//   template: `<h4>wwww</h4>`,
//   // defineCustomElement 独有特性: CSS 会被注入到隐式根 (shadow root) 中
//   styles: [`/* inlined css */`]
// })

// customElements.define('v-login', MyVueElement)

// export default {
//   // 在此提供正常的 Vue 组件选项
//   props: {},
//   emits: {},
//   template: `<h4>wwww</h4>`,
//   // defineCustomElement 独有特性: CSS 会被注入到隐式根 (shadow root) 中
//   // styles: [`/* inlined css */`]
// };

// const app = createApp({});
// app.component('v-login', {
//   props: ['title'],
//   template: `<h4>{{ title }}</h4>`
// });

// // app.mount('#v-login');

// export default app

// const NotFoundComponent = { template: '<p>Page not found</p>' }


// const MyVueElement = defineCustomElement({
//   // 在此提供正常的 Vue 组件选项
//   props: {},
//   emits: {},
//   components: {
//     NotFoundComponent
//   },
//   // template: `
//   //   <div>特效师</div>
//   // `,

//   // defineCustomElement 独有特性: CSS 会被注入到隐式根 (shadow root) 中
//   styles: [`/* inlined css */`]
// })

// customElements.define('my-vue-element', MyVueElement)



// export default defineComponent({
//   name: 'Login',
//   template: `
//     <div>特效师</div>
//   `,
// });


export default defineComponent({
  name: 'Login',
  render() {
    return (
      <div>test</div>
    );
  }
})