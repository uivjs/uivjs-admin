<template>
  <login title="请登录" :username="username" password="wsdW23" @submit="submit" ref="login" />
</template>

<script>
import { defineComponent } from 'vue';
import Login from '@uivjs/admin-login';

export default defineComponent({
  components: {
    Login,
  },
  data() {
    return {
      username: 'admin',
    }
  },
  methods: {
    submit(e) {
      // e.preventDefault()
      const data = new FormData(e.target);
      const value = Object.fromEntries(data.entries());
      console.group('submit')
      console.log(':=1ref=>', this.refs)
      console.log(':=2ref=>', this.$refs.login.bgURL)
      // console.log(':=ref=>', )
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
      console.log('>>>', value)
      console.dir(data)
      console.groupEnd()
    }
  },
});
</script>
