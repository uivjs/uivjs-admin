import { defineComponent, h } from 'vue'

export const BaseLayout =  defineComponent({
  name: 'base-layout',
  props: {},
  setup() {
    return () => {
      return (
        <div class="uiv-base-layout-wrapper">
          <div>Base2 Layout</div>
          <router-view></router-view>
        </div>
      );
    }
  }
});