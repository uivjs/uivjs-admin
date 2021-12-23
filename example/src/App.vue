<template>
  <div>
    <github-corners fixed target="__blank" size="51" zIndex="9999" href="https://github.com/uivjs/uivjs-admin" />
    <router-view />
  </div>
</template>
<style>
html {
  background-color: #f1f1f1;
}
</style>
<script>
import GithubCorners from '@uivjs/vue-github-corners';

export default {
  components: {
    GithubCorners,
  },
};
</script>
