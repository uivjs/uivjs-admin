<template>
<div>
  <github-corners fixed target="__blank" size="65" zIndex="9999" href="https://uivjs.github.io/uivjs-admin" />
  <router-view />
</div>
</template>
<style>
html {
  background-color: #F1F1F1;
}
</style>
<script>
import GithubCorners from '@uivjs/vue-github-corners';

export default {
  components: {
    GithubCorners
  }
};
</script>