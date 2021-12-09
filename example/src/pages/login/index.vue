<template>
  <login title="请登录" @submit="submit" @reset="reset" />
</template>

<script>
import Login from '@uiv-admin/login';

export default {
  name: 'Home',
  components: {
    Login,
  },
  methods: {
    submit(e) {
      e.preventDefault()
      const data = new FormData(e.target);
      const value = Object.fromEntries(data.entries());
      console.group('submit')
      console.log(':==>', data)
      console.log(':==>', value)
      console.log(':==>', data.get('username'))
      console.log(':==>', data.get('password'))
      console.groupEnd()
    },
    reset(e) {
      console.dir(e.target)
      e.target.reset();
      const data = new FormData(e.target);
      const value = Object.fromEntries(data.entries());
      console.group('reset')
      console.log(':==>', data.get('username'))
      console.log(':==>', data.get('password'))
      // console.log(':==>', data.delete('username'))
      // console.log(':==>', data.delete('password'))
      console.log('>>>', value)
      console.dir(data)
      console.groupEnd()
    }
  },
}
</script>
