import { defineComponent, h } from 'vue'

export const BaseLayout =  defineComponent({
  name: 'BaseLayout',
  props: {},
  render() {
    return (
      <div>
        <div>Base Layout</div>
        <router-view></router-view>
      </div>
    );
  }
});