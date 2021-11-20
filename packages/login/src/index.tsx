import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'Login',
  props: {
    title: {
      type: String,
      defalut: 'title'
    }
  },
  setup(props) {
    console.log(props)
    return {
      ...props
    }
  },
  render() {
    const { title } = this;
    console.log('this:', this)
    return (
      <div>test {title}</div>
    );
  }
})